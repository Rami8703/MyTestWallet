import * as React from 'react';

import Svg, { SvgProps, Rect } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    viewBox="0 0 32 4"
    width={props.width || 32}
    height={props.height || 4}
    fill="none"
  >
    <Rect width={32} height={4} x={0.5} fill={props.fill || '#CBD1D9'} rx={2} />
  </Svg>
);

const Memo = React.memo(SvgComponent);

export default Memo;
