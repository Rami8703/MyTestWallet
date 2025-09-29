import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={props.stroke} stroke-width="1.5" />
    <Path
      d="M12 17V11"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <Circle
      cx="1"
      cy="1"
      r="1"
      transform="matrix(1 0 0 -1 11 9)"
      fill={props.stroke}
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
