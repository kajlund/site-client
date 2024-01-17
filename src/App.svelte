<script>
  import router from 'page'
  import nav from './lib/navStore'
  import routes from './lib/routes'
  import Header from './components/Header.svelte'

  let page;
  let params;

  routes.forEach(route => {
    router(
      route.path,
      (ctx, next) => {
        params = ctx.params;
        next();
      },
      () => {
        page = route.component
        nav.setActivePage(route.pageId)
        // console.log('page: ', route.pageId)
      }
    );
  });

  router.start()
</script>

<main>
  <Header />
  <svelte:component this={page} params={params} />
</main>

<style>
</style>
