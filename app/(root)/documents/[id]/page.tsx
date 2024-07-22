import CollaborativeRoom from "@/components/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { getClerkUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Document = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  const room = await getDocument({
    userId: clerkUser.emailAddresses[0].emailAddress,
    roomId: id,
  });
  if (!room) redirect("/");
  const userIds = Object.keys(room.usersAccesses);
  console.log(userIds);
  const users = await getClerkUsers({ userIds });
  const userData = users.map((user: User) => ({
    ...user,
    userType: room.usersAccesses[user.email]?.includes("room:write")
      ? "editor"
      : "viewer",
  }));
  const currentUserType = room.usersAccesses[
    clerkUser.emailAddresses[0].emailAddress
  ]?.includes("room:write")
    ? "editor"
    : "viewer";
  return (
    <div>
      <CollaborativeRoom
        roomId={id}
        roomMetadata={room.metadata}
        currentUserType={currentUserType}
        users={userData}
      />
    </div>
  );
};

export default Document;
