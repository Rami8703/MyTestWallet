import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const IcTablerArrowsUpDown = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      stroke={props.fill || '#A8A9B9'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 3v18m0-18 3 3m-3-3-3 3m16 12-3 3m0 0-3-3m3 3V3"
    />
  </Svg>
);
export default IcTablerArrowsUpDown;
