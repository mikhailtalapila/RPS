const contacts = [
  "Chris:1233452342",
  "Sarah:1234342561",
  "Bill:4322345632",
  "Mary:2512342345",
  "Dianne:123423452",
];

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "contact not found";
  }
});
