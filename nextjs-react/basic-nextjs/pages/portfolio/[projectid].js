// dynamic route "/portfolio/anyvalue"
import { useRouter } from 'next/router';

const PortfolioProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname); //"/portfolio/[projectid]"
  console.log(router.query); // {projectid: anyvalue}

  return (
    <div>
      <h1>PortfolioProjectPage</h1>
    </div>
  );
};

export default PortfolioProjectPage;
