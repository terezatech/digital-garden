import { PostMetadata } from '@tereza-tech/zettel';

export const PostSummary = ({ post }: { post: PostMetadata }) => {
  return (
    <div>
      <h3>
        <a href={post.href}>{post.title}</a>
      </h3>
    </div>
  );
};
