import { type PostDto } from "../api/index.ts";

export const PostCard = (props: PostDto) => {
  return (
    <div className="flex flex-col pt-[30px] px-[30px]">
      <h3 className="font-semibold text-[22px] tracking-[1px] text-neutral-600">
        <a href={`/posts/${props.id}`}>{props.title}</a>
      </h3>
      
      <p className="text-sm mt-[6px] mb-[14px]">{props.summary}</p>

      <div className="pb-[30px] border-b flex items-center gap-4 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <i class="fa-solid fa-calendar"></i>
          <span>{props.createdAt.toDateString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <i class="fa-solid fa-tags"></i>
          {props.tags.map((tag) => <a key={tag} href={`/tags/${tag}`}>{tag}
          </a>)}
        </div>
      </div>
    </div>
  );
};
