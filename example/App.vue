<template>
  <div id="app">
    <code v-html="code" />
  </div>
</template>

<script>
  import formatHighlight from '../src'

  export default {
    data() {
      return {
        code: formatHighlight({
          a: 'string',
          b: 111,
          c: false,
          d: true,
          e: null,
          f: {
            ww: 'kkk',
            qq: [1, 2, 3],
            rr: {t: 'awt'}
          },
          g: '<p>hello world</p> with \n <p>new line</p> and quote sign: "',
        }, {
          tagPre: true,
          wordWrap: false,
          colors: { falseColor: '#f44747' }
        })
      }
    }
  }
</script>

<style>
  pre {
    padding: 16px;
    font-size: 16px;
    border-radius: 16px;
  }
</style>
