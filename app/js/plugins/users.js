(function() {
    const urlUsers = 'https://jsonplaceholder.typicode.com/users';
    let dataUser
    function sendRequest(method, url, body =null) {
        return fetch(url).then(response => {
            if(response.ok) {
                return  response.json()
            }
        })
    }
    
    const buttonFetch = document.querySelector('.js-fetch-button');
    buttonFetch.addEventListener('click', function() {
        sendRequest('GET', urlUsers)
        .then(data => {
            dataUser = data
            const element = document.querySelectorAll('.js-users')
            element.forEach((el)=> {
                const generator = new GenerateUserList(dataUser, el)
                generator.greateElemenet()
            })
        })
        .catch(err => console.log(err))
        buttonFetch.classList.add('hidden')
    })
})();