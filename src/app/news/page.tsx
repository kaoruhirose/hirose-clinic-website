import { PageIntro } from "@/components/Editorial";
// お知らせ記事の追加・編集は src/lib/news.ts で行う（トップページと共通）。
import { newsItems } from "@/lib/news";

export default function News() {
  return (
    <div className="page-shell">
      <div className="container">
        <PageIntro title="お知らせ" english="News and notes from our clinic." />
        <ul className="article-list">
          {newsItems.map((news) => (
            <li key={`${news.date}-${news.title}`} id={`news-${news.date.replaceAll(".", "-")}`}>
              <article>
                <div className="article-meta">
                  <time dateTime={news.date.replaceAll(".", "-")}>{news.date}</time>
                  <span>{news.category}</span>
                </div>
                <h2 className="article-title">{news.title}</h2>
                <div className="prose"><p>{news.body}</p></div>
              </article>
            </li>
          ))}
        </ul>
        <p className="quiet-note mt-12">
          最新のお知らせは随時こちらに掲載いたします。
        </p>
      </div>
    </div>
  );
}
