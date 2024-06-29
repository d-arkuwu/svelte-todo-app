<script lang="ts">
    import TodoItemAdd from "./components/items/TodoItemAdd.svelte";
    import TodoItems from "./components/items/TodoItems.svelte";
    import type { Task } from "./models";
    import { v4 as uuidv4 } from "uuid";

    //moving the main todoItem array to the heart of the application
    //another thing we couldve done though was using svelte stores

    let todoItems: Task[] = [];
</script>

<main>
    <TodoItems bind:todoItems />
    <TodoItemAdd bind:todoItems />
</main>

<style>
</style>
