import {
  VENDORS_DATA,
  CITIES_DATA,
  CHENNAI_LOCALITIES,
  VENDOR_CATEGORIES,
  REAL_WEDDINGS_DATA,
  DEFAULT_CHECKLIST
} from './data/vendors.js';

// Application State
const state = {
  vendors: [...VENDORS_DATA],
  activeCity: "Chennai",
  activeCategory: "wedding-planners",
  searchQuery: "",
  selectedLocalities: [],
  selectedBudget: "all",
  selectedRating: 0,
  selectedServices: [],
  sortBy: "popularity",
  viewMode: "grid", // 'grid' | 'list'
  
  // Modals & Drawers
  activeVendorModal: null,
  activeVendorTab: "overview",
  isQuoteModalOpen: false,
  quoteVendor: null,
  isCityModalOpen: false,
  isShortlistDrawerOpen: false,
  isInquiriesDrawerOpen: false,
  isVendorRegisterModalOpen: false,
  activeNavTab: "directory", // 'directory' | 'tools' | 'real-weddings'
  
  // User Data (Persisted)
  shortlist: JSON.parse(localStorage.getItem('vowora_shortlist') || '[]'),
  enquiries: JSON.parse(localStorage.getItem('vowora_enquiries') || '[]'),
  checklist: JSON.parse(localStorage.getItem('vowora_checklist') || JSON.stringify(DEFAULT_CHECKLIST)),
  totalBudget: parseInt(localStorage.getItem('vowora_budget') || '2500000', 10),
  
  // Photo carousel indices per vendor
  carouselIndices: {}
};

// Initialize photo indices
state.vendors.forEach(v => {
  state.carouselIndices[v.id] = 0;
});

// Helpers
function formatINR(val) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val);
}

