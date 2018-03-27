---
layout: post
title:  "Jekyll Installation on macOS"
date:   2018-03-12 22:45:59 +0900
author: Choong-il Ryu
categories: Jekyll
tags:	jekyll macos centrarium
cover:  "/assets/instacode.png"
---

Whenever installing open source based software, I frequently lose confidence whether I'm on the right track in the course of doing it. It's mainly because I'm not sure if the instructions on the net is suitable for my setting, if I fully understand them, and if I follow them correctly. If I miss something, things go wrong and I have trouble in reverting back, easily get lost. Therefore it's natural and safe to have my first post on Jekyll platform to be about how to install it.

Jekyll is based on ruby and the installation process heavily uses ruby companion tools. macOS is coming with factory installed ruby, which I was not aware of until now, but it's not suitable version to install Jekyll. So, we need to start from there.   

## Ruby Version on macOS 10.12.6 Sierra

In my setting, I have ruby 2.0.0p648 and gem 2.0.14.1 as follows.

{% highlight Shell Session %}
~ $ ruby -v
ruby 2.0.0p648 (2015-12-16 revision 53162) [universal.x86_64-darwin16]
~ $ gem -v
2.0.14.1
{% endhighlight %}
<br/>

Also, I have following ruby based components already installed. You don't need this info to install Jekyll, it's just for my record.

{% highlight Shell Session %}
~ $ gem list

*** LOCAL GEMS ***

bigdecimal (1.2.0)
bundler (1.16.1)
CFPropertyList (2.2.8)
io-console (0.4.2)
json (1.7.7)
libxml-ruby (2.6.0)
minitest (4.3.2)
nokogiri (1.5.6)
psych (2.0.0)
rake (0.9.6)
rdoc (4.0.0)
ruby (0.1.0)
sqlite3 (1.3.7)
test-unit (2.0.0.0)
{% endhighlight %}
<br/>

## Install Jekyll, First Trial

When I tried to install Jekyll in the setting above I got following error.

{% highlight javascript %}
~ $ gem install jekyll
ERROR:  While executing gem ... (Gem::FilePermissionError)
    You don't have write permissions for the /Library/Ruby/Gems/2.0.0 directory.
{% endhighlight %}
<br/>

Since it says I have no permission for `/Library/Ruby/Gems/2.0.0`, I tried `sudo`.
Now, I realized I needed ruby version equal to or higher than 2.1.

{% highlight javascript %}
~ $ sudo gem install jekyll
Password:
ERROR:  Error installing jekyll:
	public_suffix requires Ruby version >= 2.1.
{% endhighlight %}
<br/>


## Upgrade Ruby

According to internet, there are many ways to install ruby on macOS with some of them obsolete. I chose to use [rbenv][rbenv] to install ruby and, in turn, I need [Homebrew][Homebrew] to install [rbenv][rbenv]. Just check current brew version for the record.

{% highlight javascript %}
~ $ brew --version
Homebrew 1.5.10
Homebrew/homebrew-core (git revision 537a8; last commit 2018-03-11)
{% endhighlight %}
<br/>

Install [rbenv][rbenv] using brew. Great... I have another error, about Xcode this time.

{% highlight javascript %}
~ $ brew install rbenv
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 1 tap (homebrew/core).
==> New Formulae
arm-linux-gnueabihf-binutils             libbitcoin-network
draco
==> Updated Formulae
anjuta                     libbitcoin-blockchain      peco
asdf                       libbitcoin-explorer        pipenv
automake                   libbitcoin-node            rtv
coffeescript               libbitcoin-server          vala
darksky-weather            libbladerf                 znc
dehydrated                 nim
gdl                        nopoll

Error: Xcode alone is not sufficient on Sierra.
Install the Command Line Tools:
  xcode-select
{% endhighlight %}
<br/>

Try to install xcode-select. Looks good.

{% highlight javascript %}
~ $ xcode-select --install
xcode-select: note: install requested for command line developer tools
{% endhighlight %}
<br/>

