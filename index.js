/*
Create "processPosts" function that will return new array of posts.

Notice that some propery names in each post are modified and each postId is incremented by 1000.

Original array of posts should not be mutated.
*/

const posts = [
  {
    postId: 234,
    author: "robd",
    commentsQty: 5
  },
  {
    postId: 823,
    author: "sady"
  },
  {
    postId: 161,
    author: "merryl",
    commentsQty: 8
  }
];

const processPosts = posts =>
  posts.map(
    ({
      postId,
      author: postAuthor,
      commentsQty: postCommentsQty = 0
    }) => ({
      postAuthor,
      postCommentsQty,
      postId: postId + 1000
    })
  );

console.log(processPosts(posts));
/*
[
  {
    postId: 1234,
    postAuthor: "robd",
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: "sady",
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: "merryl",
    postCommentsQty: 8
  }
]
*/

console.log(posts); // original array of posts
