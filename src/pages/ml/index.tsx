import Head from "next/head";
import { getAllPosts } from "~/lib/articles";
import type PostType from "~/lib/types";

type Props = {
  allPosts: PostType[];
};

export default function MachineLearning({ allPosts }: Props) {
  return (
    <>
      <Head>
        <title>Machine Learning | Jakub Biniek</title>
        <meta
          name="description"
          content="This is a documentation/library of my growth as a software developer"
        />
      </Head>
      <div className="mt-16 flex min-h-screen flex-col items-start justify-start gap-8 px-4 sm:px-0">
        <h1 className="text-2xl font-semibold sm:text-4xl">
          Machine Learning Library
        </h1>
        {allPosts.map((item) => (
          <div key={item.id}>{item.tags}</div>
        ))}
      </div>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "tags",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
