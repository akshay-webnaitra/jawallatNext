import Link from "next/link";

const JawlattLink = ({ href, children, className }) => {
  if (!href || !children) {
    return null;
  }

  return (
    <Link
      href={{
        pathname: href,
        query: { refresh: "true" },
      }}
      className={className ? className : null}
      as={href}
    >
      {children}
    </Link>
  );
};
export default JawlattLink;
