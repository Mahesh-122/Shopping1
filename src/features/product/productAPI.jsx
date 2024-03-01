export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //todo : we will not hard-code the server here
    const response = await fetch('http://localhost:8080/products')
    const data = response.json()
    resolve({ data })
  })
}

export function fetchProductsByFilters(filter, sort) {
  //filter = {'catagory': ['laptops',"smartphone"]}
  //sort = {_sort:'price',_order:'desc'}
  //TODO = on server we will support multiple values in filter
  let queryString = '';
  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }
  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }
  
  return new Promise(async (resolve) => {
    //todo : we will not hard-code the server here
    const response = await fetch(
      'http://localhost:8080/products?' + queryString
    )
    const data = await response.json()
    resolve({ data })
  })
}
