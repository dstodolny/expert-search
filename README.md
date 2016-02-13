# Expert Search
**This is the fronted for the Expert Search application. If you want to see the API, go [here](http://github.com/dstodolny/expert-search-api.git)**

Expert Search is a simple expert search tool that allows you to add and search for experts. The application meets the following specifications:

- You enter a name and a personal website address and an expert is created.
- When an expert is created, all the heading (h1-h3) values are pulled in from the website to that expert profile.
- The website URL is shortened
- After the expert has been added, you can define their connections with other existing experts. Connections are bi-directional i.e. If David is in connection with Oliver, Oliver is always in connection with David as well.
- The interface lists all experts with their name, short URL and the number of connections
- Viewing an actual expert displays the name, website URL, shortening, website headings, and links to their connected experts' pages.
- Looking at someone's profile, you can query for experts in the application who write about a certain topic that are not already in direct connection with the viewed person. Results shows the **path of introduction** from the viewed person to the expert.

 *Alan wants to get introduced to someone who writes about 'Dog breeding'. Claudia's website has a heading tag "Dog breeding in Ukraine". Bart knows Alan and Claudia. An example search result would be Alan -> Bart -> Claudia ("Dog breeding in Ukraine").*

## Live demo
If you would like to see a working demo, go [here](https://radiant-dawn-97399.herokuapp.com/)

## Technology stack

|Dependency|Version|
| -------------|------------------:|
| Ember.js     | 2.3.0-beta.3      |

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* Backend server, setup guide provided [here](http://github.com/dstodolny/expert-search-api.git)

## Installation

* `git clone git@github.com:dstodolny/expert-search-api.git` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Make sure to check out the [api repo](http://github.com/dstodolny/expert-search-api.git)
