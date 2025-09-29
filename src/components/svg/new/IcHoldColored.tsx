import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const IcHoldColored = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Z"
    />
    <Path
      fill="url(#b)"
      d="M16 29.565c7.492 0 13.565-6.074 13.565-13.565 0-7.492-6.073-13.565-13.565-13.565C8.508 2.435 2.435 8.508 2.435 16c0 7.491 6.073 13.565 13.565 13.565Z"
    />
    <Path
      fill="url(#c)"
      d="M16 28.193c6.734 0 12.193-5.459 12.193-12.193S22.733 3.806 15.999 3.806C9.265 3.806 3.806 9.266 3.806 16c0 6.734 5.46 12.193 12.193 12.193Z"
    />
    <Path
      fill="#fff"
      d="m17.511 14.774-1.503-1.556 3.66-3.648h-7.585a.845.845 0 0 0-.632.283l-3.918 4.39a.848.848 0 0 0 .034 1.165l5.852 5.82 6.592-6.563a.848.848 0 0 0-1.123-1.264.839.839 0 0 0-.073.065l-.063.062m-9.437 2.35v-.062h.006l-.006.062Zm4.103 2.961-4.087-4.065 3.13-3.509h3.106l-3.644 3.631a.823.823 0 0 0-.242.499.872.872 0 0 0 .09.494.9.9 0 0 0 .179.233.83.83 0 0 0 .537.22l.033.001a.835.835 0 0 0 .505-.167.885.885 0 0 0 .089-.077l1.344-1.324 1.458 1.557-2.5 2.509.002-.002Z"
    />
    <Path
      fill="#fff"
      d="m24.482 14.258-3.742-4.39a.847.847 0 0 0-.645-.297h-.1l-1.693 1.693h1.402l2.98 3.496L16 21.406l-1.216-1.21-1.198 1.198 1.817 1.807a.844.844 0 0 0 1.195 0l7.837-7.793a.847.847 0 0 0 .047-1.15Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={16.001}
        x2={16.001}
        y1={2}
        y2={30.001}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#245BFB" />
        <Stop offset={0.25} stopColor="#3FA9F5" />
        <Stop offset={0.5} stopColor="#A2CCED" />
        <Stop offset={0.75} stopColor="#3FA9F5" />
        <Stop offset={1} stopColor="#2457FB" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={29.565}
        x2={2.435}
        y1={16}
        y2={16}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#3FA9F5" />
        <Stop offset={0.5} stopColor="#245CFB" />
        <Stop offset={1} stopColor="#6FB8F5" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={3.806}
        x2={28.194}
        y1={16}
        y2={16}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#23A0FA" />
        <Stop offset={1} stopColor="#244BFB" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default IcHoldColored;
