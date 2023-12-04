# What is Emmet?

Emmet is a web development tool that allows developers to write HTML and CSS code quickly and efficiently. It is a shorthand syntax for writing HTML and CSS, enabling users to create markup and styles with fewer keystrokes. Emmet is often used in code editors and integrated development environments (IDEs) to boost productivity and streamline the coding process.

With Emmet, we can use abbreviations and shortcuts to generate HTML and CSS code snippets and expand them into full-fledged markup. 
For example, you can write a simple abbreviation like div>p#my-paragraph and then expand it using Emmet to generate the corresponding HTML:
<div>
    <p id="my-paragraph"></p>
</div>

# Difference between a library and framework.

A library is a collection of functions that we can call when needed, providing specific functionality, while a framework is a comprehensive, pre-established structure that dictates the overall architecture and design of our application, often with a more opinionated approach.

# What is a CDN? When do we use it?

A CDN, or Content Delivery Network, is a network of distributed servers strategically located around the world to deliver web content more efficiently to users. The primary goal of a CDN is to reduce latency, improve website performance, and enhance the overall user experience. CDNs are commonly used to deliver static assets, such as images, stylesheets, scripts, and videos, but they can also be used for dynamic content.

We use a CDN when we want to improve the performance and availability of our web content, especially for a global audience, during periods of high traffic, or when optimizing for faster load times is crucial for our website or application.

# Why is React known as React?

Because React library was built to make user interfaces respond quickly to user interactions and react to state changes resulting in instant updating of the components of the app composing the user interface.

# What is cross-origin in the script tag? 

cross-origin attribute is crucial to load resources of other servers, CORS (cross-origin resource sharing which is an HTTP header based mechanism) manage cross-origin requests and defines a way for the browser and the server (where the resources are) to interact to determine if it is safe to allow cross-origin requests, Also allow the server to decide who can access it's assets.

# What is the difference between React and ReactDOM?

React library is responsible for creating components of the user interface while ReactDOM library is responsible for rendering user interface ready for user interaction.

# What is the difference between react.development.js and react.production.js files via CDN?

Development mode allows the debugging enviroment through react devtools and detailed error messages features.
Production mode allows the compression and minification of js code and other resources which reduces bundle size resulting in efficient performance.

# What are async and defer?

These are attributes in the script tag.
In case of using async attribute : HTML parsing is ongoing in parallel with the file loading but once the file is loaded, HTML parsing is paused till the js code of the file is fully executed.

But in case of using defer attribute : HTML parsing is ongoing in parallel with the file loading and once HTML parsing is done, the js code of the file will start to be executed.

if a file contains more than one script element and some of these files are dependent on each other which means the order is important then defer attribute should be added to these scripts while in async case the files are executed in load-first order.



