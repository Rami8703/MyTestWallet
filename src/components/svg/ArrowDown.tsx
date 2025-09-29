import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={props.width || 16} height={props.height || 16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M8.00156 9.86668C7.86823 9.86668 7.7349 9.80002 7.66823 9.73335L5.00156 7.06668C4.80156 6.86668 4.80156 6.53335 5.00156 6.33335C5.20156 6.13335 5.5349 6.13335 5.7349 6.33335L8.06823 8.66668L10.4016 6.33335C10.6016 6.13335 10.9349 6.13335 11.1349 6.33335C11.3349 6.53335 11.3349 6.86668 11.1349 7.06668L8.46823 9.73335C8.26823 9.80002 8.1349 9.86668 8.00156 9.86668Z"
      fill={props.fill}
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
