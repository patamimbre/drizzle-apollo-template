# Drizzle + GraphQL Apollo Server template

This is a basic template for a GraphQL Apollo Server with Drizzle as ORM. It is based on the [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and [Drizzle](https://www.drizzle.dev/docs/).

## Getting started
1. Clone the repository
2. Install the dependencies
3. Push the schema to the database `npm run drizzle:push`
4. Run in development mode `npm run dev`

## Available scripts
- `npm run dev`: Run the server in development mode with watch mode enabled
- `npm run drizzle:push`: Push the schema to the database. This will create the tables in the database or update them if they already exist. This script should be run every time the schema changes. Never use this in production. See the [Drizzle kit documentation](https://orm.drizzle.team/kit-docs/overview#prototyping-with-db-push) for more information.
- `npm run drizzle:studio`: Open the Drizzle Studio to manage the database