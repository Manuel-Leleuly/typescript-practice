console.log("Time to get started...");

const userName = "Manuel";
console.log(userName);

const button = document.querySelector("button")!;

function clickHandler(message: string) {
  console.log("Clicked! " + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome"));
}

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) return n1 + n2;
  return;
}
