import React from "react"
import A from "../templates/components/A"
import Code from "../templates/components/Code"
import Header from "../templates/components/Header"
import Html from "../templates/components/Html"
import Paragraph from "../templates/components/Paragraph"
import References from "../templates/components/References"

const codeTheme = "prism"

// Why do we write automated tests? quality assurance / confidence to deliver
// What should we test then? user's actions and system side-effects / aggregated value to users

function Agent({ children }) {
  return <b>{children}</b>
}

function Message({ children, connection }) {
  return (
    <span style={{ whiteSpace: "nowrap", color: "blue" }}>
      {" "}
      &gt;&gt; [ <b>{children}</b> (<i>{connection}</i>) ] &gt;&gt;{" "}
    </span>
  )
}

function factoryStyle(fontSize, fill = "rgb(251, 251, 251)") {
  return {
    fill,
    fontSize,
    whiteSpace: "pre",
    textAnchor: "middle",
  }
}
function TestPyramid() {
  return (
    <svg
      viewBox="0 0 500 300"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsBx="https://boxy-svg.com"
      style={{ maxHeight: "360px" }}
    >
      <defs>
        <style bxFonts="Helvetica" />
        <linearGradient id="gradient-1" bxPinned="true">
          <stop offset="0.18" style={{ stopColor: "rgb(34, 255, 9)" }} />
        </linearGradient>
        <linearGradient id="gradient-2" bxPinned="true">
          <stop style={{ stopColor: "rgb(255, 30, 30)" }} offset="0" />
          <stop style={{ stopColor: "rgb(183, 0, 0)" }} offset="1" />
        </linearGradient>
        <linearGradient
          id="gradient-0"
          x1="605.381"
          x2="605.381"
          y1="255"
          y2="295"
          gradientUnits="userSpaceOnUse"
          spreadMethod="pad"
          gradientTransform="matrix(0, -4.785305, 4.785305, 0, -730.045606, 3151.932716)"
        >
          <stop style={{ stopColor: "rgb(236, 255, 30)" }} offset="0" />
          <stop style={{ stopColor: "rgb(183, 0, 0)" }} offset="1" />
        </linearGradient>
      </defs>
      <path
        d="M 250 25 L 315 105 L 185 105 L 250 25 Z"
        style={{ fill: "rgb(40, 219, 0)" }}
        bxShape="triangle 185 25 130 80 0.5 0 1@6ca3d50f"
      />
      <rect
        x="180"
        y="110"
        width="140"
        height="80"
        style={{ fill: "rgb(136, 0, 247)" }}
      />
      <path
        d="M 180 110 L 180 190 L 115 190 L 180 110 Z"
        style={{ fill: "rgb(136, 0, 247)" }}
        bxShape="triangle 115 110 65 80 1 0 1@241103d7"
      />
      <path
        d="M -320 110 L -320 190 L -385 190 L -320 110 Z"
        style={{ fill: "rgb(136, 0, 247)" }}
        transform="matrix(-1, 0, 0, 1, 0, 0)"
        bxShape="triangle -385 110 65 80 1 0 1@8dcbba02"
      />
      <rect
        x="110"
        y="195"
        width="280"
        height="80"
        style={{ fill: "rgb(236, 197, 4)" }}
      />
      <path
        d="M 110 195 L 110 275 L 45 275 L 110 195 Z"
        style={{ fill: "rgb(236, 197, 4)" }}
        bxShape="triangle 45 195 65 80 1 0 1@eb862bb1"
      />
      <path
        d="M -390 195 L -390 275 L -455 275 L -390 195 Z"
        style={{ fill: "rgb(236, 197, 4)" }}
        transform="matrix(-1, 0, 0, 1, 0, 0)"
        bxShape="triangle -455 195 65 80 1 0 1@85ff46f6"
      />
      <text style={factoryStyle("24.3px")} x="248.555" y="243.257">
        UNIT TESTS
      </text>
      <text
        style={factoryStyle("17.6px")}
        x="165.81"
        y="155.851"
        transform="matrix(0.943815, 0, 0, 0.943815, 93.433769, 9.115429)"
      >
        INTEGRATION TESTS
        <tspan x="165.80999755859375" dy="1em">
          ​
        </tspan>
      </text>
      <text
        style={factoryStyle("10.8px")}
        x="211.206"
        y="84.959"
        transform="matrix(1, 0, 0, 1, 38.215569, -9.950794)"
      >
        SYSTEM
        <tspan x="211.20599365234375" dy="1em">
          ​
        </tspan>
        TESTS
      </text>
      <path
        d="M 480.368 270 H 690.394 L 690.394 255 L 730.394 275 L 690.394 295 L 690.394 280 H 480.368 V 270 Z"
        style={{
          fill: "url(#gradient-0)",
          paintOrder: "fill",
          strokeLinecap: "round",
        }}
        transform="matrix(0, -1, 1, 0, 195, 755.367493)"
        bxShape="arrow 480.368 255 250.026 40 10 40 0 1@59cb6038"
      />
      <text
        x="418.547"
        y="166.677"
        style={factoryStyle("28px", "rgb(51, 51, 51)")}
        transform="matrix(0, -0.277801, 0.277801, 0, 398.701874, 261.051727)"
      >
        COMPLEXITY
        <tspan x="418.5469970703125" dy="1em">
          ​
        </tspan>
        COST
      </text>
    </svg>
  )
}

