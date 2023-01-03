const express = require("express")
const router= express.Router()
const {getgoals,setgoals,updategoals,deletegoals} = require("../controllers/goalcontroller")
router.route('/').get(getgoals).post(setgoals)
// router.get('/',getgoals)
// router.post('/',setgoals)
//this /:id means whatever you write on url after final / is saved in id varible
// router.put('/:id',updategoals)
// router.delete('/:id',deletegoals)
router.route('/:id').put(updategoals).delete(deletegoals)
 

module.exports = router