<script>
  export let name = ''
  export let size = '2.4rem'
  export let top = 0
</script>

<i class="material-symbols-rounded">{name}</i>

<style>
  i {
    font-size: var(--size, 2.4rem);
    padding-top: var(--top, 0);
  }
</style>
