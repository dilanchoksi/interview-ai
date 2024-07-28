/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://inter-view-db_owner:5LIYiD9AcUjM@ep-round-cell-a5k55f8e.us-east-2.aws.neon.tech/inter-view-db?sslmode=require",
  },
};
