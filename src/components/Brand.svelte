<script>
  import SvgIcon from './SvgIcon.svelte'
</script>

<a href="/">
  <SvgIcon name="cloud" size="3.4rem" color="#fff" />
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