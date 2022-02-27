import { ColorMode } from '@chakra-ui/react';

export const HERO_PATTERN = (colorMode?: ColorMode) =>
	`data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='${
		colorMode === 'light' ? '0.1' : '0.4'
	}' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E`;
