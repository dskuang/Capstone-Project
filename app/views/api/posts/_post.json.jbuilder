json.extract!(
  post,
  :title,
  :blog_id,
  :id,
  :body,
  :user_id
)


json.follow_relation_id Follow.find_follow_by_user(current_user.id, post.user_id)


if (current_user.followees.include?(post.user))
  json.followState "followed"
else
  json.followState "unfollowed"
end

json.extract!(
    post.user,
    :username
)

# json.currentUser current_user.id
