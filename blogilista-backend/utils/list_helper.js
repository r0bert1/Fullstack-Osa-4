const dummy = (blogs) => {
  return (1)
}

const totalLikes = (blogs) => {
  const likes = blogs.map(blog => blog.likes)
  const reducer = (sum, item) => {
    return sum + item
  }

  return likes.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const likes = blogs.map(blog => blog.likes)
  const most = Math.max(...likes)

  return blogs.find(blog => blog.likes === most)
}

const mostBlogs = (blogs) => {
  const authors = blogs.map(blog => blog.author)
  const selectedAuthor = authors.sort((a,b) => 
      authors.filter(author => author === a).length
    - authors.filter(author => author === b).length
  ).pop()

  const counter = blogs.filter(blog => blog.author === selectedAuthor).length

  const authorInfo = {
    author: selectedAuthor,
    blogs: counter
  }

  return authorInfo
}

const mostLikes = (blogs) => {

  if (blogs.length === 1) {
    return {
      author: blogs[0].author,
      likes: blogs[0].likes
    }
  }
  
  const sortedBlogs = blogs.sort((a,b) => {
    if (a.author < b.author) {
      return -1
    }

    if (a.author > b.author) {
      return 1
    }

    return 0
  })

  let mostLikes = 0
  let likes = 0
  let mostLiked = ''

  for (let i = 0; i < blogs.length - 1; i++) {
    likes += sortedBlogs[i].likes    
    
    if (sortedBlogs[i + 1].author !== sortedBlogs[i].author) {
      if (likes > mostLikes) {
        mostLikes = likes
        mostLiked = sortedBlogs[i].author
      }

      likes = 0
    }
  }

  return {
      author: mostLiked,
      likes: mostLikes
  }
}
  
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}