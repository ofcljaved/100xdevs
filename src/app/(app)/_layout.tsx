import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link, Redirect, Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Pressable, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRecoilValueLoadable } from 'recoil';
import { DrawerContent } from '~/components';

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
    // <Stack screenOptions={SCREEN_OPTIONS}>
    //   <Stack.Screen name="index" options={INDEX_OPTIONS} />
    //   <Stack.Screen name="modal" options={MODAL_OPTIONS} />
    // </Stack>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={SCREEN_OPTIONS}
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            drawerIcon: (props) => <AntDesign name="home" {...props} />,
          }}
        />
        <Drawer.Screen
          name="invoices"
          options={{
            drawerLabel: 'Invoice',
            drawerIcon: (props) => <MaterialIcons name="payment" {...props} />,
          }}
        />
        <Drawer.Screen
          name="feedback"
          options={{
            drawerLabel: 'Feedback',
            drawerIcon: (props) => <MaterialIcons name="feedback" {...props} />,
          }}
        />
        <Drawer.Screen
          name="help"
          options={{
            drawerLabel: 'Help',
            drawerIcon: (props) => <MaterialIcons name="support-agent" {...props} />,
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Settings',
            drawerIcon: (props) => <Ionicons name="settings-outline" {...props} />,
          }}
        />
        <Drawer.Screen name="notification" options={{ drawerItemStyle: { display: 'none' } }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const SCREEN_OPTIONS = {} as const;

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
