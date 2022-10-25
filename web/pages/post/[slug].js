import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

function urlFor (source) {
  return imageUrlBuilder(client).image(source);
}

const Post = ({ post }) => {
  const { title = 'Missing title', name = 'Missing name', categories} = post;
  return (
    <article>
      <h1>{title}</h1>
      <span>By {name}</span>
      { categories && (
        <ul>
          Posted in 
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}
    </article>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title, 
  "name": author->name,
  "categories": categories[]->title
}`

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // include a default slug to avoid getting undefined errors
  const { slug = "" } = context.params;
  const post = await client.fetch(
    query, {slug}
  )

  return {
    props: {
      post
    }
  }
}

export default Post;
