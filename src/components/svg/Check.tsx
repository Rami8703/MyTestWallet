import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G id="material-symbols:check">
      <Path
        id="Vector"
        d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z"
        fill={props.fill}
      />
    </G>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
