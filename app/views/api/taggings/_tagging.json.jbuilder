json.extract!(
  tagging,
  :id,
  :tag_id,
  :post_id
)

json.extract!(
  tagging.tag,
  :label
)
