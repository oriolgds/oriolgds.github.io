const tbody = document.getElementById("tbody");
const spinner = document.getElementById("spinner");
const url = "http://localhost/adventure%20jam/";
let lastTr = 0;
let previousJSON = "";

const xhr = new XMLHttpRequest();
const fetch = (limit)=>{
  lastTr = limit;
  xhr.open('GET', url + `fetch.php?limit=${limit}&begin=0`, true);
  xhr.onload = function() {
    if (this.status === 200) {
      if(this.responseText == previousJSON){
        window.removeEventListener('scroll', loadMoreRows);
        spinner.remove();
      }
      previousJSON = this.responseText;
      const data = JSON.parse(this.responseText);
      console.log(this.responseText);
      let template = "";
      let i = 1;
      data.forEach(row => {
        template += `
        <tr class="rounded rounded-3">
          <th scope="row">${i}</th>
            <td>${row.name}</td>
            <td>${row.time + ":" + row.milseconds}</td>
            <td>${row.money}</td>
            <td>${row.date}</td>
        </tr>
        `;
        i++;
      });
      tbody.innerHTML = template;
    } else {
      console.error('Error: ' + this.status);
    }
  };
  xhr.send();
}
fetch(30);
function loadMoreRows(){
  var scrollFromBottom = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
  if(scrollFromBottom <= 50){
    lastTr += 10;
    fetch(lastTr);
  }
}
window.addEventListener('scroll', loadMoreRows);