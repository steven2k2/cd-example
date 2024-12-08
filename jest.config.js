export default {
    verbose: true,
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'], // Optional setup file
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Maps CSS files
    },
    transform: {
        '^.+\\.jsx?$': 'babel-jest', // Use Babel Jest for transforming JS/JSX
    },
};