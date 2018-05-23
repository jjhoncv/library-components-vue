module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>/config/jest/test-setup.js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: ['**/src/**/*.(test|spec).(jsx|tsx|js|ts)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.s?css$': '<rootDir>/config/jest/css-transform.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/css-transform.js',
    '^@app/(.*)': '<rootDir>/$1'
  }
};
