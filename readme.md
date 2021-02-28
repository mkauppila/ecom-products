# Template

A generic template for services.

- how to setup
  - Clone this repository,
  - `git remote rename origin template`
  - `git remote set-url --push template no_push` - no pushes to template
  - `git remote add origin git@<where-services-repo-is>.git`
  - `git push -u <remote_name> <local_branch_name>` set origin as default remote

### Get the service running

- `npm install`
- `npm run start` - run the service
- `npm run test` - run unit tests
- `npm run supertest` - run supertests
