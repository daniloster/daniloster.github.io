import React from "react"
import styled from "styled-components"
import A from "../templates/components/A"
import Code from "../templates/components/Code"
import Html from "../templates/components/Html"
import Paragraph from "../templates/components/Paragraph"
import Subtitle from "../templates/components/Subtitle"

const codeTheme = "prism"

const Layout = styled.div`
  .wrapper {
    border: 1px dotted darkgrey;
    padding: 15px;
  }

  .wrapper + .wrapper {
    margin-top: 15px;
  }

  .container {
    position: relative;
    height: 200px;
    width: 200px;
    background-color: blue;
  }

  .container > div {
    /* either */
    width: 100%;
    /* or width: 200px; */
    background-color: green;
  }

  .content-box {
    box-sizing: content-box;
  }

  .padded {
    /* this means 10px each direction (top, right, bottom, left) */
    padding: 10px;
  }

  .bordered {
    /* this means 5px each direction (top, right, bottom, left) */
    border: 5px solid red;
  }

  .with-margins {
    margin: 10px;
  }

  .overflow {
    overflow: auto;
  }

  .border-box {
    box-sizing: border-box;
  }
`

export default function Article({ html: brief }) {
  return (
    <Layout>
      <Html>{brief}</Html>
      <Paragraph>
        There are several ways out there to provide a store mechanism to share data in frontend
        applications in diverse UI frameworks. There is always a trend on new store management
        that does something slightly different. The goal  of this post is to demystify the
        “complexity” of state management by implementing one in React.
      </Paragraph>
      
      <Subtitle>Reasoning About State</Subtitle>
      <Paragraph>
        Let’s understand what an application requires from state management indeed. Maintaining a state
        imply in providing ways for components and “interested parts” to subscribe to changes, to obtain
        the current state, and to update it.
      </Paragraph>
      <Paragraph>
        Ideally, the store should be a replaceable piece being decoupled from your application.
      </Paragraph>
      <Paragraph>
        Now that we understand the basic requirements of a store, why should we implement one while
        we have several libraries doing it already? There are 2 entangled reasons.
      </Paragraph>
      <Paragraph>
        1st. The node environment is extremely polluted causing an application to take huge space on
        the disk (above 1Gb certainly). Having a large node_modules folder will likely have more files
        that will be loaded while compiling or running your application, therefore, slowing down some of
        the development lifecycles (development, testing, building, deplyoing among others) or adding security
        risks. Then, preventing the usage of unnecessary libraries is essential.
      </Paragraph>
      <Paragraph>
        2nd. Not all things we imagine being complex are complex indeed. If you revisit your past there
        will be things you found complex as hell that make you laugh today. As we experience more challenges
        and events in life we gather more knowledge and connect some dots making something for a second time
        easier in some cases. We should only add libraries to the node environment if it is really required,
        and when the library is solving a complex task. I would ask you to <A
          href="https://signalvnoise.com/posts/3124-give-it-five-minutes"
          target="_blank"
        >
        give it 5 minutes</A> for this suggestion before stating it is complex.
      </Paragraph>

      <Subtitle>Design Patterns &amp; Principles</Subtitle>
      <Paragraph>
        Based on the requirements described before, we need to provide ways to update and get a value.
        We have seen a lot of this when studying paradigms such as OOP (Object-Oriented Programming) where
        we used <A href="https://medium.com/javascript-scene/encapsulation-in-javascript-26be60e325b4"
        target="_blank"
        >encapsulation</A> and discretely allowed other parts of the application
        to <i>get</i> and <i>set</i> values under certain circumstances of scope.
      </Paragraph>
      <Paragraph>
        Making the Glue. Now, the application or different modules need to be notified whenever the store
        changes. That is where the <strong>Subject (Observer pattern)</strong>{' '}
        <A href="https://www.dottedsquirrel.com/observer-pattern-javascript/"
        target="_blank"
        >[1]</A> <A href="https://medium.com/@majdasab/observer-pattern-with-javascript-es6-classes-2a19851e1506"
        target="_blank"
        >[2]</A> comes to the rescue. If you
        have worked with event-driven applications or observables, you may be familiar with its usage. Creating
        the “update subject” and notifying all subscribed parts on every valid set will allow components to be
        in sync with the shared/global data.
      </Paragraph>
      <Paragraph>
        Last but not least, the store should have a contract that allows you, as a developer, to replace it
        at any time. This is the design principle for <strong>DI (Dependency Injection)</strong> <A href="https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898"
          target="_blank"
        >[1]</A> <A href="https://itnext.io/dependency-injection-in-react-6fcdbd2005e6"
          target="_blank"
        >[2]</A>. The usage of DI decouples your application from the state making it way easier to
        replace/upgrade/test in the application.
      </Paragraph>

      <Subtitle>Implementing State Management</Subtitle>
      <Paragraph>Now let’s assign theory to practice.</Paragraph>
      <Paragraph>1st. Encapsulation</Paragraph>
      <Code
        theme={codeTheme}
        code={`
function isValid(value: any): boolean {
  return value !== undefined && value !== null;
}
  
export class State<T> {
  private state: T = null!;
  
  constructor(state: T) {
    this.set(Object.freeze(state));
  }
  
  get = (): T => this.state;
  
  set = (state: T): T => {
    this.state = isValid(state) ? Object.freeze(state) : state;
    return this.get();
  };
}
        `.trim()}
      />
      <Paragraph>
        Here is our state with “get” and “set”. In addition, we make sure the object set is always immutable
        by freezing it.
      </Paragraph>
      <Paragraph>2nd. Subject Pattern and Making the Glue.</Paragraph>
      <Paragraph>Creating our Subject class, the mechanism of subscription, and notification.</Paragraph>
      <Code
        theme={codeTheme}
        code={`
export class Subject<T> {
  private subscriptions: Array<Subscription<T>> = [];
  
  subscribe = (subscriber: Subscription<T>): Unsubscribe => {
    const reference = { ...subscriber };
    this.subscriptions.push(reference);
    return () => {
      this.subscriptions = this.subscriptions.filter(
        (item) => item !== reference
      );
    };
  };
  
  next = (value: T) => {
    this.subscriptions.forEach(({ next }) => void next(value));
  };
}

export type Unsubscribe = () => void;
  
export interface Subscription<T> {
  next(state: T): void;
}
        `.trim()}
      />
      <Paragraph>Using Subject to make the glue and creating an observable state.</Paragraph>
      <Code
        theme={codeTheme}
        code={`
import { State } from "./State";
import { Subject, Subscription, Unsubscribe } from "./Subject";
  
export type Transformer<T> = (value: T) => T;
  
export class ObservableState<T> {
  private state: State<T>;
  private subject: Subject<T> = new Subject();
  
  constructor(value: T) {
    this.state = new State(value);
  }
  
  get = (): T => this.state.get();
  
  set = (transform: Transformer<T>): T => {
    const oldValue = this.get();
    const newValue = transform(this.get());
    const hasChanged = newValue !== oldValue;
    if (hasChanged) {
      this.state.set(newValue);
      // In order to create an async behaviour, let’s make usage of setTimeout
      setTimeout(() => void this.subject.next(this.get()), 0);
    }
    return this.get();
  };
  
  subscribe = (subscription: Subscription<T>): Unsubscribe => {
    return this.subject.subscribe(subscription);
  };
}
        `.trim()}
      />
      <Paragraph>That is our observable state created with 3 files. So, how to use it now?</Paragraph>
      <Paragraph>
        The application needs to state management mechanism should define a contract and provide a way to
        replace it. Typescript can help with the contract and the React.Context with the Dependency Injection.
      </Paragraph>
      <Paragraph>Contract and Dependency Injection</Paragraph>
      <Code
        theme={codeTheme}
        code={`
import { createContext } from "react";
import { ObservableState } from "../core/state/ObservableState";
import { PeopleState } from "../model/PeopleState";
         
export const PeopleStateContext = createContext(
  new ObservableState<PeopleState>({
    people: []
  })
);
        `.trim()}
      />
      <Paragraph>
        Because we define the context with a default valid value, we don’t need to wrap the application with
        the “{'<'}Context.Provider value={'{...}'}{'>'}”. And you should avoid wrapping the application to
        facilitate the implementation of tests. When testing, you can wrap the module with any other State
        matching the contract, allowing you to setup different scenarios for your tests.
      </Paragraph>
      <Paragraph>At last 2 examples of consumers: as a state, and as a reducer.</Paragraph>
      <Paragraph>As a State.</Paragraph>
      <Code
        theme={codeTheme}
        code={`
import { Context, useContext, useEffect, useState } from "react";
import { ObservableState, Transformer } from "./ObservableState";
         
export function useObservableState<T>(
  stateContext: Context<ObservableState<T>>
): [T, (transform: Transformer<T>) => T] {
  const observableState = useContext(stateContext);
  const [state, setState] = useState<T>(observableState.get());
  
  useEffect(() => {
    const unsubscribe = observableState.subscribe({
      next: (value) => void setState(value)
    });
  
    return unsubscribe;
  }, [observableState]);
  
  // here we want all parts manipulating the state to change the core state
  // then all other subscribers will get the new value, including this one
  return [state, observableState.set];
}
        `.trim()}
      />
      <Paragraph>As a Reducer.</Paragraph>
      <Code
        theme={codeTheme}
        code={`
import { Context, useCallback, useContext, useEffect, useState } from "react";
import { ObservableState } from "./ObservableState";
  
export type ReducerTransformer<T, Action> = (state: T, action: Action) => T;
         
export function useObservableStateReducer<T, Action>(
  reducer: ReducerTransformer<T, Action>,
  stateContext: Context<ObservableState<T>>
): [T, (action: Action) => Action] {
  const observableState = useContext(stateContext);
  const [state, setState] = useState<T>(observableState.get());
  const dispatch = useCallback(
    (action) => {
      const transform = (oldState) => {
        const value = reducer(oldState, action);
        return value;
      };
      observableState.set(transform);
      return action;
    },
    [reducer, observableState]
  );
  
  useEffect(() => {
    const unsubscribe = observableState.subscribe({
      next: (value) => void setState(value)
    });
  
    return unsubscribe;
  }, [observableState]);
  
  // very similar to the previous hook, but returning a dispatch function
  return [state, dispatch];
}
        `.trim()}
      />
      <Subtitle>Behind the State Management Complexity</Subtitle>
      <Paragraph>
        Now that we have gone through this journey, I would ask you to sleep on it before defending the complexity
        of global state or jumping on as a silver bullet definition. In software development, there is no
        such thing as a perfect solution, there will be always pros and cons.
      </Paragraph>
      <Paragraph>
        Nonetheless, I hope this post has demystified the complexity of state management and you are
        encouraged to reason about the need of 3rd party solutions for it.
      </Paragraph>
      <Paragraph>
        Check out the <A
          href="https://codesandbox.io/s/demystifying-state-management-79bf7-79bf7"
          target="_blank"
        >
        codesandbox with the implementation and usage</A>.
      </Paragraph>
      <Paragraph>
        <b>Note</b>: state management of remote data such as Client Graphql provides, it is complex due to its
        purpose. Graphql aim to solve the combination of multiple data source allowing application
        to query part of fields in a fast, flexible and developer-friendly way. However, shared states and
        Rest API resources are quite modular, and simple to retain and update.
      </Paragraph>
    </Layout>
  )
}