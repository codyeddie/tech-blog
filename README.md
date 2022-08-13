## Tech Blog 

## Description 
The point of this application is to allow users to login or sign up for the tech blog application. Once logged in, users will be able to create posts as well as view and comment on other user's posts.

* Heroku Link

## Table of Contents

* [Installation](#installation)
* [Contribution](#contribution)
* [Video Demo](#video-demo)

## Installation 
To install this application you must first clone the repo to your local machine. Once the repo is cloned to your machine, you must then install the dependencies in your root directy after an NPM install. Once mysql2 and inquirer have been installed you must create a .env file and input the DB_NAME, DB_USER, and DB_PASSWORD fields to match what's in the connection.js file. Once that is done you can login to the mysql shell and source the schema.sql files in the db/ folder. Once that file has been sourced using the 'source db/schema.sql' command then your next step is to seed the database using 'npm run seeds' in the command line. The last step is to run 'npm start' command in your command line. From here, you should be able to launch insomnia and use the routes as needed. 

## Contribution 
I utilized my tutor and referenced previous module work and lessons to complete this assignment. 

## Video-Demo

![Screenshot](/assets/imgs/screenshot.png)