function triggerConfetti() {
  if (typeof window.confetti === 'function') {
    window.confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// Persist data
function saveStorage() {
  localStorage.setItem('vowora_shortlist', JSON.stringify(state.shortlist));
  localStorage.setItem('vowora_enquiries', JSON.stringify(state.enquiries));
  localStorage.setItem('vowora_checklist', JSON.stringify(state.checklist));
  localStorage.setItem('vowora_budget', state.totalBudget.toString());
  updateCounters();
}

function updateCounters() {
  const shortlistBadges = document.querySelectorAll('.shortlist-count-badge');
  shortlistBadges.forEach(el => {
    el.textContent = state.shortlist.length;
    el.classList.toggle('hidden', state.shortlist.length === 0);
  });

  const inquiriesBadges = document.querySelectorAll('.inquiries-count-badge');
  inquiriesBadges.forEach(el => {
    el.textContent = state.enquiries.length;
    el.classList.toggle('hidden', state.enquiries.length === 0);
  });
}

// Filtering Engine
function getFilteredVendors() {
  return state.vendors.filter(vendor => {
    // City filter
    if (state.activeCity && vendor.city.toLowerCase() !== state.activeCity.toLowerCase()) {
      return false;
    }

    // Search query
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      const matchName = vendor.name.toLowerCase().includes(q);
      const matchLocality = vendor.locality.toLowerCase().includes(q);
      const matchServices = vendor.services.some(s => s.toLowerCase().includes(q));
      const matchSpecialty = vendor.specialty ? vendor.specialty.toLowerCase().includes(q) : false;
      if (!matchName && !matchLocality && !matchServices && !matchSpecialty) {
        return false;
      }
    }

    // Locality filter
    if (state.selectedLocalities.length > 0) {
      const match = state.selectedLocalities.some(loc => 
        vendor.locality.toLowerCase().includes(loc.toLowerCase())
      );
      if (!match) return false;
    }

    // Budget filter
    if (state.selectedBudget !== 'all') {
      if (vendor.priceRange.category !== state.selectedBudget) {
        return false;
      }
    }

    // Rating filter
    if (state.selectedRating > 0) {
      if (vendor.rating < state.selectedRating) {
        return false;
      }
    }

    // Services filter
    if (state.selectedServices.length > 0) {
      const matchAllServices = state.selectedServices.every(srv =>
        vendor.services.includes(srv)
      );
      if (!matchAllServices) return false;
    }

    return true;
  }).sort((a, b) => {
    if (state.sortBy === 'rating_desc') return b.rating - a.rating;
    if (state.sortBy === 'price_asc') return a.priceRange.startingFee - b.priceRange.startingFee;
    if (state.sortBy === 'price_desc') return b.priceRange.startingFee - a.priceRange.startingFee;
    if (state.sortBy === 'reviews_desc') return b.reviewCount - a.reviewCount;
    // Default: popularity (reviews * rating + featured bonus)
    const scoreA = a.rating * a.reviewCount + (a.isFeatured ? 50 : 0);
    const scoreB = b.rating * b.reviewCount + (b.isFeatured ? 50 : 0);
    return scoreB - scoreA;
  });
}

// Render Vendor Cards
function renderVendorGrid() {
  const container = document.getElementById('vendors-grid-container');
  if (!container) return;

  const filtered = getFilteredVendors();
  const countEl = document.getElementById('vendor-results-count');
  if (countEl) {
    countEl.textContent = `${filtered.length} verified planners`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
        <div class="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          ✕
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">No Wedding Planners Found</h3>
        <p class="text-gray-500 max-w-md mx-auto mb-6 text-sm">
          We couldn't find planners matching your current filter criteria in ${state.activeCity}. Try clearing or widening your filters.
        </p>
        <button id="reset-filters-btn-empty" class="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm">
          Reset All Filters
        </button>
      </div>
    `;
    const resetBtn = document.getElementById('reset-filters-btn-empty');
    if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
    return;
  }

  const isGrid = state.viewMode === 'grid';
  container.className = isGrid
    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
    : "space-y-6";

  container.innerHTML = filtered.map(vendor => {
    const isShortlisted = state.shortlist.includes(vendor.id);
    const currIndex = state.carouselIndices[vendor.id] || 0;
    const currentPhoto = vendor.photos[currIndex] || vendor.coverImage;

    let badgeHtml = '';
    if (vendor.badge === 'Handpicked') {
      badgeHtml = `<span class="badge-handpicked px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-xs">👑 Handpicked</span>`;
    } else if (vendor.badge === 'Top Rated 2026') {
      badgeHtml = `<span class="badge-toprated px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-xs">⭐ Top Rated 2026</span>`;
    } else if (vendor.isVerified) {
      badgeHtml = `<span class="badge-verified px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-xs">✓ Verified</span>`;
    }

    if (isGrid) {
      return `
        <div class="vendor-card bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between" data-vendor-id="${vendor.id}">
          <!-- Photo Container -->
          <div class="relative w-full h-56 bg-gray-100 overflow-hidden group">
            <img 
              src="${currentPhoto}" 
              alt="${vendor.name}" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer vendor-trigger"
              data-vendor-id="${vendor.id}"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

            <!-- Top Overlay Badges -->
            <div class="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
              ${badgeHtml}
            </div>

            <!-- Heart / Shortlist Button -->
            <button 
              class="shortlist-btn absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-rose-600 transition-colors shadow-sm z-10"
              data-vendor-id="${vendor.id}"
              title="${isShortlisted ? 'Remove from shortlist' : 'Add to shortlist'}"
            >
              <svg class="w-5 h-5 ${isShortlisted ? 'fill-rose-600 text-rose-600' : 'text-gray-600'}" fill="${isShortlisted ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            <!-- Carousel Controls -->
            ${vendor.photos.length > 1 ? `
              <button class="carousel-btn prev-photo absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center text-sm shadow hover:bg-black/80 z-10" data-vendor-id="${vendor.id}">
                ‹
              </button>
              <button class="carousel-btn next-photo absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center text-sm shadow hover:bg-black/80 z-10" data-vendor-id="${vendor.id}">
                ›
              </button>
              <div class="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded-full z-10">
                ${currIndex + 1}/${vendor.photos.length} photos
              </div>
            ` : ''}

            <!-- Bottom Left Info Overlay -->
            <div class="absolute bottom-3 left-3 text-white pointer-events-none z-10">
              <span class="text-xs font-medium text-rose-200 uppercase tracking-wider">${vendor.locality}</span>
            </div>
          </div>

          <!-- Card Content Body -->
          <div class="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-2 mb-1.5">
                <h3 class="font-bold text-gray-900 text-base leading-snug hover:text-rose-600 transition-colors cursor-pointer vendor-trigger" data-vendor-id="${vendor.id}">
                  ${vendor.name}
                </h3>
                <div class="flex items-center gap-1 bg-green-700 text-white px-2 py-0.5 rounded-md text-xs font-bold shrink-0">
                  <span>★</span>
                  <span>${vendor.rating}</span>
                </div>
              </div>

              <div class="text-xs text-gray-500 mb-3 flex items-center gap-2">
                <span>📍 ${vendor.locality}, ${vendor.city}</span>
                <span>•</span>
                <span class="text-gray-600 font-medium">${vendor.reviewCount} reviews</span>
              </div>

              <!-- Price Indicators -->
              <div class="bg-rose-50/60 rounded-xl p-2.5 mb-3 border border-rose-100/60">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-gray-600 font-medium">Planning Fee:</span>
                  <span class="text-rose-700 font-bold text-sm">${vendor.priceRange.feeLabel}</span>
                </div>
                ${vendor.priceRange.decorStartingFee ? `
                  <div class="flex items-center justify-between text-[11px] text-gray-500 mt-1 pt-1 border-t border-rose-100/60">
                    <span>Decor Starting from:</span>
                    <span class="font-semibold text-gray-700">${vendor.priceRange.decorStartingFee}</span>
                  </div>
                ` : ''}
              </div>

              <!-- Services Chips -->
              <div class="flex flex-wrap gap-1.5 mb-3">
                ${vendor.services.slice(0, 3).map(s => `
                  <span class="bg-gray-100 text-gray-600 text-[11px] font-medium px-2 py-0.5 rounded-md">
                    ${s}
                  </span>
                `).join('')}
                ${vendor.services.length > 3 ? `
                  <span class="bg-gray-100 text-gray-500 text-[11px] font-medium px-1.5 py-0.5 rounded-md">
                    +${vendor.services.length - 3}
                  </span>
                ` : ''}
              </div>
            </div>

            <!-- Action CTAs -->
            <div class="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
              <button 
                class="view-contact-btn text-xs font-semibold py-2 px-3 border border-gray-300 rounded-xl text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5"
                data-vendor-id="${vendor.id}"
              >
                <span>📞</span>
                <span>Contact</span>
              </button>
              <button 
                class="quote-btn text-xs font-semibold py-2 px-3 bg-vowora-gradient text-white rounded-xl hover:opacity-95 transition-opacity shadow-xs flex items-center justify-center gap-1.5"
                data-vendor-id="${vendor.id}"
              >
                <span>Send Enquiry</span>
              </button>
            </div>
          </div>
        </div>
      `;
    } else {
      // List View
      return `
        <div class="vendor-card bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row" data-vendor-id="${vendor.id}">
          <div class="relative w-full md:w-80 h-56 md:h-auto bg-gray-100 overflow-hidden shrink-0 group">
            <img 
              src="${currentPhoto}" 
              alt="${vendor.name}" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer vendor-trigger"
              data-vendor-id="${vendor.id}"
            />
            <div class="absolute top-3 left-3 z-10">${badgeHtml}</div>
            <button class="shortlist-btn absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-gray-600 hover:text-rose-600 z-10" data-vendor-id="${vendor.id}">
              <svg class="w-5 h-5 ${isShortlisted ? 'fill-rose-600 text-rose-600' : 'text-gray-600'}" fill="${isShortlisted ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 hover:text-rose-600 cursor-pointer vendor-trigger" data-vendor-id="${vendor.id}">${vendor.name}</h3>
                  <p class="text-sm text-gray-500 mt-1">📍 ${vendor.locality}, ${vendor.city} • <span class="text-rose-600 font-medium">${vendor.weddingsCount}+ Weddings Planned</span></p>
                </div>
                <div class="flex items-center gap-1.5 bg-green-700 text-white px-3 py-1 rounded-lg text-sm font-bold">
                  <span>★</span>
                  <span>${vendor.rating}</span>
                  <span class="text-xs font-normal text-green-100">(${vendor.reviewCount})</span>
                </div>
              </div>
              <p class="text-sm text-gray-600 mt-3 line-clamp-2">${vendor.about}</p>
              <div class="flex flex-wrap gap-2 mt-4">
                ${vendor.services.map(s => `<span class="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md">${s}</span>`).join('')}
              </div>
            </div>
            <div class="pt-5 mt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span class="text-xs text-gray-500 uppercase tracking-wider block font-medium">Planning Fee</span>
                <span class="text-rose-700 font-extrabold text-lg">${vendor.priceRange.feeLabel}</span>
              </div>
              <div class="flex items-center gap-3">
                <button class="view-contact-btn text-sm font-semibold py-2.5 px-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50" data-vendor-id="${vendor.id}">
                  📞 Contact
                </button>
                <button class="quote-btn text-sm font-semibold py-2.5 px-5 bg-vowora-gradient text-white rounded-xl shadow-xs" data-vendor-id="${vendor.id}">
                  Send Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }).join('');

  attachCardEvents();
}

