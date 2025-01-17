import Link from "next/link";

const JawlattLink = ({ href, children, className }) => {
  if (!href || !children) {
    return null;
  }
  const updatedHref = "/new" + href;
  return (
    <Link
      href={{
        pathname: updatedHref,
        query: { refresh: "true" },
      }}
      className={className ? className : null}
    >
      {children}
    </Link>
  );
};
export default JawlattLink;
