import * as express from 'express'
import Stripe from 'stripe'

const app = express();

app.post('/create-checkout-session', async (req, res) => {
  // const key = 'pk_live_51LblXmB77aGH825rKMuF5r8UsnVRxjokLNutbs38mfs8Yxhe3apZsfAC7hX575ZxUEVX15jd4i5zTr4KLpyvssro00zkMyibpP'
  // const secret = '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'
  const testKey = 'pk_test_51LblXmB77aGH825rzillsl8s2OL2zcBtSlDUBmjprOzMqqfRJFprhaXt3zjZqRkTkmlTlr6C59MptrUsfc87Ija600ADr350L5'
  const testSecret = 'sk_test_51LblXmB77aGH825rzQWh0jUk6TL6JxJ680hP8LhzzV6Wa76TbUOJJYlsqOFF3VH2p7iw0ivS9AoRzNst8msDUi8f00soVfpcsi'
  
  const stripe = new Stripe(testKey, {
    apiVersion: '2022-08-01',
  })
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    currency: 'brl',
    success_url: 'http://localhost:5173/',
    cancel_url: 'http://localhost:5173/',
    line_items: [
      {
        price: '10',
        quantity: 1,
      }
    ]
  })
  res.redirect(303, session.url)
})

app.listen(4242, () => {
  console.log('Runnin on http://localhost:4242')
})