// Attach Event Listeners to Vendor Cards
function attachCardEvents() {
  // Detail Trigger
  document.querySelectorAll('.vendor-trigger').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = el.dataset.vendorId;
      openVendorModal(id);
    });
  });

  // Shortlist Button
  document.querySelectorAll('.shortlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.vendorId;
      toggleShortlist(id);
    });
  });

  // Contact Button
  document.querySelectorAll('.view-contact-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.vendorId;
      const vendor = state.vendors.find(v => v.id === id);
      if (vendor) {
        alert(`Direct Vendor Contact:\n\n${vendor.name}\nPhone: ${vendor.phone}\nEmail: ${vendor.email}\nAddress: ${vendor.address}\n\nClick OK to open WhatsApp conversation.`);
        window.open(`https://wa.me/${vendor.whatsapp}?text=Hi%20${encodeURIComponent(vendor.name)},%20I%20found%20your%20profile%20on%20Vowora%20and%20would%20love%20to%20discuss%20planning%20my%20wedding!`, '_blank');
      }
    });
  });

  // Quote Button
  document.querySelectorAll('.quote-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.vendorId;
      const vendor = state.vendors.find(v => v.id === id);
      if (vendor) {
        openQuoteModal(vendor);
      }
    });
  });

  // Photo Carousel Controls
  document.querySelectorAll('.prev-photo').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.vendorId;
      const vendor = state.vendors.find(v => v.id === id);
      if (!vendor) return;
      const cur = state.carouselIndices[id] || 0;
      state.carouselIndices[id] = (cur - 1 + vendor.photos.length) % vendor.photos.length;
      renderVendorGrid();
    });
  });

  document.querySelectorAll('.next-photo').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.vendorId;
      const vendor = state.vendors.find(v => v.id === id);
      if (!vendor) return;
      const cur = state.carouselIndices[id] || 0;
      state.carouselIndices[id] = (cur + 1) % vendor.photos.length;
      renderVendorGrid();
    });
  });
}

// Shortlist toggle
function toggleShortlist(vendorId) {
  const index = state.shortlist.indexOf(vendorId);
  if (index === -1) {
    state.shortlist.push(vendorId);
    triggerConfetti();
  } else {
    state.shortlist.splice(index, 1);
  }
  saveStorage();
  renderVendorGrid();
  renderShortlistDrawer();
}

