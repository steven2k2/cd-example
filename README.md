# Continuous Deployment (CD)
https://steven2k2.github.io/cd-example/.

| **Feature**                | **Implemented** | **Details**                                                                 |
|----------------------------|------------------|------------------------------------------------------------------------------|
| **Source Control Trigger** | ✅               | Workflow triggers on commits to the repository (e.g., `main` branch).       |
| **Automated Tests**        | ✅               | Jest tests run automatically, halting workflow on failures.                 |
| **Notifications**          | ✅               | Alerts configured for workflow status via GitHub Mobile.                    |
| **Automated Build**        | ✅               | The build process is integrated and runs as part of the CI workflow.        |
| **Deployment**             | ✅               | Deployment to GitHub Pages is automated post-build.                         |
| **Code Quality Checks**    | ✅               | ESLint integration for linting and static code analysis.                    |
| **Test Coverage Analysis** | ✅               | Jest generates coverage reports; coverage badges partially implemented.     |
| **Coverage Badges**        | ❌               | Automated.                                                                  |
| **Environment Separation** | ❌               | Staging and production workflows.                                           |
| **Artifact Storage**       | ❌               | Build artifacts stored in GitHub Actions.                                   |
| **Security Checks**        | ❌               | Security scans and audit checks.                                            |
| **Monitoring**             | ❌               | Monitoring and post-deployment validation configured.                       |
| **Containerisation**       | ❌               | Docker integrated into the pipeline.                                        |

| **Dependency**               | **Version**  | **Purpose**                                                                 |
|-------------------------------|--------------|-----------------------------------------------------------------------------|
| **@testing-library/react**   | ^16.1.0      | Provides utilities for testing React components.                           |
| **@testing-library/jest-dom**| ^6.6.3       | Adds custom Jest matchers for DOM node assertions.                         |
| **jest**                     | ^29.7.0      | JavaScript testing framework for unit and integration testing.             |
| **jest-environment-jsdom**   | ^29.7.0      | Jest environment for simulating the browser in tests.                      |
| **jest-fetch-mock**          | ^3.0.3       | Mock `fetch` API calls in Jest tests.                                      |
| **babel-jest**               | ^29.7.0      | Allows Jest to transpile code using Babel.                                 |
| **eslint**                   | ^9.16.0      | Linter for identifying and fixing JavaScript issues.                       |
| **eslint-plugin-react**      | ^7.37.2      | Linting rules for React projects.                                          |
| **eslint-plugin-react-hooks**| ^5.0.0       | Linting rules for React hooks.                                             |
| **@babel/core**              | ^7.26.0      | Babel compiler core for JavaScript transpilation.                          |
| **@babel/preset-env**        | ^7.26.0      | Babel preset to transpile modern JavaScript to ES5.                        |
| **@babel/preset-react**      | ^7.26.3      | Babel preset for transpiling JSX and other React-specific syntax.          |
| **identity-obj-proxy**       | ^3.0.0       | Proxy for mocking CSS modules in Jest.                                     |
| **vite**                     | ^6.0.1       | Fast build tool for modern web development and previewing the app.         |
| **@vitejs/plugin-react**     | ^4.3.4       | Official Vite plugin for React support.                                    |


![Build Status](https://github.com/steven2k2/cd-example/actions/workflows/deploy.yml/badge.svg)
![Coverage](https://img.shields.io/badge/coverage-80%25-brightgreen)
![Linting](https://img.shields.io/badge/linting-ESLint-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/github/license/steven2k2/cd-example)
![Last Commit](https://img.shields.io/github/last-commit/steven2k2/cd-example)
![Testing](https://img.shields.io/badge/testing-Jest-brightgreen)



