import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IconBack(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14 28.764a14.05 14.05 0 01-7.778-2.348 13.946 13.946 0 01-5.156-6.252 13.867 13.867 0 01-.797-8.05 13.91 13.91 0 013.832-7.132A14.035 14.035 0 0114 .902c3.713 0 7.274 1.467 9.9 4.08a13.896 13.896 0 014.1 9.85c0 3.695-1.475 7.239-4.1 9.851a13.913 13.913 0 01-4.54 3.027c-1.699.7-3.52 1.058-5.36 1.053zm0-26.005c-6.69 0-12.133 5.416-12.133 12.073C1.867 21.49 7.31 26.907 14 26.907c6.69 0 12.133-5.416 12.133-12.073C26.133 8.174 20.69 2.758 14 2.758z"
        fill="#fff"
        fillOpacity={0.7}
      />
      <Path
        d="M15.674 21.99L8.48 14.833l7.194-7.158 1.32 1.313-5.874 5.845 5.873 5.844-1.32 1.313z"
        fill="#fff"
        fillOpacity={0.7}
      />
    </Svg>
  )
}

export default IconBack
