<script lang="ts">
    import type { Task } from  "../../models";
    import TodoItemActions from "./TodoItemActions.svelte";

    //export allows whatever component is using this component (so the parent) to send in
    //data to the component. in this case, the parent todoItems can now give the data to the
    //todoitem to create the item :)
    export let task: Task;

</script>

<div>
    <span contenteditable="true" bind:textContent={task.title}></span>
    <TodoItemActions on:deleteItem />
</div>

<style>
    div {
        display: flex;
        border: 1px solid black;
        padding: 10px;
        justify-content: space-between;
    }
</style>
