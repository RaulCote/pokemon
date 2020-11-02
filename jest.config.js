module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(png|jpeg|jpg|gif)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
