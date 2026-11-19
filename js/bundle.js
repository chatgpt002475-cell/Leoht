// Vowora - 100% WedMeGood & Google Maps Architecture for Andhra Pradesh & South India
(function() {
  'use strict';

  function safeGet(key, defaultVal) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const val = window.localStorage.getItem(key);
        return val ? JSON.parse(val) : defaultVal;
      }
    } catch(e) {}
    return defaultVal;
  }

  function safeSet(key, val) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, JSON.stringify(val));
      }
    } catch(e) {}
  }

  const CITIES_DATA = [
    { id: "all-ap", name: "All Andhra Pradesh", count: 10420, isAP: true },
    { id: "visakhapatnam", name: "Visakhapatnam (Vizag)", count: 2480, isAP: true },
    { id: "vijayawada", name: "Vijayawada", count: 2150, isAP: true },
    { id: "guntur", name: "Guntur", count: 1340, isAP: true },
    { id: "tirupati", name: "Tirupati", count: 1520, isAP: true },
    { id: "rajahmundry", name: "Rajahmundry", count: 980, isAP: true },
    { id: "kakinada", name: "Kakinada", count: 810, isAP: true },
    { id: "nellore", name: "Nellore", count: 740, isAP: true },
    { id: "kurnool", name: "Kurnool", count: 620, isAP: true },
    { id: "chennai", name: "Chennai", count: 2470 },
    { id: "hyderabad", name: "Hyderabad", count: 3100 },
    { id: "bangalore", name: "Bangalore", count: 4200 },
    { id: "mumbai", name: "Mumbai", count: 5800 },
    { id: "delhi", name: "Delhi NCR", count: 6500 }
  ];

  const CATEGORY_TITLES = {
    "planners": "Wedding Planners",
    "venues": "Venues & Kalyana Mandapams",
    "photographers": "Wedding Photographers",
    "bridal-makeup": "Bridal Makeup Artists",
    "decorators": "Wedding Decorators & Floral Stylists",
    "catering": "Catering & Authentic Samayal",
    "mehndi": "Bridal Mehndi Artists",
    "invitations": "Invitations & Digital E-Cards"
  };

  const LOCALITIES_MAP = {
    "Visakhapatnam (Vizag)": ["Beach Road", "Rushikonda", "MVP Colony", "Siripuram", "Gajuwaka", "Madhurawada", "Seethammadhara", "Dwaraka Nagar", "Waltair Uplands", "Pendurthi"],
    "Vijayawada": ["Benz Circle", "MG Road", "Bhavanipuram", "Governorpet", "Gunadala", "Poranki", "Auto Nagar", "Kanuru", "Moghalrajpuram"],
    "Guntur": ["Brodipet", "Arundelpet", "Vidyanagar", "Gujjanagundla", "Lakshmipuram", "Kothapet", "Pattabhipuram"],
    "Tirupati": ["KT Road", "Renigunta Road", "Korlagunta", "AIR Bypass Road", "Chandragiri Road", "Bhavani Nagar"],
    "Rajahmundry": ["Danavaipeta", "Tilak Road", "Morampudi", "Godavari Bund Road", "Kotipalli"],
    "Chennai": ["ECR (East Coast Road)", "T. Nagar", "Anna Nagar", "Adyar", "Mylapore", "Nungambakkam", "Velachery", "OMR (Old Mahabalipuram Road)", "Alwarpet", "Guindy", "Mahabalipuram"],
    "All Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Rajahmundry", "Kakinada", "Nellore", "Kurnool", "Anantapur", "Kadapa"]
  };

  const VENDORS_MASTER = [
    // --- ANDHRA PRADESH: PLANNERS ---
    {
      id: "vow-ap-pl-01",
      category: "planners",
      name: "Amaravati Grand Royal Weddings",
      city: "Vijayawada",
      state: "Andhra Pradesh",
      locality: "Benz Circle",
      address: "Opp. Trendset Mall, Benz Circle, Vijayawada, AP - 520010",
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
      priceRange: { startingFee: 280000, feeLabel: "₹2.8 Lakh - ₹5.5 Lakh", decorStartingFee: "₹2,00,000", category: "2_5l_to_4l" },
      badge: "Handpicked",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds in 15 mins",
      services: ["Full Planning", "Decor & Styling", "Destination Weddings", "Hospitality & Logistics"],
      guestCapacities: ["300-600", "600-1000", "1000+"],
      specialty: "Grand Telugu Vaibhavam & Riverfront Weddings",
      coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
      ],
      about: "Andhra Pradesh's highest rated luxury wedding firm at Benz Circle, Vijayawada. Specialists in traditional Telugu Pelli, VIP hospitality, and massive 2000+ guest wedding management.",
      packages: [
        { name: "Telugu Vaibhavam Package", price: "₹3,50,000", description: "Complete 3-day curation: Pellikuthuru, Muhurtham, and Reception.", features: ["Purohit & ritual coordination", "Custom temple mandap", "VIP logistics"] }
      ],
      reviews: [{ author: "Sai Teja & Harika", weddingDate: "January 2026", rating: 5, venue: "A-Convention Centre", title: "Spectacular Telugu wedding!", text: "Managed our 2,500 guest wedding flawlessly. Best in Andhra Pradesh!" }],
      faqs: [{ q: "Do you plan destination weddings in AP?", a: "Yes, we plan destination weddings across Vizag, Vijayawada, and Tirupati." }]
    },
    {
      id: "vow-ap-pl-02",
      category: "planners",
      name: "Vizag Beachside Wedding Architects",
      city: "Visakhapatnam (Vizag)",
      state: "Andhra Pradesh",
      locality: "Beach Road",
      address: "Opp. Submarine Museum, Beach Road, Visakhapatnam, AP - 530003",
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
      priceRange: { startingFee: 320000, feeLabel: "₹3.2 Lakh - ₹6.5 Lakh", decorStartingFee: "₹2,20,000", category: "2_5l_to_4l" },
      badge: "Handpicked",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds in 20 mins",
      services: ["Full Planning", "Destination Weddings", "Decor & Styling", "Hospitality & Logistics"],
      guestCapacities: ["100-300", "300-600", "600-1000"],
      specialty: "Luxury Oceanfront Sunset Mandaps along Vizag Bay",
      coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
      ],
      about: "Premier beach destination wedding firm along the Bay of Bengal in Vizag. We build glass mandaps facing ocean waves at Novotel and Rushikonda.",
      packages: [
        { name: "Sunset Beach Mandap", price: "₹4,20,000", description: "Oceanfront wedding with coastal permits and luxury setup.", features: ["Beach permits", "Glass mandap", "Acoustic band"] }
      ],
      reviews: [{ author: "Manoj & Swathi", weddingDate: "February 2026", rating: 5, venue: "Novotel Varun Beach", title: "Dream beach wedding!", text: "The ocean view pheras were unforgettable." }],
      faqs: [{ q: "Do you arrange beach permits?", a: "Yes, our team handles all local clearances." }]
    },
    {
      id: "vow-ap-pl-03",
      category: "planners",
      name: "Tirumala Heritage Wedding Curators",
      city: "Tirupati",
      state: "Andhra Pradesh",
      locality: "KT Road",
      address: "Near Srinivasam Complex, KT Road, Tirupati, AP - 517501",
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
      priceRange: { startingFee: 190000, feeLabel: "₹1.9 Lakh - ₹3.5 Lakh", decorStartingFee: "₹1,40,000", category: "under_2_5l" },
      badge: "Top Rated 2026",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds in 15 mins",
      services: ["Full Planning", "Decor & Styling", "Hospitality & Logistics"],
      guestCapacities: ["100-300", "300-600", "600-1000", "1000+"],
      specialty: "Sacred Tirumala Darshan Coordination & Vedic Kalyanam",
      coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      photos: ["https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"],
      about: "Organizing sacred Vedic marriages, TTD Kalyanam suites, Purohits, and post-wedding Lord Venkateswara Darshan assistance for families.",
      packages: [{ name: "Divya Kalyanam", price: "₹2,50,000", description: "Traditional Vedic Kalyanam with temple mandap decor.", features: ["Purohit samagri", "Lotus floral mandap", "VIP Darshan guide"] }],
      reviews: [{ author: "Kalyan & Deepthi", weddingDate: "November 2025", rating: 5, venue: "TTD Kalyana Vedika", title: "Divine experience", text: "Zero stress wedding at the holy feet of Lord Balaji." }],
      faqs: [{ q: "Do you arrange TTD bookings?", a: "Yes, we guide couples through all registration formalities." }]
    },

    // --- ANDHRA PRADESH: VENUES ---
    {
      id: "vow-ap-vn-01",
      category: "venues",
      name: "A-Convention Centre & Grand Palace",
      city: "Vijayawada",
      state: "Andhra Pradesh",
      locality: "MG Road",
      address: "MG Road, Labbipet, Vijayawada, AP - 520010",
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
      priceRange: { startingFee: 450000, feeLabel: "₹4,50,000 / day", decorStartingFee: "Plate: ₹850 - ₹1,400", category: "4l_to_6l" },
      badge: "Handpicked",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds in 30 mins",
      services: ["Venues & Mandapams", "Central AC", "Valet Parking", "In-house Catering Option"],
      guestCapacities: ["600-1000", "1000+"],
      specialty: "AP's Largest AC Convention Facility (3,500 Capacity)",
      coverImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      photos: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"],
      about: "Pillarless 25,000 sq.ft auditorium in Vijayawada with 800+ covered car parking, 25 luxury suites, and central AC.",
      packages: [{ name: "Full Grand Hall", price: "₹5,50,000 / day", description: "Entire auditorium with 12 luxury greenrooms.", features: ["3,500 capacity AC", "Generator backup", "Valet parking"] }],
      reviews: [{ author: "Rao Family", weddingDate: "December 2025", rating: 5, venue: "A-Convention", title: "Unmatched grandeur", text: "Comfortably seated 2,500 guests." }],
      faqs: [{ q: "Is outside catering allowed?", a: "Yes, traditional samayal masters are allowed." }]
    },
    {
      id: "vow-ap-vn-02",
      category: "venues",
      name: "Novotel Visakhapatnam Varun Beach",
      city: "Visakhapatnam (Vizag)",
      state: "Andhra Pradesh",
      locality: "Beach Road",
      address: "Dr. NTR Beach Road, Visakhapatnam, AP - 530002",
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
      priceRange: { startingFee: 650000, feeLabel: "₹6.5 Lakh / day", decorStartingFee: "Plate: ₹1,650 - ₹2,800", category: "above_6l" },
      badge: "Handpicked",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds in 15 mins",
      services: ["Venues & Mandapams", "Beachfront Lawns", "5-Star Luxury Banquet"],
      guestCapacities: ["300-600", "600-1000", "1000+"],
      specialty: "5-Star Seaside Luxury Weddings & Coastal Lawns",
      coverImage: "https://images.unsplash.com/photo-1545232979-fbf68fe9c132?auto=format&fit=crop&w=1200&q=80",
      photos: ["https://images.unsplash.com/photo-1545232979-fbf68fe9c132?auto=format&fit=crop&w=1200&q=80"],
      about: "Overlooking the Bay of Bengal with 225 rooms, sea-facing ballrooms, and ocean breeze open-air lawns.",
      packages: [{ name: "Oceanfront Grand Package", price: "₹7,50,000 / day", description: "Ballroom + Sea Lawn buyout with 5-star catering.", features: ["Beach view lawn", "Bridal suite", "5-star buffet"] }],
      reviews: [{ author: "Pranay & Sneha", weddingDate: "January 2026", rating: 5, venue: "Novotel Varun Beach", title: "Magical beach wedding", text: "World-class 5-star service in Vizag." }],
      faqs: [{ q: "Are fireworks allowed?", a: "Yes, cold pyro and beach fireworks are permitted." }]
    },

    // --- ANDHRA PRADESH: PHOTOGRAPHERS ---
    {
      id: "vow-ap-ph-01",
      category: "photographers",
      name: "Pixel Story Studio AP",
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
      priceRange: { startingFee: 150000, feeLabel: "₹1.5 Lakh - ₹2.8 Lakh / event", decorStartingFee: "Photo + Cinema Package", category: "under_2_5l" },
      badge: "Top Rated 2026",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds in 15 mins",
      services: ["Photographers", "Candid Photography", "Cinematography", "Drone Filming"],
      specialty: "Cinematic Telugu Wedding Films & Beach Shoots",
      coverImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
      photos: ["https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80"],
      about: "Top-tier candid cinematography crew using Sony FX6 cameras and aerial 4K drones.",
      packages: [{ name: "Cinema Suite", price: "₹2,20,000", description: "2 Photographers, 2 Cinematographers, Drone, 4K Film.", features: ["4K Drone", "Same day teaser", "Leather album"] }],
      reviews: [{ author: "Karthik & Ananya", weddingDate: "January 2026", rating: 5, venue: "Vizag", title: "Amazing cinema!", text: "Captured our wedding moments like a feature film." }],
      faqs: [{ q: "When is the video delivered?", a: "Teaser in 7 days, full film in 30 days." }]
    },

    // --- ANDHRA PRADESH: BRIDAL MAKEUP ---
    {
      id: "vow-ap-mu-01",
      category: "bridal-makeup",
      name: "Glamour Aura Bridal Studio by Shilpa",
      city: "Vijayawada",
      state: "Andhra Pradesh",
      locality: "Moghalrajpuram",
      address: "Moghalrajpuram, Vijayawada, AP - 520010",
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
      priceRange: { startingFee: 25000, feeLabel: "₹25,000 - ₹45,000 / event", decorStartingFee: "Airbrush HD Makeup", category: "under_2_5l" },
      badge: "Handpicked",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds in 10 mins",
      services: ["Bridal Makeup", "HD Makeup", "Airbrush Makeup", "Saree Draping"],
      specialty: "High-End Kanjeevaram Saree Draping & Sweat-Proof HD Glow",
      coverImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
      photos: ["https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80"],
      about: "Certified London artist. Featherlight sweat-proof airbrush makeup that lasts 16 hours through Telugu muhurthams.",
      packages: [{ name: "HD Bridal Muhurtham", price: "₹30,000", description: "HD makeup, luxury hair design with real jasmine, saree draping.", features: ["Dior & MAC only", "Lash extensions", "Hair braiding"] }],
      reviews: [{ author: "Bhavana V.", weddingDate: "February 2026", rating: 5, venue: "Vijayawada", title: "Flawless for 16 hours!", text: "Did not melt even in front of the holy fire." }],
      faqs: [{ q: "Do you travel to venues?", a: "Yes, across AP and Hyderabad." }]
    },

    // --- ANDHRA PRADESH: DECORATORS ---
    {
      id: "vow-ap-dc-01",
      category: "decorators",
      name: "Sri Krishna Floral Arts & Mandap Decors",
      city: "Guntur",
      state: "Andhra Pradesh",
      locality: "Brodipet",
      address: "Brodipet 4th Line, Guntur, AP - 522002",
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
      priceRange: { startingFee: 180000, feeLabel: "₹1.8 Lakh - ₹5 Lakh", decorStartingFee: "Temple Mandap Floral", category: "under_2_5l" },
      badge: "Verified",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds in 30 mins",
      services: ["Decorators", "Mandap Decor", "Floral Installations", "Entrance Gates"],
      specialty: "Bangalore & Mysore Jasmine Mandaps with Brass Urulis",
      coverImage: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      photos: ["https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80"],
      about: "18 years of crafting the grandest floral mandaps and Venkateswara replicas across Guntur and Vijayawada.",
      packages: [{ name: "Grand Royal Mandap", price: "₹2,80,000", description: "Carved temple mandap with 5,000 fresh lotus and yellow marigolds.", features: ["Full dome", "Royal throne chairs", "Pathway pillars"] }],
      reviews: [{ author: "Venkatesh & Sravani", weddingDate: "January 2026", rating: 5, venue: "Guntur", title: "Looked like Tirumala temple!", text: "Pure divine atmosphere." }],
      faqs: [{ q: "Do you provide 3D renders?", a: "Yes, photorealistic 3D renders provided." }]
    },

    // --- ANDHRA PRADESH: CATERING ---
    {
      id: "vow-ap-ct-01",
      category: "catering",
      name: "Subham Andhra Bhojanam & Catering Masters",
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
      priceRange: { startingFee: 450, feeLabel: "₹450 - ₹950 / plate", decorStartingFee: "Banana Leaf Traditional", category: "under_2_5l" },
      badge: "Handpicked",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds in 20 mins",
      services: ["Catering", "Pure Veg Feast", "Banana Leaf Service", "Live Counter Sweets"],
      specialty: "Authentic Andhra 32-Item Vindu Bhojanam with Pootharekulu",
      coverImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
      photos: ["https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80"],
      about: "Legendary Andhra feast: Atreyapuram Pootharekulu, hot Kakinada Kaja, Guntur Gongura, and fresh banana leaf service.",
      packages: [{ name: "32-Item Vindu Bhojanam", price: "₹650 / plate", description: "Vegetarian feast with 4 live hot sweet counters.", features: ["Pootharekulu live counter", "Ulava charu", "Mineral water"] }],
      reviews: [{ author: "Choudhary Family", weddingDate: "January 2026", rating: 5, venue: "Vijayawada", title: "Unforgettable food!", text: "Every guest praised the catering." }],
      faqs: [{ q: "Do you offer food tasting?", a: "Yes, free tasting session for family." }]
    },

    // --- ANDHRA PRADESH: MEHNDI ---
    {
      id: "vow-ap-mh-01",
      category: "mehndi",
      name: "Sri Valli Organic Bridal Mehndi",
      city: "Visakhapatnam (Vizag)",
      state: "Andhra Pradesh",
      locality: "MVP Colony",
      address: "Sector 3, MVP Colony, Visakhapatnam, AP - 530017",
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
      priceRange: { startingFee: 8000, feeLabel: "₹8,000 - ₹22,000", decorStartingFee: "Chemical-Free Organic Henna", category: "under_2_5l" },
      badge: "Verified",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds in 15 mins",
      services: ["Mehndi", "Bridal Mehndi", "Portrait Mehndi", "Guest Mehndi"],
      specialty: "Custom Couple Portraits & Lord Balaji Motifs",
      coverImage: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      photos: ["https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"],
      about: "100% natural, chemical-free Sojat henna cones with dark maroon stain guarantee.",
      packages: [{ name: "Full Bridal Arms & Feet", price: "₹14,000", description: "Elbows to fingers with couple sketches.", features: ["Dark stain guarantee", "Herbal aftercare oil"] }],
      reviews: [{ author: "Meghana P.", weddingDate: "December 2025", rating: 5, venue: "Vizag", title: "Darkest maroon color!", text: "Breathtaking portrait work." }],
      faqs: [{ q: "When to apply?", a: "48 hours before wedding for peak color." }]
    },

    // --- ANDHRA PRADESH: INVITATIONS ---
    {
      id: "vow-ap-in-01",
      category: "invitations",
      name: "Lipi Luxury Wedding Cards & Digital E-Invites",
      city: "Vijayawada",
      state: "Andhra Pradesh",
      locality: "Governorpet",
      address: "Governorpet, Vijayawada, AP - 520002",
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
      priceRange: { startingFee: 45, feeLabel: "₹45 - ₹450 / card", decorStartingFee: "Box Hampers: ₹350+", category: "under_2_5l" },
      badge: "Verified",
      isVerified: true,
      isFeatured: false,
      responseTime: "⚡ Responds in 1 hour",
      services: ["Invitations", "Handmade Paper Cards", "Box Hampers", "WhatsApp E-Cards"],
      specialty: "Velvet Boxed Invitations with Brass Idols",
      coverImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      photos: ["https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"],
      about: "Foremost wedding stationery studio in AP. Velvet boxes, foil stamping, and animated video invites.",
      packages: [{ name: "Velvet Box Suite", price: "₹250 / box", description: "Hardbound box with gold lettering.", features: ["Hot foil stamping", "Free WhatsApp video"] }],
      reviews: [{ author: "Kalyan Family", weddingDate: "January 2026", rating: 5, venue: "Vijayawada", title: "Top-class cards", text: "Royal finish praised by all." }],
      faqs: [{ q: "Bilingual Telugu cards?", a: "Yes, traditional Telugu and English supported." }]
    },

    // --- CHENNAI PLANNERS ---
    {
      id: "vow-chn-01",
      category: "planners",
      name: "The Royal Knot Luxury Weddings",
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
      priceRange: { startingFee: 350000, feeLabel: "₹3.5 Lakh - ₹6 Lakh", decorStartingFee: "₹2,50,000", category: "2_5l_to_4l" },
      badge: "Handpicked",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds in 1 hour",
      services: ["Full Planning", "Decor & Styling", "Destination Weddings", "Hospitality & Logistics"],
      guestCapacities: ["100-300", "300-600", "600-1000", "1000+"],
      specialty: "Luxury Beachfront & Heritage Palatial Weddings",
      coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      photos: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"],
      about: "Award-winning bespoke planning studio based in Chennai. Specializing in luxury destination weddings along ECR.",
      packages: [{ name: "Emerald Package", price: "₹2,50,000", description: "Coordination & styling.", features: ["Vendor management", "Timeline design"] }],
      reviews: [{ author: "Kavya & Anirudh", weddingDate: "January 2026", rating: 5, venue: "InterContinental Resort", title: "Dream wedding!", text: "Completely stress-free 3-day wedding." }],
      faqs: [{ q: "Advance policy?", a: "25% advance to block dates." }]
    },
    {
      id: "vow-chn-02",
      category: "planners",
      name: "Madras Event House & Weddings",
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
      priceRange: { startingFee: 220000, feeLabel: "₹2.2 Lakh - ₹3.8 Lakh", decorStartingFee: "₹1,80,000", category: "under_2_5l" },
      badge: "Top Rated 2026",
      isVerified: true,
      isFeatured: true,
      responseTime: "⚡ Responds in 2 hours",
      services: ["Full Planning", "Partial Planning", "Decor & Styling", "Day-of Coordination"],
      guestCapacities: ["100-300", "300-600", "600-1000"],
      specialty: "Contemporary South Indian Traditions & Vibrant Sangeets",
      coverImage: "https://images.unsplash.com/photo-1545232979-fbf68fe9c132?auto=format&fit=crop&w=1200&q=80",
      photos: ["https://images.unsplash.com/photo-1545232979-fbf68fe9c132?auto=format&fit=crop&w=1200&q=80"],
      about: "Madras Event House brings cultural authenticity and modern design to mandapam weddings in central Chennai.",
      packages: [{ name: "Classic Coordination", price: "₹1,80,000", description: "Month-of and day-of management.", features: ["Vendor coordination", "Guest desk"] }],
      reviews: [{ author: "Archana & Vignesh", weddingDate: "December 2025", rating: 5, venue: "The Leela Palace", title: "Flawless planning!", text: "Handled everything with immense patience." }],
      faqs: [{ q: "Do you coordinate with catering masters?", a: "Yes, we work with leading traditional masters." }]
    }
  ];

  const state = {
    vendors: [...VENDORS_MASTER],
    activeCity: "All Andhra Pradesh",
    activeCategory: "planners",
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
    shortlist: safeGet('vowora_shortlist', []),
    enquiries: safeGet('vowora_enquiries', []),
    checklist: safeGet('vowora_checklist', []),
    totalBudget: parseInt(safeGet('vowora_budget', 2500000), 10),
    carouselIndices: {}
  };

  state.vendors.forEach(v => { state.carouselIndices[v.id] = 0; });

  function formatINR(val) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
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
      // Category filter
      if (state.activeCategory && vendor.category !== state.activeCategory) {
        return false;
      }

      // City filter
      if (state.activeCity === "All Andhra Pradesh") {
        if (vendor.state !== "Andhra Pradesh") return false;
      } else if (state.activeCity) {
        if (vendor.city.toLowerCase() !== state.activeCity.toLowerCase()) {
          return false;
        }
      }

      // Search query
      if (state.searchQuery.trim()) {
        const q = state.searchQuery.toLowerCase();
        const mName = vendor.name.toLowerCase().includes(q);
        const mLoc = vendor.locality.toLowerCase().includes(q);
        const mCity = vendor.city.toLowerCase().includes(q);
        const mSpec = vendor.specialty ? vendor.specialty.toLowerCase().includes(q) : false;
        if (!mName && !mLoc && !mCity && !mSpec) return false;
      }

      if (state.handpickedOnly && vendor.badge !== 'Handpicked') return false;
      if (state.verifiedOnly && !vendor.isVerified) return false;

      if (state.selectedLocalities.length > 0) {
        const match = state.selectedLocalities.some(l => 
          vendor.locality.toLowerCase().includes(l.toLowerCase()) || 
          vendor.city.toLowerCase().includes(l.toLowerCase())
        );
        if (!match) return false;
      }

      if (state.selectedBudget !== 'all' && vendor.priceRange.category !== state.selectedBudget) return false;
      if (state.selectedRating > 0 && vendor.rating < state.selectedRating) return false;

      if (state.selectedServices.length > 0) {
        const match = state.selectedServices.every(s => vendor.services.includes(s));
        if (!match) return false;
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

  function updatePageTitles() {
    const titleCategory = CATEGORY_TITLES[state.activeCategory] || "Wedding Vendors";
    const locText = state.activeCity || "Andhra Pradesh";
    
    const pageTitle = document.getElementById('directory-page-title');
    if (pageTitle) pageTitle.textContent = `${titleCategory} in ${locText}`;

    const breadcrumb = document.getElementById('breadcrumb-category');
    if (breadcrumb) breadcrumb.textContent = `${titleCategory} in ${locText}`;

    const subtitle = document.getElementById('directory-page-subtitle');
    const filtered = getFilteredVendors();
    if (subtitle) {
      subtitle.innerHTML = `Showing <span id="vendor-results-count" class="font-bold text-[#e72e76]">${filtered.length} verified results</span> | Google Maps Business Index & Portfolios`;
    }

    const cityLabel = document.getElementById('current-city-label');
    if (cityLabel) cityLabel.textContent = state.activeCity;
  }

  function renderVendorGrid() {
    const container = document.getElementById('vendors-grid-container');
    if (!container) return;

    updatePageTitles();
    const filtered = getFilteredVendors();

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-gray-100 p-8">
          <div class="w-14 h-14 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">✕</div>
          <h3 class="text-base font-bold text-gray-800 mb-1">No ${CATEGORY_TITLES[state.activeCategory] || 'Vendors'} Found</h3>
          <p class="text-gray-500 text-xs mb-4">No listings matching your current filter in ${state.activeCity}. Try switching to "All Andhra Pradesh" or clearing filters.</p>
          <button id="empty-reset-btn" class="px-5 py-2 bg-[#e72e76] text-white rounded-lg text-xs font-bold">Reset Filters to All Andhra Pradesh</button>
        </div>
      `;
      const btn = document.getElementById('empty-reset-btn');
      if (btn) btn.addEventListener('click', () => {
        state.activeCity = "All Andhra Pradesh";
        resetAllFilters();
      });
      return;
    }

    container.className = state.viewMode === 'grid'
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

      const googleBadge = vendor.googleBusinessVerified ? `
        <span class="bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 shadow-2xs">
          <span>📍</span> Google Maps Verified
        </span>
      ` : '';

      return `
        <div class="vendor-card bg-white rounded-xl overflow-hidden flex flex-col justify-between" data-vendor-id="${vendor.id}">
          <div class="relative w-full h-52 bg-gray-100 overflow-hidden group">
            <img src="${curPhoto}" alt="${vendor.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer vendor-trigger" data-vendor-id="${vendor.id}" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
            
            <div class="absolute top-2.5 left-2.5 flex flex-wrap items-center gap-1 z-10">
              ${badgeHtml}
              ${googleBadge}
            </div>

            <button class="shortlist-btn absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-600 hover:text-rose-600 z-10" data-vendor-id="${vendor.id}">
              <svg class="w-4 h-4 ${isShortlisted ? 'fill-rose-600 text-rose-600' : 'text-gray-600'}" fill="${isShortlisted ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            ${vendor.photos.length > 1 ? `
              <button class="carousel-btn prev-photo absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center text-xs z-10" data-vendor-id="${vendor.id}">‹</button>
              <button class="carousel-btn next-photo absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center text-xs z-10" data-vendor-id="${vendor.id}">›</button>
              <div class="absolute bottom-2 right-2.5 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded z-10">${curIdx + 1}/${vendor.photos.length} photos</div>
            ` : ''}

            <div class="absolute bottom-2 left-3 text-white z-10 pointer-events-none">
              <span class="text-[11px] font-medium text-rose-200">📍 ${vendor.locality}, ${vendor.city}</span>
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
                <span>📍 ${vendor.locality}, ${vendor.city}</span>
                <span>•</span>
                <span class="text-blue-600 font-semibold">${vendor.googleReviewCount} Google Reviews</span>
              </div>

              <div class="bg-[#FFF8F9] rounded-lg p-2.5 mb-2.5 border border-[#FFE7EE]">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-gray-600 font-medium">Pricing:</span>
                  <span class="text-rose-700 font-bold text-xs">${vendor.priceRange.feeLabel}</span>
                </div>
                ${vendor.priceRange.decorStartingFee ? `
                  <div class="flex items-center justify-between text-[10px] text-gray-500 mt-1 pt-1 border-t border-[#FFE7EE]">
                    <span>Package:</span>
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
    }).join('');

    attachCardEvents();
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
          alert(`Direct Vendor Contact:\n\n${v.name}\n📍 Address: ${v.address}\n📞 Phone: ${v.phone}\n⭐ Google Rating: ${v.googleMapsRating}★ (${v.googleReviewCount} reviews)\n\nClick OK to message on WhatsApp.`);
          window.open(`https://wa.me/${v.whatsapp}?text=Hi%20${encodeURIComponent(v.name)},%20I%20found%20your%20profile%20on%20Vowora%20and%20would%20love%20to%20discuss%20pricing!`, '_blank');
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
            <span class="text-xs text-rose-300 font-semibold block">📍 ${v.locality}, ${v.city}, ${v.state}</span>
            <h2 class="text-xl font-bold font-serif text-white">${v.name}</h2>
          </div>
          <div class="text-right">
            <div class="bg-[#008459] text-white text-xs font-bold px-2 py-1 rounded inline-block">★ ${v.rating}</div>
            <span class="text-[10px] text-gray-300 block mt-1">${v.googleReviewCount} Google Maps Reviews</span>
          </div>
        </div>
      </div>
      <div class="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 space-y-4">
          <div>
            <h4 class="font-bold text-sm text-gray-900 mb-1">About the Business</h4>
            <p class="text-xs text-gray-600 leading-relaxed">${v.about}</p>
          </div>
          <div class="p-3 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-xl">🗺️</span>
              <div>
                <span class="text-xs font-bold text-blue-900 block">Verified on Google Maps</span>
                <span class="text-[11px] text-blue-700">${v.address}</span>
              </div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.name + ' ' + v.city + ' ' + v.state)}" target="_blank" class="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700">
              Open in Google Maps ↗
            </a>
          </div>
          <div>
            <h4 class="font-bold text-sm text-gray-900 mb-2">Packages & Services</h4>
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
            <h4 class="text-xs font-bold text-gray-900 mb-2">Request Quote & Pricing</h4>
            <form id="modal-quote-form" class="space-y-2">
              <input type="text" id="mq-name" required placeholder="Your Name" class="w-full text-xs p-2 border border-gray-300 rounded bg-white" />
              <input type="tel" id="mq-phone" required placeholder="Phone / WhatsApp" class="w-full text-xs p-2 border border-gray-300 rounded bg-white" />
              <input type="date" id="mq-date" required class="w-full text-xs p-2 border border-gray-300 rounded bg-white" />
              <button type="submit" class="w-full py-2 bg-[#e72e76] text-white text-xs font-bold rounded">Get Best Quote</button>
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
        alert(`Message sent to ${v.name} in ${v.city}, Andhra Pradesh!`);
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
    if (title) title.textContent = `${vendor.name} (${vendor.city}, ${vendor.state})`;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeQuoteModal() {
    const modal = document.getElementById('lead-quote-modal');
    if (modal) modal.classList.add('hidden');
    state.quoteVendor = null;
    document.body.style.overflow = '';
  }

  function renderLocalityFilterList() {
    const container = document.getElementById('locality-filter-list');
    if (!container) return;

    const localities = LOCALITIES_MAP[state.activeCity] || LOCALITIES_MAP["All Andhra Pradesh"];
    const filtered = localities.filter(l => l.toLowerCase().includes(state.localitySearch.toLowerCase()));

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

    renderLocalityFilterList();
    renderVendorGrid();
  }

  function renderCitySelectorGrid() {
    const container = document.getElementById('city-selector-grid');
    if (!container) return;

    container.innerHTML = CITIES_DATA.map(c => `
      <button class="city-btn p-3 rounded-xl border text-left transition-all ${c.name === state.activeCity ? 'border-[#e72e76] bg-rose-50 text-[#e72e76] font-bold' : 'border-gray-200 hover:border-gray-300 text-gray-700'}" data-city="${c.name}">
        <span class="text-xs block font-bold">${c.isAP ? '📍 ' : ''}${c.name}</span>
        <span class="text-[10px] text-gray-400 block">${c.count.toLocaleString()} Google Map Listings</span>
      </button>
    `).join('');

    container.querySelectorAll('.city-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeCity = btn.dataset.city;
        state.selectedLocalities = [];
        document.getElementById('city-selector-modal').classList.add('hidden');
        renderLocalityFilterList();
        renderVendorGrid();
      });
    });
  }

  function setupCategoryRibbon() {
    document.querySelectorAll('.category-ribbon-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.category;
        state.activeCategory = cat;

        // Update active circle UI
        document.querySelectorAll('.category-ribbon-btn').forEach(b => {
          const circle = b.querySelector('.ribbon-circle');
          const label = b.querySelector('.ribbon-label');
          if (b.dataset.category === cat) {
            circle.className = 'ribbon-circle w-14 h-14 rounded-full bg-rose-50 border-2 border-[#e72e76] flex items-center justify-center text-xl shadow-xs scale-105';
            label.className = 'ribbon-label text-[11px] font-bold text-[#e72e76] mt-1.5';
          } else {
            circle.className = 'ribbon-circle w-14 h-14 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-xl group-hover:border-rose-300 transition-transform';
            label.className = 'ribbon-label text-[11px] font-medium text-gray-600 mt-1.5 group-hover:text-[#e72e76]';
          }
        });

        renderVendorGrid();
      });
    });
  }

  function renderShortlistDrawer() {
    const c = document.getElementById('shortlist-drawer-content');
    if (!c) return;
    const list = state.vendors.filter(v => state.shortlist.includes(v.id));
    if (list.length === 0) {
      c.innerHTML = `<div class="py-12 text-center text-gray-400 text-xs"><span class="text-2xl block mb-1">❤️</span>No shortlisted vendors yet.</div>`;
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

  function init() {
    setupCategoryRibbon();
    renderCitySelectorGrid();
    renderLocalityFilterList();
    renderVendorGrid();
    updateCounters();
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

    const clearBtn = document.getElementById('clear-filters-btn');
    if (clearBtn) clearBtn.addEventListener('click', resetAllFilters);

    // Drawers & Modals
    const sBtn = document.getElementById('open-shortlist-btn');
    const sClose = document.getElementById('close-shortlist-btn');
    const sDrawer = document.getElementById('shortlist-drawer');
    if (sBtn && sDrawer) sBtn.addEventListener('click', () => { renderShortlistDrawer(); sDrawer.classList.remove('hidden'); });
    if (sClose && sDrawer) sClose.addEventListener('click', () => sDrawer.classList.add('hidden'));

    const iBtn = document.getElementById('open-inquiries-btn');
    const iClose = document.getElementById('close-inquiries-btn');
    const iDrawer = document.getElementById('inquiries-drawer');
    if (iBtn && iDrawer) iBtn.addEventListener('click', () => { renderInquiriesDrawer(); iDrawer.classList.remove('hidden'); });
    if (iClose && iDrawer) iClose.addEventListener('click', () => iDrawer.classList.add('hidden'));

    const cBtn = document.getElementById('city-selector-btn');
    const cModal = document.getElementById('city-selector-modal');
    const cClose = document.getElementById('close-city-modal-btn');
    if (cBtn && cModal) cBtn.addEventListener('click', () => cModal.classList.remove('hidden'));
    if (cClose && cModal) cClose.addEventListener('click', () => cModal.classList.add('hidden'));

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
        alert(`🎉 Quote requested from ${state.quoteVendor.name}!`);
        closeQuoteModal();
        renderInquiriesDrawer();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
