---
layout: post
title:  Integrating OXPath into the DDA
categories: [blog]
tags: [web scraping]
thumb_img_path: images/dda_oxpath_teaser.png
content_img_path: images/dda_oxpath.png
excerpt_separator: <!--more-->
date: '2020-02-10'
---

In this post, we present one interesting outcome of the Smart Harvesting project, which is the integration of a web scraping module utilizing OXPath into the Document Deposit Assistant (DDA).

<!--more-->

To cite from the project's README:

> The Document Deposit Assistant (DDA) is a web application which is able to import massive amounts of content and their metadata from a variety of data sources into a target repository.

These data sources include, for example, OAI-PMH sources, unAPI sources, as well as Excel templates, XML or BibTeX files.

Since a lot of bibliographic information is nowadays available on the web, we figured that it would be useful to include these websites as additional sources for the DDA.
To accomplish this, a web scraping module was required.
From our experience with OXPath, we decided to utilize this technology to integrate it with the DDA.

With this new module, users are now enabled to upload an existing OXPath script (which they might have written and tested locally) as a "Publication Source" in the DDA.

![Upload popup for OXPath script](/images/dda_oxpath1.png)

A click on "Upload&Harvest" fires up the OXPath engine to evaluate the script in a headless browser and perform the scripted extraction. In case you try to run a syntactically incorrect script, you get immediate feedback that the file is not valid, so you can correct it and try again.

When the web scraping process is finished, the resulting publication metadata is available in the DDA as so-called "metadata bundles", which can then be ingested into the target system, e.g. a DSpace installation of a library. Below is a screenshot of how such a bundle might look like:

![Result bundle from scraping](/images/dda_oxpath4.png)

The DDA is an open-source project available at [https://git.gesis.org/dda/dda-wizard/](https://git.gesis.org/dda/dda-wizard/).

**Note:** The integration of OXPath from the technical perspective relies on managing OXPath artifacts as Maven dependencies. These artifacts are not yet publicly available since OXPath is currently closed-source. We did have access to the sources as part of our project cooperation with the [Department of Computer Science, University of Oxford](https://www.cs.ox.ac.uk/). In order to re-use our DDA module, you will have to ask the OXPath project leaders (Tim Furche and Georg Gottlob) for access to the artifacts.
