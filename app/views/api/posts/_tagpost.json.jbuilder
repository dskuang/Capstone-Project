json.extract!(
  post,
  :title,
  :blog_id,
  :id,
  :body,
  :user_id,
  :attr,
  :quotesource,
  :quotetitle,
  :linkurl,
  :linkbody,
  :imagebody,
  :imageUrl,
  :songUrl,
  :songbody,
  :videoUrl,
  :videobody,
  :created_at

)


json.extract!(
  post.user,
  :username,
  :profileUrl
)



json.tags do
  json.array! post.tags do |tag|
    json.extract!(
      tag,
      :id,
      :label
    )
  end
end
