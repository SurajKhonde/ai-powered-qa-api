import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Doc from "../models/doc.model.js";

dotenv.config();

const seedDocs = async () => {
  try {
    await connectDB();

    await Doc.deleteMany();

    const docs = [
      {
        title: "Refund Policy",
        content:
          "Refunds are processed within 5-7 business days after approval.",
        tags: ["refund", "payment"],
      },
      {
        title: "Shipping Policy",
        content:
          "Orders are shipped within 2-3 business days. Delivery takes 5-7 days.",
        tags: ["shipping", "delivery"],
      },
      {
        title: "Account Deletion",
        content:
          "Users can delete their account from settings. Data is removed permanently.",
        tags: ["account", "user"],
      },
      {
        title: "Payment Issues",
        content:
          "If payment fails, retry or use another payment method.",
        tags: ["payment", "error"],
      },
      {
        title: "Subscription Plan",
        content:
          "Users can upgrade or downgrade their subscription anytime.",
        tags: ["subscription", "plan"],
      },
    ];

    await Doc.insertMany(docs);

    console.log("✅ Data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seed error:", error);
    process.exit(1);
  }
};

seedDocs();