import React from 'react'

export type ProjectTagProps = {
    name: string;
    isSelected: boolean;
    onClick: (name: string) => void;
}

const ProjectTag: React.FC<ProjectTagProps> = (props) => {
    const buttonStyles = props.isSelected
        ? "text-white border-primary-500"
        : "text-[#ADB7BE] border-slate-600 hover:border-white";
    return (
        <button
            className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => props.onClick(props.name)}
        >
            {props.name}
        </button>
    )
}

export default ProjectTag