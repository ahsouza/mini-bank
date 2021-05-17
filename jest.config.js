module.exports = {
  roots: ['<rootDir>/'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  collectCoverageFrom: [
    '<rootDir>/./**/*.ts',
    '!<rootDir>/./main/**'
  ],
  preset: "@shelf/jest-mongodb",
}