'use client';
import heroBg from '../assets/professional_minimal_geometric_connectivity_background.png';

export default function Hero() {
    const scrollToAlgorithm = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -150; 
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    };
    
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background" id="hero-section">
            {/* Dynamic Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-b from-background via-background/80 to-background z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/5 via-background/0 to-background z-10" />
                <img 
                    src={heroBg.src} 
                    alt="Hero Background" 
                    className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom"
                />
            </div>

            <div className="container relative z-20 px-4 pb-10 text-center max-w-5xl mx-auto justify-center">
                
                <h1 className="text-6xl md:text-8xl font-lexend font-bold text-primary pb-8 pt-30 leading-[1.1] tracking-tight">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-primary bg-size-[200%_auto] animate-gradient">
                    Hiring that feels Human.
                    </span>
                </h1>
                
                <p className="text-lg md:text-lg text-muted-foreground mb-15 md:mb-30 max-w-2xl mx-auto leading-relaxed font-light">
                    No Resumes. No Applications. Just an intelligent matching engine that connects talented <a onClick={() => scrollToAlgorithm('students')} className='font-bold text-secondary/90 hover:bg-secondary/30 hover:cursor-pointer'>students</a> with the right <a onClick={() => scrollToAlgorithm('employers')} className='font-bold text-secondary/90 hover:bg-secondary/30 hover:cursor-pointer'>employers</a>.
                </p>

                <div className="flex flex-col text-xl sm:flex-row tracking-wide items-center justify-center gap-4">
                    <button onClick={() => scrollToAlgorithm('algorithm-section')} className="btn btn-ghost rounded-full h-16 px-8 text-muted-foreground bg-transparent border-none shadow-none">
                        How it works
                    </button>
                    <button 
                    className="btn h-14 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 transition-all duration-300 hover:shadow-primary/30 hover:-translate-y-0.5"
                    onClick={() => scrollToAlgorithm('waitlist-form')}
                    >
                        I'm Curious
                    </button>
                </div>
            </div>
        </section>
    );
}