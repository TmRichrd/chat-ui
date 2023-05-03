import React from 'react'
import PropTypes from 'prop-types'
import StyledNavBar, { MenuIcon, MenuItems, StyledMenuItem } from './style'
import Badge from 'components/Badge'
import Avatar from 'components/Avatar'
import profileImage from 'assets/images/face-male-1.jpg'
import 'styled-components/macro'

import {
  faEllipsisH,
  faFolder,
  faStickyNote,
  faUsers,
  faCog,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons'
function NavBar({ ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={profileImage} status="online" />
      <MenuItems>
        <MenuItem showBadge active="true" icon={faCommentDots} />
        <MenuItem icon={faUsers} />
        <MenuItem icon={faFolder} />
        <MenuItem icon={faStickyNote} />
        <MenuItem icon={faEllipsisH} />
        <MenuItem
          icon={faCog}
          css={`
            align-self: end;
          `}
        />
      </MenuItems>
    </StyledNavBar>
  )
}

function MenuItem({ icon, active, showBadge, ...rest }) {
  return (
    <StyledMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <MenuIcon icon={icon} active={active} />
        </Badge>
      </a>
    </StyledMenuItem>
  )
}

NavBar.propTypes = {
  children: PropTypes.any,
}

export default NavBar
export { MenuItem }
