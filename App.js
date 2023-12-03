const heading = React.createElement('h1', {
  className: 'header',
  abc: 'xyz'
}, 'I am loving React!');

console.log(heading); //Object

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(root);

root.render(heading);