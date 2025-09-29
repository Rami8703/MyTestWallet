import * as React from 'react';
import Svg, {SvgProps, Mask, Path, G} from 'react-native-svg';
const IcContactPage = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill={props.fill || '#B294FF'}
        d="M12 14c.55 0 1.02-.196 1.412-.588.392-.391.588-.862.588-1.412 0-.55-.196-1.02-.588-1.412A1.926 1.926 0 0 0 12 10c-.55 0-1.02.196-1.412.588A1.926 1.926 0 0 0 10 12c0 .55.196 1.02.588 1.412.391.392.862.588 1.412.588Zm-4 4h8v-.575a1.993 1.993 0 0 0-1.225-1.85 7.566 7.566 0 0 0-1.338-.425C12.98 15.05 12.5 15 12 15s-.98.05-1.438.15c-.458.1-.904.242-1.337.425A1.993 1.993 0 0 0 8 17.425V18Zm10 4H6c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 20V4c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 6 2h7.175a1.975 1.975 0 0 1 1.4.575l4.85 4.85a1.975 1.975 0 0 1 .575 1.4V20c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 22Zm0-2V8.85L13.15 4H6v16h12Z"
      />
    </G>
  </Svg>
);
export default IcContactPage;
