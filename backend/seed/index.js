require("../dbConnect");
const { seedUser } = require("./user");

async function seed() {
  return await seedUser();
}

seed().finally(() => {
  process.exit(0);
});
