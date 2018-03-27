---
layout: post
title:  "Tweaking Centrarium Theme"
date:   2018-03-15 01:22:59 +0900
author: Choong-il Ryu
categories: Jekyll
tags:	jekyll centrarium
cover:  "/assets/header_image.jpg"
---

## Basic Site Setting

Change site setting in `/_config.yml` per your setting.

Centrarium's defalut `base_url` was `/centrarium`, which makes me to use `http://localhost/centrarium:4000`
instead of `http://localhost:4000` or `http://ryuci.github.io/centrarium` instead of `http://ryuci.github.io`.

I don't like it and changed `base_url` to blank.

{% highlight javascript %}
title: 정모 아빠의 Code to Learn
subtitle: "Do not just learn to code, but code to learn how the world is working!"
email: ryuci0225@gmail.com
name: Choong-il Ryu
description: >
  Do not just learn to code, but code to learn how the world is working!
baseurl: "" # the subpath of your site, e.g. /blog/
url: "http://ryuci.github.io" # the base hostname & protocol for your site
cover: "/assets/pexels-photo-59628-966x300.jpg"
logo: "/assets/logo2.png"
{% endhighlight %}
<br/>

# Activate Commenting

If you want your post to get comments, enable [Disqus](https://disqus.com) feature as follows in `/_config.yml`. `ryuci0225` is my Discus username and you should change it to yours.

{% highlight html %}
# Disqus comments
disqus_shortname: ryuci0225
{% endhighlight %}
<br/>

Then, go to [Disqus](https://disqus.com) site, and login [Create a new site](https://disqus.com/admin/create/).

TBD

## Working with Draft

Read [Working with Draft](https://jekyllrb.com/docs/drafts/).
<br/><br/>

## Add Image Caption

figure crashes to highlight so change figure to figure2 in css and JS
Read [Figure caption for images on Jekyll sites - single line with Markdown](https://flinhong.com/2016/09/22/figure-caption-for-images-on-jekyll-sites/).

## Add Google Map

Read [Jekyll Maps](https://ayastreb.me/jekyll-maps/).
Note that this plugin does not support by gitpage, it won't build when you push the source.
To workaround this, you need to build it locally and push the static site files.
Remove ... in .gitignore as follows.

{% highlight html %}
.DS_Store

# Compiled site
#_site

# Sass garbage
.sass-cache

# Bundler
.bundle/
vendor/
{% endhighlight %}


## Add Menu

{% highlight html %}
{% raw %}
.
├── _config.yml
├── _data
|   └── members.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.md
|   └── on-simplicity-in-technology.md
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
|   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _sass
|   ├── _base.scss
|   └── _layout.scss
├── _site
├── .jekyll-metadata
└── index.html
{% endraw %}
{% endhighlight %}
<br/>

## MathJax

Read [Using Math Expressions in Your Jekyll Blog][Using Math].
<br/>


## Change Ruby Version

Change version info in `/circle.yml` per your setting.

{% highlight javascript %}
achine:
  ruby:
    version:
      2.5.0
{% endhighlight %}
<br/>

## Insert Google Map

1. List item 1
2. List item 2

    ```ruby
    def i_am_highlighted
      puts "Hello, I am highlighted!"
    end
    ```

3. List item 3

## Syntax Highlighting

Read [HighlightJS demo](https://highlightjs.org/static/demo/).

## References

* [Disqus](https://disqus.com)
* [Jekyll](https://jekyllrb.com/docs/drafts/)
* [Centrarium README](https://github.com/bencentra/centrarium#centrarium-)
* [Jekyll Maps](https://ayastreb.me/jekyll-maps/)
