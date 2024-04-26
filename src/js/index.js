const getDataBtn = document.querySelector(".data-btn");
const tableBody = document.querySelector(".table-body");
const tableHeader = document.querySelector(".table-header");
const searchInput = document.querySelector(".search-input");
const dropdown = document.querySelector(".dropdown");
const sortDropdown = document.querySelector(".dropdown-content");

getDataBtn.addEventListener("click", getData);
searchInput.addEventListener("input", searchInData);
sortDropdown.addEventListener("change", sortData);

function getData() {
  fetch("http://localhost:3000/transactions")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let transaction = "";
      tableHeader.classList.remove("hidden");
      getDataBtn.classList.add("hidden");
      searchInput.classList.remove("hidden");
      dropdown.classList.remove("hidden");
      data.forEach((item) => {
        const date = new Date(item.date);
        const transactionDate = date.toLocaleDateString("Fa-Ir");
        transaction += `
          <tr>
            <td>${item.id}</td>
            <td>${item.type}</td>
            <td>${item.price}</td>
            <td>${item.refId}</td>
            <td>${transactionDate}</td>
          </tr>
       `;
      });

      tableBody.innerHTML = transaction;
      console.log(data);
    })
    .catch();
}
function searchInData(e) {
  const query = e.target.value;
  // console.log(query);
  fetch(`http://localhost:3000/transactions?refId_like=${query}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let transaction = "";
      tableHeader.classList.remove("hidden");
      getDataBtn.classList.add("hidden");
      searchInput.classList.remove("hidden");
      dropdown.classList.remove("hidden");
      data.forEach((item) => {
        const date = new Date(item.date);
        const transactionDate = date.toLocaleDateString("Fa-Ir");
        transaction += `
          <tr>
            <td>${item.id}</td>
            <td>${item.type}</td>
            <td>${item.price}</td>
            <td>${item.refId}</td>
            <td>${transactionDate}</td>
          </tr>
       `;
      });

      tableBody.innerHTML = transaction;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
function sortData() {
  console.log(sortDropdown.value);
  if (sortDropdown.value == "desc") {
    console.log(sortData.target);
    fetch(`http://localhost:3000/transactions?_sort=price&_order=asc`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let transaction = "";
        tableHeader.classList.remove("hidden");
        getDataBtn.classList.add("hidden");
        searchInput.classList.remove("hidden");
        dropdown.classList.remove("hidden");
        data.forEach((item) => {
          const date = new Date(item.date);
          const transactionDate = date.toLocaleDateString("Fa-Ir");
          transaction += `
          <tr>
            <td>${item.id}</td>
            <td>${item.type}</td>
            <td>${item.price}</td>
            <td>${item.refId}</td>
            <td>${transactionDate}</td>
          </tr>
       `;
        });

        tableBody.innerHTML = transaction;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  } else if (sortDropdown.value == "asc") {
    fetch(`http://localhost:3000/transactions?_sort=price&_order=desc`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let transaction = "";
        tableHeader.classList.remove("hidden");
        getDataBtn.classList.add("hidden");
        searchInput.classList.remove("hidden");
        dropdown.classList.remove("hidden");
        data.forEach((item) => {
          const date = new Date(item.date);
          const transactionDate = date.toLocaleDateString("Fa-Ir");
          transaction += `
          <tr>
            <td>${item.id}</td>
            <td>${item.type}</td>
            <td>${item.price}</td>
            <td>${item.refId}</td>
            <td>${transactionDate}</td>
          </tr>
       `;
        });

        tableBody.innerHTML = transaction;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  } else {
    getData();
  }
}

//   data.sort((a, b) => a.refId.localeCompare(b.refId))
