<template>
  <div class="main">
    <Navbar/>
    <CreatePoll/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import CreatePoll from '@/components/CreatePoll'

  export default {
    name: 'main',
    components: {
      Navbar,
      CreatePoll
    }
  }
</script>
