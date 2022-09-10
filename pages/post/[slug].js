// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../../client";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import Head from "next/head";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const sxcomponents = {
  block: {
    // Ex. 1: customizing common block types
    h2: ({ children }) => (
      <h2 className="text-black lg:text-2xl md:text-xl sm:text-lg">
        {children}
      </h2>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    normal: ({ children }) => (
      <p className="text-sm pb-2 text-primary text-black lg:text-xl md:text-md sm:text-md">
        {children}
      </p>
    ),
  },
};

const Post = ({ post }) => {
  const { title, mainImage, body = [] } = post || {};
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="Heroes Arc" content="Heroes Arc"></meta>
      </Head>
      <Navbar />
      <article className="bg-gradient-to-br from-sky-300 via-yellow-50 to-white -mt-10 w-screen">
        <h1 className="mt-10 mb-3 translate-y-10 font-bold text-center sm:text-xl md:text-2xl lg:text-4xl">
          {title}
        </h1>
        {mainImage && <div className="m-20">
          <img src={urlFor(mainImage).url()} alt="Heroes Arc" className="rounded-xl w-screen" />
        </div>}
        <div className="w-[700px] m-auto p-auto sm:w-[300px] md:w-[700px]">
          <PortableText value={body} components={sxcomponents} />
        </div>
      </article>
      <Footer />
    </div>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  body
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  if (!post) {
    return { notFound: true };
  } else {
    return {
      props: {
        post,
      },
    };
  }
}
export default Post;

// it does not require
