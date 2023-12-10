import React  from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement  ==> Object ==> HTMLElement(When rendered) 
// Creating Element using Core React!
// const heading = React.createElement("h1", {id: "heading"}, "This is Abhijeet🫣")

// console.log(heading);

// JSX - HTML-like or XML Syntax but not HTML or XML. JSX is JSX
// Creating Element using JSX!

// JSX (transpiled before it reaches JavaScript Engine) - PARCEL - Babel

// JSX is then transpiled by babel to React.createElement => ReactElement(JS Object)

/* const jsxHeader = (<h1 id="heading" 
className='head' 
tabIndex={1}>H1 tag using JSX!</h1>) */

// React Component
// Class Based Component - OLD
// Functional Component - NEW

// React Functional Component (starts with Caps)

const Title = () => (<h1 id="heading" 
className='head' 
tabIndex={1}>H1 tag using JSX!</h1>)

// Component Composition - Putting components together
const HeadingComponent = () => (
  <div id='parent'>
    <Title></Title>
    <h1 id="heading">Functional Component</h1>
  </div>
  )

// console.log(jsxHeader);
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeader); 
root.render(<HeadingComponent/>); 


