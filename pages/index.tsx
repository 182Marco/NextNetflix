import { useState } from "react";
import Header from "../components/Header";
import { getTrends } from "../Utils/apiCalls";
import { MovieOrTvShow } from "../Utils/interfaces";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../redux/reducers/all";
import { language as setLang } from "../redux/actions";
import { it, en } from "../Utils/languages";

export const Home = ({
  tvTrends,
  movieTrends,
}: {
  tvTrends: MovieOrTvShow[];
  movieTrends: MovieOrTvShow[];
}) => {
  
  const dispatch = useDispatch();
  const [tvTends, setTvTrends] = useState(tvTrends);
  const [movieTends, setMovieTrends] = useState(movieTrends);

  console.log(tvTrends, movieTrends);
  const { language } = useSelector((state: IState) => state?.globalSettings);

  const upDateTrends = async (lang: string) => {
    dispatch(setLang(lang));
    const movieRes = await getTrends("movie", lang);
    setMovieTrends(movieRes);
    const tvRes = await getTrends("tv", lang);
    setTvTrends(tvRes);
  };

  return (
    <>
      <Header />
      <div className="home">
        <button disabled={language == it} onClick={() => upDateTrends(it)}>
          Ita
        </button>
        <button disabled={language == en} onClick={() => upDateTrends(en)}>
          English
        </button>
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const movieRes = await getTrends("movie");
  const tvRes = await getTrends("tv");
  return {
    props: {
      tvTrends: tvRes,
      movieTrends: movieRes,
    },
  };
}
