import React from "react"
import styled from "styled-components"
import Paragraph from "../templates/components/Paragraph"
import Subtitle from "../templates/components/Subtitle"
import References from "../templates/components/References"
import A from "../templates/components/A"
import Code from "../templates/components/Code"
import Html from "../templates/components/Html"
import Img from "../templates/components/Img"
import List from "../templates/components/List"
import Item from "../templates/components/Item"

const codeTheme = "prism"

const Button = styled.button.attrs({ type: "button" })`
  background-color: blue;
  color: white;
`

const DropdownContainer = styled.div`
  position: relative;
`

const DropdownPanel = styled.div`
  background-color: red;
  color: white;
  position: absolute;
  top: 100%;
  z-index: 1;
  padding: 10px;
`

const Dropdown = ({ children, name, items, isCorrect = false }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const containerRef = React.useRef(null)
  React.useEffect(() => {
    const handler = e => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target) &&
        (!isCorrect || document.body.contains(e.target))
      ) {
        console.log("Click out event from container:", name)
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handler)
    return () => {
      document.removeEventListener("click", handler)
    }
  }, [])

  return (
    <DropdownContainer ref={containerRef}>
      <Button onClick={() => setIsOpen(true)}>{name}</Button>
      {isOpen && (
        <DropdownPanel>
          {children ||
            items.map(item => (
              <Button
                key={item.name}
                type="button"
                onClick={() => {
                  console.log(
                    `Clicking from container "${name}" on item:`,
                    item.name
                  )
                  setIsOpen(false)
                }}
              >
                {item.name}
              </Button>
            ))}
        </DropdownPanel>
      )}
    </DropdownContainer>
  )
}

const localeItems = [{ name: "Brazil" }, { name: "Ireland" }]
const Locales = ({ complement, isCorrect }) => {
  return (
    <Dropdown
      isCorrect={isCorrect}
      name={`${complement} Locale`}
      items={localeItems}
    />
  )
}
const Profile = ({ isCorrect }) => {
  return (
    <Dropdown isCorrect={isCorrect} name="Profile">
      <Locales isCorrect={isCorrect} complement="Primary" />
      <Locales isCorrect={isCorrect} complement="Secondary" />
    </Dropdown>
  )
}

