# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create({username: "user1", password: 123456, profileUrl: "https://www.filepicker.io/api/file/95ittMOURGiaDqsjgGB9"})
Blog.create({user_id: 1, title: "blog 1"})

User.create({username: "user2", password: 123456, profileUrl: "https://www.filepicker.io/api/file/95ittMOURGiaDqsjgGB9"})
Blog.create({user_id: 2, title: "blog 2"})

User.create({username: "user3", password: 123456, profileUrl: "https://www.filepicker.io/api/file/95ittMOURGiaDqsjgGB9"})
Blog.create({user_id: 3, title: "blog 3"})

User.create({username: "user4", password: 123456, profileUrl: "https://www.filepicker.io/api/file/95ittMOURGiaDqsjgGB9"})
Blog.create({user_id: 4, title: "blog 4"})

User.create({username: "user5", password: 123456, profileUrl: "https://www.filepicker.io/api/file/95ittMOURGiaDqsjgGB9"})
Blog.create({user_id: 5, title: "blog 5"})

User.create({username: "user6", password: 123456, profileUrl: "https://www.filepicker.io/api/file/95ittMOURGiaDqsjgGB9"})
Blog.create({user_id: 6, title: "blog 6"})

User.create({username: "user7", password: 123456, profileUrl: "https://www.filepicker.io/api/file/95ittMOURGiaDqsjgGB9"})
Blog.create({user_id: 7, title: "blog 7"})

User.create({username: "user8", password: 123456, profileUrl: "https://www.filepicker.io/api/file/95ittMOURGiaDqsjgGB9"})
Blog.create({user_id: 8, title: "blog 8"})

User.create({username: "user9", password: 123456, profileUrl: "https://www.filepicker.io/api/file/95ittMOURGiaDqsjgGB9"})
Blog.create({user_id: 9, title: "blog 9"})

User.create({username: "user10", password: 123456, profileUrl: "https://www.filepicker.io/api/file/95ittMOURGiaDqsjgGB9"})
Blog.create({user_id: 10, title: "blog 10"})

User.create({username: "user11", password: 123456, profileUrl: "https://www.filepicker.io/api/file/95ittMOURGiaDqsjgGB9"})
Blog.create({user_id: 11, title: "blog 11"})

User.create({username: "user12", password: 123456, profileUrl: "https://www.filepicker.io/api/file/95ittMOURGiaDqsjgGB9"})
Blog.create({user_id: 12, title: "blog 12"})


Post.create({user_id: 1, blog_id: 1, imageUrl: "https://www.filepicker.io/api/file/85Aoc9rdTzC5aGEw9xnj", imagebody: "As students advance, to improve writing skills they need in-depth support. They need to organize their thoughts and learn to clearly communicate their ideas in writing.

", attr: "Image"})
Post.create({user_id: 1, blog_id: 1, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 2, blog_id: 2, videoUrl: "https://www.filepicker.io/api/file/sGmBykE9Rqmd70AZA9Lf", videobody: "newbody", attr: "Video"})
Post.create({user_id: 3, blog_id: 3, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 3, blog_id: 3, videoUrl: "https://www.filepicker.io/api/file/sGmBykE9Rqmd70AZA9Lf", videobody: "newbody", attr: "Video"})
Post.create({user_id: 3, blog_id: 3, songUrl: "https://www.filepicker.io/api/file/Z1TbrCKyQpi20OUjGvqV", songbody: "newsong", attr: "Song"})
Post.create({user_id: 3, blog_id: 3, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, title: "newtitle", body: "Paragraph Punch provides fifteen guided writing prompts. Each unit concentrates on a specific type of paragraph - based on reasons, details, example, cause and effects, or sequence. Here are the topics of each writing prompt:", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, imageUrl: "https://www.filepicker.io/api/file/85Aoc9rdTzC5aGEw9xnj", imagebody: "newbody", attr: "Image"})
Post.create({user_id: 4, blog_id: 4, title: "newtitle", body: "Paragraph Punch takes users through the process of writing a basic paragraph. From pre-set writing prompts users develop an idea and write their own topic sentence, body, and a conclusion. The site provides online interactive exercises that guide users step by step through pre-writing, writing, organizing, editing, rewriting, and publishing.", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, songUrl: "https://www.filepicker.io/api/file/Z1TbrCKyQpi20OUjGvqV", songbody: "newsong", attr: "Song"})
Post.create({user_id: 5, blog_id: 5, songUrl: "https://www.filepicker.io/api/file/Z1TbrCKyQpi20OUjGvqV", songbody: "newsong", attr: "Song"})
Post.create({user_id: 5, blog_id: 5, title: "System Requirements Paragraph Punch works on any operating system (Win, Mac, Linux) supporting one of many popular web browsers. Recommended web browsers are Firefox 2.0+, Internet Explorer 6,7, and Safari 3. A screen display of 1024 x 768 or larger is suggested. Version Comparison The ability to save written work is disabled in the Paragraph Punch demo. Users of the complete online edition of the program may save and resume work. Also, the school version of Paragraph Punch automatically saves pupil work in an online portfolio accessible to teachers.", body: "After making a writing input, students' should press Enter or click the OK button only once. A slow Internet connection may cause the site to take extra time to move to the next step. Pressing these buttons repeatedly will lead to errors, eventually causing students to lose their work.", attr: "Text"})
Post.create({user_id: 5, blog_id: 5, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 5, blog_id: 5, imageUrl: "https://www.filepicker.io/api/file/85Aoc9rdTzC5aGEw9xnj", imagebody: "newbody", attr: "Image"})
Post.create({user_id: 6, blog_id: 6, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 6, blog_id: 6, imageUrl: "https://www.filepicker.io/api/file/bBoYJuIRiqyfnkWZ5UEi", imagebody: "newbody", attr: "Image"})
Post.create({user_id: 7, blog_id: 7, title: "newtitle", body: "Our most popular program for this purpose is Paragraph Punch. The program helps students develop their paragraph writing skills. Students learn how to write an effective paragraph-through reasons, details, sequence, example, and cause and effects. The software is designed for students in grades 5 through 10. ", attr: "Text"})
Post.create({user_id: 7, blog_id: 7, videoUrl: "https://www.filepicker.io/api/file/sGmBykE9Rqmd70AZA9Lf", videobody: "newbody", attr: "Video"})
Post.create({user_id: 8, blog_id: 8, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 9, blog_id: 9, imageUrl: "https://www.filepicker.io/api/file/85Aoc9rdTzC5aGEw9xnj", imagebody: "newbody", attr: "Image"})
Post.create({user_id: 9, blog_id: 9, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 9, blog_id: 9, videoUrl: "https://www.filepicker.io/api/file/sGmBykE9Rqmd70AZA9Lf", videobody: "newbody", attr: "Video"})
Post.create({user_id: 9, blog_id: 9, title: "newtitle", body: "newbody", attr: "Text"})
Post.create({user_id: 10, blog_id: 10, imageUrl: "https://www.filepicker.io/api/file/bBoYJuIRiqyfnkWZ5UEi", imagebody: "newbody", attr: "Image"})
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
