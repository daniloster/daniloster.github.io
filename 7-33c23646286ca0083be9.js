(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ikYk:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a("q1tI"),r=a.n(n),l=a("G2tH"),i=a("ebhC"),c=a("/Bgi"),o=a("oqi6"),s=a("uzDE"),u=a("DR7b"),m="prism";function d(e){var t=e.html;return r.a.createElement("div",null,r.a.createElement(u.default,null,t),r.a.createElement(l.default,null,"To understand closures completely, we need to understand the scopes as well. Javascript has the lexical scope (a.k.a. static scope) which is defined during compilation time."),r.a.createElement(l.default,null,"The lexical scope is inferred in the lexical analysis performed by the JS compiler. The variables and functions can only be directly referenced inside the scope in which is declared."),r.a.createElement(l.default,null,"See following examples."),r.a.createElement(i.default,null,"Private variable (through object factory)"),r.a.createElement(l.default,null,"A good usage for closure is creating factories to create object with private variables."),r.a.createElement(s.default,{theme:m,code:'\nfunction factoryUser(username, firstname, lastname) {\n  const user = {\n    firstname,\n    lastname,\n    getUsername: () => username;\n  };\n\n  return user;\n}\n\nconst userWithReadonlyUsername = factoryUser("party@home", "Sweet", "Home");\nconsole.log({ userWithReadonlyUsername, username: userWithReadonlyUsername.getUsername()  });\n          '.trim()}),r.a.createElement(l.default,null,"The output for the given example would be..."),r.a.createElement(s.default,{theme:m,lang:"shell",code:'\n{\n  userWithReadonlyUsername: {\n    firstname: "Sweet",\n    lastname: "Home",\n    getUsername: [Function],\n  },\n  username: "party@home",\n}\n          '.trim()}),r.a.createElement(l.default,null,"It is very important to understand the ",r.a.createElement("b",null,"lifecycle of the variable")," ","when a closure is created. Recklessness can lead to"," ",r.a.createElement("b",null,"memory leaking"),". So, pay attention to remove references when they are not needed anymore."),r.a.createElement(i.default,null,"Decorators"),r.a.createElement(l.default,null,"It is the ability of adding a behaviour to a function without changing it. So,"," ",r.a.createElement(o.default,{href:"https://javascript.info/currying-partials",target:"_blank"},"currying")," ","is an example of decoration which would return a new function and some of the previous function's arguments are predefined in the closure."),r.a.createElement(l.default,null,"Another classic example is creating the ",r.a.createElement("b",null,"mapDisaptchToProps")," from redux. There is a combination of ",r.a.createElement("b",null,"dispatch")," function with the arguments and payload."),r.a.createElement(s.default,{theme:m,code:"\nconst increment = () => ({ type: 'INCREMENT' })\nconst decrement = () => ({ type: 'DECREMENT' })\nconst reset = () => ({ type: 'RESET' })\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    // dispatching plain actions\n    increment: () => dispatch({ type: 'INCREMENT' }),\n    decrement: () => dispatch({ type: 'DECREMENT' }),\n    reset: () => dispatch({ type: 'RESET' })\n  };\n}\n          ".trim()}),r.a.createElement(l.default,null,"Once the ",r.a.createElement("b",null,"mapDisaptchToProps")," is called, its scope will be partially retained as there is a reference to one of its variable. Yes, the parameters are variable to the function. Then, while the function created ",r.a.createElement("b",null,"increment"),",",r.a.createElement("b",null,"decrement"),", ",r.a.createElement("b",null,"reset")," are not collected by the CG (",r.a.createElement("i",null,"Garbage Collector"),"), the closure will live referencing the ",r.a.createElement("b",null,"disaptch")," argument."),r.a.createElement(i.default,null,"Given and taken"),r.a.createElement(l.default,null,"Closures are pretty powerful but its unnecessary usage can lead to problems as memory leaking or degrading performance. Keep in mind that you are creating a living context where some references are kept to be used in the future by a function created from its context. Then, making a clear flow for GC is really important."),r.a.createElement(c.default,null,r.a.createElement(o.default,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",target:"_blank"},"MDN Closures"),r.a.createElement(o.default,{href:"https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983",target:"_blank"},"Currying and function composition"),r.a.createElement(o.default,{href:"https://javascript.info/currying-partials",target:"_blank"},"Currying and partials")))}}}]);
//# sourceMappingURL=7-33c23646286ca0083be9.js.map