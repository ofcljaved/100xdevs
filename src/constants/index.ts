import { ImageProps } from 'react-native';

interface ScreenData extends Pick<ImageProps, 'source'> {
  title: string;
  description: string;
}

export const ONBOARD_DATA: ScreenData[] = [
  {
    title: '10x ain’t enough',
    description: 'Start Learning Today and Transform into a Tech Pro Tomorrow',
    source: require('~assets/images/obs1.png'),
  },
  {
    title: 'Transform Your Skills',
    description: 'Stay Ahead of the Curve with Expert-Led Courses',
    source: require('~assets/images/obs2.png'),
  },
  {
    title: 'Conquer Documentation',
    description: 'Learn to navigate documentation  and have access to slides',
    source: require('~assets/images/obs3.png'),
  },
  {
    title: 'Production-Ready Expertise',
    description: 'Hands-on assignments. Contribute to open source. Earn bounties',
    source: require('~assets/images/obs4.png'),
  },
];
