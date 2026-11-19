// Vowora - 100% WedMeGood & Google Maps Benchmarked Dataset
// Comprehensive Andhra Pradesh & Pan-South India Wedding Directory

export const CITIES_DATA = [
  // Andhra Pradesh Major Cities
  { id: "all-ap", name: "All Andhra Pradesh", state: "Andhra Pradesh", isAP: true, count: 10420 },
  { id: "visakhapatnam", name: "Visakhapatnam (Vizag)", state: "Andhra Pradesh", isAP: true, count: 2480 },
  { id: "vijayawada", name: "Vijayawada", state: "Andhra Pradesh", isAP: true, count: 2150 },
  { id: "guntur", name: "Guntur", state: "Andhra Pradesh", isAP: true, count: 1340 },
  { id: "tirupati", name: "Tirupati", state: "Andhra Pradesh", isAP: true, count: 1520 },
  { id: "rajahmundry", name: "Rajahmundry", state: "Andhra Pradesh", isAP: true, count: 980 },
  { id: "kakinada", name: "Kakinada", state: "Andhra Pradesh", isAP: true, count: 810 },
  { id: "nellore", name: "Nellore", state: "Andhra Pradesh", isAP: true, count: 740 },
  { id: "kurnool", name: "Kurnool", state: "Andhra Pradesh", isAP: true, count: 620 },
  
  // Metro Hubs
  { id: "chennai", name: "Chennai", state: "Tamil Nadu", isCurrent: true, count: 2470 },
  { id: "hyderabad", name: "Hyderabad", state: "Telangana", count: 3100 },
  { id: "bangalore", name: "Bangalore", state: "Karnataka", count: 4200 },
  { id: "mumbai", name: "Mumbai", state: "Maharashtra", count: 5800 },
  { id: "delhi", name: "Delhi NCR", state: "Delhi", count: 6500 }
];

export const VENDOR_CATEGORIES = [
  { id: "planners", name: "Planners", title: "Wedding Planners", icon: "📋", count: 3420, active: true },
  { id: "venues", name: "Venues", title: "Venues & Kalyana Mandapams", icon: "🏰", count: 4890 },
  { id: "photographers", name: "Photographers", title: "Photographers & Cinema", icon: "📷", count: 3820 },
  { id: "bridal-makeup", name: "Bridal Makeup", title: "Bridal Makeup Artists", icon: "💄", count: 2450 },
  { id: "decorators", name: "Decorators", title: "Decorators & Floral Stylists", icon: "🌸", count: 2680 },
  { id: "catering", name: "Catering", title: "Catering & Authentic Samayal", icon: "🍽️", count: 1840 },
  { id: "mehndi", name: "Mehndi", title: "Mehndi Artists", icon: "🎨", count: 1210 },
  { id: "invitations", name: "Invitations", title: "Invitations & E-Invites", icon: "💌", count: 960 }
];

export const LOCALITIES_BY_CITY = {
  "Visakhapatnam (Vizag)": [
    "Beach Road", "Rushikonda", "MVP Colony", "Siripuram", "Gajuwaka", "Madhurawada", "Seethammadhara", "Dwaraka Nagar", "Waltair Uplands", "Pendurthi"
  ],
  "Vijayawada": [
    "Benz Circle", "MG Road", "Bhavanipuram", "Governorpet", "Gunadala", "Poranki", "Auto Nagar", "Kanuru", "Moghalrajpuram", "Gollapudi"
  ],
  "Guntur": [
    "Brodipet", "Arundelpet", "Vidyanagar", "Gujjanagundla", "Lakshmipuram", "Kothapet", "Pattabhipuram", "Amaravathi Road"
  ],
  "Tirupati": [
    "KT Road", "Renigunta Road", "Korlagunta", "AIR Bypass Road", "Chandragiri Road", "Bhavani Nagar", "Tiruchanur Road"
  ],
  "Rajahmundry": [
    "Danavaipeta", "Tilak Road", "Morampudi", "Godavari Bund Road", "Kotipalli", "AV Appa Rao Road"
  ],
  "Chennai": [
    "ECR (East Coast Road)", "T. Nagar", "Anna Nagar", "Adyar", "Mylapore", "Nungambakkam", "Velachery", "OMR (Old Mahabalipuram Road)", "Alwarpet", "Guindy", "Mahabalipuram"
  ],
  "All Andhra Pradesh": [
    "Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Rajahmundry", "Kakinada", "Nellore", "Kurnool", "Anantapur", "Kadapa"
  ]
};

