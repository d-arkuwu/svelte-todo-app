<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Task } from "../../models";
    import Modal from "./Modal.svelte";

    const dispatcher = createEventDispatcher()
    
    export let task:Task
    
    export let isVisible = false;

    function onCloseModal(){
        isVisible = false;
        dispatcher("saveToLocal")
    }

    function onSave(){
        dispatcher("onSave", task)
        onCloseModal()
    }

</script>

<!-- we did create this wrapper for Model but now we need to dynamically output a model that allows us to edit tasks -->
<!-- this is done now using slots, which allows us to send html to child these custom components -->
<!-- you write the html in the Model tag here and use the slot tag in the Model file -->

{#if isVisible}
    <Modal on:closeModal={onCloseModal}>
        <h1>Edit Task</h1>
        <input type="text" bind:value={task.title}>
        <button on:click={onCloseModal}>Close</button>
        <button on:click={onSave}>Save</button>
    </Modal>
{/if}
