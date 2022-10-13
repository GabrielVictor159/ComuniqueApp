import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Pencil = (props) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 29 29"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m.45 28.545.005.005a1.522 1.522 0 0 0 1.574.367l8.695-2.949L27.407 9.284a5.439 5.439 0 1 0-7.692-7.69L3.032 18.276.082 26.97a1.521 1.521 0 0 0 .368 1.574ZM21.1 2.978A3.48 3.48 0 0 1 26.022 7.9l-2.194 2.194-4.92-4.92L21.1 2.977ZM4.74 19.338l12.781-12.78 4.921 4.92L9.662 24.26l-7.448 2.527 2.526-7.447Z"
      fill="#000"
      fillOpacity={0.7}
    />
  </Svg>
)

export default Pencil