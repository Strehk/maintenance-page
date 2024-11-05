<script lang="ts">
  import {env} from '$env/dynamic/public';
  import MaintenanceInfo from '$lib/components/MaintenanceInfo.svelte';

  const title = env.PUBLIC_MAINTENANCE_TITLE;
  const description = env.PUBLIC_MAINTENANCE_DESCRIPTION;
  const startTime = env.PUBLIC_MAINTENANCE_START ? new Date(env.PUBLIC_MAINTENANCE_START) : undefined;
  const endTime =  env.PUBLIC_MAINTENANCE_END ? new Date(env.PUBLIC_MAINTENANCE_END) : undefined;
  const contactEmail = env.PUBLIC_CONTACT_EMAIL;
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