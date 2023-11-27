import { responder } from "./../util.js"

const getApiHealth = async (req, res) => {

   return res.status(201).json({
      success:true,
      message:"All is good"
   })
   // return responder({
   //    res,
   //    success: true,
   //    message: "server is running",
   //    statuscode: 401
   // })
}
export { getApiHealth };