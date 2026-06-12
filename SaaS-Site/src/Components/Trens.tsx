

export const Trends = () => {


    const trends = [
        { rank: 1, topic: "Search speed", width: "75%", color: "bg-red-500", count: 34, countColor: "text-red-400", arrow: "🔥" },
        { rank: 2, topic: "Dark mode", width: "55%", color: "bg-indigo-400", count: 24, countColor: "text-indigo-400", arrow: "↑" },
        { rank: 3, topic: "Mobile app", width: "42%", color: "bg-yellow-400", count: 18, countColor: "text-yellow-400", arrow: "↑" },
        { rank: 4, topic: "API docs", width: "30%", color: "bg-green-400", count: 13, countColor: "text-green-400", arrow: "→" },
        { rank: 5, topic: "CSV export", width: "18%", color: "bg-neutral-600", count: 9, countColor: "text-neutral-500", arrow: "↓" },
    ];

    return (
        <>
            <section className="border-t border-b border-border/90 bg-surface/35">
                <div className="mx-3 mt-16 mb-16 md:mx-20 lg:mx-32 2xl:mx-80 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-18">

                    
                            <aside className="bg-surface border order-2 md:order-1  border-border shadow-lg  shadow-black rounded-2xl overflow-hidden w-full max-w-2xl">

                                {/* Traffic lights */}
                                <div className="px-5 py-4 border-b border-border flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>

                                {/* rest stays exactly the same */}
                                <div className="px-6 pt-6 pb-4 flex items-center justify-between">
                                    <h3 className="text-white text-lg font-semibold">Trending this week</h3>
                                    <span className="bg-green-900/60 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-700/40">
                                        ↑ Updated hourly
                                    </span>
                                </div>

                                {/* Rows */}
                                <div className="px-6 pb-6 flex flex-col gap-1">
                                    {trends.map((t) => (
                                        <div key={t.rank} className="flex items-center gap-4 py-3 border-b border-border last:border-none">

                                            {/* Rank */}
                                            <span className="text-neutral-600 text-sm w-4 shrink-0">{t.rank}</span>

                                            {/* Topic */}
                                            <span className="text-white text-sm font-medium w-28 shrink-0">{t.topic}</span>

                                            {/* Bar */}
                                            <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${t.color}`} style={{ width: t.width }} />
                                            </div>

                                            {/* Count */}
                                            <span className={`text-sm font-bold w-6 text-right ${t.countColor}`}>{t.count}</span>

                                            {/* Arrow */}
                                            <span className="text-base w-5 text-center">{t.arrow}</span>
                                        </div>
                                    ))}
                                </div>

                            </aside>

                  

                    <div className="lg:pt-2 order-1 lg:order-2">
                        <span className="font-tech text-xs font-extrabold uppercase tracking-[0.24em] text-muted">TREND DETECTION</span>
                        <h1 className="font-display mt-5 text-2xl font-bold leading-[0.95] tracking-tight text-text md:text-4xl">
                            Know what customers are saying before your support team does.
                        </h1>
                        <p className="font-tech text-muted mt-4 max-w-xl text-sm leading-loose">
                            Nevo scans all incoming feedback hourly and surfaces topics gaining volume.
                            You'll spot a problem 48 hours before it becomes a ticket storm.

                            <ul className="list-disc pl-5 mt-2 text-sm text-muted">
                                <li className="">Tracks 100+ topics simultaneously across every source</li>
                                <li>Configurable spike alerts via Slack or email</li>
                                <li>Sentiment scoring per topic, per channel & per segment</li>
                            </ul>
                        </p>
                    </div>

                     


                </div>
            </section>

        </>
    )
}