json.extract!(
  user,
  :id,
  :username,
  :profileUrl

)

json.extract!(
  user.blog,
  :title
)
