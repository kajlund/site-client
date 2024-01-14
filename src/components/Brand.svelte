<script>
  import Icon from './Icon.svelte'
</script>

<a href="/">
  <Icon name="Cloud" --size="3.4rem" />
  <h2 class="logo">kajlund</h2>
</a>

<style>
  a {
    display: flex;
  }

  h2 {
    margin-left: 0.3rem;
    font-size: var(--font-size-md);
    color: var(--light-color);
  }
</style>