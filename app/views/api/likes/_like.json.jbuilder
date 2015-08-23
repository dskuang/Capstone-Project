json.extract!(
  like,
  :id,
  :user_id,
  :post_id,
  :created_at,

)
json.post_user Post.find(like.post_id).user.username;


json.extract!(
  like.user,
  :username
)
