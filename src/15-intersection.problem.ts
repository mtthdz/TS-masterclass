interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}

// we could combine the return obj like so:
// interface UserPosts extends User {
//   posts: Post[]
// }

/**
 * How do we type this return statement so it's both
 * User AND { posts: Post[] }
 * 
 * Solution: not my favourite, it's not logically expansive. But it is
 * a notable alternative to extending an interface
 */
export const getDefaultUserAndPosts = (): User & { posts: Post[] } => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);
