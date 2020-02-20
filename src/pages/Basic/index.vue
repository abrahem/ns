<template>
  <q-page padding>
        <q-list bordered>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
      <q-item style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </q-item>
    </q-list>
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
    this.myeditor.destroy()
  },
  methods: {
    loadData () {
      this.$axios
        .get('https://snoanime.com/ns/api/new/')
        .then(response => {
          this.data = response.data
          console.log(this.data)
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'توجد مشكلة في الشبكة حاول أعادة الفتح',
            icon: 'report_problem'
          })
        })
    }
  },
  created () {
    this.setToolbar(Toolbar)
    this.loadData()
  }
}
</script>
