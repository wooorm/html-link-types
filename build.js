import fs from 'node:fs'
import https from 'node:https'
import {bail} from 'bail'
import concatStream from 'concat-stream'
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import {selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'
import {htmlLinkTypes} from './index.js'

https.get(
  'https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types',
  (response) => {
    response
      .pipe(
        concatStream((buf) => {
          const tree = unified().use(rehypeParse).parse(buf)
          const nodes = selectAll('.standard-table td:first-child code', tree)
          let index = -1
          let data

          while (++index < nodes.length) {
            data = toString(nodes[index])

            if (data && !htmlLinkTypes.includes(data)) {
              htmlLinkTypes.push(data)
            }
          }

          fs.writeFile(
            'index.js',
            'export const htmlLinkTypes = ' +
              JSON.stringify(htmlLinkTypes.sort(), null, 2) +
              '\n',
            bail
          )
        })
      )
      .on('error', bail)
  }
)
