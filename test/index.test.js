import formatHighlight from '../src'

test('It works', () => {
  const out = formatHighlight({ a: '11' })
  expect(out).toBe('{\n  <span style="color:#9cdcfe">"a"</span>: <span style="color:#ce9178">"11"</span>\n}')
})

test('It works with html tags in field values', () => {
  const out = formatHighlight({ a: 'this is <p>a paragraph</p>' })
  expect(out).toBe('{\n  <span style="color:#9cdcfe">"a"</span>: <span style="color:#ce9178">"this is &lt;p&gt;a paragraph&lt;/p&gt;"</span>\n}')
})

test('It works with one double quote in field values', () => {
  const out = formatHighlight({ a: 'this is a "' })
  expect(out).toBe('{\n  <span style="color:#9cdcfe">"a"</span>: <span style="color:#ce9178">"this is a \\&quot;"</span>\n}')
})

test('It works with two double quotes in field values', () => {
  const out = formatHighlight({ a: 'this is a "quote"' })
  expect(out).toBe('{\n  <span style="color:#9cdcfe">"a"</span>: <span style="color:#ce9178">"this is a \\&quot;quote\\&quot;"</span>\n}')
})

test('It works with html tags and quotes in field values', () => {
  const out = formatHighlight({ a: 'this is <p>a "p"</p>' })
  expect(out).toBe('{\n  <span style="color:#9cdcfe">"a"</span>: <span style="color:#ce9178">"this is &lt;p&gt;a \\&quot;p\\&quot;&lt;/p&gt;"</span>\n}')
})

test('It works with html tags and quotes and newlines in field values', () => {
  const out = formatHighlight({ a: 'this is <p>a "p"</p>\n\t\r' })
  expect(out).toBe('{\n  <span style="color:#9cdcfe">"a"</span>: <span style="color:#ce9178">"this is &lt;p&gt;a \\&quot;p\\&quot;&lt;/p&gt;\\n\\t\\r"</span>\n}')
})

test('It works with value undefined', () => {
  const out = formatHighlight(undefined, { tagPre: false })
  expect(out).toBe('undefined')
})

test('It works with value null', () => {
  const out = formatHighlight(null)
  expect(out).toBe('<span style="color:#569cd6">null</span>')
})

test('It works with value false', () => {
  const out = formatHighlight(false)
  expect(out).toBe('<span style="color:#569cd6">false</span>')
})

test('It works with value true', () => {
  const out = formatHighlight(true)
  expect(out).toBe('<span style="color:#569cd6">true</span>')
})

test('It works with number value', () => {
  const out = formatHighlight(12345.678)
  expect(out).toBe('<span style="color:#b5cea8">12345.678</span>')
})

test('It works with empty string', () => {
  const out = formatHighlight('')
  expect(out).toBe('')
})

test('It works with not-empty string', () => {
  const out = formatHighlight('not empty')
  expect(out).toBe('not empty')
})

test('It works with function', () => {
  const out = formatHighlight(() => {})
  expect(out).toBe('function')
})

test('It works with Map', () => {
  const out = formatHighlight(new Map([[1, 'a']]))
  expect(out).toBe(
`[
  [
    <span style="color:#b5cea8">1</span>,
    <span style="color:#ce9178">"a"</span>
  ]
]`
  )
})

test('It works with Symbol', () => {
  const out = formatHighlight(Symbol('Symbol label'))
  expect(out).toBe('symbol')
})

test('It works with word-wrap', () => {
  const out = formatHighlight({ a: 'this is a "word-wrap"' }, { wordWrap: true })
  expect(out).toBe('{\n  <span style="color:#9cdcfe">"a"</span>: <span style="word-wrap:break-word;white-space:pre-wrap;color:#ce9178">"this is a \\&quot;word-wrap\\&quot;"</span>\n}')
})

test('It works with without tag pre', () => {
  const out = formatHighlight({ a: '12' }, { tagPre: true })
  expect(out).toBe('<pre style="color:#d4d4d4;background:#1e1e1e;overflow:auto">{\n  <span style="color:#9cdcfe">"a"</span>: <span style="color:#ce9178">"12"</span>\n}</pre>')
})
