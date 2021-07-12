const router = require('express').Router()

const models = require('../models')

router.get('/', (req, res) => {
  models.Wallet.find().then((foundWallets) => {
    res.status(200).json({ wallets: foundWallets })
  })
  .catch((error) => res.send({ error }))
})

router.get('/:id', (req, res) => {
  models.Wallet.findOne({_id: req.params.id}).then((wallet) => {
    res.status(200).json({ wallet })
  })
  .catch((error) => res.send({ error }))
})

router.post('/', (req, res) => {  
  models.Wallet.create(req.body).then((wallet) => {
    res.status(201).json({ wallet })
  })
  .catch((error) => {
    console.log(error);
    res.status(400)
  })
})

router.put('/:id', (req, res) => {

  
  const { crypto, balance, walletAddress } = req.body
  
  models.Wallet.update({
    _id: req.params.id
  }, {$set: {
    crypto,
    balance,
    walletAddress,
  }})
  .then((wallet) => {
    res.status(201).json({ wallet })
  })
  .catch((error) => res.send({ error }))
})

router.delete('/:id', (req, res) => {
  models.Wallet.deleteOne({ _id: req.params.id })
  .then((wallet) => res.status(201).json({ wallet }))
  .catch((error) => res.send({ error }))
})

module.exports = router