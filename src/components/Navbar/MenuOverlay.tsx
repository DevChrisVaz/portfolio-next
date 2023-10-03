import React from 'react'
import { LinkType } from './types'
import NavLink from './NavLink'

export type MenuOverlayProps = {
    links: LinkType[]
}

const MenuOverlay: React.FC<MenuOverlayProps> = (props) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {props.links.map((link, index) => (
                <li key={index}>
                    <NavLink link={link} />
                </li>
            ))}
        </ul>
    )
}

export default MenuOverlay