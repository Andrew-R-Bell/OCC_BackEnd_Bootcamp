/**
 * JS LOOPS - allows us to repeat a set of instructions multiple times.
 */

/*FOR Loop

for ([initialization] ; [condition]; [arithmetic expression]){
    //code that will be executed as long as the ciondition is true.
}
*/

for ( let x = 0; x < 10 ; x++ ) {
    console.log(x);
    console.log("Current value of x: ", x );
}

// x = 0 > true > display 0 in console > 0 + 1 = 1 (x = 1)
// x = 1 > true > display 1 in console > 1 + 1 = 2 (x = 2)
// x = 2 > true > display 2 in console > 2 + 1 = 3 (x = 3)
//....
// x = 9 > true > display 9 in console > 9 + 1 = 10 (x = 10)
// x = 10 > false

/* while

while (condition) {
    //statement / code block
}
*/

let my_num = 1;
while(my_num <= 5) {
    console.log("Count: ", my_num);
    my_num++;
}

//do..while
let j = 1;

do{
    console.log("Do-while count: ", j):
    j++
} while (j<=5);


