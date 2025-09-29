import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SwappedHistoryIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill={props.fill}
      fillRule="evenodd"
      d="M8.886 2.898a.625.625 0 0 1-.013.884l-2.33 2.26H15a.625.625 0 1 1 0 1.25H6.542l2.33 2.26a.625.625 0 0 1-.87.897L4.565 7.116a.625.625 0 0 1 0-.898l3.437-3.333a.625.625 0 0 1 .884.013Zm2.228 6.667a.625.625 0 0 1 .884-.014l3.437 3.334a.625.625 0 0 1 0 .897l-3.437 3.334a.625.625 0 0 1-.87-.898l2.33-2.26H5a.625.625 0 1 1 0-1.25h8.458l-2.33-2.26a.625.625 0 0 1-.014-.883Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SwappedHistoryIcon;
