import * as React from 'react';

import Svg, {G, Mask, Path, SvgProps} from 'react-native-svg';

const IcRounded_chevron_down = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Mask id="a" width={16} height={16} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#D9D9D9" d="M0 0h16v16H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill={props?.fill || '#A8A9B9'}
        d="m7.425 9.067 2.6-2.6a.632.632 0 0 1 .466-.184c.19 0 .345.061.467.184a.632.632 0 0 1 .183.466.632.632 0 0 1-.183.467l-3.067 3.067a.64.64 0 0 1-.466.2.64.64 0 0 1-.467-.2L3.891 7.4a.632.632 0 0 1-.183-.467c0-.189.061-.344.183-.466a.632.632 0 0 1 .467-.184c.189 0 .344.061.467.184l2.6 2.6Z"
      />
    </G>
  </Svg>
);

export default React.memo(IcRounded_chevron_down);
