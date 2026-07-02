type TimeSaveMetricProps = {
    value: string
    unit: string
    description: string
    note: string
}

export const TimeSaveMetric = (props: TimeSaveMetricProps) => {
    return (
        <div className="bg-surface hover:bg-surface/90 transition-colors duration-300 p-6 text-left md:p-6 lg:p-8">
            <h3 className="font-display text-2xl leading-none tracking-tight text-white md:text-3xl">
                {props.value}
                <span className="text-green-mid">{props.unit}</span>
            </h3>
            <p className="mt-4 text-sm leading-tight text-muted">
                {props.description}
            </p>
            <p className="font-body mt-1 text-xs font-semibold leading-tight text-green-mid">
                ↑ {props.note}
            </p>
        </div>
    )
}