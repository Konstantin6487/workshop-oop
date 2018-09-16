const fs = require('fs');

const getMiddle = list => list[Math.floor(list.length / 2)];
const plural = (str = '', char) => (str.endsWith(char) ? str : `${str}${char}`);

export default async () => {
  const files = await fs.readdir('.', (err, res) => {
    if (err) {
      throw Error(err);
    }
    return (
      res
      |> (_ => _.filter(file => file.startsWith('.')))
      |> (_ => _.slice().sort((a, b) => (a > b ? 1 : 0)))
      |> getMiddle
      |> (_ => plural(_, 's'))
      |> (_ => _.toUpperCase())
      |> console.log
    );
  });
  return files;
};
