import * as React from 'react';

import Svg, {Rect, Path, SvgProps} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Rect
      width={32}
      height={32}
      fill={props.fill || '#F2F2F4'}
      fillOpacity={0.11}
      rx={16}
    />
    <Path
      fill={props.fill || '#F2F2F4'}
      d="M9.905 22.096v-8.382h3.047v8.382H9.905Zm4.571 0v-7.62l3.048 3.048v4.572h-3.048Zm3.048-6.743-3.048-3.048v-2.4h3.048v5.448Zm4.571 4.571-3.047-3.048v-.114h3.047v3.162Zm-.171 4.172-14.02-14.02 1.087-1.085L23.009 23.01l-1.085 1.085Z"
    />
  </Svg>
);

export default React.memo(SvgComponent);
