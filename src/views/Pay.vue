<template>
  <VForm @submit.prevent="doCheckout">
    Pay Screen
    <div>
      <div id="credit-card"></div>
    </div>
    <google-pay-button
      environment="TEST"
      button-color="default"
      button-type="buy"
      v-bind:paymentRequest.prop="paymentRequest"
      v-on:loadpaymentdata="onLoadPaymentData"
      v-on:error="onError"
    />
  </VForm>
</template>

<script setup lang="ts">
  import '@google-pay/button-element'

  const cardPaymentMethod: google.payments.api.PaymentMethodSpecification = {
    type: 'CARD',
    parameters: {
      allowedCardNetworks: ['VISA', 'MASTERCARD'],
      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
    },
    tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      parameters: {
        gateway: 'example',
        gatewayMerchantId: 'gatewayMerchantId',
      },
    },
  }
  const paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [cardPaymentMethod],
    merchantInfo: {
      merchantId: 'BCR2DN4TRSRIJ5AT',
      merchantName: 'Byna',
    },
    transactionInfo: {
      displayItems: [
        {
          label: 'Hora de academia',
          price: '10',
          type: 'LINE_ITEM',
        }
      ],
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'BRL',
      countryCode: 'BR',
    },
  }

  async function onLoadPaymentData(data) {
    console.log('onLoadPaymentData', data)
  }
  async function onError(data) {
    console.log('onError', data)
  }
  async function doCheckout() {
    console.log('check out')
  }
</script>
