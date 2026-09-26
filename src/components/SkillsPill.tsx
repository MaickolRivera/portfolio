type SkillsPillProps = {
    icon?: React.ReactNode;
    text?: string;
    span?: 1 | 2;
}

export default function SkillsPill ({icon, text, span = 1}: SkillsPillProps) {
    return(
        <div className={`
            flex items-center flex-row gap-2 px-2.5 py-2
            border rounded-lg border-line
            text-muted transition-colors duration-200
            hover:text-main hover:border-edge
            ${span === 2 ? 'col-span-2' : ''}`}>
            <span className="flex size-4 shrink-0 items-center justify-center [&>svg]:size-full">
                {icon}
            </span>
            <p className="text-xs pt-0.5">{text}</p>
        </div>
    )
}
