const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const locations = require("./airports.json");

const load = async () => {
  try {
    await prisma.location.createMany({
      data: locations.filter((loc: { name: string }) => loc.name.includes("Airport") || loc.name.includes("Airfield"))
    });
    console.log("Added airports location data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
