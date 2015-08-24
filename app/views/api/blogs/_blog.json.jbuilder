json.extract!(
  blog,
  :id,
  :title,
  :user_id
)

json.extract!(
  blog.user,
  :username,
  :profileUrl

)

follow_id = Follow.find_follow_by_user(current_user.id, blog.user_id)[0]
follow_id = follow_id ? follow_id.id : nil

json.follow_relation_id follow_id
