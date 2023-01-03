//function that executes when req,res cycle happens
const errorHandler = (err,req,res,next)=>{
    const statusCode= res.statusCode ? res.statusCode : 500
    res.status(statusCode)
    res.json({
        message:err.message,//err.message is property of error 
        stack: process.env.node_env === "production"?null:err.stack
    })

}
module.exports={errorHandler,}