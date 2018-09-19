# Cornerstone web tech test

## Overview

Even though we use React, you can solve the test without it. This means that, if you want to use a framework, we require React. Otherwise, please use plain vanilla JS, with some helper libraries (in case you need to).

Create a Web app that utilises the NASA Open API for browsing the Astronomy Picture of the Day

## Criteria

- If you've chosen React, use [create-react-app][rca] for the project base and [react-router-dom][rrd] for routing

- App should be able to run on the latest version of [Node.js][node] with only the following commands

  ```sh
  npm install
  npm start
  ```

- Homepage should show Astronomy Picture of the Day for current day

- Navigating to `/YYYY-MM-DD` should show Astronomy Picture of the Day for YYYY-MM-DD

- Homepage should have a date picker for easily navigating to `/YYYY-MM-DD`

- App should make use of the latest JavaScript features such as;
  - `import` + `export` in place of `require()` + `module.exports`
  - arrow functions where they reduce the complexity of the code or lexical scope
  - `rest` and `spread` properties
  - object destructuring
  - anything else you find nifty

---

## NASA Open API

Once you have your [API key][api_key] you should be able to access the data required using the following endpoint

**HTTP Request**

GET https://api.nasa.gov/planetary/apod

**Query Parameters**

| Parameter | Type       | Default  | Description                                    |
| --------- | ---------- | -------- | ---------------------------------------------- |
| date      | YYYY-MM-DD | today    | The date of the APOD image to retrieve         |
| hd        | bool       | False    | Retrieve the URL for the high resolution image |
| api_key   | string     | DEMO_KEY | api.nasa.gov key for expanded usage            |

**Example Query**

GET https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

---

## Bonus Task

- Unit tests
- If you've chosen vanilla JS, use whatever you feel is right for state management.
- If you've chosen React, use [React component state][react_state] or [Redux][redux] to store/cache data fetched from the API to avoid hitting the server again for repeat requests
- If you've chosen React, style the app using [styled components][styled_components]

[rca]: https://github.com/facebookincubator/create-react-app
[rrd]: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom
[node]: https://nodejs.org/en/
[api_key]: https://api.nasa.gov/index.html#apply-for-an-api-key
[react_state]: https://facebook.github.io/react/docs/state-and-lifecycle.html#using-state-correctly
[redux]: https://github.com/reactjs/redux
[styled_components]: https://www.styled-components.com/
