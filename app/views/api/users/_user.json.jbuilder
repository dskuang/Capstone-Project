json.extract!(
  user,
  :id,
  :username,
  :profileUrl,
  :firstname,
  :lastname,
  :city,
  :state

)
json.blog do
  json.extract!(
    user.blog,
    :id,
    :title,
    :user_id
  )
end
