const isNotProduction = process.env.NODE_ENV !== "production"

export default function filterPosts(posts) {
  return posts.filter(
    ({ frontmatter }) => !frontmatter.isDraft || isNotProduction
  )
}
