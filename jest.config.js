module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  coverageReporters: ["html", "json", "lcov", "text", "clover"],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/src/",
  ],
  verbose: true,
  testEnvironment: "jsdom",
  collectCoverage: true,
  clearMocks: true,
  testMatch: ["**/*.spec.ts"],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  rootDir: './'
};