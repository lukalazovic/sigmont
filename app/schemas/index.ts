import blockContent from './blockContent'
import * as blocks from './blocks/index'
import * as pages from './documents/index'
import * as types from './types/index'

export const schemaTypes = [
    blockContent,
    ...Object.values(blocks),
    ...Object.values(pages),
    ...Object.values(types),
]
