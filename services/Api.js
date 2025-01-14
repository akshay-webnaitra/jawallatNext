import apisauce from "apisauce";
import customAxios from "@/utils/customAxios";

const Api = {
  create: () => {
    const api = apisauce.create({
      axiosInstance: customAxios,
    });

    const setAuthData = (authData) => {
      return api.setHeaders(authData);
    };

    return {
      setAuthData,
      addUserFavorite: (params) => api.post(`/api/web/addUserFavorite`, params),
      deleteUserFavorite: (params) =>
        api.post(`/api/web/deleteUserFavorite`, params),
      //getUserById: (userId) => api.get(`/api/user/v2/byId/${userId}`),
      login: (params) => api.post(`/api/web/login`, params),
      signup: (params) => api.post(`/api/web/signup`, params),
      forgotPassword: (params) => api.post(`/api/forgotPassword`, params),
      resetPassword: (params) => api.post(`/api/resetPassword`, params),
      increaseShare: (params) => api.post(`/api/web/increaseShare`, params),
      changePassword: (params) => api.post(`/api/web/changePassword`, params),
      addCategoryToUser: (params) =>
        api.post(`/api/web/addCategoryToUser`, params),
      getHomePage: () => api.get(`/api/web/getHomePage`),
      getCategoryPage: (params) => api.get(`/api/web/getCategoryPage`, params),
      getPage: (params) => api.get(`/api/web/getPage`, params),
      getSubCategoryPage: (params) =>
        api.get(`/api/web/getSubCategoryPage`, params),
      getMainCategories: (params) =>
        api.get(`/api/web/getMainCategories`, params),
      getCategorySearchPage: (params) =>
        api.get(`/api/web/getCategorySearchPage`, params),
      getMainSources: (params) => api.get(`/api/web/getMainSources`, params),
      getNewsSourcePage: (params) =>
        api.get(`/api/web/getNewsSourcePage`, params),
      getSingleNewsPage: (params) =>
        api.get(`/api/web/getSingleNewsPage`, params),
      getNews: (params) => api.post(`/api/getNews`, params),
      filterSources: (params) => api.get(`/api/web/filterSources`, params),
      shareNews: (params) => api.post(`/api/increaseShares`, params),
      subscribeToNewsletter: (params) =>
        api.post(`/api/web/subscribeToNewsletter`, params),
      subscribeToWhatsapp: (params) =>
        api.post(`/api/web/subscribeToWhatsapp`, params),
      getVideoPage: (params) => api.get(`/api/web/getVideoPage`, params),
      getLiveStream: (params) => api.get(`/api/web/getLiveStreams`, params),
      getAffiliate: (params) => api.get(`/api/web/getAffiliatePage`, params),
      getAllCountries: (params) => api.get(`/api/web/getAllCountries`, params),
      getTags: (params) => api.post(`/api/getTags`, params),
      getTagPage: (params) => api.get(`/api/web/getTagPage`, params),
      getSearchPage: (params) => api.get(`/api/web/getSearchPage`, params),
      getServer: () => api.get(`/api/web/getServer`),
      getSettings: (params) => api.post(`/api/getSettings`, params),
      getUser: (params) => api.get(`/api/getUser`, params),
      getFooterMenu: (params) => api.post(`/api/getFooterMenu`, params),
      updateNotificationSettings: (params) =>
        api.post(`/api/updateNotificationSettings`, params),
      getNotificationSettings: (params) =>
        api.post(`/api/getNotificationSettings`, params),
      // getUserFavorites: (params) => api.post(`/api/getUserFavorites`, params),
      getUserFavorites: (params) =>
        api.get(`/api/web/getUserFavorites`, params),
      updateProfile: (params) => api.post(`/api/updateProfile`, params),
      Contactus: (params) => api.post(`/api/web/saveContactus`, params),
    };
  },
};

export default Api;
