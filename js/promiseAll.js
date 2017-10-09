const request = require('superagent')

const ids = ['59c8823c19800577e9828a22', '59c8829ef61a357857ea3e3f']

const getTitle = (id) => {
  return new Promise(function(resolve, reject) {
    request(`localhost:8888/form/${id}`)
      .then(response => resolve(response.body[0].title))
      .catch(error => reject(error))
  });
}

const promises = ids.map(id => getTitle(id))

Promise.all(promises)
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))


// request('localhost:8888/form/59c8823c19800577e9828a22')
//   .then(response => {
//     const myData = [response.body[0].title]
//     return new Promise(function(resolve, reject) {
//       request('localhost:8888/form/59c8829ef61a357857ea3e3f')
//       .then(response2 => resolve(response2, myData))
//       .catch(error => reject(error, myData))
//     })
//   })
//   .then((response, data) => {
//     console.log('Data is: ', data)
//     console.log('response is: ', response.body[0])
//     // data.push(response.title)
//   })
//   .catch(error => console.log(error))
