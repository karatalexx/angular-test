require("../dbConnect");
const { seedUser } = require("./user");
const { seedOffers } = require("./offer");

async function seed() {
  await seedUser();
  await seedOffers();
  return true;
}

seed()
.catch((err) => {console.error(err)})
.finally(() => {
  process.exit(0);
});
