import React, { useState } from "react"
import styled from "styled-components"
import Paragraph from "../templates/components/Paragraph"
import Subtitle from "../templates/components/Subtitle"
import References from "../templates/components/References"
import A from "../templates/components/A"
import Code from "../templates/components/Code"
import Img from "../templates/components/Img"
import Html from "../templates/components/Html"

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
    background-color: green;
  }

  .content-box {
    /* either */
    width: 100%;
    /* or width: 200px; */

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
  const [sp1Overflow, setSp1Overflow] = useState(false)
  const [sp2Overflow, setSp2Overflow] = useState(false)
  const [sp3Overflow, setSp3Overflow] = useState(false)
  const [sp4Overflow, setSp4Overflow] = useState(false)
  return (
    <Layout>
      <Html>{brief}</Html>
      <Paragraph>
        "Everything in CSS has a box around it, and understanding these boxes is
        key to being able to create layouts with CSS, or to align items with
        other items." [
        <A
          href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model"
          target="_blank"
        >
          MDN
        </A>
        ]
      </Paragraph>
      <Img name="BoxModelMdn" />
      <Paragraph>
        The box model is characterized by margin*, border, padding and content.
        Although affecting the elements size in some scenarios, margins are
        never within box-sizing of the elements.
      </Paragraph>
      <Subtitle>box-sizing</Subtitle>
      <Paragraph>
        The box model is quite related to box-sizing. The last defines how size
        definitions are calculated. For instance, lets assume we always have a
        container with 200px x 200px (width x height) set position as{" "}
        <strong>relative</strong>.
      </Paragraph>
      <Code
        theme={codeTheme}
        code={`
.container {
  position: relative;
  height: 200px;
  width: 200px;
  background-color: blue;
}

.container > div {
  background-color: green;
}

.content-box {
  /* either */
  width: 100%;
  /* or width: 200px; */

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
          `.trim()}
      />
      <ul>
        <li>
          <Subtitle>box-sizing: content-box</Subtitle>
          <Code
            theme={codeTheme}
            code={`
<div class="container">
  <div class="content-box">How am I supposed to look?</div>
</div>
              `.trim()}
          />
          <div className="wrapper">
            <div className="container">
              <div className="content-box">How am I supposed to look?</div>
            </div>
          </div>
          <Paragraph>
            The content is still within container. Good! But, what would
            happened if we added a padding or border?
          </Paragraph>
          <Code
            theme={codeTheme}
            code={`
<div class="container">
  <div class="content-box padded">How am I supposed to look?</div>
</div>
              `.trim()}
          />
          <div className="wrapper">
            <div
              className="container"
              style={{ ...(sp1Overflow && { overflow: "auto" }) }}
            >
              <div className="content-box padded">
                How am I supposed to look padded?
              </div>
            </div>
            <button type="button" onClick={() => setSp1Overflow(val => !val)}>
              {sp1Overflow
                ? 'Click to remove "overflow: auto;" from container'
                : 'Click to add "overflow: auto;" to container'}
            </button>
          </div>
          <Code
            theme={codeTheme}
            code={`
<div class="container">
  <div class="content-box bordered">How am I supposed to look?</div>
</div>
              `.trim()}
          />
          <div className="wrapper">
            <div
              className="container"
              style={{ ...(sp2Overflow && { overflow: "auto" }) }}
            >
              <div className="content-box bordered">
                How am I supposed to look with border?
              </div>
            </div>
            <button type="button" onClick={() => setSp2Overflow(val => !val)}>
              {sp2Overflow
                ? 'Click to remove "overflow: auto;" from container'
                : 'Click to add "overflow: auto;" to container'}
            </button>
          </div>
        </li>
        <li>
          <Subtitle>box-sizing: border-box</Subtitle>
          <Paragraph>
            From previous examples, there is a big lesson to take in. If a HTML
            element has its box-sizing set to <strong>content-box</strong>{" "}
            anything changed out of the content area affects the overall size of
            the element. If the container that retains the element has{" "}
            <strong>overflow: auto;</strong> in its styles, it may creates
            scrollbars.
          </Paragraph>
          <Paragraph>
            <strong>Note:</strong>
            it worth mentioning that the <strong>padding-box</strong> exists
            only for Firefox at the moment. Then, please, don't use it.
          </Paragraph>
          <Img name="CanIUsePaddingBox" />
          <Paragraph>Let's see how border-box manage the layout.</Paragraph>
          <Code
            theme={codeTheme}
            code={`
<div class="container">
  <div class="border-box padded">How am I supposed to look?</div>
</div>
              `.trim()}
          />
          <div className="wrapper">
            <div
              className="container"
              style={{ ...(sp3Overflow && { overflow: "auto" }) }}
            >
              <div className="border-box padded">
                How am I supposed to look padded?
              </div>
            </div>
            <button type="button" onClick={() => setSp3Overflow(val => !val)}>
              {sp3Overflow
                ? 'Click to remove "overflow: auto;" from container'
                : 'Click to add "overflow: auto;" to container'}
            </button>
            <p>
              Even though you are toggling overflow, the element size is
              self-contained in its box-sizing. Then, it does not create
              scrollbars.
            </p>
          </div>
          <Code
            theme={codeTheme}
            code={`
<div class="container">
  <div class="border-box bordered">How am I supposed to look?</div>
</div>
              `.trim()}
          />
          <div className="wrapper">
            <div
              className="container"
              style={{ ...(sp4Overflow && { overflow: "auto" }) }}
            >
              <div className="border-box bordered">
                How am I supposed to look with border?
              </div>
            </div>
            <button type="button" onClick={() => setSp4Overflow(val => !val)}>
              {sp4Overflow
                ? 'Click to remove "overflow: auto;" from container'
                : 'Click to add "overflow: auto;" to container'}
            </button>
            <p>
              Even though you are toggling overflow, the element size is
              self-contained in its box-sizing. Then, it does not create
              scrollbars.
            </p>
          </div>
        </li>
      </ul>
      <Paragraph>
        "Note: It is often useful to set box-sizing to border-box to layout
        elements. This makes dealing with the sizes of elements much easier, and
        generally eliminates a number of pitfalls you can stumble on while
        laying out your content." [
        <A
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
          target="_blank"
        >
          MDN
        </A>
        ]
      </Paragraph>
      <Subtitle>Pitfall</Subtitle>
      <Paragraph>
        The problem with margins come to the point we need to specify fixed
        sizes (different from %), even if the sum of internal elements matches
        the container. In the examples below, we will see container and content
        being set to <strong>width: 200px;</strong>. Still, the content which
        has margins forces scrollbars in the container.
      </Paragraph>
      <Code
        theme={codeTheme}
        code={`
<div class="container overflow">
  <div class="border-box padded bordered" style="width: 200px;">How am I supposed to look?</div>
</div>
              `.trim()}
      />
      <div className="wrapper">
        <div className="container overflow">
          <div
            className="border-box padded bordered"
            style={{ width: "200px" }}
          >
            How am I supposed to look padded?
          </div>
        </div>
      </div>
      <Code
        theme={codeTheme}
        code={`
<div class="container overflow">
  <div class="border-box padded bordered with-margins" style="width: 200px;">How am I supposed to look?</div>
</div>
              `.trim()}
      />
      <div className="wrapper">
        <div className="container overflow">
          <div
            className="border-box padded bordered with-margins"
            style={{ width: "200px" }}
          >
            How am I supposed to look with border?
          </div>
        </div>
      </div>
      <Img name="BoxModel" />
      <Subtitle>Conclusion</Subtitle>
      <Paragraph>
        Use <strong>box-sizing: border-box;</strong> and help building a better
        web experience.
      </Paragraph>
      <Subtitle />
      <References>
        <A
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model"
          target="_blank"
        >
          Introduction to the CSS basic box model
        </A>
        <A
          href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model"
          target="_blank"
        >
          The box model
        </A>
        <A
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
          target="_blank"
        >
          box-sizing
        </A>
      </References>
    </Layout>
  )
}
