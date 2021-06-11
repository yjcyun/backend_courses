import Head from 'next/head';

import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NexJs Events</title>
        <meta name='description' content='Site description' />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

// this page is the main homepage, we would want to pre-render this page
export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: { events: featuredEvents },
    revalidate: 1800, //regenerate the page every 30minutes
  };
};

export default HomePage;
