<template>
  <div class="app-container">

  </div>
</template>

<style lang="scss" scoped>

</style>
{{#xif "['tx','tsx'].indexOf(lang)"}}
<script lang="tsx">
import {
  Vue,
  Component,
  Watch,
  Prop,
  Inject,
  Provide,
  Model
} from 'vue-property-decorator'
@Component
export default class Index extends Vue {

}
</script>
{{else}}
<script>
import {
  Vue,
  Component,
  Watch,
  Prop,
  Inject,
  Provide,
  Model
} from 'vue-property-decorator'
@Component
export default class Index extends Vue {
  // region Vue Instance lifecycles
  // endregion
  // region computed properties
  // endregion
  // region Async state mutators (async triggers), Watcher Entries
  // endregion
  // region Events triggers
  // endregion
  // region Domain/Feature orientated components
  // endregion
}
</script>
{{/xif}}
