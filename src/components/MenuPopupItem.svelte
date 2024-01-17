<script>
  import { createEventDispatcher } from 'svelte';

  import SvgIcon from './SvgIcon.svelte'

	const dispatch = createEventDispatcher();

  export let url = ''
  export let caption = 'Item'
  export let icon = ''

  function itemClicked(e) {
    // console.log(e)
    dispatch('popupMenuItemSelected', { url })
  }
</script>

<li>
  <a on:click={itemClicked}>
    {#if icon}<SvgIcon name={icon} />{/if}
    <span>{caption}</span>
  </a>
</li>

<style>
  li {
    padding: .5rem;
  }
  li:hover {
    background-color: var(--light-color);
    color: var(--primary-background-color);
  }
  a {
    display: flex;
    cursor: pointer;
    gap: 0.6rem;
  }
  a:hover {

  }
  span {
    font-size: 1.8rem;
  }
</style>