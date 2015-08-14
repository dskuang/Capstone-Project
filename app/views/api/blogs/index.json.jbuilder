
json.array! @blogs do |blog|
  json.extract!(
    blog,
    :id,
    :title,
    :user_id
  )
end
