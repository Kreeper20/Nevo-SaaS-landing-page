
export const Hero = () => {
    return (
        <>
            <section className="ml-3 mr-3 lg:mx-32 2xl:mx-80 md:mx-20 md:mt-32 mt-6">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Left side - Hero text */}
                    <section>
                        <div className="font-tech mt-12 mb-6 flex w-max items-center gap-2 rounded-full border border-green-900/40 bg-green-light px-3 py-1.5 text-xs uppercase tracking-wide text-green-mid">
                            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                            Now in public beta
                        </div>

                        <h1 className="font-display text-3xl font-bold leading-[1.02] tracking-tight text-text md:text-5xl">Turn customer <br className="hidden md:block" /> feedback into <br className="hidden md:block" /> product <span className="text-green">decisions <br className="hidden md:block" /> automatically</span>.</h1>
                        <p className="font-tech mt-3 mb-2 text-sm leading-relaxed text-muted">Nevo collects feedback from every channel, finds the <br className="hidden md:block" /> patterns, and tells your team exactly what to build next. <br className="hidden md:block" /> No spreadsheets. No guesswork.</p>

                        <button className="mt-6 w-full justify-center rounded-lg bg-green px-3 py-3 font-medium text-white shadow-[0_10px_30px_rgba(26,122,74,0.45)] transition-colors duration-300 hover:bg-green-mid md:w-auto">Start For Free</button>

                        <div className="flex items-center gap-2 mt-6 mb-6">
                            <div className="flex -space-x-3">
                                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-blue-600 text-sm font-bold text-white">A</div>
                                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-green-600 text-sm font-bold text-white">M</div>
                                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-orange-500 text-sm font-bold text-white">S</div>
                                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-pink-600 text-sm font-bold text-white">K</div>
                            </div>
                            <span className="font-tech text-xs text-muted">Joined by 2,400+ product teams this month</span>
                        </div>
                    </section>

                    {/* Right side - Recent feedback */}
                    <aside className="md:block md:mt-16">
                        <article className="rounded-2xl border border-border/85 bg-surface p-6 shadow-[0_18px_45px_rgba(0,0,0,0.38)]">
                            <h3 className="font-display mb-5 text-sm font-semibold tracking-wide text-text">Recent feedback</h3>

                            {/* Feedback items */}
                            <ul className="space-y-3 mb-3">
                                <li className="flex gap-2.5 border-b border-border py-3 first:pt-0 last:border-b-0">
                                    <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white bg-blue-600">A</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-tech mb-1 text-xs font-medium text-muted">Alex M. · Intercom · 2 min ago</div>
                                        <p className="text-sm leading-relaxed text-text">The search is way too slow, takes 4+ min. Really frustrating.</p>
                                        <div className="flex gap-1 mt-1.5 flex-wrap">
                                            <span className="rounded bg-orange-900/30 px-2 py-0.5 text-xs font-medium text-orange-300">Performance</span>
                                            <span className="rounded bg-red-900/30 px-2 py-0.5 text-xs font-medium text-red-300">Bug</span>
                                        </div>
                                    </div>
                                </li>

                                <li className="flex gap-2.5 border-b border-border py-3 first:pt-0 last:border-b-0">
                                    <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white bg-green-600">S</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-tech mb-1 text-xs font-medium text-muted">Sara R. · Zendesk · 8 min ago</div>
                                        <p className="text-sm leading-relaxed text-text">Would love a dark mode option! Much needed.</p>
                                        <div className="flex gap-1 mt-1.5 flex-wrap">
                                            <span className="rounded bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-300">Feature request</span>
                                            <span className="rounded bg-blue-900/30 px-2 py-0.5 text-xs font-medium text-blue-300">UX</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            {/* Insight box */}
                            <div className="rounded-lg border border-slate-700/80 bg-black/85 p-5 text-white">
                                <h4 className="font-tech mb-2 text-xs font-semibold uppercase tracking-wider text-muted">💡 NEVO INSIGHT</h4>
                                <p className="mb-3 text-sm font-light leading-relaxed text-slate-300">"Search performance" is mentioned in 3 recent tickets. This is your highest-priority issue.</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-tech rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-slate-300">3 mentions · High priority</span>
                                    <button className="cursor-pointer rounded bg-green-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-green-700">View</button>
                                </div>
                            </div>
                        </article>
                    </aside>
                </div>
            </section>

             <div className="mt-12 w-screen items-center justify-center border-t border-b border-border/90 bg-surface/35 p-4 px-36">

                <div className=" text-center justify-center text-xs md:justify-start flex items-center md:px-23 lg:px-32 gap-6">

                <h3 className="font-tech text-muted">USED BY</h3>
                <span className=" text-muted">|</span>
                <span className="font-tech text-muted">STRIPE</span>
                <span className="font-tech text-muted">LOOM</span>
                <span className="font-tech text-muted">NOTION</span>
                <span className="font-tech text-muted">VERCEL</span>
                </div>

            </div>

                     
        </>
    )
}
