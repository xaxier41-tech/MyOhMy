function notify(buttonName) {
  fetch("/api/notify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ buttonName })
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
}
