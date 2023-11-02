<script setup lang="ts">
    import { defineEmits, reactive} from 'vue'
    import TodoButton from './TodoButton.vue';

    const emit = defineEmits(['create-todo'])
    const todoState = reactive({
        todo: '',
        invalid: false,
        errMsg: ''
    })

    const createTodo = () =>{
        todoState.invalid = false
        if(todoState.todo){
            emit('create-todo', todoState.todo)
            todoState.todo = ''
            return;
        }
        todoState.invalid = true
        todoState.errMsg = 'Todo cannot be empty'
    }

</script>

<template>
    <div class="todo-wrapper">
        <input type="text" placeholder="Enter todo" v-model="todoState.todo">
        <TodoButton @click="createTodo">Submit</TodoButton>
    </div>
    <p class="error" v-if="todoState.invalid">{{ todoState.errMsg }}</p>
</template>
<style scoped>

</style>