---
layout: post
title:  Integrating OXPath into the DDA
categories: [blog]
tags: [web scraping]
excerpt_separator: <!--more-->
---

In this post, we present one interesting outcome of the Smart Harvesting project, which is the integration of a web scraping module utilizing OXPath into the Document Deposit Assistant (DDA).

<!--more-->

To cite from the project's README: "The Document Deposit Assistant (DDA) is a web application which is able to import massive amounts of content and their metadata from a variety of data sources into a target repository."
These data sources include, for example, OAI-PMH sources, unAPI sources, as well as Excel templates or BibTeX files.

Since a lot of bibliographic information is nowadays available on the web, we figured that it would be useful to include these websites as additional sources for the DDA.
To accomplish this, a web scraping module was required.
From our experience with OXPath, we decided to utilize this technology to integrate it with the DDA.



...

The DDA is an open-source project available at https://git.gesis.org/dda/dda-wizard/.

Note: The integration of OXPath from the technical perspective relies on managing OXPath artifacts as Maven dependencies. These artifacts are not yet publicly available since OXPath is currently closed-source. We did have access to the sources as part of our project cooperation with Oxford. In order to re-use our DDA module, you will have to ask the OXPath developers for access to the artifacts.