Try again to install [rbenv][rbenv].
This time I come across `Error: The 'brew link' step did not complete successfully`

{% highlight javascript %}
~ $ brew install rbenv
==> Installing dependencies for rbenv: autoconf, pkg-config, openssl, ruby-build
==> Installing rbenv dependency: autoconf
==> Downloading https://homebrew.bintray.com/bottles/autoconf-2.69.sierra.bottle
######################################################################## 100.0%
==> Pouring autoconf-2.69.sierra.bottle.4.tar.gz
Error: The `brew link` step did not complete successfully
The formula built, but is not symlinked into /usr/local
Could not symlink share/info/autoconf.info
/usr/local/share/info is not writable.

You can try again using:
  brew link autoconf
==> Installation continues.
{% endhighlight %}
<br/>

As the error message suggested, I ran `brew link autoconf`.
Oh, I don't have write permission on `/usr/local/share/info`. I changed the permission and tried again to success.   

{% highlight javascript %}
~ $ brew link autoconf
Linking /usr/local/Cellar/autoconf/2.69...
Error: Could not symlink share/info/autoconf.info
/usr/local/share/info is not writable.
{% endhighlight %}
<br/>

Now I am ready to install ruby. (Not Jekyll!)
Using following command, I can see numbers of available ruby versions.

{% highlight javascript %}
~ $ rbenv install -l
{% endhighlight %}
<br/>

As of today, the latest stable version looks 2.5.0. Get it.

{% highlight javascript %}
~ $ rbenv install 2.5.0
ruby-build: use openssl from homebrew
Downloading ruby-2.5.0.tar.bz2...
-> https://cache.ruby-lang.org/pub/ruby/2.5/ruby-2.5.0.tar.bz2
Installing ruby-2.5.0...
Installed ruby-2.5.0 to /Users/ryuci/.rbenv/versions/2.5.0
{% endhighlight %}
<br/>

## Make macOS Aware of Ruby 2.5

Now I have two versions of ruby, the factory installed 2.0 and the upgraded 2.5.
When I run `ruby -v` in the terminal, I can see 2.0 running.

{% highlight javascript %}
~ $ ruby -v
ruby 2.0.0p648 (2015-12-16 revision 53162) [universal.x86_64-darwin16]
{% endhighlight %}
<br/>

To make 2.5 to run, I need to dig in [rbenv][rbenv] configuration.  
As shown below, I have hidden folder `.rbenv` under my home folder. Note that there is no `version` file in it yet while I got `versions` folder.

{% highlight javascript %}
~ $ ls -al .rbenv
total 0
drwxr-xr-x   4 ryuci  staff   136  3 12 13:22 .
drwxr-xr-x+ 66 ryuci  staff  2244  3 12 13:19 ..
drwxr-xr-x   9 ryuci  staff   306  3 12 13:22 shims
drwxr-xr-x   3 ryuci  staff   102  3 12 13:19 versions
{% endhighlight %}
<br/>

