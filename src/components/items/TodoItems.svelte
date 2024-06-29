<script lang="ts">
    import type { Task } from "../../models";
    import TodoItem from "./TodoItem.svelte";

    export let todoItems:Task[]

    function onDeleteItem(id:string) {
        todoItems = todoItems.filter(
            (todoItem: Task) => todoItem.id != id
        );
    }
</script>

<div>
    <!-- the todoItem.id allows svelte to bind any data to the specfic todoitem -->
    {#each todoItems as todoItem( todoItem.id )}
        <TodoItem
            bind:task={todoItem}
            on:deleteItem={() => onDeleteItem(todoItem.id)}
        />declare module 'foo';
    {/each}
</div>

<style>
    div {
        display: flex;
        gap: 5px;
        flex-direction: column;
    }
</style>
