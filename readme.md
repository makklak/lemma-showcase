# Lemma Showcase

Monorepo runs on node version 16^. It can be automatically installed by using `nvm i`.

To install all needed dependencies run:
```
  npm install
```

## Commands

### Nexelem
#### Start application
```
  npm run nexelem:serve
```

#### Start Cypress (e2e)
```
  npm run nexelem:e2e
```

#### Build
```
  npm run nexelem:build
```

### Graphne
#### Start application
```
  npm run graphne:serve
```

#### Start Cypress (e2e)
```
  npm run graphne:e2e
```

#### Build
```
  npm run graphne:build
```

## Lint
#### Single project
```
  npm run lint -- --target=PROJECT_NAME
```
Executes linter on project specified as target. E.g. replace `PROJECT_NAME` with `nexelem`.

#### Affected
```
  npm run affected:lint:master
```
Executes linter for all projects that were affected by your changes between master branch and your latest commit.

### Tests
#### Single project
```
  npm run test -- --target=PROJECT_NAME
```
Starts test runner in watch mode for project specified as target. E.g. replace `PROJECT_NAME` with `nexelem`.

#### Affected
```
  npm run affected:test:master
```
Starts test runner for all projects that were affected by your changes between master branch and your latest commit.

### Storybook
```
  npm run storybook
```
Runs storybook from project `shared-storybook`.

## Storybook
Storybook is currently setup as separate project named `shared-storybook` and it will find stories from directories matching this glob: `shared/ui-*/**/*`.
