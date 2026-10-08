import Link from "next/link";
export default function Home() {
  return (
    <div>
      this is the home page{" "}
      <div>
        <Link href="/articles/breaking-news-123?lang=en">
          read in english
        </Link>{" "}
      </div>
      <div>
        <Link href="/articles/breaking-news-123?lang=fr">read in french</Link>
      </div>
    </div>
  );
}
