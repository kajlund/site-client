<script>
  import MenuPopupItem from './MenuPopupItem.svelte'
</script>

<div class="popup">
  <ul class="list">
    <MenuPopupItem
      url="/home"
      caption="Home"
      icon="home"
      on:popupMenuItemSelected
    />
    <MenuPopupItem
      url="/blog"
      caption="Blog"
      icon="blog"
      on:popupMenuItemSelected
    />
    <MenuPopupItem
      url="/resources"
      caption="Resources"
      icon="link"
      on:popupMenuItemSelected
    />
    <MenuPopupItem
      url="/about" caption="About"
      icon="info"
      on:popupMenuItemSelected
    />
    <MenuPopupItem
      url="/logon"
      caption="Sign in"
      icon="logon"
      on:popupMenuItemSelected
    />
  </ul>
</div>

<style>
  .popup {
    display: block;
    position: absolute;
    top: 7.4rem;
    right: 1.5rem;
    width: 23rem;
    padding: 1.5rem;
    background-color:var(--secondary-background-color);
    opacity: 1;
    transform: scale(1);
    transition: opacity .25s ease-in;
  }

  .list{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 0.4rem;
  }
</style>