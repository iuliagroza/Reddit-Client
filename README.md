# Reddit Minimal

**Reddit Minimal (Reddit Client)** is a front-end web app & filtering tool for posts and comments from your favourite subreddits. The user can perform basic operations, such as searching, previewing comments/upvotes, sharing and sorting (by Reddit's default categories) their favourite posts from a predefined list of subreddits. This way, if bookmarks are not useful enough, Reddit Minimal offers a new way of exploring a subject, by searching only posts and comments from subreddits of your interest. 

The app is developed using [the undocumented Reddit JSON API](https://github.com/reddit-archive/reddit/wiki/JSON). *! This is a school project, therefore, the app only supports the Romanian version. An English version will be developed soon.*

You can visualize the app here https://iuliagrozaredditclient.netlify.app .

## Features
* sort posts by Reddit's default categories (Hot, New, Rising, Top);
* gather information about posts, comments, users and subreddits;
* sharing posts (by copying their link in the clipboard);
* Dark Mode.

## Technologies used
* TypeScript;
* React;
* Redux;
* (JSON) API Reddit (undocumented);
* Jest, Enzyme, Selenium.

## Bugs
The app obtained a 78.75 score on LightHouse:
* 28% Performance;
* 98% Accesibility;
* 93% Best Practices;
* 100% SEO.

Some present bugs:
* the Home feed is not always responsive;
* the data fetched from the API cannot be translated to Romanian;
* edge cases are not taken into consideration when performing searches;
* some minor problems with the app routing paths;
* the grid of subreddits is not fluid.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

