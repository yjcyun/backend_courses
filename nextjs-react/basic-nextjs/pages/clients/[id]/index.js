// "/clients/mars"
import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    // router.push('/clients/mars/projecta');
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'mars', clientprojectid: 'projectA' },
    });
  };

  return (
    <div>
      <h1>ClientProjectsPage {router.query.id}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
