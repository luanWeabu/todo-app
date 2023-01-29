<template>
  <div>
    <table class="elevation-1">
      <thead>
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            :style="{ textAlign: header.align }"
          >
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="no-data" v-if="items.length === 0">
          <td :colspan="headers.length">No Data</td>
        </tr>
        <tr v-else v-for="item in items" :key="item.id">
          <td
            v-for="(header, index) in headers"
            :key="index"
            :style="{ textAlign: header.align }"
          >
            <template
              v-if="['createdAt', 'lastModifiedAt'].includes(header.value)"
            >
              {{ item[header.value] | formatDateTime("dd/MM/yyyy, HH:mm:ss") }}
            </template>
            <template v-else-if="header.value === 'status'">
              <v-chip
                :color="item.badgeStyle.color"
                :text-color="item.badgeStyle.textColor"
                >{{ item[header.value] | toDoStatus }}</v-chip
              >
            </template>
            <template v-else>
              {{ item[header.value] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        {
          text: "Title",
          align: "left",
          sortable: true,
          value: "title",
        },
        {
          text: "Status",
          align: "center",
          sortable: true,
          value: "status",
        },
        {
          text: "Created At",
          align: "left",
          sortable: true,
          value: "createdAt",
        },
        {
          text: "Last Modified At",
          align: "left",
          sortable: true,
          value: "lastModifiedAt",
        },
        {
          text: "Action",
          align: "center",
          sortable: false,
          value: "actionBtn",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
