import Vue from "vue";
import { format } from "date-fns";

export const formatDateTimeFilter = Vue.filter(
  "formatDateTime",
  function (rawDateTime, dateTimeFormat) {
    if (rawDateTime.length === 0) return "N/A";
    const date = new Date(rawDateTime);
    return format(date, dateTimeFormat);
    // return format(date, "dd/MM/yyyy, HH:mm:ss");
  }
);
