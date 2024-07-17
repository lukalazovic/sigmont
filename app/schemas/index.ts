import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import * as blocks from './blocks/index'
import * as pages from './documents/index'
import * as types from '../types/sanity/index'

export const schemaTypes = [
    post, 
    author, 
    category, 
    blockContent,
    ...Object.values(blocks),
    ...Object.values(pages),
    ...Object.values(types),
]
