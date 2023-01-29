import toDoStatusMapper from "@/mappers/to-do-status-mapper";
import Vue from "vue";

export const toDoStatusFilter = Vue.filter("toDoStatus", function (rawStatus) {
  return toDoStatusMapper.convertRawToLabel(rawStatus);
});
