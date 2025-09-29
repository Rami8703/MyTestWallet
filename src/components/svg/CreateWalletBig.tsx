import * as React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width="142" height="142" viewBox="0 0 34 44.6" fill="none">
    <Rect width="48" height="48" rx="24" fill={props.stroke} />
    <Rect width="48" height="48" rx="24" fill={props.stroke} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 37.3333C31.3638 37.3333 37.3334 31.3638 37.3334 24C37.3334 16.6362 31.3638 10.6666 24 10.6666C16.6362 10.6666 10.6667 16.6362 10.6667 24C10.6667 31.3638 16.6362 37.3333 24 37.3333ZM25 20C25 19.4477 24.5523 19 24 19C23.4477 19 23 19.4477 23 20L23 23H20C19.4477 23 19 23.4477 19 24C19 24.5523 19.4477 25 20 25H23V28C23 28.5522 23.4477 29 24 29C24.5523 29 25 28.5522 25 28L25 25H28C28.5523 25 29 24.5523 29 24C29 23.4477 28.5523 23 28 23H25V20Z"
      fill={props.fill}
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
