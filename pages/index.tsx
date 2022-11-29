import { useState } from "react";
import Header from "../components/Header";
import { getTrends } from "../Utils/apiCalls";
import { MovieOrTvShow } from "../Utils/interfaces";
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
        <button
          disabled={language == "it-IT"}
          onClick={() => upDateTrends("it-IT")}
        >
          Ita
        </button>
        <button
          disabled={language == "en-US"}
          onClick={() => upDateTrends("en-US")}
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
