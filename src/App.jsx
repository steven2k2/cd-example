import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header>
                <h1>CI/CD Pipeline Progress 09/12/2024</h1>
            </header>
            <main>
                <table>
                    <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Implemented</th>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Source Control Trigger</td>
                        <td>✅</td>
                        <td>Workflow triggers on commits to the repository (e.g., main branch).</td>
                    </tr>
                    <tr>
                        <td>Automated Tests</td>
                        <td>✅</td>
                        <td>Jest tests run automatically, and workflow halts on failures.</td>
                    </tr>
                    <tr>
                        <td>Notifications</td>
                        <td>✅</td>
                        <td>GitHub Mobile notifications are configured for workflow failures.</td>
                    </tr>
                    <tr>
                        <td>Automated Build</td>
                        <td>✅</td>
                        <td>The build process is integrated and runs as part of the CI workflow.</td>
                    </tr>
                    <tr>
                        <td>Deployment</td>
                        <td>✅</td>
                        <td>Deployment to GitHub Pages is configured and automated post-build.</td>
                    </tr>
                    <tr>
                        <td>Code Quality Checks</td>
                        <td>✅</td>
                        <td>ESLint is integrated into the pipeline for linting and static code analysis.</td>
                    </tr>
                    <tr>
                        <td>Test Coverage Analysis</td>
                        <td>✅</td>
                        <td>Jest is configured to generate coverage reports; integration with CI is pending.</td>
                    </tr>
                    <tr>
                        <td>Coverage Badges</td>
                        <td>❌</td>
                        <td>Coverage badge is not automatically updated in the README.</td>
                    </tr>
                    <tr>
                        <td>Environment Separation</td>
                        <td>❌</td>
                        <td>No distinct staging/production environments or workflows.</td>
                    </tr>
                    <tr>
                        <td>Artifact Storage</td>
                        <td>❌</td>
                        <td>Build artifacts are not stored in GitHub Actions for debugging or rollback.</td>
                    </tr>
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default App;