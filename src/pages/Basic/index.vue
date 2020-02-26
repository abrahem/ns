<template>
  <q-page padding>
        <q-list bordered>
      <q-item v-for="item in items" v-bind:key="item.id" @click="dialog = true,loadinfo (5001)" style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section style="text-align-last: right;margin-bottom: auto;padding-top: 8px;">
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label caption>{{ item.epName }}</q-item-label>
        </q-item-section>
        <q-item-section style="margin-left: -11px !important; margin-right: 0px !important;" thumbnail>
          <q-img :src="item.image" :alt="pic" spinner-color="red" style="height: 125px; width: 90px;"/>
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
          <q-icon name="arrow_back" />
        </q-btn>
        <q-toolbar-title id="titles">
          {{ itemsinfo.main.genres }}
        </q-toolbar-title>
       <q-btn style="color: red;" dense flat round icon="favorite_border" />
      </q-toolbar>
        <q-tabs style="color: white !important; background-color: #673ab7 !important;" v-model="tab" dense class="bg-grey-3 text-grey-7" active-color="#ffffff" indicator-color="#ffffff" align="justify">
          <q-tab name="info" label="المعلومات" />
          <q-tab name="ep" label="الحلقات" />
          <q-tab name="commant" label="التعليقات" />
        </q-tabs>
    </q-header>
    <q-page-container>
        <q-tab-panels v-model="tab" animated class="text-black">
          <q-tab-panel name="info">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img style="height: 145px; width: 110px;" class="col-5" src="https://cdn.quasar.dev/img/parallax1.jpg"/>
        <q-card-section style="word-break: break-all; text-align: center; width: 100%;">
          {{ itemsinfo.main.story }}
        </q-card-section>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          5:30PM
        </q-btn>
        <q-btn flat>
          7:00PM
        </q-btn>
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
          </q-tab-panel>

          <q-tab-panel name="ep">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="commant">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
    </q-page-container>
  </q-layout>
      </div>
    </q-dialog>
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './toolbar'
import Vue from 'vue'
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
      maximizedToggle: true,
      tab: 'info',
      itemsinfo: {

      }
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
  },
  loadinfo (id) {
    this.$q.loading.show({
      message: '<span>يرجى الأنتظار</span>'
    })
    this.$axios
      .get('https://snoanime.com/ns/api/new/info.php/?url=1196')
      .then(response => {
        this.$q.loading.hide()
        var self = this
        self.itemsinfo = response.data
        const Hello = {
          props: ['text'],
          template: '<div>{{ text }}</div>'
        }
        const HelloCtor = Vue.extend(Hello)
        const vm = new HelloCtor({
          propsData: {
            text: 'HI :)'
          }
        }).$mount('#titles')
        vm;
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
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
</style>
