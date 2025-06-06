import { getAllBlogPosts, getAllTopics } from "../../Lib/Data";
import { serialize } from "next-mdx-remote/serialize";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Head from "next/head";
import BlogInner from "../../Components/BlogInner";
import { remarkHeadingId } from "remark-custom-heading-id";
import { getHeadings } from "../../Lib/GetHeadings";

export const getStaticPaths = () => {
  const allBlogs = getAllBlogPosts();
  return {
    paths: allBlogs.map((blog) => ({
      params: {
        id: String(blog.data.Title.split(" ").join("-").toLowerCase()),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const params = context.params;
  const allBlogs = getAllBlogPosts();
  const allTopics = getAllTopics();

  const page = allBlogs.find(
    (blog) =>
      String(blog.data.Title.split(" ").join("-").toLowerCase()) === params.id
  );

  const { data, content } = page;
  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: { remarkPlugins: [remarkHeadingId] },
  });

  const headings = await getHeadings(content);

  return {
    props: {
      data: data,
      content: mdxSource,
      headings: headings,
      topics: allTopics,
    },
  };
};

function id({ data, content, headings, topics }) {
  return (
    <>
      <Head>
        <title>{data.Title}</title>
        <meta name="title" content={data.Title} />
        <meta name="description" content={data.Abstract} />

            <meta property="og:type" content="website" />
        <meta property="og:url" content="https://binary-bench.vercel.app/" />
        <meta property="og:title" content={data.Title} />
        <meta property="og:description" content={data.Abstract} />
        <meta
          property="og:image"
          content={`https://raw.githubusercontent.com/soliman-sDev/Binay-Bench/main/public${data.HeaderImage}`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://binary-bench.vercel.app/" />
        <meta property="twitter:title" content={data.Title} />
        <meta property="twitter:description" content={data.Abstract} />
        <meta
          property="twitter:image"
          content={`https://raw.githubusercontent.com/soliman-sDev/Binary-Bench/main/public${data.HeaderImage}`}
        />
      </Head>
      
      <div className="min-h-screen relative bg-[#E0E1DD] dark:bg-[#0D1B2A]">
        <Navbar topics={topics} />
        <div className="py-24">
          <BlogInner data={data} content={content} headings={headings} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default id;