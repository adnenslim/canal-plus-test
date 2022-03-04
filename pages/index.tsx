import type { NextPage, NextPageContext } from "next";
import styles from "../styles/Home.module.css";
import HomeScreen from "@/screens/home/home";

type THomeProps = {
  search: string | string[] | undefined;
};

const Home: NextPage<THomeProps> = ({ search }) => {
  return (
    <div className={styles.container}>
      <HomeScreen searchQuery={search} />
    </div>
  );
};

Home.getInitialProps = async ({ query }) => {
  const { search } = query;

  return { search };
};

export default Home;
