# Dalmia-Project
#### A vehicle request and approval website for Dalmia Bharat Refactories Limited

## This is the demo code of main website 

### To run this website in your pc 

1. Click on code button above and download zip
2. Extract zip in your desired location
3. Install any ide's (like vsCode), nodejs, mongoose, mongosh and hyper terminal(optional) in your pc 
4. If using vscode open project in vscode and then open terminal of vs code
5. If you have any other ide open up project on that ide, open command prompt or hyper terminal and change directory to current location of your file
6. type "npm i" inside terminal and press enter (it will take some time to complete as it installing all required dependency in backend)
7. Again type "node index.js" to run the website (after some time it will show a message "server running on https:localhost:3000" 
8. If it shows any error then go to index.js file<br>
    a. comment all uncommented line<br>
    b. uncomment line 4
9. After that go to list.ejs file<br>
    a. comment line 39 which has value "<%= item.id %>"<br>
    b. uncomment line 40 which has value <%= item.employeeNumber %>
10. Now press ctrl + c to exit from error line and again type "node index.js" not it should work fine

### Imp Points

1. Website run in url "http://localhost:3000" this is the root page, here you can see a form which user can fill and submit
2. "http://localhost:3000/login" will open up a login form <br>
    email :- admin1@mail.com<br>
    password:- admin123
3. After successfull login you can see home page which will be initially empty when you run without any submission 
4. Page get's refresh after every 20 second
4. If any request is made through form then details of employee will be available to admin home page after website gets refresh
5. In navbar of admin webpage we can see three section
    home:- all new request can be seen here (admin can either allow or deny a perticular request)
    allow:- all allowed request can be seen here (admin can either deny or delete a perticular request)
    deny:- all denied request can be seen here (admin can either allow or delete a perticular request)
    
### Below are the images for of website
    
![image](https://user-images.githubusercontent.com/83783169/188070032-13d53620-edad-4063-8550-a01507a38255.png)
![image](https://user-images.githubusercontent.com/83783169/188070074-2ff57fa1-5685-4e23-9ba9-c56af683caae.png)

![image](https://user-images.githubusercontent.com/83783169/188082552-ddfd53e1-0ef8-42fe-8f9f-8e53f038218d.png)
![image](https://user-images.githubusercontent.com/83783169/188069268-9d9a3a93-f5ae-40bb-9500-1e57a390ce4f.png)

![image](https://user-images.githubusercontent.com/83783169/188070195-f05d4258-3612-4b29-987e-53621d6eeed0.png)

![image](https://user-images.githubusercontent.com/83783169/188069438-a3047318-50d3-4271-a8dd-a643971ae4f7.png)
![image](https://user-images.githubusercontent.com/83783169/188069218-3396e2de-e8a6-4cf7-a9e2-06b8af0128ca.png)
![image](https://user-images.githubusercontent.com/83783169/188069329-91f99518-cfac-4ece-af0f-8cbb2a13a1a2.png)
![image](https://user-images.githubusercontent.com/83783169/188069375-a7acd900-e518-40d3-ab7c-3d6e30cf15cb.png)
