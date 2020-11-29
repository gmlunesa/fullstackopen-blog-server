const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce(
    (accumulator, currentValue) => accumulator + currentValue.likes,
    0
  );
};

const mostLikes = (blogs) => {
  let mostLikedBlog;
  let mostLikesCount = 0;

  blogs.forEach((blog) => {
    if (blog.likes > mostLikesCount) {
      mostLikedBlog = { ...blog };
      mostLikesCount = blog.likes;
    }
  });

  return mostLikedBlog;
};

module.exports = {
  dummy,
  totalLikes,
  mostLikes,
};
