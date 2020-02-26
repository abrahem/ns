<template>
  <q-page padding>
        <q-list bordered>
      <q-item v-for="item in items" v-bind:key="item.id" @click="dialog = true" style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section style="text-align-last: right;margin-bottom: auto;padding-top: 8px;">
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label caption>{{ item.epName }}</q-item-label>
        </q-item-section>
        <q-item-section style="margin-left: -11px !important; margin-right: 0px !important;" thumbnail>
          <img v-bind:src="item.image" v-bind:alt="pic" style="height: 125px; width: 90px;">
        </q-item-section>
      </q-item>
    </q-list>
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <div style="background-color: #ffffff;">
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
          <q-btn v-close-popup flat dense round aria-label="الخيارات">
          <q-icon name="back" />
        </q-btn>
        <q-toolbar-title>
          المعلومات
        </q-toolbar-title>
      </q-toolbar>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails" label="Mails" />
          <q-tab name="alarms" label="Alarms" />
          <q-tab name="movies" label="Movies" />
        </q-tabs>
         <q-separator />
                 <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
      </div>
    </q-dialog>
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
          this.$q.loading.hide()
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
