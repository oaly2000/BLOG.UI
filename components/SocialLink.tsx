import { ComponentChild } from "preact";

export type SocialLinkProps = {
  href: string;
  icon: ComponentChild;
  title: string;
};

export const SocialLink = ({ href, icon, title }: SocialLinkProps) => {
  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2"
    >
      {icon}
    </a>
  );
};
