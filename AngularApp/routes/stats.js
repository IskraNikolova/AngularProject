const express = require('express')
const productsData = require('../data/products')
const authCheck = require('../middleware/auth-check')
const usersData = require('../data/users')

const router = new express.Router()

router.get('/', (req, res) => {
  const products = productsData.total()
  const users = usersData.total()

  res.status(200).json({
    products,
    users
  })
})

router.get('/users/all', (req, res) => {
  const users = usersData.all()

  res.status(200).json(users)
})

router.post('/users/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  const user = usersData.findById(id)

  if (!user) {
    return res.status(200).json({
      success: false,
      message: 'User does not exists!'
    })
  }

  usersData.delete(id)

  return res.status(200).json({
    success: true,
    message: 'Users deleted successfully!'
  })
})

module.exports = router
