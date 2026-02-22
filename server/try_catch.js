// so the code in the 'catch' block will only run if an Error (special js object) is thrown

function test() {
  try {
    // causing an error on purpose
    //    throw new Error(`No password`)
    throw new Error(`No Password`);
  } catch (error) {
    console.log(`Error happened :(`, error.message);
  }
}

test();

// how do we know an object is empty???

// Object.keys(object) => turns an objects properties into an array
// arrays have a .length property
// if that is 0, the object must be empty

const myInfo = {
  foo: "bar",
};

const empty = {};

console.log(Object.keys(myInfo).length < 1);
console.log(Object.keys(empty).length < 1);
