import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      d="M4 6.66669H6.66667"
      stroke={props.stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.8889 7.33331H12.1538C10.9643 7.33331 10 8.22874 10 9.33331C10 10.4379 10.9643 11.3333 12.1538 11.3333H13.8889C13.9444 11.3333 13.9722 11.3333 13.9957 11.3319C14.3552 11.31 14.6416 11.0441 14.6651 10.7102C14.6667 10.6885 14.6667 10.6627 14.6667 10.6111V8.05554C14.6667 8.00395 14.6667 7.97816 14.6651 7.95638C14.6416 7.62254 14.3552 7.35662 13.9957 7.33474C13.9722 7.33331 13.9444 7.33331 13.8889 7.33331Z"
      stroke={props.stroke}
      strokeWidth="1.2"
    />
    <Path
      d="M13.9769 7.33333C13.925 6.08513 13.7579 5.31983 13.2191 4.78105C12.4381 4 11.181 4 8.66683 4H6.66683C4.15267 4 2.89559 4 2.11454 4.78105C1.3335 5.5621 1.3335 6.81918 1.3335 9.33333C1.3335 11.8475 1.3335 13.1046 2.11454 13.8856C2.89559 14.6667 4.15267 14.6667 6.66683 14.6667H8.66683C11.181 14.6667 12.4381 14.6667 13.2191 13.8856C13.7579 13.3468 13.925 12.5815 13.9769 11.3333"
      stroke={props.stroke}
      strokeWidth="1.2"
    />
    <Path
      d="M4 4L6.49032 2.34876C7.19163 1.88375 8.14171 1.88375 8.84301 2.34876L11.3333 4"
      stroke={props.stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <Path
      d="M11.9942 9.33331H12.0002"
      stroke={props.stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
