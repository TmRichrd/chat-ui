import React from 'react'
import Badge from '.'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default {
  title: 'UI 组件/Badge',
  component: Badge,
}
export const Default = () => <Badge count={5} />
export const DotVariant = () => {
  return (
    <Badge variant="dot" show>
      <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: '24px' }} />
    </Badge>
  )
}
