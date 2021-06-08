import fs from 'fs/promises';
import path from 'path';

// dynamic pages do not pre-generate by default

const ProductDetailPage = ({ loadedProduct }) => {
  if (!loadedProduct) {
    return <p>loading...</p>;
  }
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
};

// need to tell you want the page to pre-render in advance
// which [id] values are available?
export const getStaticProps = async (context) => {
  const { params } = context;

  const productId = params.pid;

  const data = await getData();
  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    // if we failed to fetch, render 404 - fallback has to be true
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
};

// tell nextjs which concrete instances of this dynamic page must be pregenerated
export const getStaticPaths = async () => {
  const data = await getData();

  const ids = data.products.map((product) => product.id);
  const params = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: params,
    /*,
    paths: [
      { params: { pid: 'p1' } },
      // { params: { pid: 'p2' } },
      // { params: { pid: 'p3' } },
    ],
    */
    fallback: true, // if you need a lot of pages that need pre-generation - pre generate highly visited pages and postpone the generation of less visited pages; must check props and return loading
    // fallback: 'blocking' - don't need loading, will wait until the page loads
  };
};

export default ProductDetailPage;
