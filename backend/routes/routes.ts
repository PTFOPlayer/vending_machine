import express from "express";
import Model from "../model/model"

const router = express.Router()

//metoda POST (dodawania)
router.post('/', async (req, res) => {
  const content1 = []
  for(const tempArray1 of req.body.slots.content){
    const content2 = []
    for(const tempArray2 of tempArray1){
        const contentT ={
        product: tempArray2.product,
        amount: tempArray2.amount
      };
      content2.push(contentT)
    }
    content1.push(content2)
  }
    var model = new Model({
        number: req.body.number,
        slots: {
          heigth: req.body.slots.heigth,
          width: req.body.slots.width,
          content: content1
        },
        coordinates:{
          x: req.body.coordinates.x,
          y: req.body.coordinates.y
        },
        coin_eating_chance: req.body.coin_eating_chance,
        stuck_product_chance: req.body.stuck_product_chance,
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

export = router;
