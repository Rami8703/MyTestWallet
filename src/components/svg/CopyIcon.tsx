import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={props.width || 20}
    height={props.height || 20}
    viewBox="0 0 20 20"
    fill="none"
  >
    <Path
      stroke="#718096"
      strokeWidth={1.5}
      d="M5 9.166C5 6.81 5 5.631 5.732 4.9c.732-.732 1.911-.732 4.268-.732h2.5c2.357 0 3.535 0 4.268.732.732.732.732 1.91.732 4.267v4.167c0 2.357 0 3.536-.732 4.268-.733.732-1.911.732-4.268.732H10c-2.357 0-3.536 0-4.268-.732C5 16.869 5 15.69 5 13.333V9.166Z"
    />
    <Path
      stroke="#718096"
      strokeWidth={1.5}
      d="M5 15.833a2.5 2.5 0 0 1-2.5-2.5v-5c0-3.143 0-4.714.976-5.69.977-.976 2.548-.976 5.69-.976H12.5a2.5 2.5 0 0 1 2.5 2.5"
    />
  </Svg>
);

const Memo = React.memo(SvgComponent);

export default Memo;
