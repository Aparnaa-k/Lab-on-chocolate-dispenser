var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color
var notPositive = 'Number cannot be zero/negative';
function addChocolates(chocolates, color, count) {
  var output = negativeNumber(count)
    ? notPositive
    : addChoco(chocolates, color, count);
  return output;
}

function negativeNumber(n) {
  return n <= 0;
}
function addChoco(chocolates, color, count) {
  for (let i = 0; i < count; i++) {
    chocolates.unshift(color);
  }
  return chocolates;
}

//Progression 2: Remove z chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
  return negativeNumber(number)
    ? notPositive
    : number > chocolates.length
    ? 'Insufficient chocolates in the dispenser'
    : dispenseChoco(chocolates, number);
}

function dispenseChoco(chocolates, number) {
  var result = [];
  for (let i = 0; i < number; i++) {
    result.push(chocolates.shift());
  }
  return result;
}

//Progression 3: Dispense z chocolates
function dispenseChocolates(chocolates, number) {
  return number > chocolates.length
    ? 'Insufficient chocolates in the dispenser'
    : number <= 0
    ? 'Number cannot be zero/negative'
    : removeChocoFromBottom(chocolates, number);
}

function removeChocoFromBottom(chocolates, number) {
  var output = [];
  for (let i = 0; i < number; i++) {
    output.push(chocolates.pop());
  }
  return output;
}

//Progression 4: Dispense z chocolates of x color
function dispenseChocolatesOfColor(chocolate, count, color) {
  var desiredChocolates =
    count > chocolate.length
      ? 'Insufficient chocolates in the dispenser'
      : count <= 0
      ? 'Number cannot be zero/negative'
      : chocolate.filter((el) => el === color);
  return desiredChocolates;
}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink
function noOfChocolates(candies) {
  let output = candies.reduce((tally, choco) => {
    tally[choco] = (tally[choco] || 0) + 1;
    return tally;
  }, {});
  return Object.values(output);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
const helperSortChocolates = function (chocolates) {
  let ans = [];
  let store = {};
  chocolates.sort();

  for (let i = 0; i < chocolates.length; i++) {
    let counter = 0;
    for (let j = 0; j < chocolates.length; j++) {
      if (chocolates[i] == chocolates[j]) {
        counter += 1;
      }
    }

    store[chocolates[i]] = counter;
  }
  const sortable = Object.fromEntries(
    Object.entries(store).sort(([, a], [, b]) => b - a)
  );

  Object.keys(sortable).forEach((key) => {
    for (let i = 0; i < sortable[key]; i++) {
      ans.push(key);
    }
  });

  return ans;
};

function sortChocolateBasedOnCount(chocolates) {
  finalAns = helperSortChocolates(chocolates);
  return finalAns;
}

//Progression 7: Change z chocolates of x color to y color

function changeChocolateColor(candies, count, color, finalColor) {
  var newChocoArray =
    count <= 0
      ? 'Number cannot be zero/negative'
      : candies.length == 1 && candies.includes(finalColor)
      ? "Can't replace the same chocolates"
      : candies.length == 0
      ? candies
      : chocoChanger(candies, count, color, finalColor);

  return newChocoArray;
}

function chocoChanger(candies, count, color, finalColor) {
  for (let i = 0; i < count; i++) {
    candies[i] = finalColor;
  }
  return candies;
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(candies, color, finalColor) {
  var result =
    candies.length == 1 &&
    candies.every(function check(i) {
      return i == finalColor;
    })
      ? "Can't replace the same chocolates"
      : changeColorChoco(candies, color, finalColor);
  return result;
}
function changeColorChoco(candies, color, finalColor) {
  var returingArray = [];
  var finalColorCount = 0;
  for (let i = 0; i < candies.length; i++) {
    candies[i] == color ? (candies[i] = finalColor) : null;
    candies[i] == finalColor ? finalColorCount++ : 0;
  }
  returingArray.push(finalColorCount, candies);
  return returingArray;
}

//Challenge 1: Remove one chocolate of x color from the top

function removeChocolateOfColor(candies, color) {
  let index = candies.indexOf(color);
  candies.splice(index, 1);
  return candies;
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed

function dispenseRainbowChocolates(chocolates) {
  const store = {};

  chocolates.forEach((chocolate) => {
    if (chocolate in store) {
      store[chocolate] += 1;
    } else {
      store[chocolate] = 1;
    }
  });

  countOfEachChocolate = Object.values(store);
  totalNumberOfRainbowChocolates = 0;
  countOfEachChocolate.forEach((count) => {
    if (count % 3 == 0) {
      totalNumberOfRainbowChocolates += count / 3;
    }
  });
  return totalNumberOfRainbowChocolates;
}
