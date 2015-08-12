json.extract!(
  post,
  :title,
  :blog_id,
  :id,
  :body,
)

json.followState current_user.followers.include?(post.user)

json.extract!(
    post.user, :username
)
