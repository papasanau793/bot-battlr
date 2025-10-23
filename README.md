obot_face: Bot Battlr
Bot Battlr is a fun mini React web app where you can build your own custom bot army by selecting from a list of available bots! Practice your skills in React components, props, state management, events, and data fetching using a local JSON server.

:rocket: Features
View a collection of all bots
Enlist a bot to your army by clicking it (only once)
Release a bot from your army by clicking it again
Discharge (delete) a bot from your army forever with a red "X" button
Clean and responsive horizontal card layout
:hammer_and_wrench: Technologies Used
React (Create React App)
JSON Server
JavaScript (ES6+)
CSS (custom styling)
:package: Getting Started
1. Clone the Repo
git clone https://github.com/Imani901/bot-battlr.git
cd bot-battlr

### 2. npm install

### 3. Create a db.json file in the root directory and paste the bot data into it.

then run 
npx json-server --watch db.json --port 8001
npm start

project structure

bot-battlr/
│
├── public/
├── src/
│   ├── components/
│   │   ├── BotCard.js
│   │   ├── BotCollection.js
│   │   └── YourBotArmy.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── db.json
├── package.json
└── README.md

Functional Requirements
 Display all bots using GET /bots

 Enlist bot into YourBotArmy (no duplicates)

 Release bot from army on click

 Discharge (delete) bot using DELETE /bots/:id

 Responsive and clean layout