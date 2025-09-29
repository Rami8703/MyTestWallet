import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const IcVector = (props: SvgProps) => (
  <Svg width={12} height={14} fill="none" {...props}>
    <Path
      stroke={props.color || '#B294FF'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M6 1.167v11.666M6 1.167l5 5m-5-5-5 5"
    />
  </Svg>
);
export default IcVector;
