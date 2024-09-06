<script lang="ts">
  export let value: string
  export let placeholder: string
  export let autocomplete: string
</script>

<input
  id="input"
  bind:value
  type="text"
  placeholder={placeholder}
  autocomplete={autocomplete}
  class="px-4 py-2 w-[250px] text-center bg-transparent border-1 border-rounded border-gray-200 dark:border-gray-700 outline-none active:outline-none"
/>
