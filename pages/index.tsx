import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getTrends } from "../Utils/apiCalls";
import { MovieOrTvShow } from "../Utils/interfaces";
import { en, it } from "../Utils/languages";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../redux/reducers/all";
import { language as setLang } from "../redux/actions";

interface homePageProps {
  tvTrends: MovieOrTvShow[];
  movieTrends: MovieOrTvShow[];
}

export default function Home({ tvTrends, movieTrends }: homePageProps) {
  const [tvTends, setTvTrends] = useState(tvTrends);
  const [movieTends, setMovieTrends] = useState(movieTrends);

  console.log(tvTrends, movieTrends);
  const { language } = useSelector((state: IState) => state?.globalSettings);
  const dispatch = useDispatch();

  const upDateTrendsLang = async (lang: string) => {
    const movieRes = await getTrends("movie", lang);
    setMovieTrends(movieRes);
    const tvRes = await getTrends("tv", lang);
    setTvTrends(tvRes);
  };

  useEffect(() => {
    if(window && language) upDateTrendsLang(language);
  }, [language]);

  return (
    <>
      <Header />
      <div className="home">
        <button
          disabled={language == "It"}
          onClick={() => dispatch(setLang("It"))}
        >
          Ita
        </button>
        <button
          disabled={language == "En"}
          onClick={() => dispatch(setLang("En"))}
        >
          English
        </button>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let props: homePageProps = { tvTrends: [], movieTrends: [] };
  try {
    const movieRes = await getTrends("movie");
    const tvRes = await getTrends("tv");
    props.tvTrends = tvRes;
    props.movieTrends = movieRes;
  } catch (er) {
    console.error(`getTrends api responded with an error: ${er}`);
  }
  return { props };
}
