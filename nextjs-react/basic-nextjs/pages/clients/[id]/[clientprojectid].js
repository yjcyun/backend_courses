// "/clients/mars/project1"
import { useRouter } from 'next/router';

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>SelectedClientProjectPage</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
