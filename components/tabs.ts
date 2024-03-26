"use client";

import { styled } from "@/styled-system/jsx";
import { Tabs as ArkTabs } from "@ark-ui/react";

export const Tabs = styled(
  ArkTabs.Root,
  {},
  {
    defaultProps: {
      lazyMount: true,
    },
  },
);
export const TabList = styled(ArkTabs.List);
export const TabContent = styled(ArkTabs.Content);
export const TabTrigger = styled(ArkTabs.Trigger, {
  base: {
    cursor: "pointer",
  },
});

export const TabIndicator = styled(ArkTabs.Indicator);
