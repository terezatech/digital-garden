import { GetStaticProps } from 'next';
import { zettel } from '../lib/zettel';
import { Recommendations } from '../components/Recommendations';

export const getStaticProps: GetStaticProps = async () => {
  const recommendations = await zettel.getRecommendations();

  return {
    props: { recommendations },
  };
};

export default Recommendations;
