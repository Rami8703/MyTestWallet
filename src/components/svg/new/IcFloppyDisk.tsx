import * as React from 'react';

import Svg, {Path, SvgProps} from 'react-native-svg';

const IcFloppyDisk = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.fill || '#F2F2F4'}
      d="M21 7v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 21H5c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h12l4 4Zm-2 .85L16.15 5H5v14h14V7.85ZM12 18c.833 0 1.542-.292 2.125-.875A2.893 2.893 0 0 0 15 15c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 12 12c-.833 0-1.542.292-2.125.875A2.893 2.893 0 0 0 9 15c0 .833.292 1.542.875 2.125A2.893 2.893 0 0 0 12 18Zm-6-8h9V6H6v4ZM5 7.85V19 5v2.85Z"
    />
  </Svg>
);

export default React.memo(IcFloppyDisk);
