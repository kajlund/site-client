<script>
  import router from 'page'

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
        console.log('page: ', page)
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
