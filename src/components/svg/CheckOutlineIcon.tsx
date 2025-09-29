import * as React from 'react';

import Svg, { SvgProps, Path, G } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={props.width || 20}
    height={props.height || 20}
    viewBox="0 0 20 20"
    fill="none"
  >
    <G fill="#0B6EF9">
      <Path d="M13.358 8.359a.625.625 0 0 0-.884-.884L8.75 11.199 7.525 9.975a.625.625 0 0 0-.884.884l1.666 1.666c.244.244.64.244.884 0l4.167-4.166Z" />
      <Path
        fillRule="evenodd"
        d="M10 1.042a8.958 8.958 0 1 0 0 17.916 8.958 8.958 0 0 0 0-17.916ZM2.29 10a7.708 7.708 0 1 1 15.417 0A7.708 7.708 0 0 1 2.29 10Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);

const Memo = React.memo(SvgComponent);

export default Memo;
