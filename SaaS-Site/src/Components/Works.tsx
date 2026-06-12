import { Worksbox } from "./boxes/Worksboxes"

export const Works = () => {
    return (
        <>
            <section className="mx-3 mt-16 mb-16 md:mx-20 lg:mx-32 2xl:mx-80">
                <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-18">
                    <div className="lg:pt-2">
                        <span className="font-tech text-xs font-semibold uppercase tracking-[0.24em] text-muted">HOW IT WORKS</span>
                        <h1 className="font-display mt-5 text-2xl font-bold leading-[0.95] tracking-tight text-text md:text-4xl">
                            From raw feedback
                            <br />
                            to <span className="font-bold text-green-mid">clear action</span> in
                            <br />
                            three steps.
                        </h1>
                        <p className="font-tech text-muted mt-4 max-w-xl text-sm leading-loose">
                            Nevo connects to the tools you already use, reads every message,
                            
                            and surfaces the signal from the noise, so your PM never misses
                            
                            what customers are asking for.
                        </p>
                    </div>

                    <aside className="space-y-4 lg:mt-2">
                        <Worksbox tag={1} title="Connect your channels" description="Plug in Intercom, Zendesk, Slack, email, App Store reviews, and more. Nevo reads every message across all sources in real time." />
                        <Worksbox tag={2} title="AI finds the patterns" description="Our model clusters feedback by theme, tracks volume trends, and scores each topic by impact - automatically, every hour." />
                        <Worksbox tag={3} title="Ship what matters" description="Nevo pushes prioritised insights directly to Linear, Jira, or Notion. Your team always knows what to build next - and why." />
                    </aside>
                </div>
            </section>
        </>
    )
}
