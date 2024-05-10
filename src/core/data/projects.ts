import { ProjectModel } from "../models";

export const projectList: ProjectModel[] = [
  {
    title: "SIS Cambodia",
    role: "Mobile developer",
    description: [
      "Developed an app and website for managing over 30,000 students and teachers in Cambodia.",
      "Implement important UIs such as “Update student profile”, “Notifications”, “Input score”, etc. as well as their features",
      "Experience in using Redux Toolkit and Redux Toolkit Query to handle API",
      "Demonstrated adeptness in project coordination, fostering strong collaborations with team members, overseeing component management, structuring projects effectively, and adeptly handling data",
    ],
    techStacks: ["React Native", "TypeScript"],
  },
  {
    title: "Netcompany Social Suggestion",
    role: "Frontend developer",
    description: [
      "Contributing to the Frontend website that helps employees find their nearby interesting places supported by more than 1000 people in Netcompany.",
      'Develop responsive UIs of components including “HomeScreen", “Search Location”, “Register and Update location”, “Itineraries”, etc.',
      "Architected and implemented robust state management using Redux Toolkit, enhancing app performance and user experience by streamlining state updates and minimizing re-renders",
      "Using Pusher service and Google Maps API to develop the “Real-time notifications” and “Get current location” features",
    ],
    techStacks: ["ReactJS", "TailwindCSS", "Google Maps API"],
  },
  {
    title: "RMITinder",
    role: "Frontend developer",
    description: [
      "Implement a mobile-first front-end website dating platform tailored specifically for RMIT University students.",
      "Utilizing grid systems for optimal visual organization and user experience for “Chatbox”, “Ideal match”, etc.",
      "Identified and resolved UI bugs in “Chat box” including “Load more message”, length of “Chat content card”, and unchanged position in chat after clicking the “Load more previous” button in chat.",
    ],
    techStacks: ["ReactJS", "Tailwind CSS"],
  },
  {
    title: "VF Corporation",
    role: "Individual",
    description: [
      "This is my first project that I have done since I started to learn about developing websites and it is a game-selling website",
    ],
    techStacks: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "My Dictionary",
    role: "Frontend developer",
    description: [
      "The project is an iOS English-English dictionary app",
      "Experience with dictionary API and using Swift and SwiftUI to develop the app",
    ],
    techStacks: ["Swift", "SwiftUI"],
  },

  {
    title: "RMIT Grocery app",
    role: "Frontend developer",
    description: [
      "The project is an Android app that is about selling products from the user side while being able to create, add, and delete store items from the admin side.",
    ],
    techStacks: ["Java, Android Studio"],
  },
];
