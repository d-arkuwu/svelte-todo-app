<script lang="ts">
    import type { Task } from "../models";
    import TodoItem from "./TodoItem.svelte";

    let todoItems: Task[] = [
        {
            id: "1",
            title: "dont wank!",
            isCompleted: false,
        },
        {
            id: "2",
            title: "what the fuck!",
            isCompleted: false,
        },
    ];

    function onDeleteItem(id:string) {
        todoItems = todoItems.filter(
            (todoItem: Task) => todoItem.id != id
        );
    }
</script>

<div>
    {#each todoItems as todoItem( todoItem.id )}
        <TodoItem
            bind:task={todoItem}
            on:deleteItem={() => onDeleteItem(todoItem.id)}
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
