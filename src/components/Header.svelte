<script>
  import Brand from './Brand.svelte'
  import Menu from './Menu.svelte'
</script>

<header class="header" id="header">
  <nav class="navbar container">
    <Brand />
    <Menu />
  </nav>
</header>

<style>
  .header{
    background-color: var(--secondary-background-color);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  .navbar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 1.5rem;
  }
</style>