import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import JawlattLink from "@/components/JawlattLink";
import SocialShareButton from "@/components/SocialShareButton";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { setShowLogin } from "@/slices/settings";
import { addUserFavorite, deleteUserFavorite } from "@/slices/user";

export default function PostMeta({ source, date, item, hideShare }) {
  const [isAuth, setAuth] = useState(false);
  const [marked, setMarked] = useState(item?.favorite);
  const dispatch = useDispatch();
  const { data: session, status } = useSession();

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    if (status !== "authenticated") {
      dispatch(setShowLogin(true));
    } else {
      if (!marked) {
        dispatch(
          addUserFavorite(
            { userId: session?.user?.id, newsId: item?.id },
            () => {
              toast.success("تمت إضافة إشارة مرجعية بنجاح");
              setMarked(true);
            }
          )
        );
      } else {
        dispatch(
          deleteUserFavorite(
            { userId: session?.user?.id, newsId: item?.id },
            () => {
              toast.success("تمت إزالة إشارة مرجعية بنجاح");
              setMarked(false);
            }
          )
        );
      }
    }
  };

  return (
    <>
      <ul className={styles.jawallat_postmeta}>
        {source && (
          <li>
            <JawlattLink href={`/source/${source}`}>{source}</JawlattLink>
          </li>
        )}
        {date ? (
          <li>{moment(date).format("DD/MM/YYYY")}</li>
        ) : (
          <li>{moment().format("DD/MM/YYYY")}</li>
        )}
        <li>
          <a
            href="#"
            className={styles.jawallat_bookmark}
            onClick={(e) => {
              handleBookmarkClick(e);
            }}
          >
            {!marked ? (
              <i className="fa-regular fa-bookmark"></i>
            ) : (
              <i className="fa-solid fa-bookmark"></i>
            )}
            <span className={styles.jawallat_sr_only}>Bookmark</span>
          </a>

          {!hideShare && (
            <SocialShareButton
              iconClassName={styles.jawallat_upload}
              srClassName={styles.jawallat_sr_only}
              item={item}
            />
          )}
        </li>
      </ul>
    </>
  );
}
