const UserProfilePage = ({ username }) => {
  return <h1>{username}</h1>;
};

export default UserProfilePage;

// re-runs on every request
// there's no PRE-REGNERATION - no need to define paths
export const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  console.log('Server side code');
  return {
    props: {
      username: 'Mars',
    },
  };
};
