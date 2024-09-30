import React, { useState, useEffect } from "react";

const useDfpSlot = ({ path, size, id }) => {
  useEffect(() => {
    if (!!path && !!size && !!id) {
      //   const googletag = window.googletag || {};
      //   googletag.cmd = googletag.cmd || [];
      //   googletag.cmd.push(function () {
      //     googletag.defineSlot(path, size, id).addService(googletag.pubads());
      //     googletag.pubads().enableSingleRequest();
      //     googletag.enableServices();
      //   });
      //   googletag.cmd.push(function () {
      //     googletag.display(id);
      //   });
    }
  }, [path, size, id]);
};

export default useDfpSlot;
