module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setUpTests.js"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
