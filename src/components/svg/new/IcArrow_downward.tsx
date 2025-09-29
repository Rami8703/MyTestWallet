import * as React from 'react';
import Svg, {SvgProps, Mask, Path, G} from 'react-native-svg';

const IcArrow_downward = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Mask id="a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#D9D9D9" d="M24 0v24H0V0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill={props.fill}
        d="M20 11H7.825l5.6-5.6L12 4l-8 8 8 8 1.425-1.4-5.6-5.6H20v-2Z"
      />
    </G>
  </Svg>
);
export default IcArrow_downward;
