<script>
  import { createEventDispatcher } from 'svelte';

  import SvgIcon from './SvgIcon.svelte'

	const dispatch = createEventDispatcher();

  export let icon = ''
  export let altIcon = ''
  export let active = false
  export let size = '2.8rem'

  function toggleSelected() {
    // console.log('toggleselected')
    active = !active
    dispatch('toggle', { active })
  }
</script>

<button class="btn" on:click={toggleSelected}>
{#if active}
  <SvgIcon name={altIcon}  {size} />
{:else}
  <SvgIcon name={icon} {size} />
{/if}
</button>

<style>
  .btn {
    display: inline-flex;
    vertical-align: middle;
    cursor: pointer;
  }

</style>
