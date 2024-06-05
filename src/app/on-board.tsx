import { Stack } from 'expo-router';
import { View } from 'react-native';
import { Text } from '~/components/nativewindui/Text';

export default function OnBoard() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text
        style={{ fontFamily: 'InterBold' }}
        allowFontScaling={false}
        className="text-[45px] text-blue-600">
        100xdevs
      </Text>
    </View>
  );
}
