const router = require('express').Router()
const Places = require('../models/places.js')

// More code here in a moment

// GET /places
router.get('/', (req,res) => {
  res.render('places/index', { places: Places })
})

router.get('/new', (req,res) => {
  res.render('places/new')
})

router.post('/', (req,res) => {
    if(!req.body.pic){
    //default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city){
      req.body.city = 'anytown'
    }
    if(!req.body.state) {
      req.body.state = 'USA'
    }
    Places.push(req.body)
    res.redirect('/places')
})

router.get('/:id', (req,res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }else if (!Places[id]) {
    res.render('error404')
  }else {
    res.render('places/show', { 
      place: Places[id],
      id
    })
  }
})

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!Places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { 
      place: Places[id],
      id
   })
  }
})

// router.get('/:id/edit',(req,res) => {
//   let id = Number(req.params.id)
//   res.render('places/edit', { 
//       place: Places[id],
//       id
//     })
// })

router.put('/:id',(req,res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!Places[id]) {
    res.render('error404')
  } else {
    if(!req.body.pic){
      //default image if one is not provided
      req.body.pic = Places[id].pic
    }
    if (!req.body.city){
      req.body.city = 'anytown'
    }
    if(!req.body.state) {
      req.body.state = 'USA'
    }
    Places[id] = req.body
    res.status(303).redirect(`/places/${id}`)
  }
})

router.delete('/:id', (req,res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!Places[id]) {
    res.render('error404')
  } else {
    Places.splice(id, 1)
    res.status(303).redirect('/places')
  }
})




module.exports = router
