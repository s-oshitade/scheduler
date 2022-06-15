# Interview Scheduler

## About 
Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database. Each appointment has one student and one interviewer. When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list. The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted. 

## Features
* Users can book new appointments and view exisitng ones
* Users can edit and cancel appointments
* Users are shown a status indicator while asynchronous operations are in progress.
* Users is presented with a confirmation when they attempt to cancel an interview.
* The application makes API requests to load and persist data.

## Minimum Viable Product
### Overview
<p align="center">
<img src="https://github.com/s-oshitade/scheduler/blob/master/public/features/mvp.gif?raw=true" width="80%">
</ p>

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

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

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