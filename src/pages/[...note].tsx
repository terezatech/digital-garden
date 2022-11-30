import { zettel } from '../lib/zettel';
import { PostPage } from '../components/PostPage';

export const getStaticPaths = async () => {
  const posts = await zettel.getPosts();

  const paths = posts.map((post) => {
    /**
     * Group has the format /folder1/folder2/folder3. We need to remove the
     * first slash and split the string into an array.
     */
    const splitGroup = post.group.split('/').filter((item) => !!item);

    return {
      params: {
        note: [...splitGroup, post.slug],
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: { note: string[] };
}) => {
  const { note } = params;

  /**
   * id is the format /folder1/folder2/folder3/slug.
  //  */
  const postId = '/' + note.join('/');

  const post = await zettel.getPost({ id: postId });

  return {
    props: { post },
  };
};

export default PostPage;
