import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IcBankCard = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      fill={props.color || '#F2F2F4'}
      d="M22.75 6v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20.75 20h-16c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2.75 18V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4.75 4h16c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412Zm-18 2h16V6h-16v2Zm0 4v6h16v-6h-16Z"
    />
  </Svg>
);
export default IcBankCard;
