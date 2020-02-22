<template>
  <q-page padding>
        <q-list bordered>
      <q-item v-for="item in items" v-bind:key="item.id" style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section style="text-align: right; margin-bottom: auto; padding-top: 5px;">{{ item.name }}</q-item-section>
        <q-item-section style="margin-left: -11px !important; margin-right: 0px !important;" thumbnail>
          <img style="height: 125px; width: 90px;" src="{{ item.image }}">
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
      items: [

      ]
    }
  },
  beforeDestroy () {
    this.myeditor.destroy()
  },
  methods: {
    loadData () {
      this.$q.loading.show({
        message: '<span>يرجى الأنتظار</span>'
      })
      this.$axios
        .get('https://snoanime.com/ns/api/new/')
        .then(response => {
          this.$q.loading.hide()
          var self = this
          this.data = response.data
          self.items = response.data
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
