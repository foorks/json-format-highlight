interface Colors {
  keyColor: string
  nullColor: string
  trueColor: string
  falseColor: string
  numberColor: string
  stringColor: string
  bracketsColor: string
  backgroundColor: string
}

export interface Options {
  tagPre?: boolean
  wordWrap?: boolean
  colors?: Partial<Colors>
}

export default function formatHighlight(
  json: any,
  options?: Options
): string
