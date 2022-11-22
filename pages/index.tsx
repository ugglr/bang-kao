import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

type Props = {};
const Home: NextPage<Props> = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>数学</title>
        <meta name="description" content="数学考试" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/under10">
          <button
            style={{
              height: "50px",
              width: "200px",
              backgroundColor: "purple",
              borderRadius: "8px",
              marginBottom: "4rem",
            }}
          >
            10以内
          </button>
        </Link>
        <Link href="/under20">
          <button
            style={{
              height: "50px",
              width: "200px",
              backgroundColor: "purple",
              borderRadius: "8px",
            }}
          >
            20以内
          </button>
        </Link>
        <Link href="/under30">
          <button
            style={{
              height: "50px",
              width: "200px",
              backgroundColor: "purple",
              borderRadius: "8px",
            }}
          >
            30以内
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
