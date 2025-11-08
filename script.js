(function () {
  // Data Storage
  const STORAGE_KEYS = {
    events: 'eh_events',
    favorites: 'eh_favorites',
    cart: 'eh_cart',
    recentlyViewed: 'eh_recently_viewed',
    reviews: 'eh_reviews',
    users: 'eh_users',
    currentUser: 'eh_current_user'
  };

  function getStorage(key, fallback = []) {
    try {
      return JSON.parse(localStorage.getItem(key) || '[]') || fallback;
    } catch {
      return fallback;
    }
  }

  function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Sample Events Data with expanded features
  const sampleEvents = [
    {
      id: '1',
      title: 'Live: Midnight City',
      category: 'concerts',
      date: '2024-10-24',
      location: 'Dubai',
      price: 49,
      originalPrice: 59,
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1200&auto=format&fit=crop',
      description: 'High-energy electronic night with guest DJs. Experience the best of electronic music in an unforgettable setting.',
      venue: 'Dubai Arena',
      time: '8:00 PM',
      tags: ['electronic', 'dance', 'nightlife'],
      rating: 4.8,
      reviews: 124,
      available: 150
    },
    {
      id: '2',
      title: 'Derby Night',
      category: 'sports',
      date: '2024-11-01',
      location: 'Abu Dhabi',
      price: 35,
      originalPrice: 40,
      image: 'https://images.unsplash.com/photo-1520975939530-6a46a1e29f8e?q=80&w=1200&auto=format&fit=crop',
      description: 'Championship football at the national stadium. Watch the biggest match of the season.',
      venue: 'National Stadium',
      time: '7:30 PM',
      tags: ['football', 'championship', 'sports'],
      rating: 4.9,
      reviews: 89,
      available: 200
    },
    {
      id: '3',
      title: 'Classic Theatre',
      category: 'theatre',
      date: '2024-11-09',
      location: 'Sharjah',
      price: 29,
      image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1200&auto=format&fit=crop',
      description: 'Timeless drama performed by an award-winning cast. A must-see theatrical experience.',
      venue: 'Sharjah Theatre',
      time: '6:00 PM',
      tags: ['drama', 'classic', 'award-winning'],
      rating: 4.7,
      reviews: 156,
      available: 80
    },
    {
      id: '4',
      title: 'Food Fest',
      category: 'family',
      date: '2024-11-20',
      location: 'Dubai',
      price: 15,
      image: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1200&auto=format&fit=crop',
      description: 'Street food, live music, and family fun. A perfect day out for the whole family.',
      venue: 'Dubai Park',
      time: '12:00 PM',
      tags: ['food', 'family', 'outdoor'],
      rating: 4.6,
      reviews: 203,
      available: 500
    },
    {
      id: '5',
      title: 'Comedy Night',
      category: 'comedy',
      date: '2024-10-28',
      location: 'Dubai',
      price: 25,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
      description: 'Laugh out loud with top comedians. An evening of non-stop entertainment.',
      venue: 'Comedy Club Dubai',
      time: '9:00 PM',
      tags: ['comedy', 'stand-up', 'entertainment'],
      rating: 4.5,
      reviews: 98,
      available: 120
    },
    {
      id: '6',
      title: 'Tech Workshop',
      category: 'workshops',
      date: '2024-11-05',
      location: 'Dubai',
      price: 40,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
      description: 'Learn the latest in web development and AI. Hands-on sessions with industry experts.',
      venue: 'Tech Hub',
      time: '10:00 AM',
      tags: ['tech', 'workshop', 'learning'],
      rating: 4.8,
      reviews: 67,
      available: 50
    },
    {
      id: '7',
      title: 'Music Festival',
      category: 'festivals',
      date: '2024-11-15',
      location: 'Abu Dhabi',
      price: 75,
      originalPrice: 90,
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop',
      description: 'Three days of music, food, and fun. Featuring international and local artists.',
      venue: 'Festival Grounds',
      time: '2:00 PM',
      tags: ['festival', 'music', 'multi-day'],
      rating: 4.9,
      reviews: 312,
      available: 1000
    },
    {
      id: '8',
      title: 'Basketball Championship',
      category: 'sports',
      date: '2024-11-12',
      location: 'Dubai',
      price: 45,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
      description: 'Watch the finals of the regional basketball championship. High-intensity action guaranteed.',
      venue: 'Sports Complex',
      time: '6:00 PM',
      tags: ['basketball', 'championship', 'finals'],
      rating: 4.7,
      reviews: 145,
      available: 300
    },
    {
      id: '9',
      title: 'Jazz Night',
      category: 'concerts',
      date: '2024-10-30',
      location: 'Dubai',
      price: 35,
      image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=1200&auto=format&fit=crop',
      description: 'Smooth jazz performances by renowned musicians. An intimate evening of soulful music.',
      venue: 'Jazz Lounge',
      time: '8:30 PM',
      tags: ['jazz', 'live music', 'intimate'],
      rating: 4.6,
      reviews: 78,
      available: 60
    },
    {
      id: '10',
      title: 'Art Exhibition',
      category: 'workshops',
      date: '2024-11-08',
      location: 'Sharjah',
      price: 20,
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1200&auto=format&fit=crop',
      description: 'Contemporary art exhibition featuring local and international artists. Guided tours available.',
      venue: 'Art Gallery',
      time: '11:00 AM',
      tags: ['art', 'exhibition', 'culture'],
      rating: 4.5,
      reviews: 92,
      available: 100
    },
    {
      id: '11',
      title: 'Yoga Retreat',
      category: 'workshops',
      date: '2024-11-10',
      location: 'Dubai',
      price: 30,
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
      description: 'Full-day yoga and meditation retreat. Rejuvenate your mind and body.',
      venue: 'Wellness Center',
      time: '7:00 AM',
      tags: ['yoga', 'wellness', 'meditation'],
      rating: 4.7,
      reviews: 134,
      available: 40
    },
    {
      id: '12',
      title: 'Kids Science Fair',
      category: 'family',
      date: '2024-11-18',
      location: 'Dubai',
      price: 10,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00e094b80d?q=80&w=1200&auto=format&fit=crop',
      description: 'Interactive science experiments and demonstrations for kids. Educational and fun!',
      venue: 'Science Museum',
      time: '10:00 AM',
      tags: ['kids', 'science', 'educational'],
      rating: 4.8,
      reviews: 167,
      available: 200
    },
    {
      id: '13',
      title: 'Rock Concert',
      category: 'concerts',
      date: '2024-11-22',
      location: 'Abu Dhabi',
      price: 55,
      originalPrice: 65,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop',
      description: 'Epic rock concert featuring legendary bands. A night you won\'t forget!',
      venue: 'Concert Hall',
      time: '7:00 PM',
      tags: ['rock', 'concert', 'legendary'],
      rating: 4.9,
      reviews: 245,
      available: 500
    },
    {
      id: '14',
      title: 'Tennis Masters',
      category: 'sports',
      date: '2024-11-14',
      location: 'Dubai',
      price: 50,
      image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=1200&auto=format&fit=crop',
      description: 'Watch top-ranked tennis players compete in the masters tournament.',
      venue: 'Tennis Club',
      time: '2:00 PM',
      tags: ['tennis', 'masters', 'tournament'],
      rating: 4.8,
      reviews: 189,
      available: 250
    },
    {
      id: '15',
      title: 'Magic Show',
      category: 'family',
      date: '2024-11-16',
      location: 'Sharjah',
      price: 22,
      image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1200&auto=format&fit=crop',
      description: 'Mind-blowing magic show for the whole family. Illusions and tricks that will amaze!',
      venue: 'Magic Theater',
      time: '4:00 PM',
      tags: ['magic', 'family', 'entertainment'],
      rating: 4.7,
      reviews: 112,
      available: 150
    },
    {
      id: '16',
      title: 'Cooking Class',
      category: 'workshops',
      date: '2024-11-07',
      location: 'Dubai',
      price: 45,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop',
      description: 'Learn to cook authentic Middle Eastern cuisine from expert chefs.',
      venue: 'Culinary School',
      time: '6:00 PM',
      tags: ['cooking', 'culinary', 'hands-on'],
      rating: 4.6,
      reviews: 98,
      available: 30
    },
    {
      id: '17',
      title: 'Hip Hop Night',
      category: 'concerts',
      date: '2024-11-25',
      location: 'Dubai',
      price: 42,
      originalPrice: 50,
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop',
      description: 'Live hip hop performances by top artists. A night of beats and rhymes.',
      venue: 'Music Hall',
      time: '9:00 PM',
      tags: ['hip-hop', 'rap', 'live'],
      rating: 4.7,
      reviews: 156,
      available: 400
    },
    {
      id: '18',
      title: 'Soccer Championship',
      category: 'sports',
      date: '2024-11-19',
      location: 'Abu Dhabi',
      price: 38,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop',
      description: 'Watch the regional soccer championship finals. High-stakes action!',
      venue: 'Sports Arena',
      time: '5:00 PM',
      tags: ['soccer', 'championship', 'finals'],
      rating: 4.8,
      reviews: 201,
      available: 500
    },
    {
      id: '19',
      title: 'Stand-Up Comedy',
      category: 'comedy',
      date: '2024-11-11',
      location: 'Dubai',
      price: 28,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
      description: 'Laugh your heart out with hilarious stand-up comedians.',
      venue: 'Comedy Theater',
      time: '8:00 PM',
      tags: ['comedy', 'stand-up', 'humor'],
      rating: 4.6,
      reviews: 134,
      available: 180
    },
    {
      id: '20',
      title: 'Photography Workshop',
      category: 'workshops',
      date: '2024-11-13',
      location: 'Sharjah',
      price: 35,
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
      description: 'Master photography techniques with professional photographers.',
      venue: 'Art Center',
      time: '2:00 PM',
      tags: ['photography', 'workshop', 'creative'],
      rating: 4.7,
      reviews: 89,
      available: 25
    },
    {
      id: '21',
      title: 'Circus Show',
      category: 'family',
      date: '2024-11-17',
      location: 'Dubai',
      price: 32,
      originalPrice: 40,
      image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1200&auto=format&fit=crop',
      description: 'Amazing circus acts for the whole family. Acrobats, clowns, and more!',
      venue: 'Circus Tent',
      time: '3:00 PM',
      tags: ['circus', 'family', 'entertainment'],
      rating: 4.8,
      reviews: 178,
      available: 300
    },
    {
      id: '22',
      title: 'Classical Music Concert',
      category: 'concerts',
      date: '2024-11-21',
      location: 'Abu Dhabi',
      price: 48,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop',
      description: 'Symphony orchestra performing classical masterpieces.',
      venue: 'Concert Hall',
      time: '7:30 PM',
      tags: ['classical', 'orchestra', 'symphony'],
      rating: 4.9,
      reviews: 167,
      available: 250
    },
    {
      id: '23',
      title: 'Swimming Competition',
      category: 'sports',
      date: '2024-11-23',
      location: 'Dubai',
      price: 25,
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200&auto=format&fit=crop',
      description: 'Watch elite swimmers compete in various events.',
      venue: 'Aquatic Center',
      time: '10:00 AM',
      tags: ['swimming', 'competition', 'aquatic'],
      rating: 4.5,
      reviews: 112,
      available: 200
    },
    {
      id: '24',
      title: 'Poetry Night',
      category: 'workshops',
      date: '2024-11-26',
      location: 'Sharjah',
      price: 18,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
      description: 'Open mic poetry night featuring local and international poets.',
      venue: 'Cultural Center',
      time: '7:00 PM',
      tags: ['poetry', 'literature', 'culture'],
      rating: 4.6,
      reviews: 76,
      available: 80
    },
    {
      id: '25',
      title: 'Dance Performance',
      category: 'theatre',
      date: '2024-11-27',
      location: 'Dubai',
      price: 40,
      originalPrice: 50,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
      description: 'Contemporary dance performance by award-winning troupe.',
      venue: 'Dance Theater',
      time: '8:00 PM',
      tags: ['dance', 'contemporary', 'performance'],
      rating: 4.7,
      reviews: 145,
      available: 150
    },
    {
      id: '26',
      title: 'Gaming Tournament',
      category: 'sports',
      date: '2024-11-28',
      location: 'Dubai',
      price: 30,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
      description: 'Esports tournament featuring popular games. Watch or compete!',
      venue: 'Gaming Arena',
      time: '12:00 PM',
      tags: ['gaming', 'esports', 'tournament'],
      rating: 4.8,
      reviews: 223,
      available: 600
    },
    {
      id: '27',
      title: 'Wine Tasting',
      category: 'workshops',
      date: '2024-11-29',
      location: 'Dubai',
      price: 55,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop',
      description: 'Learn about wines from around the world with expert sommeliers.',
      venue: 'Wine Bar',
      time: '6:30 PM',
      tags: ['wine', 'tasting', 'culinary'],
      rating: 4.6,
      reviews: 98,
      available: 40
    },
    {
      id: '28',
      title: 'Kids Art Workshop',
      category: 'family',
      date: '2024-11-30',
      location: 'Sharjah',
      price: 12,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00e094b80d?q=80&w=1200&auto=format&fit=crop',
      description: 'Creative art workshop for kids. Paint, draw, and create!',
      venue: 'Art Studio',
      time: '11:00 AM',
      tags: ['kids', 'art', 'creative'],
      rating: 4.7,
      reviews: 156,
      available: 30
    },
    {
      id: '29',
      title: 'Jazz & Blues Festival',
      category: 'festivals',
      date: '2024-12-01',
      location: 'Abu Dhabi',
      price: 65,
      originalPrice: 80,
      image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=1200&auto=format&fit=crop',
      description: 'Three-day jazz and blues festival with international artists.',
      venue: 'Festival Park',
      time: '4:00 PM',
      tags: ['jazz', 'blues', 'festival'],
      rating: 4.9,
      reviews: 289,
      available: 800
    },
    {
      id: '30',
      title: 'Martial Arts Demo',
      category: 'sports',
      date: '2024-12-02',
      location: 'Dubai',
      price: 22,
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=1200&auto=format&fit=crop',
      description: 'Martial arts demonstrations and workshops by masters.',
      venue: 'Sports Center',
      time: '3:00 PM',
      tags: ['martial-arts', 'demo', 'sports'],
      rating: 4.6,
      reviews: 134,
      available: 120
    }
  ];

  // Sample Users (Admin and Regular Users)
  const sampleUsers = [
    {
      id: 'user-1',
      name: 'Admin User',
      email: 'admin@eventhub.com',
      password: 'admin123',
      role: 'admin',
      createdAt: '2024-01-01'
    },
    {
      id: 'user-2',
      name: 'John Doe',
      email: 'john@example.com',
      password: 'user123',
      role: 'user',
      createdAt: '2024-01-15'
    },
    {
      id: 'user-3',
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      password: 'user123',
      role: 'user',
      createdAt: '2024-02-01'
    },
    {
      id: 'user-4',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      password: 'user123',
      role: 'user',
      createdAt: '2024-02-10'
    },
    {
      id: 'user-5',
      name: 'Emma Wilson',
      email: 'emma@example.com',
      password: 'user123',
      role: 'user',
      createdAt: '2024-02-20'
    }
  ];

  // Sample Reviews
  const sampleReviews = {
    '1': [
      { user: 'Sarah M.', rating: 5, comment: 'Amazing night! The DJs were incredible.', date: '2024-10-15' },
      { user: 'John D.', rating: 5, comment: 'Best electronic event I\'ve been to!', date: '2024-10-10' },
      { user: 'Emma L.', rating: 4, comment: 'Great atmosphere, would go again.', date: '2024-10-05' }
    ],
    '2': [
      { user: 'Mike T.', rating: 5, comment: 'Incredible match! Worth every penny.', date: '2024-10-20' },
      { user: 'Lisa K.', rating: 5, comment: 'The energy was electric!', date: '2024-10-18' }
    ]
  };

  // Initialize data
  function initData() {
    const events = getStorage(STORAGE_KEYS.events);
    if (events.length === 0) {
      setStorage(STORAGE_KEYS.events, sampleEvents);
    }
    const reviews = getStorage(STORAGE_KEYS.reviews);
    if (Object.keys(reviews).length === 0) {
      setStorage(STORAGE_KEYS.reviews, sampleReviews);
    }
    const users = getStorage(STORAGE_KEYS.users);
    if (users.length === 0) {
      setStorage(STORAGE_KEYS.users, sampleUsers);
    }
  }

  // State
  let currentFilter = 'all';
  let currentCategory = 'all';
  let searchQuery = '';
  let showAllEvents = false;
  let sortBy = 'date';
  let priceRange = { min: 0, max: 200 };

  // DOM Elements
  const yearEl = document.getElementById('year');
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  const openAuthBtn = document.getElementById('open-auth');
  const authModal = document.getElementById('auth-modal');
  const eventModal = document.getElementById('event-modal');
  const cartModal = document.getElementById('cart-modal');
  const favoritesModal = document.getElementById('favorites-modal');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const quickFilters = document.getElementById('quick-filters');
  const categoryPills = document.getElementById('category-pills');
  const eventsGrid = document.getElementById('events-grid');
  const allEventsGrid = document.getElementById('all-events-grid');
  const noEvents = document.getElementById('no-events');
  const viewAllBtn = document.getElementById('view-all-btn');
  const backFeaturedBtn = document.getElementById('back-featured-btn');
  const favoritesBtn = document.getElementById('favorites-btn');
  const cartBtn = document.getElementById('cart-btn');
  const favoritesCount = document.getElementById('favorites-count');
  const cartCount = document.getElementById('cart-count');
  const sortSelect = document.getElementById('sort-select');
  const priceMinSlider = document.getElementById('price-min-slider');
  const priceMaxSlider = document.getElementById('price-max-slider');
  const priceMinDisplay = document.getElementById('price-min');
  const priceMaxDisplay = document.getElementById('price-max');

  // Initialize
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  initData();
  checkLoginStatus();
  renderEvents();
  updateBadges();

  // Sort Select
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderEvents();
      if (showAllEvents) {
        renderAllEvents();
      }
    });
  }

  // Price Filter
  if (priceMinSlider && priceMaxSlider) {
    function updatePriceFilter() {
      const min = parseInt(priceMinSlider.value);
      const max = parseInt(priceMaxSlider.value);
      if (min > max) {
        priceMinSlider.value = max;
        priceMaxSlider.value = min;
      }
      priceRange.min = parseInt(priceMinSlider.value);
      priceRange.max = parseInt(priceMaxSlider.value);
      priceMinDisplay.textContent = priceRange.min;
      priceMaxDisplay.textContent = priceRange.max;
      renderEvents();
      if (showAllEvents) {
        renderAllEvents();
      }
    }

    priceMinSlider.addEventListener('input', updatePriceFilter);
    priceMaxSlider.addEventListener('input', updatePriceFilter);
  }

  // Mobile Menu
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('open', !isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Modal Functions
  function openModal(modal) {
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-modal', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-modal', 'false');
    document.body.style.overflow = '';
  }

  // Auth Modal - Button click handled in updateUserUI

  const authCloseEls = authModal.querySelectorAll('[data-close]');
  authCloseEls.forEach(el => el.addEventListener('click', () => closeModal(authModal)));

  authModal.addEventListener('click', (e) => {
    if (e.target === authModal || e.target.classList.contains('modal-backdrop')) {
      closeModal(authModal);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && authModal.getAttribute('aria-hidden') === 'false') {
      closeModal(authModal);
    }
  });

  const authTabs = Array.from(authModal.querySelectorAll('.tab'));
  const authPanels = Array.from(authModal.querySelectorAll('.panel'));

  authTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      authTabs.forEach((t) => t.classList.toggle('active', t === tab));
      authPanels.forEach((p) => {
        p.classList.toggle('active', p.getAttribute('data-panel') === target);
      });
    });
  });

  // Login Function
  function login(email, password) {
    const users = getStorage(STORAGE_KEYS.users);
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    
    if (user) {
      // Remove password from stored user data
      const { password: _, ...userData } = user;
      setStorage(STORAGE_KEYS.currentUser, userData);
      updateUserUI(userData);
      closeModal(authModal);
      alert(`Welcome back, ${user.name}!`);
      return true;
    } else {
      alert('Invalid email or password. Please try again.');
      return false;
    }
  }

  // Register Function
  function register(name, email, password) {
    const users = getStorage(STORAGE_KEYS.users);
    
    // Check if email already exists
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      alert('Email already registered. Please login instead.');
      return false;
    }

    // Create new user
    const newUser = {
      id: 'user-' + Date.now(),
      name: name,
      email: email,
      password: password,
      role: 'user',
      createdAt: new Date().toISOString().split('T')[0]
    };

    users.push(newUser);
    setStorage(STORAGE_KEYS.users, users);

    // Auto login after registration
    const { password: _, ...userData } = newUser;
    setStorage(STORAGE_KEYS.currentUser, userData);
    updateUserUI(userData);
    closeModal(authModal);
    alert(`Account created successfully! Welcome, ${name}!`);
    return true;
  }

  // Update UI based on user login status
  function updateUserUI(user) {
    const openAuthBtn = document.getElementById('open-auth');
    if (openAuthBtn) {
      // Remove existing event listeners by cloning
      const newBtn = openAuthBtn.cloneNode(true);
      openAuthBtn.parentNode.replaceChild(newBtn, openAuthBtn);
      
      if (user) {
        newBtn.textContent = user.name + (user.role === 'admin' ? ' (Admin)' : '');
        newBtn.addEventListener('click', () => {
          if (confirm('Do you want to logout?')) {
            logout();
          }
        });
      } else {
        newBtn.textContent = 'Login';
        newBtn.addEventListener('click', () => openModal(authModal));
      }
    }
  }

  // Logout Function
  function logout() {
    setStorage(STORAGE_KEYS.currentUser, null);
    updateUserUI(null);
    alert('Logged out successfully!');
  }

  // Check if user is logged in on page load
  function checkLoginStatus() {
    const currentUser = getStorage(STORAGE_KEYS.currentUser, null);
    if (currentUser) {
      updateUserUI(currentUser);
    }
  }

  const loginForm = document.getElementById('login-panel');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = loginForm.querySelector('input[type="email"]').value.trim();
      const password = loginForm.querySelector('input[type="password"]').value;
      
      if (email && password) {
        login(email, password);
      } else {
        alert('Please enter both email and password.');
      }
    });
  }

  const registerForm = document.getElementById('register-panel');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = registerForm.querySelector('input[type="text"]').value.trim();
      const email = registerForm.querySelector('input[type="email"]').value.trim();
      const password = registerForm.querySelector('input[type="password"]').value;
      
      if (name && email && password) {
        if (password.length < 6) {
          alert('Password must be at least 6 characters long.');
          return;
        }
        register(name, email, password);
      } else {
        alert('Please fill in all fields.');
      }
    });
  }

  // Newsletter
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Subscribed!');
      newsletterForm.reset();
    });
  }

  // Search
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      searchQuery = searchInput.value.trim().toLowerCase();
      renderEvents();
    });

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderEvents();
    });
  }

  // Quick Filters
  if (quickFilters) {
    quickFilters.addEventListener('click', (e) => {
      if (e.target.classList.contains('chip')) {
        quickFilters.querySelectorAll('.chip').forEach(chip => chip.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-filter');
        renderEvents();
      }
    });
  }

  // Category Pills
  if (categoryPills) {
    categoryPills.addEventListener('click', (e) => {
      if (e.target.classList.contains('pill')) {
        categoryPills.querySelectorAll('.pill').forEach(pill => pill.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.getAttribute('data-category');
        renderEvents();
      }
    });
  }

  // View All / Back
  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
      showAllEvents = true;
      document.getElementById('featured').style.display = 'none';
      document.getElementById('all-events').style.display = 'block';
      renderAllEvents();
    });
  }

  if (backFeaturedBtn) {
    backFeaturedBtn.addEventListener('click', () => {
      showAllEvents = false;
      document.getElementById('featured').style.display = 'block';
      document.getElementById('all-events').style.display = 'none';
    });
  }

  // Favorites
  if (favoritesBtn) {
    favoritesBtn.addEventListener('click', () => {
      renderFavorites();
      openModal(favoritesModal);
    });
  }

  const favCloseEls = favoritesModal.querySelectorAll('[data-close-fav]');
  favCloseEls.forEach(el => el.addEventListener('click', () => closeModal(favoritesModal)));

  favoritesModal.addEventListener('click', (e) => {
    if (e.target === favoritesModal || e.target.classList.contains('modal-backdrop')) {
      closeModal(favoritesModal);
    }
  });

  // Cart
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      renderCart();
      openModal(cartModal);
    });
  }

  const cartCloseEls = cartModal.querySelectorAll('[data-close-cart]');
  cartCloseEls.forEach(el => el.addEventListener('click', () => closeModal(cartModal)));

  cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal || e.target.classList.contains('modal-backdrop')) {
      closeModal(cartModal);
    }
  });

  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const cart = getStorage(STORAGE_KEYS.cart);
      if (cart.length === 0) {
        alert('Your cart is empty');
        return;
      }
      alert('Checkout successful! (demo)');
      setStorage(STORAGE_KEYS.cart, []);
      updateBadges();
      renderCart();
    });
  }

  // Event Details Modal
  const eventCloseEls = eventModal.querySelectorAll('[data-close-event]');
  eventCloseEls.forEach(el => el.addEventListener('click', () => closeModal(eventModal)));

  eventModal.addEventListener('click', (e) => {
    if (e.target === eventModal || e.target.classList.contains('modal-backdrop')) {
      closeModal(eventModal);
    }
  });

  // Filter Events
  function filterEvents(events) {
    let filtered = [...events];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchQuery) ||
        event.description.toLowerCase().includes(searchQuery) ||
        event.location.toLowerCase().includes(searchQuery) ||
        event.venue.toLowerCase().includes(searchQuery) ||
        (event.tags && event.tags.some(tag => tag.toLowerCase().includes(searchQuery)))
      );
    }

    // Category filter
    if (currentCategory !== 'all') {
      filtered = filtered.filter(event => event.category === currentCategory);
    }

    // Price filter
    filtered = filtered.filter(event => {
      const price = event.price || 0;
      return price >= priceRange.min && price <= priceRange.max;
    });

    // Quick filter
    if (currentFilter !== 'all') {
      const today = new Date();
      const dayOfWeek = today.getDay();
      const thisWeekend = dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0;

      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date);
        if (currentFilter === 'today') {
          return eventDate.toDateString() === today.toDateString();
        } else if (currentFilter === 'weekend') {
          const eventDay = eventDate.getDay();
          return eventDay === 5 || eventDay === 6 || eventDay === 0;
        }
        return true;
      });
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'price-low') {
        return (a.price || 0) - (b.price || 0);
      } else if (sortBy === 'price-high') {
        return (b.price || 0) - (a.price || 0);
      } else if (sortBy === 'rating') {
        return (b.rating || 0) - (a.rating || 0);
      } else if (sortBy === 'date') {
        return new Date(a.date) - new Date(b.date);
      }
      return 0;
    });

    return filtered;
  }

  // Render Events
  function renderEvents() {
    const events = getStorage(STORAGE_KEYS.events);
    const filtered = filterEvents(events);
    const favorites = getStorage(STORAGE_KEYS.favorites);

    if (filtered.length === 0) {
      eventsGrid.innerHTML = '';
      noEvents.style.display = 'block';
      return;
    }

    noEvents.style.display = 'none';
    eventsGrid.innerHTML = filtered.slice(0, 4).map(event => createEventCard(event, favorites)).join('');
    attachEventListeners();
  }

  function renderAllEvents() {
    const events = getStorage(STORAGE_KEYS.events);
    const filtered = filterEvents(events);
    const favorites = getStorage(STORAGE_KEYS.favorites);

    allEventsGrid.innerHTML = filtered.map(event => createEventCard(event, favorites)).join('');
    attachEventListeners();
  }

  function createEventCard(event, favorites) {
    const isFavorite = favorites.includes(event.id);
    const date = new Date(event.date);
    const dateStr = date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
    const hasDiscount = event.originalPrice && event.originalPrice > event.price;
    const discountPercent = hasDiscount ? Math.round(((event.originalPrice - event.price) / event.originalPrice) * 100) : 0;
    const rating = event.rating || 0;
    const reviews = event.reviews || 0;
    const tags = event.tags || [];

    return `
      <article class="card" data-event-id="${event.id}">
        ${hasDiscount ? `<span class="discount-badge">-${discountPercent}%</span>` : ''}
        <button class="card-favorite ${isFavorite ? 'active' : ''}" data-fav="${event.id}" aria-label="Add to favorites">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <img src="${event.image}" alt="${event.title}" loading="lazy" />
        <div class="card-body">
          <div class="card-header">
            <span class="eyebrow">${dateStr} • ${event.location}</span>
            ${rating > 0 ? `<div class="card-rating"><span>⭐</span> ${rating.toFixed(1)} <span class="muted">(${reviews})</span></div>` : ''}
          </div>
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          ${tags.length > 0 ? `<div class="card-tags">${tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}</div>` : ''}
          <div class="card-footer">
            <div class="price-info">
              ${hasDiscount ? `<span class="original-price">$${event.originalPrice}</span>` : ''}
              <span class="price">From $${event.price}</span>
            </div>
            <div class="card-actions">
              <button class="btn btn-outline" data-view="${event.id}">View</button>
              <button class="btn btn-primary" data-book="${event.id}">Book</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function attachEventListeners() {
    // Favorite buttons
    document.querySelectorAll('[data-fav]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const eventId = btn.getAttribute('data-fav');
        toggleFavorite(eventId);
      });
    });

    // View buttons
    document.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const eventId = btn.getAttribute('data-view');
        showEventDetails(eventId);
      });
    });

    // Book buttons
    document.querySelectorAll('[data-book]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const eventId = btn.getAttribute('data-book');
        addToCart(eventId);
      });
    });

    // Card click
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('button')) {
          const eventId = card.getAttribute('data-event-id');
          showEventDetails(eventId);
        }
      });
    });
  }

  function toggleFavorite(eventId) {
    const favorites = getStorage(STORAGE_KEYS.favorites);
    const index = favorites.indexOf(eventId);

    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(eventId);
    }

    setStorage(STORAGE_KEYS.favorites, favorites);
    updateBadges();
    renderEvents();
    if (showAllEvents) {
      renderAllEvents();
    }
  }

  function addToCart(eventId, quantity = 1) {
    const events = getStorage(STORAGE_KEYS.events);
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    const cart = getStorage(STORAGE_KEYS.cart);
    for (let i = 0; i < quantity; i++) {
      cart.push({ ...event, cartId: Date.now() + i, quantity: 1 });
    }
    setStorage(STORAGE_KEYS.cart, cart);
    updateBadges();
    alert(`Added ${quantity} ticket${quantity > 1 ? 's' : ''} for "${event.title}" to cart!`);
  }

  function addToRecentlyViewed(eventId) {
    const recentlyViewed = getStorage(STORAGE_KEYS.recentlyViewed);
    const index = recentlyViewed.indexOf(eventId);
    if (index > -1) {
      recentlyViewed.splice(index, 1);
    }
    recentlyViewed.unshift(eventId);
    if (recentlyViewed.length > 10) {
      recentlyViewed.pop();
    }
    setStorage(STORAGE_KEYS.recentlyViewed, recentlyViewed);
  }

  function getRecommendations(eventId) {
    const events = getStorage(STORAGE_KEYS.events);
    const event = events.find(e => e.id === eventId);
    if (!event) return [];

    const favorites = getStorage(STORAGE_KEYS.favorites);
    const recentlyViewed = getStorage(STORAGE_KEYS.recentlyViewed);

    // Recommend events from same category or similar tags
    const recommendations = events
      .filter(e => e.id !== eventId && !favorites.includes(e.id) && !recentlyViewed.includes(e.id))
      .map(e => {
        let score = 0;
        if (e.category === event.category) score += 3;
        if (e.tags && event.tags) {
          const commonTags = e.tags.filter(tag => event.tags.includes(tag));
          score += commonTags.length;
        }
        if (e.location === event.location) score += 1;
        return { event: e, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(item => item.event);

    return recommendations;
  }

  function showEventDetails(eventId) {
    const events = getStorage(STORAGE_KEYS.events);
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    addToRecentlyViewed(eventId);

    const favorites = getStorage(STORAGE_KEYS.favorites);
    const isFavorite = favorites.includes(eventId);
    const date = new Date(event.date);
    const dateStr = date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const reviews = getStorage(STORAGE_KEYS.reviews);
    const eventReviews = reviews[eventId] || [];
    const hasDiscount = event.originalPrice && event.originalPrice > event.price;
    const tags = event.tags || [];
    const recommendations = getRecommendations(eventId);

    const content = document.getElementById('event-details-content');
    content.innerHTML = `
      <div class="event-details-header">
        <img src="${event.image}" alt="${event.title}" />
        <div class="event-details-body">
          <div class="event-details-title">
            <h2>${event.title}</h2>
            <div class="event-rating">
              ${event.rating ? `<span>⭐ ${event.rating.toFixed(1)}</span> <span class="muted">(${event.reviews || 0} reviews)</span>` : ''}
            </div>
          </div>
          <div class="event-details-meta">
            <span>📅 ${dateStr}</span>
            <span>🕐 ${event.time}</span>
            <span>📍 ${event.venue}, ${event.location}</span>
            <span>💰 ${hasDiscount ? `<span class="original-price">$${event.originalPrice}</span> ` : ''}From $${event.price}</span>
            ${event.available ? `<span>🎫 ${event.available} tickets available</span>` : ''}
          </div>
          ${tags.length > 0 ? `<div class="event-tags">${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>` : ''}
          <p>${event.description}</p>
          
          <div class="event-reviews-section">
            <h3>Reviews (${eventReviews.length})</h3>
            ${eventReviews.length > 0 ? `
              <div class="reviews-list">
                ${eventReviews.slice(0, 3).map(review => `
                  <div class="review-item">
                    <div class="review-header">
                      <strong>${review.user}</strong>
                      <span class="review-rating">${'⭐'.repeat(review.rating)}</span>
                    </div>
                    <p class="review-comment">${review.comment}</p>
                    <span class="review-date muted">${new Date(review.date).toLocaleDateString()}</span>
                  </div>
                `).join('')}
              </div>
            ` : '<p class="muted">No reviews yet. Be the first to review!</p>'}
          </div>

          <div class="event-details-actions">
            <button class="btn btn-outline" id="event-share-btn" data-share="${eventId}">📤 Share</button>
            <button class="btn btn-outline" id="event-fav-btn" data-fav="${eventId}">
              ${isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
            </button>
            <div class="quantity-selector">
              <label>Quantity:</label>
              <input type="number" id="event-quantity" min="1" max="${event.available || 10}" value="1" />
            </div>
            <div class="promo-section">
              <input type="text" id="promo-code" placeholder="Promo code (optional)" />
              <button class="btn btn-outline" id="apply-promo">Apply</button>
            </div>
            <button class="btn btn-primary" id="event-book-btn" data-book="${eventId}">Book Now</button>
          </div>

          ${recommendations.length > 0 ? `
            <div class="recommendations-section">
              <h3>You might also like</h3>
              <div class="recommendations-grid">
                ${recommendations.map(rec => `
                  <div class="recommendation-card" data-event-id="${rec.id}">
                    <img src="${rec.image}" alt="${rec.title}" />
                    <div class="recommendation-info">
                      <h4>${rec.title}</h4>
                      <p class="price">$${rec.price}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    content.querySelector('#event-fav-btn').addEventListener('click', () => {
      toggleFavorite(eventId);
      showEventDetails(eventId);
    });

    content.querySelector('#event-share-btn').addEventListener('click', () => {
      shareEvent(event);
    });

    content.querySelector('#event-book-btn').addEventListener('click', () => {
      const quantity = parseInt(document.getElementById('event-quantity').value) || 1;
      addToCart(eventId, quantity);
      closeModal(eventModal);
    });

    content.querySelectorAll('.recommendation-card').forEach(card => {
      card.addEventListener('click', () => {
        const recId = card.getAttribute('data-event-id');
        closeModal(eventModal);
        setTimeout(() => showEventDetails(recId), 300);
      });
    });

    openModal(eventModal);
  }

  function shareEvent(event) {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href + '#event-' + event.id
      }).catch(() => {
        copyToClipboard(window.location.href + '#event-' + event.id);
        alert('Event link copied to clipboard!');
      });
    } else {
      copyToClipboard(window.location.href + '#event-' + event.id);
      alert('Event link copied to clipboard!');
    }
  }

  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  function renderFavorites() {
    const favorites = getStorage(STORAGE_KEYS.favorites);
    const events = getStorage(STORAGE_KEYS.events);
    const favoriteEvents = events.filter(e => favorites.includes(e.id));

    const container = document.getElementById('favorites-items');
    if (favoriteEvents.length === 0) {
      container.innerHTML = '<p class="muted">No favorites yet. Start adding events to your favorites!</p>';
      return;
    }

    container.innerHTML = favoriteEvents.map(event => `
      <div class="cart-item">
        <img src="${event.image}" alt="${event.title}" />
        <div class="cart-item-info">
          <h4>${event.title}</h4>
          <p>${event.location} • ${new Date(event.date).toLocaleDateString()}</p>
        </div>
        <div class="cart-item-price">$${event.price}</div>
        <button class="btn btn-outline" data-remove-fav="${event.id}">Remove</button>
      </div>
    `).join('');

    container.querySelectorAll('[data-remove-fav]').forEach(btn => {
      btn.addEventListener('click', () => {
        const eventId = btn.getAttribute('data-remove-fav');
        toggleFavorite(eventId);
        renderFavorites();
      });
    });
  }

  function renderCart() {
    const cart = getStorage(STORAGE_KEYS.cart);
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');

    if (cart.length === 0) {
      container.innerHTML = '<p class="muted">Your cart is empty. Start adding events!</p>';
      totalEl.textContent = '$0';
      return;
    }

    // Group cart items by event ID
    const cartMap = {};
    cart.forEach(item => {
      const key = item.id;
      if (!cartMap[key]) {
        cartMap[key] = { ...item, count: 0 };
      }
      cartMap[key].count++;
    });

    const cartItems = Object.values(cartMap);
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.count), 0);
    const promoCode = document.getElementById('cart-promo-code')?.value || '';
    const discount = promoCode === 'SAVE10' ? subtotal * 0.1 : 0;
    const total = subtotal - discount;

    totalEl.innerHTML = `
      <div class="cart-summary">
        <div>Subtotal: $${subtotal.toFixed(2)}</div>
        ${discount > 0 ? `<div class="discount">Discount: -$${discount.toFixed(2)}</div>` : ''}
        <div class="total">Total: $${total.toFixed(2)}</div>
      </div>
    `;

    container.innerHTML = `
      <div class="promo-section" style="margin-bottom: 16px;">
        <input type="text" id="cart-promo-code" placeholder="Enter promo code (try SAVE10)" />
        <button class="btn btn-outline" id="apply-cart-promo">Apply</button>
      </div>
      ${cartItems.map((item, index) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" />
          <div class="cart-item-info">
            <h4>${item.title}</h4>
            <p>${item.location} • ${new Date(item.date).toLocaleDateString()}</p>
            <div class="cart-item-quantity">
              <button class="btn-quantity" data-decrease="${item.id}">-</button>
              <span>${item.count}</span>
              <button class="btn-quantity" data-increase="${item.id}">+</button>
            </div>
          </div>
          <div class="cart-item-price">$${(item.price * item.count).toFixed(2)}</div>
          <button class="btn btn-outline" data-remove-cart="${item.id}">Remove</button>
        </div>
      `).join('')}
    `;

    container.querySelectorAll('[data-remove-cart]').forEach(btn => {
      btn.addEventListener('click', () => {
        const eventId = btn.getAttribute('data-remove-cart');
        const newCart = cart.filter(item => item.id !== eventId);
        setStorage(STORAGE_KEYS.cart, newCart);
        updateBadges();
        renderCart();
      });
    });

    container.querySelectorAll('[data-increase]').forEach(btn => {
      btn.addEventListener('click', () => {
        const eventId = btn.getAttribute('data-increase');
        const events = getStorage(STORAGE_KEYS.events);
        const event = events.find(e => e.id === eventId);
        if (event) {
          cart.push({ ...event, cartId: Date.now(), quantity: 1 });
          setStorage(STORAGE_KEYS.cart, cart);
          updateBadges();
          renderCart();
        }
      });
    });

    container.querySelectorAll('[data-decrease]').forEach(btn => {
      btn.addEventListener('click', () => {
        const eventId = btn.getAttribute('data-decrease');
        const index = cart.findIndex(item => item.id === eventId);
        if (index > -1) {
          cart.splice(index, 1);
          setStorage(STORAGE_KEYS.cart, cart);
          updateBadges();
          renderCart();
        }
      });
    });

    const applyPromoBtn = document.getElementById('apply-cart-promo');
    if (applyPromoBtn) {
      applyPromoBtn.addEventListener('click', () => {
        renderCart();
      });
    }
  }

  function updateBadges() {
    const favorites = getStorage(STORAGE_KEYS.favorites);
    const cart = getStorage(STORAGE_KEYS.cart);

    if (favoritesCount) {
      favoritesCount.textContent = favorites.length;
      favoritesCount.style.display = favorites.length > 0 ? 'flex' : 'none';
    }

    if (cartCount) {
      cartCount.textContent = cart.length;
      cartCount.style.display = cart.length > 0 ? 'flex' : 'none';
    }
  }
})();
