<template>
  <v-card>
    <v-card-title>
      <h2>{{ formTitle }}</h2>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="toDoFormData.title"
              label="Title"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="toDoFormData.description"
              outlined
              label="Description"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="resetToDoForm">Reset</v-btn>
      <v-btn @click="createToDo">{{ submitButtonLabel }}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import toDoService from "@/services/to-do.service";

export default {
  name: "ToDoForm",
  props: {
    toDoId: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    formTitle() {
      return this.toDoId !== null ? "Edit a task" : "Create new task";
    },
    submitButtonLabel() {
      return this.toDoId !== null ? "Save" : "Create";
    },
  },
  data() {
    return {
      toDoFormData: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    resetToDoForm() {
      this.toDoFormData = {
        title: "",
        description: "",
      };
    },
    async createToDo() {
      toDoService.createToDo(this.toDoFormData);
      this.$emit("toDoFormCreated");
    },
  },
};
</script>
<style lang="scss"></style>
