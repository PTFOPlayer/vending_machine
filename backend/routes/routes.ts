import express from "express";
import Model from "../model/model"

const router = express.Router()

//metoda POST (dodawania)
router.post('/', async (req, res) => {
    var model = new Model({
        name: req.body.name,
        price: req.body.price,
        code: req.body.code
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

router.patch('/:id', async (req, res) => {
  try {
    var model = await Model.findById(req.params.id);
    if(model != null)
    {
      model.price = model.price - 1

      const newModel = await model.save()
      res.status(200).json(newModel)
    }
  } catch (error) {
    res.status(500).json("error")
  }
})
export = router;
