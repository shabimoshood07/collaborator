import CollaborativeRoom from "@/components/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
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
  return (
    <div>
      {/* @ts-ignore */}
      <CollaborativeRoom roomId={id} roomMetadata={room.metadata} />
    </div>
  );
};

export default Document;
