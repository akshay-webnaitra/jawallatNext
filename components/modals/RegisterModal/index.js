import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import {
  settingSelector,
  setShowLogin,
  setShowRegister,
  setShowResetPassword,
  setResetPasswordStep,
} from "@/slices/settings";
import { postSignup } from "@/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import styles from "@/partials/header/style.module.css";

const RegisterModal = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [termCondition, setTermCondition] = useState(false);
  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [lastNameValidated, setLastNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const { showLogin, showRegister, showResetPassword } =
    useSelector(settingSelector);

  const registerHandleClose = () => dispatch(setShowRegister(false));

  const loginHandleShow = () => {
    dispatch(setShowLogin(true));
    dispatch(setShowRegister(false));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (emailValidated && passwordValidated) {
      dispatch(
        postSignup(
          { firstName, lastName, email, password },
          () => {
            dispatch(setShowRegister(false));
            setFirstName("");
            setLastName("");
            setPassword("");
            setEmail("");
            setPassword("");
            setLoading(false);
            toast.success("تم تسجيلك بنجاح");
          },
          () => {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setLoading(false);
            toast.error("فشل في التسجيل");
          }
        )
      );
    } else {
      if (!emailValidated && !passwordValidated) {
        toast.error("الرجاء إدخال بريد إلكتروني صالح وكلمة مرور");
      } else if (!emailValidated) {
        toast.error("الرجاء إدخال بريد إلكتروني صحيح");
      } else {
        toast.error("الرجاء إدخال كلمة مرور صالحة");
      }
    }
    e.preventDefault();
  };

  useEffect(() => {
    setFirstNameValidated(firstName.length > 3);
    setLastNameValidated(lastName.length > 3);
    setEmailValidated(
      email.length > 3 &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    );
    setPasswordValidated(password.length > 3);
  }, [firstName, lastName, email, password]);

  return (
    <Modal
      show={showRegister}
      className={styles.jawallat_Loginform_main}
      onHide={registerHandleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <button
          className={styles.jawallat_Loginform_close}
          onClick={registerHandleClose}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className={styles.jawallat_Loginform_dialouge}>
          <div className={styles.jawallat_Loginform_content}>
            <div className={styles.jawallat_Loginform_dialouge}>
              <div className={styles.jawlatt_loginform_heading}>
                <h2>تسجيل الدخول</h2>
                <p>رسائل التنبية تظهر هنا</p>
              </div>
              <form onSubmit={handleRegisterSubmit}>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>
                        الإسم الأول
                        <span className={styles.jawlatt_fieldRequired}>*</span>
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e?.target?.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>
                        الإسم الأخير
                        <span className={styles.jawlatt_fieldRequired}>*</span>
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e?.target?.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    البريد الإلكتروني
                    <span className={styles.jawlatt_fieldRequired}>*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e?.target?.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>
                    إختر كلمة المرور
                    <span className={styles.jawlatt_fieldRequired}>*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e?.target?.value);
                    }}
                  />
                </div>
                <div className={styles.jawlatt_remember_me}>
                  <input
                    type="checkbox"
                    id="term_condition"
                    name="term_condition"
                    checked={termCondition}
                    onChange={(e) => {
                      setTermCondition(e?.target?.checked);
                    }}
                  />
                  <label htmlFor="remember_me">
                    أوافق على <a href="#"> الشروط والاحكام</a>
                  </label>
                </div>
                <div className={styles.jawallat_Loginform_btn}>
                  <button type="submit" className="btn btn-primary">
                    دخول
                  </button>
                </div>
              </form>
              <div className={styles.jawlatt_alredyAccount}>
                <label>
                  لديك حساب بالفعل؟.
                  <span onClick={loginHandleShow}> سجل</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
