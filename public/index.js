const buttonEl = document.querySelector("button");
const secretEl = document.querySelector("#secret_container");

async function handleButtonClick() {
  const res = await fetch("/api/secret");
  console.log(res);
  const data = await res.json();
  console.log(data);

  secretEl.innerHTML = `<h2>slartibartfast: ${data}</h2>`;
}

buttonEl.addEventListener("click", handleButtonClick);
