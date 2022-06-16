# Scheduler

## About 
This project was completed by [me](https://www.linkedin.com/in/seun-oshitade-53001120b/) as part of my learnings at [Lighthouse Labs](https://www.lighthouselabs.ca/en). 

Interview Scheduler is a single-page application (SPA) that allows users to book interviews between students and mentors. The front end is built with React and makes `axios` requests to an API to load and persist data. This application was tested with `Jest`, `Testing-library` and `Cypress`.

<hr>

## Selected Features
* Users can book new appointments and view exisitng ones
* Users can edit and cancel appointments
* Users are shown a status indicator while asynchronous operations are in progress.
* Users receive confirmation prompt when they attempt to cancel/delete an interview.


<hr>

## Minimum Viable Product

### Overview

<img src="https://github.com/s-oshitade/scheduler/blob/master/docs/mvp.gif?raw=true" width="80%">

<hr>

### View DayListItem
![](https://github.com/s-oshitade/scheduler/blob/master/docs/view-daylist-items.png?raw=true)

### Select DayListItem
![](https://github.com/s-oshitade/scheduler/blob/master/docs/select-daylistitem.png?raw=true)

### Controlled Component
![](https://github.com/s-oshitade/scheduler/blob/master/docs/controlled-component.png?raw=true)

### Input Validation
![](https://github.com/s-oshitade/scheduler/blob/master/docs/input-validation.png?raw=true)

### Create New Booking
![](https://github.com/s-oshitade/scheduler/blob/master/docs/create-new-booking.png?raw=true)

### Confirm Delete
![](https://github.com/s-oshitade/scheduler/blob/master/docs/confirm-delete.png?raw=true)

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


## Continuous Improvement
* Implement reducer and web socket
* Host app on Heroku

## License 
This project is available under the ISC license.