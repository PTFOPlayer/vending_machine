import express from "express";
import Model from "../model/model"

const router = express.Router()

//metoda POST (dodawania)
router.post('/', async (req, res) => {
  const content = []
  for(const tempArray of req.body.slots.content){
        const contentT ={
        product: tempArray.product,
        amount: tempArray.amount,
        x: tempArray.x,
        y: tempArray.y
      };
    content.push(contentT)
  }
    var model = new Model({
        number: req.body.number,
        slots: {
          heigth: req.body.slots.heigth,
          width: req.body.slots.width,
          content: content
        },
        coordinates:{
          x: req.body.coordinates.x,
          y: req.body.coordinates.y
        },
        payment: req.body.payment
    })
    try{
        const newModel = await model.save()
        res.status(201).json(newModel)
    }catch(err){
        model = new Model({
            code: null
        })
        res.status(400).json(model)
    }
})

//metoda GET ALL (zobacz wszystkie)
router.get('/', async (req, res) => {
  try{
    const model = await Model.find()
    res.json(model)
  } catch(err) {
    res.status(500).json("error")
  }
})
//metoda GET BY ID (zobacz po ID)
router.get('/:id', async (req, res) => {
  try {
    const model = await Model.findById(req.params.id);
    res.json(model)
  } catch (error) {
    res.status(500).json("error")
  }
})

router.patch('/:id/:x/:y', async (req,res) => {
  try {
    const filter = { "_id": req.params.id, "slots.content.x": req.params.x, "slots.content.y": req.params.y}
    const update = { $inc: {"slots.content.$.amount": -1 }}
    await Model.findOneAndUpdate(filter, update);
    let model = await Model.findOne(filter);
    res.json(model)
  } catch (error) {
    res.status(500).json("error")
  }
})
export = router;
