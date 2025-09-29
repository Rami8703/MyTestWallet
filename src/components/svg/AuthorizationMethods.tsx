import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M3.33 8.33C3.33 5.19 3.33 3.62 4.31 2.64C5.29 1.66 6.86 1.66 10 1.66C13.14 1.66 14.71 1.66 15.69 2.64C16.67 3.62 16.67 5.19 16.67 8.33V11.67C16.67 14.81 16.67 16.38 15.69 17.36C14.71 18.34 13.14 18.34 10 18.34C6.86 18.34 5.29 18.34 4.31 17.36C3.33 16.38 3.33 14.81 3.33 11.67V8.33Z"
      stroke={props.stroke}
      strokeWidth="1.25"
    />
    <Path
      d="M12.5 15.83H7.5"
      stroke={props.stroke}
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <Path
      d="M13.957 1.981L13.887 2.086C13.257 3.031 12.941 3.504 12.481 3.79C12.39 3.841 12.295 3.886 12.196 3.924C11.707 4.17 11.136 4.17 10 4.17C8.864 4.17 8.293 4.17 7.804 3.924C7.705 3.886 7.61 3.841 7.519 3.79C7.059 3.504 6.743 3.031 6.113 2.086L6.043 1.981"
      stroke={props.stroke}
      strokeWidth="1.25"
      strokeLinecap="round"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
