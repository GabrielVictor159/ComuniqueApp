import * as React from "react"
import { View } from "react-native"
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from "react-native-svg"

const BackgroundColor2 = (props) => (

  <Svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} preserveAspectRatio="xMinYMin slice" viewBox="0 0 375 808" >
    <Defs>
      <RadialGradient
        id="b"
        cx={0.543}
        cy={0.057}
        r={1.354}
        gradientTransform="matrix(.996 -.086 .077 .889 -.002 .053)"
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#277bc0" />
        <Stop offset={0.793} stopColor="#9bc2e2" stopOpacity={0.459} />
        <Stop offset={1} stopColor="#94bde0" stopOpacity={0.502} />
      </RadialGradient>
      <ClipPath id="a">
        <Path d="M0 0h375v808H0z" />
      </ClipPath>
    </Defs>
    <G data-name="Web 1920 \u2013 1" clipPath="url(#a)">
      <Path fill="#fff" d="M0 0h375v808H0z" />
      <Path data-name="Ret\xE2ngulo 1" fill="url(#b)" d="M0 0h375v808H0z" />
    </G>
  </Svg>
)

export default BackgroundColor2