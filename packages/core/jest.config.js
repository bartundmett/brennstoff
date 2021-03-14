module.exports = {
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['.stories.tsx'],
  coverageReporters: ['yml'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  collectCoverage: true,
};
