<script>
  import Icon from './icons'

  export let caption = 'MenuItem'
  export let icon = ''
  export let selected = false
  export let url = '#'

  const color = '#b1b1b1'
  const d = Icon[icon]
  const fill = 'none'
  const height = '1.6rem'
  const width = '1.6rem'
</script>

<li>
  <a href={url} class:selected={selected}>
    {#if icon}
      <svg class="icon" {width} {height}
        viewBox="0 0 24 24" fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={d} stroke={color} stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round"
        />
      </svg>
    {/if}
    {caption}
  </a>
</li>

<style>
  a {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  a:hover,
  a.selected {
    color: var(--light-color);
  }
</style>