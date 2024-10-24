const asynHandler = (requestHandler) =>{
     (req,res,next) => {
          Promise.resolve(requestHandler(req,res,next)).catch((err) => (err))
     }
}



export {asynHandler}

// const asynHandler =(fn) => async (req,res,next) => {
//      try{
//           await fn(req,res,next)
          

//      }catch (error) {
//           res.status(err.code || 500).json({
//                sucess:false,
//                messaage: err.messaage
//           })

//      }
// }