import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const IcPurchased = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#B294FF"
      d="M18.333 5v10c0 .459-.163.85-.49 1.177-.326.327-.718.49-1.177.49H3.333c-.458 0-.85-.163-1.177-.49A1.605 1.605 0 0 1 1.666 15V5c0-.458.164-.85.49-1.177.326-.326.719-.49 1.177-.49h13.334c.458 0 .85.164 1.177.49.326.326.49.719.49 1.177Zm-15 1.667h13.333V5H3.333v1.667Zm0 3.333v5h13.334v-5H3.332Z"
    />
  </Svg>
);
export default IcPurchased;
