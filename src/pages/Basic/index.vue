<template>
  <q-page padding>
    <editor-content class="editor__content" :editor="myeditor" />
    <div class="q-pa-md">
    <q-btn color="teal" @click="showLoading" label="Show Loading" />
  </div>
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './toolbar'
import { Editor, EditorContent } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'

export default {
  mixins: [UiMixin, PageMixin],
  components: {
    EditorContent
  },
  data () {
    return {
      myeditor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
        `
      })
    }
  },
  beforeDestroy () {
    this.myeditor.destroy()
    this.$q.loading.hide()
  },
  methods: {
    onSwitch () {
      this.setEditor(this.myeditor)
      this.setToolbar(Toolbar)
    },
    showLoading () {
      this.$q.loading.show({
        message: '<span>يرجى ألانتظار</span>'
      })
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      this.$q.loading.hide();
      this.$q.notify({
        message: 'تم التحميل بنجاح',
        color: 'primary',
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
      })
      } else {
        this.$q.notify({
        message: 'خطاء في الشبكة',
        color: 'negative',
        icon: 'report_problem',
        actions: [
          { label: 'حاول مجددا', color: 'white', handler: () => { /* ... */ } }
        ]
      })
      }  
      };
      xhttp.open("GET", "https://snoanime.com/ns/api/new/", true);
      xhttp.send();
    }
  }
}
</script>
