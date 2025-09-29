import * as React from 'react';

import Svg, {Path, SvgProps} from 'react-native-svg';

const IcCheck = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={props.stroke || '#B294FF'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5 12 5 5L20 7"
    />
  </Svg>
);

export default React.memo(IcCheck);
