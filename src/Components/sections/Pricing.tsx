import { useState } from "react";
import { PricingCard } from "../ui/PricingCard";


export const Pricing = () => {
    const [yearly, setYearly] = useState(false);
    const proPrice = yearly ? "$29/mo" : "$39/mo";
    const proDescription = yearly
        ? "per month · billed yearly"
        : "per month · billed monthly";

    return (

        <>
            <section id="pricing" className="py-12 md:py-16 lg:py-20">
                <div className="mx-3 mt-4 mb-16 md:mx-20 lg:mx-32 2xl:mx-80">
                    <div className="lg:pt-2 text-center">
                        <h1 className="font-display mb-2 text-2xl font-bold leading-[0.95] tracking-tight text-text md:text-4xl">
                            Simple Pricing, <br /><span className="text-green-mid">Simple Value.</span>
                        </h1>
                        <span className="font-tech text-xs uppercase  text-muted">Start free. No credit card. Cancel anytime.</span>



                    </div>

                    <div className="mt-8 text-sm flex items-center justify-center gap-6">
                        <label className="inline-flex items-center gap-4">
                            <span className={`transition-colors ${yearly ? "text-muted" : "text-text"}`}>Monthly</span>

                            <button
                                type="button"

                                onClick={() => setYearly((prev) => !prev)}
                                aria-pressed={yearly}
                                className=" relative flex h-7  w-15 items-center rounded-full border border-zinc-700 bg-zinc-900 p-1 transition-colors"
                            >
                                <span
                                    className={` h-5 w-5 rounded-full bg-white transition-transform duration-300 ${yearly ? "translate-x-7" : "translate-x-0"}`}
                                />
                            </button>

                            <span className={`transition-colors ${yearly ? "text-text" : "text-muted"}`}> Yearly </span>

                            <span className="rounded-full border border-green-500/35 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
                                Save 25%
                            </span>
                        </label>
                    </div>

                    <div className="mt-12 grid gap-6 items-center justify-center md:grid-cols-2 lg:grid-cols-3">


                        <PricingCard tag="Starter" price={`$${0}`} description="Free Forever." list={["Up to 500 feedback/mo", "3 integrations", "Basic clustering"]} button="Get started free" />
                        <div className="order-first md:order-0">
                            <PricingCard tag="Growth" price={proPrice} description={proDescription} list={["Unlimited feedback", "All integrations", "AI clustering + summaries", "Roadmap sync"]} button="Start 7-day trial" highlighted />
                        </div>
                        <PricingCard tag="Enterprise" price={`Custom`} description="Talk to us" list={["Everything in Growth", "SSO & custom roles", "Custom data retention", "SLA & compliance docs", "Feature 5"]} button="Contact sales" />
                    </div>

                </div>



            </section>


        </>
    )
}
