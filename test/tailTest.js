const tail = require('../tail');
const assertEqual = require('../assertEqual');


const test = ["1", "2", "3"];
const result = tail(test);


assertEqual((result.length), 2);
assertEqual(result[0],"2");
assertEqual(result[1],"3");
assertEqual(test.length, 3);

// assertEqual(test.length, 3);