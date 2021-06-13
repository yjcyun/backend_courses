import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    slug: 'how-i-got-here',
    title: 'How I got here',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, asperiores.',
    date: '2022-02-10',
  },
  {
    slug: 'when-i-got-here',
    title: 'When I got here',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, asperiores.',
    date: '2022-02-10',
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
