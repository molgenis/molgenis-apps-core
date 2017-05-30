<template>
  <div>
    <v-select :id="id" :value="value" :options="options" :searchable="searchable" :multiple="multiple"
              :placeholder="placeholder" :transition="transition" :clearSearchOnSelect="clearSearchOnSelect"
              :label="label"
              :on-change="onChange"></v-select>
  </div>
</template>

<script>
  import vSelect from 'vue-select'

  export default {
    name: 'entity-select-box',
    props: {
      id: {
        type: String,
        required: false,
        default: 'entity-select'
      },
      /**
       * Contains the currently selected value. Very similar to a
       * `value` attribute on an &lt;input&gt;. In most cases, you'll want
       * to set this as a two-way binding, using :value.sync. However,
       * this will not work with Vuex, in which case you'll need to use
       * the onChange callback property.
       * @type {Object||String||null}
       */
      value: {
        type: String,
        required: false
      },
      /**
       * An array of strings or objects to be used as dropdown choices.
       * If you are using an array of objects, vue-select will look for
       * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A
       * custom label key can be set with the `label` prop.
       * @type {Array}
       */
      options: {
        type: Array,
        required: true
      },
      /**
       * Enable/disable filtering the options.
       * @type {Boolean}
       */
      searchable: {
        type: Boolean,
        required: false,
        default: true
      },
      /**
       * Equivalent to the `multiple` attribute on a `<select>` input.
       * @type {Boolean}
       */
      multiple: {
        type: Boolean,
        required: false
      },
      /**
       * Equivalent to the `placeholder` attribute on an `<input>`.
       * @type {String}
       */
      placeholder: {
        type: String,
        required: false,
        default: 'Search for an entity...'
      },
      /**
       * Sets a Vue transition property on the `.dropdown-menu`. vue-select
       * does not include CSS for transitions, you'll need to add them yourself.
       * @type {String}
       */
      transition: {
        type: String,
        required: false
      },
      /**
       * Enables/disables clearing the search text when an option is selected.
       * @type {Boolean}
       */
      clearSearchOnSelect: {
        type: Boolean,
        required: false
      },
      /**
       * Tells vue-select what key to use when generating option labels when
       * `option` is an object.
       * @type {String}
       */
      label: {
        type: String,
        required: false
      },
      /**
       * An optional callback function that is called each time the selected
       * value(s) change. When integrating with Vuex, use this callback to trigger
       * an action, rather than using :value.sync to retreive the selected value.
       * @type {Function}
       * @default {null}
       */
      onChange: {
        type: Function,
        required: true
      }
    },
    components: {
      vSelect
    }
  }
</script>
