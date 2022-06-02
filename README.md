# [wetbat.filipe.xyz](https://wetbat.filipe.xyz/) MVP

This prototype was built with React and NodeJS, both in Typescript

The backend was built with [tsed.io](https://tsed.io/) framework, using PostgreSQL as database and Prisma as ORM

_Ts.ED is a Node.js Framework on top of Express/Koa.js. Written in Typescript, it helps you build your server-side application easily and quickly_

- You can preview the MVP at [wetbat.filipe.xyz](https://wetbat.filipe.xyz/)

- You can read the server docs at [wet-bat.herokuapp.com/doc](https://wet-bat.herokuapp.com/doc) 



## Installation
To run this prototype you will have to consider 2 parts:
* Client: You'll have to build this project and deploy it to a web server.
* Server: You'll have to deploy it too in order to make your client useful.

## Requirements
* Nodejs
* yarn
* Postgres server

## Building client
To clone the client execute the following commands:

    git clone https://github.com/LFSousa/wet-bat.git
    cd wet-bat
    yarn


Now you need to setup your client environment variables to include your server url  
Just update `src/.env` file, then run

    yarn start

Then you'll be running the React development server.
If you want to deploy it, run

    yarn build


# Running server
## Preparing the server
The server is in `/server` directory. Navigate to it.

To run the server you need to setup your environment variables. You can run `cp .env.example .env` and modify  the `.env` content.

## Preparing database (apply migrations)
In order to apply the migrations and seed the locations table, you need to run

    npx prisma migrate dev

To manually run the seed script, run

    npx prisma db seed

## Running the server
To run the server just run

    yarn start

Now both client and server are running


# Previews
![Preview](https://i.imgur.com/fi8lo3k_d.webp?maxwidth=760&fidelity=grand)
![Preview](https://i.imgur.com/DGsaU8M_d.webp?maxwidth=760&fidelity=grand)
![Preview](https://i.imgur.com/aZFpFX0_d.webp?maxwidth=760&fidelity=grand)
![Preview](https://i.imgur.com/yVDucvk_d.webp?maxwidth=760&fidelity=grand)
