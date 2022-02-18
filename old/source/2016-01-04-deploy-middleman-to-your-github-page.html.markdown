---
title: Deploy Middleman to your github page
date: 2016-01-04
tags:
layout: blog_layout
---

First blog of the year! Decided to write an article about deploying middleman because I couldn't find a clear article about it, also a good note for myself. Let's start by adding middleman-deploy on your gemfile.
<pre><code>
# Add this line on gemfile
gem 'middleman-deploy', '~> 1.0'
</code>
</pre>

on terminal, type `bundle install`.

*[optional] Create a lib folder & create a file called build_cleaner.rb*
<pre><code>
# THIS IS OPTIONAL: Create a new file: lib/build_cleaner.rb
class BuildCleaner < Middleman::Extension

  def initialize(app, options_hash={}, &block)
    super
    FileUtils.rm_rf app.config[:build_dir]
  end

end

::Middleman::Extensions.register(:build_cleaner, BuildCleaner)
</code>
</pre>

After successfully installing middleman-deploy, go ahead and update your config.rb *(please pay attention on the [optional] tag)*

<pre>
<code>
# config.rb
activate :relative_assets

# Please remove when no lib/build_cleaner
[optional]require_relative './lib/build_cleaner'[/optional]

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
  activate :build_cleaner
end

activate :deploy do |deploy|
  deploy.build_before = true # runs build before deploying
  deploy.method = :git
  deploy.remote = 'https://github.com/ivanasetiawan/ivanasetiawan.github.com.git'
  deploy.branch = 'master'
end
</code>
</pre>

Done! Next steps are: `bundle exec middleman build`, then `bundle exec middleman deploy` & then `git add .` - commit it with proper message, then push!