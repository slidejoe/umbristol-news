<script setup>
defineProps(['mode', 'size'])

const ssid = '',
      type = '',
      pass = '';

// //Desklodge
// const ssid = 'DeskLodge 3rd Floor',
//       type = 'WPA',
//       pass = '***REMOVED***';

</script>

<style scoped>
dl,
svg {
  margin: 1em 0;
  text-align: left;
}

svg {
  display: inline-block;
}

dt {
  font-weight: bold;
  display: inline;
}

dd {
  display: inline;
}

.compact {
  svg {
    margin: 1em;
  }

  dl {
    display: inline-block;
  }
}
</style>

<template>
  <div :class="size < 200 ? 'compact' : ''" v-if="ssid && type && pass">
    <qrcode-vue v-if="mode != 'text'" :value="'WIFI:S:{{ ssid }};T:{{ type }};P:{{ pass }};;'" :size="size ?? 200"
      :level="'L'" :render-as="'svg'"></qrcode-vue>

    <dl v-if="mode != 'qr'">
      <div>
        <dt>SSID: </dt>
        <dd>{{ ssid }}</dd>
      </div>
      <div>
        <dt>Password: </dt>
        <dd><code>{{ pass }}</code></dd>
      </div>
    </dl>
  </div>
</template>