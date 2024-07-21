"use client";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import Loader from "./Loader";
import Header from "./Header";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Editor } from "./editor/Editor";
import ActiveCollaborators from "./ActiveCollaborators";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import { useClickAway } from "@uidotdev/usehooks";
import { updateDocument } from "@/lib/actions/room.actions";

const CollaborativeRoom = ({
  roomId,
  roomMetadata,
}: CollaborativeRoomProps) => {
  const currentUserType = "editor";
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
  // const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const containerRef: MutableRefObject<HTMLDivElement> = useClickAway(
    async () => {
      if (editing) {
        setLoading(true);
        await updateDocument(roomId, documentTitle);
        setLoading(false);
        setEditing(false);
      }
    }
  );

  const updateTitlehandler = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      setLoading(true);
      try {
        if (documentTitle.toLocaleLowerCase() !== roomMetadata.title) {
          const updatedDocument = await updateDocument(roomId, documentTitle);

          if (updatedDocument) {
            setEditing(false);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collabotaive-room">
          <Header>
            <div
              ref={containerRef}
              className="flex w-fit justify-center items-center gap-2"
            >
              {editing && !loading ? (
                <Input
                  ref={inputRef}
                  type="text"
                  value={documentTitle}
                  placeholder="Enter title"
                  onChange={(e) => setDocumentTitle(e.target.value)}
                  onKeyDown={updateTitlehandler}
                  disabled={!editing}
                  className="document-title-input  focus:border-slate-400 focus:border-2"
                />
              ) : (
                <>
                  <p className="document-title">{documentTitle}</p>
                </>
              )}

              {currentUserType === "editor" && !editing && (
                <Image
                  src="/assets/icons/edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                  onClick={handleEditClick}
                  className="pointer"
                />
              )}
              {currentUserType !== "editor" && !editing && (
                <p className="view-only-tag">view only</p>
              )}
              {loading && <p className="text-sm text-gray-400">saving...</p>}
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
