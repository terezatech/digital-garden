import { Post } from '@tereza-tech/zettel';
import { Recommendations } from './Recommendations';

export const PostPage = ({ post }: { post: Post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      {post.content}
      <hr />
      <Recommendations recommendations={post.recommendations} />
    </div>
  );
};
