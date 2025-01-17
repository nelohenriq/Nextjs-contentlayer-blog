import { allBlogs } from "../../.contentlayer/generated";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import RecentPosts from "../components/Home/RecentPosts";

export default function Home() {
  console.log(allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts  blogs={allBlogs} />
    </main>
  );
}
