function getValueAtObject(obj, key) {
  if (obj.getValueAtObject(key)) {
    return obj[key];
  } else {
    return 'error: 존재하지 않는 값입니다. 다시 입력해주세요.';
  }
}
let person = {
  name: 'hunzoo',
  age: 30,
  city: 'masan',
};

console.log(getValueAtObject(person, 'name'));
console.log(getValueAtObject(person, 'age'));
console.log(getValueAtObject(person, 'city'));
console.log(getValueAtObject(person, 'country'));

function getNumberAtArray(arr, index) {
  if (index >= 0 && index < arr.length) {
    return arr[index];
  } else {
    return "error: '배열 밖의 범위의 값입니다'.";
  }
}
const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2));
console.log(getNumberAtArray(numbers, 4));
console.log(getNumberAtArray(numbers, 5));
console.log(getNumberAtArray(numbers, -1));
