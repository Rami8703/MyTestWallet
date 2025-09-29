import * as React from 'react';

import Svg, {Path, SvgProps} from 'react-native-svg';

const IcChevronRight = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fill={props.fill || '#E3E3E3'}
      d="M12.6 12 8 7.4 9.4 6l6 6-6 6L8 16.6l4.6-4.6Z"
    />
  </Svg>
);

export default React.memo(IcChevronRight);
