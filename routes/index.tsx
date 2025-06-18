import { define } from "../utils.ts";
import { PostCard } from "../components/PostCard.tsx";
import { page, PageProps } from "fresh";
import { getApiPosts } from "../api/sdk.gen.ts";
import { PagedDataOfPostDto } from "../api/index.ts";

export const handler = define.handlers(async () => {
  const { data } = await getApiPosts({ query: { page: 1, perPage: 10 } });
  return page(data);
});

export default function Home({ data }: PageProps<PagedDataOfPostDto>) {
  return data.records.map((it, index) => <PostCard key={index} {...it} />);
}
