// [...id].js catches all path after /blog

import { useRouter } from 'next/router';

const BlogPostsPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>BlogPostsPage</h1>
    </div>
  );
};

export default BlogPostsPage;
