
export const Footer = () => {
    return (
        <>
            <footer className="mx-auto mt-20 border-t border-border bg-surface px-6 py-8">
                <div className="mx-auto max-w-6xl md:flex md:items-start md:justify-between">
                    <div>
                        <h1 className="text-xl font-bold text-white">Nevo</h1>
                        <p className="mt-2 text-xs text-muted">Turn customer feedback into product <br /> decisions — automatically. Built for <br /> modern product teams.</p>
                    </div>

                    <nav className="mt-6 flex flex-col gap-12 md:mt-0 md:flex-row md:gap-20">
                        <ul className="flex flex-col gap-1 text-xs text-muted">
                            <h4 className="font-bold">PRODUCT</h4>
                            <li>
                                <a className="transition-colors duration-300 hover:text-text" href="#how-it-works">How it Works</a>
                            </li>
                            <li>
                                <a className="transition-colors duration-300 hover:text-text" href="#integrations">Integrations</a>
                            </li>
                            <li>
                                <a className="transition-colors duration-300 hover:text-text" href="#features">Features</a>
                            </li>
                            <li>
                                <a className="transition-colors duration-300 hover:text-text" href="#pricing">Pricing</a>
                            </li>
                        </ul>

                        <ul className="flex flex-col gap-1 text-xs text-muted">
                            <h4 className="font-bold">LEGAL</h4>
                            <li>
                                <a className="transition-colors duration-300 hover:text-text" href="#pricing">Terms of Service</a>
                            </li>
                            <li>
                                <a className="transition-colors duration-300 hover:text-text" href="#how-it-works">Privacy Policy</a>
                            </li>
                            <li>
                                <a className="transition-colors duration-300 hover:text-text" href="#features">Security</a>
                            </li>
                            <li>
                                <a className="transition-colors duration-300 hover:text-text" href="#integrations">Cookies</a>
                            </li>
                        </ul>

                        <ul className="flex flex-col gap-1 text-xs text-muted">
                            <h4 className="font-bold">COMPANY</h4>
                            <li>
                                <a className="transition-colors duration-300 hover:text-text" href="#pricing">About Us</a>
                            </li>
                            <li>
                                <a className="transition-colors duration-300 hover:text-text" href="#how-it-works">Careers</a>
                            </li>
                            <li>
                                <a className="transition-colors duration-300 hover:text-text" href="#features">Contact Us</a>
                            </li>
                            <li>
                                <a className="transition-colors duration-300 hover:text-text" href="#integrations">Blog</a>
                            </li>
                        </ul>
                    </nav>

                       

                </div>
            </footer>
        </>
    )
}
