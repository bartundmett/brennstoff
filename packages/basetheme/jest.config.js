module.exports = {
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['.stories.tsx'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 97,
      functions: 97,
      lines: 97,
      statements: 97,
    },
  },
};
