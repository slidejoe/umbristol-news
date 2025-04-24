<script setup>
defineProps(['mode', 'size'])

// Get details from https://www.wigle.net/
// Remember to add a secret to Github (https://github.com/slidejoe/umbristol-news/settings/secrets/actions/new) and update ./deploy.yml
// const ssid = '',
//       type = '',
//       pass = import.meta.env.VITE_WIFI_XXX;

// // True
// const ssid = 'TDEXTERNAL',
//       type = 'WPA',
//       pass = import.meta.env.VITE_WIFI_TRUE;

// // Gibe's umBristol wifi
// const ssid = 'umBristol',
//       type = 'WPA',
//       pass = import.meta.env.VITE_WIFI_GIBE;

const ssid = 'WHCF Rooms',
      type = 'WPA',
      pass = import.meta.env.VITE_WIFI_WINDMILL_HILL;

// //Desklodge
// const ssid = 'DeskLodge 3rd Floor',
//       type = 'WPA',
//       pass = import.meta.env.VITE_WIFI_DESKLODGE;

const qrCodeValue = `WIFI:S:${ ssid };T:${ type };P:${ pass };;`;
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
  <div :class="size < 200 ? 'compact' : ''" v-if="ssid && type">
    <qrcode-vue v-if="mode != 'text'" :value="qrCodeValue" :size="size ?? 200"
      level="L" render-as="svg"></qrcode-vue>

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