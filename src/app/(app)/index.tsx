import { useHeaderHeight } from '@react-navigation/elements';
import { router } from 'expo-router';
import { cssInterop } from 'nativewind';
import * as React from 'react';
import { FlatList, Linking, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '~/components/nativewindui/Text';
import { useColorScheme } from '~/lib/useColorScheme';
import { useHeaderSearchBar } from '~/lib/useHeaderSearchBar';

cssInterop(FlatList, {
  className: 'style',
  contentContainerClassName: 'contentContainerStyle',
});

export default function Screen() {
  const searchValue: string = '';
  // const searchValue = useHeaderSearchBar({ hideWhenScrolling: COMPONENTS.length === 0 });

  const data = searchValue
    ? COMPONENTS.filter((c) => c.name.toLowerCase().includes(searchValue.toLowerCase()))
    : COMPONENTS;

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
      data={data}
      contentContainerClassName="py-4 android:pb-12"
      extraData={searchValue}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderItemSeparator}
      renderItem={renderItem}
      ListEmptyComponent={COMPONENTS.length === 0 ? ListEmptyComponent : undefined}
    />
  );
}

function ListEmptyComponent() {
  const insets = useSafeAreaInsets();
  const dimensions = useWindowDimensions();
  const headerHeight = useHeaderHeight();
  const { colors } = useColorScheme();
  const height = dimensions.height - headerHeight - insets.bottom - insets.top;

  return (
    <View style={{ height }} className="flex-1 items-center justify-center gap-1 px-12">
      <Text variant="title3" className="pb-1 text-center font-semibold">
        No Components Installed
      </Text>
      <Text color="tertiary" variant="subhead" className="pb-4 text-center">
        You can install any of the free components from the{' '}
        <Text onPress={() => router.push('/modal')} variant="subhead" className="text-primary">
          NativeWindUI
        </Text>
        {' website.'}
      </Text>
    </View>
  );
}

type ComponentItem = { name: string; component: React.FC };

function keyExtractor(item: ComponentItem) {
  return item.name;
}

function renderItemSeparator() {
  return <View className="p-2" />;
}

function renderItem({ item }: { item: ComponentItem }) {
  return (
    <Card title={item.name}>
      <item.component />
    </Card>
  );
}

function Card({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <View className="px-4">
      <View className="gap-4 rounded-xl border border-border bg-card p-4 pb-6 shadow-sm shadow-black/10 dark:shadow-none">
        <Text className="text-center text-sm font-medium tracking-wider opacity-60">{title}</Text>
        {children}
      </View>
    </View>
  );
}

const COMPONENTS: ComponentItem[] = [];
