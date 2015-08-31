# Stumblr



[heroku]: http://tumblrapplication.herokuapp.com/

## Minimum Viable Product
Tumblir is an app inspired by Tumblr built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create blogs
- [x] Create blog posts
- [x] View blogs and posts
- [x] View a feed
- [x] Follow Users
- [x] Follow users
- [x] Reblog posts
- [x] Like posts
- [x] Tag blog posts
- [x] Search for blogs by title


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
- [ ] Create Messaging System
- [ ] Custom blog urls
- [ ] pop-out different user showpage
- [ ] Pagination/infinite scroll
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[heroku-link]: www.stumblr.xyz
