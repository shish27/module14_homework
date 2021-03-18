const resultNode = document.querySelector('.result');
const btnNode = document.querySelector('.btn');
const selectNode = document.querySelector('.select');
const tableNode= document.querySelector('.table');
const tableRow = tableNode.querySelector('.row');
  
function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
 xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };

  xhr.send();
};

function addResult (apiData){
  tableNode.removeAttribute('hidden')
  let row="";
    for (let key in apiData){
      if (key===selectNode.value){
        let rows=`<th>${apiData[key].q1}</th>
                  <th>${apiData[key].q2}</th>
                  <th>${apiData[key].q3}</th>
                  <th>${apiData[key].q4}</th>`
    row=row+rows;              
    };
  };
  tableRow.innerHTML=row;
};

btnNode.addEventListener('click', () => {
  selectNode.value !=0 ?            useRequest('https://raw.githubusercontent.com/shish27/module14_homework/main/otchet%20dlya%2014.3.json', addResult) :  alert("Выберите, пожалуйста, год");
  });