import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Todo: a
    .model({
      content: a.string().required(),
      completed: a.boolean().default(false),
      priority: a.string().default("medium"),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = typeof schema;
export const data = defineData({ schema }); // ✅ changed from export default
