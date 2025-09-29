import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const IcRoundedAddressBook = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={props.stroke || '#B294FF'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 16h6m4-10v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"
    />
    <Path
      stroke={props.stroke || '#B294FF'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 8h3m-3 4h3m-3 4h3m4-5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
    />
  </Svg>
);
export default IcRoundedAddressBook;
