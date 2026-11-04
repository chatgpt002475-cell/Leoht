// Vowora - Complete Standalone WedMeGood Architecture
(function() {
  'use strict';

  // Safe Storage
  function safeGet(key, defaultVal) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const val = window.localStorage.getItem(key);
        return val ? JSON.parse(val) : defaultVal;
      }
    } catch(e) {
      console.warn("Storage restricted", e);
    }
    return defaultVal;
  }

  function safeSet(key, val) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, JSON.stringify(val));
      }
    } catch(e) {}
  }

  const VENDORS_DATA = [
    {
      id: "vow-chn-01",
      name: "The Royal Knot Luxury Weddings",
      slug: "the-royal-knot-luxury-weddings",
      city: "Chennai",
      locality: "ECR (East Coast Road)",
      address: "Sea Shell Avenue, Injambakkam, ECR, Chennai - 600115",
      phone: "+91 98401 23456",
      whatsapp: "919840123456",
      email: "enquiry@theroyalknot.in",
      rating: 4.9,
      reviewCount: 168,
      weddingsCount: 320,
      experienceYears: 10,
      priceRange: {
        startingFee: 350000,
        feeLabel: "₹3.5 Lakh - ₹6 Lakh",
        decorStartingFee: "₹2,50,000",
        category: "2_5l_to_4l"
      },
      badge: "Handpicked",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds within 1 hour",
      services: ["Full Planning", "Decor & Styling", "Destination Weddings", "Hospitality & Logistics"],
      guestCapacities: ["100-300", "300-600", "600-1000", "1000+"],
      specialty: "Luxury Beachfront & Heritage Palatial Weddings",
      coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
      ],
      about: "The Royal Knot is an award-winning bespoke wedding planning studio based in Chennai. Specializing in luxury destination weddings along the scenic East Coast Road, Mahabalipuram, and heritage South Indian celebrations, we turn your romantic vision into an unforgettable heirloom experience.",
      packages: [
        {
          name: "Emerald Package (Partial Coordination)",
          price: "₹2,50,000",
          description: "Ideal for couples who have booked their venue and core vendors but need expert design styling, timeline management, and seamless day-of execution.",
          features: ["Vendor contract reconciliation", "Detailed 3-day itinerary design", "Day-of bridal & groom shadowing", "Sound & light cue management"]
        },
        {
          name: "Diamond Package (Complete End-to-End)",
          price: "₹4,50,000",
          description: "Comprehensive 360-degree wedding design, budget allocation, vendor negotiations, bespoke themes, guest travel management, and full on-ground team.",
          features: ["Full venue scouting & negotiations", "Theme & 3D decor renders", "Custom invitation suite & RSVP tracking", "Complete hospitality desk & transfers", "Lead planner + 8 dedicated managers"]
        },
        {
          name: "Royal Destination Package",
          price: "₹7,50,000+",
          description: "Designed for grand destination celebrations across Mahabalipuram, Pondicherry, Goa, and palace venues across India.",
          features: ["Charter & airport logistics", "Bespoke welcome hampers & gifting", "Celebrity artist & DJ bookings", "Multi-lingual guest relations team", "24/7 dedicated control room"]
        }
      ],
      reviews: [
        {
          author: "Kavya & Anirudh",
          weddingDate: "January 2026",
          rating: 5,
          title: "Dream wedding at Mahabalipuram beach resort!",
          venue: "InterContinental Chennai Resort",
          text: "The Royal Knot made our 3-day wedding completely stress-free. Our guests came from the US, UK, and across Tamil Nadu, and every single person was treated like royalty. The floral mandap facing the ocean was beyond breathtaking."
        },
        {
          author: "Divya & Gautham",
          weddingDate: "November 2025",
          rating: 5,
          title: "Spectacular Sangeet and traditional Muhurtham",
          venue: "Mayor Ramanathan Chettiar Hall, Chennai",
          text: "Finding planners who understand both traditional Tamil Brahmin rituals and a modern, high-energy reception is hard. The Royal Knot nailed both flawlessly. Highest recommendation!"
        }
      ],
      faqs: [
        {
          q: "What is your booking advance policy?",
          a: "We accept a 25% booking advance to block your wedding dates. 50% is scheduled 30 days prior, and the remaining 25% is cleared on the event week."
        },
        {
          q: "Do you have your own decor production team?",
          a: "Yes! We have an in-house decor production warehouse with custom trusses, imported floral tie-ups, and bespoke stage sets."
        }
      ]
    },
    {
      id: "vow-chn-02",
      name: "Madras Event House & Weddings",
      slug: "madras-event-house-weddings",
      city: "Chennai",
      locality: "T. Nagar",
      address: "42 Burkit Road, T. Nagar, Chennai - 600017",
      phone: "+91 98840 98765",
      whatsapp: "919884098765",
      email: "hello@madrasevents.com",
      rating: 4.8,
      reviewCount: 142,
      weddingsCount: 280,
      experienceYears: 8,
      priceRange: {
        startingFee: 220000,
        feeLabel: "₹2.2 Lakh - ₹3.8 Lakh",
        decorStartingFee: "₹1,80,000",
        category: "under_2_5l"
      },
      badge: "Top Rated 2026",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds within 2 hours",
      services: ["Full Planning", "Partial Planning", "Decor & Styling", "Day-of Coordination"],
      guestCapacities: ["100-300", "300-600", "600-1000"],
      specialty: "Contemporary South Indian Traditions & Vibrant Sangeets",
      coverImage: "https://images.unsplash.com/photo-1545232979-fbf68fe9c132?auto=format&fit=crop&w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1545232979-fbf68fe9c132?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
      ],
      about: "Madras Event House brings heart, cultural authenticity, and contemporary design to weddings across Tamil Nadu. Headquartered in central T. Nagar, we have orchestrated memorable celebrations at Chennai's finest mandapams.",
      packages: [
        {
          name: "Classic Coordination",
          price: "₹1,80,000",
          description: "Month-of and day-of complete on-site management.",
          features: ["Vendor coordination", "Checklist tracking", "Guest reception desk"]
        },
        {
          name: "Signature Full Wedding Plan",
          price: "₹3,20,000",
          description: "Total planning from invitation conceptualization to send-off.",
          features: ["Concept design & styling", "Catering & menu tasting oversight", "Artist management"]
        }
      ],
      reviews: [
        {
          author: "Archana & Vignesh",
          weddingDate: "December 2025",
          rating: 5,
          title: "Flawless planning and stunning brass-and-marigold decor!",
          venue: "The Leela Palace, Chennai",
          text: "Madras Event House handled everything with immense patience. The team ensured our traditional muhurtham rituals ran strictly on time."
        }
      ],
      faqs: [
        {
          q: "Can you manage catering & banana leaf service?",
          a: "Yes, we coordinate directly with traditional catering masters (Samayal experts) to ensure authentic South Indian hospitality."
        }
      ]
    },
    {
      id: "vow-chn-03",
      name: "Smrithi & Co. Bespoke Celebrations",
      slug: "smrithi-and-co-bespoke-celebrations",
      city: "Chennai",
      locality: "Anna Nagar",
      address: "Second Avenue, Anna Nagar Roundtana, Chennai - 600040",
      phone: "+91 97909 54321",
      whatsapp: "919790954321",
      email: "contact@smrithievents.com",
      rating: 4.95,
      reviewCount: 195,
      weddingsCount: 410,
      experienceYears: 12,
      priceRange: {
        startingFee: 450000,
        feeLabel: "₹4.5 Lakh - ₹8 Lakh",
        decorStartingFee: "₹3,50,000",
        category: "4l_to_6l"
      },
      badge: "Handpicked",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds within 1 hour",
      services: ["Full Planning", "Destination Weddings", "Decor & Styling", "Hospitality & Logistics"],
      guestCapacities: ["300-600", "600-1000", "1000+"],
      specialty: "High-Profile Celebrity & Multi-Cultural Celebrations",
      coverImage: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80"
      ],
      about: "Smrithi & Co. is Chennai's top-tier wedding planning and aesthetic design firm. Known for high-concept florals, immersive lighting installations, and seamless multi-cultural coordination.",
      packages: [
        {
          name: "Grand Soirée Plan",
          price: "₹5,00,000",
          description: "Complete curation for 2-3 day weddings with over 1000 guests.",
          features: ["Dedicated hospitality lead", "VVIP shadow team", "3D photorealistic stage design", "Choreographer & live band coordination"]
        }
      ],
      reviews: [
        {
          author: "Meera & Siddharth",
          weddingDate: "February 2026",
          rating: 5,
          title: "Felt like a fairytale royal wedding!",
          venue: "Taj Coromandel, Chennai",
          text: "Smrithi is a visionary. She listened to our craziest ideas and turned them into reality."
        }
      ],
      faqs: [
        {
          q: "Do you plan outstation or destination weddings?",
          a: "Yes! Over 40% of our portfolio comprises destination weddings in Mahabalipuram, Sri Lanka, Bali, and Rajasthan."
        }
      ]
    },
    {
      id: "vow-chn-04",
      name: "Aura Wedding & Decor Planners",
      slug: "aura-wedding-decor-planners",
      city: "Chennai",
      locality: "Adyar",
      address: "Kasturibai Nagar 3rd Cross, Adyar, Chennai - 600020",
      phone: "+91 94440 11223",
      whatsapp: "919444011223",
      email: "info@auraplanners.in",
      rating: 4.7,
      reviewCount: 98,
      weddingsCount: 175,
      experienceYears: 6,
      priceRange: {
        startingFee: 190000,
        feeLabel: "₹1.9 Lakh - ₹3.2 Lakh",
        decorStartingFee: "₹1,20,000",
        category: "under_2_5l"
      },
      badge: "Verified",
      isVerified: true,
      isFeatured: false,
      responseTime: "⚡ Responds within 3 hours",
      services: ["Full Planning", "Partial Planning", "Day-of Coordination"],
      guestCapacities: ["100-300", "300-600"],
      specialty: "Eco-Friendly & Sustainable Floral Weddings",
      coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80"
      ],
      about: "Aura Wedding Planners are pioneers in zero-waste and eco-conscious South Indian celebrations. We combine locally sourced jasmine, lotus, banana fiber craft, and sustainable brassware.",
      packages: [
        {
          name: "Green Elegance Package",
          price: "₹2,10,000",
          description: "Zero plastic, locally sourced decor, complete wedding day coordination.",
          features: ["Biodegradable confetti", "Living plant favors", "Complete schedule management"]
        }
      ],
      reviews: [
        {
          author: "Shreya & Harish",
          weddingDate: "October 2025",
          rating: 5,
          title: "Clean, sustainable, and utterly charming",
          venue: "M Weddings & Conventions, Chennai",
          text: "If you want an eco-friendly wedding without sacrificing beauty, Aura is the best choice in Chennai."
        }
      ],
      faqs: [
        {
          q: "What makes your decor sustainable?",
          a: "We avoid thermocol, single-use plastics, and floral foam."
        }
      ]
    },
    {
      id: "vow-chn-05",
      name: "Kalyana Vaibhogam Wedding Architects",
      slug: "kalyana-vaibhogam-wedding-architects",
      city: "Chennai",
      locality: "Mylapore",
      address: "North Mada Street, Mylapore, Chennai - 600004",
      phone: "+91 98410 77665",
      whatsapp: "919841077665",
      email: "vaibhogam@kalyanaplans.com",
      rating: 4.85,
      reviewCount: 210,
      weddingsCount: 520,
      experienceYears: 15,
      priceRange: {
        startingFee: 280000,
        feeLabel: "₹2.8 Lakh - ₹5 Lakh",
        decorStartingFee: "₹2,00,000",
        category: "2_5l_to_4l"
      },
      badge: "Handpicked",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds within 1 hour",
      services: ["Full Planning", "Decor & Styling", "Hospitality & Logistics"],
      guestCapacities: ["300-600", "600-1000", "1000+"],
      specialty: "Authentic Vedic Muhurthams & Grand Chettinad Banquets",
      coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
      ],
      about: "Based in cultural Mylapore, Kalyana Vaibhogam is revered by families across South India for flawless execution of time-honored rituals, authentic nadaswaram ensembles, artisanal kolams, and royal Chettinad hospitality.",
      packages: [
        {
          name: "Heritage Heritage Muhurtham",
          price: "₹3,50,000",
          description: "Comprehensive coordination of Vratham, Janavasam, Muhurtham, and Reception.",
          features: ["Pooja samagri & purohit logistics", "Custom temple mandap fabrication", "Traditional brass lamps"]
        }
      ],
      reviews: [
        {
          author: "Revathi & Sundar",
          weddingDate: "January 2026",
          rating: 5,
          title: "Traditional values handled with modern finesse",
          venue: "Sri Ramachandra Convention Hall, Chennai",
          text: "Our elders were deeply satisfied with how smoothly every ritual was carried out."
        }
      ],
      faqs: [
        {
          q: "Can you provide authentic temple musicians?",
          a: "Yes, we have deep connections with renowned vidwans across Tamil Nadu."
        }
      ]
    },
    {
      id: "vow-chn-06",
      name: "Coastal Petals Destination Weddings",
      slug: "coastal-petals-destination-weddings",
      city: "Chennai",
      locality: "Mahabalipuram",
      address: "Mahabalipuram Main Road, ECR, Chennai - 603104",
      phone: "+91 99620 44332",
      whatsapp: "919962044332",
      email: "weddings@coastalpetals.com",
      rating: 4.9,
      reviewCount: 115,
      weddingsCount: 190,
      experienceYears: 7,
      priceRange: {
        startingFee: 600000,
        feeLabel: "₹6 Lakh - ₹12 Lakh",
        decorStartingFee: "₹4,50,000",
        category: "above_6l"
      },
      badge: "Verified",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds within 1 hour",
      services: ["Destination Weddings", "Full Planning", "Decor & Styling", "Hospitality & Logistics"],
      guestCapacities: ["100-300", "300-600", "600-1000"],
      specialty: "Beachfront Glass Mandaps & Sunset Resort Celebrations",
      coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
      ],
      about: "Coastal Petals is the premier beach destination wedding architect along the Bay of Bengal coastline. We design jaw-dropping oceanfront mandaps, sunset sundowner parties, and candlelit lawn receptions at Mahabalipuram's top luxury resorts.",
      packages: [
        {
          name: "Coastal Luxury Destination",
          price: "₹6,50,000",
          description: "All-inclusive planning for 300+ guests at a 5-star beachfront resort.",
          features: ["Resort buyout negotiations", "Beach ceremony permits", "Ocean-resistant floral architecture"]
        }
      ],
      reviews: [
        {
          author: "Tanya & Rohan",
          weddingDate: "December 2025",
          rating: 5,
          title: "Magic on the Mahabalipuram shores!",
          venue: "Radisson Blu Resort Temple Bay",
          text: "The glass mandap right by the waves looked unreal at sunset. Coastal Petals executed our 4-day party without a single hiccup."
        }
      ],
      faqs: [
        {
          q: "Do you handle beach permissions?",
          a: "Yes, our logistics team acquires CRZ clearances, police NOCs, and sound permits."
        }
      ]
    }
  ];

  const CITIES_DATA = [
    { id: "chennai", name: "Chennai", count: 247 },
    { id: "bangalore", name: "Bangalore", count: 420 },
    { id: "mumbai", name: "Mumbai", count: 580 },
    { id: "delhi", name: "Delhi NCR", count: 650 },
    { id: "hyderabad", name: "Hyderabad", count: 310 },
    { id: "goa", name: "Goa", count: 180 },
    { id: "jaipur", name: "Jaipur", count: 215 },
    { id: "kochi", name: "Kochi", count: 140 }
  ];

  const CHENNAI_LOCALITIES = [
    "ECR (East Coast Road)",
    "T. Nagar",
    "Anna Nagar",
    "Adyar",
    "Mylapore",
    "Nungambakkam",
    "Velachery",
    "OMR (Old Mahabalipuram Road)",
    "Alwarpet",
    "Guindy",
    "Mahabalipuram",
    "Besant Nagar",
    "Kilpauk",
    "Porur"
  ];

  const WEDMEGOOD_FAQS = [
    {
      q: "How much does a wedding planner in Chennai cost?",
      a: "Wedding planners in Chennai typically charge between ₹1.5 Lakhs to ₹3.5 Lakhs for partial planning, and ₹3.5 Lakhs to ₹8+ Lakhs for full 360-degree planning. Most planners also offer customizable packages."
    },
    {
      q: "What is the difference between a Wedding Planner and a Decorator in Chennai?",
      a: "A Decorator specifically executes stage mandaps, flowers, and lighting. A Wedding Planner oversees your complete 360° wedding: budget management, venue scouting, hotel room allotments, catering coordination, ritual timing, and on-ground logistics."
    },
    {
      q: "How early should we book a wedding planner in Chennai?",
      a: "Peak muhurtham dates in Chennai (specifically between November to March and Thai/Aani masam auspicious dates) get booked out 6 to 9 months in advance. finalise early."
    },
    {
      q: "Do Chennai wedding planners handle destination weddings in Mahabalipuram?",
      a: "Yes! Top Chennai wedding planners specialize heavily in destination weddings along East Coast Road (ECR), Mahabalipuram beach resorts, and Pondicherry."
    }
  ];

  const DEFAULT_CHECKLIST = [
    { id: "chk-1", category: "10-12 Months Out", title: "Determine overall wedding budget & family contributions", done: true },
    { id: "chk-2", category: "10-12 Months Out", title: "Draft preliminary guest list count (Brideside & Groomside)", done: true },
    { id: "chk-3", category: "10-12 Months Out", title: "Shortlist and book Wedding Planner on Vowora", done: false },
    { id: "chk-4", category: "10-12 Months Out", title: "Finalize & block Wedding Venue / Mandapam dates", done: false },
    { id: "chk-5", category: "6-9 Months Out", title: "Book Wedding Photographer & Cinematographer", done: false },
    { id: "chk-6", category: "6-9 Months Out", title: "Finalize Decor Theme & Mandap 3D renders with planner", done: false },
    { id: "chk-7", category: "6-9 Months Out", title: "Book Bridal Makeup Artist & schedule trials", done: false },
    { id: "chk-8", category: "3-5 Months Out", title: "Order wedding invitations & design e-invite WhatsApp cards", done: false },
    { id: "chk-9", category: "3-5 Months Out", title: "Finalize catering menu tasting with chef / samayal master", done: false },
    { id: "chk-10", category: "1 Month Out", title: "Confirm guest travel, airport pickups, and hotel room allotments", done: false }
  ];

  // App State
  const state = {
    vendors: [...VENDORS_DATA],
    activeCity: "Chennai",
    searchQuery: "",
    localitySearch: "",
    selectedLocalities: [],
    selectedBudget: "all",
    selectedRating: 0,
    selectedServices: [],
    selectedGuestCapacity: "all",
    handpickedOnly: false,
    verifiedOnly: false,
    sortBy: "popularity",
    viewMode: "grid",
    activeVendorModal: null,
    activeVendorTab: "overview",
    quoteVendor: null,
    reviewVendor: null,
    shortlist: safeGet('vowora_shortlist', []),
    enquiries: safeGet('vowora_enquiries', []),
    checklist: safeGet('vowora_checklist', DEFAULT_CHECKLIST),
    totalBudget: parseInt(safeGet('vowora_budget', 2500000), 10),
    carouselIndices: {}
  };

  state.vendors.forEach(v => { state.carouselIndices[v.id] = 0; });

  function formatINR(val) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  }

  function triggerConfetti() {
    if (typeof window.confetti === 'function') {
      window.confetti({ particleCount: 75, spread: 65, origin: { y: 0.6 } });
    }
  }

  function saveStorage() {
    safeSet('vowora_shortlist', state.shortlist);
    safeSet('vowora_enquiries', state.enquiries);
    safeSet('vowora_checklist', state.checklist);
    safeSet('vowora_budget', state.totalBudget);
    updateCounters();
  }

  function updateCounters() {
    document.querySelectorAll('.shortlist-count-badge').forEach(el => {
      el.textContent = state.shortlist.length;
      el.classList.toggle('hidden', state.shortlist.length === 0);
    });
    document.querySelectorAll('.inquiries-count-badge').forEach(el => {
      el.textContent = state.enquiries.length;
      el.classList.toggle('hidden', state.enquiries.length === 0);
    });
  }

  function getFilteredVendors() {
    return state.vendors.filter(vendor => {
      if (state.searchQuery.trim()) {
        const q = state.searchQuery.toLowerCase();
        const matchName = vendor.name.toLowerCase().includes(q);
        const matchLoc = vendor.locality.toLowerCase().includes(q);
        const matchSrv = vendor.services.some(s => s.toLowerCase().includes(q));
        if (!matchName && !matchLoc && !matchSrv) return false;
      }
      if (state.handpickedOnly && vendor.badge !== 'Handpicked') return false;
      if (state.verifiedOnly && !vendor.isVerified) return false;
      if (state.selectedLocalities.length > 0) {
        const match = state.selectedLocalities.some(l => vendor.locality.toLowerCase().includes(l.toLowerCase()));
        if (!match) return false;
      }
      if (state.selectedBudget !== 'all' && vendor.priceRange.category !== state.selectedBudget) return false;
      if (state.selectedRating > 0 && vendor.rating < state.selectedRating) return false;
      if (state.selectedServices.length > 0) {
        const match = state.selectedServices.every(s => vendor.services.includes(s));
        if (!match) return false;
      }
      if (state.selectedGuestCapacity !== 'all') {
        if (!vendor.guestCapacities || !vendor.guestCapacities.includes(state.selectedGuestCapacity)) return false;
      }
      return true;
    }).sort((a, b) => {
      if (state.sortBy === 'rating_desc') return b.rating - a.rating;
      if (state.sortBy === 'price_asc') return a.priceRange.startingFee - b.priceRange.startingFee;
      if (state.sortBy === 'price_desc') return b.priceRange.startingFee - a.priceRange.startingFee;
      if (state.sortBy === 'reviews_desc') return b.reviewCount - a.reviewCount;
      return (b.rating * b.reviewCount + (b.isFeatured ? 50 : 0)) - (a.rating * a.reviewCount + (a.isFeatured ? 50 : 0));
    });
  }

  function renderVendorGrid() {
    const container = document.getElementById('vendors-grid-container');
    if (!container) return;

    const filtered = getFilteredVendors();
    const countEl = document.getElementById('vendor-results-count');
    if (countEl) countEl.textContent = `${filtered.length} results`;

    renderActiveFilterPills();

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-gray-100 p-8">
          <div class="w-14 h-14 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">✕</div>
          <h3 class="text-base font-bold text-gray-800 mb-1">No Wedding Planners Found</h3>
          <p class="text-gray-500 text-xs mb-4">Try widening your filters to see more results.</p>
          <button id="empty-reset-btn" class="px-5 py-2 bg-vowora text-white rounded-lg text-xs font-bold">Reset Filters</button>
        </div>
      `;
      const btn = document.getElementById('empty-reset-btn');
      if (btn) btn.addEventListener('click', resetAllFilters);
      return;
    }

    const isGrid = state.viewMode === 'grid';
    container.className = isGrid
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
      : "space-y-6";

    container.innerHTML = filtered.map(vendor => {
      const isShortlisted = state.shortlist.includes(vendor.id);
      const curIdx = state.carouselIndices[vendor.id] || 0;
      const curPhoto = vendor.photos[curIdx] || vendor.coverImage;

      let badgeHtml = '';
      if (vendor.badge === 'Handpicked') {
        badgeHtml = `<span class="bg-[#2D2D2D]/90 backdrop-blur-xs text-amber-300 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">👑 Handpicked</span>`;
      } else if (vendor.badge === 'Top Rated 2026') {
        badgeHtml = `<span class="bg-rose-600 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">⭐ Top Rated</span>`;
      } else if (vendor.isVerified) {
        badgeHtml = `<span class="bg-emerald-700 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">✓ Verified</span>`;
      }

      if (isGrid) {
        return `
          <div class="vendor-card bg-white rounded-xl overflow-hidden flex flex-col justify-between" data-vendor-id="${vendor.id}">
            <div class="relative w-full h-52 bg-gray-100 overflow-hidden group">
              <img src="${curPhoto}" alt="${vendor.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer vendor-trigger" data-vendor-id="${vendor.id}" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
              <div class="absolute top-2.5 left-2.5 flex items-center gap-1 z-10">${badgeHtml}</div>
              <button class="shortlist-btn absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-600 hover:text-rose-600 z-10" data-vendor-id="${vendor.id}">
                <svg class="w-4 h-4 ${isShortlisted ? 'fill-rose-600 text-rose-600' : 'text-gray-600'}" fill="${isShortlisted ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              ${vendor.photos.length > 1 ? `
                <button class="carousel-btn prev-photo absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center text-xs z-10" data-vendor-id="${vendor.id}">‹</button>
                <button class="carousel-btn next-photo absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center text-xs z-10" data-vendor-id="${vendor.id}">›</button>
                <div class="absolute bottom-2 right-2.5 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded z-10">${curIdx + 1}/${vendor.photos.length}</div>
              ` : ''}
              <div class="absolute bottom-2 left-3 text-white z-10 pointer-events-none">
                <span class="text-[11px] font-medium text-rose-200">${vendor.locality}</span>
              </div>
            </div>
            <div class="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-start justify-between gap-2 mb-1">
                  <h3 class="font-bold text-gray-900 text-sm hover:text-rose-600 cursor-pointer vendor-trigger" data-vendor-id="${vendor.id}">${vendor.name}</h3>
                  <div class="flex items-center gap-1 bg-[#008459] text-white px-1.5 py-0.5 rounded text-xs font-bold shrink-0">
                    <span>★</span><span>${vendor.rating}</span>
                  </div>
                </div>
                <div class="text-[11px] text-gray-500 mb-2 flex items-center gap-1.5">
                  <span>📍 ${vendor.locality}</span>
                  <span>•</span>
                  <span class="text-gray-600 font-medium">${vendor.reviewCount} reviews</span>
                </div>
                <div class="bg-[#FFF8F9] rounded-lg p-2.5 mb-2.5 border border-[#FFE7EE]">
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-gray-600 font-medium">Planning Fee:</span>
                    <span class="text-rose-700 font-bold text-xs">${vendor.priceRange.feeLabel}</span>
                  </div>
                  ${vendor.priceRange.decorStartingFee ? `
                    <div class="flex items-center justify-between text-[10px] text-gray-500 mt-1 pt-1 border-t border-[#FFE7EE]">
                      <span>Decor from:</span>
                      <span class="font-semibold text-gray-700">${vendor.priceRange.decorStartingFee}</span>
                    </div>
                  ` : ''}
                </div>
                <div class="flex flex-wrap gap-1 mb-2.5">
                  ${vendor.services.slice(0, 3).map(s => `<span class="bg-gray-100 text-gray-600 text-[10px] font-medium px-1.5 py-0.5 rounded">${s}</span>`).join('')}
                </div>
              </div>
              <div class="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
                <button class="view-contact-btn text-xs font-bold py-2 px-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-1" data-vendor-id="${vendor.id}">
                  <span>📞</span><span>Contact</span>
                </button>
                <button class="quote-btn text-xs font-bold py-2 px-2 bg-vowora-gradient text-white rounded-lg hover:opacity-95 shadow-xs flex items-center justify-center" data-vendor-id="${vendor.id}">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        `;
      } else {
        return `
          <div class="vendor-card bg-white rounded-xl overflow-hidden flex flex-col md:flex-row" data-vendor-id="${vendor.id}">
            <div class="relative w-full md:w-72 h-52 md:h-auto bg-gray-100 shrink-0">
              <img src="${curPhoto}" alt="${vendor.name}" class="w-full h-full object-cover cursor-pointer vendor-trigger" data-vendor-id="${vendor.id}" />
              <div class="absolute top-2.5 left-2.5 z-10">${badgeHtml}</div>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <h3 class="text-base font-bold text-gray-900 hover:text-rose-600 cursor-pointer vendor-trigger" data-vendor-id="${vendor.id}">${vendor.name}</h3>
                    <p class="text-xs text-gray-500 mt-0.5">📍 ${vendor.locality}, ${vendor.city} • <span class="text-rose-600 font-semibold">${vendor.weddingsCount}+ Weddings Planned</span></p>
                  </div>
                  <div class="flex items-center gap-1 bg-[#008459] text-white px-2 py-0.5 rounded text-xs font-bold">
                    <span>★</span><span>${vendor.rating}</span><span class="text-[10px] text-green-100 font-normal">(${vendor.reviewCount})</span>
                  </div>
                </div>
                <p class="text-xs text-gray-600 mt-2 line-clamp-2">${vendor.about}</p>
                <div class="flex flex-wrap gap-1.5 mt-2.5">
                  ${vendor.services.map(s => `<span class="bg-gray-100 text-gray-600 text-[10px] font-medium px-2 py-0.5 rounded">${s}</span>`).join('')}
                </div>
              </div>
              <div class="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] text-gray-500 block">Planning Fee</span>
                  <span class="text-rose-700 font-bold text-sm">${vendor.priceRange.feeLabel}</span>
                </div>
                <div class="flex items-center gap-2">
                  <button class="view-contact-btn text-xs font-bold py-1.5 px-3 border border-gray-300 rounded-lg text-gray-700" data-vendor-id="${vendor.id}">📞 Contact</button>
                  <button class="quote-btn text-xs font-bold py-1.5 px-4 bg-vowora-gradient text-white rounded-lg" data-vendor-id="${vendor.id}">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        `;
      }
    }).join('');

    attachCardEvents();
  }

  function renderActiveFilterPills() {
    const container = document.getElementById('active-filters-pills');
    if (!container) return;

    const pills = [];
    state.selectedLocalities.forEach(loc => {
      pills.push({ label: loc, onRemove: () => { state.selectedLocalities = state.selectedLocalities.filter(l => l !== loc); syncFilterUI(); renderVendorGrid(); } });
    });
    if (state.selectedBudget !== 'all') {
      const labels = { 'under_2_5l': '< ₹2.5L', '2_5l_to_4l': '₹2.5L - ₹4L', '4l_to_6l': '₹4L - ₹6L', 'above_6l': '> ₹6L' };
      pills.push({ label: labels[state.selectedBudget], onRemove: () => { state.selectedBudget = 'all'; syncFilterUI(); renderVendorGrid(); } });
    }
    if (state.selectedRating > 0) {
      pills.push({ label: `${state.selectedRating}+ ★`, onRemove: () => { state.selectedRating = 0; syncFilterUI(); renderVendorGrid(); } });
    }
    state.selectedServices.forEach(s => {
      pills.push({ label: s, onRemove: () => { state.selectedServices = state.selectedServices.filter(x => x !== s); syncFilterUI(); renderVendorGrid(); } });
    });
    if (state.handpickedOnly) {
      pills.push({ label: 'Handpicked', onRemove: () => { state.handpickedOnly = false; syncFilterUI(); renderVendorGrid(); } });
    }
    if (state.verifiedOnly) {
      pills.push({ label: 'Verified', onRemove: () => { state.verifiedOnly = false; syncFilterUI(); renderVendorGrid(); } });
    }

    if (pills.length === 0) {
      container.innerHTML = '';
      container.classList.add('hidden');
      return;
    }

    container.classList.remove('hidden');
    container.innerHTML = `
      <div class="flex flex-wrap items-center gap-1.5 pb-3">
        <span class="text-xs text-gray-500 font-semibold mr-1">Active:</span>
        ${pills.map((p, idx) => `
          <span class="bg-rose-50 text-rose-700 text-xs font-semibold px-2 py-0.5 rounded-full border border-rose-200 flex items-center gap-1">
            <span>${p.label}</span>
            <button class="remove-pill font-bold" data-idx="${idx}">✕</button>
          </span>
        `).join('')}
        <button id="clear-all-pills" class="text-xs font-bold text-rose-600 hover:underline ml-2">Clear All</button>
      </div>
    `;

    container.querySelectorAll('.remove-pill').forEach(b => {
      b.addEventListener('click', () => {
        const i = parseInt(b.dataset.idx, 10);
        if (pills[i]) pills[i].onRemove();
      });
    });

    const clearBtn = document.getElementById('clear-all-pills');
    if (clearBtn) clearBtn.addEventListener('click', resetAllFilters);
  }

  function syncFilterUI() {
    document.querySelectorAll('.locality-checkbox').forEach(cb => {
      cb.checked = state.selectedLocalities.includes(cb.value);
    });
    document.querySelectorAll('.budget-radio').forEach(r => {
      r.checked = r.value === state.selectedBudget;
    });
    document.querySelectorAll('.rating-radio').forEach(r => {
      r.checked = parseFloat(r.value) === state.selectedRating;
    });
    document.querySelectorAll('.service-checkbox').forEach(cb => {
      cb.checked = state.selectedServices.includes(cb.value);
    });
    const handpickedCb = document.getElementById('filter-handpicked-only');
    if (handpickedCb) handpickedCb.checked = state.handpickedOnly;
    const verifiedCb = document.getElementById('filter-verified-only');
    if (verifiedCb) verifiedCb.checked = state.verifiedOnly;
  }

  function attachCardEvents() {
    document.querySelectorAll('.vendor-trigger').forEach(el => {
      el.addEventListener('click', () => openVendorModal(el.dataset.vendorId));
    });

    document.querySelectorAll('.shortlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleShortlist(btn.dataset.vendorId);
      });
    });

    document.querySelectorAll('.view-contact-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const v = state.vendors.find(item => item.id === btn.dataset.vendorId);
        if (v) {
          alert(`Direct Vendor Contact:\n\n${v.name}\nPhone: ${v.phone}\nEmail: ${v.email}\nAddress: ${v.address}\n\nClick OK to open WhatsApp.`);
          window.open(`https://wa.me/${v.whatsapp}?text=Hi%20${encodeURIComponent(v.name)},%20I%20found%20your%20profile%20on%20Vowora%20and%20would%20love%20to%20discuss%20planning%20my%20wedding!`, '_blank');
        }
      });
    });

    document.querySelectorAll('.quote-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const v = state.vendors.find(item => item.id === btn.dataset.vendorId);
        if (v) openQuoteModal(v);
      });
    });

    document.querySelectorAll('.prev-photo').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.vendorId;
        const v = state.vendors.find(item => item.id === id);
        if (!v) return;
        const cur = state.carouselIndices[id] || 0;
        state.carouselIndices[id] = (cur - 1 + v.photos.length) % v.photos.length;
        renderVendorGrid();
      });
    });

    document.querySelectorAll('.next-photo').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.vendorId;
        const v = state.vendors.find(item => item.id === id);
        if (!v) return;
        const cur = state.carouselIndices[id] || 0;
        state.carouselIndices[id] = (cur + 1) % v.photos.length;
        renderVendorGrid();
      });
    });
  }

  function toggleShortlist(vendorId) {
    const idx = state.shortlist.indexOf(vendorId);
    if (idx === -1) {
      state.shortlist.push(vendorId);
      triggerConfetti();
    } else {
      state.shortlist.splice(idx, 1);
    }
    saveStorage();
    renderVendorGrid();
    renderShortlistDrawer();
  }

  function openVendorModal(vendorId) {
    const v = state.vendors.find(item => item.id === vendorId);
    if (!v) return;
    state.activeVendorModal = v;
    state.activeVendorTab = "overview";
    const modal = document.getElementById('vendor-detail-modal');
    if (!modal) return;
    renderVendorModalContent();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeVendorModal() {
    const modal = document.getElementById('vendor-detail-modal');
    if (modal) modal.classList.add('hidden');
    state.activeVendorModal = null;
    document.body.style.overflow = '';
  }

  function renderVendorModalContent() {
    const v = state.activeVendorModal;
    if (!v) return;
    const body = document.getElementById('vendor-modal-body');
    if (!body) return;

    body.innerHTML = `
      <div class="relative bg-gray-900 text-white">
        <div class="h-64 w-full grid grid-cols-1 md:grid-cols-3 gap-1 overflow-hidden">
          <div class="md:col-span-2 h-full"><img src="${v.photos[0] || v.coverImage}" class="w-full h-full object-cover" /></div>
          <div class="hidden md:grid grid-rows-2 gap-1 h-full">
            <img src="${v.photos[1] || v.photos[0]}" class="w-full h-full object-cover" />
            <img src="${v.photos[2] || v.photos[0]}" class="w-full h-full object-cover" />
          </div>
        </div>
        <button id="close-modal-x" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center font-bold">✕</button>
        <div class="absolute bottom-3 left-4 right-4 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent p-3 rounded-lg">
          <div>
            <span class="text-xs text-rose-300 font-semibold block">${v.locality}</span>
            <h2 class="text-xl font-bold font-serif text-white">${v.name}</h2>
          </div>
          <div class="bg-[#008459] text-white text-xs font-bold px-2 py-1 rounded">★ ${v.rating} (${v.reviewCount})</div>
        </div>
      </div>
      <div class="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 space-y-4">
          <div>
            <h4 class="font-bold text-sm text-gray-900 mb-1">About the Planner</h4>
            <p class="text-xs text-gray-600 leading-relaxed">${v.about}</p>
          </div>
          <div>
            <h4 class="font-bold text-sm text-gray-900 mb-2">Packages</h4>
            <div class="space-y-2">
              ${v.packages.map(p => `
                <div class="border border-gray-200 rounded-lg p-3 bg-white">
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span>${p.name}</span>
                    <span class="text-rose-600">${p.price}</span>
                  </div>
                  <p class="text-[11px] text-gray-500 mb-2">${p.description}</p>
                  <div class="grid grid-cols-2 gap-1 text-[11px] text-gray-600">
                    ${p.features.map(f => `<div>✓ ${f}</div>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="lg:col-span-1">
          <div class="bg-rose-50 p-4 rounded-xl border border-rose-200">
            <h4 class="text-xs font-bold text-gray-900 mb-2">Check Availability</h4>
            <form id="modal-quote-form" class="space-y-2">
              <input type="text" id="mq-name" required placeholder="Your Name" class="w-full text-xs p-2 border border-gray-300 rounded bg-white" />
              <input type="tel" id="mq-phone" required placeholder="Phone / WhatsApp" class="w-full text-xs p-2 border border-gray-300 rounded bg-white" />
              <input type="date" id="mq-date" required class="w-full text-xs p-2 border border-gray-300 rounded bg-white" />
              <button type="submit" class="w-full py-2 bg-vowora text-white text-xs font-bold rounded">Get Quote</button>
            </form>
          </div>
        </div>
      </div>
    `;

    const closeBtn = document.getElementById('close-modal-x');
    if (closeBtn) closeBtn.addEventListener('click', closeVendorModal);

    const mForm = document.getElementById('modal-quote-form');
    if (mForm) {
      mForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const enq = {
          id: "enq-" + Date.now(),
          vendorId: v.id,
          vendorName: v.name,
          name: document.getElementById('mq-name').value,
          phone: document.getElementById('mq-phone').value,
          date: document.getElementById('mq-date').value,
          guests: "300-600",
          status: "Quote Requested",
          timestamp: new Date().toLocaleDateString('en-IN')
        };
        state.enquiries.unshift(enq);
        saveStorage();
        triggerConfetti();
        alert(`Message sent to ${v.name}!`);
        closeVendorModal();
        renderInquiriesDrawer();
      });
    }
  }

  function openQuoteModal(vendor) {
    state.quoteVendor = vendor;
    const modal = document.getElementById('lead-quote-modal');
    if (!modal) return;
    const title = document.getElementById('quote-modal-vendor-name');
    if (title) title.textContent = vendor.name;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeQuoteModal() {
    const modal = document.getElementById('lead-quote-modal');
    if (modal) modal.classList.add('hidden');
    state.quoteVendor = null;
    document.body.style.overflow = '';
  }

  function renderSEOFAQs() {
    const container = document.getElementById('seo-faqs-container');
    if (!container) return;
    container.innerHTML = WEDMEGOOD_FAQS.map(faq => `
      <div class="border border-gray-200 rounded-xl overflow-hidden bg-white">
        <button class="w-full p-3.5 text-left flex items-center justify-between text-xs font-bold text-gray-900 faq-btn">
          <span>${faq.q}</span>
          <span class="faq-icon text-gray-400">▼</span>
        </button>
        <div class="px-3.5 pb-3 text-xs text-gray-600 leading-relaxed hidden faq-ans">
          ${faq.a}
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.faq-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const ans = btn.nextElementSibling;
        const icon = btn.querySelector('.faq-icon');
        const isHidden = ans.classList.contains('hidden');
        ans.classList.toggle('hidden', !isHidden);
        icon.textContent = isHidden ? '▲' : '▼';
      });
    });
  }

  function renderLocalityFilterList() {
    const container = document.getElementById('locality-filter-list');
    if (!container) return;

    const filtered = CHENNAI_LOCALITIES.filter(l => l.toLowerCase().includes(state.localitySearch.toLowerCase()));
    container.innerHTML = filtered.map(loc => `
      <label class="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 cursor-pointer py-0.5">
        <input type="checkbox" value="${loc}" class="locality-checkbox rounded text-rose-600" ${state.selectedLocalities.includes(loc) ? 'checked' : ''} />
        <span>${loc}</span>
      </label>
    `).join('');

    container.querySelectorAll('.locality-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        if (cb.checked) state.selectedLocalities.push(cb.value);
        else state.selectedLocalities = state.selectedLocalities.filter(l => l !== cb.value);
        renderVendorGrid();
      });
    });
  }

  function resetAllFilters() {
    state.selectedLocalities = [];
    state.selectedBudget = "all";
    state.selectedRating = 0;
    state.selectedServices = [];
    state.selectedGuestCapacity = "all";
    state.handpickedOnly = false;
    state.verifiedOnly = false;
    state.searchQuery = "";
    state.localitySearch = "";

    const si = document.getElementById('search-input');
    if (si) si.value = "";
    const ls = document.getElementById('locality-search-input');
    if (ls) ls.value = "";

    syncFilterUI();
    renderLocalityFilterList();
    renderVendorGrid();
  }

  function initBudgetCalculator() {
    const input = document.getElementById('total-budget-input');
    const slider = document.getElementById('total-budget-slider');
    if (!input || !slider) return;

    function upd() {
      const tot = parseInt(slider.value, 10);
      state.totalBudget = tot;
      input.value = tot;
      renderBudgetBreakdown(tot);
      saveStorage();
    }

    slider.addEventListener('input', () => { input.value = slider.value; upd(); });
    input.addEventListener('change', () => { slider.value = input.value; upd(); });
    renderBudgetBreakdown(state.totalBudget);
  }

  function renderBudgetBreakdown(total) {
    const allocations = [
      { name: "Venue & Catering", percent: 40, color: "bg-rose-500", icon: "🏰" },
      { name: "Decor & Production", percent: 20, color: "bg-amber-500", icon: "🌸" },
      { name: "Photography & Video", percent: 12, color: "bg-indigo-500", icon: "📷" },
      { name: "Wedding Planner", percent: 8, color: "bg-emerald-500", icon: "📋" },
      { name: "Attire & Jewellery", percent: 12, color: "bg-purple-500", icon: "👗" },
      { name: "Music & Gifts", percent: 8, color: "bg-pink-500", icon: "🎁" }
    ];

    const list = document.getElementById('budget-categories-list');
    const bar = document.getElementById('budget-progress-bar');
    if (!list || !bar) return;

    bar.innerHTML = allocations.map(a => `<div style="width: ${a.percent}%" class="${a.color} h-2.5"></div>`).join('');
    list.innerHTML = allocations.map(a => `
      <div class="flex justify-between items-center p-2 rounded bg-gray-50 border border-gray-100 text-xs">
        <div class="flex items-center gap-2"><span>${a.icon}</span><span class="font-bold text-gray-800">${a.name}</span></div>
        <span class="font-bold text-gray-900">${formatINR((total * a.percent) / 100)}</span>
      </div>
    `).join('');
  }

  function initChecklist() {
    renderChecklist();
    const form = document.getElementById('add-task-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inp = document.getElementById('new-task-title');
        const cat = document.getElementById('new-task-category').value;
        if (!inp.value.trim()) return;
        state.checklist.push({ id: "chk-" + Date.now(), category: cat, title: inp.value.trim(), done: false });
        inp.value = '';
        saveStorage();
        renderChecklist();
      });
    }
  }

  function renderChecklist() {
    const container = document.getElementById('checklist-items-container');
    const pText = document.getElementById('checklist-progress-text');
    const pBar = document.getElementById('checklist-progress-bar');
    if (!container) return;

    const tot = state.checklist.length;
    const done = state.checklist.filter(i => i.done).length;
    const pct = tot === 0 ? 0 : Math.round((done / tot) * 100);

    if (pText) pText.textContent = `${done}/${tot} Done (${pct}%)`;
    if (pBar) pBar.style.width = `${pct}%`;

    const groups = {};
    state.checklist.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });

    container.innerHTML = Object.keys(groups).map(cName => `
      <div class="mb-4">
        <h5 class="text-[10px] font-bold uppercase tracking-wider text-rose-700 mb-1.5">${cName}</h5>
        <div class="space-y-1">
          ${groups[cName].map(item => `
            <div class="flex items-center justify-between p-2 rounded bg-white border border-gray-200 text-xs">
              <label class="flex items-center gap-2 cursor-pointer flex-1">
                <input type="checkbox" class="task-checkbox text-rose-600 rounded" data-id="${item.id}" ${item.done ? 'checked' : ''} />
                <span class="${item.done ? 'line-through text-gray-400' : 'text-gray-700 font-medium'}">${item.title}</span>
              </label>
              <button class="delete-task-btn text-gray-300 hover:text-red-500 text-xs px-1" data-id="${item.id}">✕</button>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.task-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        const t = state.checklist.find(x => x.id === cb.dataset.id);
        if (t) {
          t.done = cb.checked;
          if (t.done) triggerConfetti();
          saveStorage();
          renderChecklist();
        }
      });
    });

    container.querySelectorAll('.delete-task-btn').forEach(b => {
      b.addEventListener('click', () => {
        state.checklist = state.checklist.filter(x => x.id !== b.dataset.id);
        saveStorage();
        renderChecklist();
      });
    });
  }

  function renderShortlistDrawer() {
    const c = document.getElementById('shortlist-drawer-content');
    if (!c) return;
    const list = state.vendors.filter(v => state.shortlist.includes(v.id));
    if (list.length === 0) {
      c.innerHTML = `<div class="py-12 text-center text-gray-400 text-xs"><span class="text-2xl block mb-1">❤️</span>No shortlisted planners yet.</div>`;
      return;
    }
    c.innerHTML = list.map(v => `
      <div class="flex items-center gap-2.5 p-2 rounded-lg border border-gray-100 bg-white text-xs">
        <img src="${v.coverImage}" class="w-12 h-12 rounded object-cover" />
        <div class="flex-1 min-w-0">
          <h5 class="font-bold text-gray-900 truncate">${v.name}</h5>
          <span class="text-rose-600 font-semibold text-[11px]">${v.priceRange.feeLabel}</span>
        </div>
        <button class="remove-shortlist text-[10px] text-gray-400 hover:text-red-600" data-id="${v.id}">✕</button>
      </div>
    `).join('');
    c.querySelectorAll('.remove-shortlist').forEach(b => {
      b.addEventListener('click', () => toggleShortlist(b.dataset.id));
    });
  }

  function renderInquiriesDrawer() {
    const c = document.getElementById('inquiries-drawer-content');
    if (!c) return;
    if (state.enquiries.length === 0) {
      c.innerHTML = `<div class="py-12 text-center text-gray-400 text-xs"><span class="text-2xl block mb-1">📨</span>No quote requests sent yet.</div>`;
      return;
    }
    c.innerHTML = state.enquiries.map(enq => `
      <div class="p-3 rounded-lg border border-gray-100 bg-white text-xs space-y-1">
        <div class="flex justify-between font-bold">
          <span>${enq.vendorName}</span>
          <span class="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded">${enq.status}</span>
        </div>
        <div class="text-[11px] text-gray-500">Date: ${enq.date || 'TBD'} • Sent on ${enq.timestamp}</div>
      </div>
    `).join('');
  }

  function initCitySelector() {
    const c = document.getElementById('city-selector-grid');
    if (!c) return;
    c.innerHTML = CITIES_DATA.map(city => `
      <button class="city-btn p-2.5 rounded-lg border text-left text-xs ${city.name === state.activeCity ? 'border-rose-600 bg-rose-50 font-bold text-rose-700' : 'border-gray-200'}" data-city="${city.name}">
        <span class="block">${city.name}</span>
        <span class="text-[10px] text-gray-400 block">${city.count} vendors</span>
      </button>
    `).join('');
    c.querySelectorAll('.city-btn').forEach(b => {
      b.addEventListener('click', () => {
        state.activeCity = b.dataset.city;
        const lbl = document.getElementById('current-city-label');
        if (lbl) lbl.textContent = state.activeCity;
        document.getElementById('city-selector-modal').classList.add('hidden');
        renderVendorGrid();
      });
    });
  }

  // Setup Everything
  function init() {
    renderVendorGrid();
    updateCounters();
    renderLocalityFilterList();
    renderSEOFAQs();
    initBudgetCalculator();
    initChecklist();
    initCitySelector();
    renderShortlistDrawer();
    renderInquiriesDrawer();

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderVendorGrid();
      });
    }

    const sortSelect = document.getElementById('sort-dropdown');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderVendorGrid();
      });
    }

    const gridBtn = document.getElementById('view-grid-btn');
    const listBtn = document.getElementById('view-list-btn');
    if (gridBtn && listBtn) {
      gridBtn.addEventListener('click', () => { state.viewMode = 'grid'; renderVendorGrid(); });
      listBtn.addEventListener('click', () => { state.viewMode = 'list'; renderVendorGrid(); });
    }

    const locSearch = document.getElementById('locality-search-input');
    if (locSearch) {
      locSearch.addEventListener('input', (e) => {
        state.localitySearch = e.target.value;
        renderLocalityFilterList();
      });
    }

    const handpickedCb = document.getElementById('filter-handpicked-only');
    if (handpickedCb) {
      handpickedCb.addEventListener('change', (e) => {
        state.handpickedOnly = e.target.checked;
        renderVendorGrid();
      });
    }

    const verifiedCb = document.getElementById('filter-verified-only');
    if (verifiedCb) {
      verifiedCb.addEventListener('change', (e) => {
        state.verifiedOnly = e.target.checked;
        renderVendorGrid();
      });
    }

    const guestSelect = document.getElementById('filter-guest-capacity');
    if (guestSelect) {
      guestSelect.addEventListener('change', (e) => {
        state.selectedGuestCapacity = e.target.value;
        renderVendorGrid();
      });
    }

    document.querySelectorAll('.budget-radio').forEach(r => {
      r.addEventListener('change', (e) => {
        state.selectedBudget = e.target.value;
        renderVendorGrid();
      });
    });

    document.querySelectorAll('.rating-radio').forEach(r => {
      r.addEventListener('change', (e) => {
        state.selectedRating = parseFloat(e.target.value);
        renderVendorGrid();
      });
    });

    document.querySelectorAll('.service-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        if (cb.checked) state.selectedServices.push(cb.value);
        else state.selectedServices = state.selectedServices.filter(s => s !== cb.value);
        renderVendorGrid();
      });
    });

    const clearBtn = document.getElementById('clear-filters-btn');
    if (clearBtn) clearBtn.addEventListener('click', resetAllFilters);

    // Nav tabs
    document.querySelectorAll('.main-nav-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.section;
        document.querySelectorAll('.main-nav-tab').forEach(t => t.classList.remove('active-tab', 'text-rose-600', 'border-b-2', 'border-rose-600'));
        tab.classList.add('active-tab', 'text-rose-600', 'border-b-2', 'border-rose-600');
        document.getElementById('section-directory').classList.toggle('hidden', target !== 'directory');
        document.getElementById('section-tools').classList.toggle('hidden', target !== 'tools');
        document.getElementById('section-real-weddings').classList.toggle('hidden', target !== 'real-weddings');
      });
    });

    // Shortlist Drawer
    const sBtn = document.getElementById('open-shortlist-btn');
    const sClose = document.getElementById('close-shortlist-btn');
    const sDrawer = document.getElementById('shortlist-drawer');
    if (sBtn && sDrawer) sBtn.addEventListener('click', () => { renderShortlistDrawer(); sDrawer.classList.remove('hidden'); });
    if (sClose && sDrawer) sClose.addEventListener('click', () => sDrawer.classList.add('hidden'));

    // Inquiries Drawer
    const iBtn = document.getElementById('open-inquiries-btn');
    const iClose = document.getElementById('close-inquiries-btn');
    const iDrawer = document.getElementById('inquiries-drawer');
    if (iBtn && iDrawer) iBtn.addEventListener('click', () => { renderInquiriesDrawer(); iDrawer.classList.remove('hidden'); });
    if (iClose && iDrawer) iClose.addEventListener('click', () => iDrawer.classList.add('hidden'));

    // City Modal
    const cBtn = document.getElementById('city-selector-btn');
    const cModal = document.getElementById('city-selector-modal');
    const cClose = document.getElementById('close-city-modal-btn');
    if (cBtn && cModal) cBtn.addEventListener('click', () => cModal.classList.remove('hidden'));
    if (cClose && cModal) cClose.addEventListener('click', () => cModal.classList.add('hidden'));

    // Quote Modal
    const qClose = document.getElementById('close-quote-modal-btn');
    if (qClose) qClose.addEventListener('click', closeQuoteModal);
    const qForm = document.getElementById('dedicated-quote-form');
    if (qForm) {
      qForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!state.quoteVendor) return;
        const enq = {
          id: "enq-" + Date.now(),
          vendorId: state.quoteVendor.id,
          vendorName: state.quoteVendor.name,
          name: document.getElementById('quote-form-name').value,
          phone: document.getElementById('quote-form-phone').value,
          date: document.getElementById('quote-form-date').value,
          guests: document.getElementById('quote-form-guests').value,
          status: "Quote Requested",
          timestamp: new Date().toLocaleDateString('en-IN')
        };
        state.enquiries.unshift(enq);
        saveStorage();
        triggerConfetti();
        alert(`🎉 Message sent to ${state.quoteVendor.name}!`);
        closeQuoteModal();
        renderInquiriesDrawer();
      });
    }

    // List business modal
    const lbBtn = document.getElementById('list-business-btn');
    const lbTop = document.getElementById('list-business-btn-top');
    const lbModal = document.getElementById('vendor-registration-modal');
    const lbClose = document.getElementById('close-reg-modal-btn');
    if (lbBtn && lbModal) lbBtn.addEventListener('click', () => lbModal.classList.remove('hidden'));
    if (lbTop && lbModal) lbTop.addEventListener('click', () => lbModal.classList.remove('hidden'));
    if (lbClose && lbModal) lbClose.addEventListener('click', () => lbModal.classList.add('hidden'));

    const vrForm = document.getElementById('vendor-registration-form');
    if (vrForm) {
      vrForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fVal = parseInt(document.getElementById('reg-fee').value || '250000', 10);
        const newV = {
          id: "vow-custom-" + Date.now(),
          name: document.getElementById('reg-business-name').value.trim(),
          city: document.getElementById('reg-city').value,
          locality: document.getElementById('reg-locality').value,
          address: document.getElementById('reg-address').value,
          phone: document.getElementById('reg-phone').value,
          whatsapp: document.getElementById('reg-phone').value.replace(/\D/g, ''),
          email: document.getElementById('reg-email').value,
          rating: 5.0,
          reviewCount: 1,
          weddingsCount: 15,
          experienceYears: 3,
          priceRange: {
            startingFee: fVal,
            feeLabel: `₹${(fVal/100000).toFixed(1)} Lakh - ₹4.5 Lakh`,
            decorStartingFee: "₹1,50,000",
            category: "2_5l_to_4l"
          },
          badge: "Verified",
          isVerified: true,
          isFeatured: true,
          services: ["Full Planning", "Decor & Styling"],
          guestCapacities: ["100-300", "300-600"],
          specialty: document.getElementById('reg-specialty').value || "Bespoke Celebrations",
          coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
          photos: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"],
          about: document.getElementById('reg-about').value,
          packages: [{ name: "Standard Package", price: `₹${fVal.toLocaleString('en-IN')}`, description: "Full event planning", features: ["On-ground execution", "Vendor coordination"] }],
          reviews: [],
          faqs: []
        };
        state.vendors.unshift(newV);
        triggerConfetti();
        alert(`Congratulations! ${newV.name} is now listed in the Vowora directory.`);
        lbModal.classList.add('hidden');
        vrForm.reset();
        renderVendorGrid();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
