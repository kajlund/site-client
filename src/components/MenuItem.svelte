<script>
  import Icon from './Icon.svelte'

  export let caption = 'MenuItem'
  export let icon = ''
  export let selected = false
  export let url = '#'
</script>

<li>
  <a href={url} class:selected={selected}>
    {#if icon}<Icon name={icon} --size="1.6rem" --top="0.4rem" />{/if}
    {caption}
  </a>
</li>

<style>
  i {
    font-size: 1.6rem;
    padding-top: .4rem;
    margin-right: 0.2rem;
  }
  a {
    display: flex;
  }
  a:hover {
    color: var(--light-color);
  }

  a.selected {
    color: var(--light-color);
  }


</style>