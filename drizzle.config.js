/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://interviewai-db_owner:3FNRozCQESu7@ep-odd-art-a5xyhxsr.us-east-2.aws.neon.tech/interviewai-db?sslmode=require",
  },
};
