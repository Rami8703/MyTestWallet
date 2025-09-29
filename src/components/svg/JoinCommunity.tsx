import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={props.stroke} strokeWidth="1.5" />
    <Path
      d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
