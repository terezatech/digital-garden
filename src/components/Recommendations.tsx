import { PostMetadata } from '@tereza-tech/zettel';
import { PostSummary } from './PostSummary';

export const Recommendations = ({
  recommendations,
}: {
  recommendations: PostMetadata[];
}) => {
  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.map((post) => {
        return <PostSummary key={post.id} post={post} />;
      })}
    </div>
  );
};
