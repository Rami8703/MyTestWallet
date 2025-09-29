import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Path
      d="M10.3431 10.3431L21.6568 21.6568"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.3432 21.6568L21.6569 10.3431"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
