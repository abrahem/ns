<template>
  <q-drawer
    v-model="leftDrawerOpen"
    bordered
    content-class="bg-grey-2"
  >
    <q-list>
  <q-btn outline label="Dialog" @click="alert('s')" />
      <q-item to="/" exact>
        <q-item-section>
          <q-item-label>الرئيسية</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/menu-bubble">
        <q-item-section>
          <q-item-label>قائمة ألانمي</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/floating-menu">
        <q-item-section>
          <q-item-label>حسب الموسم</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/links">
        <q-item-section>
          <q-item-label>حسب التصنيف</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/images">
        <q-item-section>
          <q-item-label>أخبار ألانمي</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/hiding-menubar">
        <q-item-section>
          <q-item-label>المواعيد</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/todo-list">
        <q-item-section>
          <q-item-label>أنمياتي</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import { LoadingBar } from 'quasar'
LoadingBar.start();
export default {
  name: 'LeftDrawer',
  mixins: [UiMixin],
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  beforeMount () {
  },
  mounted () {
  }
}
</script>

<style>
</style>
