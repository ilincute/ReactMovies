module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy", // Mock CSS imports
    "\\.png$": "<rootDir>/__mocks__/fileMock.js", // Mock PNG files
    "\\.jpg$": "<rootDir>/__mocks__/fileMock.js", // Mock JPG files
    "\\.jpeg$": "<rootDir>/__mocks__/fileMock.js", // Mock JPEG files
    "\\.svg$": "<rootDir>/__mocks__/fileMock.js", // Mock SVG files
  },
};
