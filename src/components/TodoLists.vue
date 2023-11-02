<script setup lang="ts">
    import {defineProps, defineEmits} from 'vue'
    const emits = defineEmits(['update-todo', 'delete-todo', 'toggle-complete', 'toggle-editing'])
    const props = defineProps({
        todolist: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    })

    const deleteTodo = () => {
        emits('delete-todo', props.todolist.id)
    }
</script>
<template>
    <li>
        <input type="checkbox" 
            :checked="todolist.isComplete" 
            @input="$emit('toggle-complete', index)"
        >
        <input type="text" 
            v-if="todolist.isEditing"
            :value="todolist.todo"
            @input="$emit('update-todo', ($event.target as HTMLInputElement)?.value, index)"
        >
        <span 
            v-else
            :class="{'completed-todo' : todolist.isComplete}">
            {{ todolist.todo }}
        </span>
        <i class="fa-solid fa-circle-check"
             @click="$emit('toggle-editing', index)"
             v-if="todolist.isEditing"
             ></i>
        <i class="fa-solid fa-pen" 
            v-else
            @click="$emit('toggle-editing', index)"
        ></i>
        <i class="fa-solid fa-trash" @click="deleteTodo"></i>
    </li>
</template>
<style scoped>
li{
    display: flex;
    align-items: center;
    gap: 5px;
}
.completed-todo{
    text-decoration: line-through;
}
</style>