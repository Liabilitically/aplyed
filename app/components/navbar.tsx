'use client';
export default function Navbar() {
    const scrollToAlgorithm = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -150; 
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    };
    return (
        <nav className="sticky top-3 mx-5 rounded-full z-50 bg-white/2 backdrop-blur-lg border border-white/10">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <span className="select-none cursor-pointer font-sans text-3xl font-bold tracking-tight text-secondary group-hover:text-primary/90 transition-colors" onClick={() => scrollToAlgorithm('hero-section')}>
                    aplyed
                </span>
                <button 
                className="btn rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 h-12 font-medium shadow-md shadow-primary/20 transition-all duration-300 hover:shadow-primary/30 hover:-translate-y-0.5 tracking-wide"
                onClick={() => scrollToAlgorithm('waitlist-form')}
                >
                    I'm Curious
                </button>
            </div>
        </nav>
    );
}