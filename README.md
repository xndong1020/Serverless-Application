### Serverless Todo App with CI/CD pipeline

[![<xndong1020>](https://circleci.com/gh/xndong1020/Serverless-Application.svg?style=shield)](https://github.com/xndong1020/Serverless-Application)

#### pipeline using circleci

![pipeline](./docs/images/pipeline-steps.png)

![build history](./docs/images/pipeline-history.png)

**Front-end build**
![build history](./docs/images/pipeline-frontend.png)

**Back-end build**
![build history](./docs/images/pipeline-backend.png)

#### AWS X-Ray Enabled

![AWS X-Ray](./docs/images/x-ray.png)

#### Package Individually

Before:
![AWS X-Ray](./docs/images/package-individually-before.png)

After:
![AWS X-Ray](./docs/images/package-individually-after.png)

#### How to run

**back-end (serverless restful api)**

```sh
cd backend
npm i

# for unit tests
npm test

# for deployment
sls deploy -v
```

**frontend (React app)**

```sh
cd client
npm i

# for linting
npm run lint

# for unit tests
npm test

# for local development
npm start
```

**Demo website** is [here](http://my-cloud-dev-s3.s3-website-us-west-2.amazonaws.com/)
