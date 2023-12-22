'use client';

import {styled} from '@/styled-system/jsx';
import {Dialog as ArkDialog} from '@ark-ui/react';

export const Dialog = styled(ArkDialog.Root);
export const DialogTrigger = styled(ArkDialog.Trigger, {
	base: {
		cursor: 'pointer',
	},
});

export const DialogBackdrop = styled(ArkDialog.Backdrop, {
	base: {
		zIndex: 'overlay',
	},
});

export const DialogPositioner = styled(ArkDialog.Positioner);
export const DialogContent = styled(ArkDialog.Content, {
	base: {
		zIndex: 'modal',
	},
});

export const DialogTitle = styled(ArkDialog.Title);
export const DialogDescription = styled(ArkDialog.Description);
export const DialogCloseTrigger = styled(ArkDialog.CloseTrigger, {
	base: {
		cursor: 'pointer',
	},
});
