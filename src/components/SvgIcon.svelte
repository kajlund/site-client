<script>
  import Icon from './icons'

  export let fill = 'none'
  export let color = '#b1b1b1'
  export let name = ''
  export let size = '2.4rem'

  let d = Icon[name]

  let height = size
  let width = size
</script>

<svg class="icon" {width} {height}
  viewBox="0 0 24 24" fill={fill}
  xmlns="http://www.w3.org/2000/svg"
>
  <path d={d} stroke={color} stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" />
</svg>

<style>
  .icon{
    position: relative;
    display:inline-block;
  }
</style>