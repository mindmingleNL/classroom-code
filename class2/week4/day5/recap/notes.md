1. A function that returns HTML -> React component
   1a. Function have logic
   1b. They return something (HTML (JSX))
   1c. They have arguments
   1d. It has a body
   1e. It has a name (Uppercased ALWAYS)
   1f. We can call functions, but we never call React components ourselves

2. If we have a react component, we can then use it as a HTML tag
   2a. We can put React components inside other React components
   3b. Html tags have properties (<a href="">, where href is a property, <img src=""> where src is property)

3. React Components have 1 or 0 arguments. Never 2, never 3...
   3a. That one argument we call props, it's ALWAYS an object that contains a key-value for every HTML property
   3a. HTML properties are always string BUT in react we can use {} to make them other JS types
   3c. We use an interface to type and limit the props

4. Inside of JSX we can use {} to go back to JS world
   4a. We can use this to map array of data into JSX

5. If a react component is the default export of a file in the /pages folder, we call it a page component.

6. useState is React's version of a variable, where the getter and the setter are seperated. We use it to store information, as soon as we change the information, React triggers a rerender
