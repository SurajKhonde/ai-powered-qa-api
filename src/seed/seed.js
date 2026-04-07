import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Doc from "../models/doc.model.js";

dotenv.config();

const docs = [
  {
    title: "Refund Policy",
    content: `Refunds are processed within 5-7 business days after approval. Refund requests must be raised within 7 days of purchase. Only failed or canceled transactions are eligible.`,
    tags: ["refund", "billing", "payment"],
    metadata: { category: "billing", priority: 1 },
  },
  {
    title: "Shipping Policy",
    content: `Orders are shipped within 2-3 business days. Delivery may take 5-7 days depending on location. Tracking details are shared via email.`,
    tags: ["shipping", "delivery"],
    metadata: { category: "logistics", priority: 2 },
  },
  {
    title: "Order Cancellation",
    content: `Orders can be canceled before shipment. Once shipped, cancellation is not possible. Refund will be processed if canceled successfully.`,
    tags: ["order", "cancel"],
    metadata: { category: "orders", priority: 2 },
  },
  {
    title: "Account Deletion",
    content: `Users can delete their account from settings. This action is irreversible and all user data will be permanently removed.`,
    tags: ["account", "user"],
    metadata: { category: "user", priority: 3 },
  },
  {
    title: "Password Reset",
    content: `Users can reset password using 'Forgot Password'. A reset link is sent to registered email and expires in 15 minutes.`,
    tags: ["password", "auth"],
    metadata: { category: "security", priority: 1 },
  },
  {
    title: "Subscription Plan",
    content: `Users can upgrade or downgrade subscription anytime. Changes take effect from next billing cycle.`,
    tags: ["subscription", "plan"],
    metadata: { category: "billing", priority: 2 },
  },
  {
    title: "Billing Cycle",
    content: `Billing is processed monthly. Charges are auto-debited from saved payment method.`,
    tags: ["billing", "subscription"],
    metadata: { category: "billing", priority: 1 },
  },
  {
    title: "Coupon Usage",
    content: `Coupons must be applied at checkout. Only one coupon can be used per order.`,
    tags: ["coupon", "discount"],
    metadata: { category: "offers", priority: 3 },
  },
  {
    title: "Delivery Delay",
    content: `Delivery may be delayed due to weather or logistics issues. Users will be notified via email.`,
    tags: ["delivery", "delay"],
    metadata: { category: "logistics", priority: 3 },
  },
  {
    title: "Payment Failure",
    content: `If payment fails, retry or use another payment method. Contact support if issue persists.`,
    tags: ["payment", "error"],
    metadata: { category: "billing", priority: 1 },
  },
  {
    title: "Account Suspension",
    content: `Accounts may be suspended due to policy violations. Users can contact support for appeal.`,
    tags: ["account", "suspension"],
    metadata: { category: "user", priority: 1 },
  },
  {
    title: "Data Privacy",
    content: `User data is encrypted and never shared with third parties without consent.`,
    tags: ["privacy", "security"],
    metadata: { category: "security", priority: 1 },
  },
  {
    title: "Support Contact",
    content: `Users can contact support via email or live chat. Response time is 24 hours.`,
    tags: ["support", "help"],
    metadata: { category: "support", priority: 2 },
  },
  {
    title: "Login Issues",
    content: `If unable to login, ensure credentials are correct or reset password.`,
    tags: ["login", "auth"],
    metadata: { category: "security", priority: 2 },
  },
  {
    title: "Email Verification",
    content: `New users must verify email before accessing full features.`,
    tags: ["email", "verification"],
    metadata: { category: "auth", priority: 2 },
  },
];

const seed = async () => {
  try {
    await connectDB();

    await Doc.deleteMany();

    await Doc.insertMany(docs);

    console.log(`✅ Seeded ${docs.length} documents`);
    process.exit();
  } catch (err) {
    console.error("❌ Seed error:", err);
    process.exit(1);
  }
};

seed();