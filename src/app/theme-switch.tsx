'use client';

import { IconLaptop2, IconMoon, IconSun } from '@/components/icons';
import {
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemControl,
  SegmentGroupItemText,
} from '@/components/segment-group';
import { Circle, HStack, VisuallyHidden } from '@/styled-system/jsx';
import { Theme } from '@/types';
import { parseEnum } from '@/utils/parse-enum';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const themes = Object.values(Theme);

export function ThemeSwitch() {
  const mounted = useMounted();

  const { theme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <HStack py={1} gap={2}>
        <Circle w={6} h={6} bg="bg.light" animation="pulse" />
        <Circle w={6} h={6} bg="bg.light" animation="pulse" />
        <Circle w={6} h={6} bg="bg.light" animation="pulse" />
      </HStack>
    );
  }

  return (
    <SegmentGroup
      display="flex"
      gap={0.5}
      value={parseEnum(themes, theme) ?? Theme.System}
      onValueChange={({ value }) => {
        setTheme(parseEnum(themes, value) ?? Theme.System);
      }}
    >
      <SegmentGroupIndicator
        bg={{
          _dark: '#ffffff0d' /* FIXME: use 'white/10' once supported */,
          _light: '#0000000d' /* FIXME: use 'black/10' once supported */,
          _osDark: '#ffffff0d' /* FIXME: use 'white/10' once supported */,
          _osLight: '#0000000d' /* FIXME: use 'black/10' once supported */,
        }}
        rounded="full"
      />

      {items.map((item) => (
        <SegmentGroupItem key={item.value} value={item.value} p={1.5} cursor="pointer">
          <SegmentGroupItemText>
            <item.icon />
            <VisuallyHidden>{item.label}</VisuallyHidden>
          </SegmentGroupItemText>
          <SegmentGroupItemControl />
        </SegmentGroupItem>
      ))}
    </SegmentGroup>
  );
}

const items = [
  {
    icon: IconSun,
    label: 'Light theme',
    value: Theme.Light,
  },
  {
    icon: IconMoon,
    label: 'Dark theme',
    value: Theme.Dark,
  },
  {
    icon: IconLaptop2,
    label: 'System theme',
    value: Theme.System,
  },
];

function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted;
}
