// // EXAMPLE 1
// // console.log(sum(1, 2)); // sum is not defined
// const sum = (a, b) => a + b;
// console.log(sum(1, 2));
// console.log(sum(5, 7));

// // EXAMPLE 2
// const post = {
//   title: "Sample title",
//   comments: 3,
//   shared: true,
//   published: true,
//   postId: 5134
// }

// // // explicit return of the object
// // const processedPost = (post) => {
// //   return {
// //     title: post.title,
// //     comments: post.comments,
// //     popular: post.comments > 5 ? true : false
// //   }
// // };

// // implicit return of the object
// const processedPost = post => ({
//   title: post.title,
//   comments: post.comments,
//   popular: post.comments > 5 ? true : false
// });

// console.log(processedPost(post));

// // EXAMPLE 3
// (() => {
//   this.greet = () => "Hey. What's up?";
//   // console.log(this); // window object
//   return this;
// })();
