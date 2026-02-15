import { cn } from "@/lib/utils";
import prisma from "@/lib/db";

const Page = async () => {
  const users = await prisma.user.findMany();
  console.log(users);
  return (
    <div>
      <h1 className="text-red-900">Home</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
