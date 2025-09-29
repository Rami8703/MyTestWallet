import * as React from 'react';

import Svg, {Path, SvgProps} from 'react-native-svg';

const IcTabler_Exclamation_Circle = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none">
    <Path
      stroke={props.fill || '#A8A9B9'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9v4m0 3v.01M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12Z"
    />
  </Svg>
);

export default React.memo(IcTabler_Exclamation_Circle);
