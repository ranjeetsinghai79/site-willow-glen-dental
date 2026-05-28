import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Willow Glen Dental",
    tagline: "Your Smile, Our Passion",
    phone: "(408) 555-1234",
    phoneHref: "tel:+14085551234",
    email: "info@willowglendental.com",
    address: "792 Meridian Way, San Jose, CA 95126",
    city: "San Jose",
    serviceAreas: ["San Jose", "Willow Glen"],
    license: "DDS License #123456",
    since: "1974",
    google_rating: "4.9",
    review_count: "1000+",
    emergency: false,
    theme: "ocean",
    niche: "dentist",
  },

  services: [
    { icon: "shield-check", title: "Preventive Dentistry", desc: "Maintain optimal oral health with regular check-ups and cleanings.", urgent: false },
    { icon: "wrench", title: "Restorative Dentistry", desc: "Repair and restore damaged teeth to their natural strength and beauty.", urgent: false },
    { icon: "sparkles", title: "Cosmetic Dentistry", desc: "Enhance your smile's appearance with a range of aesthetic treatments.", urgent: false },
    { icon: "star", title: "Veneers", desc: "Achieve a flawless smile with custom-made porcelain veneers.", urgent: false },
    { icon: "hammer", title: "Dental Implants", desc: "Replace missing teeth with durable, natural-looking dental implants.", urgent: false },
    { icon: "clock", title: "Same-Day Crowns", desc: "Get high-quality dental crowns in a single visit with advanced technology.", urgent: false }
  ],

  testimonials: [
    { name: "Antonio A.", location: "San Jose, CA", stars: 5, text: "I wanted to express my appreciation for the excellent care I received at your office. Your commitment to honesty, good service, and patient care is evident in every interaction. The high-quality atmosphere of your office creates a truly positive experience. Thank you again for your dedication to your patients." },
    { name: "Chranham C.", location: "Willow Glen, CA", stars: 5, text: "My wife received an excellent, professional, and detailed consultation on her dental issues from Dr. Brian Kong. He took the time to thoroughly explain my wife's condition and provided a clear, step-by-step plan for treatment. We truly appreciate Dr. Brian’s diligence, patience, and efforts in addressing her concerns. His expertise and dedication gave us confidence in the recommended approach, and we are grateful for his outstanding care. Highly recommended!" },
    { name: "Gabe H.", location: "South San Francisco, CA", stars: 5, text: "I love coming here! My boss recommended I come here since him and his family have gone here for years. I live in south San Francisco but I don't mind making the drive!!! The office is beautiful, everyone is so friendly and I'm always greeted with a smile. They make going to the dentist fun :)" }
  ],

  trustBadges: [
    "50+ Years Legacy", "State-of-the-Art Facility", "Multi-Specialty Team", "Concierge Patient Care", "Advanced Technology", "In-House Lab"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Happy Patients", suffix: "+", decimals: 0 },
    { value: 50, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "World-Class Care", desc: "Experience top-tier dental services from a highly skilled and compassionate team." },
    { icon: "home", title: "Modern Facility", desc: "Relax in our state-of-the-art office designed for your comfort and convenience." },
    { icon: "briefcase", title: "Multi-Specialty Team", desc: "Benefit from comprehensive care delivered by a diverse team of dental experts." },
    { icon: "thumbs-up", title: "Personalized Consults", desc: "Receive tailored treatment plans designed specifically for your unique needs." },
    { icon: "sparkles", title: "Advanced Technology", desc: "We utilize cutting-edge dental technology for precise and effective treatments." },
    { icon: "wrench", title: "In-House Lab", desc: "Enjoy faster, more accurate results with our convenient on-site dental laboratory." }
  ],

  formServiceOptions: ["Preventive Dentistry", "Restorative Dentistry", "Cosmetic Dentistry", "Veneers", "Dental Implants", "Same-Day Crowns"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!