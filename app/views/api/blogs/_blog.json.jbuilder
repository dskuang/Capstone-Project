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
#
# if bool
#     json.models do
#     json.posts do
#       json.array! posts do |post|
#           json.partial!("api/posts/post", post: post)
#       end
#     end
#   end
#   json.page params[:page] || 1
#   json.total_pages posts.total_pages
# else
#   json.posts do
#     json.array! posts do |post|
#         json.partial!("api/posts/post", post: post)
#     end
#   end
# end
