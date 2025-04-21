<h1 style="display:flex; gap:1rem;color:#155dfc;">VOTEWISE <img width="40px" style="background-color:white" src="./client/public/image.png" alt="desktop view" ></h1>


This website is similar to [change.org](https://www.change.org/), here you can <b>create petitions and sign others petitions</b>.

<hr height="20">


## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Setup Instructions](#Setup-instructions)
4. [Envirnment Variables](#envirnment-variables)
5. [Deployment](#deployment)
6. [Future Enhancements](#future-enhancements)



## Features
- See trending Petitions 
- Create / Delete your Petitions
- Sign others Petitions
- Filter Petitions by there tag names


## Tech Stack
- ### Frontend
   - React 
   - Tailwind

- ### Backend
   - MongoDb(Database)   
   - Express
   - Node.js
   - Mongoose

- ### Deployment 
   - Netlify (For Frontend)   
   - Render (For Backend)   

## Setup Instructions
   <h3>Prerequisites</h3>   
   
   1. Install [Node.js](https://nodejs.org/en) and npm.

   ### Clone the Repository
   ```
   git clone https://github.com/Roshanbhagat021/VoteWise.git
   cd VoteWise
   ```

   ### Install Dependencies 

   For Frontend

   ```bash
   cd client
   npm install
   ```
   For Backend

   ```bash
   cd server
   npm install
   ```

   ### Run Localy

   For Frontend 

   ```bash
   cd client
   npm run dev
   ```
   For Backend

   ```bash
   cd server
   npm start
   ```

   >[!NOTE]
   > Note: Server will run on http://localhost:8080 locally.
   

   Visit <code>http://localhost:5173</code> in your browser to access the website. 


## Envirnment Variables

This project uses a <code>.env</code> file to securely store API keys. Create a <code>.env</code>  file in the client and server directory with the following keys:

```
<!-- For Frontend -->
VITE_API_BASEURL = your-server-base-url

<!-- For Backend -->
mongoURL = your-mongodb-connection string

```


## Devlopment

  - Frontend deployed in [Netlify](https://www.netlify.com/)
  - Backend deployed in [Render](https://render.com/)



## Future Enhancements

- Add polls feature to website
- Dark mode light mode











