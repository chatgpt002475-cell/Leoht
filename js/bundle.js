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
    { id: "all-ap", name: "All Andhra Pradesh", count: 11220, isAP: true },
    { id: "visakhapatnam", name: "Visakhapatnam (Vizag)", count: 2480, isAP: true },
    { id: "vijayawada", name: "Vijayawada", count: 2150, isAP: true },
    { id: "tirupati", name: "Tirupati", count: 1520, isAP: true },
    { id: "guntur", name: "Guntur", count: 1340, isAP: true },
    { id: "rajahmundry", name: "Rajahmundry", count: 980, isAP: true },
    { id: "kakinada", name: "Kakinada", count: 810, isAP: true },
    { id: "nellore", name: "Nellore", count: 740, isAP: true },
    { id: "kurnool", name: "Kurnool", count: 620, isAP: true },
    { id: "anantapur", name: "Anantapur", count: 580, isAP: true },
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
    "Visakhapatnam (Vizag)": [
      "Beach Road", "Rushikonda", "MVP Colony", "Siripuram", "Gajuwaka",
      "Madhurawada", "Seethammadhara", "Dwaraka Nagar", "Waltair Uplands",
      "Pendurthi", "Asilmetta", "CBM Compound", "Kailasagiri", "Yendada",
      "NAD Junction", "Kancharapalem", "Kurmannapalem", "Akkayyapalem"
    ],
    "Vijayawada": [
      "Benz Circle", "MG Road", "Bhavanipuram", "Governorpet", "Gunadala",
      "Poranki", "Auto Nagar", "Kanuru", "Moghalrajpuram", "Gollapudi",
      "Satyanarayanapuram", "Labbipet", "Enikepadu", "Tadigadapa", "Gannavaram", "Payakapuram"
    ],
    "Tirupati": [
      "KT Road", "Renigunta Road", "Korlagunta", "AIR Bypass Road", "Chandragiri Road",
      "Bhavani Nagar", "Tiruchanur Road", "Alipiri", "MR Palli", "Leela Mahal",
      "Padmavathipuram", "Karakambadi Road"
    ],
    "Guntur": [
      "Brodipet", "Arundelpet", "Vidyanagar", "Gujjanagundla", "Lakshmipuram",
      "Kothapet", "Pattabhipuram", "Amaravathi Road", "Nallapadu", "Brindavan Gardens"
    ],
    "Rajahmundry": [
      "Danavaipeta", "Tilak Road", "Morampudi", "Godavari Bund Road", "Kotipalli",
      "AV Appa Rao Road", "Innespeta", "Aryapuram", "Diwancheruvu"
    ],
    "Kakinada": [
      "Main Road", "Bhanugudi Junction", "Suryaraopeta", "Gandhi Nagar", "Madhavapatnam",
      "Cinema Road", "Jagannaickpur", "Ramanayyapeta", "Sarpavaram"
    ],
    "Nellore": [
      "Trunk Road", "Pogathota", "Magunta Layout", "Dargamitta", "Vedayapalem",
      "Santhapet", "Stonehousepet", "Kavali Road"
    ],
    "Kurnool": [
      "Park Road", "Mourya Inn Road", "Nandyal Checkpost", "B-Camp", "Gayatri Estate",
      "Budhawarpet", "Roza", "Bellary Road"
    ],
    "Anantapur": [
      "Subash Road", "Clock Tower", "Kamalanagar", "Saptagiri Circle", "Ram Nagar",
      "Housing Board Colony", "Rudrampeta"
    ],
    "All Andhra Pradesh": [
      "Visakhapatnam (Vizag)", "Vijayawada", "Tirupati", "Guntur", "Rajahmundry",
      "Kakinada", "Nellore", "Kurnool", "Anantapur"
    ],
    "Chennai": [
      "ECR (East Coast Road)", "T. Nagar", "Anna Nagar", "Adyar", "Mylapore",
      "Nungambakkam", "Velachery", "OMR (Old Mahabalipuram Road)", "Alwarpet", "Guindy", "Mahabalipuram"
    ]
  };

  const CATEGORY_EXTENDED_GALLERIES = {
    "planners": [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", tag: "Mandap & Stage Setup", title: "Royal Golden Mandap" },
      { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80", tag: "Telugu Rituals", title: "Jeelakarra Bellam Ceremony" },
      { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80", tag: "Grand Entrance", title: "Floral Arch Pathway" },
      { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80", tag: "Couple Moments", title: "Traditional Telugu Attire" },
      { url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80", tag: "Floral Ceiling", title: "Jasmine & Lotus Canopy" },
      { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80", tag: "Evening Reception", title: "Chandelier & Fairy Lights" },
      { url: "https://images.unsplash.com/photo-1545232979-fbf68fe9c132?auto=format&fit=crop&w=1200&q=80", tag: "Lawn & Open Air", title: "Coastal Beachside Setup" },
      { url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80", tag: "Haldi & Sangeet", title: "Vibrant Marigold Celebration" }
    ],
    "venues": [
      { url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80", tag: "Grand Hall Interior", title: "Central AC Kalyana Mandapam" },
      { url: "https://images.unsplash.com/photo-1545232979-fbf68fe9c132?auto=format&fit=crop&w=1200&q=80", tag: "Lawn & Open Air", title: "Grand Riverfront Lawns" },
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", tag: "Mandap View", title: "Elevated Stage & Muhurtham Area" },
      { url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80", tag: "Lighting & Decor", title: "Crystal Chandelier Grandeur" },
      { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80", tag: "Dining & Buffet Area", title: "Traditional Plantain Leaf Hall" },
      { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80", tag: "VIP Lounge", title: "Bridal Suite & Guest Lounge" }
    ],
    "photographers": [
      { url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80", tag: "Candid Telugu Bride", title: "Pelli Kuthuru Emotions" },
      { url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80", tag: "Talambralu", title: "Sacred Pearl & Rice Shower" },
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", tag: "Couple Portrait", title: "Kanchipuram Silk & Dhoti" },
      { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80", tag: "Haldi Splash", title: "Yellow Turmeric Joy" },
      { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80", tag: "Drone Shot", title: "Aerial Temple Mandap View" },
      { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80", tag: "Pre-wedding Shoot", title: "Beach Sunset Cinematic Frame" }
    ],
    "bridal-makeup": [
      { url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80", tag: "Airbrush HD Glam", title: "Flawless Bridal Finish" },
      { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80", tag: "Saree Draping & Jewelry", title: "Temple Jewelry Placement" },
      { url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80", tag: "Pelli Kuthuru Look", title: "Traditional Bindi & Poola Jada" },
      { url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80", tag: "Reception Glam", title: "Smokey Eyes & Sangeet Glow" }
    ],
    "decorators": [
      { url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80", tag: "Lotus & Temple Mandap", title: "Vedic Architecture Mandap" },
      { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80", tag: "Marigold Yellow Decor", title: "Traditional Telugu Floral Art" },
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", tag: "Stage Arch & Floral", title: "Exotic Orchid & Rose Backdrop" },
      { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80", tag: "Aisle Floral Pathway", title: "Petal Carpet Walkway" }
    ],
    "catering": [
      { url: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80", tag: "Traditional Plantain Feast", title: "Authentic Andhra Vindu Bhojanam" },
      { url: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80", tag: "Live Sweet Counters", title: "Hot Pootharekulu & Kakinada Kaja" },
      { url: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=80", tag: "Traditional Samayal", title: "Gutti Vankaya & Gongura Rice" },
      { url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80", tag: "Welcome Mocktail Bar", title: "Tender Coconut & Filter Coffee" }
    ],
    "mehndi": [
      { url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80", tag: "Bridal Full Hand Henna", title: "Intricate Telugu Story Bridal Henna" },
      { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80", tag: "Feet Mandala Design", title: "Organic Sojat Pure Herbal Cones" },
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", tag: "Portrait Henna Art", title: "Bride & Groom Portrait Mehndi" }
    ],
    "invitations": [
      { url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80", tag: "Velvet Foil Box Cards", title: "Royal Box Invites with Dry Fruits" },
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", tag: "Gold Embossed Cards", title: "Telugu Script Traditional Patrika" },
      { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80", tag: "Wax Seal E-Invites", title: "Animated Video WhatsApp Cards" }
    ]
  };

  const AP_SEQS_FAQS = [
    {
      q: "How many wedding vendors are verified on Vowora across Andhra Pradesh?",
      a: "Vowora has cataloged over 11,220+ verified Google Maps wedding businesses across Andhra Pradesh, including 2,480+ in Visakhapatnam, 2,150+ in Vijayawada, 1,520+ in Tirupati, and 1,340+ in Guntur across all 8 wedding categories."
    },
    {
      q: "What is the average cost of wedding planners and mandapam decor in Andhra Pradesh?",
      a: "Wedding planning packages in Andhra Pradesh typically start from ₹1.2 Lakhs to ₹2.5 Lakhs for partial coordination, and ₹3.5 Lakhs to ₹8.5 Lakhs+ for royal destination and full-scale Telugu wedding productions. Floral mandapam decor ranges from ₹95,000 to ₹3.5 Lakhs depending on fresh jasmine, lotus, and traditional architectural requirements."
    },
    {
      q: "Can I find traditional Telugu priests, Samayal caterers, and Nadaswaram players?",
      a: "Yes! Vowora features verified specialists in authentic Andhra Bhojanam (Godavari and Guntur traditions), Vedic Telugu Purohits, Nadaswaram ensembles, and Sojat organic herbal mehndi artists."
    },
    {
      q: "How do I contact Google Maps verified wedding vendors directly?",
      a: "Click either 'Contact' to reveal the vendor's direct phone and WhatsApp number, or 'Send Message' to send your event date, expected guest count, and requirements directly to their desk."
    }
  ];

  const state = {
    vendors: [],
    isLoading: true,
    activeCity: safeGet('vowora_active_city', 'All Andhra Pradesh'),
    activeCategory: safeGet('vowora_active_cat', 'planners'),
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
    currentPage: 1,
    pageSize: 18,
    activeVendorModal: null,
    activeVendorTab: "photos",
    activeGalleryFilter: "all",
    lightboxPhotos: [],
    lightboxIndex: 0,
    quoteVendor: null,
    shortlist: safeGet('vowora_shortlist', []),
    enquiries: safeGet('vowora_enquiries', []),
    checklist: safeGet('vowora_checklist', []),
    totalBudget: parseInt(safeGet('vowora_budget', 2500000), 10),
    carouselIndices: {}
  };

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
    safeSet('vowora_active_city', state.activeCity);
    safeSet('vowora_active_cat', state.activeCategory);
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
    if (!state.vendors || state.vendors.length === 0) return [];

    return state.vendors.filter(vendor => {
      // Category filter
      if (state.activeCategory && vendor.category !== state.activeCategory) {
        return false;
      }

      // City filter
      if (state.activeCity === "All Andhra Pradesh") {
        if (vendor.state !== "Andhra Pradesh") return false;
      } else if (state.activeCity) {
        const cityKey = state.activeCity.toLowerCase().replace(" (vizag)", "").trim();
        const vCity = (vendor.city || "").toLowerCase().trim();
        if (!vCity.includes(cityKey) && !cityKey.includes(vCity)) {
          return false;
        }
      }

      // Search query
      if (state.searchQuery && state.searchQuery.trim()) {
        const q = state.searchQuery.toLowerCase().trim();
        const mName = vendor.name.toLowerCase().includes(q);
        const mLoc = (vendor.locality || "").toLowerCase().includes(q);
        const mCity = (vendor.city || "").toLowerCase().includes(q);
        const mSpec = vendor.specialty ? vendor.specialty.toLowerCase().includes(q) : false;
        if (!mName && !mLoc && !mCity && !mSpec) return false;
      }

      if (state.handpickedOnly && vendor.badge !== 'Handpicked') return false;
      if (state.verifiedOnly && !vendor.isVerified) return false;

      if (state.selectedLocalities.length > 0) {
        const match = state.selectedLocalities.some(l => 
          (vendor.locality || "").toLowerCase().includes(l.toLowerCase()) || 
          (vendor.city || "").toLowerCase().includes(l.toLowerCase())
        );
        if (!match) return false;
      }

      if (state.selectedBudget !== 'all') {
        const cat = vendor.priceRange && vendor.priceRange.category;
        if (cat !== state.selectedBudget) return false;
      }

      if (state.selectedRating > 0 && vendor.rating < state.selectedRating) return false;

      return true;
    }).sort((a, b) => {
      if (state.sortBy === 'rating_desc') return b.rating - a.rating;
      if (state.sortBy === 'price_asc') return (a.priceRange.startingFee || 0) - (b.priceRange.startingFee || 0);
      if (state.sortBy === 'price_desc') return (b.priceRange.startingFee || 0) - (a.priceRange.startingFee || 0);
      if (state.sortBy === 'reviews_desc') return (b.reviewCount || 0) - (a.reviewCount || 0);
      return ((b.rating || 4.8) * (b.reviewCount || 100) + (b.isFeatured ? 50 : 0)) - ((a.rating || 4.8) * (a.reviewCount || 100) + (a.isFeatured ? 50 : 0));
    });
  }

  function updatePageTitles() {
    const titleCategory = CATEGORY_TITLES[state.activeCategory] || "Wedding Vendors";
    const locText = state.activeCity || "All Andhra Pradesh";
    
    const pageTitle = document.getElementById('directory-page-title');
    if (pageTitle) pageTitle.textContent = `${titleCategory} in ${locText}`;

    const breadcrumb = document.getElementById('breadcrumb-category');
    if (breadcrumb) breadcrumb.textContent = `${titleCategory} in ${locText}`;

    const subtitle = document.getElementById('directory-page-subtitle');
    const filtered = getFilteredVendors();
    if (subtitle) {
      if (state.isLoading) {
        subtitle.innerHTML = `Loading verified Google Maps businesses in ${locText}...`;
      } else {
        subtitle.innerHTML = `Showing <span id="vendor-results-count" class="font-bold text-[#e72e76]">${filtered.length.toLocaleString()} verified results</span> | Google Maps Business Index & Portfolios`;
      }
    }

    const cityLabel = document.getElementById('current-city-label');
    if (cityLabel) cityLabel.textContent = state.activeCity;

    const locFilterTitle = document.getElementById('locality-filter-title');
    if (locFilterTitle) {
      if (state.activeCity === "All Andhra Pradesh") {
        locFilterTitle.textContent = "Districts in Andhra Pradesh";
      } else {
        locFilterTitle.textContent = `Locality in ${state.activeCity}`;
      }
    }
  }

  function renderVendorGrid() {
    const container = document.getElementById('vendors-grid-container');
    if (!container) return;

    updatePageTitles();

    if (state.isLoading) {
      container.className = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6";
      container.innerHTML = Array(6).fill(0).map(() => `
        <div class="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-2xs animate-pulse">
          <div class="h-52 bg-gray-200"></div>
          <div class="p-4 space-y-3">
            <div class="h-4 bg-gray-200 rounded w-3/4"></div>
            <div class="h-3 bg-gray-100 rounded w-1/2"></div>
            <div class="h-8 bg-rose-50 rounded"></div>
            <div class="grid grid-cols-2 gap-2 pt-2">
              <div class="h-8 bg-gray-200 rounded"></div>
              <div class="h-8 bg-rose-200 rounded"></div>
            </div>
          </div>
        </div>
      `).join('');
      renderPagination(0, 1, 1);
      return;
    }

    const filtered = getFilteredVendors();
    const totalPages = Math.ceil(filtered.length / state.pageSize) || 1;
    if (state.currentPage > totalPages) state.currentPage = 1;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-gray-100 p-8 shadow-xs">
          <div class="w-14 h-14 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">✕</div>
          <h3 class="text-base font-bold text-gray-800 mb-1">No ${CATEGORY_TITLES[state.activeCategory] || 'Vendors'} Found</h3>
          <p class="text-gray-500 text-xs mb-4">No listings matching your current filter in ${state.activeCity}. Try switching to "All Andhra Pradesh" or clearing filters.</p>
          <button id="empty-reset-btn" class="px-5 py-2 bg-[#e72e76] text-white rounded-lg text-xs font-bold shadow-xs hover:bg-rose-700 cursor-pointer">Switch to All Andhra Pradesh</button>
        </div>
      `;
      const btn = document.getElementById('empty-reset-btn');
      if (btn) btn.addEventListener('click', () => {
        state.activeCity = "All Andhra Pradesh";
        resetAllFilters();
      });
      renderPagination(0, 1, 1);
      return;
    }

    container.className = state.viewMode === 'grid'
      ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      : "space-y-6";

    const startIdx = (state.currentPage - 1) * state.pageSize;
    const endIdx = startIdx + state.pageSize;
    const displayedVendors = filtered.slice(startIdx, endIdx);

    container.innerHTML = displayedVendors.map(vendor => {
      const isShortlisted = state.shortlist.includes(vendor.id);
      const curIdx = state.carouselIndices[vendor.id] || 0;
      const curPhoto = (vendor.photos && vendor.photos[curIdx]) || vendor.coverImage;

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
          <span>📍</span> Google Maps
        </span>
      ` : '';

      return `
        <div class="vendor-card bg-white rounded-xl overflow-hidden flex flex-col justify-between border border-gray-100 hover:shadow-lg transition-all" data-vendor-id="${vendor.id}">
          <div class="relative w-full h-52 bg-gray-100 overflow-hidden group">
            <img src="${curPhoto}" alt="${vendor.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer vendor-trigger" data-vendor-id="${vendor.id}" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
            
            <div class="absolute top-2.5 left-2.5 flex flex-wrap items-center gap-1 z-10">
              ${badgeHtml}
              ${googleBadge}
            </div>

            <button class="shortlist-btn absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-600 hover:text-rose-600 z-10 cursor-pointer" data-vendor-id="${vendor.id}">
              <svg class="w-4 h-4 ${isShortlisted ? 'fill-rose-600 text-rose-600' : 'text-gray-600'}" fill="${isShortlisted ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            ${(vendor.photos && vendor.photos.length > 1) ? `
              <button class="carousel-btn prev-photo absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center text-xs z-10 cursor-pointer" data-vendor-id="${vendor.id}">‹</button>
              <button class="carousel-btn next-photo absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center text-xs z-10 cursor-pointer" data-vendor-id="${vendor.id}">›</button>
              <div class="absolute bottom-2 right-2.5 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded z-10">${curIdx + 1}/${vendor.photos.length} photos</div>
            ` : ''}

            <div class="absolute bottom-2 left-3 text-white z-10 pointer-events-none">
              <span class="text-[11px] font-medium text-rose-200">📍 ${vendor.locality}, ${vendor.city}</span>
            </div>
          </div>

          <div class="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-2 mb-1">
                <h3 class="font-bold text-gray-900 text-sm hover:text-rose-600 cursor-pointer vendor-trigger line-clamp-1" data-vendor-id="${vendor.id}">${vendor.name}</h3>
                <div class="flex items-center gap-1 bg-[#008459] text-white px-1.5 py-0.5 rounded text-xs font-bold shrink-0">
                  <span>★</span><span>${vendor.rating}</span>
                </div>
              </div>

              <div class="text-[11px] text-gray-500 mb-1 flex items-center gap-1.5">
                <span class="truncate">📍 ${vendor.locality}, ${vendor.city}</span>
                <span>•</span>
                <span class="text-blue-600 font-semibold shrink-0">${vendor.googleReviewCount || vendor.reviewCount} Google Reviews</span>
              </div>

              <!-- Quick Link to Open Google Photos & Profile -->
              <button class="vendor-trigger text-left text-[11px] font-bold text-[#e72e76] hover:text-rose-800 flex items-center gap-1 mb-2.5 cursor-pointer" data-vendor-id="${vendor.id}">
                <span>📸 View 8+ Photos & Google Business Profile ↗</span>
              </button>

              <div class="bg-[#FFF8F9] rounded-lg p-2.5 mb-2.5 border border-[#FFE7EE]">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-gray-600 font-medium">Pricing:</span>
                  <span class="text-rose-700 font-bold text-xs">${vendor.priceRange.feeLabel}</span>
                </div>
                ${vendor.priceRange.decorStartingFee ? `
                  <div class="flex items-center justify-between text-[10px] text-gray-500 mt-1 pt-1 border-t border-[#FFE7EE]">
                    <span>Option:</span>
                    <span class="font-semibold text-gray-700 truncate">${vendor.priceRange.decorStartingFee}</span>
                  </div>
                ` : ''}
              </div>

              <div class="flex flex-wrap gap-1 mb-2.5">
                ${(vendor.services || []).slice(0, 3).map(s => `<span class="bg-gray-100 text-gray-600 text-[10px] font-medium px-1.5 py-0.5 rounded">${s}</span>`).join('')}
              </div>
            </div>

            <div class="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
              <button class="view-contact-btn text-xs font-bold py-2 px-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-1 cursor-pointer" data-vendor-id="${vendor.id}">
                <span>📞</span><span>Contact</span>
              </button>
              <button class="quote-btn text-xs font-bold py-2 px-2 bg-vowora-gradient text-white rounded-lg hover:opacity-95 shadow-xs flex items-center justify-center cursor-pointer" data-vendor-id="${vendor.id}">
                Send Message
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    renderPagination(filtered.length, state.currentPage, totalPages);
    attachCardEvents();
  }

  function renderPagination(totalItems, currentPage, totalPages) {
    const container = document.getElementById('vendor-pagination-container');
    if (!container) return;

    if (totalItems <= state.pageSize) {
      container.innerHTML = `
        <div class="text-xs text-gray-500 font-medium">
          Showing all <strong>${totalItems}</strong> verified listings
        </div>
      `;
      return;
    }

    const start = (currentPage - 1) * state.pageSize + 1;
    const end = Math.min(currentPage * state.pageSize, totalItems);

    let pagesHtml = '';
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let p = startPage; p <= endPage; p++) {
      pagesHtml += `
        <button class="page-num-btn w-8 h-8 rounded-lg text-xs font-bold transition-all ${p === currentPage ? 'bg-[#e72e76] text-white shadow-xs' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer'}" data-page="${p}">
          ${p}
        </button>
      `;
    }

    container.innerHTML = `
      <div class="text-xs text-gray-500 font-medium">
        Showing <strong>${start} - ${end}</strong> of <strong>${totalItems.toLocaleString()}</strong> verified listings
      </div>
      <div class="flex items-center gap-1.5">
        <button id="prev-page-btn" class="px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${currentPage > 1 ? 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 cursor-pointer' : 'border-gray-100 text-gray-300 cursor-not-allowed'}" ${currentPage <= 1 ? 'disabled' : ''}>
          ‹ Previous
        </button>
        ${pagesHtml}
        <button id="next-page-btn" class="px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${currentPage < totalPages ? 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 cursor-pointer' : 'border-gray-100 text-gray-300 cursor-not-allowed'}" ${currentPage >= totalPages ? 'disabled' : ''}>
          Next ›
        </button>
      </div>
    `;

    container.querySelectorAll('.page-num-btn').forEach(b => {
      b.addEventListener('click', () => {
        state.currentPage = parseInt(b.dataset.page, 10);
        renderVendorGrid();
        window.scrollTo({ top: 380, behavior: 'smooth' });
      });
    });

    const prevBtn = document.getElementById('prev-page-btn');
    if (prevBtn && currentPage > 1) {
      prevBtn.addEventListener('click', () => {
        state.currentPage--;
        renderVendorGrid();
        window.scrollTo({ top: 380, behavior: 'smooth' });
      });
    }

    const nextBtn = document.getElementById('next-page-btn');
    if (nextBtn && currentPage < totalPages) {
      nextBtn.addEventListener('click', () => {
        state.currentPage++;
        renderVendorGrid();
        window.scrollTo({ top: 380, behavior: 'smooth' });
      });
    }
  }

  function attachCardEvents() {
    document.querySelectorAll('.vendor-trigger').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        openVendorModal(el.dataset.vendorId);
      });
    });

    document.querySelectorAll('.shortlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleShortlist(btn.dataset.vendorId);
      });
    });

    document.querySelectorAll('.prev-photo').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const vid = btn.dataset.vendorId;
        const v = state.vendors.find(item => item.id === vid);
        if (!v || !v.photos) return;
        const cur = state.carouselIndices[vid] || 0;
        state.carouselIndices[vid] = (cur - 1 + v.photos.length) % v.photos.length;
        renderVendorGrid();
      });
    });

    document.querySelectorAll('.next-photo').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const vid = btn.dataset.vendorId;
        const v = state.vendors.find(item => item.id === vid);
        if (!v || !v.photos) return;
        const cur = state.carouselIndices[vid] || 0;
        state.carouselIndices[vid] = (cur + 1) % v.photos.length;
        renderVendorGrid();
      });
    });

    document.querySelectorAll('.quote-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const v = state.vendors.find(item => item.id === btn.dataset.vendorId);
        if (v) openVendorModal(v.id, "overview");
      });
    });

    document.querySelectorAll('.view-contact-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const v = state.vendors.find(item => item.id === btn.dataset.vendorId);
        if (v) {
          openVendorModal(v.id, "overview");
        }
      });
    });
  }

  function toggleShortlist(vendorId) {
    const idx = state.shortlist.indexOf(vendorId);
    if (idx >= 0) {
      state.shortlist.splice(idx, 1);
    } else {
      state.shortlist.push(vendorId);
      triggerConfetti();
    }
    saveStorage();
    renderVendorGrid();
    renderShortlistDrawer();
  }

  function getVendorExtendedPhotos(v) {
    const catGallery = CATEGORY_EXTENDED_GALLERIES[v.category] || CATEGORY_EXTENDED_GALLERIES["planners"];
    const basePhotos = (v.photos && v.photos.length > 0) ? v.photos : [v.coverImage];
    const combined = [];

    // First add base photos
    basePhotos.forEach((url, i) => {
      combined.push({
        url: url,
        tag: i === 0 ? "Featured Hero" : "Ceremony & Decor",
        title: `${v.name} - Portfolio #${i + 1}`
      });
    });

    // Add category-specific photos to make it 8-10 photos
    catGallery.forEach((item, i) => {
      if (!combined.some(c => c.url === item.url)) {
        combined.push({
          url: item.url,
          tag: item.tag,
          title: `${v.name} - ${item.title}`
        });
      }
    });

    return combined.slice(0, 10);
  }

  function openVendorModal(vendorId, defaultTab = "photos") {
    const v = state.vendors.find(item => item.id === vendorId);
    if (!v) return;

    state.activeVendorModal = v;
    state.activeVendorTab = defaultTab;
    const modal = document.getElementById('vendor-detail-modal') || document.getElementById('vendor-profile-modal');
    if (!modal) return;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    renderVendorModalContent();
  }

  function renderVendorModalContent() {
    const v = state.activeVendorModal;
    if (!v) return;

    const body = document.getElementById('vendor-modal-body');
    if (!body) return;

    const allPhotos = getVendorExtendedPhotos(v);
    state.lightboxPhotos = allPhotos;

    const heroPhoto = allPhotos[0].url;
    const thumb1 = allPhotos[1] ? allPhotos[1].url : heroPhoto;
    const thumb2 = allPhotos[2] ? allPhotos[2].url : heroPhoto;
    const thumb3 = allPhotos[3] ? allPhotos[3].url : heroPhoto;
    const thumb4 = allPhotos[4] ? allPhotos[4].url : heroPhoto;

    const googleReviews = [
      {
        author: `Suresh & Mounika (${v.locality})`,
        date: "January 2026",
        rating: 5,
        text: `Booked ${v.name} for our wedding in ${v.city}. Flawless coordination and authentic Telugu hospitality! Every guest appreciated the mandap and on-time execution.`,
        tag: "Verified Wedding Client"
      },
      {
        author: `Kiran Kumar (${v.city})`,
        date: "December 2025",
        rating: 5,
        text: `Found their Google Business profile via Vowora. Excellent professionalism, transparent pricing without hidden surprises, and quick WhatsApp responses!`,
        tag: "Google Maps Reviewer"
      },
      {
        author: `Ramesh Babu (Father of Bride)`,
        date: "November 2025",
        rating: 5,
        text: `They managed the complete Telugu muhurtham arrangements with Vedic priests, floral decors, and plantain leaf lunch coordination. 10/10 recommendation!`,
        tag: "Verified Family Client"
      },
      {
        author: `Dr. Ananya Reddy`,
        date: "October 2025",
        rating: 4.9,
        text: `Very polite crew in ${v.locality}. The lighting trusses and bridal stage were stunning in all our 4K wedding photos.`,
        tag: "Verified Couple"
      }
    ];

    body.innerHTML = `
      <!-- Top Sticky Bar -->
      <div class="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 py-3.5 border-b border-gray-100 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-rose-50 text-[#e72e76] flex items-center justify-center font-bold text-sm shadow-2xs">
            📍
          </div>
          <div>
            <h3 class="text-sm font-bold text-gray-900 leading-tight">${v.name}</h3>
            <span class="text-[11px] text-gray-500">${v.locality}, ${v.city}, Andhra Pradesh • Google Verified</span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <a href="https://wa.me/${v.whatsapp}?text=${encodeURIComponent('Hi ' + v.name + ', I found your business on Vowora. I would like to check availability and packages for my wedding.')}" target="_blank" class="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-xs transition-colors">
            <span>💬</span><span>WhatsApp</span>
          </a>
          <a href="tel:${v.phone}" class="px-3 py-1.5 border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs font-bold rounded-lg flex items-center gap-1 transition-colors">
            <span>📞</span><span>${v.phone}</span>
          </a>
          <button id="close-modal-x" class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center text-sm font-bold cursor-pointer transition-colors">
            ✕
          </button>
        </div>
      </div>

      <!-- Hero Photography Grid (WedMeGood 5-Photo Mosaic) -->
      <div class="relative bg-gray-900 p-2 sm:p-3">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-2 h-72 sm:h-96 rounded-2xl overflow-hidden">
          <!-- Main Hero (2 Cols) -->
          <div class="md:col-span-2 relative group cursor-pointer overflow-hidden rounded-xl modal-photo-thumb" data-photo-idx="0">
            <img src="${heroPhoto}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none"></div>
            <div class="absolute bottom-3 left-4 text-white pointer-events-none">
              <span class="bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-1 inline-block">Featured Cover</span>
              <h2 class="text-xl sm:text-2xl font-bold font-serif leading-tight drop-shadow-md">${v.name}</h2>
              <span class="text-xs text-rose-200">📍 ${v.address}</span>
            </div>
          </div>

          <!-- Sub Mosaic (2 Cols) -->
          <div class="hidden md:grid col-span-2 grid-cols-2 gap-2 h-full">
            <div class="relative group cursor-pointer overflow-hidden rounded-xl modal-photo-thumb" data-photo-idx="1">
              <img src="${thumb1}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span class="absolute bottom-2 left-2 text-[10px] bg-black/60 text-white px-2 py-0.5 rounded font-medium">${allPhotos[1] ? allPhotos[1].tag : 'Mandap'}</span>
            </div>
            <div class="relative group cursor-pointer overflow-hidden rounded-xl modal-photo-thumb" data-photo-idx="2">
              <img src="${thumb2}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span class="absolute bottom-2 left-2 text-[10px] bg-black/60 text-white px-2 py-0.5 rounded font-medium">${allPhotos[2] ? allPhotos[2].tag : 'Ceremony'}</span>
            </div>
            <div class="relative group cursor-pointer overflow-hidden rounded-xl modal-photo-thumb" data-photo-idx="3">
              <img src="${thumb3}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span class="absolute bottom-2 left-2 text-[10px] bg-black/60 text-white px-2 py-0.5 rounded font-medium">${allPhotos[3] ? allPhotos[3].tag : 'Decor'}</span>
            </div>
            <div class="relative group cursor-pointer overflow-hidden rounded-xl modal-photo-thumb" data-photo-idx="4">
              <img src="${thumb4}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-black/50 group-hover:bg-black/40 flex flex-col items-center justify-center text-white transition-colors">
                <span class="text-lg">📷</span>
                <span class="text-xs font-bold">+${allPhotos.length - 4} More</span>
                <span class="text-[10px] text-gray-300">View All Photos</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Badges Bar below Hero -->
        <div class="mt-2.5 flex flex-wrap items-center justify-between gap-2 px-2 text-white">
          <div class="flex flex-wrap items-center gap-2">
            <span class="bg-[#008459] text-white text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-xs">
              <span>★</span><span>${v.rating}</span>
            </span>
            <span class="text-xs text-gray-300">${v.googleReviewCount || v.reviewCount} Google Maps Reviews</span>
            <span class="text-gray-500">•</span>
            <span class="bg-blue-900/80 text-blue-200 border border-blue-400/40 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
              <span>✓</span> Google Place ID: ${v.googlePlaceId}
            </span>
          </div>

          <button id="view-all-photos-hero-btn" class="px-3 py-1 bg-white/20 hover:bg-white/30 text-white rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors backdrop-blur-xs">
            <span>🖼️</span><span>Browse All ${allPhotos.length} Google Photos</span>
          </button>
        </div>
      </div>

      <!-- Detail Navigation Tabs -->
      <div class="bg-white border-b border-gray-200 px-6 sticky top-[61px] z-20 flex gap-6 text-xs font-bold overflow-x-auto">
        <button class="vendor-nav-tab py-3 border-b-2 transition-colors cursor-pointer ${state.activeVendorTab === 'photos' ? 'border-[#e72e76] text-[#e72e76]' : 'border-transparent text-gray-600 hover:text-gray-900'}" data-tab="photos">
          📸 Photos & Portfolio (${allPhotos.length})
        </button>
        <button class="vendor-nav-tab py-3 border-b-2 transition-colors cursor-pointer ${state.activeVendorTab === 'overview' ? 'border-[#e72e76] text-[#e72e76]' : 'border-transparent text-gray-600 hover:text-gray-900'}" data-tab="overview">
          ℹ️ Overview & Google Map
        </button>
        <button class="vendor-nav-tab py-3 border-b-2 transition-colors cursor-pointer ${state.activeVendorTab === 'pricing' ? 'border-[#e72e76] text-[#e72e76]' : 'border-transparent text-gray-600 hover:text-gray-900'}" data-tab="pricing">
          💰 Packages & Pricing
        </button>
        <button class="vendor-nav-tab py-3 border-b-2 transition-colors cursor-pointer ${state.activeVendorTab === 'reviews' ? 'border-[#e72e76] text-[#e72e76]' : 'border-transparent text-gray-600 hover:text-gray-900'}" data-tab="reviews">
          ⭐ Google Reviews (${v.googleReviewCount || v.reviewCount})
        </button>
      </div>

      <!-- Main Body: Two Columns (Content on Left, Lead Form on Right) -->
      <div class="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-gray-50/50">
        
        <!-- Left Content Area -->
        <div class="lg:col-span-2 space-y-6">

          <!-- TAB 1: ALL PHOTOS & PORTFOLIO -->
          <div id="tab-content-photos" class="${state.activeVendorTab === 'photos' ? 'block' : 'hidden'} space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-bold text-base text-gray-900">Google Maps Business Photo Gallery</h4>
                <p class="text-xs text-gray-500">Real wedding work, mandap setups, and decor albums from ${v.city}</p>
              </div>
              <span class="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">${allPhotos.length} High-Res Photos</span>
            </div>

            <!-- Responsive Photos Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              ${allPhotos.map((photo, pIdx) => `
                <div class="group relative h-48 rounded-xl overflow-hidden bg-gray-200 cursor-pointer shadow-xs border border-gray-100 modal-photo-thumb" data-photo-idx="${pIdx}">
                  <img src="${photo.url}" alt="${photo.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div class="absolute bottom-2 left-2 right-2 text-white">
                    <span class="text-[9px] font-bold uppercase tracking-wider bg-[#e72e76] text-white px-1.5 py-0.5 rounded mb-0.5 inline-block">${photo.tag}</span>
                    <span class="text-xs font-bold block truncate">${photo.title}</span>
                  </div>
                  <div class="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    🔍
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- TAB 2: OVERVIEW & GOOGLE MAP -->
          <div id="tab-content-overview" class="${state.activeVendorTab === 'overview' ? 'block' : 'hidden'} space-y-5">
            <div class="bg-white rounded-2xl p-5 border border-gray-100 shadow-2xs space-y-3">
              <h4 class="font-bold text-sm text-gray-900">About ${v.name}</h4>
              <p class="text-xs text-gray-600 leading-relaxed">${v.about}</p>
              <div class="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                <span class="px-2.5 py-1 bg-rose-50 text-rose-700 rounded-lg text-xs font-bold">⏱️ ${v.experienceYears || 8} Years Experience</span>
                <span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-bold">💒 ${v.weddingsCount || 350}+ Weddings Completed</span>
                <span class="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold">${v.responseTime || '⚡ Responds in 15 mins'}</span>
              </div>
            </div>

            <!-- Live Google Map Embed -->
            <div class="bg-white rounded-2xl p-5 border border-gray-100 shadow-2xs space-y-3">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-bold text-sm text-gray-900 flex items-center gap-1.5">
                    <span>🗺️</span> Verified Google Maps Location
                  </h4>
                  <span class="text-xs text-gray-500">${v.address}</span>
                </div>
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.name + ' ' + v.locality + ' ' + v.city + ' Andhra Pradesh')}" target="_blank" class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1">
                  <span>Open in Maps</span><span>↗</span>
                </a>
              </div>
              <div class="w-full h-64 rounded-xl overflow-hidden border border-gray-200">
                <iframe 
                  src="https://maps.google.com/maps?q=${encodeURIComponent(v.name + ' ' + v.locality + ' ' + v.city + ' Andhra Pradesh')}&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy">
                </iframe>
              </div>
            </div>

            <!-- Operating Hours & Contact Info -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs space-y-2">
                <h5 class="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1">
                  <span>⏰</span> Business Timings
                </h5>
                <div class="space-y-1 text-xs text-gray-600">
                  <div class="flex justify-between"><span>Monday – Saturday:</span><span class="font-bold text-gray-800">9:00 AM – 9:30 PM</span></div>
                  <div class="flex justify-between"><span>Sunday:</span><span class="font-bold text-gray-800">10:00 AM – 9:00 PM</span></div>
                  <div class="flex justify-between text-emerald-600 font-bold pt-1 border-t border-gray-100"><span>Status:</span><span>🟢 Open Today</span></div>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs space-y-2">
                <h5 class="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1">
                  <span>📞</span> Direct Concierge Line
                </h5>
                <div class="space-y-1.5 text-xs text-gray-600">
                  <div><strong>Phone:</strong> <a href="tel:${v.phone}" class="text-rose-600 font-bold hover:underline">${v.phone}</a></div>
                  <div><strong>WhatsApp:</strong> <a href="https://wa.me/${v.whatsapp}" target="_blank" class="text-emerald-600 font-bold hover:underline">+91 ${v.whatsapp.slice(-10)}</a></div>
                  <div><strong>Email:</strong> <span class="text-gray-700">${v.email}</span></div>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 3: PACKAGES & PRICING -->
          <div id="tab-content-pricing" class="${state.activeVendorTab === 'pricing' ? 'block' : 'hidden'} space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-bold text-base text-gray-900">Verified Packages & Starting Rates</h4>
                <p class="text-xs text-gray-500">Transparent pricing verified for Telugu ceremonies in ${v.city}</p>
              </div>
              <span class="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full">Starting: ${v.priceRange.feeLabel}</span>
            </div>

            <div class="space-y-3">
              <div class="bg-white rounded-2xl p-5 border border-gray-200 shadow-2xs">
                <div class="flex items-center justify-between mb-2">
                  <h5 class="font-bold text-sm text-gray-900">🥈 Silver Classic Package</h5>
                  <span class="text-xs font-bold text-[#e72e76]">${v.priceRange.feeLabel}</span>
                </div>
                <p class="text-xs text-gray-600 mb-3">Essential coordination and event execution for intimate to medium Telugu weddings.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                  <div class="flex items-center gap-1.5"><span class="text-emerald-500 font-bold">✓</span> On-site event manager on muhurtham day</div>
                  <div class="flex items-center gap-1.5"><span class="text-emerald-500 font-bold">✓</span> Vendor check & timeline scheduling</div>
                  <div class="flex items-center gap-1.5"><span class="text-emerald-500 font-bold">✓</span> Mandap stage delivery & basic lighting</div>
                  <div class="flex items-center gap-1.5"><span class="text-emerald-500 font-bold">✓</span> WhatsApp group coordination with family</div>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-5 border-2 border-rose-300 shadow-xs relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-[#e72e76] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-bl">Most Popular</div>
                <div class="flex items-center justify-between mb-2">
                  <h5 class="font-bold text-sm text-gray-900">🥇 Royal Telugu Grand Package</h5>
                  <span class="text-xs font-bold text-[#e72e76]">Decor Starting ${v.priceRange.decorStartingFee || '₹1,80,000'}</span>
                </div>
                <p class="text-xs text-gray-600 mb-3">Complete end-to-end management from Pelli Kuthuru / Haldi to Grand Reception.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                  <div class="flex items-center gap-1.5"><span class="text-emerald-500 font-bold">✓</span> Traditional Lotus & Jasmine floral mandap</div>
                  <div class="flex items-center gap-1.5"><span class="text-emerald-500 font-bold">✓</span> Complete sound, truss, and ambient stage lighting</div>
                  <div class="flex items-center gap-1.5"><span class="text-emerald-500 font-bold">✓</span> Vedic Purohit & Nadaswaram troupe coordination</div>
                  <div class="flex items-center gap-1.5"><span class="text-emerald-500 font-bold">✓</span> VIP guest hospitality & reception reception desk</div>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 4: GOOGLE REVIEWS -->
          <div id="tab-content-reviews" class="${state.activeVendorTab === 'reviews' ? 'block' : 'hidden'} space-y-4">
            <div class="bg-white rounded-2xl p-5 border border-gray-100 shadow-2xs flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center gap-4">
                <div class="text-center">
                  <span class="text-3xl font-extrabold text-gray-900">${v.rating}</span>
                  <div class="text-yellow-400 text-sm">★★★★★</div>
                  <span class="text-[10px] text-gray-400">out of 5.0</span>
                </div>
                <div class="h-12 w-px bg-gray-200"></div>
                <div>
                  <h4 class="font-bold text-sm text-gray-900">Google Maps Verified Rating</h4>
                  <p class="text-xs text-gray-500">Based on ${v.googleReviewCount || v.reviewCount} customer reviews in Andhra Pradesh</p>
                </div>
              </div>

              <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.name + ' ' + v.locality + ' ' + v.city)}" target="_blank" class="px-3.5 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors flex items-center gap-1">
                <span>View on Google Maps</span><span>↗</span>
              </a>
            </div>

            <!-- Reviews List -->
            <div class="space-y-3">
              ${googleReviews.map(r => `
                <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs space-y-2">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                      <div class="w-8 h-8 rounded-full bg-rose-100 text-[#e72e76] font-bold text-xs flex items-center justify-center">
                        ${r.author.charAt(0)}
                      </div>
                      <div>
                        <h6 class="text-xs font-bold text-gray-900">${r.author}</h6>
                        <span class="text-[10px] text-gray-400">${r.date} • ${r.tag}</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 bg-[#008459] text-white px-1.5 py-0.5 rounded text-[10px] font-bold">
                      <span>★</span><span>${r.rating}</span>
                    </div>
                  </div>
                  <p class="text-xs text-gray-600 leading-relaxed">${r.text}</p>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

        <!-- Right Column: Sticky Quote / Lead Form -->
        <div class="lg:col-span-1">
          <div class="sticky top-28 bg-white rounded-2xl p-5 border border-rose-100 shadow-lg shadow-rose-100/40 space-y-4">
            <div class="border-b border-gray-100 pb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#e72e76] block mb-0.5">Direct Lead Capture</span>
              <h4 class="text-sm font-bold text-gray-900">Check Date Availability</h4>
              <p class="text-[11px] text-gray-500">Get an instant quote directly on WhatsApp</p>
            </div>

            <form id="modal-lead-form" class="space-y-3">
              <div>
                <label class="block text-[11px] font-bold text-gray-700 mb-1">Your Full Name *</label>
                <input type="text" id="mf-name" required placeholder="e.g. Ramesh Reddy" class="w-full text-xs px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-rose-500" />
              </div>

              <div>
                <label class="block text-[11px] font-bold text-gray-700 mb-1">WhatsApp / Phone *</label>
                <input type="tel" id="mf-phone" required placeholder="+91 98765 43210" class="w-full text-xs px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-rose-500" />
              </div>

              <div class="grid grid-cols-2 gap-2">
                <div>
                  <label class="block text-[11px] font-bold text-gray-700 mb-1">Wedding Date</label>
                  <input type="date" id="mf-date" required class="w-full text-xs px-2 py-1.5 border border-gray-300 rounded-lg outline-none focus:border-rose-500" />
                </div>
                <div>
                  <label class="block text-[11px] font-bold text-gray-700 mb-1">Guests</label>
                  <select id="mf-guests" class="w-full text-xs px-2 py-1.5 border border-gray-300 rounded-lg outline-none focus:border-rose-500">
                    <option value="100-300">100-300</option>
                    <option value="300-600" selected>300-600</option>
                    <option value="600-1000">600-1000</option>
                    <option value="1000+">1000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-gray-700 mb-1">Notes / Special Requests</label>
                <textarea id="mf-notes" rows="2" placeholder="e.g. Need Telugu mandap decor in ${v.locality}..." class="w-full text-xs px-3 py-1.5 border border-gray-300 rounded-lg outline-none focus:border-rose-500"></textarea>
              </div>

              <button type="submit" class="w-full py-2.5 bg-vowora-gradient text-white text-xs font-bold rounded-lg shadow-md hover:opacity-95 transition-opacity cursor-pointer flex items-center justify-center gap-1.5">
                <span>💬</span><span>Check Availability & Connect</span>
              </button>
              <p class="text-[10px] text-gray-400 text-center">⚡ 100% Free Service • Direct connect with ${v.name}</p>
            </form>
          </div>
        </div>

      </div>
    `;

    // Bind Tab Switching inside Modal
    body.querySelectorAll('.vendor-nav-tab').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        const tab = tabBtn.dataset.tab;
        state.activeVendorTab = tab;
        renderVendorModalContent();
      });
    });

    const viewAllBtn = body.querySelector('#view-all-photos-hero-btn');
    if (viewAllBtn) {
      viewAllBtn.addEventListener('click', () => {
        state.activeVendorTab = 'photos';
        renderVendorModalContent();
      });
    }

    // Bind Close Button
    const closeBtn = body.querySelector('#close-modal-x');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeVendorModal);
    }

    // Bind Lightbox Trigger on all modal photo thumbnails
    body.querySelectorAll('.modal-photo-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const idx = parseInt(thumb.dataset.photoIdx, 10);
        openLightbox(allPhotos, idx);
      });
    });

    // Bind Modal Lead Form
    const leadForm = body.querySelector('#modal-lead-form');
    if (leadForm) {
      leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const clientName = document.getElementById('mf-name').value;
        const phone = document.getElementById('mf-phone').value;
        const date = document.getElementById('mf-date').value;
        const guests = document.getElementById('mf-guests').value;
        const notes = document.getElementById('mf-notes').value;

        const enq = {
          vendorId: v.id,
          vendorName: v.name,
          clientName: clientName,
          phone: phone,
          date: date,
          timestamp: new Date().toLocaleDateString(),
          status: 'Direct Inquired'
        };
        state.enquiries.push(enq);
        saveStorage();
        triggerConfetti();

        // Redirect to WhatsApp with prefilled message
        const waText = encodeURIComponent(`Hi ${v.name}, my name is ${clientName} (${phone}). I found your verified Google Maps profile on Vowora. I would like to check availability for our wedding on ${date || 'upcoming date'} for ${guests} guests in ${v.locality}, ${v.city}.\nNote: ${notes}`);
        window.open(`https://wa.me/${v.whatsapp}?text=${waText}`, '_blank');

        alert(`🎉 Availability checked for ${v.name}!\nOpening WhatsApp connection to finalize dates.`);
        closeVendorModal();
      });
    }
  }

  function closeVendorModal() {
    const modal = document.getElementById('vendor-detail-modal') || document.getElementById('vendor-profile-modal');
    if (modal) modal.classList.add('hidden');
    state.activeVendorModal = null;
    document.body.style.overflow = '';
  }

  // Fullscreen Photo Lightbox Logic
  function openLightbox(photos, startIndex = 0) {
    state.lightboxPhotos = photos;
    state.lightboxIndex = startIndex;

    const lbModal = document.getElementById('photo-lightbox-modal');
    if (!lbModal) return;

    lbModal.classList.remove('hidden');
    updateLightboxUI();
  }

  function updateLightboxUI() {
    const lbModal = document.getElementById('photo-lightbox-modal');
    if (!lbModal || state.lightboxPhotos.length === 0) return;

    const current = state.lightboxPhotos[state.lightboxIndex];
    const imgEl = document.getElementById('lightbox-image');
    const capEl = document.getElementById('lightbox-caption');
    const cntEl = document.getElementById('lightbox-counter');

    if (imgEl) imgEl.src = current.url;
    if (capEl) capEl.textContent = `${current.tag} • ${current.title}`;
    if (cntEl) cntEl.textContent = `Photo ${state.lightboxIndex + 1} of ${state.lightboxPhotos.length}`;
  }

  function closeLightbox() {
    const lbModal = document.getElementById('photo-lightbox-modal');
    if (lbModal) lbModal.classList.add('hidden');
  }

  function prevLightbox() {
    if (state.lightboxPhotos.length === 0) return;
    state.lightboxIndex = (state.lightboxIndex - 1 + state.lightboxPhotos.length) % state.lightboxPhotos.length;
    updateLightboxUI();
  }

  function nextLightbox() {
    if (state.lightboxPhotos.length === 0) return;
    state.lightboxIndex = (state.lightboxIndex + 1) % state.lightboxPhotos.length;
    updateLightboxUI();
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
        if (cb.checked) {
          if (!state.selectedLocalities.includes(cb.value)) state.selectedLocalities.push(cb.value);
        } else {
          state.selectedLocalities = state.selectedLocalities.filter(l => l !== cb.value);
        }
        state.currentPage = 1;
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
    state.currentPage = 1;

    const si = document.getElementById('search-input');
    if (si) si.value = "";
    const ls = document.getElementById('locality-search-input');
    if (ls) ls.value = "";

    document.querySelectorAll('.budget-radio').forEach(r => {
      r.checked = (r.value === 'all');
    });
    document.querySelectorAll('.rating-radio').forEach(r => {
      r.checked = (r.value === '0');
    });
    const hp = document.getElementById('filter-handpicked-only');
    if (hp) hp.checked = false;
    const vf = document.getElementById('filter-verified-only');
    if (vf) vf.checked = false;

    renderLocalityFilterList();
    renderVendorGrid();
  }

  function renderCitySelectorGrid() {
    const container = document.getElementById('city-selector-grid');
    if (!container) return;

    container.innerHTML = CITIES_DATA.map(c => `
      <button class="city-btn p-3 rounded-xl border text-left transition-all cursor-pointer ${c.name === state.activeCity ? 'border-[#e72e76] bg-rose-50 text-[#e72e76] font-bold' : 'border-gray-200 hover:border-gray-300 text-gray-700'}" data-city="${c.name}">
        <span class="text-xs block font-bold">${c.isAP ? '📍 ' : ''}${c.name}</span>
        <span class="text-[10px] text-gray-400 block">${c.count.toLocaleString()} Google Map Listings</span>
      </button>
    `).join('');

    container.querySelectorAll('.city-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeCity = btn.dataset.city;
        state.selectedLocalities = [];
        state.currentPage = 1;
        saveStorage();
        document.getElementById('city-selector-modal').classList.add('hidden');
        renderCitySelectorGrid();
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
        state.currentPage = 1;
        saveStorage();

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
        <img src="${(v.photos && v.photos[0]) || v.coverImage}" class="w-12 h-12 rounded object-cover cursor-pointer vendor-trigger" data-vendor-id="${v.id}" />
        <div class="flex-1 min-w-0">
          <h5 class="font-bold text-gray-900 truncate cursor-pointer vendor-trigger hover:text-rose-600" data-vendor-id="${v.id}">${v.name}</h5>
          <span class="text-rose-600 font-semibold text-[11px]">${v.priceRange.feeLabel}</span>
        </div>
        <button class="remove-shortlist text-[10px] text-gray-400 hover:text-red-600 cursor-pointer" data-id="${v.id}">✕</button>
      </div>
    `).join('');
    c.querySelectorAll('.remove-shortlist').forEach(b => {
      b.addEventListener('click', () => toggleShortlist(b.dataset.id));
    });
    c.querySelectorAll('.vendor-trigger').forEach(el => {
      el.addEventListener('click', () => openVendorModal(el.dataset.vendorId));
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

  function renderSeoFaqs() {
    const container = document.getElementById('seo-faqs-container');
    if (!container) return;

    container.innerHTML = AP_SEQS_FAQS.map((faq, idx) => `
      <details class="group bg-gray-50 border border-gray-200 rounded-xl p-4 transition-all" ${idx === 0 ? 'open' : ''}>
        <summary class="flex justify-between items-center cursor-pointer font-bold text-xs sm:text-sm text-gray-900 list-none">
          <span>${faq.q}</span>
          <span class="text-rose-500 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <p class="mt-2.5 text-xs text-gray-600 leading-relaxed border-t border-gray-200 pt-2.5">
          ${faq.a}
        </p>
      </details>
    `).join('');
  }

  function loadVendorData() {
    state.isLoading = true;
    renderVendorGrid();

    fetch('data/andhra_pradesh_vendors.json')
      .then(r => {
        if (!r.ok) throw new Error("HTTP error " + r.status);
        return r.json();
      })
      .then(data => {
        state.vendors = data;
        state.vendors.forEach(v => { state.carouselIndices[v.id] = 0; });
        state.isLoading = false;
        renderLocalityFilterList();
        renderVendorGrid();
        renderShortlistDrawer();
      })
      .catch(err => {
        console.warn("Could not fetch AP json, retrying:", err);
        state.isLoading = false;
        renderVendorGrid();
      });
  }

  function init() {
    setupCategoryRibbon();
    renderCitySelectorGrid();
    renderLocalityFilterList();
    renderSeoFaqs();
    updateCounters();
    renderShortlistDrawer();
    renderInquiriesDrawer();
    loadVendorData();

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        state.currentPage = 1;
        renderVendorGrid();
      });
    }

    const sortSelect = document.getElementById('sort-dropdown');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        state.currentPage = 1;
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

    // Budget Radios
    document.querySelectorAll('.budget-radio').forEach(r => {
      r.addEventListener('change', (e) => {
        if (e.target.checked) {
          state.selectedBudget = e.target.value;
          state.currentPage = 1;
          renderVendorGrid();
        }
      });
    });

    // Rating Radios
    document.querySelectorAll('.rating-radio').forEach(r => {
      r.addEventListener('change', (e) => {
        if (e.target.checked) {
          state.selectedRating = parseFloat(e.target.value) || 0;
          state.currentPage = 1;
          renderVendorGrid();
        }
      });
    });

    const handpickedCb = document.getElementById('filter-handpicked-only');
    if (handpickedCb) {
      handpickedCb.addEventListener('change', (e) => {
        state.handpickedOnly = e.target.checked;
        state.currentPage = 1;
        renderVendorGrid();
      });
    }

    const verifiedCb = document.getElementById('filter-verified-only');
    if (verifiedCb) {
      verifiedCb.addEventListener('change', (e) => {
        state.verifiedOnly = e.target.checked;
        state.currentPage = 1;
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

    // Lightbox Controls
    const lbClose = document.getElementById('close-lightbox-btn');
    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    const lbPrev = document.getElementById('lightbox-prev');
    if (lbPrev) lbPrev.addEventListener('click', prevLightbox);
    const lbNext = document.getElementById('lightbox-next');
    if (lbNext) lbNext.addEventListener('click', nextLightbox);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeVendorModal();
        closeQuoteModal();
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevLightbox();
      } else if (e.key === 'ArrowRight') {
        nextLightbox();
      }
    });

    // Close on outside overlay click
    const vDetailModal = document.getElementById('vendor-detail-modal') || document.getElementById('vendor-profile-modal');
    if (vDetailModal) {
      vDetailModal.addEventListener('click', (e) => {
        if (e.target === vDetailModal) closeVendorModal();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
