<template>
  <q-page padding>
    <q-list bordered>
     <div id="test" tabindex="0" class="q-item q-item-type row no-wrap q-item--clickable q-link cursor-pointer q-focusable q-hoverable" style="padding: 0px !important; border-bottom: inherit;"><div tabindex="-1" class="q-focus-helper"></div><div class="q-item__section column q-item__section--main justify-center" style="text-align: right; margin-bottom: auto; padding-top: 5px;">List item</div><div class="q-item__section column q-item__section--thumbnail q-item__section--side justify-center" style="margin-left: -11px !important; margin-right: 0px !important;"><img src="https://cdn.quasar.dev/img/mountains.jpg" style="height: 125px; width: 90px;"></div></div>
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
