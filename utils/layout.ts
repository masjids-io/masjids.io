import { type ElementType } from 'react'

type ToggleDocumentAttributeType = (attribute: string, value: string, remove?: boolean, tag?: ElementType) => void

export const toggleDocumentAttribute: ToggleDocumentAttributeType = (attribute, value, remove, tag = 'html'): void => {
  if (document.body) {
    const element = document.getElementsByTagName(tag.toString())[0]
    const hasAttribute = element.getAttribute(attribute)
    if (remove && hasAttribute) element.removeAttribute(attribute)
    else element.setAttribute(attribute, value)
  }
}
