import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: 'yscqxtjv',
  dataset: 'production',
  useCdn: true
})