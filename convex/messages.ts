import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const send = mutation({
  args: {
    formType: v.string(),
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const messageId = await ctx.db.insert("messages", {
      formType: args.formType,
      name: args.name,
      email: args.email,
      subject: args.subject,
      message: args.message,
    });
    return messageId;
  },
});
