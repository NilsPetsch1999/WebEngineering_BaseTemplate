### Tasks
## (1) Integrate `npm` and a build management tool into your project.

## (5) Configure your project to use Typescript as your primary development language and adapt the code and file extensions respectively.

## (3) Use ESLint and Prettier inside your project - rulesets can be found below.

## (2) Keep your builds clear and add dependencies to the right build.

## (2) Define the following tasks within `npm scripts`:
  * `dev`: starts the development server.
  * `build`: runs the typescript compiler and bundles your application - bundling depends on your chosen build tool (e.g. Vite, Webpack) but typically bundles multiple files into one, applies optimizations like minification and obfuscation and outputs final results to a `dist` or `build` directory.
  * `lint`: runs ESLint on all  `.js` and `.ts` files in your projects `/src` directory.
  * `lint:fix`: runs and also fixes all issues found by ESLint.
  * `format`: formats all `.js` and `.ts` files in your projects `/src` directory.
  * `format:check`: checks if the files in the `/src` directory are formatted according to Prettier's rules.

## (2) Configure a pre-commit hook that lints and formats your code using [husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged). A tutorial can be found [here](https://dev.to/shashwatnautiyal/complete-guide-to-eslint-prettier-husky-and-lint-staged-fh9).

## (5) Configure **2 Workflows** using GitHub Actions, one for development and one for deployment:
  * (*2) Development Workflow should at least lint (optionally test) your code when developers push to a branch named `development`.
  * (3) Deployment Workflow is triggered when developers push into `production` branch. It should at least lint and build your source code. Afterwards the build artifacts of your application should be automatically deployed to Github Pages (or another hosting provider of your choice).