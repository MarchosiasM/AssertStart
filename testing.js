
module.exports = {
    assert: function (expected, actual, message = "test") {
        if (expected === actual) {
            console.log("thumbs up " + message)
        } else {
            diff = util.inexpect(expected) + "\n   " + util.inspect(actual);
            console.log("poop emoji " + message + "\n    Assertion failed no match\n    " + diff);

        }
    },
    assert_true: function (actual, message) {
        this.assert(true, actual, message)
    },
    assert_false: function (actual, message) {
        this.assert(false, actual, message)
    },
}
