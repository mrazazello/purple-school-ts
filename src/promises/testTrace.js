
module.exports = function testTrace() {

    const run = (fn)=> fn();

    run(() => console.trace("it is me1"))

    run(() => Promise.resolve().then(() => console.trace("it is me2")));

}
