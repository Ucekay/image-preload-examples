import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BlurView } from 'expo-blur';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
				name="rn-image"
				options={{
					headerTitle: 'React Native Image',
          headerShown: true,
          headerTransparent: true,
					headerBackground: () => (
						<BlurView
							tint="regular"
							intensity={100}
							style={StyleSheet.absoluteFill}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="expo-image"
				options={{
					headerTitle: 'Expo Image',
          headerShown: true,
          headerTransparent: true,
					headerBackground: () => (
						<BlurView
							tint="regular"
							intensity={100}
							style={StyleSheet.absoluteFill}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="rn-expo-image"
				options={{
					headerTitle: 'RN Image for Size & Expo Image for Display',
          headerShown: true,
          headerTransparent: true,
					headerBackground: () => (
						<BlurView
							tint="regular"
							intensity={100}
							style={StyleSheet.absoluteFill}
						/>
					),
				}}
			/>
    </Tabs>
  );
}
