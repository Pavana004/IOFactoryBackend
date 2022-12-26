const router = require("express").Router();
const moviedata = require("./modal");




//post

router.post("/insert", async (req, res) => {
    try {
       
        const Exitdata = await moviedata.findOne({ movie_name: req.body.movie_name })
        if (Exitdata) {
            return res.status(400).json("Movie Already Register");
        }
        const data = new moviedata(req.body);
        const result = await data.save();
        res.status(200).json(result);

    } catch (error) {
        res.status(500).send({ message: "INPUT ERROR" });
    }


});


//update


router.put("/update/:id", async (req, res) => {
    try {

        const find_data = await moviedata.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(find_data);


    } catch (error) {

        res.status(500).send({ message: "INPUT ERROR" });

    }
})

//get


router.get("/list", async (req, res) => {
    try {

        const movies_data = await moviedata.find();
        res.status(200).json(movies_data);

    } catch (error) {

        res.status(500).send({ message: "INPUT ERROR" });

    }

});

router.get("/find/:id", async (req, res) => {
    try {

        const movies_data = await moviedata.findById(req.params.id);
        res.status(200).json(movies_data);

    } catch (error) {

        res.status(500).send({ message: "INPUT ERROR" });

    }

});



// delete 


router.delete("/delete/:id",async(req,res)=>{
    try {

       await moviedata.findByIdAndDelete(req.params.id);
       res.status(200).json("User Deleted Successfully");

        
    } catch (error) {
        res.status(500).send({ message: "INPUT ERROR" });
    }
})



module.exports = router;