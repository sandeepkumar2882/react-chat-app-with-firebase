# Getting Started with Create React App

This Repo is for my learning purpose, in this I have created a real-time chat application using react and firebase.

# Installation

### Install node npm
`brew install node`

### Create React App
`npx create-react-app app-name`

### To install all the dependencies from the package.json file, just run the command
`npm i` or `npm install`

### Routing Package Install 
`npm install react-router-dom`
* You can install all other packages that are needed for us like this

### If any package failed installation (try this command once)
`sudo npm cache clean` or `sudo npm cache clean --force `

# Project

## Chat App (Developers Chat)
* I am using firebase's feature SignInWithEmailAndPassword for this application. You can register with your details and can also add display picture. Search feature make you able to chat with anyone existing user on this chat app, you can easily share data with them.

### Project Path
* src/Index.js (main file in src folder), after this file you can navigate to other files or components.

### Files
* App.js (Responsible for enqueue all the important components and manage routing).
* components folder have all the components related to chat.
* context folder have useContext api and use reducer files.
* img folder have all the images.
* pages folder have three pages Home, Register and Login.

* There is an one more file that is not in the repository, because that file have all the security and authentication keys, so when you will start with firebase and create a project then firebase will provide you to a peace of code, that code you can pase in the firebase.js file.


## Available Scripts

In the project directory, you can run:

### inside the chat app folder just run the command - `npm run start`

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

