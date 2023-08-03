

// 動態meta
export function generateMetadata ({params}) {
  return {
    title: `Blog ${params.blog_id}`
  }
};

// 動態router
const Blog = ({ params}) => {
  console.log(params)
  const blog_id = params.blog_id;
  return <div> Blog {blog_id}</div>
}

export default Blog