// Open Full Vendor Detail Modal
function openVendorModal(vendorId) {
  const vendor = state.vendors.find(v => v.id === vendorId);
  if (!vendor) return;

  state.activeVendorModal = vendor;
  state.activeVendorTab = "overview";

  const modalContainer = document.getElementById('vendor-detail-modal');
  if (!modalContainer) return;

  renderVendorModalContent();
  modalContainer.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeVendorModal() {
  const modalContainer = document.getElementById('vendor-detail-modal');
  if (modalContainer) modalContainer.classList.add('hidden');
  state.activeVendorModal = null;
  document.body.style.overflow = '';
}

function renderVendorModalContent() {
  const vendor = state.activeVendorModal;
  if (!vendor) return;

  const content = document.getElementById('vendor-modal-body');
  if (!content) return;

  const isShortlisted = state.shortlist.includes(vendor.id);

  content.innerHTML = `
    <!-- Top Hero Banner with Multi Photos -->
    <div class="relative bg-gray-900 text-white">
      <div class="h-72 md:h-96 w-full grid grid-cols-1 md:grid-cols-3 gap-1 overflow-hidden">
        <div class="md:col-span-2 h-full overflow-hidden">
          <img src="${vendor.photos[0] || vendor.coverImage}" class="w-full h-full object-cover" alt="${vendor.name}" />
        </div>
        <div class="hidden md:grid grid-rows-2 gap-1 h-full">
          <img src="${vendor.photos[1] || vendor.photos[0]}" class="w-full h-full object-cover" alt="${vendor.name}" />
          <img src="${vendor.photos[2] || vendor.photos[0]}" class="w-full h-full object-cover" alt="${vendor.name}" />
        </div>
      </div>

      <!-- Close Button -->
      <button id="close-modal-x" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center text-xl font-bold transition-colors z-20">
        ✕
      </button>

      <!-- Overlay Badges -->
      <div class="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-4 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-xl">
        <div>
          <div class="flex items-center gap-2 mb-2">
            ${vendor.badge ? `<span class="bg-rose-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">${vendor.badge}</span>` : ''}
            <span class="bg-white/20 backdrop-blur-xs text-xs font-medium px-2.5 py-0.5 rounded-full">🏆 ${vendor.weddingsCount}+ Weddings Executed</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-extrabold text-white">${vendor.name}</h2>
          <p class="text-sm text-gray-200 mt-1">📍 ${vendor.address}</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="text-right">
            <div class="flex items-center justify-end gap-1 text-yellow-400 font-extrabold text-xl">
              <span>★</span>
              <span>${vendor.rating}</span>
            </div>
            <span class="text-xs text-gray-300 font-medium">${vendor.reviewCount} verified reviews</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Tabs inside Profile -->
    <div class="bg-white border-b border-gray-200 px-6 sticky top-0 z-10 flex items-center justify-between">
      <div class="flex space-x-6 overflow-x-auto text-sm font-semibold">
        <button class="vendor-tab-btn py-4 border-b-2 ${state.activeVendorTab === 'overview' ? 'border-rose-600 text-rose-600' : 'border-transparent text-gray-600 hover:text-gray-900'}" data-tab="overview">
          Overview & Bio
        </button>
        <button class="vendor-tab-btn py-4 border-b-2 ${state.activeVendorTab === 'packages' ? 'border-rose-600 text-rose-600' : 'border-transparent text-gray-600 hover:text-gray-900'}" data-tab="packages">
          Pricing & Packages
        </button>
        <button class="vendor-tab-btn py-4 border-b-2 ${state.activeVendorTab === 'portfolio' ? 'border-rose-600 text-rose-600' : 'border-transparent text-gray-600 hover:text-gray-900'}" data-tab="portfolio">
          Portfolio & Albums (${vendor.photos.length})
        </button>
        <button class="vendor-tab-btn py-4 border-b-2 ${state.activeVendorTab === 'reviews' ? 'border-rose-600 text-rose-600' : 'border-transparent text-gray-600 hover:text-gray-900'}" data-tab="reviews">
          Reviews (${vendor.reviewCount})
        </button>
        <button class="vendor-tab-btn py-4 border-b-2 ${state.activeVendorTab === 'faqs' ? 'border-rose-600 text-rose-600' : 'border-transparent text-gray-600 hover:text-gray-900'}" data-tab="faqs">
          FAQs
        </button>
      </div>

      <div class="hidden md:flex items-center gap-2">
        <button id="modal-shortlist-btn" class="p-2 text-gray-500 hover:text-rose-600 rounded-lg">
          <svg class="w-6 h-6 ${isShortlisted ? 'fill-rose-600 text-rose-600' : ''}" fill="${isShortlisted ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Modal Content & Sticky Quote Widget Layout -->
    <div class="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-8" id="vendor-tab-content-area">
        ${renderActiveVendorTabContent(vendor)}
      </div>

      <!-- Sticky Quick Quote Sidebar -->
      <div class="lg:col-span-1">
        <div class="sticky top-20 bg-rose-50/50 border border-rose-200/80 rounded-2xl p-6 shadow-sm">
          <h4 class="text-lg font-bold text-gray-900 mb-1">Check Availability</h4>
          <p class="text-xs text-gray-500 mb-4">Direct quote with best price guarantee through Vowora</p>

          <div class="bg-white rounded-xl p-3 border border-rose-100 mb-4">
            <div class="text-xs text-gray-500">Planning Starting Fee</div>
            <div class="text-xl font-black text-rose-600">${vendor.priceRange.feeLabel}</div>
            <div class="text-[11px] text-gray-400 mt-0.5">Decor starting from: ${vendor.priceRange.decorStartingFee}</div>
          </div>

          <form id="quick-quote-form" class="space-y-3">
            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">Your Full Name</label>
              <input type="text" id="quick-name" required placeholder="e.g. Priya Sharma" class="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-1 focus:ring-rose-500" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">WhatsApp / Phone Number</label>
              <input type="tel" id="quick-phone" required placeholder="+91 98765 43210" class="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-1 focus:ring-rose-500" />
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Wedding Date</label>
                <input type="date" id="quick-date" required class="w-full px-2 py-2 text-xs border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Guest Count</label>
                <select id="quick-guests" class="w-full px-2 py-2 text-xs border border-gray-300 rounded-lg">
                  <option value="100-300">100 - 300 Guests</option>
                  <option value="300-600" selected>300 - 600 Guests</option>
                  <option value="600-1000">600 - 1000 Guests</option>
                  <option value="1000+">1000+ Guests</option>
                </select>
              </div>
            </div>
            <button type="submit" class="w-full py-3 bg-vowora-gradient text-white text-sm font-bold rounded-xl shadow-sm hover:opacity-95 transition-opacity mt-2">
              Request Free Pricing & Quote
            </button>
            <p class="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
              <span>🔒</span> Your information is safe & shared only with ${vendor.name}
            </p>
          </form>
        </div>
      </div>
    </div>
  `;

  // Close X
  const closeBtn = document.getElementById('close-modal-x');
  if (closeBtn) closeBtn.addEventListener('click', closeVendorModal);

  // Tab Switching
  document.querySelectorAll('.vendor-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeVendorTab = btn.dataset.tab;
      renderVendorModalContent();
    });
  });

  // Shortlist in modal
  const modalShortlist = document.getElementById('modal-shortlist-btn');
  if (modalShortlist) {
    modalShortlist.addEventListener('click', () => {
      toggleShortlist(vendor.id);
      renderVendorModalContent();
    });
  }

  // Quick Quote Form Submit
  const quoteForm = document.getElementById('quick-quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enquiry = {
        id: "enq-" + Date.now(),
        vendorId: vendor.id,
        vendorName: vendor.name,
        name: document.getElementById('quick-name').value,
        phone: document.getElementById('quick-phone').value,
        date: document.getElementById('quick-date').value,
        guests: document.getElementById('quick-guests').value,
        status: "Quote Requested",
        timestamp: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
      };
      state.enquiries.unshift(enquiry);
      saveStorage();
      triggerConfetti();
      alert(`🎉 Enquiry successfully sent to ${vendor.name}!\n\nThe planning team will contact you on WhatsApp/Phone within 2 hours with available dates and custom packages.`);
      closeVendorModal();
      renderInquiriesDrawer();
    });
  }
}

