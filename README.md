# React Counter App

This is a simple React counter app that allows you to increment, decrement, and reset a count value. It uses TypeScript, React hooks, and CSS for styling.


## Features

- The app displays the current count value in a large font.
- The app has three buttons: +, -, and Reset.
- The + button increments the count value by one.
- The - button decrements the count value by one.
- The Reset button sets the count value to zero.
- The app logs the current count value to the console whenever it changes.

## Main concepts

This app demonstrates some of the main concepts of React, such as:

- **State**: State is a way of storing and managing data that changes over time in a React component. State can be used to store user input, UI elements, API responses, etc. State can make our components dynamic and interactive. State is local and private to each component, unless we pass it down as props to other components.
- **useState hook**: To use state in a functional component, we need to import the useState hook from React and use array destructuring to assign names to the state value and the setter function. The initial state value can be any type of data, such as a string, a number, an object, an array, etc. To update the state value, we need to call the setter function with the new value as an argument. The setter function can also accept a function that takes the previous state value as a parameter and returns the new value. Updating the state will trigger a re-render of the component.
- **Click events**: To handle click events in React with TypeScript, we need to specify the type of the event object and the element that triggers the event using React synthetic events and HTML elements as generic parameters. For example, if we want to handle a click event on a button element, we can use React.MouseEvent<HTMLButtonElement> as the type of the event object. To access the properties of the event object or the element, we need to use dot notation or bracket notation. For example, event.currentTarget.name will give us the name attribute of the button element.

## How to start the app

To start the app, you need to have Node.js and npm installed on your machine. Then follow these steps:

- Clone this repository to your local machine.
- Navigate to the project folder and run `npm install` to install the dependencies.
- Run `npm start` to start the development server and open the app in your browser.
- Enjoy the app and feel free to modify it as you wish.

## Additional resources

If you want to learn more about TypeScript, React hooks, or CSS, you can check out these links:

- [Getting started with React - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [React](https://reactjs.org/)
- [Learn React | Codecademy](https://www.codecademy.com/learn/react-101)
- [What is a React Developer? - Full Scale](https://fullscale.io/blog/what-is-a-react-developer/)
- [React Hooks cheat sheet: Best practices with examples - LogRocket Blog](https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/)
- [Built-in React Hooks – React](https://reactjs.org/docs/hooks-reference.html)
- [react-hooks examples – CodeSandbox](https://codesandbox.io/examples/package/react-hooks)
- [Using the State Hook – React (reactjs.org)](https://reactjs.org/docs/hooks-state.html)
