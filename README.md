# Getting Started with Create React App

# React Intro
React JS
.js

-> SPA (Single Page Appln) => whole website contains a single HTML page 
-> components => group of codes
-> Data Binding => Uni-Directional , Flow of the data
-> Virtal DOM =>
                                HOME.jsx
                                   |
        |---------------------------|----------------|------------------------------|
        |                           |                |                              |
    bannerSection.jsx        navbar.jsx          section.jsx                     footer.jsx
                                |->HomePage.jsx
                                |->aboutUs.jsx
                                |->etc..

# Virtual DOM:
   -> I updated <p> in <body> ---------> Virtual DOM ------> DOM -----> HTML Manipulations reflected on web pg

# SPA:
-> index.html
    <html>
        <body>
            <div id="root">
            </div>
        </body>
    </html>

# Components:
    >> Class Components (Older Version)
    >> Function Components (Newest Edition)

# Redux (State Managment):
 ->Redux is an open source JavaScript library for managing and centralizing appln state.

# Hooks (Lifecycle methods)
->Hooks are functions that let you "hock into" React state and lifecycle features from function components.
->it is allow you to use state and other React features without using class.
-> Hooks -> useState(), setState()
=> example :
import {useState} from "react";
const [variable, func] = useState();
const [count, setCount] = useState();

const [num, setNum] = useState(5);
num += 1;


btn => 
## runnig app
 # npx => node package execution
-> npx create-react-app (project-name)
 => cd project-name
 => npm start

 ### Components n workflow
 # components :
  => Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
  =>Components come in two types, Class components and Function components,
  
  # class components
  ->A class component must include the `extends React.Component` statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

 ->The component also requires a `render()` method, this method returns HTML.

=> Example
    Create a Class component called Car

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

# function components
-> A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand.

=> Example
Create a Function component called Car

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

# The workflow for developing a React application is as follows:

1. Create a new React application using the create-react-app command.
2. Create a new component for each part of your UI.
3. Pass data and functions to components as props.
4. Render components to the DOM using the ReactDOM.render() method.
5. Update the state of components using the setState() method.
6. Handle user events using event handlers.
7. Repeat steps 3-6 until your UI is complete.

## State & Props

# state:
-> React components has a built-in state object.
-> The state object is where you store property values that belong to the component.
-> When the state object changes, the component re-renders.

# Creating the state Object
     The state object is initialized in the constructor:

=> Example 
 -> Specify the state object in the constructor method:

    class Car extends React.Component {
        constructor(props) {
            super(props);
            this.state = {brand: "Ford"};
        }
        render() {
            return (
            <div>
                <h1>My Car</h1>
            </div>
            );
        }
    }

# Using the state Object
Refer to the state object anywhere in the component by using the this.state.propertyname syntax:

->Example:
Refer to the state object in the render() method:

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}

# Changing the state Object
To change a value in the state object, use the `this.setState()` method.

When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).

->Example:
Add a button with an onClick event that will change the color property:

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}

# props:
-> Props are arguments passed into React components.
-> Props are passed to components via HTML attributes.
-> `props` stands for properties.
->  Parent Node -> Child Node
-> eg.- App.js -> ClassComponent.jsx | FunctionComponent.jsx

# React Props
-> React Props are like function arguments in JavaScript and attributes in HTML.
-> To send props into a component, use the same syntax as HTML attributes:

=> Example
 .Add a "brand" attribute to the Car element:

 > const myElement = <Car brand="Ford" />;

=> The component receives the argument as a props object:

=> Example
.Use the brand attribute in the component:

> function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

## Routing N Layouts in ReactJs
=> Create React App does not include page routing.
=> Ract Router is the most popular solution.

=>Example :
 Router >> Routes > Route 
 /contact /aboutUs /signIn /signUp

# Add React Router
=>To add React Router in your application, run this in the terminal from the root directory of the application:

> npm i react-router-dom

WorkFlow wrt ur routes 
>> index.js(Browser Router) >> app.js  >> diff routes

## WorkFlow index.js >>  app.js >> pages

//webpage
>> /contact /aboutUs /signIn /signUp

## Folder Structure
=> To create an application with multiple page routes, let's first start with the file structure.

=> Within the `src` folder, we'll create a folder named `pages` with several files:

> `src\pages\`:

`Layout.js`
`Home.js`
`Blogs.js`
`Contact.js`
`NoPage.js`

-> Each file will contain a very basic React component.

=> Basic Usage
Now we will use our Router in our `index.js` file.

Layouts (HOC || High Order Component)
/parentSignInAndUp
>> Nav n Footer

<!-- HOC's can add additional info/features to the existing components -->


## React Life Cycle Methods