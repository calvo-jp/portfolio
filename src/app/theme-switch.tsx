'use client';

import { IconLaptop2, IconMoon, IconSun } from '@/components/icons';
import {
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemControl,
  SegmentGroupItemText,
} from '@/components/segment-group';
import { Box, Flex, VisuallyHidden } from '@/styled-system/jsx';
import { Theme } from '@/types';
import { parseEnum } from '@/utils/parse-enum';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const themes = Object.values(Theme);
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

export function ThemeSwitch() {
  const mounted = useMounted();

  const { theme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <Flex gap={0.5}>
        {items.map(({ label, icon: SVGIcon }) => (
          <Box key={label} p={1.5} cursor="pointer">
            <SVGIcon />
          </Box>
        ))}
      </Flex>
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

      {items.map(({ label, value, icon: SVGIcon }) => (
        <SegmentGroupItem key={value} value={value} p={1.5} cursor="pointer">
          <SegmentGroupItemText>
            <SVGIcon />
            <VisuallyHidden>{label}</VisuallyHidden>
          </SegmentGroupItemText>
          <SegmentGroupItemControl />
        </SegmentGroupItem>
      ))}
    </SegmentGroup>
  );
}

function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted;
}
