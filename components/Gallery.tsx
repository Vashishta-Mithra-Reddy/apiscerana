import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface GalleryProps {
  items: GalleryItem[];
  title?: string;
  description?: string;
}

const Gallery = ({ 
  items, 
  title = "Our Gallery", 
  description = "Explore our collection of premium honey products" 
}: GalleryProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-16 rounded-lg">
      <div className="container-custom">
        {/* <h2 className="section-title text-center">{title}</h2>
        <p className="text-center text-lg mb-8 max-w-2xl mx-auto">{description}</p> */}
        
        <div className="relative group">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6 text-honey-dark" />
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6 text-honey-dark" />
            </button>
          )}

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 snap-x snap-mandatory"
          >
            {items.map((item) => (
              <div 
                key={item.id}
                className="flex-none w-80 h-80 relative rounded-2xl overflow-hidden snap-center bee-hotspot"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  <p className="text-white/90 text-sm mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;