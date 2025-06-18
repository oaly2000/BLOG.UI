import { define } from "../utils.ts";
import { ArchiveDto } from "../api/types.gen.ts";
import { Archive } from "../components/Archive.tsx";
import { getApiArchive } from "../api/sdk.gen.ts";
import { page, PageProps } from "fresh";

export const handler = define.handlers(async () => {
  const { data } = await getApiArchive();
  return page(data);
});

export default function Index({ data }: PageProps<ArchiveDto[]>) {
  return (
    <div className="flex flex-col">
      {data.map((dto) => <Archive key={dto.title} {...dto} />)}
    </div>
  );
}
