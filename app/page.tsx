'use client';

import Image from "next/image";
import Link from "next/link";
import { 
  Menu, 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Instagram, 
  Twitter, 
  Check, 
  ChevronRight,
  Clock,
  Leaf,
  Heart
} from "lucide-react";
import { useEffect, useState } from "react";
import HoneyBee from "./components/HoneyBee";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
    
    // Add scroll event listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if scrolled past 100vh
      if (scrollPosition > windowHeight*0.85) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Only render bee on client side */}
      {isMounted && <HoneyBee />}
      
      {/* Navigation */}
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <div className={`${scrolled ? 'bg-honey/60' : 'bg-honey/0'} transition-colors duration-300 backdrop-blur-md text-white rounded-full py-4 px-8 shadow-lg max-w-7xl w-full mx-4 flex justify-between items-center`}>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">Himalayan Honey</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="hover:text-honey-light transition-colors">About</a>
            <a href="#products" className="hover:text-honey-light transition-colors">Products</a>
            <a href="#sustainable" className="hover:text-honey-light transition-colors">Sustainability</a>
            <a href="#contact" className="hover:text-honey-light transition-colors">Contact</a>
            <Link href="/shop" className="bg-white text-honey-dark font-semibold py-2 px-6 rounded-full hover:bg-honey-light hover:text-white transition-colors">Shop Now</Link>
          </div>
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section - Add padding-top to account for fixed header */}
      <section className="relative h-[100vh] flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image 
              src="/hero.avif" 
              alt="Himalayan Honey Farm" 
              fill 
              priority
              className="object-cover brightness-75"
            />
          </div>
        </div>
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Pure Himalayan Honey</h1>
            <p className="text-xl mb-8">Sustainably harvested from the pristine mountains of the Himalayas</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="btn-primary text-center">Shop Our Honey</Link>
              <a href="#about" className="btn-secondary text-center bg-white/20 border-white text-white hover:bg-white hover:text-honey-dark">Learn Our Story</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-nature-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="mb-6 text-lg text-honey-dark">As a humble Himalayan farmer, I've dedicated my life to the art of beekeeping. My journey began with a simple love for these incredible creatures and has evolved into a passion for preserving our precious ecosystem.</p>
              <p className="mb-6 text-lg text-honey-dark">My home is surrounded by beehives - they're in my garden, on my rooftop, and even inside specially designed areas of my home. Each day, I work alongside my bees, learning from them and ensuring they thrive in their natural environment.</p>
              <p className="text-lg text-honey-dark">The honey we harvest is pure, raw, and packed with the essence of Himalayan wildflowers. Every jar tells the story of our mountains, our bees, and our commitment to sustainable practices.</p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/honeyx.jpg" 
                alt="Himalayan Beekeeper" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-6 text-honey-dark">Our Honey</h2>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-honey-brown">
            We produce only pure, natural multi-floral honey. Our bees forage freely among the diverse Himalayan wildflowers surrounding our farm, creating a unique honey that captures the essence of our mountain ecosystem.
          </p>
          
          <div className="flex justify-center">
            <div className="bg-nature-cream rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] w-full max-w-4xl flex flex-col md:flex-row">
              <div className="relative md:w-2/5 h-80 md:h-auto">
                <Image 
                  src="/honey_jar.jpg" 
                  alt="Himalayan Multi-Floral Honey" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5">
                <h3 className="text-2xl font-bold text-honey-dark mb-3">Himalayan Multi-Floral Honey</h3>
                <p className="text-honey-brown mb-6">
                  Our signature honey is a perfect representation of the Himalayan ecosystem. As our bees naturally forage from diverse wildflowers across the mountain slopes, they create a honey with complex flavors that change subtly with each season.
                </p>
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-nature-green mt-1">
                      <Check className="h-5 w-5" />
                    </span>
                    <span className="text-honey-brown">100% pure and unprocessed</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-nature-green mt-1">
                      <Check className="h-5 w-5" />
                    </span>
                    <span className="text-honey-brown">Rich in natural enzymes and antioxidants</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-nature-green mt-1">
                      <Check className="h-5 w-5" />
                    </span>
                    <span className="text-honey-brown">Harvested using traditional methods</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bold text-honey-dark">800 Rs.</span>
                    <span className="text-sm ml-2 text-honey-brown">(1000g jar)</span>
                  </div>
                  <Link href="/shop" className="btn-primary">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-honey-light/10 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-honey-dark mb-4 text-center">The Natural Cycle of Multi-Floral Honey</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-honey-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-nature-green" />
                </div>
                <h4 className="font-bold mb-2 text-honey-dark">Spring Bloom</h4>
                <p className="text-honey-brown">Our bees begin foraging from early Himalayan blooms, creating honey with delicate floral notes.</p>
              </div>
              <div className="text-center">
                <div className="bg-honey-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-honey-dark" />
                </div>
                <h4 className="font-bold mb-2 text-honey-dark">Summer Richness</h4>
                <p className="text-honey-brown">Peak summer brings a diversity of mountain flowers, resulting in our richest, most complex honey.</p>
              </div>
              <div className="text-center">
                <div className="bg-honey-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-honey-brown" />
                </div>
                <h4 className="font-bold mb-2 text-honey-dark">Autumn Harvest</h4>
                <p className="text-honey-brown">We carefully harvest only excess honey, ensuring our bees have enough to sustain through winter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainable" className="py-20 bg-honey-light/20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/honeyz.jpg" 
                alt="Sustainable Beekeeping" 
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="section-title text-white">Sustainable Beekeeping</h2>
              <p className="mb-6 text-lg text-white">Our commitment to the environment goes beyond producing honey. We practice sustainable beekeeping methods that respect the natural cycles of our bees and protect their habitats.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-nature-green mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </span>
                  <span className="text-white">We never harvest all the honey, ensuring our bees have enough to thrive year-round</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-nature-green mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </span>
                  <span className="text-white">Our hives are made from sustainable materials and designed to mimic natural habitats</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-nature-green mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </span>
                  <span className="text-white">We plant bee-friendly flowers and trees to support biodiversity in our region</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-nature-green mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </span>
                  <span className="text-white">We use zero chemicals or antibiotics in our beekeeping practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apis Cerana Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-6 text-honey-dark">Meet Our Himalayan Honey Bees</h2>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-honey-brown">
            Our farm is home to the remarkable Apis cerana - the Eastern honey bee native to the Himalayan region. These extraordinary creatures are perfectly adapted to our mountain ecosystem.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-nature-cream/50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-honey-dark mb-4">The Remarkable Apis Cerana</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-honey-light/30 rounded-full p-3 mt-1">
                    <Heart className="h-5 w-5 text-honey-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-honey-dark mb-1">Himalayan Natives</h4>
                    <p className="text-honey-brown">Unlike imported European honey bees, our Apis cerana are indigenous to the Himalayas and have evolved over millennia to thrive in our unique mountain climate with cold winters and monsoon seasons.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-honey-light/30 rounded-full p-3 mt-1">
                    <Leaf className="h-5 w-5 text-honey-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-honey-dark mb-1">Natural Defenders</h4>
                    <p className="text-honey-brown">These resilient bees have developed fascinating defense mechanisms against predators like hornets. They form a "bee ball" around invaders, raising their body temperature to literally cook the intruder!</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-honey-light/30 rounded-full p-3 mt-1">
                    <Clock className="h-5 w-5 text-honey-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-honey-dark mb-1">Efficient Foragers</h4>
                    <p className="text-honey-brown">Apis cerana can forage in light rain and misty conditions when other bee species remain in their hives. They're also expert pollinators of small-flowered Himalayan plants that larger bees can't access.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/honey.jpg" 
                  alt="Apis Cerana - Eastern Honey Bee" 
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="bg-honey/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg max-w-xs absolute -bottom-10 -left-10 transform rotate-2">
                <h4 className="font-bold mb-2">Did You Know?</h4>
                <p className="text-sm">Apis cerana produces a distinctive honey with complex floral notes that can't be replicated by other bee species. Their honey contains unique enzymes adapted to the high-altitude Himalayan flora!</p>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <div className="bg-honey-light/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-honey-dark mb-6 text-center">The Dance of the Himalayan Honey Bee</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md transform transition-transform hover:scale-105 hover:rotate-1">
                  <div className="w-16 h-16 bg-honey-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-honey-dark">01</span>
                  </div>
                  <h4 className="font-bold mb-2 text-honey-dark text-center">The Scout's Journey</h4>
                  <p className="text-honey-brown text-center">When a scout bee discovers nectar-rich flowers in the Himalayan valleys, she memorizes the exact location using the sun and landscape as guides.</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md transform transition-transform hover:scale-105 hover:-rotate-1">
                  <div className="w-16 h-16 bg-honey-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-honey-dark">02</span>
                  </div>
                  <h4 className="font-bold mb-2 text-honey-dark text-center">The Waggle Dance</h4>
                  <p className="text-honey-brown text-center">Returning to the hive, she performs a special figure-eight dance. The intensity and duration of her movements tell other bees exactly how far and in which direction to fly.</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md transform transition-transform hover:scale-105 hover:rotate-1">
                  <div className="w-16 h-16 bg-honey-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-honey-dark">03</span>
                  </div>
                  <h4 className="font-bold mb-2 text-honey-dark text-center">The Collective Harvest</h4>
                  <p className="text-honey-brown text-center">Following the scout's instructions, worker bees fly directly to the flowers, collecting nectar and pollen that will eventually become our distinctive Himalayan honey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      {/* <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-nature-cream p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-honey-amber">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block">★</span>
                  ))}
                </div>
              </div>
              <p className="italic mb-4">"This is the purest honey I've ever tasted. You can really taste the difference when honey is harvested with such care and respect for nature."</p>
              <p className="font-bold text-honey-dark">- Sarah J.</p>
            </div>
            
            <div className="bg-nature-cream p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-honey-amber">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block">★</span>
                  ))}
                </div>
              </div>
              <p className="italic mb-4">"The rhododendron honey has such a unique flavor profile. It's become a staple in my kitchen and my go-to gift for friends and family."</p>
              <p className="font-bold text-honey-dark">- Michael T.</p>
            </div>
            
            <div className="bg-nature-cream p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-honey-amber">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block">★</span>
                  ))}
                </div>
              </div>
              <p className="italic mb-4">"Not only is the honey exceptional, but knowing it's produced sustainably makes it even sweeter. I love supporting businesses that care for our planet."</p>
              <p className="font-bold text-honey-dark">- Priya K.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-honey-dark text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-8 text-lg">Have questions about our honey or beekeeping practices? Want to arrange a visit to our farm? We'd love to hear from you!</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-honey-light mt-1">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>Chander Sen Thakur, VPO Burua, Manali, Burwa, Himachal Pradesh 175103</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-honey-light mt-1">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>contact@himalayanhoney.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-honey-light mt-1">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>+91 98170 46868</span>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <a href="#" className="text-honey-light hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-honey-light hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-honey-light hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="h-full flex items-center">
              <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53965.20574836654!2d77.1746143!3d32.289673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048775d6c6c549%3A0x2a182642dd11aebb!2sHimalayan%20Honey%20Bee%20farm%20Manali!5e0!3m2!1sen!2sin!4v1748109513226!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-honey-brown text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Himalayan Honey</h3>
              <p>Pure, natural honey from the pristine mountains of the Himalayas.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-honey-light transition-colors flex items-center gap-1"><ChevronRight className="h-4 w-4" /> Home</a></li>
                <li><a href="#about" className="hover:text-honey-light transition-colors flex items-center gap-1"><ChevronRight className="h-4 w-4" /> About Us</a></li>
                <li><a href="#products" className="hover:text-honey-light transition-colors flex items-center gap-1"><ChevronRight className="h-4 w-4" /> Products</a></li>
                <li><Link href="/shop" className="hover:text-honey-light transition-colors flex items-center gap-1"><ChevronRight className="h-4 w-4" /> Shop</Link></li>
                <li><a href="#contact" className="hover:text-honey-light transition-colors flex items-center gap-1"><ChevronRight className="h-4 w-4" /> Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Our Commitment</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><Leaf className="h-4 w-4 text-honey-light" /> Sustainable Beekeeping</li>
                <li className="flex items-center gap-2"><Heart className="h-4 w-4 text-honey-light" /> Bee Conservation</li>
                <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-honey-light" /> Traditional Methods</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Visit Our Farm</h4>
              <p className="mb-2">We welcome visitors to experience our beekeeping practices firsthand.</p>
              <p className="mb-4">Open for tours: Friday-Sunday, 10am-4pm</p>
              <Link href="/contact" className="btn-secondary text-sm inline-block">Book a Tour</Link>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Himalayan Honey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
