import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

const IcTelegram = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    <G clipPath="url(#a)">
      <G clipPath="url(#b)">
        <Path
          fill="url(#c)"
          d="M28 14c0 7.735-6.265 14-14 14S0 21.735 0 14 6.265 0 14 0s14 6.265 14 14Z"
        />
        <Path
          fill="#C8DAEA"
          d="M11.433 20.417c-.455 0-.373-.175-.536-.607l-1.33-4.387 8.26-5.156.968.256-.805 2.194-6.557 7.7Z"
        />
        <Path
          fill="#A9C9DD"
          d="M11.433 20.417c.35 0 .502-.163.7-.35.304-.292 4.2-4.083 4.2-4.083l-2.391-.584-2.217 1.4-.292 3.5v.117Z"
        />
        <Path
          fill="url(#d)"
          d="m11.667 16.847 5.646 4.165c.642.35 1.109.175 1.272-.595L20.883 9.59c.234-.945-.361-1.365-.98-1.085L6.417 13.71c-.922.373-.91.886-.164 1.108l3.465 1.085 8.015-5.052c.374-.233.724-.105.444.152l-6.51 5.845Z"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={18.103}
        x2={11.103}
        y1={4.425}
        y2={20.758}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#37AEE2" />
        <Stop offset={1} stopColor="#1E96C8" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={15.049}
        x2={17.965}
        y1={14.438}
        y2={19.105}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#EFF7FC" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h28v28H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M0 0h28v28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default IcTelegram;
