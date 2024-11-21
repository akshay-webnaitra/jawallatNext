import axios from "axios";
// const axios = require('axios');

// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.

// const API_BASE_URL = process.env.API_BASE_URL;

const API_BASE_URL_STAGING = process.env.API_BASE_URL_STAGING;

const customAxios = axios.create({
  baseURL: API_BASE_URL_STAGING,
  //baseURL: PROD_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${accessToken}`
  },
  timeout: 30000,
});

// Step-2: Create request, response & error handlers
const requestHandler = (request) => {
  request.headers.Authorization =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzk1ODFiMzlmY2UzM2M1NWE5MGJhZmRmNmU2YzE1N2E5MzAyOGU2ZTE3MmQ1YjMxZDE3MzJjOTk5NzEyYjk2NzQxYzVjMzJkNjc5MDA1OTciLCJpYXQiOjE2NjAxMTQ5MDcuMjQyNDU1LCJuYmYiOjE2NjAxMTQ5MDcuMjQyNDYxLCJleHAiOjE2OTE2NTA5MDcuMTQ0MDMyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.DfvVj-r2MOBWsM5hONDT26UFWLvOaFvcE3CrY41-TDJNLkiv11ISEckJLtG4tm4s8MyaOYHP1O27BSn5JnQ2le8yMM8EJFQxvXnGKyeKNdtCBa3uPLNYGSfeQVdQt4illwpuWa0Du6Pon8UV_wP7kn1p2pxWnPz-5s6Xvp3qhupJ9qRjOIuxreySFPsUpbpIAhX_HtE1anq8Kkm-ZCGw4_AzTX93y3vXqyIZ54i2M04uU2TIGLXcsB5yIAtjxmJWhRhL9DQ0rB2IKyIy8ojHEb_n1EPC8Sf3oiH8r2mnwAwllZKXx6cTyDwYdiFf-QyYLg471DTM6WjsjRqTfOLjrgsNwn9GNx5Z20Um6enqgzqy_OKIeqWdz78KWbigyR2EAPmtG2_7-pm98Eac6Xd2xeOVEKCNZGBFhrIEB7pJ0dV4KgUU7SVqDpZhv_Ccc24ZyGrzEif_orMjJVkhE24n2RR_5Bk9tJZ6X8u0tlFAOsvXEceLEGG9KSO1UMsPHO8SC-fRrazTaqPKNiGZflKQfCQSk_STSbgRGBEmRkKZ4FBzOQrX_opnE_z8lmE36AFeReXxV59a7sKUh20jZ8u9xG7IoQ9idDs-2U6HJm4TEJ9zcy8hHJ7dszEPAZU_8EwVnX2djeOxYm9Sgk0o2E6Yl8MbLcMAbxTav1d1-qlsyZg";

  return request;
};

const responseHandler = (response) => {
  if (response.status == 401) {
    window.location = "/";
  }

  return response;
};

const errorHandler = (error) => {
  // if (error.response.status === 401 || error.response.status === 403) {
  //   localStorage.removeItem("jawlatt-token");
  //   localStorage.removeItem("jawlatt-user-id");
  //   let whitlistUrl = [
  //     "/",
  //     "/terms-conditions",
  //     "/privacy-policy",
  //     "/careers",
  //   ];

  //   if (!whitlistUrl.includes(window.location.pathname)) {
  //     window.location = "/";
  //   }
  // }
  return Promise.reject(error);
};

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

// Step-4: Export the newly created Axios instance to be used in different locations.
export default customAxios;
