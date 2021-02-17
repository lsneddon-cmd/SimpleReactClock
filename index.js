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

// const Hello = (props) => {
//   return React.createElement(
//     'h1',
//     {className: 'orange'},
//     `Hello ${props.time}`
//   )
// }

class Hello extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    }
  }

  tick() {
    this.setState( () => {
      return ({
        time: new Date().toLocaleString()
      })
    })
  }

  componentDidMount() {
    this.interval = setInterval( () => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return React.createElement(
      'h1',
      {className: 'orange'},
      `Hello ${this.state.time}`
    )
  }
}

ReactDOM.render(
  React.createElement(Hello, {}, null),
  document.getElementById('app')
);
