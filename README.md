# Angular project for the frontend master's at Lemoncode 👩🏻‍💻🚀

This project is the deliverable for the Angular class of the Lemoncode Master program. The goal of this project is to practice various aspects of Angular development while creating an application that focuses on user authentication and navigation.

## Project Theme 📚

The project involves building an application with the following features:

- Creating components and services using the Angular CLI.
- Integrating Angular Material into the project.
- Designing the complete layout of the application.
- Programming a service to manage the application state.
- Using dependency injection for services.
- Implementing routing to navigate between different pages.
- Building a form for user login.

## Exercise Overview 📋

The exercise requirements are as follows:

1. 🏗️ Create a new Angular project with routing and SCSS styles.
2. 🎨 Integrate Angular Material by following the guide: [Angular Material Getting Started](https://material.angular.io/guide/getting-started).
3. 🛠️ Create the necessary components to build the layout described in the exercise instructions. This includes layout components (public header, private header, footer, public menu, private menu) and routed components (home, login, about, gallery).
4. 🚦 Configure routing to assign URLs to each of the 7 pages in the menus. Display both public and private menus simultaneously to verify functionality.
5. 📝 Build a login form with username and password fields, along with validation and error messages. Upon form submission, invoke the `login()` method of the Auth service.
6. ⚙️ Develop an Auth service to manage user authentication state. The service should provide methods for login, logout, checking login status, and retrieving the username.
7. 🔄 Modify the login component to redirect the user to the dashboard if the login service returns `true`.
8. 📌 Display the public menu only when the user is not logged in and the private menu when the user is logged in.
9. 🔒 Add a "Log Out" button in the header that is visible only when the user is logged in.
10. 👤 Display the username of the logged-in user in the header when the user is logged in.
11. 🌟 Challenge: Implement persistence to the authentication state by storing the state in `localStorage`.

## Getting Started 🚀

0. 🧱 This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.
1. 📥 Clone the repository.
2. ⚙️ Run `npm install` to install dependencies.
3. ▶️ Run `ng serve` to start the development server.
4. 🌐 Open your browser and navigate to `http://localhost:4200/`.

Feel free to explore and enhance the project further according to your learning goals and creativity.
