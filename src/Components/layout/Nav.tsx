import logo from "../../assets/NEVO-tsp.png"

export const Nav = () => {
    return (
        <nav className="flex items-center">
            <img src={logo} alt="Logo" className="h-6 pl-6 md:pl-16 w-auto" />
            
            <div className="ml-auto flex items-center gap-12 mr-6">
                <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
                    <li>
                        <a className="transition-colors duration-300 hover:text-text" href="#how-it-works">How it Works</a>
                    </li>
                    <li>
                        <a className="transition-colors duration-300 hover:text-text" href="#features">Features</a>
                    </li>
                    <li>
                        <a className="transition-colors duration-300 hover:text-text" href="#pricing">Pricing</a>
                    </li>
                    <li>
                        <a className="transition-colors duration-300 hover:text-text" href="#integrations">Integrations</a>
                    </li>
                </ul>

                <div className="flex space-x-4">
                    <button className="text-muted transition-colors duration-300 hover:text-text">Sign In</button>
                    <button className="rounded-md bg-green px-4 py-2 text-sm font-medium text-white shadow-[0_6px_20px_rgba(26,122,74,0.45)] transition hover:bg-green-mid">
                        Try for Free
                    </button>
                </div>
            </div>
        </nav>
    )
}
