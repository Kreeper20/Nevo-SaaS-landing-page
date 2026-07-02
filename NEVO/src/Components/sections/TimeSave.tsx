import { TimeSaveMetric } from "../ui/TimeSaveMetric"

export const TimeSave = () => {
    return (
        <>
            <section className="border-b border-border/90 py-16">
                <div className="mx-3 mt-4 mb-16 md:mx-20 lg:mx-32 2xl:mx-80">
                    <div className="lg:pt-2 text-center">
                        <span className="font-tech text-xs font-extrabold uppercase tracking-[0.24em] text-muted">BY THE NUMBERS</span>
                        <h1 className="font-display mt-5 text-2xl font-bold leading-[0.95] tracking-tight text-text md:text-4xl">
                            The results speak <br />for <span className="text-green-mid">themselves.</span>
                        </h1>
                    </div>

                    <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-border/70 bg-border/70">
                        <div className="grid grid-cols-2 gap-px xl:grid-cols-4">
                            <TimeSaveMetric
                                value="3.2"
                                unit="x"
                                description="faster roadmap decisions"
                                note="vs. manual analysis"
                            />
                            <TimeSaveMetric
                                value="68"
                                unit="%"
                                description="reduction in missed issues"
                                note="average across customers"
                            />
                            <TimeSaveMetric
                                value="12"
                                unit="h"
                                description="saved per PM per week"
                                note="no more spreadsheets"
                            />
                            <TimeSaveMetric
                                value="4.2"
                                unit="k"
                                description="product teams onboarded"
                                note="growing 40% MoM"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}