// const userData = ["Владимир", 20, "Москва"];
// console.log(userData);

// const [name, _, city] = userData;
// console.log(name, city);

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [first, second, ...rest] = data;
// console.log(first, second, rest);

const url = "https://example.com/api/users/12345/details";

function parseUrl(url) {
  const [protocol, _, domain, ...rest] = url.split("/");
  return [protocol.replace(":", ""), domain, "/" + rest.join("/")];
}
const parsedData = parseUrl(url);
console.log(parsedData);
