import React from 'react'
import Icon from '.'
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg'
import { faCommentDots, faFolder, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "story.css"
export default {
  title: 'UI 组件/Icon',
  component: Icon,
}
export const Default = () => <Icon icon={SmileIcon} />

export const CustomColor = () => {
  return <Icon icon={SmileIcon} color="#cccccc" />
}
export const CustomSize = () => {
  return <Icon icon={SmileIcon} color="#cccccc" width={48} height={48} />
}
export const FontAwesome = () => {
  return <FontAwesomeIcon icon={faCommentDots} />
}
export const FontAwesomeColor = () => {
  return <FontAwesomeIcon icon={faCommentDots} style={{ color: '#cccccc' }} />
}
export const FontAwesomeSizes = () => {
  return (
    <div className="row-elements">
      <FontAwesomeIcon icon={faFolder} style={{ fontSize: '24px' }} />
      <FontAwesomeIcon icon={faStickyNote} style={{ fontSize: '36px' }} />
      <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: '48px' }} />
    </div>
  )
}
