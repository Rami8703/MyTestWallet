import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width="27" height="28" viewBox="0 0 27 20" fill="none">
    <G filter="url(#filter0_d_0_7865)">
      <Path
        d="M5.08301 11.0331V9.59147C5.08301 7.86647 6.49134 6.45813 8.21634 6.45813H17.783C19.508 6.45813 20.9163 7.86647 20.9163 9.59147V10.7915H19.233C18.7663 10.7915 18.3413 10.9748 18.033 11.2915C17.683 11.6331 17.483 12.1248 17.533 12.6498C17.608 13.5498 18.433 14.2081 19.333 14.2081H20.9163V15.1998C20.9163 16.9248 19.508 18.3331 17.783 18.3331H13.2163"
        stroke={props.stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.08301 10.3415V6.53324C5.08301 5.54157 5.69134 4.6582 6.61634 4.3082L13.233 1.8082C14.2663 1.41653 15.3747 2.18322 15.3747 3.29156V6.45821"
        stroke={props.stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.7987 11.6419V13.3586C21.7987 13.8169 21.432 14.1919 20.9653 14.2086H19.332C18.432 14.2086 17.607 13.5502 17.532 12.6502C17.482 12.1252 17.682 11.6336 18.032 11.2919C18.3403 10.9752 18.7653 10.7919 19.232 10.7919H20.9653C21.432 10.8086 21.7987 11.1836 21.7987 11.6419Z"
        stroke={props.stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.83301 10H14.6663"
        stroke={props.stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 13.7501H9.95C10.4833 13.7501 10.9167 14.1834 10.9167 14.7167V15.7834"
        stroke={props.stroke}
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.51667 12.7335L5.5 13.7501L6.51667 14.7667"
        stroke={props.stroke}
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.9167 18.1502H6.46667C5.93334 18.1502 5.5 17.7169 5.5 17.1835V16.1169"
        stroke={props.stroke}
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.90137 19.1672L10.918 18.1505L9.90137 17.1339"
        stroke={props.stroke}
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
