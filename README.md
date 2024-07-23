# Project Name
> Collaborator
> Live demo [_here_](https://collaborator-bay.vercel.app).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)


## General Information
**Collaborator** is a powerful app designed to facilitate seamless collaboration by enabling users to share and work on documents together in real-time. With features inspired by Google Docs, Collaborator offers a familiar and intuitive interface for document creation and editing. The app is built using Liveblocks, which ensures a smooth and responsive text editing experience, and Clerk for secure user authentication, providing a reliable and secure platform for all your collaborative needs.



## Technologies Used
Project is created with:
* next: 14.2
* @clerk/nextjs 5.2
* liveblocks
* typescript: 5
* shadcn/ui
* tailwindcss


## Features
List the ready features here:
 **Authentication**: User authentication using GitHub through NextAuth, ensuring secure sign-in/out and session management.

👉 **Collaborative Text Editor**: Multiple users can edit the same document simultaneously with real-time updates.

👉 **Documents Management**
   - **Create Documents**: Users can create new documents, which are automatically saved and listed.
   - **Delete Documents**: Users can delete documents they own.
   - **Share Documents**: Users can share documents via email or link with view/edit permissions.
   - **List Documents**: Display all documents owned or shared with the user, with search and sorting functionalities.

👉 **Comments**: Users can add inline and general comments, with threading for discussions.

👉 **Active Collaborators on Text Editor**: Show active collaborators with real-time presence indicators.

👉 **Notifications**: Notify users of document shares, new comments, and collaborator activities.

👉 **Responsive**: The application is responsive across all devices.
  


## Screenshots
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->


## Setup

### environmental variables
```env
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

#Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
```

  
## Available Scripts

### `npm install`
then
### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project Status
Project is: Completed

## Room for Improvement
Room for improvement:
- Premium features: export documents as pdf, excel type documents 
- Payment integration for premium features



## Contact
Created by [shabimoshood07@gmail.com] - feel free to contact me!






