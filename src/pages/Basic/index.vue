<template>
  <q-page padding>
        <q-list bordered>
      <q-item v-for="item in items" v-bind:key="item.id" style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section @click="dialog = true" style="text-align-last: right;margin-bottom: auto;padding-top: 8px;">
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label caption>{{ item.epName }}</q-item-label>
        </q-item-section>
        <q-item-section style="margin-left: -11px !important; margin-right: 0px !important;" thumbnail>
          <img v-bind:src="item.image" v-bind:alt="pic" style="height: 125px; width: 90px;">
        </q-item-section>
      </q-item>
    </q-list>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>
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
      count: 0,
      items: [

      ],
      dialog: false,
      maximizedToggle: true
    }
  },
  beforeDestroy () {
    this.myeditor.destroy()
  },
  methods: {
    getPic (index) {
      return this.items[index].image
    },
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