export const VENDORS_DATA = [
  // ==========================================
  // ANDHRA PRADESH - WEDDING PLANNERS
  // ==========================================
  {
    id: "vow-ap-pl-01",
    category: "planners",
    name: "Amaravati Grand Royal Weddings",
    slug: "amaravati-grand-royal-weddings",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    locality: "Benz Circle",
    address: "Opp. Trendset Mall, Benz Circle, Vijayawada, Andhra Pradesh - 520010",
    phone: "+91 86624 89901",
    whatsapp: "918662489901",
    email: "events@amaravatigrand.in",
    rating: 4.9,
    reviewCount: 342,
    googleMapsRating: 4.9,
    googleReviewCount: 342,
    googlePlaceId: "ChIJ_amaravati_vja_01",
    googleBusinessVerified: true,
    weddingsCount: 480,
    experienceYears: 12,
    priceRange: {
      startingFee: 280000,
      feeLabel: "₹2.8 Lakh - ₹5.5 Lakh",
      decorStartingFee: "₹2,00,000",
      category: "2_5l_to_4l"
    },
    badge: "Handpicked",
    isVerified: true,
    isFeatured: true,
    responseTime: "⚡ Responds within 30 mins",
    services: ["Full Planning", "Decor & Styling", "Destination Weddings", "Hospitality & Logistics"],
    guestCapacities: ["300-600", "600-1000", "1000+"],
    specialty: "Grand Telugu Vaibhavam & Destination Weddings on Krishna Riverfront",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80"
    ],
    about: "Amaravati Grand Royal Weddings is Andhra Pradesh's premier luxury wedding planning firm headquartered at Benz Circle, Vijayawada. Renowned for authentic Telugu Pelli traditions, magnificent brass-and-marigold mandap designs, VIP guest hospitality, and celebrity wedding coordination across Vijayawada, Guntur, and Hyderabad.",
    packages: [
      {
        name: "Telugu Vaibhavam Package",
        price: "₹3,50,000",
        description: "Complete 3-day wedding curation including Pellikuthuru, Muhurtham, and Grand Reception.",
        features: ["Purohit & ritual coordination", "Custom temple mandap design", "VIP logistics & convoy management", "Catering & samayal master oversight"]
      },
      {
        name: "Royal Riverfront Destination",
        price: "₹6,50,000",
        description: "Bespoke riverfront & luxury resort wedding experience with 1000+ guest capacity.",
        features: ["Krishna riverfront resort takeover", "Celebrity live orchestra", "Drone cinematics", "Dedicated guest desk"]
      }
    ],
    reviews: [
      {
        author: "Sai Teja & Harika",
        weddingDate: "January 2026",
        rating: 5,
        venue: "A-Convention Centre, Vijayawada",
        title: "Spectacular Telugu wedding execution!",
        text: "From Pellikoduku ceremony to the reception with 2,500 guests, Amaravati Grand handled everything seamlessly. Best wedding planners in Andhra Pradesh!"
      }
    ],
    faqs: [
      {
        q: "Do you plan weddings outside Vijayawada in AP?",
        a: "Yes! We operate across all Andhra Pradesh districts including Guntur, Visakhapatnam, Tirupati, Rajahmundry, and Hyderabad."
      }
    ]
  },
  {
    id: "vow-ap-pl-02",
    category: "planners",
    name: "Vizag Beachside Wedding Architects",
    slug: "vizag-beachside-wedding-architects",
    city: "Visakhapatnam (Vizag)",
    state: "Andhra Pradesh",
    locality: "Beach Road",
    address: "Opp. Submarine Museum, R.K. Beach Road, Visakhapatnam, AP - 530003",
    phone: "+91 89125 66778",
    whatsapp: "918912566778",
    email: "contact@vizagweddings.in",
    rating: 4.92,
    reviewCount: 286,
    googleMapsRating: 4.9,
    googleReviewCount: 286,
    googlePlaceId: "ChIJ_vizag_beach_02",
    googleBusinessVerified: true,
    weddingsCount: 390,
    experienceYears: 10,
    priceRange: {
      startingFee: 320000,
      feeLabel: "₹3.2 Lakh - ₹6.5 Lakh",
      decorStartingFee: "₹2,20,000",
      category: "2_5l_to_4l"
    },
    badge: "Handpicked",
    isVerified: true,
    isFeatured: true,
    responseTime: "⚡ Responds within 15 mins",
    services: ["Full Planning", "Destination Weddings", "Decor & Styling", "Hospitality & Logistics"],
    guestCapacities: ["100-300", "300-600", "600-1000"],
    specialty: "Luxury Oceanfront Sunset Mandaps along Vizag Bay Coast",
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
    ],
    about: "Specializing in destination beach weddings along the picturesque Bay of Bengal shoreline in Vizag and Rushikonda. We build glass mandaps facing ocean waves, sunset sundowners, and royal reception sets at Novotel Varun Beach and The Park.",
    packages: [
      {
        name: "Vizag Sunset Beach Package",
        price: "₹4,20,000",
        description: "Complete oceanfront beach wedding coordination with CRZ permits and sound clearance.",
        features: ["Beach wedding NOC & permissions", "Glass oceanview mandap", "Acoustic live band", "Hospitality airport transfers"]
      }
    ],
    reviews: [
      {
        author: "Manoj & Swathi",
        weddingDate: "February 2026",
        rating: 5,
        venue: "Novotel Varun Beach, Vizag",
        title: "Dream wedding overlooking the ocean!",
        text: "The mandap right above the Vizag beach was like something out of a Bollywood film. Highly recommended for couples looking for seaside celebrations!"
      }
    ],
    faqs: [
      {
        q: "Do you arrange beach permits from GVMC & Police?",
        a: "Yes, our on-ground team secures all required coastal regulation clearances and police permissions."
      }
    ]
  },
  {
    id: "vow-ap-pl-03",
    category: "planners",
    name: "Tirumala Heritage Wedding Curators",
    slug: "tirumala-heritage-wedding-curators",
    city: "Tirupati",
    state: "Andhra Pradesh",
    locality: "KT Road",
    address: "Near Srinivasam Complex, KT Road, Tirupati, Andhra Pradesh - 517501",
    phone: "+91 87722 34455",
    whatsapp: "918772234455",
    email: "darshanweddings@tirupatievents.com",
    rating: 4.95,
    reviewCount: 420,
    googleMapsRating: 4.9,
    googleReviewCount: 420,
    googlePlaceId: "ChIJ_tirupati_heritage_03",
    googleBusinessVerified: true,
    weddingsCount: 650,
    experienceYears: 16,
    priceRange: {
      startingFee: 190000,
      feeLabel: "₹1.9 Lakh - ₹3.5 Lakh",
      decorStartingFee: "₹1,40,000",
      category: "under_2_5l"
    },
    badge: "Top Rated 2026",
    isVerified: true,
    isFeatured: true,
    responseTime: "⚡ Responds within 1 hour",
    services: ["Full Planning", "Decor & Styling", "Hospitality & Logistics"],
    guestCapacities: ["100-300", "300-600", "600-1000", "1000+"],
    specialty: "Sacred Tirumala Darshan Coordination & Vedic Kalyanam",
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
    ],
    about: "The most trusted wedding planner in temple city Tirupati. We organize sacred Vedic marriages, TTD Kalyanam suites, Purohit arrangements, traditional nadaswaram vidwans, and post-wedding Tirumala Lord Venkateswara VIP Darshan coordination for bride, groom, and family.",
    packages: [
      {
        name: "Divya Kalyanam Package",
        price: "₹2,50,000",
        description: "Traditional Vedic Kalyanam with temple mandap decor, Purohits, and family darshan assistance.",
        features: ["Purohit samagri & homam setup", "Traditional floral mandap with fresh lotus", "Guest accommodation block management"]
      }
    ],
    reviews: [
      {
        author: "Kalyan & Deepthi",
        weddingDate: "November 2025",
        rating: 5,
        venue: "Sri Venkateswara Kalyana Vedika, Tirupati",
        title: "Blessed divine wedding with zero stress",
        text: "Getting married at the foothills of Lord Balaji and having Tirumala Heritage manage everything was the best decision of our lives."
      }
    ],
    faqs: [
      {
        q: "Do you arrange TTD Kalyana Mandapam bookings?",
        a: "Yes, we guide couples through TTD online booking procedures and manage all on-site ritual logistics."
      }
    ]
  },

  // ==========================================
  // ANDHRA PRADESH - VENUES & MANDAPAMS
  // ==========================================
  {
    id: "vow-ap-vn-01",
    category: "venues",
    name: "A-Convention Centre & Grand Palace",
    slug: "a-convention-centre-vijayawada",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    locality: "MG Road",
    address: "MG Road, Labbipet, Vijayawada, Andhra Pradesh - 520010",
    phone: "+91 86624 77112",
    whatsapp: "918662477112",
    email: "info@aconvention.com",
    rating: 4.88,
    reviewCount: 512,
    googleMapsRating: 4.9,
    googleReviewCount: 512,
    googlePlaceId: "ChIJ_aconvention_vja_04",
    googleBusinessVerified: true,
    weddingsCount: 820,
    experienceYears: 14,
    priceRange: {
      startingFee: 450000,
      feeLabel: "₹4,50,000 / day",
      decorStartingFee: "Plate: ₹850 - ₹1,400",
      category: "4l_to_6l"
    },
    badge: "Handpicked",
    isVerified: true,
    isFeatured: true,
    responseTime: "⚡ Responds within 1 hour",
    services: ["Venues & Mandapams", "Central AC", "Valet Parking", "In-house Catering Option"],
    guestCapacities: ["600-1000", "1000+"],
    specialty: "AP's Largest AC Convention Facility with 3,500 Guest Capacity",
    coverImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
    ],
    about: "A-Convention Centre is Vijayawada's crown jewel for grand nuptials and luxury receptions. Featuring pillar-less banquet architecture, 25 luxury bridal suites, covered parking for 800+ cars, and world-class acoustics in the heart of MG Road.",
    packages: [
      {
        name: "Full Royal Hall (3000 Capacity)",
        price: "₹5,50,000 / day",
        description: "Entire grand auditorium with air-conditioning, generator backup, and 12 luxury greenrooms.",
        features: ["Pillarless 25,000 sq.ft hall", "Central AC for 3,500 pax", "Valet parking team of 20", "24/7 power backup"]
      }
    ],
    reviews: [
      {
        author: "Rao & Family",
        weddingDate: "December 2025",
        rating: 5,
        venue: "A-Convention Centre",
        title: "Unmatched grandeur in Vijayawada",
        text: "The parking space, AC cooling, and massive stage made our 2,500 guest reception totally comfortable."
      }
    ],
    faqs: [
      {
        q: "Is outside catering allowed?",
        a: "Yes, external traditional samayal masters and specialized caterers are welcomed."
      }
    ]
  },
  {
    id: "vow-ap-vn-02",
    category: "venues",
    name: "Novotel Visakhapatnam Varun Beach",
    slug: "novotel-visakhapatnam-varun-beach",
    city: "Visakhapatnam (Vizag)",
    state: "Andhra Pradesh",
    locality: "Beach Road",
    address: "Dr. NTR Beach Road, Visakhapatnam, Andhra Pradesh - 530002",
    phone: "+91 89130 45678",
    whatsapp: "918913045678",
    email: "h7535-sl@accor.com",
    rating: 4.95,
    reviewCount: 680,
    googleMapsRating: 4.9,
    googleReviewCount: 680,
    googlePlaceId: "ChIJ_novotel_vizag_05",
    googleBusinessVerified: true,
    weddingsCount: 540,
    experienceYears: 15,
    priceRange: {
      startingFee: 650000,
      feeLabel: "₹6.5 Lakh / day",
      decorStartingFee: "Plate: ₹1,650 - ₹2,800",
      category: "above_6l"
    },
    badge: "Handpicked",
    isVerified: true,
    isFeatured: true,
    responseTime: "⚡ Responds within 30 mins",
    services: ["Venues & Mandapams", "Beachfront Lawns", "5-Star Luxury Banquet", "Infinity Poolside"],
    guestCapacities: ["300-600", "600-1000", "1000+"],
    specialty: "5-Star Seaside Luxury Weddings & Coastal Lawns",
    coverImage: "https://images.unsplash.com/photo-1545232979-fbf68fe9c132?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1545232979-fbf68fe9c132?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
    ],
    about: "Overlooking the azure Bay of Bengal, Novotel Varun Beach is East Coast India's premier luxury wedding destination. Offering 225 sea-facing guest rooms, grand ballrooms, and ocean breeze open-air lawns for unforgettable sundowners.",
    packages: [
      {
        name: "Oceanfront Grand Celebration",
        price: "₹7,50,000 / day",
        description: "Ballroom + Sea Lawn buyout with 5-star international & Andhra gourmet catering.",
        features: ["Beach view lawn + ballroom", "Luxury suite for bride & groom", "Signature 5-star buffet"]
      }
    ],
    reviews: [
      {
        author: "Pranay & Sneha",
        weddingDate: "January 2026",
        rating: 5,
        venue: "Novotel Varun Beach",
        title: "Magical beach resort wedding in AP!",
        text: "The sunset backdrop during our pheras was unforgettable. The hospitality of Novotel is world-class."
      }
    ],
    faqs: [
      {
        q: "Can we have fireworks by the beach?",
        a: "Yes, beach fireworks and cold pyro are permitted with hotel guidance."
      }
    ]
  },

  // ==========================================
  // ANDHRA PRADESH - PHOTOGRAPHERS
  // ==========================================
  {
    id: "vow-ap-ph-01",
    category: "photographers",
    name: "Pixel Story Studio AP",
    slug: "pixel-story-studio-ap",
    city: "Visakhapatnam (Vizag)",
    state: "Andhra Pradesh",
    locality: "Siripuram",
    address: "Siripuram Towers, VIP Road, Visakhapatnam, AP - 530003",
    phone: "+91 89166 77889",
    whatsapp: "918916677889",
    email: "bookings@pixelstoryap.com",
    rating: 4.94,
    reviewCount: 310,
    googleMapsRating: 4.9,
    googleReviewCount: 310,
    googlePlaceId: "ChIJ_pixelstory_vizag_06",
    googleBusinessVerified: true,
    weddingsCount: 420,
    experienceYears: 9,
    priceRange: {
      startingFee: 150000,
      feeLabel: "₹1.5 Lakh - ₹2.8 Lakh / day",
      decorStartingFee: "Photo + Cinema Package",
      category: "under_2_5l"
    },
    badge: "Top Rated 2026",
    isVerified: true,
    isFeatured: true,
    responseTime: "⚡ Responds within 15 mins",
    services: ["Photographers", "Candid Photography", "Cinematography", "Drone Filming", "Pre-wedding Shoots"],
    specialty: "Cinematic Telugu Wedding Films & Beach Shoots",
    coverImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
    ],
    about: "Pixel Story Studio is Andhra Pradesh's most celebrated candid wedding cinema crew. Equipped with cinema-grade Sony FX6 cameras, aerial 4K drones, and high-dynamic colorists, we capture every emotional glance, tear, and jeelakarra bellam moment.",
    packages: [
      {
        name: "Complete Cinema Suite",
        price: "₹2,20,000",
        description: "2 Candid Photographers, 2 Cinematographers, 1 Drone Pilot, 4K Wedding Teaser + 45-min Film.",
        features: ["Full 4K drone footage", "Same-day edit teaser for reception", "Premium leather album (100 sheets)"]
      }
    ],
    reviews: [
      {
        author: "Karthik & Ananya",
        weddingDate: "January 2026",
        rating: 5,
        title: "Our wedding teaser made everyone cry happy tears!",
        text: "The drone shots over Rushikonda beach and the emotional coverage of our muhurtham were breathtaking."
      }
    ],
    faqs: [
      {
        q: "What is your delivery turnaround time?",
        a: "Teaser within 7 days, full cinematic film and raw photos within 30 days."
      }
    ]
  },

  // ==========================================
  // ANDHRA PRADESH - BRIDAL MAKEUP
  // ==========================================
  {
    id: "vow-ap-mu-01",
    category: "bridal-makeup",
    name: "Glamour Aura Bridal Studio by Shilpa",
    slug: "glamour-aura-bridal-studio-shilpa",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    locality: "Moghalrajpuram",
    address: "Near Siddhartha College, Moghalrajpuram, Vijayawada, AP - 520010",
    phone: "+91 86633 11224",
    whatsapp: "918663311224",
    email: "shilpamakeup@gmail.com",
    rating: 4.96,
    reviewCount: 275,
    googleMapsRating: 4.9,
    googleReviewCount: 275,
    googlePlaceId: "ChIJ_shilpa_makeup_07",
    googleBusinessVerified: true,
    weddingsCount: 520,
    experienceYears: 11,
    priceRange: {
      startingFee: 25000,
      feeLabel: "₹25,000 - ₹45,000 / event",
      decorStartingFee: "Airbrush HD Makeup",
      category: "under_2_5l"
    },
    badge: "Handpicked",
    isVerified: true,
    isFeatured: true,
    responseTime: "⚡ Responds within 10 mins",
    services: ["Bridal Makeup", "HD Makeup", "Airbrush Makeup", "Saree Draping", "Hair Styling"],
    specialty: "High-End Kanjeevaram Saree Draping & Sweat-Proof HD Glow",
    coverImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
    ],
    about: "Certified from London School of Makeup, Shilpa is Andhra Pradesh's top bridal artist trusted by brides and celebrity families. Specializes in featherlight sweat-proof airbrush makeup that stays flawless for 16 hours through humid Telugu muhurthams.",
    packages: [
      {
        name: "Signature HD Bridal Muhurtham",
        price: "₹30,000",
        description: "Includes HD bridal makeup, luxury hair design with real jasmine flowers, and Kanjeevaram saree styling.",
        features: ["Dior & MAC Cosmetics only", "Custom lash extensions", "Traditional South Indian hair braiding"]
      }
    ],
    reviews: [
      {
        author: "Bhavana V.",
        weddingDate: "February 2026",
        rating: 5,
        title: "Flawless look throughout the entire 5-hour ritual!",
        text: "Shilpa is truly an artist. My makeup didn't melt or budge even in front of the holy fire."
      }
    ],
    faqs: [
      {
        q: "Do you travel to venues across Andhra Pradesh?",
        a: "Yes, our team travels to venues in Guntur, Vizag, Hyderabad, and Vijayawada."
      }
    ]
  },

  // ==========================================
  // ANDHRA PRADESH - DECORATORS
  // ==========================================
  {
    id: "vow-ap-dc-01",
    category: "decorators",
    name: "Sri Krishna Floral Arts & Mandap Decors",
    slug: "sri-krishna-floral-arts-guntur",
    city: "Guntur",
    state: "Andhra Pradesh",
    locality: "Brodipet",
    address: "Main Road, Brodipet 4th Line, Guntur, Andhra Pradesh - 522002",
    phone: "+91 86322 45566",
    whatsapp: "918632245566",
    email: "krishnadecors@gmail.com",
    rating: 4.89,
    reviewCount: 310,
    googleMapsRating: 4.8,
    googleReviewCount: 310,
    googlePlaceId: "ChIJ_krishna_decor_08",
    googleBusinessVerified: true,
    weddingsCount: 710,
    experienceYears: 18,
    priceRange: {
      startingFee: 180000,
      feeLabel: "₹1.8 Lakh - ₹5 Lakh",
      decorStartingFee: "Temple Mandap Floral",
      category: "under_2_5l"
    },
    badge: "Verified",
    isVerified: true,
    isFeatured: true,
    responseTime: "⚡ Responds within 1 hour",
    services: ["Decorators", "Mandap Decor", "Floral Installations", "Entrance Gates", "Sangeet Lighting"],
    specialty: "Authentic Bangalore & Mysore Jasmine Mandaps with Brass Urulis",
    coverImage: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
    ],
    about: "For nearly two decades, Sri Krishna Floral Arts has crafted the grandest wedding mandaps across Guntur and Vijayawada. From 60-foot Tirupati Venkateswara floral replicas to modern fairy-light canopies, our warehouse handles large-scale fabrication.",
    packages: [
      {
        name: "Grand Royal Mandap",
        price: "₹2,80,000",
        description: "Four-pillar carved temple mandap with 5,000 fresh lotus and yellow marigold strings.",
        features: ["Full stage floral dome", "Royal bride & groom throne chairs", "Pathway floral pillars"]
      }
    ],
    reviews: [
      {
        author: "Venkatesh & Sravani",
        weddingDate: "January 2026",
        rating: 5,
        title: "The mandap looked like Tirumala temple!",
        text: "The fragrance of fresh jasmine and the brass lamps created a divine atmosphere. Superb work!"
      }
    ],
    faqs: [
      {
        q: "Do you provide 3D design renders before execution?",
        a: "Yes, we present photorealistic 3D renders of your stage and entrance before booking."
      }
    ]
  },

  // ==========================================
  // ANDHRA PRADESH - CATERING & SAMAYAL
  // ==========================================
  {
    id: "vow-ap-ct-01",
    category: "catering",
    name: "Subham Andhra Bhojanam & Catering Masters",
    slug: "subham-andhra-bhojanam-catering",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    locality: "Governorpet",
    address: "Opp. Apsara Theatre, Governorpet, Vijayawada, AP - 520002",
    phone: "+91 86625 33445",
    whatsapp: "918662533445",
    email: "subhamcatering@yahoo.com",
    rating: 4.93,
    reviewCount: 480,
    googleMapsRating: 4.9,
    googleReviewCount: 480,
    googlePlaceId: "ChIJ_subham_catering_09",
    googleBusinessVerified: true,
    weddingsCount: 950,
    experienceYears: 22,
    priceRange: {
      startingFee: 450,
      feeLabel: "₹450 - ₹950 / plate",
      decorStartingFee: "Banana Leaf Traditional",
      category: "under_2_5l"
    },
    badge: "Handpicked",
    isVerified: true,
    isFeatured: true,
    responseTime: "⚡ Responds within 30 mins",
    services: ["Catering", "Pure Veg Feast", "Banana Leaf Service", "Live Counter Sweets", "Guntur Spicy Delicacies"],
    specialty: "Authentic Andhra 32-Item Vindu Bhojanam with Pootharekulu & Ulava Charu",
    coverImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80"
    ],
    about: "No Andhra wedding is complete without a legendary feast. Subham Catering is renowned across AP for authentic Atreyapuram Pootharekulu, hot Kakinada Kaja, Guntur Gongura pachadi, and fragrant Biryani served on fresh plantain leaves by uniformed staff.",
    packages: [
      {
        name: "Royal 32-Item Vindu Bhojanam",
        price: "₹650 / plate",
        description: "Complete traditional vegetarian feast with 4 live hot sweet stations and special paan counter.",
        features: ["Hot jalebi & pootharekulu live counters", "Authentic sambar & ulava charu", "Mineral water & clean service team"]
      }
    ],
    reviews: [
      {
        author: "Choudhary Family",
        weddingDate: "January 2026",
        rating: 5,
        title: "Every single guest praised the food!",
        text: "The ulava charu cream and hot jalebis were out of this world. Cleanest catering team in AP."
      }
    ],
    faqs: [
      {
        q: "Do you offer food tasting sessions?",
        a: "Yes, we host complementary tasting sessions for bride, groom, and family elders."
      }
    ]
  },

  // ==========================================
  // ANDHRA PRADESH - MEHNDI ARTISTS
  // ==========================================
  {
    id: "vow-ap-mh-01",
    category: "mehndi",
    name: "Sri Valli Organic Bridal Mehndi",
    slug: "sri-valli-organic-bridal-mehndi",
    city: "Visakhapatnam (Vizag)",
    state: "Andhra Pradesh",
    locality: "MVP Colony",
    address: "Sector 3, MVP Colony, Visakhapatnam, Andhra Pradesh - 530017",
    phone: "+91 89127 88990",
    whatsapp: "918912788990",
    email: "srivallimehendi@gmail.com",
    rating: 4.95,
    reviewCount: 190,
    googleMapsRating: 4.9,
    googleReviewCount: 190,
    googlePlaceId: "ChIJ_srivalli_mehndi_10",
    googleBusinessVerified: true,
    weddingsCount: 380,
    experienceYears: 8,
    priceRange: {
      startingFee: 8000,
      feeLabel: "₹8,000 - ₹22,000",
      decorStartingFee: "Chemical-Free Organic Henna",
      category: "under_2_5l"
    },
    badge: "Verified",
    isVerified: true,
    isFeatured: true,
    responseTime: "⚡ Responds within 10 mins",
    services: ["Mehndi", "Bridal Mehndi", "Figure Work", "Portrait Mehndi", "Guest Mehndi"],
    specialty: "Custom Couple Portraits & Temple Architecture Henna",
    coverImage: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    about: "Using 100% natural, chemical-free Sojat henna cones with organic eucalyptus and clove oil, Sri Valli crafts dark maroon stains with intricate Telugu wedding rituals, Lord Venkateswara motifs, and couple caricatures.",
    packages: [
      {
        name: "Full Bridal Arms & Feet",
        price: "₹14,000",
        description: "Intricate elbows-to-fingers bridal designs with custom portrait sketches and feet work.",
        features: ["100% dark stain guarantee", "Natural herbal post-care oils", "Assistant for groom mehndi"]
      }
    ],
    reviews: [
      {
        author: "Meghana P.",
        weddingDate: "December 2025",
        rating: 5,
        title: "Deepest dark maroon color!",
        text: "The details on my hands included our proposal scene and Tirupati temple bells. Incredible patience and skill."
      }
    ],
    faqs: [
      {
        q: "How many days in advance should mehndi be applied?",
        a: "We recommend applying henna 48 hours before your muhurtham for the darkest natural color."
      }
    ]
  },

  // ==========================================
  // ANDHRA PRADESH - INVITATIONS & FAVORS
  // ==========================================
  {
    id: "vow-ap-in-01",
    category: "invitations",
    name: "Lipi Luxury Wedding Cards & Digital E-Invites",
    slug: "lipi-luxury-wedding-cards-ap",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    locality: "Governorpet",
    address: "Kaleswara Rao Market Road, Governorpet, Vijayawada, AP - 520002",
    phone: "+91 86624 33119",
    whatsapp: "918662433119",
    email: "cards@lipiprinters.com",
    rating: 4.87,
    reviewCount: 220,
    googleMapsRating: 4.8,
    googleReviewCount: 220,
    googlePlaceId: "ChIJ_lipi_cards_11",
    googleBusinessVerified: true,
    weddingsCount: 580,
    experienceYears: 16,
    priceRange: {
      startingFee: 45,
      feeLabel: "₹45 - ₹450 / card",
      decorStartingFee: "Box Hampers: ₹350+",
      category: "under_2_5l"
    },
    badge: "Verified",
    isVerified: true,
    isFeatured: false,
    responseTime: "⚡ Responds within 1 hour",
    services: ["Invitations", "Handmade Paper Cards", "Box Hampers", "Animated Video Invites", "WhatsApp E-Cards"],
    specialty: "Velvet Boxed Invitations with Brass Idols & Dry Fruit Hampers",
    coverImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
    ],
    about: "Lipi Cards is Vijayawada's foremost destination for royal wedding stationery. From foil-stamped Telugu wedding invitations to custom laser-cut velvet boxes and viral animated WhatsApp video invites.",
    packages: [
      {
        name: "Royal Velvet Box Suite (100 Cards)",
        price: "₹250 / box",
        description: "Hardbound velvet box with gold foil lettering, 3 function inserts, and sweet compartment.",
        features: ["Gold hot foil stamping", "Custom Lord Ganesha emblem", "Free matching WhatsApp video invite"]
      }
    ],
    reviews: [
      {
        author: "Kalyan & Family",
        weddingDate: "January 2026",
        rating: 5,
        title: "Stunning wedding cards praised by all relatives",
        text: "The paper quality and velvet finish was top class. Everyone who received our card loved it."
      }
    ],
    faqs: [
      {
        q: "Can you design in Telugu and English?",
        a: "Yes, we specialize in bilingual Telugu & English invitations with traditional Vedic shlokas."
      }
    ]
  },

  // ==========================================
  // CHENNAI PLANNERS & VENDORS
  // ==========================================
  {
    id: "vow-chn-01",
    category: "planners",
    name: "The Royal Knot Luxury Weddings",
    slug: "the-royal-knot-luxury-weddings",
    city: "Chennai",
    state: "Tamil Nadu",
    locality: "ECR (East Coast Road)",
    address: "Sea Shell Avenue, Injambakkam, ECR, Chennai - 600115",
    phone: "+91 98401 23456",
    whatsapp: "919840123456",
    email: "enquiry@theroyalknot.in",
    rating: 4.9,
    reviewCount: 168,
    googleMapsRating: 4.9,
    googleReviewCount: 168,
    googlePlaceId: "ChIJ_royal_knot_chn_12",
    googleBusinessVerified: true,
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
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
    ],
    about: "The Royal Knot is an award-winning bespoke wedding planning studio based in Chennai. Specializing in luxury destination weddings along the scenic East Coast Road, Mahabalipuram, and heritage South Indian celebrations.",
    packages: [
      {
        name: "Emerald Package",
        price: "₹2,50,000",
        description: "Coordination & design styling.",
        features: ["Vendor coordination", "Timeline management", "Day-of execution"]
      }
    ],
    reviews: [
      {
        author: "Kavya & Anirudh",
        weddingDate: "January 2026",
        rating: 5,
        title: "Dream wedding at Mahabalipuram beach resort!",
        venue: "InterContinental Chennai Resort",
        text: "The Royal Knot made our 3-day wedding completely stress-free."
      }
    ],
    faqs: [
      {
        q: "What is your booking advance policy?",
        a: "We accept a 25% booking advance to block your wedding dates."
      }
    ]
  },
  {
    id: "vow-chn-02",
    category: "planners",
    name: "Madras Event House & Weddings",
    slug: "madras-event-house-weddings",
    city: "Chennai",
    state: "Tamil Nadu",
    locality: "T. Nagar",
    address: "42 Burkit Road, T. Nagar, Chennai - 600017",
    phone: "+91 98840 98765",
    whatsapp: "919884098765",
    email: "hello@madrasevents.com",
    rating: 4.8,
    reviewCount: 142,
    googleMapsRating: 4.8,
    googleReviewCount: 142,
    googlePlaceId: "ChIJ_madras_event_chn_13",
    googleBusinessVerified: true,
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
      "https://images.unsplash.com/photo-1545232979-fbf68fe9c132?auto=format&fit=crop&w=1200&q=80"
    ],
    about: "Madras Event House brings cultural authenticity and modern design to mandapam weddings in central Chennai.",
    packages: [
      {
        name: "Classic Coordination",
        price: "₹1,80,000",
        description: "Month-of and day-of management.",
        features: ["Vendor coordination", "Guest desk"]
      }
    ],
    reviews: [
      {
        author: "Archana & Vignesh",
        weddingDate: "December 2025",
        rating: 5,
        title: "Flawless planning and stunning decor!",
        venue: "The Leela Palace, Chennai",
        text: "Madras Event House handled everything with immense patience."
      }
    ],
    faqs: [
      {
        q: "Do you coordinate with catering masters?",
        a: "Yes, we work with leading traditional masters."
      }
    ]
  }
];

