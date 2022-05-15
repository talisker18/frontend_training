function run() {
    //var vs let
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar); // Foo Bar
  
    {
      var moo = "Mooo"
      let baz = "Bazz";
      console.log(moo, baz); // Mooo Bazz
    }
  
    console.log(moo); // Mooo
    //console.log(baz); // ReferenceError

    //data types
    const someConstant = 123;
    let n = 1;
    n = 2;
    let b = 5;
    let c = n+b;
    console.log(c);
    let d = 10.15;
    console.log(d);

    let age = null; //init it with null if you do not know the value
    //...
    age = 44; //..and later assign a value
    let age2; //or do it like this
    age2 = 13;
  }
  
  run();