function renderActiveVendorTabContent(vendor) {
  if (state.activeVendorTab === 'packages') {
    return `
      <div>
        <h3 class="text-xl font-bold text-gray-900 mb-4">Curated Wedding Packages</h3>
        <div class="space-y-4">
          ${vendor.packages.map(pkg => `
            <div class="border border-gray-200 rounded-2xl p-5 hover:border-rose-300 transition-colors bg-white shadow-2xs">
              <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h4 class="text-lg font-bold text-gray-900">${pkg.name}</h4>
                  <p class="text-xs text-gray-500 mt-1">${pkg.description}</p>
                </div>
                <div class="text-right">
                  <span class="text-rose-600 font-extrabold text-xl">${pkg.price}</span>
                  <span class="text-[11px] text-gray-400 block">+ taxes</span>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-gray-100">
                <span class="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">Package Deliverables:</span>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-600">
                  ${pkg.features.map(f => `
                    <div class="flex items-center gap-1.5">
                      <span class="text-green-600 font-bold">✓</span>
                      <span>${f}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (state.activeVendorTab === 'portfolio') {
    return `
      <div>
        <h3 class="text-xl font-bold text-gray-900 mb-4">Wedding Portfolio & Albums</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
          ${vendor.photos.map(p => `
            <div class="h-48 rounded-xl overflow-hidden shadow-2xs group relative bg-gray-100">
              <img src="${p}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" alt="Wedding Still" />
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (state.activeVendorTab === 'reviews') {
    return `
      <div>
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xl font-bold text-gray-900">Verified Couple Reviews (${vendor.reviewCount})</h3>
          <div class="flex items-center gap-2 bg-green-50 text-green-800 px-3 py-1 rounded-xl text-sm font-bold border border-green-200">
            <span>★</span>
            <span>${vendor.rating} out of 5.0</span>
          </div>
        </div>
        <div class="space-y-4">
          ${vendor.reviews.map(r => `
            <div class="border border-gray-100 bg-gray-50/50 rounded-2xl p-5">
              <div class="flex items-center justify-between mb-2">
                <div>
                  <h4 class="font-bold text-gray-900 text-sm">${r.author}</h4>
                  <p class="text-xs text-gray-500">Married in ${r.weddingDate} at <span class="font-medium text-gray-700">${r.venue}</span></p>
                </div>
                <div class="flex text-yellow-400 text-xs">
                  ${'★'.repeat(r.rating)}
                </div>
              </div>
              <h5 class="text-xs font-bold text-rose-700 mt-2 mb-1">"${r.title}"</h5>
              <p class="text-xs text-gray-600 leading-relaxed">${r.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (state.activeVendorTab === 'faqs') {
    return `
      <div>
        <h3 class="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
        <div class="space-y-3">
          ${vendor.faqs.map(f => `
            <div class="border border-gray-200 rounded-xl p-4 bg-white">
              <h4 class="font-bold text-gray-900 text-sm mb-1.5">Q: ${f.q}</h4>
              <p class="text-xs text-gray-600 leading-relaxed">${f.a}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Default: Overview
  return `
    <div>
      <h3 class="text-xl font-bold text-gray-900 mb-3">About ${vendor.name}</h3>
      <p class="text-sm text-gray-600 leading-relaxed mb-6">${vendor.about}</p>

      <h4 class="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Services Offered</h4>
      <div class="flex flex-wrap gap-2 mb-6">
        ${vendor.services.map(s => `
          <span class="bg-rose-50 text-rose-700 text-xs font-semibold px-3 py-1.5 rounded-xl border border-rose-100">
            ✓ ${s}
          </span>
        `).join('')}
      </div>

      <h4 class="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Specialty & Expertise</h4>
      <p class="text-sm text-gray-700 font-medium mb-6">✨ ${vendor.specialty}</p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
        <div>
          <span class="text-xs text-gray-400 block font-medium">Experience</span>
          <span class="text-base font-bold text-gray-800">${vendor.experienceYears} Years</span>
        </div>
        <div>
          <span class="text-xs text-gray-400 block font-medium">Weddings</span>
          <span class="text-base font-bold text-gray-800">${vendor.weddingsCount}+</span>
        </div>
        <div>
          <span class="text-xs text-gray-400 block font-medium">Rating</span>
          <span class="text-base font-bold text-green-700">★ ${vendor.rating}</span>
        </div>
        <div>
          <span class="text-xs text-gray-400 block font-medium">City Coverage</span>
          <span class="text-base font-bold text-gray-800">${vendor.city} & Pan-India</span>
        </div>
      </div>
    </div>
  `;
}

// Open Dedicated Lead Capture Quote Modal
function openQuoteModal(vendor) {
  state.quoteVendor = vendor;
  const modal = document.getElementById('lead-quote-modal');
  if (!modal) return;

  const titleEl = document.getElementById('quote-modal-vendor-name');
  if (titleEl) titleEl.textContent = vendor.name;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeQuoteModal() {
  const modal = document.getElementById('lead-quote-modal');
  if (modal) modal.classList.add('hidden');
  state.quoteVendor = null;
  document.body.style.overflow = '';
}

// Interactive Wedding Budget Calculator
function initBudgetCalculator() {
  const inputEl = document.getElementById('total-budget-input');
  const sliderEl = document.getElementById('total-budget-slider');

  if (!inputEl || !sliderEl) return;

  function update() {
    const total = parseInt(sliderEl.value, 10);
    state.totalBudget = total;
    inputEl.value = total;
    renderBudgetBreakdown(total);
    saveStorage();
  }

  sliderEl.addEventListener('input', () => {
    inputEl.value = sliderEl.value;
    update();
  });

  inputEl.addEventListener('change', () => {
    sliderEl.value = inputEl.value;
    update();
  });

  renderBudgetBreakdown(state.totalBudget);
}

function renderBudgetBreakdown(total) {
  const allocations = [
    { name: "Venue & Catering", percent: 40, color: "bg-rose-500", icon: "🏰" },
    { name: "Decor & Production", percent: 20, color: "bg-amber-500", icon: "🌸" },
    { name: "Photography & Video", percent: 12, color: "bg-indigo-500", icon: "📷" },
    { name: "Wedding Planner & Coordination", percent: 8, color: "bg-emerald-500", icon: "📋" },
    { name: "Bridal Attire & Jewellery", percent: 12, color: "bg-purple-500", icon: "👗" },
    { name: "Music, Entertainment & Gifts", percent: 8, color: "bg-pink-500", icon: "🎁" }
  ];

  const breakdownContainer = document.getElementById('budget-categories-list');
  const progressContainer = document.getElementById('budget-progress-bar');
  if (!breakdownContainer || !progressContainer) return;

  progressContainer.innerHTML = allocations.map(item => `
    <div style="width: ${item.percent}%" class="${item.color} h-3" title="${item.name}: ${item.percent}%"></div>
  `).join('');

  breakdownContainer.innerHTML = allocations.map(item => {
    const amount = (total * item.percent) / 100;
    return `
      <div class="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
        <div class="flex items-center gap-3">
          <span class="text-xl">${item.icon}</span>
          <div>
            <span class="font-bold text-gray-800 text-xs block">${item.name}</span>
            <span class="text-[11px] text-gray-400 font-medium">${item.percent}% recommended</span>
          </div>
        </div>
        <div class="text-right">
          <span class="font-black text-gray-900 text-sm block">${formatINR(amount)}</span>
          <span class="text-[10px] text-rose-600 font-medium cursor-pointer hover:underline" data-category="${item.name}">Explore vendors ›</span>
        </div>
      </div>
    `;
  }).join('');
}

// 12-Month Interactive Wedding Checklist
function initChecklist() {
  renderChecklist();

  const form = document.getElementById('add-task-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('new-task-title');
      const category = document.getElementById('new-task-category').value;
      if (!input.value.trim()) return;

      state.checklist.push({
        id: "chk-" + Date.now(),
        category,
        title: input.value.trim(),
        done: false
      });
      input.value = '';
      saveStorage();
      renderChecklist();
    });
  }
}

function renderChecklist() {
  const container = document.getElementById('checklist-items-container');
  const progressText = document.getElementById('checklist-progress-text');
  const progressBar = document.getElementById('checklist-progress-bar');
  if (!container) return;

  const total = state.checklist.length;
  const completed = state.checklist.filter(i => i.done).length;
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);

  if (progressText) progressText.textContent = `${completed} of ${total} tasks completed (${pct}%)`;
  if (progressBar) progressBar.style.width = `${pct}%`;

  // Group by timeline category
  const groups = {};
  state.checklist.forEach(item => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
  });

  container.innerHTML = Object.keys(groups).map(categoryName => `
    <div class="mb-6">
      <h4 class="text-xs font-extrabold uppercase tracking-wider text-rose-700 mb-3 flex items-center gap-2">
        <span>⏱</span> ${categoryName}
      </h4>
      <div class="space-y-2">
        ${groups[categoryName].map(item => `
          <div class="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200/80 hover:border-rose-200 transition-colors shadow-2xs">
            <label class="flex items-center gap-3 cursor-pointer flex-1">
              <input 
                type="checkbox" 
                class="task-checkbox w-4 h-4 text-rose-600 rounded border-gray-300 focus:ring-rose-500" 
                data-id="${item.id}"
                ${item.done ? 'checked' : ''}
              />
              <span class="text-xs font-medium ${item.done ? 'line-through text-gray-400' : 'text-gray-700'}">
                ${item.title}
              </span>
            </label>
            <button class="delete-task-btn text-gray-300 hover:text-red-500 text-xs px-2" data-id="${item.id}">
              ✕
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Events
  container.querySelectorAll('.task-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      const id = cb.dataset.id;
      const task = state.checklist.find(t => t.id === id);
      if (task) {
        task.done = cb.checked;
        if (task.done) triggerConfetti();
        saveStorage();
        renderChecklist();
      }
    });
  });

  container.querySelectorAll('.delete-task-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      state.checklist = state.checklist.filter(t => t.id !== id);
      saveStorage();
      renderChecklist();
    });
  });
}

// Shortlist Drawer
function renderShortlistDrawer() {
  const container = document.getElementById('shortlist-drawer-content');
  if (!container) return;

  const shortlistedVendors = state.vendors.filter(v => state.shortlist.includes(v.id));

  if (shortlistedVendors.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-gray-400 text-xs">
        <span class="text-3xl block mb-2">❤️</span>
        No wedding planners shortlisted yet.<br/>Click the heart icon on any planner card to save them here.
      </div>
    `;
    return;
  }

  container.innerHTML = shortlistedVendors.map(vendor => `
    <div class="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-rose-200 transition-colors bg-white">
      <img src="${vendor.coverImage}" class="w-16 h-16 rounded-lg object-cover" alt="${vendor.name}" />
      <div class="flex-1 min-w-0">
        <h5 class="text-xs font-bold text-gray-900 truncate">${vendor.name}</h5>
        <p class="text-[11px] text-gray-500">${vendor.locality} • ★ ${vendor.rating}</p>
        <span class="text-[11px] font-bold text-rose-600">${vendor.priceRange.feeLabel}</span>
      </div>
      <div class="flex flex-col gap-1">
        <button class="quote-btn text-[10px] font-bold py-1 px-2.5 bg-rose-600 text-white rounded-md" data-vendor-id="${vendor.id}">
          Quote
        </button>
        <button class="remove-shortlist-btn text-[10px] text-gray-400 hover:text-red-600 py-0.5" data-vendor-id="${vendor.id}">
          Remove
        </button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.quote-btn').forEach(b => {
    b.addEventListener('click', () => {
      const v = state.vendors.find(item => item.id === b.dataset.vendorId);
      if (v) openQuoteModal(v);
    });
  });

  container.querySelectorAll('.remove-shortlist-btn').forEach(b => {
    b.addEventListener('click', () => {
      toggleShortlist(b.dataset.vendorId);
    });
  });
}

// Inquiries Drawer
function renderInquiriesDrawer() {
  const container = document.getElementById('inquiries-drawer-content');
  if (!container) return;

  if (state.enquiries.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-gray-400 text-xs">
        <span class="text-3xl block mb-2">📨</span>
        No quote requests sent yet.<br/>Request quotes from top planners to track responses here.
      </div>
    `;
    return;
  }

  container.innerHTML = state.enquiries.map(enq => `
    <div class="p-4 rounded-xl border border-gray-100 bg-white space-y-2">
      <div class="flex items-center justify-between">
        <h5 class="text-xs font-bold text-gray-900">${enq.vendorName}</h5>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">${enq.status}</span>
      </div>
      <div class="text-[11px] text-gray-500">
        <div>📅 Wedding: ${enq.date || 'TBD'} • 👥 ${enq.guests}</div>
        <div class="text-gray-400 text-[10px] mt-1">Requested on: ${enq.timestamp}</div>
      </div>
    </div>
  `).join('');
}

// City Switcher Modal
function initCitySelector() {
  const container = document.getElementById('city-selector-grid');
  if (!container) return;

  container.innerHTML = CITIES_DATA.map(c => `
    <button class="city-btn p-3 rounded-xl border text-left transition-all ${c.name === state.activeCity ? 'border-rose-600 bg-rose-50/50 text-rose-700 font-bold' : 'border-gray-200 hover:border-gray-300 text-gray-700'}" data-city="${c.name}">
      <span class="text-sm block">${c.name}</span>
      <span class="text-[11px] text-gray-400 block">${c.count} vendors</span>
    </button>
  `).join('');

  container.querySelectorAll('.city-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeCity = btn.dataset.city;
      document.getElementById('current-city-label').textContent = state.activeCity;
      document.getElementById('city-selector-modal').classList.add('hidden');
      renderVendorGrid();
    });
  });
}

// Reset Filters
function resetAllFilters() {
  state.selectedLocalities = [];
  state.selectedBudget = "all";
  state.selectedRating = 0;
  state.selectedServices = [];
  state.searchQuery = "";

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = "";

  document.querySelectorAll('.locality-checkbox').forEach(cb => cb.checked = false);
  document.querySelectorAll('.budget-radio').forEach(r => r.checked = r.value === 'all');
  document.querySelectorAll('.rating-radio').forEach(r => r.checked = r.value === '0');
  document.querySelectorAll('.service-checkbox').forEach(cb => cb.checked = false);

  renderVendorGrid();
}

// "List Your Business" Vendor Registration Form
function initVendorRegistration() {
  const form = document.getElementById('vendor-registration-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newVendor = {
      id: "vow-custom-" + Date.now(),
      name: document.getElementById('reg-business-name').value.trim(),
      slug: document.getElementById('reg-business-name').value.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
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
        startingFee: parseInt(document.getElementById('reg-fee').value || '250000', 10),
        feeLabel: `₹${(parseInt(document.getElementById('reg-fee').value || '250000', 10)/100000).toFixed(1)}L - ₹4.5L`,
        decorStartingFee: "₹1,50,000",
        category: "2_5l_to_4l"
      },
      badge: "Verified",
      isVerified: true,
      isFeatured: true,
      services: ["Full Planning", "Decor & Styling"],
      specialty: document.getElementById('reg-specialty').value || "Bespoke Celebrations & Weddings",
      coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
      ],
      about: document.getElementById('reg-about').value,
      packages: [
        {
          name: "Standard Package",
          price: `₹${document.getElementById('reg-fee').value}`,
          description: "Full event planning and vendor management.",
          features: ["Full on-ground execution", "Vendor coordination", "Design consultation"]
        }
      ],
      reviews: [
        {
          author: "Recent Client",
          weddingDate: "March 2026",
          rating: 5,
          title: "Brilliant execution & highly responsive!",
          venue: "Chennai",
          text: "Phenomenal attention to detail and lovely decor curation."
        }
      ],
      faqs: [
        {
          q: "What is your booking advance?",
          a: "25% to confirm the wedding dates."
        }
      ]
    };

    state.vendors.unshift(newVendor);
    triggerConfetti();
    alert(`🎉 Congratulations! Your business "${newVendor.name}" has been registered and verified on Vowora! It is now live in our Chennai directory.`);
    
    document.getElementById('vendor-registration-modal').classList.add('hidden');
    form.reset();
    renderVendorGrid();
  });
}

// Real Weddings Showcase
function renderRealWeddings() {
  const container = document.getElementById('real-weddings-container');
  if (!container) return;

  container.innerHTML = REAL_WEDDINGS_DATA.map(rw => `
    <div class="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-2xs group">
      <div class="h-64 overflow-hidden relative">
        <img src="${rw.image}" alt="${rw.couple}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div class="absolute bottom-3 left-4 right-4 text-white">
          <span class="text-[11px] font-semibold text-rose-300 uppercase tracking-wider">${rw.location}</span>
          <h4 class="text-lg font-bold">${rw.couple}</h4>
        </div>
      </div>
      <div class="p-4 space-y-2">
        <p class="text-xs text-gray-600 line-clamp-2">${rw.description}</p>
        <div class="text-[11px] text-gray-500 pt-2 border-t border-gray-100">
          <span>Venue: <strong>${rw.venue}</strong></span><br/>
          <span>Planner: <strong class="text-rose-600">${rw.planner}</strong></span>
        </div>
        <div class="flex flex-wrap gap-1.5 pt-2">
          ${rw.tags.map(t => `<span class="text-[10px] bg-rose-50 text-rose-700 font-semibold px-2 py-0.5 rounded-full">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Setup Global Filters & Search
function setupFiltersAndSearch() {
  // Search bar
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderVendorGrid();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById('sort-dropdown');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderVendorGrid();
    });
  }

  // View toggle
  const gridBtn = document.getElementById('view-grid-btn');
  const listBtn = document.getElementById('view-list-btn');
  if (gridBtn && listBtn) {
    gridBtn.addEventListener('click', () => {
      state.viewMode = 'grid';
      gridBtn.classList.add('bg-rose-50', 'text-rose-600');
      listBtn.classList.remove('bg-rose-50', 'text-rose-600');
      renderVendorGrid();
    });
    listBtn.addEventListener('click', () => {
      state.viewMode = 'list';
      listBtn.classList.add('bg-rose-50', 'text-rose-600');
      gridBtn.classList.remove('bg-rose-50', 'text-rose-600');
      renderVendorGrid();
    });
  }

  // Locality Filter
  const localityContainer = document.getElementById('locality-filter-list');
  if (localityContainer) {
    localityContainer.innerHTML = CHENNAI_LOCALITIES.slice(1).map(loc => `
      <label class="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 cursor-pointer py-1">
        <input type="checkbox" value="${loc}" class="locality-checkbox rounded border-gray-300 text-rose-600 focus:ring-rose-500" />
        <span>${loc}</span>
      </label>
    `).join('');

    localityContainer.querySelectorAll('.locality-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        if (cb.checked) {
          state.selectedLocalities.push(cb.value);
        } else {
          state.selectedLocalities = state.selectedLocalities.filter(l => l !== cb.value);
        }
        renderVendorGrid();
      });
    });
  }

  // Budget Radios
  document.querySelectorAll('.budget-radio').forEach(r => {
    r.addEventListener('change', (e) => {
      state.selectedBudget = e.target.value;
      renderVendorGrid();
    });
  });

  // Rating Radios
  document.querySelectorAll('.rating-radio').forEach(r => {
    r.addEventListener('change', (e) => {
      state.selectedRating = parseFloat(e.target.value);
      renderVendorGrid();
    });
  });

  // Services Checkboxes
  document.querySelectorAll('.service-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) {
        state.selectedServices.push(cb.value);
      } else {
        state.selectedServices = state.selectedServices.filter(s => s !== cb.value);
      }
      renderVendorGrid();
    });
  });

  // Clear Filters Button
  const clearBtn = document.getElementById('clear-filters-btn');
  if (clearBtn) clearBtn.addEventListener('click', resetAllFilters);
}

