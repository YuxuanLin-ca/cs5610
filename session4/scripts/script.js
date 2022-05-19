for (let i = 0; i <= 10; i++) {
  console.log(Math.pow(2, i));
}

let user;
do {
  user = prompt("your name");
} while (user.length === 1 || !isNaN(user));
{
  alert("cannot be a number!");
}
