import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M9.87031 5.66998L6.45031 7.74999L4.89031 5.19C4.32031 4.25 4.62031 3.01 5.56031 2.44C6.50031 1.87 7.74031 2.16998 8.31031 3.10998L9.87031 5.66998Z"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.8191 9.15997L8.65914 11.08C6.81914 12.2 6.25913 14.46 7.14913 16.26L9.19913 20.44C9.85913 21.79 11.4591 22.26 12.7391 21.47L19.1691 17.56C20.4591 16.78 20.7691 15.15 19.8791 13.94L17.1091 10.2C15.9091 8.58001 13.6591 8.03997 11.8191 9.15997Z"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.7574 5.09791L5.63281 8.21851L7.71321 11.6349L12.8378 8.51431L10.7574 5.09791Z"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.3086 16.8101L15.9586 19.5201"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.75 18.37L13.4 21.08"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.8711 15.25L18.5211 17.96"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
