# Smart Harvesting II Project Website

This repository contains all the necessary files to build the project website for "Smart Harvesting II".

The site is served by GitHub pages, but it does not rely on the build mechanism of GitHub Pages, since the theme relies on some unsupported plugins. This means, to change something, you need to clone this repository, make your changes and push back to master. Files are configured to be served from the `docs/` folder.

## Running the Site Locally

1. Install a full [Ruby development environment](https://jekyllrb.com/docs/installation/)

1. Install Jekyll and Bundler

        gem install jekyll bundler

1. Install dependencies from Gemfile:

        bundle install

1. Build the site and make it available on a local server

        bundle exec jekyll serve

1. Browse to [http://localhost:4000](http://localhost:4000)

## Theme

The theme is based on the Stackbit Fresh Theme.

### Stackbit Fresh Theme

Stackbit Fresh Theme original README is located [here](./README.theme.md).
