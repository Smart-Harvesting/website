# Smart Harvesting II Project Website

This repository contains all the necessary files to build the content for the project website for "Smart Harvesting II". The generated files to to the [smart-harvesting.github.io](https://github.com/Smart-Harvesting/smart-harvesting.github.io) repository.

The site is served by GitHub pages, but it does not rely on the build mechanism of GitHub Pages, since the theme relies on some unsupported plugins. This means, to change something, you need to clone this repository, make your changes, copy the generated files over to the website's repository and push back to master in both repositories.

## Workflow to Update the Website

1. Get current status

     a. by cloning
        
                git clone <url>
                
     b. by pulling 
        
                git pull origin master

1. Perform your changes

1. Run the site locally (see below) to preview the changes and check that everything works as expected

1. Copy the generated content (files in `_site/` that have been created by jekyll) over to the website's repository:

          $ cp -r _site/* path/to/smart-harvesting.github.io/

1. In both repos: Add all relevant changes to git

        git add <files>
        
1. In both repos: Push changes to remote

        git push origin master

### Running the Site Locally

1. Install a full [Ruby development environment](https://jekyllrb.com/docs/installation/)

1. Install Jekyll and Bundler

        gem install jekyll bundler

1. Install dependencies from Gemfile:

        bundle install

1. Build the site and make it available on a local server

        bundle exec jekyll serve

1. Browse to [http://localhost:4000](http://localhost:4000)

## Blog

New blog posts go into the `_posts/` directory. The naming scheme is: `yyyy-mm-dd-title.md`.

You can write a draft post in the `_drafts/` folder. To view the site locally with the drafts, run jekyll with the drafts switch:
       
        bundle exec jekyll serve --drafts
        
## Updating Publications

Publications are collected from the irgroup_thkoeln page of bibsonomy. The script `getpubs.py` is responsible for querying the group's publications on bibsonomy tagged with 'sh2'. The resulting html file `sh2.html` is included in `publications.md`.

In case you need to add project-related publications that are not listed in the irgroup_thkoeln group, you will have to add them manually to `publications.md`. Try to use the same layout as in `sh2.html`.

## Theme

The theme is based on the Stackbit Fresh Theme.

### Stackbit Fresh Theme

Stackbit Fresh Theme original README is located [here](./README.theme.md).
