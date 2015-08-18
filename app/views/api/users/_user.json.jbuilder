json.extract!(
  user,
  :id,
  :username,
  :profileUrl

)
json.blog do
  json.extract!(
    user.blog,
    :id,
    :title,
    :user_id
  )
end
