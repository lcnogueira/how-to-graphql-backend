# how-to-graphql-backend

This was built as part of the [GraphQL Tutorial](https://www.howtographql.com/graphql-js/0-introduction/) on [How to GraphQL](https://www.howtographql.com/). It's built using `node`, `graphql-yoga` and Prisma.

## Usage

1. Clone repository & install dependencies

```
git clone https://github.com/lcnogueira/how-to-graphql-backend.git
cd how-to-graphql-backend
npm i
```

2. Create a `.env` file and insert a `SECRET` variable (any value you want to) in this file. You will only be able to access the API when providing JWTs that are signed with this secret.

```
SECRET=
```

3. Deploy the Prisma database service using the [prisma CLI](https://www.prisma.io/docs/prisma-cli-and-configuration/using-the-prisma-cli-alx4/#installation)

```
prisma deploy
```

When prompted where (i.e. to which Prisma server) you want to deploy your service, choose the Demo server which can be used for free in Prisma Cloud. If you haven't done so already, you will be asked to register with Prisma Cloud (which you can do via GitHub).

4. Set the Prisma service endpoint
   From the output of the previous command, copy the `HTTP` endpoint and paste it into `.env` file . It will be used to instantiate the `Prisma` binding

```
PRISMA_ENDPOINT=
```

5. Start the server and open Playground

```
npm run dev
```
