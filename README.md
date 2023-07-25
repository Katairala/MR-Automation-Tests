# MegaRocket Automation Tests  🤖
This repository contains automated end-to-end tests using the WebDriverIO framework to test the functionality of MegaRocket's website.
You can watch the original repository on https://github.com/BaSP-m2023/joaco-megarocket-app.
This is the link for MegaRocket's website joaco-megarocket-app.vercel.app.

## Introduction 🏋️
The purpose of this project is to perform end-to-end testing using the WebDriverIO framework for MegaRocket Gym company. The objective of this system is to facilitate the management of the schedule grid and trainers assigned to each class, providing members with the possibility to enroll dynamically.
<br>
- The intended users of this web system include:
<br>
<li>Members: They can register, login, purchase memberships, 
enroll in and withdraw from classes.</li>
<li>Trainers:  they will have access to view their assigned schedules and the members enrolled in their classes.</li>
<li>Administrators: who have access to create and edit classes, add trainers and assign them to classes, manage member profiles, and handle membership cancellations, among other functions.</li>
<li>Super-admins: they are responsible for managing the administrators.</li>

<br>

## Prerequisites
Before running the tests, please ensure you have the following installed:


<li>Node.js (https://nodejs.org)</li>
<li>WebDriverIO (https://webdriver.io)</li>
<li>Chrome or Firefox browser (latest version)</li>

<br>
## Setup 💻
To set up the project, follow these steps:

- Clone this repository to your local machine.
- Install dependencies: 

```console
 npm install
```

<br>

## Running the Tests 💻
To run the automated tests, execute the following command:

```console
 npx wdio
```

<br>

## Test Structure
The tests are organized in the following structure:

<br>

### Page Objects
In the ./page-objects directory, you will find the page objects that represent the different screens and components of the application. These objects encapsulate the user interface elements and methods to interact with them. The page objects are divided based on the application's structure.

### Specs
In the ./specs directory, you will find the specification files that contain the test cases written using the testing language. These files are organized by user and focus on the different functionalities of the application.

<br>

## Author  🥰

| Photo | Name | Github | 
| :---: | :--: | :----: |

<img src="https://avatars.githubusercontent.com/u/127452795?v=4" height="50" width="50">| Katerine Airala | [@Katairala](https://github.com/Katairala)

<br>
