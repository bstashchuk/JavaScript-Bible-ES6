/**
 * CHALLENGE 2-1 SOLUTION
 *
 * Create a button with "Click me" text on it.
 *
 * If you click on the button following actions
 * should be performed:
 * 1. Title of the button will be changed to following:
 * "Button was clicked <NUMBER> times"
 * 2. Log to the console message "Button was clicked"
 *
 * Use either "addEventListener" or "onclick" functions.
 * Try to use regular function and arrow function as a
 * callback function for functions above.
 *
 * Observe difference in behaviour and try to explain
 * this difference.
 */

const createButton = title => {
  const btn = document.createElement("button");
  let clicksQty = 0;

  btn.innerHTML = title;
  // btn.onclick = function() {
  //   console.log("Button was clicked");
  //   btn.innerHTML =
  //     "Button was clicked " + ++clicksQty + " times";
  // };

  // Regular function expression
  btn.addEventListener("click", function() {
    console.log("Button was clicked");
    // console.log(this); // <button>
    this.innerHTML =
      "Button was clicked " + ++clicksQty + " times";
  });

  // // Arrow function expression
  // btn.addEventListener("click", () => {
  //   console.log("Button was clicked");
  //   console.log(this); // Window object
  //   this.innerHTML =
  //     "Button was clicked " + ++clicksQty + " times";
  // });

  document.body.appendChild(btn);
};

createButton("Click me");
