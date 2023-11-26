const getApiHealth = (req,res)=>{
    res.json({
        success:true,
        message:"server is running"
    })
}
export {getApiHealth} ;