module.exports = {
  moduleFileExtensions: ['js', 'vue'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
}
