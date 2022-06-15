# Scheduler

## About 
This project was completed by [me](https://www.linkedin.com/in/seun-oshitade-53001120b/) as part of my learnings at [Lighthouse Labs](https://www.lighthouselabs.ca/en). 

Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database. This application was tested with Jest, Testing-library and Cypress.

<hr>

## Features
* Users can book new appointments and view exisitng ones
* Users can edit and cancel appointments
* Users are shown a status indicator while asynchronous operations are in progress.
* Users is presented with a confirmation when they attempt to cancel an interview.
* The application makes API requests to load and persist data.

<hr>

## Minimum Viable Product

### Overview

<img src="https://github.com/s-oshitade/scheduler/blob/master/public/features/mvp.gif?raw=true" width="80%">

<hr>

### View DayListItem
![](https://github.com/s-oshitade/scheduler/blob/master/public/features/view-daylist-items.png?raw=true)

### Select DayListItem
![](https://github.com/s-oshitade/scheduler/blob/master/public/features/select-daylistitem.png?raw=true)

### Controlled Component
![](https://github.com/s-oshitade/scheduler/blob/master/public/features/controlled-component.png?raw=true)

### Input Validation
![](https://github.com/s-oshitade/scheduler/blob/master/public/features/input-validation.png?raw=true)

### Create New Booking
![](https://github.com/s-oshitade/scheduler/blob/master/public/features/create-new-booking.png?raw=true)

<hr>

## Getting Started

* Clone the [server API](https://github.com/s-oshitade/scheduler-api) and follow the ReadMe to run the server

* Clone [scheduler repo](https://github.com/s-oshitade/scheduler) and Install dependencies with `npm install`.

* Run the Webpack Development Server with `npm start` 


## Dependencies
    axios
    classnames
    normalize.css
    react
    react-dom
    react-scripts

## Dev - Dependencies
    storybook/addons
    storybook/react
    testing-library/jest-dom
    testing-library/react
    testing-library/react-hooks
    babel-loader
    node-sass
    prop-types
    react-test-renderer

## Testing
This project was tested with Jest, Testing-library and Cypress.

## Continuous Improvement
* Implement reducer and web socket
* Host app on Heroku

## License 
This project is available under the ISC license.