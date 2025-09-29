import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M2.5 8.68C2.5 6.0159 2.5 4.68357 2.8146 4.23534C3.12921 3.78712 4.38194 3.3583 6.88742 2.50066L7.36477 2.33727C8.67083 1.8902 9.32392 1.66667 10 1.66667C10.6761 1.66667 11.3292 1.8902 12.6352 2.33727L13.1126 2.50066C15.6181 3.3583 16.8708 3.78712 17.1854 4.23534C17.5 4.68357 17.5 6.0159 17.5 8.68C17.5 9.0829 17.5 9.5195 17.5 9.993C17.5 14.6912 13.9675 16.9712 12.093 17.9394C11.4833 18.1844 11.1828 18.3333 10 18.3333C8.81718 18.3333 8.51668 18.1844 7.90702 17.9394C6.03251 16.9712 2.5 14.6912 2.5 9.993C2.5 9.5195 2.5 9.0829 2.5 8.68Z"
      stroke={props.stroke}
      strokeWidth="1.25"
    />
    <Path
      d="M7.91667 10.3333L9.10717 11.6667L12.0833 8.33333"
      stroke={props.stroke}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