export default function Article({ html: brief }) {
  return (
    <div>
      <Html>{brief}</Html>
      <Header tag="h2">Building the mindset</Header>
      <Paragraph>
        I believe people have different ways to understand and learn things, so
        along with this article, we are going to build an application which will
        be stored at{" "}
        <A
          href="https://github.com/daniloster/building-web-app-example"
          target="_blank"
        >
          github repository
        </A>
        . It will exemplifying the cases and bases required to build resilient
        applications, most importantly, the mindset. The application will be
        "Pixel Hero" (in react, but the concepts apply to any other UI
        technology), where we will create a character and challenge friends on
        dice battle.
      </Paragraph>
      <Paragraph>
        It is very-very important to understand the environment where the
        application is running when building applications/systems.
        Javascript/Nodejs runs code using event-loop strategy which is awesomely
        explained in this{" "}
        <A
          href="https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en"
          target="blank"
        >
          Youtube video
        </A>{" "}
        or more in-depth by{" "}
        <A href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop">
          MDN - Concurrency model and the event loop
        </A>
        . Nevertheless, I would recommend to look up <b>closure</b>{" "}
        <A href="https://whatthefuck.is/closure">[1]</A>
        <A href="http://codeinbox.me/posts/what-is-a-closure">[2]</A> and{" "}
        <b>box-model</b>{" "}
        <A href="http://localhost:8000/posts/box-model-is-the-web-layout">
          [1]
        </A>
        .
      </Paragraph>
      <Paragraph>
        The way to perceive and build the components and functions matter to
        deliver high quality experiences. More over, it is important to
        understand what we are building: software. And what is software (why do
        we write code)? Simplistically, it can be seen as a logical box built
        with instructions and used to solve something considered "a problem".
        With that in mind, it comes 2 questions to be answered along this
        reading: <b>What are we trying to solve? How do we verify it?</b>.
      </Paragraph>
      <Paragraph>
        Code (instructions) works based on interactions via agents' stimulus,
        connections out of the domain of application and side-effects. It is
        possible to group the agents' stimulus and side-effects as "message
        exchanging" between peers where one of them is the application. And the
        connection can be seen as the way through the messages are exchanged.
      </Paragraph>
      <ul>
        <li>
          <div>
            <b>Messages</b>
          </div>
          <ul>
            <li>Stimulus</li>
            <li>Side-effects</li>
          </ul>
        </li>
        <li>
          <b>Connections</b>
        </li>
      </ul>
      <Paragraph>Maybe a simple example will clarify it.</Paragraph>
      <Header tag="h3">Exchanging messages: case 1</Header>
      <Code
        theme={codeTheme}
        code={`
<body>
  <div id="greetings"></div>
  <button type="button">Greeting the world</button>

  <script>
    function onClickGreet() {
      const greetings = document.querySelector('#greetings');
      const paragraph = document.createElement('p');
      paragraph.innerHTML = 'Hello world';
      greetings.innerHTML = ''
      greetings.appendChild(paragraph);
    }
    document.querySelector('button').addEventListener('click', onClickGreet);
  </script>
</body>
          `.trim()}
      />
      <Paragraph>
        The code above will allow user click on the button "Greeting the world",
        then, the application reacts to it (or has a side-effect). It can also
        be perceived as user saying "please, greet the world", and the
        application answering "Hello world" in the designated/expected area.
      </Paragraph>
      <Paragraph>
        In this case, application receives a message (stimulus from user)
        through browser event API (connection), process it, and respond with a
        message to the user (side-effect to user) through browser DOM API
        (connection).
      </Paragraph>
      <Paragraph>Let's add one more component of complexity now...</Paragraph>
      <Header tag="h3">Exchanging messages: case 2</Header>
      <Code
        theme={codeTheme}
        code={`
<body>
  <div id="today"></div>
  <button type="button">What is today's UTC date?</button>

  <script>
    function setTodayMessage(message) {
      document.querySelector('#today').innerHTML = message;
    }
    function respondDate(data) {
      const message = \`Today is: \${data.currentDateTime}\`;
      setTodayMessage(message);
    }
    function respondError({ status, error }) {
      const message = error
        ? \`Error: \${error.message}\`
        : \`API Error: \${status} response\`;
        setTodayMessage(message);
    }
    async function onClickRequestToday() {
      try {
        const response = await fetch('http://worldclockapi.com/api/json/utc/now');
        if (response.ok) {
          const data = await response.json();
          respondDate(data);
        } else {
          respondError(response)
        }
      } catch (error) {
        respondError({ error })
      }
    }
    document.querySelector('button').addEventListener('click', onClickRequestToday);
  </script>
</body>
          `.trim()}
      />
      <Paragraph>
        Here, the application allow users to get the today's date UTC.
      </Paragraph>
      <Paragraph>
        In this case, application receives a message (stimulus from user)
        through browser event API (connection), acknowledge the expertise
        delegating to another application (App 2) by sending a stimulus via
        browser https API, then, App 2 respond it back to our application within
        same connection (not necessarily needed). So, our application process
        it, and respond with a message to the user (side-effect to user) through
        browser DOM API (connection).
      </Paragraph>
      <Paragraph>
        <Agent>User (external agent)</Agent>
        <Message connection="browser event">What is today's UTC date?</Message>
        <Agent>Our Application</Agent>
        <Message connection="browser http API">get today's UTC date</Message>
        <Agent>Time API (external agent)</Agent>
        <Message connection="browser http API">
          respond with today's UTC date
        </Message>
        <Agent>Our Application</Agent>
        <Message connection="browser DOM API">
          displays today's UTC date
        </Message>
        <Agent>User (external agent)</Agent>
      </Paragraph>
      <Paragraph>
        Note that our application also creates a stimulus to another
        application, by this our application is creating a stimulus, acting as
        agent to another application. In an overview, user/application
        interaction with application can be seen as agents exchanging messages.
      </Paragraph>
      <Paragraph>
        So, in the communication aspect, it is extremely important to verify how
        the peers get the messages they send to each others (are they correct)
        as well as if they received each other's messages (side-effects are
        performed).
      </Paragraph>
      <Paragraph>
        Even though, we are not 100% sure if they understood each other, as
        understanding is built based on background knowledge and experiences. UX
        (User Experience) to rescue, but, we are not going into this realm in
        the post.
      </Paragraph>
      <Paragraph>
        Back to the communication aspects, if the mechanics are not costy, the 2
        verifications can achieved in one goal reducing the amount of tasks to
        maintain. Internal changes can happen to software, but, it should be
        unlikely to change the responses, unless they are fixes (bug fixes).
      </Paragraph>

      <Header tag="h2">Building resilient components</Header>
      <Paragraph>
        Component based application is a strategy to build software where small
        pieces work independently composing a system (divide and conquer -
        Julius Cesar). The idea behind it is that the small and individual
        component has simple concern which leads to low complexity, thus, it is
        easier to verify and validate the application built (
        <A
          href="https://sttp.site/chapters/getting-started/testing-principles.html"
          target="_blank"
        >
          Verification and Validation
        </A>
        ).
      </Paragraph>
      <Paragraph>
        Most of the popular libraries and frameworks use this strategy
        successfully. And part of the struggle to scale applications come from
        the way we bring the components to life. Here are 2 essential concepts
        to use as guide when building a FE application:{" "}
        <A
          href="https://bradfrost.com/blog/post/atomic-web-design/"
          target="_blank"
        >
          Atomic Design
        </A>{" "}
        and{" "}
        <A
          href="https://medium.com/code-thoughts/what-i-understand-about-domain-driven-design-f7fbd00e364f"
          target="_blank"
        >
          Domain Driven Design (DDD)
        </A>
        .
      </Paragraph>
      <Paragraph>
        Atomic Design is a pattern used to build a design system. It has
        classification of components as: atoms, molecules, organisms, templates
        and pages. When I tried to match these definition to application scope,
        implementation level, I have encountered some mismatches. So, took the
        liberty to tweak a bit the categories using DDD as guideline. (
        <b>atoms, molecules, organisms and beings</b>)
      </Paragraph>
      <Paragraph>
        <b>Atoms</b> are the per science the smallest and indivisible unit (It
        is a lie! Although I do not recommend to split an atom, the result may
        be mind blowing, or just blowing). A component as an atom means it has
        solid behaviour (JS) and look and feel (CSS and the box-model). Keep in
        mind these 2 non-functional requirements of a UI component will be part
        of all the levels up to the largest component increasing its complexity,
        but, delegating resolution of complexity down to small components.
      </Paragraph>
      <Paragraph>
        Here is what I have learned, atoms are not supposed to define paddings
        if there is no delimitation of space (background-color or border), and
        it never defines its margins (<b>Never</b> =D).
      </Paragraph>
      <Paragraph>
        <b>Molecules</b> are composition of multiple atoms, still not domain
        specific. e.g. Modals, Peek Panels, Snackbars, Dashboards. They never
        defines its own margins, however, it can define internal elements
        margins. Also, only defines padding if there is delimitation of space
        (background-color or border).
      </Paragraph>
      <Paragraph>
        By domain specific, I mean that there is no value in a human-sense.
        There is no human value in a modal/dialog, unless, we use it in a domain
        like: "Terms And Agreements Dialog". Dialog is just the visual aspect or
        mechanics of how we display the domain value "Terms And Agreements".
      </Paragraph>
      <Paragraph>
        <b>Organisms</b> are combination of the previous levels (Molecules and
        Atoms) and domain specific. e.g. Profile Form, Monitoring User Metrics,
        Compose Email Dialog. They follow the same previous rules regarding
        margins and paddings.
      </Paragraph>
      <Paragraph>
        Last but not least,<b>Beings</b> are combination of all others and
        domain specific as well. e.g. Inbox Mail - it has list emails, list
        draft emails, write a new email, edit draft email. Preferably, they
        would follow the same previous rules regarding margins and paddings, and
        their parent container should take care of it.
      </Paragraph>
      <Paragraph>
        <b>It is a mindset change!</b> And it is always in evolution. Once we
        start thinking about components within these classifications, it helps
        to organise our code and to test it.
      </Paragraph>
      <Paragraph>
        Having a design system with components (dev/engineer view) following
        these principles is helping a lot to build web applications as if they
        were lego, and I love lego! They are predictable pixel art.
      </Paragraph>

      <Header tag="h3">Testing</Header>
      <Paragraph>
        Resilient application cannot be built with poor testing strategy.
        Basically, web applications have a few ways to exchange messages: users
        interacting with web elements, network messages or browser API.
        Abstracting these bridges with external world is a key for good testing.
      </Paragraph>
      <Paragraph>
        Testing comes with a lot of different strategies for backend application
        such as specification-based testing, boundary testing, structural
        testing, model-based testing, design-by-contracts, property-based
        testing. On the frontend domain, test strategy needs a more holistic
        approach.
      </Paragraph>
      <Paragraph>
        In general, tests are classified per scope as unit tests, integration
        tests, system tests.
      </Paragraph>
      <Paragraph>
        <b>Unit tests</b> are isolation tests where we mock other pieces and,
        sometimes, define mock behaviour. to ensure isolation of tests. BE unit
        tests are supposed to be really small and fast.
      </Paragraph>
      <Paragraph>
        <b>Integration tests</b> are tests performed on a scope (class,
        function, method) within its dependencies.
        <ul>
          <li>
            e.g. Testing a class A which delegate part of execution to class B
          </li>
          <li>
            e.g. Testing a service (micro-service, system, database) A which
            delegate part of execution to a service B
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        <b>System tests</b> are tests performed against real environments such
        as end to end tests (E2E) and system architectural resilience.
      </Paragraph>
      <center>
        <TestPyramid />
      </center>
      <Paragraph>
        Normally, the complexity of test grows as per image above. Some claims
        the cost or time execution increases as well. How much of it is really
        true? More importantly, cost-benefit. Maybe we try a quick example to
        exercise.
      </Paragraph>
      <Code
        theme={codeTheme}
        code={`
// file: getAgeAtYear.js
export default function getAgeAtYear(birthdayYear, currentYear) {
  if (typeof birthdayYear !== 'number') {
    throw new Error('Birthday year must be a number');
  }

  if (typeof currentYear !== 'number') {
    throw new Error('Current year must be a number');
  }

  if (birthdayYear > currentYear) {
    throw new Error(
      \`This being hasn't been born yet, current year: \${currentYear}, birthday year: \${birthdayYear}.\`
    )
  }

  return currentYear - birthdayYear
}

// file: Person.js
import getAgeAtYear from './getAgeAtYear';

export default class Person {
  /**
   * @param {string} name - the person full name
   * @param {Date} birthday - the person birthday
   * */
  constructor(name, birthday) {
    if (!(birthday instanceof Date)) {
      throw new Error('birthday is required as Date object')
    }
    
    this.name = name
    this.birthday = birthday
  }

  getAge() {
    return getAgeAtYear(this.birthday.getYear(), new Date().getYear())
  }
}

// file: index.js
import Person from './Person';

/**
 * This is everything our package exposes as public API.
 * */
export default Person;
          `.trim()}
      />
      <Paragraph>
        Let's assume the application above which only exposes the class in its
        public API. We could write a test to each branch present in the{" "}
        <b>getAgeAtYear</b> calculation as it has been built to deal with any
        possible situation. Knowing that our application only exposes{" "}
        <b>Person</b>, is there any real value adding test to each branch
        present in <b>getAgeAtYear</b>? Or better, is there code path that will
        never be executed in the function? Why to keep it? Why to test it?
      </Paragraph>
      <Code
        theme={codeTheme}
        code={`
describe('Person', () => {
  beforeEach(() => {
    // Wed Jul 01 2020 00:00:00 GMT+0100 (Irish Standard Time)
    const FAKE_TIME = 1593558000000
    jest.useFakeTimers(FAKE_TIME)
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  test('if Person does not accept invalid value birthday', () => {
    expect(() => {
      new Person('Jane Doe')
    }).toThrow('birthday is required as Date object')
  })

  test('if Person calculates the correct for a born in 1994 at 2020', () => {
    // Wed Jun 01 1994 00:00:00 GMT+0100 (Irish Standard Time)
    const BIRTHDAY_TIME = 770425200000
    const birthday = new Date(BIRTHDAY_TIME)
    const person = new Person('Jane Doe', birthday)
    expect(person.getAge()).toEqual(26)
  })

  test('if Person does not calculate age for a born in 2022 at 2020', () => {
    // Fri Jul 01 2022 00:00:00 GMT+0100 (Irish Standard Time)
    const BIRTHDAY_TIME = 1656630000000
    const birthday = new Date(BIRTHDAY_TIME)
    const person = new Person('Jane Doe', birthday)
    expect(() => {
      person.getAge()
    }).toThrow(
      'This being hasn\\'t been born yet, current year: 2020, birthday year: 2022.'
    )
  })
})

          `.trim()}
      />
      <Paragraph>
        These tests cover all the possibilities for the exposed API. Moreover,
        highlight dead-code based on branch coverage. Their cost is small enough
        compared to if it was needed to cover all branches for{" "}
        <b>getAgeAtYear(birthdayYear, currentYear)</b>, and now, the function
        can be refactored to...
      </Paragraph>

      <Code
        theme={codeTheme}
        code={`
function getAgeAtYear(birthdayYear, currentYear) {
  if (birthdayYear > currentYear) {
    throw new Error(
      \`This being hasn't been born yet, current year: \${currentYear}, birthday year: \${birthdayYear}.\`
    )
  }

  return currentYear - birthdayYear
}
          `.trim()}
      />
      <Paragraph>
        The point is that cost and complexity of tests depends not only on the
        classification but also on the tools and domain of application.
      </Paragraph>
      <Header tag="h2">Pixel Hero</Header>
      <Paragraph>
        To provide an immersive experience, I am writing as I am coding the
        application. For sure, I will review at the end. But, I want as much as
        possible to make of this a pairing session.
      </Paragraph>
      <Paragraph>
        First step, let's write down the requirements as acceptance criteria for
        this game. It is very important to understand what we are solving. In
        this case, a game. Games are based of story, challenges and rewards
        through a scheme of rules well defined.
      </Paragraph>
      <Paragraph>
        If we fully understand it, coding will be the trivial part in most of
        the cases.
      </Paragraph>
      <Header tag="h3">Requirements</Header>
      <Paragraph>
        The game consists in creating a challenge to others, it is a top-down
        game where player must create a map where they can place walls, bombs,
        moveable blocks, blocks to rescue and rescue points.
      </Paragraph>
      <Paragraph>
        The player can start form scratch creating a map, finish the map proving
        that is doable and generating a hashed URL based on a password and map
        information. This URL can be shared with others. Another way to start is
        based on existing URL, when is loaded, it will require an input
        (password) to validate it.
      </Paragraph>
      <Paragraph>
        Game must have a initial view, the game view, congratulation view and
        game over.
      </Paragraph>
      <Header tag="h4">Items of the game</Header>
      <Paragraph>
        <ul>
          <li>Player</li>
          <li>Walls</li>
          <li>Bombs</li>
          <li>Hearts</li>
          <li>
            <b>Blocks</b>
            <ul>
              <li>Moveable</li>
              <li>Rescuable</li>
            </ul>
          </li>
          <li>Rescue points</li>
        </ul>
      </Paragraph>
      <Header tag="h4">Dynamic of game</Header>
      <Paragraph>
        <b>Player</b> is the pixel hero and they have 3 hearts.
      </Paragraph>
      <Paragraph>
        <b>Walls</b> are not moveable and they don't do any harm.
      </Paragraph>
      <Paragraph>
        <b>Bombs</b> are activated if player wall over it or push a block over
        it. When exploding, the damage area is represented by the bomb location
        plus an extra block around. The damage is 2 hearts when it when is in
        place, or 1 heart when player is 1 block away. Bombs can destroy blocks
        as well.
      </Paragraph>
      <Paragraph>
        <b>Hearts</b> help increasing the player's health. You can collect by
        moving over and use at any time by clicking on the inventory.
      </Paragraph>
      <Paragraph>
        <b>Blocks</b> can only be moved when is pushed, never pulled.
        Moveable/Rescuable blocks explode if the bomb damage reaches them.
        Blocks can only be moved by pushing.
      </Paragraph>
      <Paragraph>
        <b>Rescue points</b> is the area where rescuable blocks need to be in
        place to finish the game. The game is
        <b>finished when each rescuable blocks is over the rescue points</b>,
        note that at least one block must be set in place (I can see already a
        nice hack here, ask me later).
      </Paragraph>
      <Paragraph>
        I guess, we have a comprehensive idea of what is needed to do. Let's put
        in practice all these guidelines!
      </Paragraph>

      <Header tag="h3">Developing</Header>
      <Paragraph>
        Starting thinking about the MVP to build it. The most important section
        is the game play, but, game play depend on the map editor as we cannot
        play without a map. So, let's build the MapEditor component in order to
        start the game.
      </Paragraph>
      <Header tag="h4">MapEditor</Header>
      <Paragraph>
        As a top-down game, we can use tilemap technique which consists on a
        matrix (array of arrays) where each coordinate (x, y) will have a symbol
        to represent an object.
      </Paragraph>
      <Paragraph>
        The symbols were already mentioned as items of the game, nevertheless,
        there is an implicit one not mentioned, the ground. This will be also
        used to display the player and the hearts to collect.
      </Paragraph>
      <Paragraph>
        Our map editor will have a slider/input@range to define the columns and
        rows of our map, besides, it will display below 2 blocks, one for
        collecting the definitions of each (column, row), another to render the
        current state of the map.
      </Paragraph>
      <Paragraph>
        In the first block, there will be a table/grid with inputs to click and
        select what type of asset will represent the coordinate.
      </Paragraph>

      <References>
        <A
          href="https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en"
          target="blank"
        >
          Event loop
        </A>
        <A href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop">
          MDN - Concurrency model and the event loop
        </A>
        <A href="https://whatthefuck.is/closure">whatthefuck.is · a closure</A>
        <A href="http://codeinbox.me/posts/what-is-a-closure">
          What is a closure?
        </A>
        <A
          href="https://bradfrost.com/blog/post/atomic-web-design/"
          target="_blank"
        >
          Atomic Design
        </A>
        <A
          href="https://medium.com/code-thoughts/what-i-understand-about-domain-driven-design-f7fbd00e364f"
          target="_blank"
        >
          What I understand about domain-driven design
        </A>
        <A href="https://sttp.site/" target="_blank">
          Software Testing: From Theory to Practice
        </A>
        <A
          href="https://kentcdodds.com/blog/why-i-never-use-shallow-rendering"
          target="_blank"
        >
          Why I Never Use Shallow Rendering
        </A>
      </References>
    </div>
  )
}
