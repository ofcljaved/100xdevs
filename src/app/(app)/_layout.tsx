import { Link, Redirect, Stack } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { useRecoilValueLoadable } from 'recoil';

import { ThemeToggle } from '~/components/nativewindui/ThemeToggle';
import { cn } from '~/lib/cn';
import { useColorScheme } from '~/lib/useColorScheme';
import { userAtom } from '~/store';

export default function Layout() {
  const { contents: user, state } = useRecoilValueLoadable(userAtom);

  if (!user) {
    return <Redirect href={'/on-board'} />;
  }

  return (
    <Stack screenOptions={SCREEN_OPTIONS}>
      <Stack.Screen name="index" options={INDEX_OPTIONS} />
      <Stack.Screen name="modal" options={MODAL_OPTIONS} />
    </Stack>
  );
}

const SCREEN_OPTIONS = {
  animation: 'ios', // for android
} as const;

const INDEX_OPTIONS = {
  headerLargeTitle: true,
  title: 'NativeWindUI',
  headerRight: () => <SettingsIcon />,
} as const;

function SettingsIcon() {
  const { colors } = useColorScheme();
  return (
    <Link href="/modal" asChild>
      <Pressable className="opacity-80">
        {({ pressed }) => (
          <View className={cn(pressed ? 'opacity-50' : 'opacity-90')}>
            <Text>Hello</Text>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

const MODAL_OPTIONS = {
  presentation: 'modal',
  animation: 'fade_from_bottom', // for android
  title: 'Settings',
  headerRight: () => <ThemeToggle />,
} as const;
