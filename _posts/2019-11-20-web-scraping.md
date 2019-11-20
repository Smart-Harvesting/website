---
layout: post
title:  Web Scraping
categories: [blog]
tags: [web scraping]
---

A main focus of the Smart Harvesting II project was the topic of _web scraping_.
In this post, we are going to explain what web scraping - also called _web data extraction_ - really is, and how you would program a software that performs this task.



## Web Scraping - Introduction

What exactly is web scraping?
As the name suggests, it is a technique to _scrape_ data from the Web.
This metaphor hints at the fact that you don't use any structured form of access like a query to a REST API for that, but rather try to get your data directly from the website as presented on the screen.

The most straightforward form of web scraping is using the method of _copy and paste_, that is, collecting the content of interest manually.
Of course, this approach is very labour-intensive and time-consuming.
Still, it is also the most reliable approach as you can make sure you get all and exactly the data you want to get.

A more sophisticated approach, however, to save you time and labour is the usage of a computer program to perform the data extraction for you.
How would that work?
Well, the program still would need to mimic a human, as it wants to make use of the human-directed presentation of data which is a website.
That is, it would need to reproduce every step a human would do to get the data - navigate to the website, possibly fill out forms, click links and buttons etc., and finally select and copy the desired data.
All these steps must be mimiced programmatically.
Even though the construction of a web scraper will take some time upfront, the execution in the end will be much faster than the manual approach, which is why this approach pays off especially in scenarios of continuous and/or repeated data extraction tasks.

Programmers that need to develop a wrapper to scrape data from the web don’t need to do
this completely from scratch.
There are a number of libraries and frameworks available for popular programming languages like Python, R, or Java.
In the following, we will explain how a web scraper can be programmed in these languages.


## Programming Web Scrapers in Python

