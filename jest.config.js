export default {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    collectCoverage: true, // Enable coverage collection
    collectCoverageFrom: [
        'src/**/*.{js,jsx}', // Specify files to collect coverage from
        '!src/**/*.test.{js,jsx}', // Exclude test files
        '!src/**/index.{js,jsx}', // Exclude index files
        '!src/serviceWorker.{js,jsx}', // Exclude service workers
    ],
    coverageDirectory: 'coverage', // Output directory for coverage reports
    coverageReporters: ['text', 'lcov'], // Report formats
};