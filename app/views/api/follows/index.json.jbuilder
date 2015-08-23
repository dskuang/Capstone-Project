json.followees do
  json.array! @followees do |followee|
    json.extract!(
      followee,
      :id,
      :username,
      :created_at
    )
  end
end
json.followers do
  json.array! @followers do |follower|
    json.extract!(
      follower,
      :id,
      :username,
      :created_at
    )

  end
end
