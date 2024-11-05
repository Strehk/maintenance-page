<script lang="ts">
  import { t } from '../i18n/i18n';
  import LanguageSelector from './LanguageSelector.svelte';

  export let title: string;
  export let description: string;
  export let startTime: string;
  export let endTime: string;
  export let contactEmail: string;
</script>

<LanguageSelector />

<div class="maintenance-container">
  <div class="icon">🛠️</div>
  <h1>{$t('title')}</h1>
  <p class="description">{$t('description')}</p>
  
  <div class="time-info">
    <p><strong>{$t('startLabel')}:</strong> {startTime}</p>
    <p><strong>{$t('endLabel')}:</strong> {endTime}</p>
  </div>

  <div class="contact">
    <p>{$t('contactInfo')}:</p>
    <a href="mailto:{contactEmail}">{contactEmail}</a>
  </div>
</div>

<style>
  .maintenance-container {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 90%;
    text-align: center;
  }

  .icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  h1 {
    color: #2c3e50;
    margin: 0 0 1rem 0;
  }

  .description {
    color: #34495e;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .time-info {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
  }

  .time-info p {
    margin: 0.5rem 0;
    color: #2c3e50;
  }

  .contact {
    color: #7f8c8d;
  }

  .contact a {
    color: #3498db;
    text-decoration: none;
  }

  .contact a:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    .maintenance-container {
      padding: 1.5rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    .description {
      font-size: 1rem;
    }
  }
</style>