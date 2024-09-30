import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Api from "@/services/Api";

const NewsLetterForm = ({ type }) => {
  const api = Api.create();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitActive, setSubmitActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.subscribeToNewsletter({ email: email });
      if (response?.data?.sub_message == "success") {
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }

    setEmail("");
  };

  useEffect(() => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      !loading
    ) {
      setSubmitActive(true);
    } else {
      setSubmitActive(false);
    }
  }, [email]);

  return (
    <form action="#" onSubmit={handleSubmit} method="post">
      <input
        type="text"
        className="form-control"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="من فضلك ادخل بريدك الإلكتروني"
      />
      {type == "button" ? (
        <button type="submit" disabled={!submitActive}>
          تسجيل
        </button>
      ) : (
        <input type="submit" value="تسجيل" disabled={!submitActive} />
      )}
    </form>
  );
};

export default NewsLetterForm;
