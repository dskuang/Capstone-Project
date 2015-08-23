# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create({username: "myUser", password: 123456, profileUrl: "https://www.filepicker.io/api/file/95ittMOURGiaDqsjgGB9"})
Blog.create({user_id: 1, title: "myBlog"})

User.create({username: "seamoreskies25", password: 123456, profileUrl: "https://www.filepicker.io/api/file/OyOD74lpT9OqngDh1MKy"})
Blog.create({user_id: 2, title: "I Just Want You"})

User.create({username: "lawdylawdylawd", password: 123456, profileUrl: "https://www.filepicker.io/api/file/mPQjUD3Qp23yGOjFax4A"})
Blog.create({user_id: 3, title: "Love me?"})

User.create({username: "hoaxcoaxy", password: 123456, profileUrl: "https://www.filepicker.io/api/file/xrQ6DW54TpSUW0FXf6ys"})
Blog.create({user_id: 4, title: "Give Me Another Chance"})

User.create({username: "justintimbawhat", password: 123456, profileUrl: "https://www.filepicker.io/api/file/n5J6ZlXHSL2D8DuacC2D"})
Blog.create({user_id: 5, title: "LakeHeadOrArrowHead"})

User.create({username: "hereIAm", password: 123456, profileUrl: "https://www.filepicker.io/api/file/fSHZQU5QxC213Rfbg1yg"})
Blog.create({user_id: 6, title: "DropitlowLikeIt'sHot"})

User.create({username: "WorkingAsdaSlave", password: 123456, profileUrl: "https://www.filepicker.io/api/file/yS5UlSvbQSmaqCE6bw9X"})
Blog.create({user_id: 7, title: "Justification"})

User.create({username: "Hypeman15", password: 123456, profileUrl: "https://www.filepicker.io/api/file/ymBMuanLSVCr8N6w9Ob3"})
Blog.create({user_id: 8, title: "Living The Life Abroad"})

User.create({username: "Jackson's Here", password: 123456, profileUrl: "https://www.filepicker.io/api/file/eCOrLF4RT6EulSzz3ImR"})
Blog.create({user_id: 9, title: "WildPonders"})

User.create({username: "JasonBlack", password: 123456, profileUrl: "https://www.filepicker.io/api/file/7QjtNdn9RjSkWt30TYve"})
Blog.create({user_id: 10, title: "LivingALie"})

User.create({username: "Queenadie", password: 123456, profileUrl: "https://www.filepicker.io/api/file/2J3s9rDyQamKHgxlzhTQ"})
Blog.create({user_id: 11, title: "Kingdead"})

User.create({username: "NowYouSeeMe", password: 123456, profileUrl: "https://www.filepicker.io/api/file/oHchscK1TbSeohqqPJRZ"})
Blog.create({user_id: 12, title: "NowYouDont"})

User.create({username: "TeamWerkIt", password: 123456, profileUrl: "https://www.filepicker.io/api/file/BK4QK5yoQFesaqRaYZIP"})
Blog.create({user_id: 13, title: "Now Team Just You"})

User.create({username: "aaaaRon12", password: 123456, profileUrl: "https://www.filepicker.io/api/file/MKyuPsTAqyRu8jWSL8Og"})
Blog.create({user_id: 14, title: "What is Life?"})


