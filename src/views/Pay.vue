<template>
  <VForm @submit.prevent="doCheckout">
    Pay Screen
    <div>
      <div ref="cardDiv"></div>
    </div>
    <VBtn
      primary
      id="paymentRequestButton"
      type="submit"
    > Pagar </VBtn>
  </VForm>
</template>

<script setup lang="ts">
  import '@google-pay/button-element'
  import { loadStripe, Stripe, StripeElements } from '@stripe/stripe-js';
  import axios from 'axios'
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router'

  // const cardPaymentMethod: google.payments.api.PaymentMethodSpecification = {
  //   type: 'CARD',
  //   parameters: {
  //     allowedCardNetworks: ['VISA', 'MASTERCARD'],
  //     allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
  //   },
  //   tokenizationSpecification: {
  //     type: 'PAYMENT_GATEWAY',
  //     parameters: {
  //       gateway: 'example',
  //       gatewayMerchantId: 'gatewayMerchantId',
  //     },
  //   },
  // }
  // const paymentRequest: google.payments.api.PaymentDataRequest = {
  //   apiVersion: 2,
  //   apiVersionMinor: 0,
  //   allowedPaymentMethods: [cardPaymentMethod],
  //   merchantInfo: {
  //     merchantId: 'BCR2DN4TRSRIJ5AT',
  //     merchantName: 'Byna',
  //   },
  //   transactionInfo: {
  //     displayItems: [
  //       {
  //         label: 'Hora de academia',
  //         price: '10',
  //         type: 'LINE_ITEM',
  //       }
  //     ],
  //     totalPriceStatus: 'FINAL',
  //     totalPriceLabel: 'Total',
  //     totalPrice: '100.00',
  //     currencyCode: 'BRL',
  //     countryCode: 'BR',
  //   },
  // }

  const router = useRouter()

  const cardDiv = ref<HTMLDivElement>(null)

  let stripe!: Stripe
  let elements!: StripeElements

  onMounted(async () => {
    stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY)
    const { data: { clientSecret } } = await axios.post('http://localhost:4242/create-payment-intent')
    elements = stripe.elements({ clientSecret })
    const paymentelement = elements.create('payment')
    paymentelement.mount(cardDiv.value)
  })
  const doCheckout = async () => {
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    })
    if (error) {
      console.log(error)
      return
    }
    if (paymentIntent.status === 'succeeded') {
      router.push('/pagamento-concluido')
    }
  }
</script>
