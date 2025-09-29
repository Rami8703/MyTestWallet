import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const IcMemo = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      stroke="#A8A9B9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.333 2v2.667a.667.667 0 0 0 .667.666h2.667"
    />
    <Path
      stroke="#A8A9B9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.333 14H4.667a1.333 1.333 0 0 1-1.334-1.333V3.333A1.333 1.333 0 0 1 4.667 2h4.666l3.334 3.333v7.334A1.334 1.334 0 0 1 11.333 14Z"
    />
    <Path
      stroke="#A8A9B9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.667 12 10 8.667a.943.943 0 0 0-1.333-1.334l-3.334 3.334V12h1.334Z"
    />
  </Svg>
);
export default IcMemo;
