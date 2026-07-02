import { Dot } from "lucide-react"

type PricingCardProps = {
    tag: string
    price: number | string
    description: string
    list: string[]
    button?: string
    highlighted?: boolean
}

export const PricingCard = (props: PricingCardProps) => {
    return (
        <div className={`relative h-full md:h-100 w-xs md:w-full max-w-sm overflow-hidden rounded-lg border p-6 transition-colors duration-300 md:p-8 ${props.highlighted ? "border-green-mid/50 bg-bg hover:border-green-mid/70" : "border-border/80 bg-bg hover:border-green-mid/40"}`}>
            {props.highlighted && (
                <>
                    <div className="pointer-events-none absolute inset-0 bg-green-500/8" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-40 from-green-500/20 to-transparent" />
                </>
            )}
            <div className="relative z-10 flex h-full flex-col">
                <h3 className="font-display text-sm leading-none tracking-tight text-white md:text-xs">
                    {props.tag}
                </h3>

                <p className="font-display mt-2 text-3xl font-bold leading-none tracking-tight text-text">
                    {props.price}
                </p>

                <p className="mt-2 text-sm leading-tight text-muted">
                    {props.description}
                </p>

                <div className="mt-6 h-px w-full bg-border/70" />

                <ul className="mt-6 space-y-2">
                    {props.list.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-green-mid"><Dot size={16} /></span>
                            <span className="text-sm text-muted">{item}</span>
                        </li>
                    ))}
                </ul>

                <button className="mt-auto w-full rounded-md border border-green-mid/40 bg-green-mid/10 py-3 text-sm font-medium text-green-mid transition-colors hover:bg-green-mid/20">
                    {props.button}
                </button>
            </div>
        </div>
    )
}