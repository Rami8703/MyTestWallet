import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';

const IcHistorySmallDeposit = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Rect width={20} height={20} fill={props.fill || '#25252F'} rx={10} />
    <Path
      stroke={props.color || '#B294FF'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M10 13.5v-7m0 0-3 3m3-3 3 3"
    />
  </Svg>
);
export default IcHistorySmallDeposit;
