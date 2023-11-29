<script> 
  import {todos,saveStorage} from "~/store";
  export let todo;
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let isEditMode = false;
  let title = todo.title;

  function onEditMode(){
    title = todo.title;
    isEditMode = true;
  }

  function offEditMode(){
  isEditMode = false;
  }

function updateTodo(){
  todo.title = title;
  dispatch('update', todo);
  saveStorage();
  offEditMode();
  }

  function deleteTodo(){
    $todos = $todos.filter(t => t.id !== todo.id);
    saveStorage();
  }
</script>

<div class="todo">

  {#if isEditMode}
  <div class="edit-mode">
    <input type="text" bind:value={title} class="form-control" 
    on:keyup={(e) => {
      if(e.key === "Enter"){ updateTodo()}
    }}
    />
    <button on:click={updateTodo} class="btn btn-primary">OK</button>
    <button on:click={offEditMode} class="btn btn-secondary">Cancel</button>

  </div>

  {:else}
  <div class="normal-mode">
    <div class="title">
      {todo.title}
    </div>
    <button on:click={onEditMode} class="btn btn-primary">Edit</button>
    <button on:click={deleteTodo} class="btn btn-danger">Delete</button>
  </div>

  {/if}

</div>

<style lang="scss">
  .todo{
    padding: 10px 14px;
    border-radius: 6px;
    &hover{
      background-color: $gray-100;
    }
    .edit-mode,
    .normal-mode{
      display: flex;
    }
    .title{
      flex-grow: 1;
      display: flex;
      align-items: center;
      font-size: 18px;
    }
    .btn{
      flex-shrink: 0;
      margin-left: 10px;
    }
  }
</style>