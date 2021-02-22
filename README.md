# Installation

`git clone https://github.com/willyrabbits/UlaboxChallange.git`

`cd UlaboxChallange`

`npm install`

`yarn start`


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Considerations

* I could have added more info in the detail screen, but I think that it would not demonstrate my knowledge (I already had the data, and I have demonstrated that I know how to make proper use of HTML, CSS & JS)

* I made a basic design to have some starting point (https://www.figma.com/proto/9skvNtstuoze5bNLjfpcIP/Ulabox-Weather?node-id=1%3A8&viewport=-3435%2C944%2C1.6768354177474976&frame-preset-name=Desktop&scaling=min-zoom). I did not follow it 100% but it helped me to have a global idea of the project at the beginning.

* I need to keep working on "code test", I would say is the thing I have done less in my career, and I am sure you can tell by taking a look at them. Moreover, I made the test the last thing on the project... ( MEEEC! my bad vv' ) I know they should be done at the same time while you develop. That's the lack of practice I guess :/ 


# Future steps

* Improve tests done with 'react testing library', some basics are done, but they need to be improved.

* Implement Jest test. Currently, Test are done with React Testing Library which is compatible with Jest.

* Fetch the list of cities from somewhere else (currently they are 'hardcoded' in a data file). This way it will be more dynamic and we'll have more options to choose from.

* Adding localization to the project (i18n) to manage the translations easily. Even if there is only one language, having all the literals in the same file makes it easier to manage them.

* Add media-queries to the CSS files. I have been working with percentages for all my styles, and that's OK for most of the computer screens (I have been 2 screens while developing and I was making sure that the web didn't break the design when changing from one to another). But it is not okay when you try to use this web-app on a smartphone (is not bad either you can still use it 100%).

* Add 404 Page
