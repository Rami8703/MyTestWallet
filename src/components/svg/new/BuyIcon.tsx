import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M22.75 6V18C22.75 18.55 22.5542 19.0208 22.1625 19.4125C21.7708 19.8042 21.3 20 20.75 20H4.75C4.2 20 3.72917 19.8042 3.3375 19.4125C2.94583 19.0208 2.75 18.55 2.75 18V6C2.75 5.45 2.94583 4.97917 3.3375 4.5875C3.72917 4.19583 4.2 4 4.75 4H20.75C21.3 4 21.7708 4.19583 22.1625 4.5875C22.5542 4.97917 22.75 5.45 22.75 6ZM4.75 8H20.75V6H4.75V8ZM4.75 12V18H20.75V12H4.75Z"
      fill={props.fill || '#F2F2F4'}
    />
  </Svg>
);

export default React.memo(SvgComponent);
