import getPostLink from "@/utils/getPostLink";
import JawlattLink from "@/components/JawlattLink";
import { useEffect, useState } from "react";

const PostLink = ({ item, children, className }) => {
  const [postLink, setPostLink] = useState("#");

  useEffect(() => {
    if (item) {
      let postLinkTemp = getPostLink(item);
      setPostLink(postLinkTemp);
    }
  }, [item]);

  return (
    <JawlattLink href={postLink} className={className ? className : null}>
      {children}
    </JawlattLink>
  );
};
export default PostLink;
