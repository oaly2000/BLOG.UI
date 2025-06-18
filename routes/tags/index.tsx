import { define } from "../../utils.ts";
import { TagDtoWithPostCount } from "../../api/types.gen.ts";
import { ListingTitle } from "../../components/ListingTitle.tsx";
import { page, PageProps } from "fresh";
import { getApiTags } from "../../api/sdk.gen.ts";

export const handler = define.handlers(async () => {
  const { data } = await getApiTags();
  return page(data);
});

export default function Index({ data }: PageProps<TagDtoWithPostCount[]>) {
  return (
    <div>
      <ListingTitle>标签</ListingTitle>

      <ul>
        {data.map((tag) => (
          <li
            key={tag.name}
            className="flex items-center justify-between pb-[18px]"
          >
            <a href={`/tags/${tag.name}`} className="text-neutral-600">
              {tag.name}
            </a>

            <span className="block min-w-9 rounded-2xl text-center text-neutral-50 bg-neutral-500">
              {tag.postCount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
