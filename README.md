# Dalmia-Project
#### A vehicle request and approval website for Dalmia Bharat Refactories Limited

## This is the demo code of that main website 

### To run this website in your pc 

1. Click on code button above and download zip
2. Extract zip 
3. Install any ide's (like vsCode), nodejs, mongoose and mongosh in your pc
4. open project in vscode and then open terminal of vs code
5. If you have any other ide open command prompt or hyper terminal and change directory to current location of your file
6. type "npm i" inside terminal to install all dependecy
7. again type "node index.js" to run the website

### Imp Points

1. Website run in "localhost:3000" this is the root page, here you can see a form which user can fill and submit 
2. "localhost:3000/login" will open up a login form <br>
    email :- admin1@mail.com<br>
    password:- admin123
3. After successfull login you can see home page which will be initially empty when you run without any submission 
4. Page get's refresh after every 20 second
4. If any request is made through form then details of employee will be available to admin home page after website gets refresh
5. In navbar of admin webpage we can see three section
    home:- all new request can be seen here (admin can either allow or deny a perticular request)
    allow:- all allowed request can be seen here (admin can either deny or delete a perticular request)
    deny:- all denied request can be seen here (admin can either allow or delete a perticular request)
    
