import Link from "next/link";

export default async function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleid: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleid } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1 className="text-5xl"> news article {articleid}</h1>
      <p> reading in {lang} </p>
      <div>
        <Link href={`/articles/${articleid}?lang=en`}>English </Link>
        <Link href={`/articles/${articleid}?lang=es`}>Spanish </Link>
        <Link href={`/articles/${articleid}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
