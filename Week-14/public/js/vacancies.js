const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}

fetch("/api/vacancies", {
  headers: {
    Authorization: "Bearer " + token
  }
})
.then(res => res.json())
.then(data => {
  const list = document.getElementById("vacancyList");

  data.forEach(v => {
    const div = document.createElement("div");
    div.className = "vacancy-card";
    div.innerHTML = `
      <h3>${v.title}</h3>
      <p><b>Company:</b> ${v.company}</p>
      <button style="margin-top:10px;">Apply</button>
    `;
    list.appendChild(div);
  });
});


