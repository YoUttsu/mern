
const asyncHandler =  require("express-async-handler")

//@desc get goals
//@route GET/api/goals
//@access private
const getgoals = asyncHandler( async(req,res)=>{
    res.status(200).json({message:"get goals"})
})


//@desc set goals
//@route POST/api/goals
//@access private
const setgoals = asyncHandler( async(req,res)=>{
    if(!req.body.text){
        // res.status(400).json({message: " please add a text feild"})
        res.status(400)
        throw new Error('please add text feild')
    };
    res.status(200).json({message:"set goals"})
})


//@desc update goals
//@route PUT/api/goals/:id
//@access private
const updategoals = asyncHandler( async(req,res)=>{
    res.status(200).json({message:`update goal ${req.params.id}`})
})


//@desc delete goals
//@route DELETE/api/goals/:id
//@access private
const deletegoals = asyncHandler(  async(req,res)=>{
    res.status(200).json({message:`delete goal ${req.params.id}`})
})


module.exports={
    getgoals,
    setgoals,
    updategoals,
    deletegoals
}