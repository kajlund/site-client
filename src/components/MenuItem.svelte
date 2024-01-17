<script>
  import SvgIcon from './SvgIcon.svelte'

  export let caption = 'MenuItem'
  export let icon = ''
  export let selected = false
  export let url = '#'
</script>

<li>
  <a href={url} class:selected={selected}>
    {#if icon}
      <SvgIcon name={icon} size="1.6rem" style="margin-right: 0.5rem" />
    {/if}
    {caption}
  </a>
</li>

<style>
  a {
    display: flex;
    align-items: center;
  }

  a:hover,
  a.selected {
    color: var(--light-color);
  }
</style>