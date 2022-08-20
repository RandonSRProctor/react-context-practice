# React Context Practice App

This app is a very simple example of comparing the use of Context versus passing down props from parent to child, to child, to child (aka "prop drilling").

## How the Example Works

In `App.js`, you will fine a useState hook which creates a boolean called `isDark`. This value is passed down to each child component. Each child component will then use this value in it's logic to determine which CSS classes will be applied.

Run program: `npm start`
