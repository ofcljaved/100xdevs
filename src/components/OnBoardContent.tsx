import { Text, View, useWindowDimensions } from 'react-native';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
interface OnBoardContentProps {
  x: SharedValue<number>;
  index: number;
  data: any;
}

export const OnBoardContent: React.FC<OnBoardContentProps> = ({ data, index, x }) => {
  const { width, height } = useWindowDimensions();
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [(index - 0.25) * width, index * width, (index + 0.25) * width];
    const scale = interpolate(x.value, inputRange, [0.85, 1, 0.85], Extrapolation.CLAMP);
    return {
      transform: [{ scale }],
    };
  });
  return (
    <View
      className="flex-1 items-center justify-center gap-20"
      key={index}
      style={{ width, height }}>
      <Animated.Image source={data.source} style={animatedStyle} />
      <Animated.View className="items-center gap-2 px-10" style={animatedStyle}>
        <Text className="text-lg font-semibold text-slate-600">{data.title}</Text>
        <Text className="px-10 text-center text-slate-500">{data.description}</Text>
      </Animated.View>
    </View>
  );
};
