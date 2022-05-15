let user;

console.log(user ?? "Anonymous"); //nullish coalescing operator...if undefined, print "Anonymous"

//same would be...
console.log(undefined || "anonymous"); //prints anonymous

console.log(user || "Anonymous"); //same. the conditions are false || true...so print the side where its true, therefore "Anonymous"