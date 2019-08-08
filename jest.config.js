module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json'
        }
    },
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: [
        'ts',
        'js'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: [
        '**/test/**/*.test.(ts|js)'
    ],
    coverageReporters: ['text', 'cobertura'], 
    reporters: [ 'default', 'jest-junit' ],
    testEnvironment: 'node'
};
