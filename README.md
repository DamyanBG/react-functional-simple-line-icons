# react-functional-simple-line-icons

Simple React functional component for using [simple-line-icons](http://simplelineicons.com/) in React application.

This repository is related to other repo - [react-simple-line-icons](https://github.com/shahafa/react-simple-line-icons). 
Unfortunatelly this repository is not maintained and it have vulnerable version of React. For that I made similar project, 
just added newer version of React and I added peerDependencies. 

## Installation
react-functional-simple-line-icons is available as an [npm package](https://www.npmjs.com/package/react-functional-simple-line-icons).

```sh
npm install react-functional-simple-line-icons
```
or
```sh
yarn add react-functional-simple-line-icons
```

## Usage
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import SimpleLineIcon from 'react-functional-simple-line-icons';

function App() {
  return (
    <SimpleLineIcon name="bulb" />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
```

## Contributing

All contributions are welcomed!

## License

This project is licensed under the terms of the
[MIT license](https://github.com/shahafa/react-functional-simple-line-icons/blob/main/LICENSE)