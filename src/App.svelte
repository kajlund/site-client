<script>
  import router from 'page'

  import routes from './lib/routes'

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
  <svelte:component this={page} params={params} />
</main>

<style>
</style>
