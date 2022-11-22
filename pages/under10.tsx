import type { NextPage } from "next";
import Head from "next/head";
import Test from "../components/Test";
import styles from "../styles/Home.module.css";
import { generateQuestions, Question as Q } from "../util";

type Props = {
  questions: Q[];
};
const Under10Page: NextPage<Props> = ({ questions }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bang Kao</title>
        <meta name="description" content="Tiandi xiaoxue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Test questions={questions} />
      </main>
    </div>
  );
};

export default Under10Page;

export const getServerSideProps = () => {
  const questions = generateQuestions(90, 10);

  return {
    props: {
      questions,
    },
  };
};
