module.exports = {
  roots: ['<rootDir>/'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/./**/*.ts',
    '!<rootDir>/./main/**'
  ]
}