const asyncHandler = (requestHandler) => {
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}
//this one method to use a async raper


export {asyncHandler}



//other mendot is diffetenrt using try catch

const asyncraper=(fun)=>async(req,res,next)=>{
    try {
        await fun(req,res,next)
    } catch (error) {
        res.status(err.code||404).json({
            success:false,
            message:err.message
        })
        
    }
}

export {asyncraper}
