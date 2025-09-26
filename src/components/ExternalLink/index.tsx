import { Link, LinkProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ExternalLinkProps extends LinkProps {
  children: ReactNode;
}

export function ExternalLink({ children, ...rest }: ExternalLinkProps) {
  return (
    <Link
      color="gray.500"
      variant="plain"
      _hover={{
        textDecoration: "none",
        color: "#FFF",
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}
