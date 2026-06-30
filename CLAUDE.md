# FlyEz Frontend - Developer & Agent Guide

## Git Operations & Authentication
- **Remote Protocol**: Always use the **HTTPS** repository URL: `https://github.com/Atvantiq-Hub/flyez-frontend.git`. Do **NOT** change the remote URL to SSH (`git@github.com:...`), as SSH defaults to the `jaspalzzz` credentials which lack write permissions for this repository.
- **GitHub CLI Account**: Git commands rely on the GitHub CLI (`gh`) credentials helper. The active account must be set to `Jaspal-Android`.
- **Troubleshooting Push Failures**: If a push fails with `Repository not found` or `Could not read from remote repository`, execute:
  ```bash
  gh auth switch --hostname github.com --user Jaspal-Android
  git remote set-url origin https://github.com/Atvantiq-Hub/flyez-frontend.git
  gh auth setup-git
  ```

## Development Commands
- **Start Dev Server**: `npm run dev`
- **Build App**: `npm run build`
- **Lint**: `npm run lint`
