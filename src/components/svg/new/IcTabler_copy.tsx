import * as React from 'react';

import Svg, {Path, SvgProps} from 'react-native-svg';

const IcTabler_copy = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M5.833 8.056a2.222 2.222 0 0 1 2.223-2.223h7.222A2.223 2.223 0 0 1 17.5 8.056v7.222a2.223 2.223 0 0 1-2.222 2.222H8.056a2.222 2.222 0 0 1-2.222-2.223V8.056Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M3.343 13.947A1.667 1.667 0 0 1 2.5 12.5V4.167c0-.917.75-1.667 1.667-1.667H12.5c.625 0 .965.32 1.25.833"
    />
  </Svg>
);

export default React.memo(IcTabler_copy);
