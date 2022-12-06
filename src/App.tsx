import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

import GNB from "./components/GNB";
import Footer from "./components/Footer";

const PopularPage = loadable(() => import("./page/popular/PopularPage"));
const HomePage = loadable(() => import("./page/home/HomePage"));
const MovieDetailPage = loadable(
  () => import("./page/movie-detail/MovieDetailPage")
);
const InfiniteTest = loadable(() => import("./page/InfiniteTest"));
const UpcomingPage = loadable(
  () => import("./page/upcoming-page/UpcomingPage")
);
const SearchResultPage = loadable(
  () => import("./page/search-result/SearchResultPage")
);
const TopRatePage = loadable(() => import("./page/top-rate/TopRatePage"));
const NowPlayPage = loadable(() => import("./page/now-playing/NowPlayPage"));

function App() {
  return (
    <BrowserRouter>
      <GNB />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="upcoming" element={<UpcomingPage />} />
        <Route path="now-playing" element={<NowPlayPage />} />
        <Route path="top-rated" element={<TopRatePage />} />
        <Route path="movie-detail" element={<MovieDetailPage />} />
        <Route path="popular" element={<PopularPage />} />
        <Route path="movie-detail/:id" element={<MovieDetailPage />} />
        <Route path="search-result" element={<SearchResultPage />} />
        <Route path="test" element={<InfiniteTest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
