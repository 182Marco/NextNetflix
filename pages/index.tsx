import { useState } from "react";
import Header from "../components/Header";
import { getTrends } from "../Utils/apiCalls";
import { MovieOrTvShow } from "../Utils/interfaces";
import { en, it } from "../Utils/languages";

interface homePageProps {
  tvTrends: MovieOrTvShow[];
  movieTrends: MovieOrTvShow[];
}

export default function Home({ tvTrends, movieTrends }: homePageProps) {
  const [lang, setLang] = useState(en);
  const [tvTends, setTvTrends] = useState(tvTrends);
  const [movieTends, setMovieTrends] = useState(movieTrends);

  const upDateTrendsLang = async (language: string) => {
    setLang(language);
    const movieRes = await getTrends("movie", lang);
    setMovieTrends(movieRes);
    const tvRes = await getTrends("tv", lang);
    setTvTrends(tvRes);
  };

  console.log("tvTends: ", tvTends);
  console.log("movieTends: ", movieTends);

  return (
    <>
      <Header />
      <div className="home">
        <button disabled={lang == it} onClick={() => upDateTrendsLang(it)}>
          Ita
        </button>
        <button disabled={lang == en} onClick={() => upDateTrendsLang(en)}>
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
