---
layout: post
title:  Web Scraping Tools
categories: [blog]
tags: [web scraping]
excerpt_separator: <!--more-->
thumb_img_path: images/foo.png
content_img_path: images/foo.png
date: '2020-02-10'
---

In a [previous post]({{ site.baseurl }}{% post_url 2019-11-20-web-scraping %}), we have explained the basics of this topic: What is web scraping, and how would you program a software that performs web scraping?

Alas, programming is a special skill that needs some time and effort to be mastered.
We have also introduced in [another post]({{ site.baseurl }}{% post_url 2019-11-21-oxpath %}) the declarative web scraping language _[OXPath](http://www.oxpath.org/)_, which can help non-programmers to get a web scraper up and running in less time.

In Smart Harvesting II, we had asked ourselves: What kind of tool would a librarian need to be able to extract bibliographic metadata from the Web?
In the beginning, we focused on OXPath, but we soon realized, that even though this declarative language is easier to read and write than a script in a full-blown programming language, there are still some hurdles involved that render OXPath not the best alternative for our user group.

In addition, we realized that in the meantime, there are a good deal of web scraping tools suitable for the layman available.

In this post, we want to give an overview on the - in our view - most promising web scraping tools.

<!--more-->

## Test Websites

For the evaluation of web scraping software below, we have used test websites that are specifically designed to test the capabilites of web scrapers. They are mockups providing challanges such as login, pagination, user input, AJAX requests etc.

https://www.webscraper.io/test-sites

http://toscrape.com/

## Web Scraping Tools for the Layman

You have already learned that you can program a web scraper by yourself.
For interactive pages, this means to imitate each interaction with the website programmatically.
Additionally, you have to identify the location of your desired data in the DOM tree, for example by using web developer tools, and create a path addressing these locations, e.g. via XPath expressions or CSS selectors.

Web scraping tools with graphical user interfaces (GUIs) are designed to encapsulate these steps and present the user only with the view of the web page as it would look like in a regular browser (more or less), enhanced with additional elements for the user to design an extraction workflow. How exactly this is done varies from software to software.
The general idea however is the same: The user defines an extraction workflow via point and click, that the software translates into hidden code that is then executed to perform the actual extraction.

While the general principle is the same, different tools vary in some aspects.
The most relevant criterion is the mode of installation: Some tools are standalone applications that have to be installed into the system, while others are created as plugins for web browsers like Chrome or Firefox.
In case of standalone applications, there are often restrictions on the operating systems (this mostly depends on the programming language that the software is written in). Most of the tools only run on Windows, some on Windows and MacOS. A minority is also available for Linux.
Another very important aspect is the cost - some tools are free, while others have a specific pricing model, for example depending on how many data can be scraped at once, or what level of support is offered.
Often, there is a limited trial version available to test the product before subscribing to a paid plan.

Other minor differences in the tools are for example the availability of different output formats or usage of local computing power vs. cloud computing.

### Standalone Tools

#### [Octoparse](https://www.octoparse.com)

Octoparse is a web scraping software available for Windows. The .NET framework is required - if it's not installed, the Octoparse installer will make up for it.  
The pricing model includes a free plan, where unlimited installations and pages are included, but export of results is limited to 10,000 records, with only 2 scrapers being able to run concurrently and 10 configurations in total.
The standard plan starts at $75/month.
The paid plans offer (besides more parallel runs and bigger export sizes) additional features such as cloud usage, IP rotation, scheduled execution or API access.
Individual discounts are available, as well as a 14-day trial version of a paid plan.

To use Octoparse, even in the free plan you need a user account.
There is a community that can help to get you started or answer specific questions on your project.
[Tutorials](https://www.octoparse.com/tutorial-7) are also available, both for getting stared with Octoparse as well as for special topics such as dealing with logins, infinite scrolling or setting up proxies.

Octoparse offers several modes of operation: _Wizard mode_ and _Advanced mode_.
As these names suggest, Wizard mode is used to guide the user through the process of scraper definition by providing a predefined set of options for the user to choose at each step.
If some fine-tuning is needed, Advanced mode can be switched on after completing the wizard.
There are also plenty of template workflows available that can serve as examples and also be adapted to similar use cases.

In Advanced mode, the user is presented with a graphical representation of the extraction workflow, where elements can be added, rearranged and deleted via drag&drop.
Even in this mode, the user is guided how to construct his workflow by so-called "action tips" that are context-aware.
For example, after selection of an element in the web page, tips such as "Extract text of the selecred element", "Click selected element" or "Loop click selected element" are presented.
A click on a tip adds the selected action to the workflow.

More advanced options include the adaptation of generated XPath expressions (including an XPath tool) as well as of the extracted data, inluding a tool to design regular expressions.

![Octoparse user interface](/images/Octoparse_interface.png)

When the workflow design is finished, the extraction can be started.
A new window opens where the user can follow Octoparse's steps navigating the website and extracting the data.
If everything went as expected, the result data can be exported as e.g. Excel, CSV or JSON, or into a database.

Octoparse is a user-friendly tool with an intuitive design. An extensive set of tutorials, the community help as well as context-aware guides in the tool help even inexperienced users quickly get their first scraper up and running.

...

Minor challenges for Octoparse are dynamically created dropdowns, as well as tabular data.

A big plus is the availability of a cost-free version with lax limitations that might not pose a problem in simple use cases.

#### [ParseHub](https://www.parsehub.com)

(Jüri?)

- Versionen: kostenlos, Standard ($149/mo), Professional ($499/mo), Enterprise (nach Absprache)
    - Unterschiede in Seitenanzahl, Geschwindigkeit, Projektanzahl, Dauer der Datenspeicherung in der Cloud, Supportumfang, zusätzliche Features (IP-Rotation, Speichern in Dropbox, planbare Ausführung
    - individuelle Rabatte möglich
- OS: Windows, OS X, Linux (Rechenleistung: Cloud)
- Benutzerkonto notwendig
- keine Testversion der kostenpflichtigen Versionen verfügbar
- Community verfügbar
- Benutzeroberfläche ansprechend und eingängig

- uses customized Firefox
- runs on ParseHub server, results available via API
- no sequences
- no additional control via scripting language or similar


#### [Mozenda](https://www.mozenda.com)

Mozenda provides a desktop application for Windows, the so-called "Agent Builder", which is used to design the web scraper (called agent), which is then run on Mozenda's servers in the cloud. The application is connected with the Mozenda Web Console which can be used to manage the defined agents, run scraping jobs, and view, organize, export or publish the extracted data. A user account is required.

The pricing model is basically a credit-based system: different actions consume a different amount of _credits_, of which each plan has a specific contingent. In addition, plans differ in the number of agents that can be defined, the number of projects, user licences, size of cloud storage and availbility of some features such as API access. Plans start at $250 per month.
A 30-day trial version is available that allows for 2 users, 5 agents and 2 concurrent jobs, with 500 credits provided.

The initial view of the Agent Builder looks like this:

![mozenda start](/images/Mozenda_start.png)

After entering a URL, the page is loaded. You can navigate the page if needed until you reach the target page to start the extraction process. To do this, you click the "Start a new Agent from this page" button. Now the view changes and you are provided with an interface that helps you designing your scraper.

...

When you are finished creating the scraper, and tested it with the Agent Builder, you can use the Web Console to run it and get results.

![mozenda result](/images/Mozenda_result.png)

- export formats: CSV, TSV, XML, JSON, Excel
* advanced actions missing
* scheduling included
* newest version includes Chromium Browser which is faster, and also gives access to Chromium developer tools, which gives more control to experienced users


#### [WebHarvy](https://www.webharvy.com)

Another software for the Windows OS is WebHarvy. In contrast to most of the other tools, its pricing model is solely based on the number of licences you buy - a single user licence (up to 3 devices) starts at $129, a licence for unlimited users and devices, e.g. for an organization, costs $699. All licenses come with free updates of the software for 1 year.The software can be evaluated for free for 15 days, with the limitation that only two sites can be extracted.

...

- no workflow view of any kind, need to remember steps
- Bilddownload möglich
- Help articles and video tutorials
- user interface a bit old-fashioned
- functions: capture text, follow links, capture target url, click, pagination, input text, scroll to load/click to load more, select dropdown option
- data clean via regex possible
- scheduled extraction
- in comparison rather inexpensive / lower cost (no monthly fee, just licence cost)
- a configuration is saved as XML file - WebHarvy can then also run from command line with this configuration
- Developer Tools included

#### [Visual Web Ripper](http://visualwebripper.com)

Visual Web Ripper is another Windows software (requiring IE9 or above) with a pricing model based on licences - a single licence costs $349. The evaluation period is 30 days, where up to 100 records can be extracted. There is also a premium version that provides more features that is marketed separately as the "Content Grabber" (https://contentgrabber.com). The following description relates to Visual Web Ripper.


- großer Umfang möglicher Exportformate
- works with templates and actions
- generated XPath modifiable
- additional control via API (.NET)

#### [Diggernaut Excavator](https://www.diggernaut.com/excavator/)

(Jüri)

- Videotutorials können nicht abgespielt werden
- User Interface recht unintuitiv, ohne Tutorial nicht klar, wie zu benutzen

#### [ScrapeStorm](https://www.scrapestorm.com)

(Jüri?)

nicht wahnsinnig intuitives Benutzerinterface

- viele Funktionen/Einstellungen nur in den kostenpflichtigen Plänen verfügbar
- Benutzeroberfläche wirkt ansprechend
    -> trotzdem ohne Tutorial nicht eingängig
- grafische Aufbereitung der Ausführung
- diverse Exportformate: Dateien (TXT, CSV, XLS(X), HTML), Datenbanken (MySQL, SQL Server, PostgreSQL, MongoDB), nach WordPress oder Google Sheet

#### [Portia](https://scrapinghub.com/) ([GitHub](https://github.com/scrapinghub/portia))

DISCONTINUED

#### [Helium Scraper](https://www.heliumscraper.com/en/index.php?p=home)

- Versionen: Basic ($99), Professional ($199), Business ($399), Enterprise ($699)
    - Unterschiede in Supportoptionen, Anzahl Nutzerlizenzen, Zeitraum für Upgrades und Updates
- OS: Windows
- nutzt u.a. eine spezielle deklarative Sprache, die an Lambda-Kalkül angelehnt ist

#### [FMiner](http://fminer.com)

(s. Bericht Jüri)

FMiner is a software available for both Windows and MacOS X.

* point&click with flowchart
* loops and click actions
* input to forms
* CAPTCHA tests
* generates modifiable XPATH
* scheduler included


#### [iMacros](http://imacros.net)

iMacros is a software not only for web data extraction, but for browser automation in general; thus, it can also be used to web regression and verification testing for web developers.
It describes itself as "the world's first browser-based macro recorder".
As this description indicates, the main purpose of iMacros is to record every interaction of the user with a website, to replay this recording on demand.
Behind the scenes, a script in a domain-specific language is generated that is then simply run in the replay.
This script can also be written and adjusted manually.

There are also iMacros plugins available for Chrome, Firefox and IE, but the relevant utility for data extraction, namely the extraction wizard, is only available in the desktop software (called _iMacros Browser_) and in IE. The other plugins can only run pre-existing scripts.

* Platform: Windows; + Firefox/Chrome add-ons for all platforms; +IE add-on
* works with CSS selectors, XPath, proprietary selection language
* programming interface (.NET) needed to generalize selections


![iMacros scripting window](/images/iMacrosChrome.png)

iMacros is a very powerful tool that is suited for the professional web developer more than for the layman.
The scripting language is complex and needs to be learned in order to make full use of the potential of this software.


#### [uiPath](https://www.uipath.com/automate/web-scraping-software)

#### [IRobot](http://www.irobotsoft.com/)

- hässliches Interface

### Plugins and Cloud Services

#### [Webscraper.io](http://webscraper.io)

Webscraper.io is an extension for the Chrome browser which basically adds an additional tab to the Developer tools in Chrome. It is free, but running the designed Scrapers in the cloud on the WebScraper.io platform is fee-based, starting at $50/month for up to 5,000 pages.

...

(s. Bericht Jüri)

- Funktionsumfang begrenzt
- works with CSS selectors
- no support for input elements


#### [ImportIO](https://import.io)

Import.io is a cloud service for web data extraction. That means it is independent of the user's OS since all that is needed is a web browser to access the web application. A user account is required to use the service. The pricing model includes both a free as well as several paid plans. The free plan is limited to 1000 queries and limited in features. Unfortunately, it also doesn't allow recording website interactions (i.e. clicks, form fills etc.), which are essential to modern interactive websites.   
Paid plans start at $299 per month. They include API access to access the extracted data programmatically,

After login, a new sraper is created simply by providing the url to the target website. ImportIO first tried to guess on its own which data to extract and presents the results when it's finished. Afterwards, the user can check if the extracted data fits the requirements. If not, the scraping workflow can be edited.

On first access, a tour that guides through the user interface is automatically opened.
The editor window's design is pretty straightforward. Everything revolves around the target table structure of extracted data.
That is, if you need to change what data is extracted to a specific field, simply click the respective column in the "Edit" tab. In this tab, the web page is presented with the target data for that column highlighted. You can then proceed to refine the extraction e.g. by applying regular expressions or adjusting the XPath. You can also rename the column, add and delete columns, or start over with an empty table.

Advanced options are available for diffucult websites. These include disabling CSS and/or JavaScript, switching between single-row and multi-row extraction and the ability to provide additional URLs (e.g. for paginated content) to train the extractor.

Download of extracted data is possible in Excel, CSV and NDJSON formats.

Once a scraper is saved, it can be configured to run regularly, for example once an hour or once a day. The reporting feature can be used to receive emails if items change between runs, which is useful to monitor the extraction.

* Platform: web interface
* visual picking
* bulk extract and data aggregation
* RESTful API endpoint
* cloud storage of results


#### [Dexi.io](https://dexi.io/product)

(Jüri)


### Overview

Above, we have presented only a selection of web scraping tools in detail.
There are plenty more tools available.
An overview of all the tools we have had a look at during our project can be found below.

TODO Table

Additional software for web scraping can be found, for example, [here](https://www.predictiveanalyticstoday.com/category/reviews/web-scraping-tools/) or [here](https://www.capterra.com/data-extraction-software/?utf8=%E2%9C%93&users=&feature%5B7%5D=35626&commit=Filter+Results&sort_options=).

---

### Aus der Andrade Arbeit

- 7 Tools evaluiert (alle lauffähig unter Windows und/oder OS X)
- angelegte Kriterien:
    - Preis
    - Versionen (kostenlos, kostenpflichtig o.ä.)
    - Betriebssystem
    - Support (Dokumentation, Tutorials, Hilfemöglichkeiten)
    - Systemanforderungen (lokale Rechenleistung vs. Cloudservice)
    - Unterstützung von
        - Paginierung
        - infinite Scroll
        - Javascript
        - interaktiver Elemente
        - Loginbereichen
        - Captchas
    - planbare Ausführung
    - Ausgabeformate
    - Feintuning durch XPath


## Testaccounts

Angelegt/Installiert? | Zeitraum | Tool | letzte Version | evaluiert
--- | --- | --- | --- | ---
[x] | 30 Tage | [Mozenda](https://www.mozenda.com) | 7 (beta), April 2019 | [x]
[x] | - (free plan) | [ParseHub](https://www.parsehub.com)
[x] | 6 Tage | [Webscraper.io](http://webscraper.io) | 0.4.2, August 2019 | [x]
[x] | 15 Tage | [Visual Web Ripper](http://visualwebripper.com)
[x] | 15 Tage | [WebHarvy](https://www.webharvy.com) | 5.5.2.171, November 2019
[x] | 14 Tage | [Octoparse](https://www.octoparse.com) | 7.2.6, Mai 2019 | [x]
[x] | - (free plan) | [ImportIO](https://import.io) | - |  [x]
[x] | 15 Tage | [FMiner](http://fminer.com) | 9.8.1, Datum unklar | [x]
[x] | 30 Tage | [iMacros](http://imacros.net) | 12.5, November 2018
[x] | | [uiPath](https://www.uipath.com/automate/web-scraping-software) | 2019.4.2
[ ] | | [Dexi.io](https://dexi.io/product) | März 2018
[x] | 10 Tage | [Helium Scraper](https://www.heliumscraper.com/en/index.php?p=home) | 3, Dezember 2018
[x] | - | [IRobot](http://www.irobotsoft.com/) | 2.8.4.2018.05.05, Februar 2018
[x] | - (free plan) | [ScrapeStorm](https://www.scrapestorm.com) | 3.4.9, Dezember 2019
[x] | - (free plan) | [Diggernaut Excavator](https://www.diggernaut.com/excavator/) | | [x]
