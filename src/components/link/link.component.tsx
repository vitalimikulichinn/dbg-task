import Link from "next/link";
import React, { ReactElement } from "react";

interface LinkProps {
  href: string;
  text: JSX.Element | string;
}

export const AppLink: React.FC<LinkProps> = React.memo(({ href, text }) => {
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  );
});

AppLink.displayName = "AppLink";
