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
  :videobody,
  :created_at

)


json.extract!(
  post.user,
  :username,
  :profileUrl
)



json.tags do
  json.array! post.tags do |tag|
    json.extract!(
      tag,
      :id,
      :label
    )
  end
end

like_id = post.likes.select { |like| like.user_id == current_user.id }[0]
like_id = like_id ? like_id.id : nil

json.like_relation_id like_id
