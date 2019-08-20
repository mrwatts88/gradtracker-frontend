# frontend-example cookbook

This project is intended as both an example to be referenced, and a cookbook to kickstart new app development.

## Prerequisites

### Software:

**Required**

1. [Git](https://git-scm.com/)
2. [Node.js](https://nodejs.org/en/download/) version >= 10.16.0
3. An IDE ([VSCode](https://code.visualstudio.com/) preferred)

**Optional**

1. Docker - used to quickly and easily run the backend and database locally. If you prefer, you can directly run the Java jar and MySQL workbench instead.
2. VSCode extension "ESLint" - Quality-of-life extension that will run ESLint against code in real-time

### Knowledge

1. Node.js/JavaScript ([high-level video](https://www.youtube.com/watch?v=RjBxeb9erQk) and [interactive walkthrough](https://nodejs.dev/))
2. [React](https://reactjs.org/tutorial/tutorial.html)
3. [Redux](https://redux.js.org/basics/basic-tutorial)

<!-- ==================================================================================================== -->

## Getting set up

1. `git clone https://gitlab.nmcapstone.com/nm-capstone-cookbooks/frontend-example.git`
2. `cd frontend-example`
3. `npm install`
4. Start up the backend
    - If you are using Docker, simply follow these steps:
        1. `docker login docker.nmcapstone.com`
        2. `npm run infra:up`
    - If you are not using Docker, then please refer to the [project docs](https://gitlab.nmcapstone.com/nm-capstone-cookbooks/nm-capstone-backend-cookbooks/backend-example#using-this-project).

## Build and run on your local machine

### NPM Scripts

NPM scripts are custom commands that simplify common project tasks, such as:

-   Running tests
-   Building and starting the application
-   Running code quality tools like ESLint

These scripts are defined `scripts` block of the `package.json` file, and can be run in a terminal using `npm run <script-name>`.  
If the script requires additional arguments, use the format `npm run <script-name> -- <arguments...>`.  
See below for the included commands and examples

This project includes a base set of commands:

| Script               | Examples                     | Purpose                                                                 |
| -------------------- | ---------------------------- | ----------------------------------------------------------------------- |
| `infra:up`           | `npm run infra:up`           | Used to start up the backend via Docker and Docker-Compose              |
| `infra:down`         | `npm run infra:down`         | Used to tear down the backend via Docker and Docker-Compose             |
| `test`               | `npm run test`               | Used to execute unit and integration tests                              |
| `build`              | `npm run build`              | Used to build the static WebApp bundle                                  |
| `build:local-docker` | `npm run build:local-docker` | Same as `build`, but specifically for running the app locally in Docker |
| `build:deployed`     | `npm run build:deployed`     | Same as `build`, but specifically for running the app in AWS            |
| `start`              | `npm run start`              | Used to start up the app and serve the static bundle from `build`       |
| `start:dev`          | `npm run start:dev`          | Used to both build and start the app locally (use this when developing) |

### Start up the app

Once you are all set up, with the backend already running, you can start the webapp simply by:

1. Run the command `npm run start:dev`
2. Open a browser
3. Navigate to `http://localhost:4000`

### Running Tests

You can execute all unit and integration tests by running `npm run test`.  
If you only want to run a single test, use the command format `npm run test -- path/to/your/file.js`.  
If you want the tests to automatically re-run when you make changes, use the command format `npm run test -- --watchAll`.  
You can also watch a single test with the command format `npm run test -- --watchAll path/to/your/file.js`.

#### View the application

follow me: [app on local host](http://localhost:4000)

## Issues

### Encountering issues installing locally, or with Docker?

Please let us know **asap**.
