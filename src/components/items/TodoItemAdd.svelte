<script lang="ts">
    import type { Task } from  "../../models";
    import { v4 as uuidv4 } from 'uuid';

    export let todoItems: Task[];

    var newItemTitle: string = "";

    function onKeyDown(event: KeyboardEvent) {
        if (event.key != "Enter") return;
        
        //using a string as event.target.value is stupid and svelte allows magic bind :)

        //the other option apart from the "spreading" is to todoitem.push and then todoItems = todoItems
        //a reassignment doesnt look that good 

        todoItems = [
            ...todoItems,
            {
                id: uuidv4(),
                title: newItemTitle,
                isCompleted: false,
            },
        ];
        newItemTitle = "";
    }
</script>

<div>
    <input
        type="text"
        on:keydown={onKeyDown}
        placeholder="Create a new task..."
        bind:value={newItemTitle}
    />
</div>

<style>
    input {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        margin-top: 30px;
    }
</style>
