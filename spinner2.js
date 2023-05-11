const characters = ['|', '/', '-', '\\'];

let end = 0;

for (const character of characters) {
  end += 200;
  setTimeout(() => {
    process.stdout.write(`\r${character}`);
  }, end);
}