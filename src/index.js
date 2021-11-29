const defaultColors = {
  keyColor: '#9cdcfe',
  nullColor: '#569cd6',
  trueColor: '#569cd6',
  falseColor: '#569cd6',
  numberColor: '#b5cea8',
  stringColor: '#ce9178',
  bracketsColor: '#d4d4d4',
  backgroundColor: '#1e1e1e'
};

const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml(html) {
  return String(html).replace(/[&<>"'`=]/g, function (s) {
    return entityMap[s];
  });
}

export default function formatHighlight(
  json,
  { tagPre = false, wordWrap = false, colors } = {}
) {
  const valueType = typeof json;
  if (valueType !== 'string') {
    json = JSON.stringify(json, null, 2) || valueType;
  }
  colors = { ...defaultColors, ...colors }
  json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
  const formatJson = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+]?\d+)?)/g, (match) => {
    let color = colors.numberColor;
    let cls = '';
    let style = '';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
        color = colors.keyColor;
      } else {
        cls = '';
        color = colors.stringColor;
        match = '"' + escapeHtml(match.substr(1, match.length - 2)) + '"';
        style = wordWrap ? 'word-wrap:break-word;white-space:pre-wrap;' : ''
      }
    } else {
      color = /true/.test(match)
        ? colors.trueColor
        : /false/.test(match)
          ? colors.falseColor
          : /null/.test(match)
            ? colors.nullColor
            : color
    }

    if (cls === 'key') {
      return `<span style="${style}color:${color}">${match.slice(0, -1)}</span>:`;
    } else {
      return `<span style="${style}color:${color}">${match}</span>`;
    }
  })

  if (tagPre) {
    return `<pre style="color:${colors.bracketsColor};background:${colors.backgroundColor}${!wordWrap ? ';overflow:auto' : ''}">${formatJson}</pre>`;
  } else {
    return formatJson;
  }
}
