json.array!(@blogs) do |blog|
  json.(blog, *Blog.column_names)
  # Hidden N+1 query!
  # json.followed(current_user.follows?(user))
end
