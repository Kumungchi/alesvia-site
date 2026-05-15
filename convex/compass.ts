import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.string(),
    role: v.string(),
    aiStage: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const requestId = await ctx.db.insert("compassRequests", {
      name: args.name,
      email: args.email,
      company: args.company,
      role: args.role,
      aiStage: args.aiStage,
      message: args.message,
    });
    return requestId;
  },
});

export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("compassRequests").order("desc").collect();
  },
});
