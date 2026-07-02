type WorkStepProps = {
    tag: number
    title: string
    description: string
}

export const WorkStep = (props: WorkStepProps) => {
    return (
        <div className="border border-border/80 bg-black/15 px-6 py-6 md:px-7 md:py-7 transition-colors duration-300 hover:border-green-mid/40">
            <div className="grid gap-5 md:grid-cols-[6.5rem_minmax(0,1fr)] md:gap-6">
                <span className="font-tech text-2xl font-semibold text-muted/70 md:text-3xl">
                    {String(props.tag).padStart(2, "0")}
                </span>

                <div>
                    <h3 className="font-display text-base font-bold leading-tight text-text">
                        {props.title}
                    </h3>
                    <p className="font-tech mt-4 text-sm leading-relaxed text-muted">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}