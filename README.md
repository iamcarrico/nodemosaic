Node Mosaic
===========

This is a Drupal module built for [AAF Tulsa](http://www.aaftulsa.org) for the
[Tulsa 2013](http://www.tulsa2013.com/) convention website. An explanation of the
creative concept will follow at a later date, but the site needs to feature a
user submitted "mosaic" of story tiles. Each tile:

* has a title.
* has a tile image.
* has "coordinates": an intiger each for row and column between 1 and 1000.
* most should be of the "story_tile" content type, although "pages" should have
  these fields to allow actual site pages to show up in the mosaic.
* is viewable as part of the jQuery Infinite Scroll plugin's generated mosaic
* is viewable as an actual node showing the full text of the story
* is submitted by an anonymous user and approved by a moderator/administrator
  (workflow and access control TBD)

### Current Status:

Presently, this module:

* Provides a block to hold the mosaic view
* Provides a menu callback function to get node information via JSON


### Roadmap:

Going forward, this module should also:

* Populate tiles with the provided JSON information
* Populate nonexistant tiles with links to node/story_tile/add
* Include a Features install script that will generate the content type when moved
  into production.

Needless to say, it's a unique set of functions for a particular installation.
It's also my first stab at writing a Drupal module, so be warned.