if @bool
  json.models do
    json.array! @posts, partial: 'post', as: :post
  end
  json.page params[:page] || 1
  json.total_pages @posts.total_pages
else
  json.array! @posts, partial: 'post', as: :post
end
