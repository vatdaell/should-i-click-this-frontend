# Should I click this? Frontend

## Requirements

For development, you will only need Node.js installed on your environement.

### Node

[Node](https://nodejs.org "Node Installation") and [NPM](https://npmjs.org "NPM installation") are required to run this project. Verify the installation with the commands below.

```
$ node -v
v20.11.1

$ npm -v
10.2.4
```

### Should I click this? Backend

For the frontend to make fetch requests. [Should I click this?](https://github.com/vatdaell/should-i-click-this "Should I click this setup?") backend should be setup and running

## Setup

### Installation

The application needs to be cloned and the npm dependencies to be installed like below.

```
$ git clone https://github.com/vatdaell/should-i-click-this-frontend.git
$ cd should-i-click-this-frontend
$ npm install

```

### Setting up environment variables

To run the application, first create .env.local and populate the following environment variables for example

```
VITE_AUTHORIZATION="Basic dXNlcjpwYXNzd29yZA==" // The authorization headers required to call the backend api
VITE_API_URL="http://localhost:8080/api/consolidated" // The url to the backend api for fetching url verification
VITE_URL_SAFE_MESSAGE="The URL was not found in our data sources" // Message for safe url
VITE_URL_UNSAFE_MESSAGE="The URL was found in our data sources, do not access the url" // Message for unsafe url
VITE_URL_ERROR_MESSAGE="There was an issue verifying the url, please try again later" // Message when there is an issue accessing the backend
VITE_GA_ID=YOUR_GOOGLE_ANALYTICS // Add google analytics key

```

## Running the application

To run the application, run the command below. The application defaults to http://localhost:5173/

```
$ npm run dev

  VITE v4.5.2  ready in 542 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

```

## Release Notes

* Version 2.0.0
* [Version 1.0.0](Release%20Notes/Version-1.0.0.md)
