"use client";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import Loader from "./Loader";
import Header from "./Header";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Editor } from "./editor/Editor";
import ActiveCollaborators from "./ActiveCollaborators";

const CollaborativeRoom = ({
  roomId,
  roomMetadata,
}: CollaborativeRoomProps) => {
  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collabotaive-room">
          <Header>
            <div className="flex w-fit justify-center items-center gap-2">
              <p className="document-title">share</p>
            </div>
            <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
              <ActiveCollaborators />
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
