---
DateDue: 
Title: "React Client and Server Components "
Type: D
tags:
  - React
DateStarted: 2024-01-17
DateModified: 2024-01-17
DateDo: 
DateDone: 
status:
---

# React Client and Server Components

## ![](z-Assets/z-O-React-Server%20Components.png)

## Server and Client Environments

### Client

- browser on a user’s device that sends a request to a server for your application code
- It then turns the response it receives from the server into an interface the user can interact with

### Server

- the computer in a data center that stores your application code, receives requests from a client, does some computation, and sends back an appropriate response.

### Each environment has its own set of capabilities and constraints

- by moving rendering and data fetching to the server, you can reduce the amount of code sent to the client, which can improve your application's performance
- But to make your UI interactive, you need to update the DOM on the client.

### Therefore, the code you write for the server and the client is not always the same

- Certain operations (e.g. data fetching or managing user state) are better suited for one environment over the other.

## Network Boundary

### a conceptual line that separates the different environments

### In React, you choose where to place the server-client network boundary in your component tree.

### It's good practice to move your network boundary close to the _leaves_ of your component tree

- can improve your application's performance by reducing the amount of code sent to the client.

## 📌[NextJS](../../../../../React-Full-Stack/Next.js/O-NextJS.md)

### uses React Server Components by default

- a new feature that allows React to render on the server to improve performance
- Server Components don't support `useState`
  - you'll need to use a Client Component instead.
  - fix this by moving the interactive "Like" button to a Client Component
