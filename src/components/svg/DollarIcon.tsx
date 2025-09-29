import * as React from 'react';

import Svg, { SvgProps, Path, G, Defs, LinearGradient, Stop, ClipPath } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
	<Svg
		viewBox="0 0 60 61"
		width={61}
		height={60}
		fill="none"
	>
		<G clipPath="url(#a)">
			<Path
				fill="url(#b)"
				d="M28.25 17.542c-2.808.768-4.5 2.923-4.5 4.958s1.692 4.19 4.5 4.958v-9.916Z"
			/>
			<Path
				fill="url(#c)"
				d="M32.75 32.542v9.916c2.808-.768 4.5-2.923 4.5-4.958s-1.692-4.19-4.5-4.958Z"
			/>
			<Path
				fill="url(#d)"
				fillRule="evenodd"
				d="M60.5 30c0 16.569-13.431 30-30 30-16.569 0-30-13.431-30-30 0-16.569 13.431-30 30-30 16.569 0 30 13.431 30 30Zm-30-20.25A2.25 2.25 0 0 1 32.75 12v.95c4.891.876 9 4.55 9 9.55a2.25 2.25 0 0 1-4.5 0c0-2.035-1.692-4.19-4.5-4.958V27.95c4.891.876 9 4.55 9 9.55 0 5-4.109 8.674-9 9.55V48a2.25 2.25 0 0 1-4.5 0v-.95c-4.891-.876-9-4.55-9-9.55a2.25 2.25 0 0 1 4.5 0c0 2.035 1.692 4.19 4.5 4.958V32.05c-4.891-.876-9-4.55-9-9.55 0-5 4.109-8.674 9-9.55V12a2.25 2.25 0 0 1 2.25-2.25Z"
				clipRule="evenodd"
			/>
		</G>
		<Defs>
			<LinearGradient
				id="b"
				x1={60.484}
				x2={0.484}
				y1={60}
				y2={0}
				gradientUnits="userSpaceOnUse"
			>
				<Stop
					offset={0.156}
					stopColor="#6E4BFF"
				/>
				<Stop
					offset={1}
					stopColor="#18A6FF"
				/>
			</LinearGradient>
			<LinearGradient
				id="c"
				x1={60.484}
				x2={0.484}
				y1={60}
				y2={0}
				gradientUnits="userSpaceOnUse"
			>
				<Stop
					offset={0.156}
					stopColor="#6E4BFF"
				/>
				<Stop
					offset={1}
					stopColor="#18A6FF"
				/>
			</LinearGradient>
			<LinearGradient
				id="d"
				x1={60.484}
				x2={0.484}
				y1={60}
				y2={0}
				gradientUnits="userSpaceOnUse"
			>
				<Stop
					offset={0.156}
					stopColor="#6E4BFF"
				/>
				<Stop
					offset={1}
					stopColor="#18A6FF"
				/>
			</LinearGradient>
			<ClipPath id="a">
				<Path
					fill="#fff"
					d="M.5 0h60v60H.5z"
				/>
			</ClipPath>
		</Defs>
	</Svg>
);

const Memo = React.memo(SvgComponent);

export default Memo;
