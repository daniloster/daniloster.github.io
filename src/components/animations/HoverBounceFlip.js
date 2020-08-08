import { createCustomAnimation } from "../Animate"

const BOUNCE_FLIP_STEPS = [
  {
    state: "0%",
    content: `transform: translateZ(50px);`,
  },
  // {
  //   state: "30%",
  //   content: `
  //     transform: scale(-0.1, 1);
  //   `,
  // },
  // {
  //   state: "40%",
  //   content: `
  //     transform: scale(0.94, 1);
  //   `,
  // },
  // {
  //   state: "40%",
  //   content: `
  //     transform: scale(-0.14, 1);
  //   `,
  // },
  // {
  //   state: "50%",
  //   content: `
  //     transform: scale(0.79, 1);
  //   `,
  // },
  // {
  //   state: "50%",
  //   content: `
  //     transform: scale(-0.23, 1);
  //   `,
  // },
  // {
  //   state: "60%",
  //   content: `
  //     transform: scale(0.81, 1);
  //   `,
  // },
  // {
  //   state: "70%",
  //   content: `
  //     transform: scale(-0.15, 1);
  //   `,
  // },
  // {
  //   state: "100%",
  //   content: `
  //     transform: scale(1, 1);
  //   `,
  // },
  {
    state: "100%",
    content: `
      transform: rotate3d(-0.3, -0.3, 0, 30deg);
    `,
  },
]

function parserPropsHoverBounceFlip(props) {
  return {
    ...props,
    iterationCount: 1,
    defaultContainer: `
      position: relative;
      height: ${props.height};
      width: ${props.width};
    `,
    default: `
      transform-style: preserve-3d;
      transform-origin: 50% 50%;
      position: relative;
      
      &:before {
        height: ${props.height};
        width: ${props.width};
      }

      &:hover:before {
        display: block;
        postision: relative;
      }

      &:hover ${props.hoverTarget} {
        position: absolute;
      }

      & ${props.hoverTarget} {
        transform: translateZ(50px);
        height: ${props.height};
        width: ${props.width};
      }
    `,
    target: `&:hover ${props.hoverTarget}`,
  }
}

export default createCustomAnimation(
  parserPropsHoverBounceFlip,
  BOUNCE_FLIP_STEPS
)
