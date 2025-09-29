import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M14.333 1.66699C16.5421 1.66699 18.333 3.45785 18.333 5.66699V14.333C18.333 16.5421 16.5421 18.333 14.333 18.333H5.66699C3.45785 18.333 1.66699 16.5421 1.66699 14.333V5.66699C1.66699 3.45785 3.45785 1.66699 5.66699 1.66699H14.333ZM8.61133 11.1104L6.80566 9.30566L5.83301 10.2773L8.61133 13.0557L14.167 7.5L13.1943 6.52734L8.61133 11.1104Z"
      fill="#B294FF"
    />
  </Svg>
);

export default React.memo(SvgComponent);
