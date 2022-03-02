const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
	transformIgnorePatterns: ['/node_modules/'],
	moduleNameMapper: {
		'@/docs/(.*)$': '<rootDir>/public/docs/$1',
		'@/icons/(.*)$': '<rootDir>/public/assets/icons/$1',
		'@/images/(.*)$': '<rootDir>/public/assets/images/$1',
		'@/sounds/(.*)$': '<rootDir>/public/assets/sounds/$1',
		'@/videos/(.*)$': '<rootDir>/public/assets/videos/$1',
		'@/animations': '<rootDir>/src/animations',
		'@/animations/(.*)$': '<rootDir>/src/animations/$1',
		'@/components/(.*)$': '<rootDir>/src/components/$1',
		'@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'@/interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
		'@/pages/(.*)$': '<rootDir>/src/pages/$1',
		'@/scripts/(.*)$': '<rootDir>/src/scripts/$1',
		'@/services/(.*)$': '<rootDir>/src/services/$1',
		'@/stores/(.*)$': '<rootDir>/src/stores/$1',
		'@/styles/(.*)$': '<rootDir>/src/styles/$1',
		'@/utils/(.*)$': '<rootDir>/src/utils/$1',
	},
	testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
