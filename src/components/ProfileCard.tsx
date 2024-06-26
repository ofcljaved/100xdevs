import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { userAtom } from '~/store';

const image = { uri: 'https://picsum.photos/seed/picsum/300/200?grayscale&blur=2' };

export const ProfileCard = () => {
  const user = useRecoilValue(userAtom);
  return (
    <View className="h-1/4 w-full justify-end bg-[#6C63FF] p-4">
      <View className="flex-row justify-between">
        <View className="aspect-square h-20 items-center  justify-center overflow-hidden rounded-full bg-white">
          <Image
            source={require('~assets/images/avatar.png')}
            className="h-full w-full"
            resizeMode="contain"
          />
        </View>
        <Ionicons name="moon" size={24} color="white" className="my-2 " />
      </View>
      <Text className="my-2 text-lg text-white">{'Display Name'}</Text>
    </View>
  );
};
