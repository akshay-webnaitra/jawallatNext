import getPostLink from "@/utils/getPostLink";
import { useState, useEffect } from "react";
import PostLink from "@/components/PostLink";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from "next-share";
import Modal from "react-bootstrap/Modal";
import styles from "@/partials/header/style.module.css";
import PostMeta from "@/components/PostMeta";

const SocialShareButton = ({ iconClassName, srClassName, item }) => {
  const [postLink, setPostLink] = useState("#");
  const [title, setTitle] = useState("");
  const [newsSocialShow, setNewsSocialShow] = useState(false);

  useEffect(() => {
    if (item) {
      let postLinkTemp = getPostLink(item);
      let title = item?.news_title;
      setTitle(title);
      setPostLink(window.location.href + postLinkTemp);
    }
  }, [item]);
  const newsSocialHandleShow = (e) => {
    e.preventDefault();
    setNewsSocialShow(true);
  };
  const newsSocialHandleClose = () => {
    setNewsSocialShow(false);
  };
  return (
    <>
      <a href="#" className={iconClassName} onClick={newsSocialHandleShow}>
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
        <span className={srClassName}>Upload</span>
      </a>
      <Modal
        show={newsSocialShow}
        className={`${
          styles.jawlatt_notification_Modal +
          " " +
          styles.jawlatt_notificationSocial_Modal
        }`}
        onHide={newsSocialHandleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className={styles.jawallat_Loginform_dialouge}>
            <div className={styles.jawallat_Loginform_content}>
              <button
                className={styles.jawallat_Loginform_close}
                onClick={newsSocialHandleClose}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className={styles.jawlatt_notification_Modal_Content}>
                <div
                  className={styles.jawlatt_notification_Modal_Content_Middle}
                >
                  <div className={styles.jawlatt_notification_Modal_ContentImg}>
                    <img
                      src={
                        !!item?.news_image_url
                          ? item?.news_image_url
                          : item?.news_source_icon
                      }
                      height={100}
                      width={130}
                      alt="Post Img"
                    />
                    <div
                      className={styles.jawlatt_notification_Modal_ContentBadge}
                    >
                      أخبار شرق أوسط
                    </div>
                  </div>
                  <div
                    className={styles.jawlatt_notification_Modal_ContentText}
                  >
                    <h6>
                      <PostLink item={item}>
                        <a>{item?.news_title}</a>
                      </PostLink>
                    </h6>
                    <PostMeta
                      source={item?.news_site}
                      date={item?.news_date}
                      item={item}
                      hideShare={true}
                    />
                  </div>
                </div>

                <div className={"mt-3"}>
                  <div className="p-1 d-inline">
                    <FacebookShareButton
                      url={postLink}
                      quote={title}
                      hashtag={"#jawlatt"}
                    >
                      <FacebookIcon size={40} />
                    </FacebookShareButton>
                  </div>
                  <div className="p-1 d-inline">
                    <LinkedinShareButton url={postLink}>
                      <LinkedinIcon size={40} />
                    </LinkedinShareButton>
                  </div>
                  <div className="p-1 d-inline">
                    <TwitterShareButton url={postLink} title={title}>
                      <TwitterIcon size={40} />
                    </TwitterShareButton>
                  </div>
                  <div className="p-1 d-inline">
                    <WhatsappShareButton
                      url={postLink}
                      title={title}
                      separator=":: "
                    >
                      <WhatsappIcon size={40} />
                    </WhatsappShareButton>
                  </div>
                  <div className="p-1 d-inline">
                    <TelegramShareButton url={postLink} title={title}>
                      <TelegramIcon size={40} />
                    </TelegramShareButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default SocialShareButton;
