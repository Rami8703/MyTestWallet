import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
	<Svg
		viewBox="0 0 25 24"
		width={25}
		height={24}
		fill="none"
	>
		<Path
			stroke={props.stroke || '#fff'}
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M12.5 22c4.117 0 7.5-3.263 7.5-7.451 0-1.028-.052-2.13-.622-3.843s-.685-1.934-1.288-2.992c-.257 2.159-1.634 3.059-1.985 3.327 0-.28-.832-3.373-2.096-5.225C12.769 4 11.081 2.81 10.092 2c0 1.535-.431 3.817-1.05 4.98-.617 1.162-.733 1.205-1.506 2.07-.772.865-1.126 1.132-1.772 2.182C5.116 12.283 5 13.681 5 14.71 5 18.897 8.383 22 12.5 22Z"
		/>
	</Svg>
);

const Memo = React.memo(SvgComponent);

export default Memo;
