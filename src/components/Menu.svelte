<script>
  import page from 'page'

  import MenuItem from './MenuItem.svelte'
  import MenuPopup from './MenuPopup.svelte'
  import MenuToggleIcon from './MenuToggleIcon.svelte';

  import nav from '../lib/navStore'

  let wideScreen = false
  let width

  function popupMenuItemSelected(e) {
    // console.log(e.detail)
    nav.setPopupMenu(false)
    page(e.detail.url)
  }

  $: activePage = $nav.activePage
  $: if (width > 992) {
    wideScreen = true
    nav.setPopupMenu(false)
  } else {
    wideScreen = false
  }
</script>

<svelte:window bind:innerWidth={width} />

{#if wideScreen}
  <div class="menu">
    <ul class="list">
      <MenuItem
        caption="Home"
        icon=""
        selected={activePage === 'home'}
        url="/"
      />
      <MenuItem
        caption="Blog"
        icon=""
        selected={activePage === 'blog'}
        url="/blog"
      />
      <MenuItem
        caption="Resources"
        icon=""
        selected={activePage === 'resources'}
        url="/resources"
      />
      <MenuItem
        caption="About"
        icon=""
        selected={activePage === 'about'}
        url="/about"
      />
    </ul>
  </div>

  <ul class="list list-right">
    <MenuToggleIcon
      icon="sun"
      altIcon="moon"
      on:toggle={nav.toggleTheme}
    />
    <MenuItem
      caption="Sign in"
      icon=""
      selected={activePage === 'logon'}
      url="/logon"
    />
  </ul>
{:else}
  <div class="list list-right">
    <MenuToggleIcon
      icon="sun"
      altIcon="moon"
      active={!$nav.darkTheme}
      on:toggle={nav.toggleTheme}
    />
    <MenuToggleIcon
      icon="menu"
      altIcon="close"
      active={$nav.showPopupMenu}
      on:toggle={nav.togglePopupMenu}
    />
  </div>
{/if}

{#if $nav.showPopupMenu}
  <MenuPopup on:popupMenuItemSelected={popupMenuItemSelected} />
{/if}

<style>
  .menu {
    position: static;
    top: 7rem;
    right: 1.5rem;
    width: initial;
    padding: initial;
    background-color: transparent;
    opacity: 1;
    transform: scale(1);
    transition: opacity .25s ease-in;
  }

  .list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--gap);
  }
</style>