import PageHero from "../components/PageHero";
import NewsList from "./_components/NewsList";

export default function NewsPage() {
  return (
    <div className="">
      <PageHero
        title="News"
        description="Stay updated with the latest legal news, case studies, and insights from Insured Legal Associates."
      />
      <NewsList />
    </div>
  );
} 