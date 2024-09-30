import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import {
  settingSelector,
  setShowLogin,
  setShowRegister,
  setShowResetPassword,
  setResetPasswordStep,
} from "@/slices/settings";

import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import styles from "@/partials/header/style.module.css";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { showLogin, showRegister, showResetPassword } =
    useSelector(settingSelector);

  const loginHandleClose = () => {
    dispatch(setShowLogin(false));
  };

  const registerHandleShow = () => {
    dispatch(setShowRegister(true));
    dispatch(setShowLogin(false));
  };

  const resetPasswordHandleShow = () => {
    dispatch(setShowResetPassword(true));
    dispatch(setResetPasswordStep(1));
    dispatch(setShowLogin(false));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (emailValidated && passwordValidated) {
      setLoading(true);
      let response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.status == 200) {
        toast.success("تم تسجيل الدخول بنجاح");
        window.location.reload();
      } else {
        toast.error("الرجاء إدخال بريد إلكتروني صالح وكلمة مرور");
      }
    } else {
      if (!emailValidated && !passwordValidated) {
        toast.error("الرجاء إدخال بريد إلكتروني وكلمة مرور صالحين");
      } else if (!emailValidated) {
        toast.error("الرجاء إدخال بريد إلكتروني صحيح");
      } else {
        toast.error("الرجاء إدخال كلمة مرور صالحة");
      }
    }
    e.preventDefault();
  };

  useEffect(() => {
    setEmailValidated(
      email.length > 3 &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    );
    setPasswordValidated(password.length > 3);
  }, [email, password]);

  return (
    <Modal
      show={showLogin}
      className={styles.jawallat_Loginform_main}
      onHide={loginHandleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className={styles.jawallat_Loginform_dialouge}>
          <div className={styles.jawallat_Loginform_content}>
            <button
              className={styles.jawallat_Loginform_close}
              onClick={loginHandleClose}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className={styles.jawallat_Loginform_dialouge}>
              <div className={styles.jawlatt_loginform_heading}>
                <h2>تسجيل الدخول</h2>
                <p>رسائل التنبية تظهر هنا</p>
              </div>
              <form onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label>إسم المستخدم أو الإيميل</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e?.target?.value);
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>كلمة المرور</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e?.target?.value);
                    }}
                    required
                  />
                </div>
                <div className={styles.jawallat_Loginform_btn}>
                  <button type="submit" className="btn btn-primary">
                    دخول
                  </button>
                </div>
                <div className={styles.jawallat_Loginform_Forget}>
                  <span onClick={resetPasswordHandleShow}>
                    نسيت كلمة المرور؟
                  </span>
                  <span onClick={registerHandleShow}>تسجيل</span>
                </div>
              </form>
              {/* <div className={styles.jawallat_Loginform_loginWith}>
                <a href="#">تسجيل دخول ب</a>
              </div> */}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
