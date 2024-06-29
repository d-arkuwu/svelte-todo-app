<script lang="ts">
  import { createEventDispatcher } from "svelte";


    //the dispatcher allows us create custom events that can be dispatched a level up to the parent.
    //this differs form the usual event forwarding as now you can name your event anything you want!
    const dispatcher = createEventDispatcher()

    function deleteItem(){
        dispatcher("deleteItem")
    }
</script>

<div>
    <button>Edit</button>
    <button on:click={deleteItem}>Delete</button>
</div>

<style>
    div{
        display: flex;
        gap: 10px;
    }
</style>