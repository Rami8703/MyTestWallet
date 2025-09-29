import * as React from 'react';

import Svg, {Path, SvgProps} from 'react-native-svg';

const IcCheckboxFilled = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill={props.fill || '#B294FF'}
      fillRule="evenodd"
      d="M5.667 1.667a4 4 0 0 0-4 4v8.666a4 4 0 0 0 4 4h8.666a4 4 0 0 0 4-4V5.667a4 4 0 0 0-4-4H5.667Zm.166 8.61 2.778 2.778L14.166 7.5l-.972-.972-4.583 4.583-1.806-1.806-.972.973Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default React.memo(IcCheckboxFilled);
