import { useEffect, useState } from 'react';
import useSWR from 'swr';

const LastSalesPage = (props) => {
  const [sales, setSales] = useState(props.sales); // use the serverside fetched data as an initial state
  const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users');

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setSales(json);
  //       setIsLoading(false);
  //     });
  // }, []);

  if (error) {
    return <p>No data yet</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - {sale.website}
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return { props: { sales: data }, revalidate: 10 };
};

export default LastSalesPage;
