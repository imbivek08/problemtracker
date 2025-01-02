import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch all problems from the database
    const problems = await prisma.problem.findMany();

    // Return the fetched problems as a JSON response
    return new Response(JSON.stringify(problems), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error fetching problems:", error);
    return new Response('Failed to fetch problems', {
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
