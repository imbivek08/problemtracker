import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const problems = [
    {
      title: "Two Sum",
      medium: "Easy",
      link: "https://leetcode.com/problems/two-sum",
      completed: false,
    },
    {
      title: "Longest Substring Without Repeating Characters",
      medium: "Medium",
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters",
      completed: false,
    },
    {
      title: "Median of Two Sorted Arrays",
      medium: "Hard",
      link: "https://leetcode.com/problems/median-of-two-sorted-arrays",
      completed: false,
    },
    {
      title: "Reverse Linked List",
      medium: "Easy",
      link: "https://leetcode.com/problems/reverse-linked-list",
      completed: false,
    },
    {
      title: "Binary Tree Inorder Traversal",
      medium: "Easy",
      link: "https://leetcode.com/problems/binary-tree-inorder-traversal",
      completed: false,
    },
    {
      title: "Word Ladder",
      medium: "Hard",
      link: "https://leetcode.com/problems/word-ladder",
      completed: false,
    },
    {
      title: "Search a 2D Matrix",
      medium: "Medium",
      link: "https://leetcode.com/problems/search-a-2d-matrix",
      completed: false,
    },
  ];

  // Insert problems into the database
  await prisma.problem.createMany({
    data: problems,
  });

  console.log("Database seeded with LeetCode problems.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
