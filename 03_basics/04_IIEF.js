// Immediatly Invoked Fuctional Expresion (IIEF)

(function invoked() {
    console.log(`Database connected!`);
})(); //we must used semicolon at end of IIEF function

( (name) => {
    console.log(`${name} Another Database connected!`);
})("Hafeez")