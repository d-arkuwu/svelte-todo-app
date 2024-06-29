<script lang="ts">
    import TodoItemActions from "./components/TodoItemActions.svelte";
    import TodoItems from "./components/TodoItems.svelte";
    import type { Task } from "./models";

    //moving the main todoItem array to the heart of the application
    //another thing we couldve done though was using svelte stores

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
</script>

<main>
    <TodoItems bind:todoItems={todoItems} />
</main>

<style>
</style>
