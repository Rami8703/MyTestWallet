import * as React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <Rect width="48" height="48" rx="24" fill={props.fill} />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M28.7071 21.9596C28.3166 21.5691 27.6834 21.5691 27.2929 21.9596L25 24.2525V13.3334C25 12.7811 24.5523 12.3334 24 12.3334C23.4477 12.3334 23 12.7811 23 13.3334L23 24.2525L20.7071 21.9596C20.3166 21.5691 19.6834 21.5691 19.2929 21.9596C18.9023 22.3501 18.9023 22.9833 19.2929 23.3738L23.2929 27.3738C23.6834 27.7643 24.3166 27.7643 24.7071 27.3738L28.7071 23.3738C29.0976 22.9833 29.0976 22.3501 28.7071 21.9596Z"
      fill={props.stroke}
    />
    <Path
      d="M31.6634 24C31.0661 24 30.5436 24.3657 30.1213 24.788L26.1213 28.788C24.9497 29.9596 23.0502 29.9596 21.8787 28.788L17.8787 24.788C17.4563 24.3657 16.9339 24 16.3366 24H13.3333C13.3333 29.8911 18.1089 34.6667 24 34.6667C29.891 34.6667 34.6666 29.8911 34.6666 24H31.6634Z"
      fill={props.stroke}
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
