import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

interface Subscription {
  id: string;
  email: string;
  category: string;
  categorySlug?: string;
  subscribedAt: string;
}

const DATA_FILE = path.join(process.cwd(), "src/data/subscriptions.json");

function getSubscriptions(): Subscription[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      const dir = path.dirname(DATA_FILE);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(DATA_FILE, "[]", "utf-8");
      return [];
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Subscription[];
  } catch (error) {
    console.error("Error reading subscriptions:", error);
    return [];
  }
}

function saveSubscriptions(list: Subscription[]) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving subscriptions:", error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, category, categorySlug } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address format." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const categoryName = (category || "All Collections").trim();
    const slug = (categorySlug || "").trim();

    const existing = getSubscriptions();
    const alreadySubscribed = existing.some(
      (sub) => sub.email === cleanEmail && sub.category.toLowerCase() === categoryName.toLowerCase()
    );

    if (!alreadySubscribed) {
      const newEntry: Subscription = {
        id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        email: cleanEmail,
        category: categoryName,
        categorySlug: slug,
        subscribedAt: new Date().toISOString(),
      };
      existing.push(newEntry);
      saveSubscriptions(existing);
    }

    return NextResponse.json({
      success: true,
      message: `Thank you! We will notify ${cleanEmail} the moment the ${categoryName} collection is unveiled.`,
      email: cleanEmail,
      category: categoryName,
    });
  } catch (error: any) {
    console.error("API /api/notify error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to process subscription. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const subscriptions = getSubscriptions();
  return NextResponse.json({
    total: subscriptions.length,
    subscriptions: subscriptions.map((s) => ({
      email: s.email,
      category: s.category,
      subscribedAt: s.subscribedAt,
    })),
  });
}
