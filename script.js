
async function getRequest(url) {

    console.log(url);

    let result = await fetch(url, { method: 'GET', credentials: 'include' })

    return result.json().then(result => result);
}

async function postRequest(url, body) {

    console.log(url);

    let result = await fetch(
        url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include',
            body: body
        })

    return result.json().then(result => result);
}

let user = {
  'username': 'admin',
  'password': 'admin'
}

async function sendLoginRequest() {
  await fetch('http://localhost:8081/sanarip-tamga/api/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      credentials: 'include'
  }).then((response) => response.json())
  .then((responseData) => {
      console.log(responseData)
  })

}
