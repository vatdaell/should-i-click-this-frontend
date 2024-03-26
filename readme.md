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
VITE_LINK_API_URL="http://localhost:8080/api/link" // The url to the backend api for fetching link verification
VITE_DOMAIN_API_URL="http://localhost:8080/api/domain" // The url to the backend api for fetching domain verification
VITE_LINK_SAFE_MESSAGE="The link is was not found in phishing.db" // Message for safe link 
VITE_LINK_UNSAFE_MESSAGE="The link was found in phishing.db, do not access the link" // Message for unsafe link 
VITE_DOMAIN_SAFE_MESSAGE="The domain is was not found in phishing.db" // Message for safe domain
VITE_DOMAIN_UNSAFE_MESSAGE="The domain was found in phishing.db, do not access the domain" // Message for unsafe domain 
```

The VITE_AUTHORIZATION 

## Running the application

To run the application, run the command below. The application defaults to http://localhost:5173/

```
$ npm run dev

  VITE v4.5.2  ready in 542 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

```
