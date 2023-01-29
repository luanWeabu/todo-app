<template>
  <div>
    <v-container>
      <div class="to-do-header">
        <v-btn @click="toggleShowCreateToDo(true)">Create a task</v-btn>
        <v-dialog v-model="isShowingCreateToDoForm" width="640">
          <!-- Create To do form -->
          <to-do-form
            v-if="isShowingCreateToDoForm"
            @toDoFormCreated="handleToDoFormCreated"
          ></to-do-form>
        </v-dialog>
      </div>
      <div class="to-do-data">
        <to-do-list :items="items"></to-do-list>
      </div>
    </v-container>
  </div>
</template>

<script lang="js">
import ToDoList from '@/components/ToDoList.vue';
import ToDoForm from '@/components/ToDoForm.vue';
import toDoService from '@/services/to-do.service';
import { TO_DO_STATUS } from '@/constants/to-do-status.constant';

export default {
  name: 'ToDoView',
  components: {
    'to-do-list': ToDoList,
    'to-do-form': ToDoForm
  },
  data() {
    return {
      isShowingCreateToDoForm: false,
      items: []
    }
  },
  mounted() {
    this.refreshToDo()
  },
  methods: {
    toggleShowCreateToDo (isShowing) {
      this.isShowingCreateToDoForm = isShowing
    },
    generateToDoBadgeStyle(status) {
      switch (status) {
        case TO_DO_STATUS.COMPLETED:
          return {
            color: "green",
            textColor: "white",
          };
        case TO_DO_STATUS.IN_PROGRESS:
          return {
            color: "blue",
            textColor: "white",
          };
        case TO_DO_STATUS.REJECTED:
          return {
            color: "red",
            textColor: "white",
          };
        default: {
          return {
            color: null,
            textColor: "black",
          };
        }
      }
    },
    async refreshToDo () {
      try {
        const items = await toDoService.queryToDo();
        this.items = items.map((item) => ({
          ...item,
          badgeStyle: this.generateToDoBadgeStyle(item.status),
        }));
      } catch (e) {
        //
      }
    },
    handleToDoFormCreated () {
      this.toggleShowCreateToDo(false);
      this.refreshToDo();
    }
  },
};
</script>

<style lang="scss"></style>
