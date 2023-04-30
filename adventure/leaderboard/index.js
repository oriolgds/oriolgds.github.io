const tbody = document.getElementById("tbody");
const spinner = document.getElementById("spinner");
const url = "http://localhost/adventure%20jam/";

const xhr = new XMLHttpRequest();
const fetch = ()=>{
  xhr.open('GET', url + `fetch.php`, true);
  xhr.onload = function() {
    if (this.status === 200) {
      previousJSON = this.responseText;
      const data = JSON.parse(this.responseText);
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
      spinner.remove();
    } else {
      console.error('Error: ' + this.status);
    }
  };
  xhr.send();
}
fetch();
function resize(){
  $('.container').height(window.innerHeight);
}
resize();
window.onresize = resize;