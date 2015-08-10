# Phase 1: User Authentication, Blog Creation/Newsfeed

## Rails
### Models
* User
* Blog
* Post

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* Api::BlogsController (create, destroy, show)
* Api::PostsController (create, destroy, show, update, index)
* Api::FeedController (create, index, update)


### Views
* users/new.html.erb
* session/new.html.erb
* blogs/show.json.jbuilder
* posts/index.json.jbuilder
* posts/feed.json.jbuilder


## Backbone
### Models
* Post.js
* Blog.js

### Collections
* Posts.js


### Views
* BlogForm
* NewsFeed
* BlogShow (composite view, contains PostsIndex subview)
* PostsIndex (composite view, contains PostsIndexItem subviews)
* PostsIndexItem
* PostShow

## Gems/Libraries
