<script lang="ts">
    import TodoItemAdd from "./components/items/TodoItemAdd.svelte";
    import TodoItems from "./components/items/TodoItems.svelte";
    import EditTaskModel from "./components/modals/EditTaskModel.svelte";
    import type { Task } from "./models";
    import { v4 as uuidv4 } from "uuid";

    //moving the main todoItem array to the heart of the application
    //another thing we couldve done though was using svelte stores

    let todoItems: Task[] = [];

    let isEditTaskModalVisible = false;

    let taskToEdit:Task;

    function onTaskEdit(event:any){
        console.log(event.detail)
        taskToEdit = structuredClone(event.detail)
        isEditTaskModalVisible = true;
    }

    function logTasks(){
        console.log(todoItems)
    }
    
    function onSave(event:any){
        console.log(event.detail)
        todoItems = todoItems.map((v:Task) => v.id == event.detail.id ? event.detail : v)
    }
</script>

<main>
    <button on:click={logTasks}> log </button>
    <EditTaskModel bind:task={taskToEdit} bind:isVisible={isEditTaskModalVisible} on:onSave={onSave}></EditTaskModel>
    <TodoItems bind:todoItems on:editItem={onTaskEdit} />
    <TodoItemAdd bind:todoItems />
</main>

<style>
</style>
