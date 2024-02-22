export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //todo : we will not hard-code the server here
    const response = await fetch('http://localhost:8080/products')
    const data = response.json()
    resolve({ data })
  })
}

export function fetchProductsByFilters(filter) {
  //filter = {'catagory': "smartphone"}
  let queryString = ''
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`
  }

  return new Promise(async (resolve) => {
    //todo : we will not hard-code the server here
    const response = await fetch(
      'http://localhost:8080/products?' + queryString
    )
    const data = response.json()
    resolve({ data })
  })
}
