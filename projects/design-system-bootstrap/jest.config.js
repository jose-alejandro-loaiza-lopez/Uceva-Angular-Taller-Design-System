const baseConfig = require('../../jest.config.js');

module.exports = {
    ...baseConfig,
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json'
        }
    },
    displayName: 'design-system-bootstrap',
    name: 'design-system-bootstrap',
    rootDir: '.',
    setupFilesAfterEnv: ['<rootDir>/../../setup-jest.ts'],
    testPathIgnorePatterns: [
        '<rootDir>/../../node_modules/',
        '<rootDir>/../../dist/',
    ],
}