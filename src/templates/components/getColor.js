export const colors = {
  /* Main Default color */
  //   "#1B2528"
  // "#8FC924" //#8fc924 #6FA904
  // "#983351"
  // "#5BBBE1"
  // "#79D7BD"
  // "#8C8E70"
  // "color-default-xdark": "#000000",
  // "color-default-dark": "hsla(0, 0%, 0%, 0.8)",
  // "color-default-medium": "#5D5D5D",
  // "color-default-light": "#AEAEAE",
  // "color-default-xlight": "#E5E5E5",

  "color-default-xxdark": "#1B2528",
  "color-default-xdark": "#3D3D3D",
  "color-default-dark": "#983351",
  "color-default-medium": "#E497AE",
  "color-default-light": "#5BBBE1",
  "color-default-xlight": "#73EBDC",
  "color-default-xxlight": "#8C8E70",
  // #4B9Bc1
  /* Main Primary color */
  // "color-primary-xdark": "#003820",
  // "color-primary-dark": "#003A21",
  // "color-primary-medium": "#277553",
  // "color-primary-light": "#74AF96",
  // "color-primary-xlight": "#FDFFFE",

  // /* Main Secondary color (1) */
  // "color-secondary-xdark": "#512E00",
  // "color-secondary-dark": "#553100",
  // "color-secondary-medium": "#AA7939",
  // "color-secondary-light": "#FFDAA9",
  // "color-secondary-xlight": "#FFFEFD",

  // /* Main Secondary color (2) */
  // "color-tertiary-xdark": "#480016",
  // "color-tertiary-dark": "#4C0017",
  // "color-tertiary-medium": "#983351",
  // "color-tertiary-light": "#E497AE",
  // "color-tertiary-xlight": "#FFFDFE",
}

export default function getColor(palette, intensity) {
  return colors[`color-${palette}-${intensity}`]
}
