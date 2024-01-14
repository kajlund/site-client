<script>
  import MenuItem from './MenuItem.svelte'
</script>

<div class="menu" id="menu">
  <ul class="list">
    <MenuItem caption="Home" icon="Home" selected="true" url="/" />
    <MenuItem caption="Blog" icon="" selected="" url="/blog" />
    <MenuItem caption="Resources" icon="" selected="" url="/resources" />
    <MenuItem caption="About" icon="Info" selected="" url="/about" />

    <li class="list-item screen-lg-hidden">
      <a href="./signin.html" class="list-link">Sign in</a>
    </li>
    <li class="list-item screen-lg-hidden">
      <a href="./signup.html" class="list-link">Sign up</a>
    </li>
  </ul>
</div>

<div class="list list-right">
  <button class="btn place-items-center" id="theme-toggle-btn">
    <i class="ri-sun-line sun-icon"></i>
    <i class="ri-moon-line moon-icon"></i>
  </button>

  <button class="btn place-items-center screen-lg-hidden menu-toggle-icon" id="menu-toggle-icon">
    <i class="ri-menu-3-line open-menu-icon"></i>
    <i class="ri-close-line close-menu-icon"></i>
  </button>

  <a href="/logon" class="list-link screen-sm-hidden">Sign in</a>
</div>

<style>
  .menu{
    position: absolute;
    top: 8.5rem;
    right: 1.5rem;
    width: 23rem;
    padding: 1.5rem;
    background-color:var(--secondary-background-color);
    opacity: 0;
    transform: scale(0);
    transition: opacity .25s ease-in;
  }
  .list{
    display: flex;
    align-items: center;
    gap: var(--gap);
  }

  .menu > .list{
    flex-direction: column;
  }

  .list-link:hover,
  .btn:hover,
  .btn:hover span{
    color: var(--light-color);
  }

  @media screen and (min-width: 1024px) {
    .menu{
      position: static;
      width: initial;
      padding: initial;
      background-color: transparent;
      opacity: 1;
      transform: scale(1);
    }

    .menu > .list {
      flex-direction: row;
    }

    .screen-lg-hidden{
      display: none;
    }

    .screen-sm-hidden{
      display: block;
    }

    .sign-up-btn{
      padding: 4px;
    }

  }

</style>