Run `rbenv global 2.5.0` and check `.rbenv/` to find `version` file, which tells ruby version number I want to use.
There are three way to let macOS aware of ruby version, `global, local, shell`. For more info, read [this](https://github.com/rbenv/rbenv#command-reference).

{% highlight javascript %}
~ $ rbenv global 2.5.0
~ $ ls .rbenv/
shims		version		versions
~ $ cat .rbenv/version
2.5.0
{% endhighlight %}
<br/>

Unfortunately we am not there yet. In `.rbenv/shims`, we have a collection of scripts to run ruby.
This folder should be in `PATH` environment variable so that macOS know where to search for ruby 2.5.

{% highlight javascript %}
~ $ ls .rbenv/shims
erb	gem	irb	rake	rdoc	ri	ruby
{% endhighlight %}
<br/>

Add following line in your bash config file, which is `~/.bash_profile` in my case, and restart the terminal.

{% highlight javascript %}
export PATH="~/.rbenv/shims:$PATH"
{% endhighlight %}
<br/>

Run ruby, then you will see it's running version 2.5.

{% highlight javascript %}
~ $ ruby -v
ruby 2.5.0p0 (2017-12-25 revision 61468) [x86_64-darwin16]
{% endhighlight %}
<br/>

## Install Jekyll, Second Trial

At last, we are ready to install Jekyll.

{% highlight javascript %}
~ $ gem install jekyll
Fetching: public_suffix-3.0.2.gem (100%)
Successfully installed public_suffix-3.0.2
...
Done installing documentation for public_suffix, addressable, colorator, http_parser.rb, eventmachine, em-websocket, concurrent-ruby, i18n, rb-fsevent, ffi, rb-inotify, sass-listen, sass, jekyll-sass-converter, ruby_dep, listen, jekyll-watch, kramdown, liquid, mercenary, forwardable-extended, pathutil, rouge, safe_yaml, jekyll after 57 seconds
25 gems installed
{% endhighlight %}
<br/>

Oh, we need to install bundler too.

{% highlight javascript %}
~ $ gem install bundler
Fetching: bundler-1.16.1.gem (100%)
Successfully installed bundler-1.16.1
Parsing documentation for bundler-1.16.1
Installing ri documentation for bundler-1.16.1
Done installing documentation for bundler after 3 seconds
1 gem installed
{% endhighlight %}
<br/>

## Make Your Blog Folder

Run following commands and open http://localhost:4000 from your browser, then you can see Jekyll blog is running.

{% highlight javascript %}
~ $ jekyll new my-awesome-site
~ $ cd my-awesome-site
my-awesome-site $ bundle exec jekyll serve
{% endhighlight %}
<br/>

However, you still have it loaded to GitHub and probably want to change its theme. So, let's continue.  

## Make GitHub Repository

If you are sure you don't need to change Jekyll's default theme, you just have to make GitHub repository, and run following commands in `my-awesome-site` folder. Otherwise, just go to next section.

{% highlight javascript %}
my-awesome-site $ git init
my-awesome-site $ git commit -m "first commit"
my-awesome-site $ git remote add origin https://github.com/{Your GitHub ID}/{Your GitHub ID}.github.io.git
my-awesome-site $ git push -u origin master
{% endhighlight %}
<br/>

## Change the Theme to Centrarium

If you want to change the theme as I do, it may be easier to do as follows. I will use [Centrarium][Centrarium] theme.  

1. Forget `my-awesome-site` folder.
2. Make another folder, which is `ryuci.github.io` in my case.
3. Download [Centrarium files][Centrarium] to the folder.
4. Tweak it according to your need. [Tweaking Centrarium Theme][Tweaking Centrarium Theme] might be of help.
5. Run following commands.

{% highlight javascript %}
~ $ cd ryuci.github.io
ryuci.github.io $ bundle install
# => This will install Jekyll-archives, jekyll-sitemap, and jekyll-paginate.
ryuci.github.io $ rm .ruby-version
# => Because I already ran 'rbenv global 2.5.0', and don't need '.ruby-version'.
ryuci.github.io $ git init
ryuci.github.io $ git commit -m "first commit"
ryuci.github.io $ git remote add origin https://github.com/ryuci/ryuci.github.io.git
# => Repository link should be yours.
ryuci.github.io $ git push -u origin master
{% endhighlight %}
<br/>

## Activate Your Blog

### Using Local Folder

Run following commands and open http://localhost:4000 from your browser.

{% highlight javascript %}
~ $ cd ryuci.github.io
ryuci.github.io $ bundle exec jekyll serve
{% endhighlight %}
<br/>


### Using GitHub

Open http://ryuci.github.io from your browser.

That's all, folks!


[rbenv]: https://github.com/rbenv/rbenv
[Homebrew]: https://brew.sh/index_ko
[GitHub]: https://pages.github.com
[Centrarium]: https://github.com/bencentra/centrarium
[Tweaking Centrarium Theme]: {{ site.baseurl }}{% link _posts/2018-03-15-tweaking-centrarium-theme.markdown %}
