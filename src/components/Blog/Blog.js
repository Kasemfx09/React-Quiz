import React from "react";

const Blog = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="border-2 border-teal-500 rounded-lg mt-2 mb-2 p-2">
        <h3 className="font-bold text-lg">
          Q.1: What is the purpose of React Router?
        </h3>
        <p className="text-base">
          <span className="font-bold">Ans:</span> React Router is a standard
          library for routing in React. It enables the navigation among views of
          various components in a React Application, allows changing the browser
          URL, and keeps the UI in sync with the URL. Let us create a simple
          application to React to understand how the React Router works. The
          application will contain three components: home component, about a
          component, and contact component. We will use React Router to navigate
          between these components.
        </p>
      </div>
      <div className="border-2 border-teal-500 rounded-lg mt-2 mb-2 p-2">
        <h3 className="font-bold text-lg">Q.2: How does Context API work?</h3>
        <p className="text-base">
          <span className="font-bold">Ans:</span> The React Context API is a way
          for a React app to effectively produce global variables that can be
          passed around. This is the alternative to "prop drilling" or moving
          props from grandparent to child to parent, and so on. Context is also
          touted as an easier, lighter approach to state management using Redux.
        </p>
        <br />
        <p>
          React.createContext() is all you need. It returns a consumer and a
          provider. Provider is a component that as it's names suggests provides
          the state to its children. It will hold the "store" and be the parent
          of all the components that might need that store. Consumer as it so
          happens is a component that consumes and uses the state.
        </p>
      </div>
      <div className="border-2 border-teal-500 rounded-lg mt-2 mb-2 p-2">
        <h3 className="font-bold text-lg"> Q.3: What is the useRef?</h3>
        <p className="text-base">
          <span className="font-bold">Ans:</span> The useRef Hook allows you to
          persist values between renders. It can be used to store a mutable
          value that does not cause a re-render when updated. It can be used to
          access a DOM element directly.
        </p>
        <br />
        <p>
          useRef is a synchronous hook that updates the state immediately and
          persists its value through the component's lifecycle, but it doesn't
          trigger a re-render.
        </p>
      </div>
    </div>
  );
};

export default Blog;
