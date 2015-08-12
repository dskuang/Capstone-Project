json.extract!(
  post,
  :title,
  :blog_id,
  :id,
  :body,
  :user_id
)

id = Follow.find_follow_by_user(current_user.id, post.user_id)[0]
id = id ? id.id : nil

json.follow_relation_id id


json.extract!(
    post.user,
    :username
)

# if (current_user.followees.include?(post.user))
#   json.followState "followed"
# else
#   json.followState "unfollowed"
# end
