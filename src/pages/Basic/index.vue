<template>
  <q-page>
<div class="q-pa-md" style="max-width: 350px">
    <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-separator />
            <q-item clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-separator />
            <q-item clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-separator />
            <q-item clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-separator />
            <q-item clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-separator />
    </q-list>
  </div>
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './toolbar'
export default {
  mixins: [UiMixin, PageMixin],
  components: {
  },
  data () {
    return {
    }
  },
  beforeDestroy () {
    this.$q.loading.hide()
  },
  methods: {
    onSwitch () {
      this.setToolbar(Toolbar)
    },
    showLoading () {
      this.$q.loading.show({
        message: '<span>يرجى ألانتظار</span>'
      })
    }
  }
}
</script>
