addEventListener('fetch', event => { event.respondWith(sendRequest(event.request))
})
async function sendRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname
  const params = url.searchParams
  const endpoint = 'https://order-sg.codashop.com/initPayment.action'
  const id = params.get('id')
  const zone = params.get('zone')
  try {
    if (!id) {
      return new Response('Bad request')
    }
    // Kode utama akan ada disini
      if (path.includes('/ff')) {
      const body = `voucherPricePoint.id=8050&voucherPricePoint.price=1000.0&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=FREEFIRE&shopLang=id_ID&voucherTypeId=1&gvtId=1`
      const request = new Request(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body
      })
      const response = await fetch(request)
      const data = await response.json()
      return new Response(data.confirmationFields.roles[0].role)
    }
    else {
      return new Response('Bad request')
    }
  }
  catch (error) {
    return new Response('Not found')
  }
}
