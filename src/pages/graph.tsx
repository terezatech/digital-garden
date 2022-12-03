import { zettel } from '../lib/zettel';
import { InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';

const Graph = dynamic(
  () => import('@tereza-tech/react-zettel').then((mod) => mod.Graph),
  {
    ssr: false,
  }
);

export const getStaticProps = async () => {
  const graphData = await zettel.getGraph();
  return {
    props: { graphData },
  };
};

const GraphPage = ({
  graphData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Graph graphData={graphData} width={600} height={600} />;
};

export default GraphPage;