For Python, the best known libraries are perhaps [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/), [Scrapy](https://scrapy.org/) and [parsel](https://github.com/scrapy/parsel).

The following examples will make use of the web scraper testing website http://books.toscrape.com.

```python
url = "http://books.toscrape.com"
```

Irrespective of which library you use, in most cases you will have to establish a connection to the start URL first and obtain the HTML text. This can be accomplished by using either of the following methods:

```python
from urllib.request import urlopen

html = urlopen(url)
```

```python
import requests

html = requests.get(url).text
```


### BeautifulSoup

Developed already in 2004, _[BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/)_ is a popular Python library to work with HTML.
It provides a few simple methods to navigate, search and modify an HTML parse tree.

Parsing a website with BeautifulSoup is as simple as creating a new BeautifulSoup object, instantiated with the html text of the website:

```python
soup = BeautifulSoup(html, 'html.parser')
```

This object is then used to navigate the HTML tag tree and to select specific nodes.
For example, we may get all the book titles on the first page like this:

```python
# find all article tags that have a class attribute value of 'product_pod'
bookList = soup.find_all('article', {'class':'product_pod'})
for book in bookList:
    # find the title attribute of each book and extract its value
    title = book.find(lambda tag: 'title' in tag.attrs).attrs['title']
    print('Title: {}'.format(title))
```

Obviously, this approach is best suited for static HTML. To navigate a page, you can extract the URL from @href attributes of `a` tags, for example, and use them to create a different request to that page, to receive a new HTML parse tree to work with.

### Scrapy

In _[Scrapy](https://scrapy.org/)_, wrappers are called «web spiders».
Also, the library goes beyond pure web
scraping by providing additional means for data extraction via APIs or for general-purpose web crawling.
Scrapy is suitable for HTML and XML sources and provides support for selecting and extracting data via XPath expressions, CSS selectors or regular expressions.
An interactive shell helps the programmer in writing and debugging spiders.
Scrapy also provides a lot of extensions that are helpful dealing with the many pitfalls of the modern Web, e.g. Cookies, sessions, or authentication.

In order to create Scrapy spiders, a new Scrapy project has to be set up by calling:

```bash
$ scrapy startproject mySpider
```

This creates a new subdirectory in the current directory called `mySpider` with a specific directory structure needed by Scrapy.

New spiders are then defined as `.py` files inside of `mySpider/mySpider`. Here's an example for scraping the titles from our books page:

```python
# -*- coding: utf-8 -*-
import scrapy


class BooksSpider(scrapy.Spider):
    name = 'books'
    allowed_domains = ['books.toscrape.com']
    start_urls = [url]

    def parse(self, response):
        url = response.url
        titles = response.css("article.product_pod h3 a::attr(title)").getall()
        for title in titles:
            print('Title: {}'.format(title))
```

Run the spider with:

```bash
$ scrapy runspider books.py
```

Scrapy's output is very verbose. The tool is also very mighty, as said before, you it lets you deal with Cookies and session handling, with authentication and caching, or automatically download images. Also, it's in fact a full-fledged web crawler and lets you handle robot.txt files and crawl depth restrictions, and much more. Check out the [extensive documentation](https://docs.scrapy.org/en/latest/) to learn more.

### Parsel
_[Parsel](https://github.com/scrapy/parsel)_ was first released in 2015 and is in fact part of the Scrapy project, but can also be used on its own.

In Parsel, everything revolves around its `Selector` class. A new `Selector` object is instantiated with the HTML text to work with:

```python
from parsel import Selector

selector = Selector(text=html)
```

Next, you make use of `Selector`'s methods like `css` or `xpath` to access elements from the HTML via CSS selectors or XPath expressions.
Here's an example:

```python
titles = selector.css("article.product_pod h3 a::attr(title)").getall()
for title in titles:
    print('Title: {}'.format(title))
```

Parsel is in a sense similar to BeautifulSoup, but more flexible in addressing specific elements because of the CSS selectors (where BeautifulSoup is very limited) and XPath support. If you don't need all the power from Scrapy, Parsel might be the right tool for you.

### Scrapely

Another library also maintained by the Scrapy project is [Scrapely](https://github.com/scrapy/scrapely).
Scrapely is a library that, in contrast to BeautifulSoup or Parsel does not rely on CSS or XPath selectors, but takes annotated HTML samples as input for supervised learning.
That is, it uses _instance-based wrapper induction_ to come up with a wrapper for similar pages to the annotated examples.
Annotation is as simple as providing a url and an accompanying list of key-value pairs, where each key represents a target data field for extraction, and the value is the exact content from the url that shall be extracted into the data field.
Scrapely will then learn from these examples and attempt to extract content from similar pages into the defined data fields.

### RoboBrowser
Another not particularly widespread library for web scraping with Python is [RoboBrowser](https://robobrowser.readthedocs.io).
It is built around the Requests and BeautifulSoup libraries, offering a few additional methods for navigating the browser, working with forms etc.

You do not need to get the website's HTML yourself, since RoboBrowser has the `open()` method implemented:

```python
from robobrowser import RoboBrowser

browser = RoboBrowser(history=True)
browser.open(url)
```

The following snippet demonstrates how you can follow links on a page and use the browser's functionality to get back to the previous page. This way, we are able to navigate to the detail page of each book, extract the abstract text, and go back to repeat with the next book.

```python
books = browser.select('article.product_pod')
for book in books:
    title = book.h3.a.attrs['title']
    print('Title: {}'.format(title))
    browser.follow_link(book.h3.a)
    desc = browser.find('div',{'id':'product_description'}).next_sibling.next_sibling
    print('Description: {}'.format(desc.get_text()))
    print()
    browser.back()
```

## Programming Web Scrapers in R

### rvest

Programmers proficient in R can also make use of a library for web scraping which is called [rvest](https://rvest.tidyverse.org/).
Inspired by BeautifulSoup, it is also a libary that works on HTML and XML and can select parts of these documents with the help of CSS or XPath ("if you’ve a glutton for punishment") selectors.
It can extract, modify and submit HTML forms and also simulate navigating the website with a browser (going back and forward, following links etc.).

```python
library('rvest')

#Using CSS selectors to scrape the title section
title_data_html <- html_nodes(html,'.article.product_pod h3 a::attr(title)') # funktioniert so nicht

#Converting the title data to text
title_data <- html_text(title_data_html)

#Let's have a look at the title
head(title_data)
```

By the way, the developer of rvest also created a Javascript bookmarklet called [SelectorGadget](https://selectorgadget.com/) that can be used to find the right CSS selectors for desired data to be used in extraction.

## Programming Web Scrapers in Java

### JSoup

For Java, a simple library for HTML Parsing is [JSoup](https://jsoup.org/), obviously inspired by BeautifulSoup.

Here's a small example on how to fetch the books' titles with JSoup. For the sake of brevity, this code is imcomplete with regards to imports and exception handling.

```Java
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
/* ... additional imports */

public class WebsiteParser {
    private static final int TIMEOUT_IN_MS = 5000;

    public static void main(String[] args) {
        String url = "http://books.toscrape.com";

        Document doc = Jsoup.parse(new URL(url), TIMEOUT_IN_MS);

        Elements titles = doc.select("article.product_pod h3 a[title]");

        titles.stream().map(t -> t.attr("title")).forEach(System.out::println);
    }
}
```

You can see that JSoup is working similarly to BeautifulSoup-

### Jaunt

[Jaunt](https://jaunt-api.com/) is another library for Java, especially suitable in cases where no Javascript is needed, as this is not supported.

```Java
import com.jaunt.*;

public class BookScraperDemo {
    public static void main(String[] args) {
        String url = "http://books.toscrape.com";

        UserAgent userAgent = new UserAgent(); // create new userAgent (headless browser)
        userAgent.visit(url); // visit url

        Elements articles = userAgent.doc.findEach("<article class=product_pod");
        Elements titles = articles.findEach("<a title>");

        titles.forEach(t -> {
            String title = t.getAtString("title");
            System.out.println("Title: " + title);
        });
    }
}
```
Jaunt's "big brother" [Jauntium](https://jauntium.com/), on the other hand, offers Javascript support.
Jauntium claims to be a lightweight and fast alternative to the much-used Framework Selenium.
Both Jauntium and Selenium are useful beyond Web Scraping for automated testing of websites, as they completely automate a range of modern Web browsers like Chrome, Firefox, Safari or IE.
HtmlUnit has been created for the same purpose, but is not good at Javascript/AJAX handling.

<!--### Jwht Scrapper

[jwht scrapper](https://github.com/whimtrip/jwht-scrapper)...-->

## Conclusion

This post has demonstrated that there are many options available for programmers to implement a custom web scraper.
Unfortunately, not everyone is a programmer.
Still, a lot of people out there are in need of some Web scraping solution.

In the next post, we will introduce _OXPath_, which is one possible solution to this problem.
