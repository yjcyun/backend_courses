import fs from 'fs/promises'; // only can run on server side
import path from 'path';
import Link from 'next/link';

const HomePage = (props) => {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
};

// this function only runs on server side
// generates static HTML + JSON(data)
export const getStaticProps = async (context) => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  //process.cwd is the root folder
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return { redirect: { destination: '/404' } }; // redirect user to another route
  }

  if (data.products.length === 0) {
    return { notFound: true }; // if fails to fetch data render 404 page
  }

  return {
    props: { products: data.products },
    revalidate: 10, //regenerate every 10s
  };
};

export default HomePage;
