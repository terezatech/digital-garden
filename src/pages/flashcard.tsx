import { GetStaticProps } from 'next';
import { zettel } from '../lib/zettel';
import { PostSummary } from '../components/PostSummary';
import { InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const flashcard = await zettel.getFlashcard();

  return {
    props: { flashcard },
  };
};

const FlashcardPage = ({
  flashcard,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const text = `This post is ${flashcard.diffWeeks.weeks} weeks and ${flashcard.diffWeeks.days} days old.`;
  return (
    <>
      <p>{text}</p>
      <PostSummary post={flashcard} />
    </>
  );
};

export default FlashcardPage;
