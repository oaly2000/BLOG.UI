import { page, PageProps } from "fresh";
import { ArchiveDto } from "../../api/types.gen.ts";
import { Archive } from "../../components/Archive.tsx";
import { define } from "../../utils.ts";
import { getApiTagsByName } from "../../api/sdk.gen.ts";

export const handler = define.handlers(async (ctx) => {
  const { slug } = ctx.params;

  return page<ArchiveDto>({
    title: "标签",
    posts: (await getApiTagsByName({ path: { name: slug } })).data!,
  });
});

export default function TagPage({ data }: PageProps<ArchiveDto>) {
  return <Archive {...data} />;
}
