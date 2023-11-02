<script setup lang="ts">
    import CreateTodo from '../components/CreateTodo.vue'
    import TodoLists from '../components/TodoLists.vue'
    import {todoType} from '../types/type'
    import { nanoid } from 'nanoid'
    import {ref} from 'vue'

    const todolist = ref<todoType[]>([])

    const createTodo = (todo: any) =>{
        todolist.value.push({
            id: nanoid(),
            todo: todo,
            isComplete: false,
            isEditing: false
        })
    }
    const toggleComplete = (index: number) =>{
        todolist.value[index].isComplete = !todolist.value[index].isComplete
    }
    const toggleEditing = (index:number) =>{
        todolist.value[index].isEditing = !todolist.value[index].isEditing
    }
    const updateTodo = (todo: any, index: number ) =>{
        todolist.value[index].todo = todo
    }
    const deleteTodo = (id: string) =>{
        todolist.value = todolist.value.filter((todo) => todo.id !== id)
    }
</script>

<template>
    <CreateTodo @create-todo="createTodo"/>
    <ul>
        <TodoLists 
            v-for="(todo, index) in todolist" 
            :todolist="todo"
            :index="index"
            @toggle-complete="toggleComplete"
            @toggle-editing="toggleEditing"
            @update-todo="updateTodo"
            @delete-todo="deleteTodo"
        />
    </ul>
</template>
<style scoped>

</style>