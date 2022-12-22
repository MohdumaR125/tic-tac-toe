const mongoose =require("mongoose")
async function ConnectDatabase(){
    console.log(process.env.DB)
    return new Promise((resolve,reject)=>{
        mongoose.connect(process.env.DB,(err)=>{
            if(err){
                console.log(err);
                reject(err)
            }else{
                console.log("DB connected")
                resolve()
            }
        })
    })
  

}
module.exports=ConnectDatabase