<template>
  <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="toggleLeftDrawer"
        aria-label="الخيارات"
        >
        <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          الرئيسية
        </q-toolbar-title>
       <q-btn dense flat round icon="refresh" />
       <q-btn dense flat round icon="search" />
  </q-toolbar>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import { mapActions } from 'vuex'
export default {
  name: 'DefaultToolbar',
  mixins: [UiMixin],
  props: [],
  methods: {
    ...mapActions([
      'toggleLeftDrawer'
    ])
  }
}
</script>
