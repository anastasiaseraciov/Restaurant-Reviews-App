# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_


## Project Overview: Stage 1

For the **Restaurant Reviews** projects, I had to incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, I initial had a static design that lacks accessibility and converted it to a design that is responsive on different sized displays and accessible for screen reader use. I also had to add a service worker to begin the process of creating a seamless offline experience for users.

### Specification

I have been provided the code for a restaurant reviews website. The code haa a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. My job is to update the code to resolve these issues while still maintaining the included functionality.

## View Website :smiley:

To acces the files or view the website you need to download or clone the repository files to your local machine
with <code>git clone https://github.com/anastasiaseraciov/Restaurant-Reviews-App.git</code>

View a scratch of the Project live --> [HERE](https://anastasiaseraciov.github.io/Restaurant-Reviews-App) till I will find a solution to make it available without a Python server.

## Dependancies

The webpage is visible if run on a local Python server with the 8000 port.

1. Create Server from command line in the website file directory
   Python 2: python -m SimpleHTTPServer 8000 
   Python 3: python3 -m http.server 8000
   Visit the site in your browser at http://localhost:8000

I encountered a issue while trying to install python, here how I resolved it. Fixed issue with path: https://www.pythoncentral.io/add-python-to-path-python-is-not-recognized-as-an-internal-or-external-command/


## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). 

## ARIA :trophy:
This repository uses [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) labels and roles for better web accesibility for people with disabilities. 

## FLEX-LAYOUT :evergreen_tree:
This repository uses [flex CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) to style the layout and images responsively.

## SERVICE-WORKER :file_folder:
This repository uses a [service worker](https://developers.google.com/web/fundamentals/primers/service-workers/) to cache files.

### ACCESIBILITY :sunglasses:
The webpage is tested to be working on Google Chrome, Mozilla Firefox, Chrome Canary.

## CONTRIBUTING
The initial [code](https://github.com/udacity/mws-restaurant-stage-1) was given by UDACITY.
