import * as React from 'react';
import Svg, {SvgProps, Mask, Path, G} from 'react-native-svg';

const IcRoundedMemo = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Mask id="a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#A8A9B9"
        d="M9.333 14.667v-2.05l3.684-3.667c.1-.1.21-.172.333-.217.122-.044.245-.066.367-.066a1.003 1.003 0 0 1 .716.3l.617.616c.089.1.158.211.208.334.05.122.075.244.075.366 0 .123-.022.248-.066.375a.894.894 0 0 1-.217.342l-3.667 3.667h-2.05Zm1-1h.634l2.016-2.034-.3-.316-.316-.3-2.034 2.016v.634Zm-6.333 1c-.367 0-.68-.131-.942-.392a1.284 1.284 0 0 1-.391-.942V2.667c0-.367.13-.681.391-.942.262-.261.575-.392.942-.392h5.333l4 4v2H12V6H8.667V2.667H4v10.666h4v1.334H4Zm8.683-3.35-.316-.3.616.616-.3-.316Z"
      />
    </G>
  </Svg>
);
export default IcRoundedMemo;
