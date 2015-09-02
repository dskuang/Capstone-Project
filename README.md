# Stumblr

[here]: http://www.stumblr.xyz


Stumblr is a blogging and content-sharing website inspired by Tumblr built
with Backbone.js on rails. To view this app, please click [here].
Users can:

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create blogs
- [x] Create blog posts
- [x] View blogs and posts
- [x] View a feed
- [x] Create Notes
- [x] Follow users
- [x] Reblog posts
- [x] Like posts
- [x] Tag blog posts
- [x] Search for blogs by title


The main functionalities include user authentication, creating posts with
different types of file uploads based on Filepicker API, trending blogs and posts,
reblogging, and following/liking capabilities. Notifications are ordered based
on created at using a custom quicksort implementation.

Since most of the data is held in the posts, the sql queries were optimized by
preloading tables to improve load and parsing of mass posts. The explore page h
as dynamically re-positioned stacking posts based on changing window and margin
width.Dynamically re-positioned stacked DOM elements in real time based on
changing window and margin width to remove any unnecessary white space.

The front page allows a user to either sign up for an account or click on the
guest log in button.

![start]

The user is automatically redirected to his or her feed where the user will
be able to to see his or her own posts along with the posts the user is
following. The user will also be able to make a new post by clicking on
one of the top icons.

![makePost]

Furthermore, a user can make a post from anywhere on the map by clicking
on the blue pencil logo in the top right corner which will redirect the user
back to the feed and open a new post form.

![makePostA]

Full following and liking functionality is available, which can be seen
below.

![like_follow]

To check out more features such as trending blogs, trending tags,
reblogging,  etc. Check out stumblr now!






---------------------------------------------------------------------------------

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Blog/Newsfeed/Posts creation (~2 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create blogs using
a simple text form in a Rails view. This is a basic functionality of a newsfeed.
Users will also be able to see posts on their own newsfeed page and the index page
as well. The most important part of this phase will be to have my API routes
ready to serve blog and post data as JSON and adding a Backbone models
and collections for fetching data.

[Details][phase-one]

### Phase 2: Follows/Reblog/Likes (~2 days)
With the basic functionality of newsfeed for users and the index newsfeed setup,
I will create a follows relation so that users can follow other users. This will
allow the users to show other people's blog posts in their newsfeed. Since this
functionality is similar to reblogging. I will also attempt to allow users to
post a blog on their own blog by clicking on a reblog button, and to also
like a blog with a like button. At this point, I don't believe I will have any
editing functionality done. However, with this completed, the general
functionality of tumblr is done.

[Details][phase-two]

### Phase 3: Editing and Setting Up Different Posts (~1-2 day)
I plan to add functionality to the postforms so
that users can edit blogs and also edit blogs that are reblogged. I will also
allow users to submit different types of blogs. This includes images, quotes,
links, and perhaps video. In order to do this I may have to have different
types of collections of posts to hold different models ex. textPostModel,
photoPostModel, quotePostModel. I may be able to store the different types
as one model if I allow a model to have all types of attributes but allow
everything except title to be null. This way a post will only have certain
attributes once entered in; however, it will have a type attribute so that it
knows what it is.

[Details][phase-three]

### Phase 4:   (~1 day)
I'll create functionality to create taggings in posts. This will allow users to
find all posts related to the tag when he or she clicks on the tag. PostForm
will now have an area for tag input.

[Details][phase-four]

### Phase 5: Searching for Blogs and Posts (~2 days)
I'll need to add `search` routes to both the Blogs and Posts controllers. On the
Backbone side, there will be a `SearchResults` composite view which has `BlogsIndex`
and `PostsIndex` subviews. These views will use plain old `blogs` and `posts`
collections, but they will fetch from the new `search` routes.

[Details][phase-five]

### Bonus Features (TBD

- [x] pop-out different user showpage
- [x] Pagination/infinite scroll
- [x] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[heroku-link]: www.stumblr.xyz
[start]: ./photos/start.gif
[like_follow]: ./photos/like_follow.gif
[makePost]: ./photos/makingAPost.gif
[makePostA]: ./photos/makePostAnywhere.gif
