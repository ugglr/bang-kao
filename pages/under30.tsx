import type { NextPage } from "next";
import Head from "next/head";
import Test from "../components/Test";
import styles from "../styles/Home.module.css";
import { generateQuestions, Question as Q } from "../util";

type Props = {
  questions: Q[];
};
const Under30Page: NextPage<Props> = ({ questions }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>数学</title>
        <meta name="description" content="练习数学 30 以内" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Test questions={questions} />
      </main>
    </div>
  );
};

export default Under30Page;

export const getServerSideProps = () => {
  const questions = generateQuestions(90, 30);

  return {
    props: {
      questions,
    },
  };
};
