import { prisma } from "./client";

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "cibiccf437@gmail.com" },
    update: {},
    create: {
      email: "cibiccf437@gmail.com",
      password: "$2b$10$/qSoEPMxab8lAyIHD8oSrePIJ/ZB3Z8Zu/RRCrDOy6G7auFnxqiU.",
      name: "cibi",
    },
  });

  const products = Array.from({ length: 25 }).map((_, i) => ({
    userId: user.id,
    name: `Product ${i + 1}`,
    sku: `SKU-${String(i + 1).padStart(3, "0")}`,
    price: parseFloat((Math.random() * 90 + 10).toFixed(2)), // Decimal-safe
    quantity: Math.floor(Math.random() * 20),
    lowStockAt: 5,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
  }));

  await prisma.product.createMany({
    data: products,
    skipDuplicates: true,
  });

  console.log("✔ Seed completed");
  console.log(`✔ User created: ${user.email}`);
  console.log("✔ 25 products created for this user");
}

main()
  .catch((err) => {
    console.error("Seed error:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
