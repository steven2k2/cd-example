# Continuous Deployment (CD)
https://steven2k2.github.io/cd-example/.

| **Feature**               | **Implemented** | **Details**                                                                 |
|----------------------------|------------------|------------------------------------------------------------------------------|
| **Source Control Trigger** | ✅               | Workflow triggers on commits to the repository (e.g., main branch).         |
| **Automated Tests**         | ✅               | Jest tests run automatically, and the workflow halts on failures.           |
| **Notifications**           | ✅               | GitHub Mobile notifications configured for workflow failures.               |
| **Automated Build**         | ✅               | Build process is integrated and runs as part of the CI workflow.            |
| **Deployment**              | ✅               | Deployment to GitHub Pages is configured and automated post-build.          |
| **Code Quality Checks**     | ✅               | ESLint is integrated into the pipeline for linting and static code analysis.|
| **Test Coverage Analysis**  | ✅               | Jest generates coverage reports; integration with CI is operational.        |
| **Coverage Badges**         | ❌               | Coverage badge is not automatically updated in the README.                  |
| **Environment Separation**  | ❌               | No distinct staging or production environments or workflows.                |
| **Artifact Storage**        | ❌               | Build artifacts are not stored in GitHub Actions for debugging or rollback. |