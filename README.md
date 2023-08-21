# travel-search

Single page travel : Add and view travel details,

#### Pages :

1. Landing : '/'
2. Admin : '/dashboard'

### Technology user

- Server : NodeJS, TS, ExpressJS, MongoDb
- Client : ReactJs, ReduxToolKit

### Deployed Services

render.com

### Setup on local machine

1.  Create mongo db atlas instance
2.  create .env file in server folder
3.  add DB_URL=<value>
4.  Start the server
    `npm run dev`
5.  Start the client
    `npm run start`

### Possible improvements

1. Server

   - Validation could be moved to middleware
   - Custom Api handler

2. Client
   - NextJS instead of React for better routing
   - Loading mechanism on dashboard page
   - Server side rendering
   - Better validation for forms
   - Multiple selects
   - Better navigation
