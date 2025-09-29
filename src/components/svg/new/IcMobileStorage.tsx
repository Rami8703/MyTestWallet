import * as React from 'react';

import Svg, {
  G,
  Mask,
  Path,
  SvgProps,
  Circle,
  Defs,
  ClipPath,
} from 'react-native-svg';

const IcMobileStorage = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Circle cx={16} cy={16} r={16} fill="#8D6DF8" />
      <Mask
        id="b"
        width={24}
        height={24}
        x={4}
        y={4}
        maskUnits="userSpaceOnUse">
        <Path fill="#D9D9D9" d="M4 4h24v24H4z" />
      </Mask>
      <G mask="url(#b)">
        <Path
          fill="#fff"
          d="M13 13a.968.968 0 0 1-.713-.287A.968.968 0 0 1 12 12c0-.283.096-.52.287-.713A.968.968 0 0 1 13 11h6c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.713A.968.968 0 0 1 19 13h-6Zm-2 14c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 9 25V7c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 11 5h10c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v18c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 21 27H11Zm0-3v1h10v-1H11Zm0-2h10V10H11v12Zm0-14h10V7H11v1Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default React.memo(IcMobileStorage);
