<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Task } from "../../models";
    import TodoItem from "./TodoItem.svelte";

    export let todoItems: Task[];

    const dispatcher = createEventDispatcher();

    function onDeleteItem(id: string) {
        todoItems = todoItems.filter((todoItem: Task) => todoItem.id != id);
        dispatcher("onDelete");
    }
</script>

<div>
    <!-- the todoItem.id allows svelte to bind any data to the specfic todoitem -->
    {#each todoItems as todoItem (todoItem.id)}
        <TodoItem
            bind:task={todoItem}
            on:deleteItem={() => onDeleteItem(todoItem.id)}
            on:editItem={() => dispatcher("editItem", todoItem)}
            on:titleBlur={() => dispatcher("titleBlur", todoItem)}
            on:statusChange={() => dispatcher("statusChange", todoItem)}
        />
    {/each}
</div>

<style>
    div {
        display: flex;
        gap: 5px;
        flex-direction: column;
    }
</style>
