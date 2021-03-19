const btn = document.querySelector('.j-btn');
const contentResult = document.querySelector('.result ul');

btn.addEventListener('click', () => {
    const input = document.querySelector('.j-input').value;
    let valueResult = '';
    fetch(`https://jsonplaceholder.typicode.com/users/${input}/todos`)
    .then((response) => {
        console.log('response', response);

        const result = response.json();
        console.log('result', result);
        return result;
    })
    .then((data) => {
        if (data.length !== 0) {
            console.log(data); 
            
            data.forEach(item => {
                if(item.completed === true) {
                    valueResult = `<del><li><b>Описание задачи:</b><br> <span>${item.title}</span></li></del>`;
                } else {
                    valueResult = `<li><b>Описание задачи:</b><br> <span>${item.title}</span></li>`;
                }
                contentResult.innerHTML += valueResult;
            });
        } 
        else {
            contentResult.innerHTML = 'Пользователь с указанным id не найден';
        }
    })
    .catch(() => {
        console.log('error');
    })
})