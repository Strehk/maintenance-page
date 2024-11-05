<script lang="ts">
  import { env } from '$env/dynamic/public';
  import MaintenanceInfo from '$lib/components/MaintenanceInfo.svelte';

  const title = env.PUBLIC_MAINTENANCE_TITLE || 'Site Under Maintenance';
  const description = env.PUBLIC_MAINTENANCE_DESCRIPTION || 'We are performing scheduled maintenance. We will be back shortly.';
  const startTime = env.PUBLIC_MAINTENANCE_START || 'Currently';
  const endTime = env.PUBLIC_MAINTENANCE_END || 'Soon';
  const contactEmail = env.PUBLIC_CONTACT_EMAIL || 'support@example.com';
</script>

<div class="maintenance-page">
  <MaintenanceInfo 
    {title}
    {description}
    {startTime}
    {endTime}
    {contactEmail}
  />
</div>

<style>
  .maintenance-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    padding: 1rem;
    box-sizing: border-box;
    position: relative;
  }
</style>