# WDI Project 2 - Trip Consultant

## Link to Project
The project can be used on Heroku [here](http://tripconsultant.herokuapp.com/)

<img width="1440" alt="Trip Consultant homepage" src="https://user-images.githubusercontent.com/13580512/35149330-9bc7c588-fd0d-11e7-92c0-9a45cecf5ee6.png">

Users view a grid of all tourist attractions listed on the site and can select an attraction they would like to view.

<img width="1440" alt="Trip Consultant attractions index page" src="https://user-images.githubusercontent.com/13580512/35149434-f3405154-fd0d-11e7-88f6-9814b1c9a5b0.png">

When a user selects an individual attraction they are shown a page containing that attraction's rating, address, website, photo as well as a brief description and the category it falls under. Much of this data is pulled from Google APIs. If they are the user who added the attraction to the site, they are shown edit and delete buttons. Users are also shown a map centred on a marker placed on that attraction.

Signed in users can comment on attractions and later delete those comments.

<img width="1440" alt="Trip Consultant attractions show page" src="https://user-images.githubusercontent.com/13580512/35149495-2f2eeac2-fd0e-11e7-8020-bee6fd75593a.png">

The Google Places API is used to help users add new attractions. When a place is selected the API is used to fill in the majority of the form fields automatically if Google has that information readily available in the API.

<img width="1440" alt="Trip Consultant new attraction page" src="https://user-images.githubusercontent.com/13580512/35149743-36364652-fd0f-11e7-8fc7-179f7a3414b4.png">

## Tools used
* Javascript
* jQuery
* Node.js
* SASS
* Bootstrap
* Mongo
* Gulp
* Balsamiq
* Trello
* Git
* Heroku

#### Dependencies
* Bcrypt
* Bluebird
* Body parser
* Ejs
* Express
* Express ejs layouts
* Express flash
* Express session
* Method override
* Mongoose
* Morgan

#### APIs
* Google Maps API
* Google Places API

## Features to Implement
* Display all attractions as markers on the homepage map
* Select multiple attractions to visit and generate a walking route
* Location biasing for the new attraction search field
* User profile pages

## Links
* Project on [GitHub](https://github.com/P-atrick/WDI-Second-Project)
* Project deployed with [Heroku](http://tripconsultant.herokuapp.com/)
