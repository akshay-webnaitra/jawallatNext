import Link from "next/link";

const JawlattLink = ({ href, children }) => {
  if (!href || !children) {
    return null;
  }
  const updatedHref = href;
  return (
    <Link
      href={{
        pathname: updatedHref,
        query: { refresh: "true" },
      }}
    >
      {children}
    </Link>
  );
};
export default JawlattLink;
