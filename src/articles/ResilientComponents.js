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
function SequenceDiagram() {
  const SVG = `
  <svg
    id="mermaid-1603221989749" width="100%" xmlns="http://www.w3.org/2000/svg" height="353" viewBox="-50 -10 1029 353"
    style={{ maxWidth: '1029px' }}
  >
    <style>
      #mermaid-1603221989749{font-family:'"trebuchet ms",verdana,arial';fontSize:'16px';fill:'#333';}
      #mermaid-1603221989749 .error-icon{fill:'#552222';}
      #mermaid-1603221989749 .error-text{fill:'#552222';stroke:'#552222';}
      #mermaid-1603221989749 .edge-thickness-normal{stroke-width:2px;}
      #mermaid-1603221989749 .edge-thickness-thick{stroke-width:3.5px;}
      #mermaid-1603221989749 .edge-pattern-solid{stroke-dasharray:0;}
      #mermaid-1603221989749 .edge-pattern-dashed{stroke-dasharray:3;}
      #mermaid-1603221989749 .edge-pattern-dotted{stroke-dasharray:2;}
      #mermaid-1603221989749 .marker{fill:#333333;}
      #mermaid-1603221989749 .marker.cross{stroke:#333333;}
      #mermaid-1603221989749 svg{font-family:"trebuchet ms",verdana,arial;font-size:16px;}
      #mermaid-1603221989749 .actor{stroke:hsl(259.6261682243,59.7765363128%,87.9019607843%);fill:#ECECFF;}
      #mermaid-1603221989749 text.actor > tspan{fill:black;stroke:none;}
      #mermaid-1603221989749 .actor-line{stroke:grey;}
      #mermaid-1603221989749 .messageLine0{stroke-width:1.5;stroke-dasharray:none;stroke:#333;}
      #mermaid-1603221989749 .messageLine1{stroke-width:1.5;stroke-dasharray:2,2;stroke:#333;}
      #mermaid-1603221989749 #arrowhead path{fill:#333;stroke:#333;}
      #mermaid-1603221989749 .sequenceNumber{fill:white;}
      #mermaid-1603221989749 #sequencenumber{fill:#333;}
      #mermaid-1603221989749 #crosshead path{fill:#333;stroke:#333;}
      #mermaid-1603221989749 .messageText{fill:#333;stroke:#333;}
      #mermaid-1603221989749 .labelBox{stroke:hsl(259.6261682243,59.7765363128%,87.9019607843%);fill:#ECECFF;}
      #mermaid-1603221989749 .labelText,#mermaid-1603221989749 .labelText > tspan{fill:black;stroke:none;}
      #mermaid-1603221989749 .loopText,#mermaid-1603221989749 .loopText > tspan{fill:black;stroke:none;}
      #mermaid-1603221989749 .loopLine{stroke-width:2px;stroke-dasharray:2,2;stroke:hsl(259.6261682243,59.7765363128%,87.9019607843%);fill:hsl(259.6261682243,59.7765363128%,87.9019607843%);}
      #mermaid-1603221989749 .note{stroke:#aaaa33;fill:#fff5ad;}
      #mermaid-1603221989749 .noteText,#mermaid-1603221989749 .noteText > tspan{fill:black;stroke:none;}
      #mermaid-1603221989749 .activation0{fill:#f4f4f4;stroke:#666;}
      #mermaid-1603221989749 .activation1{fill:#f4f4f4;stroke:#666;}
      #mermaid-1603221989749 .activation2{fill:#f4f4f4;stroke:#666;}
      #mermaid-1603221989749:root{--mermaid-font-family:"trebuchet ms",verdana,arial;}
      #mermaid-1603221989749 sequence{fill:apa;}
    </style>
    <g></g>
    <g>
      <line id="actor12" x1="75" y1="5" x2="75" y2="342" class="actor-line" stroke-width="0.5px" stroke="#999"></line>
      <rect x="0" y="0" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect>
      <text x="75" y="32.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle; font-size: 14px; font-weight: 400; font-family: Open-Sans, sans-serif;">
        <tspan x="75" dy="0">User (External Agent)</tspan>
        </text></g><g><line id="actor13" x1="425" y1="5" x2="425" y2="342" class="actor-line" stroke-width="0.5px" stroke="#999"></line><rect x="350" y="0" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="425" y="32.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle; font-size: 14px; font-weight: 400; font-family: Open-Sans, sans-serif;"><tspan x="425" dy="0">Application</tspan></text></g><g><line id="actor14" x1="854" y1="5" x2="854" y2="342" class="actor-line" stroke-width="0.5px" stroke="#999"></line><rect x="779" y="0" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="854" y="32.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle; font-size: 14px; font-weight: 400; font-family: Open-Sans, sans-serif;"><tspan x="854" dy="0">API</tspan></text></g><defs><marker id="arrowhead" refX="5" refY="2" markerWidth="6" markerHeight="4" orient="auto"><path d="M 0,0 V 4 L6,2 Z"></path></marker></defs><defs><marker id="crosshead" markerWidth="15" markerHeight="8" orient="auto" refX="16" refY="4"><path fill="black" stroke="#000000" stroke-width="1px" d="M 9,2 V 6 L16,4 Z" style="stroke-dasharray: 0, 0;"></path><path fill="none" stroke="#000000" stroke-width="1px" d="M 0,1 L 6,7 M 6,1 L 0,7" style="stroke-dasharray: 0, 0;"></path></marker></defs><defs><marker id="sequencenumber" refX="15" refY="15" markerWidth="60" markerHeight="40" orient="auto"><circle cx="15" cy="15" r="6"></circle></marker></defs><text x="250" y="80" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" class="messageText" dy="1em" style="font-family: &quot;trebuchet ms&quot;, verdana, arial; font-size: 16px; font-weight: 400;">What is todays date? (browser event)</text><line x1="75" y1="113" x2="425" y2="113" class="messageLine0" stroke-width="2" stroke="none" marker-end="url(#arrowhead)" style="fill: none;"></line><g><rect x="420" y="113" fill="#EDF2AE" stroke="#666" width="10" height="144" rx="0" ry="0" class="activation0"></rect></g><text x="642" y="128" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" class="messageText" dy="1em" style="font-family: &quot;trebuchet ms&quot;, verdana, arial; font-size: 16px; font-weight: 400;">Could you get me today's date? (browser http API)</text><line x1="430" y1="161" x2="854" y2="161" class="messageLine0" stroke-width="2" stroke="none" marker-end="url(#arrowhead)" style="fill: none;"></line><g><rect x="849" y="163" fill="#EDF2AE" stroke="#666" width="10" height="46" rx="0" ry="0" class="activation0"></rect></g><text x="640" y="176" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" class="messageText" dy="1em" style="font-family: &quot;trebuchet ms&quot;, verdana, arial; font-size: 16px; font-weight: 400;">Respond with today's date (browser http API)</text><line x1="849" y1="209" x2="430" y2="209" class="messageLine1" stroke-width="2" stroke="none" marker-end="url(#arrowhead)" style="stroke-dasharray: 3, 3; fill: none;"></line><text x="248" y="224" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" class="messageText" dy="1em" style="font-family: &quot;trebuchet ms&quot;, verdana, arial; font-size: 16px; font-weight: 400;">Display today's date (browser DOM API)</text><line x1="420" y1="257" x2="75" y2="257" class="messageLine1" stroke-width="2" stroke="none" marker-end="url(#arrowhead)" style="stroke-dasharray: 3, 3; fill: none;"></line><g><rect x="0" y="277" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="75" y="309.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle; font-size: 14px; font-weight: 400; font-family: Open-Sans, sans-serif;"><tspan x="75" dy="0">User (External Agent)</tspan></text></g><g><rect x="350" y="277" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="425" y="309.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle; font-size: 14px; font-weight: 400; font-family: Open-Sans, sans-serif;"><tspan x="425" dy="0">Application</tspan></text></g><g><rect x="779" y="277" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="854" y="309.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle; font-size: 14px; font-weight: 400; font-family: Open-Sans, sans-serif;"><tspan x="854" dy="0">API</tspan></text></g></svg>
        `;
  return (
    <div dangerouslySetInnerHTML={{ __html: SVG }} />
  )
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
      <Paragraph textAlign="center">
        <b>RC = SP + AD + GTS</b>
      </Paragraph>
      <Paragraph textAlign="center">
        Resilient Components<br/>
        SOLID Principles + Atomic Design + Good Testing Strategy
      </Paragraph>
      <Header tag="h2">What is a resilient component and why build it?</Header>
      <Paragraph>
        Resilient components are solid components. They are self-managed puzzle
        pieces that accomplish their single responsibility as well as handling
        their errors, either locally in the component, or by sending messages
        to outer containers. Moreover, they have consistency in the look-and-feel.
      </Paragraph>
      <Paragraph>
        When building an application, we will need to use different types of components.
        Some of these components will satisfy functional requirements, and others will
        satisfy non-functional requirements. They may be built to cover structural needs,
        business domain rules, or abstract visual identity and behaviors.
      </Paragraph>
      <Header tag="h2">Base knowledge</Header>
      <Paragraph>
        Building SOLID and self-managed components require some background experiences. So,
        if some of the following subjects are cloudy or don’t make any sense to you, please,
        check out <A href="#base-knowledge">Appendix I</A>.
      </Paragraph>
      <Paragraph>
        People have different ways to understand and learn things, so along with this article,
        there will be some examples of what it is being presented. These will comprehend the
        cases and bases required to build resilient components, most importantly, the mindset.
      </Paragraph>
      <Header tag="h2">Building resilient components</Header>
      <Paragraph>
        Component-based application development is a strategy used to build software, where
        numerous small pieces (components) work independently to compose a system (divide and
        conquer - Julius Cesar). The idea behind it is that a small and individual component
        has a simple concern which leads to low complexity, thus, it is easier to verify and
        validate (<A
          href="https://sttp.site/chapters/getting-started/testing-principles.html"
          target="_blank"
        >
          Verification and Validation
        </A>). This development strategy, combined with <A
          href="https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898"
          target="_blank"
        >
          SOLID
        </A>{" "}
        principles and patterns promotes higher scalability during software development.
      </Paragraph>

      <Header tag="h3">SOLID components</Header>
      <Paragraph>
        SOLID is an acronym for <b>Single Responsibility</b>, <b>Open-Closed</b>, <b>Liskov Substitution</b>,
        {" "}<b>Interface Segregation</b>, <b>Dependency Inversion</b>. We will now use React (functional
        components) to demonstrate how to apply these principles to your UI components by developing
        a grid.
      </Paragraph>
      <Paragraph>
        At the end of this section, you will find the Grid implementation.
      </Paragraph>
      <Paragraph>
        <b>Single Responsibility</b>: the component should have a single responsibility which
        is a high-level goal. Moreover, it can be broken into smaller pieces which
        might generate other components.
      </Paragraph>
      <Paragraph>
        e.g. An ATM  is an automated teller machine whose single purpose is to serve the clients
        from a bank removing the need for another human being to perform bank operations.
      </Paragraph>
      <Paragraph>
        It is possible to break this service down into multi-tasks, and all the tasks should be
        delegated to units (components) responsible for it. The same should be applied to our
        components.
      </Paragraph>
      <Paragraph>
        Now let’s look at a <i>Grid</i> component. It has the responsibility to display data in a
        tabular format defining placement and boundaries. It defines the structure where the rows
        and cells will present data, but it does not define how. That job should be delegated to
        the <i>Cell</i> component. Therefore, the Grid is a structural component.
      </Paragraph>
      <Paragraph>
        <b>Open-Closed</b>: components should be open for extension, but closed for modification
        (keep the word ‘Atom’ in the back of your mind for further reference).
      </Paragraph>
      <Paragraph>
        Similar to functional  Components, they cannot be extended, although they can be composed
        and decorated extending functionality. Additionally, properties might be defined to hook
        events into their lifecycle.
      </Paragraph>
      <Paragraph>
        <b>Liskov Substitution</b>: decorated components should be able to handle the original
        responsibilities enhancing them in the same domain.
      </Paragraph>
      <Paragraph>
        The cells of a grid may be decorated with additional functionality, but they must still be
        able to fulfill its original requirements of presenting data.
      </Paragraph>
      <Paragraph>
        It reminds me of the render props pattern, where developers are allowed to set custom
        "renderers". All the render props patterns should have a default implementation and
        regardless of the renderer executing (default or custom), the arguments are the same as
        well as the treatment is given to its return.
      </Paragraph>
      <Paragraph>
        <b>Interface Segregation</b>: components should have all pre-requirements to perform the
        tasks they are responsible for. Who hasn’t started a component and ended-up with this
        huge monster with a lot of lines?
      </Paragraph>
      <Paragraph>
        We start fetching data, then, requirements come to select, delete, and sort things on the
        <i>Grid</i>. Isn't it too much?
      </Paragraph>
      <Paragraph>
        This principle hints at the single responsibility, and the way to maintain is delegating
        the specificity to smaller components. The cell decorators might be changed when <i>Grid</i>
        {" "}is called, however, they should always represent data in the end.
      </Paragraph>
      <Paragraph>
        Notice at the end, how <i>Ellipsis</i> is dealt with in the <i>Cell</i>.
      </Paragraph>
      <Paragraph>
        <b>Dependency Inversion</b>: in a few words, be compliant with the API contracts and the
        responsibility of its domain. High and low-level modules depend on the abstraction. And
        abstractions do not depend on details, instead, details depend on abstractions.
      </Paragraph>
      <Paragraph>
        A classic way is a Data Layer. See how <i>Service</i> is used to fetch data in the example
        below. Changing it is a very simple task, we just need to wrap the <i>Page</i> component with
        {" "}<i>ServiceContext.Provider</i> and define its new value. Nothing should change, the only
        requirement is to respect the interface of Service. In other words, the method name, arguments,
        and return should have the same "types" (contract).
      </Paragraph>
      <Paragraph>
        One of the greatest side-effects of this principle is that we can easily mock up these layers
        injecting the new Service/Objects.
      </Paragraph>
      <iframe
        src="https://codesandbox.io/embed/vigilant-tu-j8zf5?fontsize=14&hidenavigation=1&hidedevtools=1&theme=dark&codemirror=1&view=split"
        style={{
          width: "100%",
          height: "400px",
          border: "0",
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title="component-grid"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
      <Paragraph>
        SOLID is a great way to see components, however, UI comes with 2 aspects: behavior and look and feel.
      </Paragraph>
      <Paragraph>
        Most of the popular libraries and frameworks use this component-based strategy successfully. And part
        of the struggle to scale applications come from the way we bring the UI components to life. Here are
        other 2 essential concepts to use as a guide when building a FE application: <A
          href="https://bradfrost.com/blog/post/atomic-web-design/"
          target="_blank"
        >
          Atomic Design
        </A> and <A
          href="https://medium.com/code-thoughts/what-i-understand-about-domain-driven-design-f7fbd00e364f"
          target="_blank"
        >
          Domain-Driven Design (DDD)
        </A>.
      </Paragraph>

      <Header tag="h3">Atomic Design</Header>
      <Paragraph>
        Atomic Design is a pattern used to build a design system. It classifies components as atoms,
        molecules, organisms, templates, and pages. Trying to match these definitions to the
        application scope at the implementation level brought up some mismatches. So I have changed
        the categories a little using DDD as a guideline. (<b>atoms</b>, <b>molecules</b>,
        {" "}<b>organisms</b>, and <b>beings</b>)
      </Paragraph>
      <Paragraph>
        <b>Atoms</b> are per science the smallest and indivisible unit (It is a lie! Although I do not
        recommend splitting an atom because the result may be catastrophic). A component as an atom
        means it has solid behavior (JS) and look-and-feel (CSS and the box-model). Keep in mind
        these 2 non-functional requirements of a UI component will be part of all the levels up to the
        largest components increasing its complexity, but delegating resolution of complexity down to
        small parts (does it hint SOLID?).
      </Paragraph>
      <Paragraph>
        Here is what I have learned over the years: atoms are not supposed to define paddings if there
        is no delimitation of space (background-color or border), and it never defines its margins
        (Never =D).
      </Paragraph>
      <Paragraph>
        <b>Molecules</b> are a composition of multiple atoms, still not domain-specific. e.g. Modals,
        Peek Panels, Snackbars, Cards. <i>They never define their own margins, however, it can define
        the immediate children’s margins. Also, only defines padding if there is a delimitation of
        space (background-color or border)</i>.
      </Paragraph>
      <Paragraph>
        By domain-specific, I mean that there is no value in a human sense. There is no human value
        in a modal/dialog unless it is used in a domain like: "Terms And Agreements Dialog". The dialog
        is just the visual aspect or mechanics of how we display the domain value "Terms And Agreements".
      </Paragraph>
      <Paragraph>
        <b>Organisms</b> are a combination of the previous levels (Molecules and Atoms) and not
        domain-specific. e.g. Form Abstraction, Charts, Dashboards. They follow the same previous rules
        regarding margins and paddings.
      </Paragraph>
      <Paragraph>
        Last but not least, <b>Beings</b> are a combination of all others and domain-specific. e.g. Inbox Mail,
        Composing Email, Email App. Also, they would follow the same previous rules regarding margins and
        paddings, and their parent container should take care of it.
      </Paragraph>
      <Paragraph>
        <b>It is a mindset change!</b> And it is always in evolution. Once we start thinking about components
        within these classifications, it helps to organize our code and to test it.
      </Paragraph>
      <Paragraph>
        Having a design system with components (dev/engineer view) following these principles, it will help a
        lot to build web applications as if they were lego (and I love lego)! They are predictable pixel art.
      </Paragraph>
      <Paragraph>
        It might be a good idea to dissect the example below and map it to each category.
      </Paragraph>
      <iframe
        src="https://codesandbox.io/embed/modal-2efj9?fontsize=14&hidenavigation=1&hidedevtools=1&theme=dark&codemirror=1&view=split"
        style={{
          width: "100%",
          height: "400px",
          border: "0",
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title="greeting-the-world"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
      <Paragraph>
        The example above is defining a Modal. We all know modals. They have header, content, and footer. Not quite
        there, who hasn’t had to add a modal without some of these? For this reason, the modal should be a structural
        component and it may be mapped to the molecule category.
      </Paragraph>
      <Paragraph>
        The modal only cares about defining the boundaries and elements present, even the behavior can be pulled apart
        (see useModalState.js).
      </Paragraph>
      <Paragraph>
        Ok, we still want a seamless experience for modals in our app, and the way to provide it is through the <b>Atoms</b>.
        Creating consistent small lego pieces like the buttons, text typography, and padding element will make devs
        share the same experience within a large application.
      </Paragraph>
      <Paragraph>
        Summarizing it, what brings the seamless user experience to applications are the well built smaller components.
        At any time, elements like ModalHeader, ModalContent, and ModalFooter could be added to the Design System. If
        they define some background color, they may define their padding as well promoting a more homogeneous
        look-and-feel. Note that the Modal will never need to change.
      </Paragraph>
      <Header tag="h3">Reporting errors</Header>
      <Paragraph>
        In the web components domain, when an error happens, it could be a rendering process or an async browser API.
        It is important to understand the event-loop and how this would affect the context of execution. As a kind
        reminder, handling errors is a non-functional requirement.
      </Paragraph>
      <Paragraph>
        For instance, React provides an ErrorBoundary, then, you might think: I am covered, woohoo!
      </Paragraph>
      <Paragraph>
        Nope! The ErrorBoundary catches errors in the rendering call stack execution. Any API call, event handler, or
        setTimeout/setInterval are detached call stacks. The event-loop will schedule them to run by themselves out
        of the rendering cycle. Then, ErrorBoundary won’t catch the error at that stage.
      </Paragraph>
      <Paragraph>
        If you want to solve it, you may have your own custom hook implementation (useCallbackErrorBoundary) wrapping
        the return of useCallback to handle the error that happens in this execution.
      </Paragraph>
      <Paragraph>
        What if is not React though? CustomEvent could be dispatched bubbling up from the e.target, or straight to the
        body where may have a general error handler in place. Another way is creating a custom Error definition and
        append error handler to the window.
      </Paragraph>
      <Paragraph>
        <i>Nonetheless, the components should present themselves consistently even in case of error. </i>
      </Paragraph>
      <Header tag="h3">Testing</Header>
      <Paragraph>
        Resilient applications cannot be built with poor testing strategies. Web applications have a few
        ways to exchange messages: users interacting with web elements, network messages, or browser API.
        Abstracting these bridges with the external world is key for good testing.
      </Paragraph>
      <Paragraph>
        Testing comes with a lot of different strategies for backend applications such as specification-based
        testing, boundary testing, structural testing, model-based testing, design-by-contracts,
        property-based testing <A
          href="https://sttp.site/chapters/getting-started/testing-principles.html"
          target="_blank"
        >[STTP]</A>. On the frontend domain, the test strategy needs a more holistic approach.
      </Paragraph>
      <Paragraph>
        In general, tests are classified per scope as unit tests, integration tests, system tests.
      </Paragraph>
      <Paragraph>
        <b>Unit tests</b> are isolation tests where we may mock other pieces by defining behavior to ensure
        the isolation of tests. BE unit tests are supposed to be really small and fast.
      </Paragraph>
      <Paragraph>
        <b>Integration tests</b> are tests performed on a scope (class, function, method) within its dependencies.
      </Paragraph>
      <ul>
        <li>
          e.g. Testing a class A which delegate part of execution to class B
        </li>
        <li>
          e.g. Testing a service (micro-service, system, database) A which delegate part of execution to a
          service B
        </li>
      </ul>
      <Paragraph>
        <b>System tests</b> are tests performed against real environments such as end-to-end tests (E2E) and
        system architectural resilience.
      </Paragraph>
      <center>
        <TestPyramid />
      </center>
      <Paragraph>
        Normally, the complexity of the test grows as per the image above. Some claim the cost or time execution
        increases as well. How much of it is really true? More importantly, the cost-benefit. Let's go through
        an example to simplify the understanding.
      </Paragraph>
      <iframe
        src="https://codesandbox.io/embed/testing-strategy-part-i-iuf7v?fontsize=14&hidenavigation=1&hidedevtools=1&theme=dark&codemirror=1&view=editor"
        style={{
          width: "100%",
          height: "400px",
          border: "0",
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title="greeting-the-world"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
      <Paragraph>
        Let's assume the application above which only exposes the class <b>Person</b> in its public API.
        We could write a test to each branch present in the <b>getAgeAtYear</b> calculation as it has been built
        to deal with any possible situation. Knowing that our application only exposes <b>Person</b>, is there
        any real value by adding tests to each branch present in <b>getAgeAtYear</b>? Or better, is there a code
        path that will never be executed in the function? Why keep it? Why test it?
      </Paragraph>
      <Paragraph>
        <i>
          Bear in mind this is just an attempt to show how much useless code is maintained. The example may be
          improved.
        </i>
      </Paragraph>
      <Paragraph>
        The tests (index.test.js) cover all the possibilities for the exposed API. Moreover, highlight dead-code
        based on branch coverage. Their cost is small enough compared to if it was needed to cover all branches
        for <b style={{ background: 'lightyellow' }}>getAgeAtYear(birthdayYear, currentYear)</b>, and now, the
        function can be refactored to...
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
        The point is that cost and complexity of tests depend not only on the classification but also on the tools
        and domain of application.
      </Paragraph>
      <Paragraph>
        The real value of a test suite is to make sure your user experiences expected behavior defined by
        acceptance criteria. Moreover, UI Web Application tests are much more valuable when testing integration
        than single units, thus, it makes sure to assert the expected behaviour.
      </Paragraph>
      <Header tag="h2">Holistically Building Components</Header>
      <Paragraph>
        Creating resilient UI components and web applications, It is very much holistic software development.
        It requires quite a few pieces of knowledge. I hope to have brought the most important ones and have
        sparked your curiosity.
      </Paragraph>
      <div id="base-knowledge" />
      <Header tag="h2">Appendix I</Header>
      <Header tag="h3">Functional vs Non-functional requirements</Header>
      <Paragraph>
        Before going any further, let’s clarify what are the differences between these 2.
        A functional requirement looks after to satisfy domain-oriented requirements such as “Login capability”,
        “Email inbox”, “Profitability reports” and much more. Whereas a non-functional one is looking after to
        satisfy environmental conditions, e.g. performance, scalability, maintainability, monitoring among others.
        In addition to previous items for the UI realm, there will be non-functional “components” usually defined
        by the design system (like lego blocks). The last may be exemplified by Dropdowns, Buttons, Grid, Radios,
        Alerts, connectivity status among others.
      </Paragraph>
      <Header tag="h3">Building the mindset</Header>
      <Paragraph>
        It is very-very important to understand the environment where the application is running when building
        applications/systems. Javascript/Nodejs runs code using an event-loop strategy which is awesomely
        explained in this <A
          href="https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en"
          target="_blank"
        >
          Youtube video
        </A> or more in-depth by <A
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"
          target="_blank"
        >MDN - Concurrency model and the event loop</A>.
        Nevertheless, I would recommend looking up <b>closure</b> <A
          href="https://whatthefuck.is/closure"
          target="_blank"
        >[1]</A><A
          href="http://codeinbox.me/posts/what-is-a-closure"
          target="_blank"
        >[2]</A> and <b>box-model</b> <A
          href="http://codeinbox.me/posts/box-model-is-the-web-layout"
          target="_blank"
        >[1]</A>.
      </Paragraph>
      <Paragraph>
        The way to perceive and build the components and functions matter to deliver high-quality experiences.
        Moreover, it is important to understand what we are building: software. And what is software (why do
        we write code)? Simplistically, it can be seen as a logical box built with instructions used to either
        solve something considered "a problem" or automate some manual tasks. With that in mind, it comes
        2 questions to be answered along with this reading: <b>What are we trying to solve/automate? How do we
        verify it?.</b>
      </Paragraph>
      <Paragraph>
        The software ecosystem can be seen as small modules that would comprehend 3 aspects: agents' stimulus,
        connections (out of the domain of application), and side-effects. It is possible to take the agent apart,
        and group their stimulus and side-effects as "message exchanging" between peers where one of them is
        the application. And the connection can be seen as the way through the messages are exchanged.
      </Paragraph>
      <ul>
        <li>
          <b>Agents</b>
        </li>
        <li>
          <b>Messages</b>
          <ul>
            <li>Stimulus</li>
            <li>Side-effects</li>
          </ul>
        </li>
        <li>
          <b>Connections</b>
        </li>
      </ul>
      <Header tag="h3">Exchanging messages: case 1</Header>
      <iframe
        src="https://codesandbox.io/embed/greeting-the-world-gz43j?fontsize=14&hidenavigation=1&hidedevtools=1&theme=dark&codemirror=1&view=split"
        style={{
          width: "100%",
          height: "400px",
          border: "0",
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title="greeting-the-world"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
      <Paragraph>
        In this case, the application receives a message (stimulus from the user) through browser event
        API (connection), processes it, and responds with a message to the user (side-effect to the user)
        through browser DOM API (connection).
      </Paragraph>
      <Paragraph>
        Let's add one more component of complexity now...
      </Paragraph>
      <Header tag="h3">Exchanging messages: case 2</Header>
      <iframe
        src="https://codesandbox.io/embed/fetch-todays-date-b0r0o?fontsize=14&hidenavigation=1&hidedevtools=1&theme=dark&codemirror=1&view=split"
        style={{
          width: "100%",
          height: "400px",
          border: "0",
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title="greeting-the-world"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
      <Paragraph>
        Here, the application allows users to get today's date.
      </Paragraph>
      <Paragraph>
        In this case, our Application receives a message (stimulus from the user) through browser event
        API (connection), acknowledges the expertise delegating to another application (API) by sending a
        stimulus via browser https API, then, API responds it back to our Application within the same
        connection (not necessarily needed). So, our Application processes it and responds with a message
        to the user (side-effect to the user) through browser DOM API (connection).
      </Paragraph>
      <center>
        <SequenceDiagram />
      </center>
      <Paragraph>
        Note that our application also creates a stimulus to another application, by this our application is
        acting as an agent to another application. Thus, user/application interaction with another
        user/application can be seen as agents exchanging messages.
      </Paragraph>
      <Paragraph>
        These are some of the background knowledge that may help you while going through this post.
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
          href="https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898"
          target="_blank"
        >
          SOLID
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