// Master Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderVendorGrid();
  updateCounters();
  setupFiltersAndSearch();
  initBudgetCalculator();
  initChecklist();
  initCitySelector();
  initVendorRegistration();
  renderRealWeddings();
  renderShortlistDrawer();
  renderInquiriesDrawer();

  // Navigation Tabs switching (Directory, Tools, Real Weddings)
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

  // Shortlist Drawer Toggle
  const openShortlistBtn = document.getElementById('open-shortlist-btn');
  const closeShortlistBtn = document.getElementById('close-shortlist-btn');
  const shortlistDrawer = document.getElementById('shortlist-drawer');
  if (openShortlistBtn && shortlistDrawer) {
    openShortlistBtn.addEventListener('click', () => {
      renderShortlistDrawer();
      shortlistDrawer.classList.remove('hidden');
    });
  }
  if (closeShortlistBtn && shortlistDrawer) {
    closeShortlistBtn.addEventListener('click', () => {
      shortlistDrawer.classList.add('hidden');
    });
  }

  // Inquiries Drawer Toggle
  const openInquiriesBtn = document.getElementById('open-inquiries-btn');
  const closeInquiriesBtn = document.getElementById('close-inquiries-btn');
  const inquiriesDrawer = document.getElementById('inquiries-drawer');
  if (openInquiriesBtn && inquiriesDrawer) {
    openInquiriesBtn.addEventListener('click', () => {
      renderInquiriesDrawer();
      inquiriesDrawer.classList.remove('hidden');
    });
  }
  if (closeInquiriesBtn && inquiriesDrawer) {
    closeInquiriesBtn.addEventListener('click', () => {
      inquiriesDrawer.classList.add('hidden');
    });
  }

  // City Selector Modal
  const citySelectorBtn = document.getElementById('city-selector-btn');
  const cityModal = document.getElementById('city-selector-modal');
  const closeCityBtn = document.getElementById('close-city-modal-btn');
  if (citySelectorBtn && cityModal) {
    citySelectorBtn.addEventListener('click', () => cityModal.classList.remove('hidden'));
  }
  if (closeCityBtn && cityModal) {
    closeCityBtn.addEventListener('click', () => cityModal.classList.add('hidden'));
  }

  // List Business Modal
  const listBusinessBtn = document.getElementById('list-business-btn');
  const vendorRegModal = document.getElementById('vendor-registration-modal');
  const closeRegBtn = document.getElementById('close-reg-modal-btn');
  if (listBusinessBtn && vendorRegModal) {
    listBusinessBtn.addEventListener('click', () => vendorRegModal.classList.remove('hidden'));
  }
  if (closeRegBtn && vendorRegModal) {
    closeRegBtn.addEventListener('click', () => vendorRegModal.classList.add('hidden'));
  }

  // Dedicated Quote Modal
  const closeQuoteBtn = document.getElementById('close-quote-modal-btn');
  if (closeQuoteBtn) closeQuoteBtn.addEventListener('click', closeQuoteModal);

  const dedicatedQuoteForm = document.getElementById('dedicated-quote-form');
  if (dedicatedQuoteForm) {
    dedicatedQuoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!state.quoteVendor) return;

      const enquiry = {
        id: "enq-" + Date.now(),
        vendorId: state.quoteVendor.id,
        vendorName: state.quoteVendor.name,
        name: document.getElementById('quote-form-name').value,
        phone: document.getElementById('quote-form-phone').value,
        date: document.getElementById('quote-form-date').value,
        guests: document.getElementById('quote-form-guests').value,
        status: "Quote Requested",
        timestamp: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
      };
      state.enquiries.unshift(enquiry);
      saveStorage();
      triggerConfetti();
      alert(`🎉 Enquiry successfully sent to ${state.quoteVendor.name}!\n\nTheir team will contact you shortly on WhatsApp.`);
      closeQuoteModal();
      renderInquiriesDrawer();
    });
  }
});
