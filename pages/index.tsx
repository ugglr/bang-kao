import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

type Props = {};
const Home: NextPage<Props> = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shuxue</title>
        <meta name="description" content="Shuxue kaoshi" />
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
            under 10
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
            under 20
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
