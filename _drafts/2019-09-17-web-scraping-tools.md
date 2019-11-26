---
layout: post
title:  Web Scraping Tools
categories: [blog]
tags: [web scraping]
excerpt_separator: <!--more-->
---

In a [previous post]({{ site.baseurl }}{% post_url 2019-11-20-web-scraping %}), we have explained the basics of this topic: What is web scraping, and how would you program a software that performs web scraping?

Alas, programming is a special skill that needs some time and effort to be mastered.
We have also introduced in [another post]({{ site.baseurl }}{% post_url 2019-11-21-oxpath %}) the declarative web scraping language _[OXPath](http://www.oxpath.org/)_, which can help non-programmers to get a web scraper up and running in less time.

In Smart Harvesting II, we had asked ourselves: What kind of tool would a librarian need to be able to extract bibliographic metadata from the Web?
In the beginning, we focused on OXPath, but we soon realized, that even though this declarative language is easier to read and write than a script in a full-blown programming language, there are still some hurdles involved that render OXPath not the best alternative for our user group.

In addition, we realized that there are a good deal of web scraping tools suitable for the layman available.

In this post, we want to give an overview on the - in our view - most promising web scraping tools.

<!--more-->

## Web Scraping Tools for the Layman

## Notes

Einstieg: sowas wie, man kann Web Scraper selbst programmieren, allerdings muss man dafür jede Aktion, die menschliche Interaktion mit einer Website nachahmt, programmatisch nachahmen. Zwar gibt es Bibliotheken und Frameworks für diverse Programmiersprachen, die das erleichtern (s. HTMLUnit, Selenium etc.), aber man braucht noch immer profunde Programmierkenntnisse, um diese einzusetzen. Mit GUI Tools ist das nicht nötig, da dort diese Programmlogik vom Nutzer weggekapselt ist.

Es gibt waaaaahnsinnig viele Web Scraping Tools inzwischen...

- Unterscheidungsmerkmale:
    - Standalone vs. Browser-Plugin
    - Standalone: Betriebssystem (hängt v.a. zusammen mit Programmiersprache in der es geschrieben ist, etwa Java vs. C# vs....)
    - Kostenlos vs. mit Trial-Version vs. kostenpflichtig
    - Cloudanbindung
    - Ausgabeformate, Schnittstellen

### Aus der Andrade Arbeit

- 7 Tools evaluiert (alle lauffähig unter Windows und/oder OS X)
- Tools:
    - [Mozenda](https://www.mozenda.com)
    - [ParseHub](https://www.parsehub.com)
    - [Webscraper.io](http://webscraper.io)
    - [Visual Web Ripper](http://visualwebripper.com)
    - [WebHarvy](https://www.webharvy.com)
    - [Octoparse](https://www.octoparse.com)
    - [ImportIO](https://import.io)
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

#### [Octoparse](https://www.octoparse.com)

- Versionen: Free Plan (kostenlos), Standard Plan ($75-89/mo), Professional Plan ($209-249/mo), persönliche Beratung und Erstellung (nach Absprache)
    - Unterschiede in Exportgröße, Anzahl paralleler Scraper, Anzahl Crawler, Supportgeschwindigkeit und -optionen, Nutzung der Cloud, zusätzliche Features (IP-Rotation, planbare Ausführung, API-Zugang)
    - individuelle Rabatte möglich
- OS: Windows
- Benutzerkonto notwendig
- Testversion der kostenpflichtigen Versionen verfügbar
- Community verfügbar
- Advanced Mode und Wizard Mode verfügbar
- Minus: kein Umgang mit dynamisch erstellten Dropdowns

#### [ParseHub](https://www.parsehub.com)

- Versionen: kostenlos, Standard ($149/mo), Professional ($499/mo), Enterprise (nach Absprache)
    - Unterschiede in Seitenanzahl, Geschwindigkeit, Projektanzahl, Dauer der Datenspeicherung in der Cloud, Supportumfang, zusätzliche Features (IP-Rotation, Speichern in Dropbox, planbare Ausführung
    - individuelle Rabatte möglich
- OS: Windows, OS X, Linux (Rechenleistung: Cloud)
- Benutzerkonto notwendig
- keine Testversion der kostenpflichtigen Versionen verfügbar
- Community verfügbar

#### [Mozenda](https://www.mozenda.com)

- Versionen: Project Version ($250/mo), Professional ($350/mo), Enterprise ($450/mo); zusätzlich High Capacity Cloud Version ($40000/y), oder selbst gehostet (individuell)
    - Credit-basiertes System: verschiedene Aktionen verbrauchen unterschiedliche Credits von einem je nach Plan großen Kontingent
    - Unterschiede in Anzahl der Agenten, Projektanzahl, Anzahl Nutzerlizenzen, Cloudspeicherplatz, Anzahl Credits, zusätzliche Features (API, Datenhistorie)
- Benutzerkonto notwendig
- OS: Windows
- Desktopanwendung zur Gestaltung und Test des Scrapers, Ausführung in der Cloud

#### [WebHarvy](https://www.webharvy.com)

- Lizenzmodell statt verschiedener Versionen, Einzellizenz $129
    - Testversion (15 Tage) vorhanden, 2 Seiten Extraktion
- OS: Windows
- Bilddownload möglich

#### [Webscraper.io](http://webscraper.io)

- Versionen: generell kostenloses Browser-Plugin, Ausführung des Scrapings über die Cloud  (ab $50), Erstellung und Ausführung eines Scrapers durch einen Experten (nach Absprache)
- OS: alle, da Chrome-Plugin (Erweiterung der Developer Tools)
- Funktionsumfang begrenzt

#### [Visual Web Ripper](http://visualwebripper.com)

- Lizenzmodell, Einzellizenz $349; Expertenauftrag möglich (nach Absprache)
    - Testversion (30 Tage) vorhanden, max. 100 Elemente Extraktion
- OS: Windows
- großer Umfang möglicher Exportformate

#### [ImportIO](https://import.io)

- Versionen: Free, Essential ($299/mo), Essential Annual ($1999/y), Premium Plan
    - Free: nur 1 Seite
- Benutzerkonto erforderlich
- OS: alle, da Webservice
    - Ausführung in der Cloud

### Eigene

- es gibt diverse Websites, die auch Web Scraping Tools untereinander vergleichen
- noch nicht evaluierte Tools:
    - [FMiner](http://fminer.com)
    - [iMacros](http://imacros.net)
    - [Portia](https://scrapinghub.com/)
    - [myTrama](https://mytrama.com/)
    - [uiPath](https://www.uipath.com/automate/web-scraping-software)
    - [Dexi.io](https://dexi.io/product)
    - [Helium Scraper](https://www.heliumscraper.com/en/index.php?p=home)
    - [IRobot](http://www.irobotsoft.com/)
    - [ScrapeStorm](https://www.scrapestorm.com)
    - [Diggernaut Excavator](https://www.diggernaut.com/excavator/)
    - Weitere Software unter [diesem](https://www.predictiveanalyticstoday.com/category/reviews/web-scraping-tools/) und [diesem](https://www.capterra.com/data-extraction-software/?utf8=%E2%9C%93&users=&feature%5B7%5D=35626&commit=Filter+Results&sort_options=) Link.


#### [Portia](https://scrapinghub.com/)

([GitHub](https://github.com/scrapinghub/portia))

- Versionen:
- OS:
- basiert auf Scrapy - Projekte können als Scrapy Projekte heruntergeladen werden für erweiterte Kontrolle
-

#### [myTrama](https://mytrama.com/)

- Versionen:
- OS:
- Website größtenteils in Spanisch

#### [Helium Scraper](https://www.heliumscraper.com/en/index.php?p=home)

- Versionen: Basic ($99), Professional ($199), Business ($399), Enterprise ($699)
    - Unterschiede in Supportoptionen, Anzahl Nutzerlizenzen, Zeitraum für Upgrades und Updates
- OS: Windows
- nutzt u.a. eine spezielle deklarative Sprache, die an Lambda-Kalkül angelehnt ist


## Übersicht

Tool | letzte Version
--- | ---
Mozenda | 7 (beta), April 2019
ParseHub | ?
Webscraper.io | 0.4.2, August 2019
Visual Web Ripper | ?
WebHarvy | 5.4, Februar 2019
Octoparse | 7.2.6, Mai 2019
ImportIO | ?
FMiner | 9.8.1, Datum unklar
iMacros | 12.5, November 2018
Portia | discontinued
myTrama | ?
uiPath | 2019.4.2
Dexi.io | März 2018
Helium Scraper | 3, Dezember 2018
IRobot | 2.8.4.2018.05.05, Februar 2018
