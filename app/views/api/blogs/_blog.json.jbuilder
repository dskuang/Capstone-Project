json.extract!(
  blog,
  :title,
  :user_id
)

json.posts do
  json.array! posts do |post|
      json.partial!("api/posts/post", post: post)
  end
end