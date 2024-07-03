<script lang="ts">
    import { onMount } from "svelte";
    import TodoItemAdd from "./components/items/TodoItemAdd.svelte";
    import TodoItems from "./components/items/TodoItems.svelte";
    import EditTaskModel from "./components/modals/EditTaskModel.svelte";
    import { modals, type Task } from "./models";

    //moving the main todoItem array to the heart of the application
    //another thing we couldve done though was using svelte stores

    const local_storage_key = "TodoItemArray";

    let todoItems: Task[] = [];

    onMount(() => {
        const data = window.localStorage.getItem(local_storage_key);
        if (data == null) return;

        try {
            const todoData: Task[] = JSON.parse(data);
            todoItems = todoData;
        } catch (error) {
            console.log(error);
        }
    });

    function onTaskEdit(event: any) {
        console.log(event.detail);
        modals.editTaskModal.data = structuredClone(event.detail);
        modals.editTaskModal.visible = true;
    }

    function logTasks() {
        console.log(todoItems);
    }

    function onSave(event: any) {
        console.log(event.detail);
        todoItems = todoItems.map((v: Task) =>
            v.id == event.detail.id ? event.detail : v
        );
        saveToLocalStorage();
    }

    function saveToLocalStorage() {
        window.localStorage.setItem(
            local_storage_key,
            JSON.stringify(todoItems)
        );
    }
</script>

<main>
    <!-- <button on:click={logTasks}> log </button> -->

    <EditTaskModel
        bind:task={modals.editTaskModal.data}
        bind:isVisible={modals.editTaskModal.visible}
        on:onSave={onSave}
        on:saveToLocal={saveToLocalStorage}
    ></EditTaskModel>

    <TodoItems
        bind:todoItems
        on:editItem={onTaskEdit}
        on:onDelete={saveToLocalStorage}
        on:titleBlur={saveToLocalStorage}
        on:statusChange={saveToLocalStorage}
    />

    <TodoItemAdd bind:todoItems on:newTaskCreated={saveToLocalStorage} />
</main>

<style>
</style>
