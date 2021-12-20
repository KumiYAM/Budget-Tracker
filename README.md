🏗️ Budget-Tracker
## Description
    This application "Budget-Tracker" allow user to access that information at any time even offline. The user's financial informations, expenses and deposits, were entered and stored while user have no internet connection, and keep recording in application. The total should be updated when user brought back to internet online.   

## Table of Contents

- [Title](#title)
- [Description](#description)
- [Installatin](#installation)
- [Usage](#usage)
- [Licens](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [How to ask Question](#Questions)
- [Language](#language)

## Installation
   Due to on going process of building the application, installation is not avalable to public now.<br/>
   The application will be invoked by using the following command on command line:<br/>
   `npm start`

## Usage
User Story:<br/>
AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection<br/>
SO THAT my account balance is accurate when I am traveling<br/>
## License
![unlicensed](https://img.shields.io/badge/unlicense-%24%7Blicense%7D-green)


## Contributing
Undefined

## Tests
In-progress 

## How to ask questions
GitHub User Name :  ("https://github.com/KumiYAM")

## Language
<!-- ![JavaScript](https://img.shields.io/badge/ -->
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)



= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
SELF NOTES for submission 


Offline Functionality
You’ll need to use IndexedDB to add offline functionality. Review Module 18: NoSQL, Lesson 4: Add Offline Persistence with IndexedDB as a refresher on how to add this to your application.

You’ll also need to add a service worker to your application. Review Module 19: Progressive Web Applications (PWA), Lesson 4: Using Service Workers as a refresher on how to add this to your application.
===
Acceptance Criteria
GIVEN a budget tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated

===
The Food Festival application that you created in this module's lessons did not include an Express.js server, so you used the webpack-dev-server npm module to test the service worker with an HTTPS-enabled server.

For this Challenge, however, you aren't using webpack, but you do have an Express.js server provided to you in the starter code. Remember that Chrome DevTools makes it possible to test service workers on localhost in development. Simply click the Application tab, then select Service Workers from the menu on the left.

==
Once you’ve updated the existing budget tracker, it should provide the following functionality:

The ability to enter deposits offline.

The ability to enter expenses offline.

Offline entries should be added to the tracker when the application is brought back online.

==
Web Manifest
Because this will be a mobile-first application, you’ll also need to add a web manifest to your application with the app’s metadata, to let users’ devices know what they’re installing and how the app should look on the home screen.

This manifest.json file for this project will contain the following properties:

name

short_name

icons

theme_color

background_color

start_url

display

==
IMPORTANT
In the module project, you used webpack to create the manifest.json file. For this application, you’ll need to create it manually and add it to the root of the public/ directory of your application. You can also review Module 19: Progressive Web Applications (PWA), Lesson 5: Convert the App to a PWA as a refresher on web manifests.

==
Deployment to Heroku Using MongoDB Atlas
Finally, the budget tracker has a server and uses MongoDB as its database, so you’ll need to deploy this application to Heroku using MongoDB Atlas. To review this process, look at Module 18: NoSQL, Lesson 5: Add Mongoose Validation, specifically 18.5.5: Deploy to Heroku.








