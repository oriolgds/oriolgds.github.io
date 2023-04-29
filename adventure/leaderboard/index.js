const tbody = document.getElementById("tbody");
const url = "http://localhost/adventure%20jam/";



const xhr = new XMLHttpRequest();
const fetch = (limit)=>{
  xhr.open('GET', url + "fetch.php", true);
  xhr.onload = function() {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      let template = "";
      let i = 1;
      data.forEach(row => {
        template += `
        <tr>
          <th scope="row">${i}</th>
            <td>${row.name}</td>
            <td>${row.time}</td>
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
  xhr.send(JSON.stringify({limit: limit}));
}
fetch(10);
