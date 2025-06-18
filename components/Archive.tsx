import { ArchiveDto } from "../api/types.gen.ts";
import { ListingTitle } from "./ListingTitle.tsx";

export const Archive = (props: ArchiveDto) => {
  return (
    <div>
      <ListingTitle>{props.title}</ListingTitle>

      <ul>
        {props.posts.map((post) => (
          <li
            key={post.id}
            className="pb-[5px] flex items-center justify-between"
          >
            <a href={`/posts/${post.id}`}>{post.title}</a>
            <span className="text-neutral-400">
              {post.createdAt.toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
