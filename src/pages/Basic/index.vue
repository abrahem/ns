<template>
  <q-page padding>
    <editor-content class="editor__content" :editor="myeditor" />
    <div class="q-pa-md">
      
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
