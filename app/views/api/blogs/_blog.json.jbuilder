json.extract!(
  blog,
  :id,
  :title,
  :user_id
)

json.extract!(
  blog.user,
  :username
)


  json.posts do
    json.array! posts do |post|
        json.partial!("api/posts/post", post: post)
    end
  end
