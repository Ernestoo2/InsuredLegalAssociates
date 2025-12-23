import PageHero from "../../components/PageHero";
import NewsDetail from "../_components/NewsDetail";
import { news } from "../_components/type";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const newsItem = news.find((item) => item.id === params.id);
  if (!newsItem) return notFound();

  return (
    <div className="">
      <PageHero
        title="News Detail"
        description="Read about our recent legal victories, including precedent-setting cases and client success stories."
        backgroundImage={newsItem.image}
      />
      <NewsDetail newsItem={newsItem} />
    </div>
  );
} 