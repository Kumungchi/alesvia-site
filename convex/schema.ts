import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    formType: v.string(),
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
  }),
  incidents: defineTable({
    date: v.string(),
    severity: v.string(),
    type: v.string(),
    description: v.string(),
    status: v.string(),
  }),
  advisoryRequests: defineTable({
    name: v.string(),
    email: v.string(),
    orgName: v.string(),
    orgType: v.string(),
    stage: v.string(),
    message: v.string(),
  }),
  policyRequests: defineTable({
    name: v.string(),
    email: v.string(),
    organization: v.string(),
    affiliation: v.string(),
    message: v.string(),
  }),
  compassRequests: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.string(),
    role: v.string(),
    aiStage: v.string(),
    message: v.string(),
  }),
});
