import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const IcKycNotAvailable = (props: SvgProps) => (
  <Svg width={81} height={80} fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M40.5 78.825c21.443 0 38.826-17.383 38.826-38.826S61.943 1.173 40.5 1.173 1.674 18.556 1.674 40 19.057 78.825 40.5 78.825Z"
    />
    <Path
      fill="url(#b)"
      d="M40.5 65.167c16.346 0 29.597-13.25 29.597-29.596 0-16.345-13.251-29.596-29.597-29.596-16.345 0-29.596 13.25-29.596 29.596S24.154 65.167 40.5 65.167Z"
      opacity={0.3}
    />
    <Path
      fill="#454BD4"
      fillRule="evenodd"
      d="M40.5 2.348C19.705 2.348 2.848 19.205 2.848 40S19.705 77.652 40.5 77.652 78.152 60.795 78.152 40 61.295 2.348 40.5 2.348ZM.5 40c0-22.091 17.909-40 40-40s40 17.909 40 40-17.909 40-40 40S.5 62.091.5 40Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#c)"
      d="M42.847 51.761H38.15a2.653 2.653 0 0 1-2.646-2.493l-1.686-28.57a2.65 2.65 0 0 1 2.646-2.806h8.07a2.652 2.652 0 0 1 2.646 2.806l-1.685 28.57a2.65 2.65 0 0 1-2.647 2.493Z"
    />
    <Path
      fill="url(#d)"
      d="M40.792 67.019a5.095 5.095 0 1 0 0-10.19 5.095 5.095 0 0 0 0 10.19Z"
    />
    <Path
      fill="#79A3C6"
      fillRule="evenodd"
      d="m34.404 20.663 1.686 28.57a2.066 2.066 0 0 0 2.06 1.941h4.699a2.063 2.063 0 0 0 2.06-1.94l1.685-28.57a2.065 2.065 0 0 0-2.06-2.185h-8.07c-1.188 0-2.13 1-2.06 2.184Zm-1.172.069a3.238 3.238 0 0 1 3.232-3.427h8.07a3.239 3.239 0 0 1 3.233 3.427l-1.686 28.57a3.237 3.237 0 0 1-3.233 3.046H38.15a3.24 3.24 0 0 1-3.232-3.045l-1.686-28.571ZM40.791 57.416a4.508 4.508 0 1 0 0 9.016 4.508 4.508 0 0 0 0-9.016Zm-5.682 4.508a5.682 5.682 0 1 1 11.365 0 5.682 5.682 0 0 1-11.365 0Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={34.036}
        x2={46.053}
        y1={-1.694}
        y2={75.829}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#18A6FF" />
        <Stop offset={1} stopColor="#6E4BFF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={40.397}
        x2={40.606}
        y1={8.283}
        y2={63.418}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.04} stopColor="#92C3E5" />
        <Stop offset={0.98} stopColor="#92C3E5" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={40.328}
        x2={42.068}
        y1={17.141}
        y2={51.56}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.09} stopColor="#FFFFFD" />
        <Stop offset={0.98} stopColor="#E1E9FD" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={40.527}
        x2={41.046}
        y1={56.671}
        y2={66.939}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.09} stopColor="#FFFFFD" />
        <Stop offset={0.98} stopColor="#E1E9FD" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default IcKycNotAvailable;
