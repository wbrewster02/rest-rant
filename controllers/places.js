const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
  db.Places.find()
  .then( (places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
  db.Places.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Places.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.Places.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.status(303).redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.status(404).render('error404')
  })
})

router.delete('/:id', (req, res) => {
  db.Places.findByIdAndDelete(req.params.id)
  .then(place => {
    res.status(303).redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.status(404).render('error404')
  })
})

router.get('/:id/edit', (req, res) => {
  db.Places.findById(req.params.id)
  .then(place => {
    res.render('../views/places/edit', { place })
  })
  .catch(err => {
    res.status(404).render('error404', err)
  })
})

router.post('/:id/rant', (req, res) => {
  db.Places.findById(req.params.id)
  .then(place => {
    db.Comment.create(req.body)
    .then(comment => {
      place.comments.push(comment.id)
      place.save()
      .then(() => {
        res.redirect(`/places/${req.params.id}`)
      })
      .catch(err=>{
        console.log(err)
        res.status(404).render('error404')
      })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.delete('/:id/rant/:rantId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.rantId)
  .then(place => {
    res.status(303).redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.status(404).render('error404')
  })
})

module.exports = router
