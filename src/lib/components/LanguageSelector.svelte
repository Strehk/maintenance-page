<script lang="ts">
  import { locale, locales } from '../i18n/i18n';

  const languageNames = {
    en: 'English',
    de: 'Deutsch',
    es: 'Español',
    fr: 'Français'
  } as const;
</script>

<div class="language-selector">
  <select bind:value={$locale}>
    {#each locales as l}
      <option value={l}>{languageNames[l]}</option>
    {/each}
  </select>
</div>

<style>
  .language-selector {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  select {
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ddd;
    background: white;
    cursor: pointer;
    font-size: 0.9rem;
  }

  select:hover {
    border-color: #3498db;
  }
</style>