import * as React from 'react';

import Svg, {Path, SvgProps} from 'react-native-svg';

const IcCheckbox = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill={props.fill || '#A8A9B9'}
      fillRule="evenodd"
      d="M15 2.917H5c-1.15 0-2.083.932-2.083 2.083v10c0 1.15.932 2.083 2.083 2.083h10c1.15 0 2.083-.932 2.083-2.083V5c0-1.15-.933-2.083-2.083-2.083ZM5 1.667A3.333 3.333 0 0 0 1.667 5v10A3.333 3.333 0 0 0 5 18.333h10A3.333 3.333 0 0 0 18.333 15V5A3.333 3.333 0 0 0 15 1.667H5Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default React.memo(IcCheckbox);
