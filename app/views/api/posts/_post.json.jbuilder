json.extract!(
  post,
  :title,
  :blog_id,
  :id,
  :body,
  :user_id,
  :attr,
  :quotesource,
  :quotetitle,
  :linkurl,
  :linkbody,
  :imagebody,
  :imageUrl,
  :songUrl,
  :songbody,
  :videoUrl,
  :videobody

)


json.extract!(
  post.user,
  :username
)



json.tags do
  json.array! post.tags do |tag|
    json.partial!("api/tags/tag", tag: tag)
  end
end

json.notes do
  json.array! post.notes do |note|
    json.partial!("api/notes/note", note: note)
  end
end


follow_id = Follow.find_follow_by_user(current_user.id, post.user_id)[0]
follow_id = follow_id ? follow_id.id : nil

json.follow_relation_id follow_id

like_id = post.likes.select { |like| like.user_id == current_user.id }[0]
# like_id = Like.find_like_by_user(current_user.id, post.id)[0]
like_id = like_id ? like_id.id : nil

json.like_relation_id like_id
