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

![Build Status](https://github.com/steven2k2/cd-example/actions/workflows/deploy.yml/badge.svg)
![Coverage](https://img.shields.io/badge/coverage-80%25-brightgreen)
![Linting](https://img.shields.io/badge/linting-ESLint-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/github/license/steven2k2/cd-example)
![Last Commit](https://img.shields.io/github/last-commit/steven2k2/cd-example)
![Testing](https://img.shields.io/badge/testing-Jest-brightgreen)



