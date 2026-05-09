import { mutation, query } from "./_generated/server";

export const get = query({
  handler: async (ctx) => {
    return await ctx.db.query("incidents").order("desc").take(5);
  },
});

export const seed = mutation({
  handler: async (ctx) => {
    const existing = await ctx.db.query("incidents").first();
    if (existing) {
      return "Already seeded";
    }

    const dummyIncidents = [
      {
        date: "2026-03-12",
        severity: "High",
        type: "Bias Amplification",
        description: "An automated recruitment tool consistently downgraded resumes containing terms associated with specific demographic groups.",
        status: "Review",
      },
      {
        date: "2026-02-28",
        severity: "Medium",
        type: "Privacy Breach",
        description: "Customer support chatbot inadvertently exposed PII of 40 users during a system glitch.",
        status: "Logged",
      },
      {
        date: "2026-02-15",
        severity: "High",
        type: "Algorithmic Collusion",
        description: "Pricing algorithms on the platform synchronized to artificially inflate prices by 15% over a weekend.",
        status: "Review",
      },
      {
        date: "2026-01-05",
        severity: "Medium",
        type: "Copyright Infringement",
        description: "Generative AI marketing assets closely resembled copyrighted material from a competitor.",
        status: "Logged",
      },
      {
        date: "2025-11-20",
        severity: "High",
        type: "Autonomous Misdirection",
        description: "Navigation AI routed delivery vehicles through restricted residential zones to optimize delivery times.",
        status: "Logged",
      },
    ];

    for (const incident of dummyIncidents) {
      await ctx.db.insert("incidents", incident);
    }
    return "Seeded successfully";
  },
});
