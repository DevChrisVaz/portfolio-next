import React from 'react';
import { LinkType } from './types';
import Link from 'next/link';

export type NavLinkProps = {
    link: LinkType
}

const NavLink: React.FC<NavLinkProps> = (props) => {
    return (
        <Link
            href={props.link.path}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        >
            {props.link.title}
        </Link>
    )
}

export default NavLink