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
      "Satyanarayanapuram", "Labbipet", "Enikepadu", "Tadigadapa", "Gannavaram"
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
    activeVendorTab: "overview",
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
          <button id="empty-reset-btn" class="px-5 py-2 bg-[#e72e76] text-white rounded-lg text-xs font-bold shadow-xs hover:bg-rose-700">Switch to All Andhra Pradesh</button>
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

            <button class="shortlist-btn absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-600 hover:text-rose-600 z-10" data-vendor-id="${vendor.id}">
              <svg class="w-4 h-4 ${isShortlisted ? 'fill-rose-600 text-rose-600' : 'text-gray-600'}" fill="${isShortlisted ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            ${(vendor.photos && vendor.photos.length > 1) ? `
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
                <h3 class="font-bold text-gray-900 text-sm hover:text-rose-600 cursor-pointer vendor-trigger line-clamp-1" data-vendor-id="${vendor.id}">${vendor.name}</h3>
                <div class="flex items-center gap-1 bg-[#008459] text-white px-1.5 py-0.5 rounded text-xs font-bold shrink-0">
                  <span>★</span><span>${vendor.rating}</span>
                </div>
              </div>

              <div class="text-[11px] text-gray-500 mb-2 flex items-center gap-1.5">
                <span class="truncate">📍 ${vendor.locality}, ${vendor.city}</span>
                <span>•</span>
                <span class="text-blue-600 font-semibold shrink-0">${vendor.googleReviewCount || vendor.reviewCount} Google Reviews</span>
              </div>

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
        <button class="page-num-btn w-8 h-8 rounded-lg text-xs font-bold transition-all ${p === currentPage ? 'bg-[#e72e76] text-white shadow-xs' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}" data-page="${p}">
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
      el.addEventListener('click', () => openVendorModal(el.dataset.vendorId));
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
      btn.addEventListener('click', () => {
        const v = state.vendors.find(item => item.id === btn.dataset.vendorId);
        if (v) openQuoteModal(v);
      });
    });

    document.querySelectorAll('.view-contact-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const v = state.vendors.find(item => item.id === btn.dataset.vendorId);
        if (v) {
          alert(`📞 Contact ${v.name}\n\nPhone: ${v.phone}\nWhatsApp: ${v.phone}\nGoogle Place ID: ${v.googlePlaceId}\nAddress: ${v.address}\n\nDirect connection via Vowora verified concierge.`);
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

  function openVendorModal(vendorId) {
    const v = state.vendors.find(item => item.id === vendorId);
    if (!v) return;

    state.activeVendorModal = v;
    const modal = document.getElementById('vendor-profile-modal');
    if (!modal) return;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    const body = document.getElementById('vendor-modal-body');
    if (!body) return;

    body.innerHTML = `
      <div class="relative bg-gray-900 text-white">
        <div class="h-64 w-full grid grid-cols-1 md:grid-cols-3 gap-1 overflow-hidden">
          <div class="md:col-span-2 h-full"><img src="${(v.photos && v.photos[0]) || v.coverImage}" class="w-full h-full object-cover" /></div>
          <div class="hidden md:grid grid-rows-2 gap-1 h-full">
            <img src="${(v.photos && v.photos[1]) || v.coverImage}" class="w-full h-full object-cover" />
            <img src="${(v.photos && v.photos[2]) || v.coverImage}" class="w-full h-full object-cover" />
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
            <span class="text-[10px] text-gray-300 block mt-1">${v.googleReviewCount || v.reviewCount} Google Maps Reviews</span>
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
              ${(v.packages || []).map(p => `
                <div class="border border-gray-200 rounded-lg p-3 bg-white">
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span>${p.name}</span>
                    <span class="text-rose-600">${p.price}</span>
                  </div>
                  <p class="text-[11px] text-gray-500 mb-2">${p.description}</p>
                  <div class="grid grid-cols-2 gap-1 text-[11px] text-gray-600">
                    ${(p.features || []).map(f => `<div>✓ ${f}</div>`).join('')}
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
          vendorId: v.id,
          vendorName: v.name,
          clientName: document.getElementById('mq-name').value,
          phone: document.getElementById('mq-phone').value,
          date: document.getElementById('mq-date').value,
          timestamp: new Date().toLocaleDateString(),
          status: 'Request Sent'
        };
        state.enquiries.push(enq);
        saveStorage();
        triggerConfetti();
        alert(`🎉 Quote requested successfully for ${v.name}!\nTheir team will contact you on WhatsApp within 15 minutes.`);
        closeVendorModal();
      });
    }
  }

  function closeVendorModal() {
    const modal = document.getElementById('vendor-profile-modal');
    if (modal) modal.classList.add('hidden');
    state.activeVendorModal = null;
    document.body.style.overflow = '';
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
      <button class="city-btn p-3 rounded-xl border text-left transition-all ${c.name === state.activeCity ? 'border-[#e72e76] bg-rose-50 text-[#e72e76] font-bold' : 'border-gray-200 hover:border-gray-300 text-gray-700'}" data-city="${c.name}">
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
        <img src="${(v.photos && v.photos[0]) || v.coverImage}" class="w-12 h-12 rounded object-cover" />
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

    // Interactive Lead Capture Form
    const leadForm = document.getElementById('lead-quote-form');
    if (leadForm) {
      leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const v = state.quoteVendor;
        const enq = {
          vendorId: v ? v.id : 'general',
          vendorName: v ? v.name : 'Vowora Concierge',
          clientName: document.getElementById('lead-name') ? document.getElementById('lead-name').value : 'Client',
          phone: document.getElementById('lead-phone') ? document.getElementById('lead-phone').value : '',
          date: document.getElementById('lead-date') ? document.getElementById('lead-date').value : '',
          timestamp: new Date().toLocaleDateString(),
          status: 'Quote Sent'
        };
        state.enquiries.push(enq);
        saveStorage();
        triggerConfetti();
        alert(`🎉 Quote requested successfully for ${enq.vendorName}!\nOur wedding manager will call and WhatsApp you shortly.`);
        closeQuoteModal();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
