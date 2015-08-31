if @bool
  json.models do
    json.array! @posts, partial: 'post', as: :post
  end
  json.page params[:page] || 1
  json.total_pages @posts.total_pages
elsif @tagpost
  json.array! @posts, partial: 'tagpost', as: :post
else
  json.array! @posts, partial: 'post', as: :post
end
