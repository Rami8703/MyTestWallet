import * as React from 'react';

import Svg, {Rect, Path, SvgProps, Mask, G} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Rect
      width={32}
      height={32}
      fill={props.fill || '#F2F2F4'}
      fillOpacity={0.11}
      rx={16}
    />
    <Mask id="a" width={24} height={24} x={7} y={7} maskUnits="userSpaceOnUse">
      <Path fill="#D9D9D9" d="M7 7h24v24H7z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill={props.fill || '#F2F2F4'}
        d="M19.75 22a.726.726 0 0 1-.534-.216.726.726 0 0 1-.216-.534V17.5c0-.212.072-.39.216-.534a.726.726 0 0 1 .534-.216h1.5c.212 0 .39.072.534.216A.726.726 0 0 1 22 17.5v3.75c0 .212-.072.39-.216.534a.726.726 0 0 1-.534.216h-1.5Zm-4.5 0a.726.726 0 0 1-.534-.216.726.726 0 0 1-.216-.534v-10.5c0-.213.072-.39.216-.534A.726.726 0 0 1 15.25 10h1.5c.212 0 .39.072.534.216a.726.726 0 0 1 .216.534v10.5c0 .212-.072.39-.216.534a.726.726 0 0 1-.534.216h-1.5Zm-4.5 0a.726.726 0 0 1-.534-.216.726.726 0 0 1-.216-.534V14.5c0-.213.072-.39.216-.534a.726.726 0 0 1 .534-.216h1.5c.213 0 .39.072.534.216A.726.726 0 0 1 13 14.5v6.75c0 .212-.072.39-.216.534a.726.726 0 0 1-.534.216h-1.5Z"
      />
    </G>
  </Svg>
);

export default React.memo(SvgComponent);
