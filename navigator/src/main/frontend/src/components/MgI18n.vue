<template>
  <div>
    <h2>{{ 'L10N' | i18n }}</h2>
    <dl>
      <dt>date using moment</dt>
      <dd>{{ date | moment('LLLL') }}</dd>
      <dt>Using $t function</dt>
      <dd>{{ $t('MESSAGE1') }}</dd>
      <dt>Using filter</dt>
      <dd>{{ 'MESSAGE2' | i18n }}</dd>
    </dl>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'molgenis-i18n',
  computed: mapState(['date'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
