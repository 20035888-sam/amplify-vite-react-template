import { defineAuth } from "@aws-amplify/backend";

export const auth = defineAuth({ // ✅ named export
  loginWith: { email: true },
});
