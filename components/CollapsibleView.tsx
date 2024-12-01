import React, { useState, useRef, useEffect } from 'react';
import { View, Animated } from 'react-native';

interface CollapsibleViewProps {
  children: React.ReactNode;
  isExpanded: boolean;
}

const CollapsibleView: React.FC<CollapsibleViewProps> = ({ children, isExpanded }) => {
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (contentHeight !== null) {
      Animated.timing(animationValue, {
        toValue: isExpanded ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [contentHeight, isExpanded]);

  const handleContentLayout = async (event: { nativeEvent: { layout: { height: number } } }) => {
    if (event.nativeEvent.layout.height === 0) return;
    if (contentHeight === null) {
      const _height = event.nativeEvent.layout.height;
      setTimeout(() => {
        setContentHeight(_height);
      }, 310);
    }
  };

  const heightInterpolate = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight || 0],
  });

  return (
    <View>
      <Animated.View
        style={{ height: contentHeight === null ? null : heightInterpolate, overflow: 'hidden' }}
      >
        <View style={{ opacity: contentHeight === null ? 0 : 1 }} onLayout={handleContentLayout}>
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

export default CollapsibleView;
