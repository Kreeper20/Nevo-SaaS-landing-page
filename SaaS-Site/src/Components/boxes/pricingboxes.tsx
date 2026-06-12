type Prices = {
    name: string;
    title: string;
    company: string;
}

export const Pricingboxes = (props: Prices) => {
    return (
        <>
            <div className="w-full max-w-xs">
        <div className="rounded-lg border border-primary">
            <div className="h-28 rounded-t-lg bg-primary sm:h-32"></div>
            <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-text-main">{props.name}</h3>
                <p className="text-sm text-text-muted"><span className="text-primary">{props.title}</span> <br /> {props.company}</p>
            </div>
        </div>

        </div>

        </>
    )
}