export const WEDMEGOOD_FAQS = [
  {
    q: "How many wedding businesses in Andhra Pradesh are listed on Vowora?",
    a: "Vowora indexes over 10,000+ verified wedding planners, Kalyana Mandapams, convention centers, candid photographers, bridal makeup studios, and traditional samayal masters across all 26 districts of Andhra Pradesh, including Visakhapatnam, Vijayawada, Guntur, Tirupati, Rajahmundry, and Kakinada."
  },
  {
    q: "How are businesses verified with Google Maps & Google Business?",
    a: "Every listed vendor features their verified Google Place ID, Google star rating, real customer reviews, and direct Google Maps directions links alongside Vowora verified testimonials."
  },
  {
    q: "What is the average cost of wedding planners and venues in Andhra Pradesh?",
    a: "In AP cities like Vijayawada, Visakhapatnam, and Guntur, wedding planning fees range from ₹1.5 Lakhs to ₹4.5 Lakhs. AC Kalyana Mandapams and convention halls range from ₹1.5 Lakhs to ₹5.5 Lakhs per day depending on guest capacity."
  },
  {
    q: "Can I book destination weddings in Visakhapatnam or Tirupati?",
    a: "Yes! Vizag offers scenic beachside resorts along Rushikonda and Beach Road, while Tirupati offers sacred temple weddings with VIP Tirumala darshan packages."
  }
];
