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
  :linkbody
)

json.tags do
  json.array! post.tags do |tag|
    json.partial!("api/tags/tag", tag: tag)
  end
end

follow_id = Follow.find_follow_by_user(current_user.id, post.user_id)[0]
follow_id = follow_id ? follow_id.id : nil

json.follow_relation_id follow_id

like_id = Like.find_like_by_user(current_user.id, post.id)[0]
like_id = like_id ? like_id.id : nil

json.like_relation_id like_id

json.extract!(
    post.user,
    :username
)

# if (current_user.followees.include?(post.user))
#   json.followState "followed"
# else
#   json.followState "unfollowed"
# end
