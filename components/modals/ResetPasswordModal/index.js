import {
  settingSelector,
  setShowLogin,
  setShowRegister,
  setShowResetPassword,
} from "@/slices/settings";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import styles from "@/partials/header/style.module.css";

const ResetPasswordModal = () => {
  const [email, setEmail] = useState("");
  const [emailValidated, setEmailValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { showLogin, showRegister, showResetPassword, resetPasswordStep } =
    useSelector(settingSelector);

  const resetPasswordHandleClose = () => {
    setShowResetPassword(1);
    dispatch(setShowResetPassword(false));
    dispatch(setShowLogin(false));
  };

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    if (emailValidated) {
      setLoading(true);
      let response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.status == 200) {
        toast.success("Logged In successfully");
        window.location.reload();
      } else {
        toast.error("Please enter valid email and password");
      }
    } else {
      toast.error("Please enter valid email");
    }
    e.preventDefault();
  };

  useEffect(() => {
    setEmailValidated(
      email.length > 3 &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    );
  }, [email]);

  return (
    <>
      <Modal
        show={showResetPassword && resetPasswordStep == 1}
        className={styles.jawallat_Loginform_main}
        onHide={resetPasswordHandleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <button
            className={styles.jawallat_Loginform_close}
            onClick={resetPasswordHandleClose}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className={styles.jawallat_Loginform_dialouge}>
            <div className={styles.jawallat_Loginform_content}>
              <div className={styles.jawallat_Loginform_dialouge}>
                <div className={styles.jawlatt_loginform_heading}>
                  <h2>نسيت كلمة السر</h2>
                  <br />
                </div>
                <form onSubmit={handleResetPasswordSubmit}>
                  <div className="form-group">
                    <input type="text" placeholder="البريد الإلكتروني" />
                  </div>
                  <div className={styles.jawallat_Loginform_btn}>
                    <button type="submit" className="btn btn-primary">
                      أرسل{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showResetPassword && resetPasswordStep == 2}
        className={styles.jawallat_Loginform_main}
        onHide={resetPasswordHandleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <button
            className={styles.jawallat_Loginform_close}
            onClick={resetPasswordHandleClose}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className={styles.jawallat_Loginform_dialouge}>
            <div className={styles.jawallat_Loginform_content}>
              <div className={styles.jawallat_Loginform_dialouge}>
                <div className={styles.jawlatt_loginform_heading}>
                  <h2>نجحت!</h2>
                </div>
                <div className={styles.jawlatt_frgt_password}>
                  <p>
                    من فضلك قم بتفقد بريدك الإلكتروني.
                    <br />
                    لقد أرسلنا لك رسالة إعادة تعيين كلمة المرور{" "}
                  </p>
                  <button>رجوع</button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showResetPassword && resetPasswordStep == 3}
        className={styles.jawallat_Loginform_main}
        onHide={resetPasswordHandleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className={styles.jawallat_Loginform_dialouge}>
            <div className={styles.jawallat_Loginform_content}>
              <button
                className={styles.jawallat_Loginform_close}
                onClick={resetPasswordHandleClose}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className={styles.jawallat_Loginform_dialouge}>
                <div className={styles.jawlatt_loginform_heading}>
                  <h2>نسيت كلمة السر</h2>
                </div>
                <form onSubmit={handleResetPasswordSubmit}>
                  <div className="form-group">
                    <label>كلمة المرور الجديدة</label>
                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <label>إعادة تعيين كلمة المرور</label>
                    <input type="text" />
                  </div>
                  <div className={styles.jawallat_Loginform_btn}>
                    <button type="submit" className="btn btn-primary">
                      إعادة تعيين كلمة المرور
                    </button>
                  </div>

                  <div className={"mt-3 " + styles.jawlatt_frgt_password}>
                    <button onClick={resetPasswordHandleClose}>رجوع</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showResetPassword && resetPasswordStep == 4}
        className={styles.jawallat_Loginform_main}
        onHide={resetPasswordHandleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className={styles.jawallat_Loginform_dialouge}>
            <div className={styles.jawallat_Loginform_content}>
              <button
                className={styles.jawallat_Loginform_close}
                onClick={resetPasswordHandleClose}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className={styles.jawallat_Loginform_dialouge}>
                <div className={styles.jawlatt_loginform_heading}>
                  <h2>نجحت!</h2>
                </div>
                <form onSubmit={handleResetPasswordSubmit}>
                  <div className="form-group">
                    <label className="text-center mb-5">
                      تم إعادة تعيين كلمة المرور الجديدة
                    </label>
                  </div>
                  <div className={styles.jawallat_Loginform_btn}>
                    <button
                      type="submit"
                      onClick={resetPasswordHandleClose}
                      className="btn btn-primary"
                    >
                      رجوع
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ResetPasswordModal;
