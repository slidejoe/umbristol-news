<script setup>
var props = defineProps({
  year: Boolean
})
var formatter;
if(props.year) {
  formatter = new Intl.DateTimeFormat('default', { month: 'long', year: '2-digit' });
} else {
  formatter = new Intl.DateTimeFormat('default', { month: 'long' });
}
const date = formatter.format(Date.now());
</script>

<template>
  {{ date }}
</template>