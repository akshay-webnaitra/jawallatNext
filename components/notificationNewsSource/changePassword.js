import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify"; // Assuming you are using react-toastify for displaying toasts.

const ChangePassword = ({
  changePasswordLoading,
  handleSubmit,
  password,
  setPassword,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="my-4 py-5 px-5"
      style={{ backgroundColor: "#F8F8F8", borderRadius: 13 }}
    >
      <form onSubmit={(e) => handleSubmit(e, password)}>
        <div className="row">
          <div className="col-md-6">
            {/* Old Password Field */}
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">الإسم</label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ahmed"
                  name="old_password"
                  onChange={handleChange}
                  value={password?.old_password}
                />
              </div>
            </div>

            {/* New Password Field */}
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">الايميل</label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ahmedmoftah@live.com"
                  name="new_password"
                  onChange={handleChange}
                  value={password?.new_password}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="row justify-content-end">
              <div className="col-sm-10">
                <button
                  type="submit"
                  className="btn arabic24-bg-dark-red text-white px-1"
                >
                  {changePasswordLoading ? <Spinner /> : "تعديل كلمة المرور"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
