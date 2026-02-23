export const HighOrderFunciton = () => {
  function operate(a, b, callback) {
    return callback(a, b);
  }

  function add(x, y) {
    return x + y;
  }

  console.log(operate(5, 3, add));

  const array = [1, 2, 3, 4, 5];

  function Op(array, callback) {
    return array.map(callback);
  }

  console.log(Op(array, (num) => num * 3));

  const name = ["Jhon", "Jan", "Alvert", "Anna", "Mark"];

  console.log(name.filter((name) => name.includes("J")));

  const Names = ["Jhon", "alvert", "Ann", "Jan", "Aple", "Mark"];

  const FilteredName = [];

  for (let i = 0; i < Names.length; ++i) {
    if (Names[i][0] == "J") {
      FilteredName.push(Names[i]);
    }
  }

  console.log(FilteredName);



    
};
