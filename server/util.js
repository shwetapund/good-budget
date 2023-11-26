const responder = ({res, success, data, message})=>{
   
   return res.json({
        success: success || false,
        message: message || null,
        data: data || null
    });
}

export {responder};