Post.create({user_id: 1, blog_id: 1, imageUrl: "https://www.filepicker.io/api/file/85Aoc9rdTzC5aGEw9xnj", imagebody: "As students advance, to improve writing skills they need in-depth support. They need to organize their thoughts and learn to clearly communicate their ideas in writing.", attr: "Image"})
Post.create({user_id: 1, blog_id: 1, title: "An article (abbreviated art) is a word", body: "Articles specify grammatical definiteness of the noun, in some languages extending to volume or numerical scope. The articles in the English language are the and a/an, and (in certain contexts) some. 'An' and 'a' are modern forms of the Old English 'an', which in Anglian dialects was the number 'one' (compare 'on', in Saxon dialects) and survived into Modern Scots as the number 'ane'. Both 'on' (respelled 'one' by the Normans) and 'an' survived into Modern English, with 'one' used as the number and 'an' ('a', before nouns that begin with a consonant sound) as an indefinite article.", attr: "Text"})
Post.create({user_id: 2, blog_id: 2, videoUrl: "https://www.filepicker.io/api/file/sGmBykE9Rqmd70AZA9Lf", videobody: "This brings back the memories of everything I've ever seen.", attr: "Video"})
Post.create({user_id: 3, blog_id: 3, title: "In languages that employ articles, every common noun, with some exceptions, is expressed with a certain definiteness", body: "Every noun must be accompanied by the article, if any, corresponding to its definiteness, and the lack of an article (considered a zero article) itself specifies a certain definiteness. This is in contrast to other adjectives and determiners, which are typically optional. This obligatory nature of articles makes them among the most common words in many languages—in English, for example, the most frequent word is the", attr: "Text"})
Post.create({user_id: 3, blog_id: 3, videoUrl: "https://www.filepicker.io/api/file/sGmBykE9Rqmd70AZA9Lf", videobody: "That is more views in half a day than NASA's most popular video — a look at the majestic, icy plains of Pluto from the New Horizons probe — has ever received total.", attr: "Video"})
Post.create({user_id: 3, blog_id: 3, songUrl: "https://www.filepicker.io/api/file/Z1TbrCKyQpi20OUjGvqV", songbody: "NASA has nothing but love for One Direction after the boy band filmed the video for Drag Me Down at the the agency's Johnson Space Center in Houston.", attr: "Song"})
Post.create({user_id: 3, blog_id: 3, title: "How To Dress Well, aka Tom Krell", body: "hey so in june i popped up to toronto and made a video w my friends colin bergh (director) and johnny hockin (producer/editor) --- and got josh, drew, talvi and allegra to be my *band* for the day :) shouts to basia for the styling we all look lovely :+) took a while to get it all together but i made it to celebrate the first birthday of What Is This Heart? and to bring something sweet nd tender and cute to all the sweet people all over the world who support my music. love yall and i hope you enjoy PRECIOUS LOVE <3 <3 <3", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, title: "Doing the Right Thing.", body: "Award winning musician and LGBT advocate Tom Goss has recently released the video for his new song, ‘Breath and Sound’, that tells the story of three couples, who meet – and fall in love – through a moving dance sequence.‘Breath & Sound’ illustrates through lyrical dance that the act of falling in love and forming a relationship is the same for all couples – regardless of sexual orientation, gender or ethnicity.", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, title: "newtitle", body: "Paragraph Punch provides fifteen guided writing prompts. Each unit concentrates on a specific type of paragraph - based on reasons, details, example, cause and effects, or sequence. Here are the topics of each writing prompt:", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, imageUrl: "https://www.filepicker.io/api/file/c5lUNPHkSqpNP8SIT0Ww", imagebody: "My pet rat just turned 100. He's been with me through thick and thin and I can't love him enoguh for always being there for me. They say dogs man best friend. Well they're wrong.", attr: "Image"})
Post.create({user_id: 4, blog_id: 4, title: "Basic Understanding of Writing is Important", body: "Paragraph Punch takes users through the process of writing a basic paragraph. From pre-set writing prompts users develop an idea and write their own topic sentence, body, and a conclusion. The site provides online interactive exercises that guide users step by step through pre-writing, writing, organizing, editing, rewriting, and publishing.", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, title: "No girl wins: three ways women unlearn their love of video games", body: "“Video games are a boy thing,” my sister explains to me. “I feel like it’s a known fact. GameStop is a boy store. The commercials are for boys. It’s just something everyone knows.”My sister is 17. She runs a One Direction fan Twitter with 10,000 followers. She plans to major in fashion marketing. She’s a cheerleader. She is as close as anyone can get to what gaming’s sweaty fever dreams envision, desire, and shame as Girl.", attr: "Text"})
Post.create({user_id: 4, blog_id: 4, songUrl: "https://www.filepicker.io/api/file/Z1TbrCKyQpi20OUjGvqV", songbody: "Written by all three bandmates along with collaborator Josh Kear, “Long Stretch of Love” is about facing the challenge of keeping fires burning during the long haul of an extended relationship.", attr: "Song"})
Post.create({user_id: 5, blog_id: 5, songUrl: "https://www.filepicker.io/api/file/Z1TbrCKyQpi20OUjGvqV", songbody: "The song has a bold melodic hook that captures your attention immediately. As Haywood explains, the song began with an idea that Kear brought in that he had conceived on “this little tiny Appalachian instrument called a woodrow.” As Haywood explains, Kear had this riff for the song that “kinda had this Fleetwood Mac feel” with “huge drums kind of behind it, and that’s kind of the way we envisioned it when we went in to record. It really articulates the energy that we wanted for the record.” And when the band plays it live, he says, “it makes you wanna jump out of your skin” because “it just has this freight-train-coming-at-you” feeling.", attr: "Song"})
Post.create({user_id: 5, blog_id: 5, title: "System Requirements Paragraph Punch works on any operating system (Win, Mac, Linux) supporting one of many popular web browsers.", body: "After making a writing input, students' should press Enter or click the OK button only once. A slow Internet connection may cause the site to take extra time to move to the next step. Pressing these buttons repeatedly will lead to errors, eventually causing students to lose their work.", attr: "Text"})
Post.create({user_id: 5, blog_id: 5, title: "Lady Antebellum Turn Up the Heat in ‘Long Stretch of Love’ Video: Exclusive Premiere", body: "If you think you know Lady Antebellum, think again. Because in their new music video “Long Stretch of Love,” which premieres today (July 2) exclusively on CBS Radio station sites and Radio.com (watch below), the GRAMMY-winning trio is out of the cage. They stomp the stage, pour a couple of drinks and turn up the heat.", attr: "Text"})
Post.create({user_id: 5, blog_id: 5, imageUrl: "https://www.filepicker.io/api/file/KIvRyTvER8en5gwMXFHe", imagebody: "Tay would shake it off too", attr: "Image"})
Post.create({user_id: 6, blog_id: 6, title: "New York Times Article Archive", body: "Olympic sprint champion Florence Griffith Joyner died after suffering an epileptic seizure, according to autopsy results released Thursday, and her family and friends say they hope the findings will put to rest rumors that drug use contributed to her death. Griffith Joyner died last month in her sleep at age 38. Her husband, Al Joyner, bitterly criticized those who suggested that she took performance-enhancing drugs.", attr: "Text"})
Post.create({user_id: 6, blog_id: 6, imageUrl: "https://www.filepicker.io/api/file/Pk8buHpRgejm3QpQwb93", imagebody: "They say to fear the batman. I say to fear the dogman. The dogman says to fear his bark. What bark is there?", attr: "Image"})
Post.create({user_id: 7, blog_id: 7, title: "His 104 scores make his case", body: "Our most popular program for this purpose is Paragraph Punch. The program helps students develop their paragraph writing skills. Students learn how to write an effective paragraph-through reasons, details, sequence, example, and cause and effects. The software is designed for students in grades 5 through 10. ", attr: "Text"})
Post.create({user_id: 7, blog_id: 7, videoUrl: "https://www.filepicker.io/api/file/sGmBykE9Rqmd70AZA9Lf", videobody: "Speaking of jumping out of your skin, one of the video’s most striking images shows Kelley leaping through a pane of glass. Is this the band’s metaphor for taking a risk and leaping into unknown territory? For committing to something that’s more than a little scary? For…marriage, and what might lay beyond? Perhaps some or all of these things. But bottom line is, it fits right into the hook of the song and keeps the energy moving forward.", attr: "Video"})
Post.create({user_id: 8, blog_id: 8, title: "Brutal Murder by Teen-Age Girls Adds to Britons' Shock", body: "Two 17-year-old girls have been sentenced for torturing and butchering an elderly woman, less than three weeks after a pair of 10-year-olds were charged with murdering a toddler. Again, a troubled nation is asking, how could this happen? Edna Phillips, 70, was throttled with her dog's leash and stabbed or slashed 86 times. The mental images of the crime have shocked the nation just as the video pictures of little James Bulger being led to his death did last month.", attr: "Text"})
Post.create({user_id: 9, blog_id: 9, imageUrl: "https://www.filepicker.io/api/file/MQJ3rrgOTdmjxB0GH5xy", imagebody: "WOW DEM CATS ARE SO WILDDDDDDDDDDDD gotta love cats", attr: "Image"})
Post.create({user_id: 9, blog_id: 9, title: "Comaneci Confirms Suicide Attempt, Magazine Says", body: "Nadia Comaneci confirmed rumors that she tried to kill herself at age 15 by drinking bleach, according to Life magazine's March issue. Comaneci said she was hospitalized for two days and was glad because I didn't have to go to the gym, according to the magazine. It had been rumored, and the 1984 film Nadia indicated, that Comaneci attempted suicide at the height of her fame in 1977 after scoring perfect 10s in the Montreal Olympics in 1976. She had denied the rumors, however.", attr: "Text"})
Post.create({user_id: 9, blog_id: 9, videoUrl: "https://www.filepicker.io/api/file/sGmBykE9Rqmd70AZA9Lf", videobody: "A new video has been released featuring two same-sex dancing and kissing couples has been released.", attr: "Video"})
Post.create({user_id: 9, blog_id: 9, title: "Woman Gets 26 Years to Life in Plot to Kill Identical Twin", body: "An identical twin whose plot to kill her sister made headlines around the world sobbed uncontrollably Friday as a judge sentenced her to 26 years to life in prison. Despite her emotional, last-minute protest of innocence, Jeen Gina Han, 24, dubbed the evil twin, received the maximum sentence. It is obvious Miss Han is a danger to society, particularly her own family, said Orange County Superior Court Judge Eileen C. Moore. All of her family have been victims of her crimes.", attr: "Text"})
Post.create({user_id: 10, blog_id: 10, imageUrl: "https://www.filepicker.io/api/file/PH2Wx9NmSRiYjaCF2aAK", imagebody: "Cant Touch This", attr: "Image"})
Post.create({user_id: 11, blog_id: 11, title: "I HATE LIFE", body: "WHY CANT ANYONE JUST LOVE MEEEEEEEEE", attr: "Text"})
Post.create({user_id: 11, blog_id: 11, title: "have you ever seen the sky blue", body: "why is it that I only see red..", attr: "Text"})
Post.create({user_id: 11, blog_id: 11, imageUrl: "https://www.filepicker.io/api/file/OhSs2xYiSOuBRlH0wo9q", imagebody: "OMG ON FIREEEEEEEEEE. CAN I GET SOMEEE?", attr: "Image"})
Post.create({user_id: 7, blog_id: 7, songUrl: "https://www.filepicker.io/api/file/Z1TbrCKyQpi20OUjGvqV", songbody: "You lift me up, you bring me down", attr: "Song"})
Post.create({user_id: 7, blog_id: 7, songUrl: "https://www.filepicker.io/api/file/Z1TbrCKyQpi20OUjGvqV", songbody: "While Hillary Scott does feel the song relates to marriage, like Kelley she also feels it reflects their working relationship as well.", attr: "Song"})
Post.create({user_id: 1, blog_id: 1, videoUrl: "https://www.filepicker.io/api/file/sGmBykE9Rqmd70AZA9Lf", videobody: "Best Video Performance Space screens “HEAD,” a Connecticut-produced all-puppet horror movie on Friday, Aug. 28. The program starts at 8 PM and admission is $5.", attr: "Video"})
Post.create({user_id: 2, blog_id: 2, videoUrl: "https://www.filepicker.io/api/file/sGmBykE9Rqmd70AZA9Lf", videobody: "“HEAD” is Rated R, for gore, horror, four letter words and anything else you’d expect in a horror movie starring puppets, so we advise leaving the kids at home!", attr: "Video"})
Post.create({user_id: 3, blog_id: 3, videoUrl: "https://www.filepicker.io/api/file/sGmBykE9Rqmd70AZA9Lf", videobody: "The MTV Europe Music Award for Best Video initially awarded to Best Director, but in 1997 the category was renamed to Best Video. ", attr: "Video"})
Post.create({user_id: 4, blog_id: 4, videoUrl: "https://www.filepicker.io/api/file/sGmBykE9Rqmd70AZA9Lf", videobody: "In 2012, Psy became the first Asian artist and the first non-American act to win this after of four consecutive years of American winners.", attr: "Video"})
Post.create({user_id: 1, blog_id: 1, imageUrl: "https://www.filepicker.io/api/file/OhSs2xYiSOuBRlH0wo9q", imagebody: "OMG ON FIREEEEEEEEEE. CAN I GET SOMEEE?", attr: "Image"})
Post.create({user_id: 12, blog_id: 12, imageUrl: "https://www.filepicker.io/api/file/Ue5EshY2SPySMHjzEJWP", imagebody: "I need to read more. clearly.", attr: "Image"})
Post.create({user_id: 12, blog_id: 12, imageUrl: "https://www.filepicker.io/api/file/ifoeMwZRu6Is1rEPiL5U", imagebody: "Happiness is like pee. No one else can see it. And only you can feel it.", attr: "Image"})
Post.create({user_id: 13, blog_id: 13, imageUrl: "https://www.filepicker.io/api/file/Y4S47uOmRaGMYZqPSvXj", imagebody: "Can I rave one more time? ALl the memories I hold dear are in that one moment that will never come back.", attr: "Image"})
Post.create({user_id: 14, blog_id: 14, imageUrl: "https://www.filepicker.io/api/file/qIAGh9fiQkmFHsS5hsWO", imagebody: "Sometimes. I just want to be a happy ball with no worry in the world.", attr: "Image"})
Post.create({user_id: 14, blog_id: 14, imageUrl: "https://www.filepicker.io/api/file/m0JkxZjxRRKdtt6aSoPL", imagebody: "KIRBYS SO FLUFFY IM GONNA DIE", attr: "Image"})
Post.create({user_id: 14, blog_id: 14, imageUrl: "https://www.filepicker.io/api/file/0YqQ95brTeaPKrcyzxTx", imagebody: "my moneys on buu. Lezzbehonest. Hes got the weight along with the color.", attr: "Image"})
Post.create({user_id: 14, blog_id: 14, imageUrl: "https://www.filepicker.io/api/file/s2whLof9QAqR6ucTijso", imagebody: "Dragons are mans best friend", attr: "Image"})
Post.create({user_id: 14, blog_id: 14, quotetitle: "Anytime I feel lost, I pull out a map and stare. I stare until I have reminded myself that life is a giant adventure, so much to do, to see", quotesource: "-Angelina Jolie", attr: "Quote"})
Post.create({user_id: 1, blog_id: 1, quotetitle: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", quotesource: "-Marilyn Monroe", attr: "Quote"})
Post.create({user_id: 1, blog_id: 1, quotetitle: "Be yourself; everyone else is already taken.", quotesource: "-Oscar Wilde", attr: "Quote"})
Post.create({user_id: 2, blog_id: 2, quotetitle: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", quotesource: "-Bernard M. Baruch", attr: "Quote"})
Post.create({user_id: 2, blog_id: 2, quotetitle: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", quotesource: "- Albert Einstein", attr: "Quote"})
Post.create({user_id: 13, blog_id: 13, quotetitle: "ou've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.", quotesource: "-William W. Purkey", attr: "Quote"})
Post.create({user_id: 13, blog_id: 13, quotetitle: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", quotesource: "-Dr. Seuss", attr: "Quote"})
Post.create({user_id: 12, blog_id: 12, quotetitle: "A room without books is like a body without a soul.", quotesource: "-Marcus Tullius Cicero", attr: "Quote"})
Post.create({user_id: 14, blog_id: 14, quotetitle: "So many books, so little time.", quotesource: "-Frank Zappa", attr: "Quote"})




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
10.times do |num|
  Like.create({user_id: (num + 1), post_id: 23})
end
10.times do |num|
  Like.create({user_id: (num + 1), post_id: 27})
end
10.times do |num|
  Like.create({user_id: (num + 1), post_id: 28})
end
10.times do |num|
  Like.create({user_id: (num + 1), post_id: 29})
end
10.times do |num|
  Like.create({user_id: (num + 1), post_id: 30})
end
10.times do |num|
  Like.create({user_id: (num + 1), post_id: 31})
end
10.times do |num|
  Like.create({user_id: (num + 1), post_id: 32})
end
10.times do |num|
  Like.create({user_id: (num + 1), post_id: 33})
end
4.times do |num|
  Like.create({user_id: (num + 1), post_id: 34})
end
4.times do |num|
  Like.create({user_id: (num + 1), post_id: 35})
end
4.times do |num|
  Like.create({user_id: (num + 1), post_id: 36})
end
5.times do |num|
  Like.create({user_id: (num + 1), post_id: 37})
end
6.times do |num|
  Like.create({user_id: (num + 1), post_id: 38})
end
7.times do |num|
  Like.create({user_id: (num + 1), post_id: 39})
end

7.times do |num|
  Like.create({user_id: (num + 1), post_id: 40})
end

7.times do |num|
  Like.create({user_id: (num + 1), post_id: 41})
end

7.times do |num|
  Like.create({user_id: (num + 1), post_id: 42})
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

40.times do |num|
  Tag.create!(label: Faker::Address.city)
end

value = 1
20.times do |repeat|
  post_count = rand(50)
  post_count.times do |num|
    Tagging.create({post_id: num + 1, tag_id: repeat + 1})
  end
end

#11users
8.times do |num|
  Follow.create({followee_id: 1, follower_id: num + 2});
end

8.times do |num|
  Follow.create({followee_id: num + 2, follower_id: 1});
end
