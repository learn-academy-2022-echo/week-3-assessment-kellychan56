# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is like a collaboration between JavaScript and HTML. In a React application, we are able to create HTML tags in JavaScript files. JSX is typically in the display section of the App.js file of a React application. The return of App.js is typically the JSX portion of the code. When returning multiple things, we have to wrap the returned items in JSX fragments (<> </>). Almost all of the tags in JSX are the same as the tags in HTML. One tag that is different however is the class element. In HTML, we can use class as an identifier for a tag. However, since there is already a class keyword in JavaScript, the JSX identifier attribute is called className instead.

    const App = () => {
        return <>
            <h1 className="header"> Hello World </h1>
            <p> Lorem ipsum </p>
        </>
    }

Researched answer: JSX stands for JavaScript XML. It allows us to write with HTML syntax inside of JavaScript code. This gives us the ability to create structure within JavaScript with fragments and components. This places the components that we want in the DOM without having to use more methods.

2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: Yarn is a package manager created by Meta that we can use to download dependencies for our applications. When creating new projects, there are many files needed for each project, so we can use yarn to download those dependencies and focus on creating the project. I have used yarn with Jest and React. After running yarn to download the dependencies, I can use yarn jest to test my JavaScript code. And with React, I use yarn to first create my application and then to start it so I can see what is happening as I write my code.

Researched answer: Yarn stands for Yet Another Resource Negotiator. It was created by Meta to manage their dependencies better. Previously with npm, another package manager, Meta had issues with how long it took to install dependencies and some security problems, so they developed yarn as a solution. It allows engineers to download packages and manage their dependencies consistently across multiple devices, so it is easier to work with shared code.

3. What is an anonymous function in JavaScript?

Your answer: An anonymous function is written with the syntax () => {}. This is basically an empty function without a name or anything in it. When creating functions, we have to declare a variable, then write the function syntax. One instance where an anonymous function is needed is in React. Sometimes, when you pass a function into a component, it will continuously run until there is a stack overflow. This can be avoided by passing the function first through an anonymous function.

<button onClick = () => {handleClick}></button>

Researched answer: An anonymous function is a function without a name. They can be written in JavaScript, but since there is no name, we can't access it outside of where it is written. To invoke it, we have to assign it to a variable. Anonymous functions can be found in built-in methods such as map and filter. They are used within the method but do not have a name to access it outside of these methods.

4. What is the difference between a class and an object?

Your answer: An object is a list consisting of keys and values, and it is the intersection of data and behavior. Almost everything in JavaSCript is an object. Arrays and indexes are objects with index keys and values. Built-in methods are called methods because they are functions from objects that other developers have created. Meanwhile, a class is the blueprint for an object. We can create as many objects as we want using a class. It's similar to a fill-in form. We can take a form, and once we fill in all the information we want for that form, it is used to store that specific information.

Researched answer: A class is a template for creating new objects. It defines the keys of an object and allows more dynamic values to be entered into the object. Objects are instances of a class. Objects do not always have to be create from classes, but classes allow multiple objects to be created with the same keys. This is possible due to the constructor method that defines the values of the keys. The values of objects are always defined.

5. What is the difference between state and props in React?

Your answer: State refers to data that can be changed. The state consists of a hook with a variable and set state, and a useState. The variable refers to the data which is initially defined with the useState. Then, we can use the set state to alter the data that is in the variable. Props is short for properties. We use props within component calls as an attribute that can be passed through to the component code. The information passed through a prop does not have to only be data. It can also be a function.

Researched answer: States are used within the current component, similar to being at a local scope of a variable. States are limited to the current component, but props can be passed through to various components. The ability to pass information to props allows for child components to be more reusable as the information passed with props can change depending on the other components. The data of states are typically changed through a user interaction.

6. STRETCH: Which is the difference between a div and a span?

Your answer: A div is used to create a section in HTML that we may want grouped together. A useful saying that I've learned is, "When in doubt, div it out." This has actually proved useful to me before when I was working with my partner and had an error in our code that was resolved by creating a div. I, however, do not have experience in using the span tag. I believe it would be similar to a div in grouping items together, but it could have a different purpose to it. I've seen it in code before when someone was creating a grid component for their website, but I am not exactly sure as to what it is used for.

Researched answer: A div is used to create block components within a page. It creates a new line and expands the block width from margin to margin. A span is similarly a container for elements, but it is inline and takes as much space as the content within. This allows for more diversity in styling the page.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Programming that is organized around objects is object-oriented programming. It focuses on the manipulation of the objects rather than the manipulation itself. The structure of OOP includes classes, objects, methods, and attributes.

2. Ruby: Ruby is an object-oriented programming language. It was created by Yukihiro Matsumoto as a language that is fun and can be understood by programmers. The syntax is intuitive and easy to read and write.

3. Implicit return: When a function returns values without the return keyword, it is called an implicit return. We've seen implicit returns with .map() and .filter(). We use syntactical sugar and can omit the return keyword if the function is inline and returns only one thing.

4. Ruby blocks: Ruby blocks are anonymous functions. They pass behavior through to methods rather than data.

5. Ruby hashes: Hashes are collections of keys and their values, similar to objects in JavaScript.
