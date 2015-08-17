# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create({username: "user1", password: 123456})
Blog.create({user_id: 1, title: "blog 1"})

User.create({username: "user2", password: 123456})
Blog.create({user_id: 2, title: "blog 2"})

User.create({username: "user3", password: 123456})
Blog.create({user_id: 3, title: "blog 3"})

User.create({username: "user4", password: 123456})
Blog.create({user_id: 4, title: "blog 4"})

User.create({username: "user5", password: 123456})
Blog.create({user_id: 5, title: "blog 5"})

User.create({username: "user6", password: 123456})
Blog.create({user_id: 6, title: "blog 6"})

User.create({username: "user7", password: 123456})
Blog.create({user_id: 7, title: "blog 7"})

User.create({username: "user8", password: 123456})
Blog.create({user_id: 8, title: "blog 8"})

User.create({username: "user9", password: 123456})
Blog.create({user_id: 9, title: "blog 9"})

User.create({username: "user10", password: 123456})
Blog.create({user_id: 10, title: "blog 10"})

User.create({username: "user11", password: 123456})
Blog.create({user_id: 11, title: "blog 11"})

User.create({username: "user12", password: 123456})
Blog.create({user_id: 12, title: "blog 12"})


Post.create({user_id: 1, blog_id: 1, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 1, blog_id: 1, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 2, blog_id: 2, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 3, blog_id: 3, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 3, blog_id: 3, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 3, blog_id: 3, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 3, blog_id: 3, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 5, blog_id: 5, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 5, blog_id: 5, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 5, blog_id: 5, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 5, blog_id: 5, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 6, blog_id: 6, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 6, blog_id: 6, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 7, blog_id: 7, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 7, blog_id: 7, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 8, blog_id: 8, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 9, blog_id: 9, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 9, blog_id: 9, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 9, blog_id: 9, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 9, blog_id: 9, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 10, blog_id: 10, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 11, blog_id: 11, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 11, blog_id: 11, title: "newtitle", body: "newbody", attr: "Text"})


#like creation
10.times do |num|
  Like.create({user_id: (num + 1), post_id: 1})
end

10.times do |num|
  Like.create({user_id: (num + 1), post_id: 3})
end

10.times do |num|
  Like.create({user_id: (num + 1), post_id: 4})
end

8.times do |num|
  Like.create({user_id: (num + 1), post_id: 8})
end

8.times do |num|
  Like.create({user_id: (num + 1), post_id: 14})
end

8.times do |num|
  Like.create({user_id: (num + 1), post_id: 18})
end

10.times do |num|
  Like.create({user_id: (num + 1), post_id: 20})
end

10.times do |num|
  Like.create({user_id: (num + 1), post_id: 22})
end

4.times do |num|
  Like.create({user_id: (num + 1), post_id: 24})
end

4.times do |num|
  Like.create({user_id: (num + 1), post_id: 25})
end

#note creation
like_id = 1
10.times do |num|
  Note.create({post_id: 1, like_id: like_id, note_text: "liked"})
  like_id += 1
end

10.times do |num|
  Note.create({post_id: 3, like_id: like_id, note_text: "liked"})
  like_id += 1
end

10.times do |num|
  Note.create({post_id: 4, like_id: like_id, note_text: "liked"})
  like_id += 1
end

8.times do |num|
  Note.create({post_id: 8, like_id: like_id, note_text: "liked"})
  like_id += 1
end

8.times do |num|
  Note.create({post_id: 14, like_id: like_id, note_text: "liked"})
  like_id += 1
end



8.times do |num|
  Note.create({post_id: 18, like_id: like_id, note_text: "liked"})
  like_id += 1
end

10.times do |num|
  Note.create({post_id: 20, like_id: like_id, note_text: "liked"})
  like_id += 1
end

10.times do |num|
  Note.create({post_id: 22, like_id: like_id, note_text: "liked"})
  like_id += 1
end

4.times do |num|
  Note.create({post_id: 24, like_id: like_id, note_text: "liked"})
  like_id += 1
end

4.times do |num|
  Note.create({post_id: 25, like_id: like_id, note_text: "liked"})
  like_id += 1
end
