import Image from 'next/image'

const testimonials = [
    {
        name: "Rahul Verma",
        profession: "Architect",
        description: "The architectural integrity of Mahalaxmi Heights is exceptional. It's rare to find a developer in Nagpur who prioritizes structural precision and design soul in equal measure.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
        image: "https://i.pinimg.com/736x/52/83/10/5283108b0f4aa0934b6248dc29b753c0.jpg", // Mahalaxmi Heights Logo/Image
    },
    {
        name: "Priya Deshmukh",
        profession: "Homeowner",
        description: "100% transparency and timely delivery. Moving into our home at Guruniwas was the most stress-free experience we've had with real estate. Truly trustworthy.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
        image: "https://i1-e.pinimg.com/1200x/87/d4/5d/87d45d86bd0d77ab81dfcb7bcb4bd8e3.jpg", // Guruniwas Image
    },
    {
        name: "Dr. Amit Joshi",
        profession: "Surgeon",
        description: "Finally found a luxury home that actually delivers on its promises. The attention to detail in the common areas and the quality of materials used is evident everywhere.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
        image: "https://i1-e.pinimg.com/736x/4b/09/9d/4b099d328ab798d96d431fe4dc84bf3d.jpg", // Future Vision Image
    },
    {
        name: "Sneha Kapur",
        profession: "Interior Designer",
        description: "As a designer, I appreciate the thoughtfully planned layouts. The spaces are intuitive and filled with natural light—a perfect canvas for a luxury lifestyle.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        image: "https://i.pinimg.com/736x/52/83/10/5283108b0f4aa0934b6248dc29b753c0.jpg",
    },
    {
        name: "Vikram Shah",
        profession: "Entrepreneur",
        description: "The location and the build quality made this an easy investment decision. Mahalaxmi Estate is setting a new benchmark for premium living in Nagpur.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        image: "https://i1-e.pinimg.com/1200x/87/d4/5d/87d45d86bd0d77ab81dfcb7bcb4bd8e3.jpg",
    },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const FUITestimonialWithSlide = () => {
    return (
        <section className='py-32 bg-navy overflow-hidden'>
            <div className="max-w-[1400px] mx-auto px-6">
                <div className='mb-20 space-y-4'>
                    <span className="font-label text-gold text-xs tracking-[0.5em] uppercase">Testimonials</span>
                    <h2 className="font-display text-white text-6xl md:text-8xl leading-none italic">
                        Voices of <span className="text-gold not-italic">Mahalaxmi</span>
                    </h2>
                    <p className="font-sans text-white/40 text-lg md:text-xl tracking-tight max-w-2xl">
                        Hear from the families and professionals who have chosen to build their legacy within our architectural landscapes.
                    </p>
                </div>

                <div 
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                    }}  
                    className="flex relative overflow-hidden shrink-0 max-w-full"
                >
                  <div className="flex animate-x-slider gap-8 w-max py-10">
                    {duplicatedTestimonials.map((testimonial, indx) => {
                        return (
                            <div 
                                key={indx} 
                                className="border border-white/10 flex flex-col bg-white/[0.03] backdrop-blur-md rounded-2xl shrink-0 grow-0 w-[400px] md:w-[600px] h-full hover:border-gold/30 transition-colors group"
                            >
                                <p className="px-8 py-10 text-pretty text-xl font-light text-white/80 sm:text-2xl md:text-3xl tracking-tight leading-snug">
                                    &quot;{testimonial.description}&quot;
                                </p>
                                <div className="border-t border-white/10 w-full flex gap-1 overflow-hidden bg-white/[0.02]">
                                    <div className="w-2/3 flex gap-4 items-center px-6 py-5">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/20">
                                            <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className='flex flex-col flex-1 gap-0 justify-start items-start'>
                                            <h5 className='text-white font-display text-lg md:text-xl'>{testimonial.name}</h5>
                                            <p className='text-gold/50 text-xs md:text-sm font-label tracking-widest uppercase'>{testimonial.profession}</p>
                                        </div>
                                    </div>
                                    <div className='w-[1px] bg-white/10' />
                                    <div className='flex-1 flex items-center justify-center px-4'>
                                        <img 
                                            src={testimonial.image} 
                                            className='h-12 w-full object-cover rounded opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500' 
                                            alt='project_ref' 
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                 </div>
                </div>
            </div>
        </section>
    )
}

export default FUITestimonialWithSlide;
