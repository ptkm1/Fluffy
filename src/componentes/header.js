import React from 'react';
import { Animated, Dimensions } from 'react-native'
// também os componentes SVG que vamos utilizar da lib react-native-svg
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const screenWidth = Dimensions.get('window').width;
const height = (32 * screenWidth) / 64;

const AnimatedHeader = ({children}) => {
  return (
    <Svg
      height={height}
      viewBox="0 0 64 32"
    >
      <Defs>
        <LinearGradient id="gradient" x1="0" y1="0" x2="64" y2="0">
          <Stop offset="0" stopColor="#CBA668" stopOpacity="1" />
          <Stop offset="1" stopColor="#DDBD80" stopOpacity="1" />
        </LinearGradient>
      </Defs>

      <AnimatedPath fill="url(#gradient)" d="M0 0 L64 0 L64 22 C48 32 16 32 0 22 Z" />
      {children}

    </Svg>
  );
};

export default AnimatedHeader;
