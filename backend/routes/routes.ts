import express from "express";
import Model from "../model/model"
import { machine, slot } from "./interface";

const router = express.Router()

//metoda POST (dodawania)
router.post('/', async (req, res) => {
    let content: slot[][] = new Array;
    let body = req.body
    if (body) {
        let data = body as machine
        for (var r of data.slots.content) {
            let ta = []
            if (r.length != 0) {
                for (const c of r ) {
                    ta.push(c)
                }
                content.push(ta)
            }
        }
    }
    var model = new Model({
        number: req.body.number,
        slots: {
            heigth: req.body.slots.heigth,
            width: req.body.slots.width,
            content: content
        },
        payment: req.body.payment
    })
    try {
        const newModel = await model.save()
        res.status(201).json(newModel)
    } catch (err) {
        model = new Model({
            code: null
        })
        res.status(400).json(model)
    }
})


//data to push
/*
{
	"number": 1,
  	"slots": {
	"heigth": 5,
      "width": 4,
      "content": [
        [{"amount":1,"product": "woda"}, {"amount":1,"product": "woda"},{"amount":1,"product": "woda"},{"amount":1,"product": "woda"},{"amount":1,"product": "woda"}],
        [{"amount":1,"product": "woda"}, {"amount":1,"product": "woda"},{"amount":1,"product": "woda"},{"amount":1,"product": "woda"},{"amount":1,"product": "woda"}],
        [{"amount":1,"product": "woda"}, {"amount":1,"product": "woda"},{"amount":1,"product": "woda"},{"amount":1,"product": "woda"},{"amount":1,"product": "woda"}],
        [{"amount":1,"product": "woda"}, {"amount":1,"product": "woda"},{"amount":1,"product": "woda"},{"amount":1,"product": "woda"},{"amount":1,"product": "woda"}]
        ]
},
  "payment": "cash"
}
*/

//metoda GET ALL (zobacz wszystkie)
router.get('/', async (req, res) => {
    try {
        const model = await Model.find()
        res.json(model)
    } catch (err) {
        res.status(500).json("error")
    }
})

//metoda GET BY NUMBER (zobacz po NUMBER)
router.get('/:number', async (req, res) => {
    try {
        const model = await Model.findOne({number: req.params.number});
        res.json(model)
    } catch (error) {
        res.status(500).json("error")
    }
})

//metoda GET ktora dodaje coin_eating_chance i stuck_product_chance
router.get('/machine/:number', async (req, res) => {
    try {
      const model = await Model.findOne({number: req.params.number});
      if (model) {
          model.coin_eating_chance = (Math.random() * (0.01 - 0.1) + 0.1)
          model.stuck_product_chance = (Math.random() * (0.01 - 0.1) + 0.1)
          res.status(201).json(model)
      }
    } catch (error) {
        res.status(500).json("error")
    }
})

router.get('/machine/random/random', async (req, res) => {
  let document_count = await Model.countDocuments({})
  console.log(document_count)
  let random_number = Math.floor(Math.random() * (document_count)) + 1
  console.log(random_number)
    try { 
      const model = await Model.findOne({number: random_number});
      if (model) {
          model.coin_eating_chance = (Math.random() * (0.01 - 0.1) + 0.1)
          model.stuck_product_chance = (Math.random() * (0.01 - 0.1) + 0.1)
          res.status(201).json(model)
      }
    } catch (error) {
        res.status(500).json("error")
    }
})


//metoda PATCH (zmniejsza pole w tablicy z x i y)
router.patch('/:number/:x/:y', async (req, res) => {
    try {
        let x: number = +req.params.x
        let y: number = +req.params.y
        const filter = { "number": req.params.number}
        const update = {$inc: { [`slots.content.${x}.${y}.amount`]: -1}}
        await Model.findOneAndUpdate(filter, update);
        console.log("UPDATE!")
        let model = await Model.findOne(filter);
        res.json(model)
    } catch (error) {
        res.status(500).json("error")
    }
})

export = router;
