<template>
  <div>
    description: {{metadata.description}}
    <br>
    writable: {{metadata.writable}}
  </div>
</template>

<script>
  export default {
    name: 'entity-type-form',
    props: {
      metadata: {
        type: Object,
        required: true,
        validator: function (object) {
          let valid = true
          if (object.href === undefined) valid = false
          if (object.hrefCollection === undefined) valid = false
          if (object.name === undefined) valid = false
          if (object.label === undefined) valid = false
          if (object.description === undefined) valid = false
          if (object.attributes === undefined) valid = false
          if (object.labelAttribute === undefined) valid = false
          if (object.idAttribute === undefined) valid = false
          if (object.lookupAttributes === undefined) valid = false
          if (object.isAbstract === undefined) valid = false
          if (object.writable === undefined) valid = false
          if (object.languageCode === undefined) valid = false
          return valid
        }
      }
    }
  }
</script>
