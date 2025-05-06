
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {return response.json()})
    .then(data => data.forEach(data => {
        const el = `
        <h51>${data.title}<h5>
        <img src=${data.thumbnail} alt=${data.title} width="100" height="100">
        <p>${data.content}</p>
        `
        document.querySelector('div').insertAdjacentHTML('beforeend', el)
    })  )
   .catch(error => console.log(error));