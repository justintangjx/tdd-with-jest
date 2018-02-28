const kebabize = require("../src/kebabize");

test("hiThere should be kebabized to hi-there", function() {
  expect(kebabize("hiThere")).toEqual("hi-there");
});

test.only("hiThereJustin should be kebabized to hi-there-justin", function() {
  expect(kebabize("hiThereJustin")).toEqual("hi-there-justin");
});

test.skip("hiThereBruceWayne shuld be kebabized to hi-there-bruce-wayne", function() {
  expect(kebabize("hiThereBruceWayne")).toEqual("hi-there-bruce-wayne");
});

// write additional tests to ensure kebabize() works as expected
