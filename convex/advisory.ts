import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    orgName: v.string(),
    orgType: v.string(),
    stage: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const requestId = await ctx.db.insert("advisoryRequests", {
      name: args.name,
      email: args.email,
      orgName: args.orgName,
      orgType: args.orgType,
      stage: args.stage,
      message: args.message,
    });
    return requestId;
  },
});
