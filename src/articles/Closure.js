import React from "react"
import Paragraph from "../templates/components/Paragraph"
import Subtitle from "../templates/components/Subtitle"
import References from "../templates/components/References"
import A from "../templates/components/A"
import Code from "../templates/components/Code"
import Html from "../templates/components/Html"

const codeTheme = "prism"

export default function Article({ html: brief }) {
  return (
    <div>
      <Html>{brief}</Html>
      <Paragraph>
        To understand closures completely, we need to comprehend the scopes.
        Javascript has the lexical scope (aka static scope) which is defined
        during the compilation time.
      </Paragraph>
      <Paragraph>
        Walking through example seems easier to understand, then, lets get
        started with some use cases.
      </Paragraph>
      <Subtitle>Private variable (through object factory)</Subtitle>
      <Paragraph>
        A good usage for closure is creating factories to create object with
        private variables.
      </Paragraph>
      <Code
        theme={codeTheme}
        code={`
function factoryUser(username, firstname, lastname) {
  const user = {
    firstname,
    lastname,
    getUsername: () => username;
  };

  return user;
}

const userWithReadonlyUsername = factoryUser("party@home", "Sweet", "Home");
console.log({ userWithReadonlyUsername, username: userWithReadonlyUsername.getUsername()  });
          `.trim()}
      />
      <Paragraph>The output for the given example would be...</Paragraph>
      <Code
        theme={codeTheme}
        lang="shell"
        code={`
{
  userWithReadonlyUsername: {
    firstname: "Sweet",
    lastname: "Home",
    getUsername: [Function],
  },
  username: "party@home",
}
          `.trim()}
      />
      <Paragraph>
        It is very important to understand the <b>lifecycle of the variable</b>{" "}
        when a closure is created. Recklessness can lead to{" "}
        <b>memory leaking</b>. So, pay attention to remove references when they
        are not needed anymore.
      </Paragraph>
      <Subtitle>Decorators</Subtitle>
      <Paragraph>
        It is the ability of adding a behaviour to a function without changing
        it. So,{" "}
        <A href="https://javascript.info/currying-partials" target="_blank">
          currying
        </A>{" "}
        is an example of decoration which would return a new function and some
        of the previous function's arguments are predefined in the closure.
      </Paragraph>
      <Paragraph>
        Another classic example is creating the <b>mapDisaptchToProps</b> from
        redux. There is a combination of <b>dispatch</b> function with the
        arguments and payload.
      </Paragraph>
      <Code
        theme={codeTheme}
        code={`
const increment = () => ({ type: 'INCREMENT' })
const decrement = () => ({ type: 'DECREMENT' })
const reset = () => ({ type: 'RESET' })

function mapDispatchToProps(dispatch) {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  };
}
          `.trim()}
      />
      <Paragraph>
        Once the <b>mapDisaptchToProps</b> is called, its scope will be
        partially retained as there is a reference to one of its variable. Yes,
        the parameters are variable to the function. Then, while the function
        created <b>increment</b>,<b>decrement</b>, <b>reset</b> are not
        collected by the CG (<i>Garbage Collector</i>), the closure will live
        referencing the <b>disaptch</b> argument.
      </Paragraph>
      <Subtitle>Given and taken</Subtitle>
      <Paragraph>
        Closures are pretty powerful but its unnecessary usage can lead to
        problems as memory leaking or degrading performance. Keep in mind that
        you are creating a living context where some references are kept to be
        used in the future by a function created from its context. Then, making
        a clear flow for GC is really important.
      </Paragraph>
      <References>
        <A
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
          target="_blank"
        >
          MDN Closures
        </A>
        <A
          href="https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983"
          target="_blank"
        >
          Currying and function composition
        </A>
        <A href="https://javascript.info/currying-partials" target="_blank">
          Currying and partials
        </A>
      </References>
    </div>
  )
}
