/**@type {import("drizzle-kit").Config} */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_mWe9SK1ZtuhH@ep-cool-dawn-adrkamfy-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  },
};