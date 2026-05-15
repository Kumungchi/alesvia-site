import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    organization: v.string(),
    affiliation: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const requestId = await ctx.db.insert("policyRequests", {
      name: args.name,
      email: args.email,
      organization: args.organization,
      affiliation: args.affiliation,
      message: args.message,
    });
    return requestId;
  },
});

export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("policyRequests").order("desc").collect();
  },
});
