import { Pressable, Text, View } from 'react-native';
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeOutLeft,
  FadeOutRight,
} from 'react-native-reanimated';

export const OnBoardFooter = ({
  lastPage,
  handleSkip,
}: {
  lastPage: boolean;
  handleSkip: () => void;
}) => {
  return (
    <View>
      {!lastPage && (
        <AnimatedBtn
          entering={FadeInLeft.duration(150)}
          exiting={FadeOutLeft.duration(150)}
          className="self-start justify-self-end px-10 pb-14"
          onPress={handleSkip}>
          <Text className="text-slate-600">Skip</Text>
        </AnimatedBtn>
      )}
      {lastPage && (
        <AnimatedBtn
          entering={FadeInRight.duration(150)}
          exiting={FadeOutRight.duration(150)}
          className="self-end justify-self-end px-10 pb-14"
          onPress={handleSkip}>
          <Animated.Text className="text-slate-600">Sign In</Animated.Text>
        </AnimatedBtn>
      )}
    </View>
  );
};

const AnimatedBtn = Animated.createAnimatedComponent(Pressable);
