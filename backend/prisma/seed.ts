import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Seed categories
  const categories = await prisma.category.createMany({
    data: [
      { name: "Men's Shoes", slug: 'mens-shoes', description: 'Premium footwear for men' },
      { name: "Women's Shoes", slug: 'womens-shoes', description: 'Stylish footwear for women' },
      { name: "Kids' Shoes", slug: 'kids-shoes', description: 'Comfortable shoes for children' },
      { name: 'Sneakers', slug: 'sneakers', description: 'Casual sneakers' },
      { name: 'Running Shoes', slug: 'running-shoes', description: 'Performance running shoes' },
      { name: 'Formal Shoes', slug: 'formal-shoes', description: 'Elegant formal footwear' },
      { name: 'Sandals', slug: 'sandals', description: 'Comfortable sandals' },
      { name: 'Boots', slug: 'boots', description: 'Durable boots' },
    ],
    skipDuplicates: true,
  })

  console.log(`Created ${categories.count} categories`)

  // Seed admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@stepstyle.com' },
    update: {},
    create: {
      email: 'admin@stepstyle.com',
      password: 'hashed_password_here', // Should be bcrypted
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
      isVerified: true,
    },
  })

  console.log(`Admin user created: ${adminUser.email}`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
