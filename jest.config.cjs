module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.jest.json"
      }
    ]
  },

  testMatch: ["**/*.test.ts", "**/*.test.tsx"]
};