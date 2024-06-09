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
    else {
      return new Response('Bad request')
    }
  }
  catch (error) {
    return new Response('Not found')
  }
}
