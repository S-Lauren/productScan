import * as React from "react"

import Svg, { G, Path, Defs } from 'react-native-svg';
function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 250" {...props}>
      <G fill="#fff">
        <G transform="translate(140 60.19)">
          <Path d="M0 0h60v60H0z" />
          <Svg width={60} height={60} filter="url(#prefix__a)" {...props}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 84.7 84.7"
              {...props}
            >
              <Path
                fill="none"
                stroke="#333"
                d="M42.3 82.7L2 42.3m0-26.9l67.2 67.2M15.4 2l26.9 26.9L69.2 2m13.5 13.4L54.9 43.3l26.9 26.9m.9-27.9L76 49l6.7 6.7M28.9 2l13.4 13.4L55.8 2m-6.7 33.6L82.7 2m0 80.7L2 2m67.2 40.3l13.4-13.4M2 28.9l53.8 53.8m-26.9 0L2 55.8m0 26.9h13.4L2 69.2"
              />
            </Svg>
          </Svg>
          {/* <defs>
            <filter id="prefix__a">
              <feColorMatrix values="0 0 0 0 0.99609375 0 0 0 0 0.99609375 0 0 0 0 0.99609375 0 0 0 1 0" />
            </filter>
          </defs> */}
        </G>
        <Path d="M129.776 175.94l-6.29-13.23-2.41 2.69v10.54h-8.98v-48.75h8.98v26.34l1.11-1.65 6.22-10.28h10.7l-9.97 14.15 10.92 20.19h-10.28zm38.78 0h-9.04q-.38-.79-.77-2.67-2.41 3.3-6.53 3.3-4.32 0-7.16-2.85-2.84-2.86-2.84-7.4 0-5.39 3.44-8.34 3.45-2.96 9.92-3.02h2.73v-2.76q0-2.32-.79-3.27-.8-.95-2.32-.95-3.36 0-3.36 3.93h-8.99q0-4.76 3.57-7.85 3.57-3.1 9.03-3.1 5.65 0 8.75 2.94 3.09 2.94 3.09 8.39v16.16q.07 4.44 1.27 6.95v.54zm-14.34-6.41q1.49 0 2.53-.6 1.05-.61 1.56-1.43v-7.14h-2.16q-2.28 0-3.6 1.46-1.32 1.46-1.32 3.9 0 3.81 2.99 3.81zm25.99-27.93l4.13 19.39 4.57-19.39h9.58l-11.3 39.48q-2.54 8.73-9.55 8.73-1.62 0-3.68-.6v-7.02l1.04.03q2.1 0 3.16-.81 1.07-.8 1.61-2.8l.69-2.32-9.9-34.69h9.65zm39.26 34.34l-.25-3.14q-2.8 3.77-7.49 3.77-4.73 0-7.18-3.25-2.44-3.25-2.44-9.47V141.6h8.98v22.47q.06 5.01 3.33 5.01 3.08 0 4.45-2.66V141.6h9.04v34.34h-8.44z" />
      </G>
    </Svg>
  )
}

export default SvgComponent