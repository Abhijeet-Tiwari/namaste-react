const heading = React.createElement('h1', {
  className: 'header',
  abc: 'xyz'
}, 'I am loving React!');

console.log(heading); //Object

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(root);

root.render(heading);

//Creating nested HTML structure
/* 
<div id="parent">
<div id="child">
<h1> Creating nested HTML structure!</h1>
</div>
</div>
*/

/* const parent = React.createElement('div', {id: 'parent'}, 
React.createElement('div', {id: 'child'}, 
React.createElement('h1', {
  className: 'header'
}, 'Creating nested HTML structure!'))); */

// console.log(parent);

// root.render(parent);

//Creating nested HTML structure
/* 
<div id="parent">
<div id="child">
<h1> Creating nested HTML structure!</h1>
<h2> Creating sibling HTML structure!</h2>
</div>
</div>
*/


/* const parent = React.createElement('div', {id: 'parent'}, React.createElement('div', {id: 'child'}, [
  React.createElement('h1', {}, 'Creating nested HTML structure!'), React.createElement('h2', {}, 'Creating sibling HTML structure!')
]))

root.render(parent); */


//Creating nested HTML structure
/* 
<div id="parent">
<div id="child1">
<h1> Creating nested HTML structure!</h1>
<h2> Creating sibling HTML structure!</h2>
</div>

<div id="child2">
<h1> Creating nested HTML structure!</h1>
<h2> Creating sibling HTML structure!</h2>
</div>
</div>
*/

const parent = React.createElement('div', {id: 'parent'}, [
  React.createElement('div', {id: 'child1'}, [
  React.createElement('h1', {}, 'Creating nested HTML structure!'), 
  React.createElement('h2', {}, 'Creating sibling HTML structure!')
]), 
  React.createElement('div', {id: 'child2'}, [
    React.createElement('h1', {}, 'Creating nested HTML structure!'), 
    React.createElement('h2', {}, 'Creating sibling HTML structure!')
  ])
]);

root.render(parent);






