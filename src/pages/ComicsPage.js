import ComicsList from "../components/comicsList/ComicsList";
import AppBanner from "../components/appBanner/AppBanner";
import { Helmet } from "react-helmet";

function ComicsPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page with list of our comics" />
        <title>Marvel comics page</title>
      </Helmet>
      <AppBanner />
      <ComicsList />
    </>
  );
}

export default ComicsPage;
