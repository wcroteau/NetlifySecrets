const buttonEl = document.querySelector("button");
const secretEl = document.querySelector("#secret_container");

async function handleButtonClick() {
  const res = await fetch("/api/secret");
  const data = await res.json();
  console.log(data);

  secretEl.innerHTML = `
    <h2>Message: ${data.message}</h2>
    <h2>Secret: ${data.mySecret}</h2>
  `;
}

buttonEl.addEventListener("click", handleButtonClick);
