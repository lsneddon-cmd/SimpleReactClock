const rootElement = document.getElementById('app');

// const myElement = document.createElement('h1');
// myElement.className = 'orange';
// myElement.innerText = 'Hello world';
// rootElement.appendChild(myElement);

// const myReactElement = React.createElement(
//     'h1',
//     {className: 'orange'},
//     'Hello world!'
// );

const Hello = () => {
  return React.createElement(
    'h1',
    {className: 'orange'},
    'Hello world!'
  )
}

ReactDOM.render(
  React.createElement(Hello, {}, null),
  document.getElementById('app')
);
