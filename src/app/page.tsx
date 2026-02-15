import prisma from "@/lib/db";

const Page = async () => {
  const users = await prisma.user.findMany();
  console.log(users);
  return (
    <div>
      <h1 className="text-red-900">Home</h1>
      <ul>
        {JSON.stringify(users, null, 2)}
      </ul>
    </div>
  );
}

export default Page;
