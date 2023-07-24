const filteredNumbers = require('./filteredNumbers');

test ('Filters out negative numbers', () =>{
    const expected = [0, 1, 2, 3];
    const output = filteredNumbers;

    expect(output).toEqual(expected);
});

// jk this failed because I imported incorrectly, and a few other things...
// wow, that was a learning adventure, but we got it!


