import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M11.9984 14.8C11.7984 14.8 11.5984 14.7 11.4984 14.6L7.49844 10.6C7.19844 10.3 7.19844 9.80002 7.49844 9.50002C7.79844 9.20002 8.29844 9.20002 8.59844 9.50002L12.0984 13L15.5984 9.50002C15.8984 9.20002 16.3984 9.20002 16.6984 9.50002C16.9984 9.80002 16.9984 10.3 16.6984 10.6L12.6984 14.6C12.3984 14.7 12.1984 14.8 11.9984 14.8Z"
      fill={props.fill}
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
