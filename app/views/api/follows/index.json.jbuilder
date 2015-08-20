json.followees do
  json.array! @followees do |followee|
    json.extract!(
      followee,
      :id,
      :username
    )
  end
end
json.followers do
  json.array! @followers do |follower|
    json.extract!(
      follower,
      :id,
      :username
    )

  end
end