export default function Article({ html: brief }) {
  const countRef = React.useRef(0)
  const linkDispatchNoBubblingRef = React.useRef(null)
  React.useEffect(() => {
    const handler = e => {
      countRef.current += 1
      console.log(
        "[Click count:",
        countRef.current,
        "]: You have clicked on the element:",
        e.target
      )
    }

    const linkDispatchNoBubblingHandler = e => {
      console.log("Mouse click event for:", e.currentTarget)
    }
    linkDispatchNoBubblingRef.current.addEventListener(
      "click",
      linkDispatchNoBubblingHandler
    )

    document.addEventListener("click", handler)

    return () => {
      linkDispatchNoBubblingRef.current.removeEventListener(
        "click",
        linkDispatchNoBubblingHandler
      )
      document.removeEventListener("click", handler)
    }
  }, [])
  return (
    <div>
      <Html>{brief}</Html>
      <Paragraph>
        Before we go straight to the point (Click Outside Events), let's
        exercise and strengthen some important base knowledge.
      </Paragraph>
      <Paragraph>
        Along the past few years, browsers unified the way the DOM (Document
        Object Model) is treated. Thus, there is a common way to add or remove
        event handlers,{" "}
        <A href="https://caniuse.com/#feat=addeventlistener" target="_blank">
          see reference
        </A>
        .
      </Paragraph>
      <Paragraph>
        Currently, most of the browsers have support to{" "}
        <A
          href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
          target="_blank"
        >
          addEventListener
        </A>{" "}
        and{" "}
        <A
          href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener"
          target="_blank"
        >
          removeEventListener
        </A>
        . Their API spec accepts an event name, function handler and options
        which contains a few properties.
      </Paragraph>
      <Subtitle>Events</Subtitle>
      <Paragraph>
        An event can be either added to an element or to the document. For a
        better learning experience through this post, keep the console open. The
        events presented are added to this page. See the example below.
      </Paragraph>
      <Code
        theme={codeTheme}
        code={`
let eventCount = 0;

document.addEventListener('click', (e) => {
  eventCount += 1;
  console.log(
    "[Click count:",
    eventCount,
    "]: You have clicked on the element:",
    e.target
  );
});
          `.trim()}
      />
      <Paragraph>
        So, every click on the document will log the element clicked.
      </Paragraph>
      <Paragraph>
        Almost all events bubble up through its containers until reach the
        document. The only exception is the <i>focus</i> event.
      </Paragraph>
      <Paragraph>
        <Img name="EventBubbling" />
      </Paragraph>
      <Paragraph>
        There are at least 2 ways to prevent the events to bubble up.
      </Paragraph>
      <List>
        <Item>Dispatching event indicating to not bubble it.</Item>
        <Item>
          Using <i>e.stopImmediatePropagation()</i> in one of the handlers
        </Item>
      </List>
      <Paragraph>
        <A
          ref={linkDispatchNoBubblingRef}
          onMouseEnter={e => {
            console.log("Mouse enter event for:", e.currentTarget)
            const evt = new MouseEvent("click", {
              bubbles: false,
            })
            e.currentTarget.dispatchEvent(evt)
          }}
        >
          Hover me to dispatch
        </A>{" "}
        the event below.
      </Paragraph>
      <Code
        theme={codeTheme}
        code={`
const evt = new MouseEvent("click", { bubbles: false });
e.currentTarget.dispatchEvent(evt);
          `.trim()}
      />
      <Paragraph>
        <A
          onClick={e => {
            e.nativeEvent.stopImmediatePropagation()
            console.log("Stopped propagation at:", e.currentTarget)
          }}
        >
          Click me to dispatch
        </A>{" "}
        the event below.
      </Paragraph>
      <Code
        theme={codeTheme}
        code={`
element.addEventListener('click', e => {
  e.stopImmediatePropagation();
  console.log("Stopped propagation at:", e.currentTarget);
})
          `.trim()}
      />
      <Paragraph>
        Ok, so far we have been playing with events and I hope it gave to you a
        sense of how they work.
      </Paragraph>
      <Subtitle>ClickOut Event</Subtitle>
      <Paragraph>
        Browsers do not have click out event out of the box. We need to
        implement them. The are basically listeners added to the document on
        click event.
      </Paragraph>
      <Paragraph>
        Most of the examples that I have come across are implemented as simple
        as it can be, also, they have a bug.
      </Paragraph>
      <Paragraph>
        Let's assume we have a dropdown panel which is open when user clicks on
        a button and it is closed when user clicks outside.
      </Paragraph>
      <Paragraph>
        The basic idea of click out is usually implemented as below.
      </Paragraph>
      <Code
        theme={codeTheme}
        code={`
document.addEventListener('click', e => {
  const dropdownPanel = document.querySelector('.dropdown-panel.is-open');
  if (dropdownPanel && !dropdownPanel.contains(e.target)) {
    // we remove the is-open class
    dropdownPanel.setAttribute('class', 'dropdown-panel');
  }
})
          `.trim()}
      />
      <Paragraph>
        Then, what is the problem with this? To get a crystal clear idea about
        the problem, we need to create a bit more complex scenario. So, let's
        imagine we have the same dropdown panel as a profile dropdown which
        allows users to select locales from a nested dropdown.
      </Paragraph>
      <Paragraph>
        Now we have a dropdown panel inside another dropdown panel. See the
        example below for a better view of the problem.
      </Paragraph>
      <Paragraph>
        Example 1: <Profile />
      </Paragraph>
      <Paragraph>
        Open the "Profile" dropdown, also the "Primary Locale" dropdown. Then,
        select one of the items for locale.
      </Paragraph>
      <Paragraph>
        You will notice that all panel have been dismissed. This is because the
        events bubble up and when it reaches the profile container "clickout"
        handler, the nested panel is already dismissed as selection has already
        happened. At this point, for the "Profile" dropdown element is not
        contained in the "Profile" container. This is half-true. It is not
        there, but it was.
      </Paragraph>
      <Paragraph>
        Fixing it is a matter of checking if the element is still present in the
        full dom. See below the third expression in the if{" "}
        <i>document.body.contains(e.target)</i>.
      </Paragraph>
      <Code
        theme={codeTheme}
        code={`
document.addEventListener('click', e => {
  const dropdownPanel = document.querySelector('.dropdown-panel.is-open');
  /**
   * We just dismiss the panel if the target element does not belong to the
   * container, but, it is still present in the DOM.
   */
  if (
    dropdownPanel &&
    !dropdownPanel.contains(e.target) &&
    document.body.contains(e.target)
  ) {
    // we remove the is-open class
    dropdownPanel.setAttribute('class', 'dropdown-panel');
  }
})
          `.trim()}
      />
      <Paragraph>
        Example 2: <Profile isCorrect />
      </Paragraph>
      <References>
        <A
          href="https://javascript.info/bubbling-and-capturing"
          target="_blank"
        >
          Bubbling and capturing
        </A>
        <A href="https://caniuse.com/#feat=addeventlistener" target="_blank">
          caniuse.com - addEventListener
        </A>
        <A
          href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
          target="_blank"
        >
          MDN - addEventListener
        </A>
        <A
          href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent"
          target="_blank"
        >
          MDN - dispatchEvent
        </A>
        <A
          href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener"
          target="_blank"
        >
          MDN - removeEventListener
        </A>
        <A
          href="https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation"
          target="_blank"
        >
          MDN - stopImmediatePropagation
        </A>
      </References>
    </div>
  )
}
