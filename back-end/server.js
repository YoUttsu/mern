//you can use npm run "script name"//("" dont add this)// to run any script which are specified in package.json
//to install something as devdependencies you have to use npm i -D packagename (usually you install nodemon as devdependencies ✌️)

//git init to initialize new git project
//git git add filename(or . to add all) // to add that file
//git commit -m "commit comment"//this will commit everything that is previously added via add command
//git status to see which files are not commited 
//to create branch you can do "git branch branchname"
//git checkout branchname to login into the branchname branch // now any changes that may happen to this branch will not be affected to the main branch and when you switch to master branch that changes (like files)will not be visible
// git merge branchname (to merge that branch to main branch)
 //to make this project into github repo you just need to make github repo and follow instructions to make this into repo
 //after making changes you can use "git push" command to push it to the github
 // others can clone your repo by "git clone https://github.com/YoUttsu/mern.git"

 const express = require("express")
 const dotenv = require("dotenv").config()//config allows us to have env files with our varibles init
 const port = process.env.port || 5000//to get environment varibles which are sensetive and private
 const {errorHandler} =  require("./middleware/errormiddleware")
 const app = express()
 app.use(express.json()) //http cant send json data if you dont put this middleware in
 app.use(express.urlencoded({extended:false}))// same as above but for from data 
 app.use("/api/goals",require('./routes/goalroutes'))
 app.use(errorHandler)//this has to be after router
 app.listen(port,()=>{
   console.log(port); 
})
