/**
 * AppGalaxy - Core Interactive Logic
 * Modern, responsive all-in-one web & app hub
 */

(function () {
  'use strict';

  // State Management
  let currentCategory = 'all';
  let searchQuery = '';
  let activeTheme = localStorage.getItem('appgalaxy_theme') || 'dark';
  let favorites = JSON.parse(localStorage.getItem('appgalaxy_favorites') || '[]');

  // DOM Elements
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const searchStats = document.getElementById('searchStats');
  const categoriesTabsContainer = document.getElementById('categoriesTabs');
  const appsGrid = document.getElementById('appsGrid');
  const trendingGrid = document.getElementById('trendingGrid');
  const emptyState = document.getElementById('emptyState');
  const resetFilterBtn = document.getElementById('resetFilterBtn');
  const currentCategoryTitle = document.getElementById('currentCategoryTitle');
  const currentCategoryDesc = document.getElementById('currentCategoryDesc');
  const activeAppsCount = document.getElementById('activeAppsCount');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  // Modal Elements
  const downloadModal = document.getElementById('downloadModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalAppName = document.getElementById('modalAppName');
  const modalAppBadge = document.getElementById('modalAppBadge');
  const modalAppIcon = document.getElementById('modalAppIcon');
  const modalDownloadLinks = document.getElementById('modalDownloadLinks');
  const modalVisitLink = document.getElementById('modalVisitLink');

  // Initialize
  function init() {
    applyTheme(activeTheme);
    renderCategoryTabs();
    renderTrendingApps();
    renderApps();
    setupEventListeners();
  }

  // Theme Toggling
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('appgalaxy_theme', theme);
    if (theme === 'dark') {
      themeIcon.className = 'bi bi-sun-fill';
      themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
    } else {
      themeIcon.className = 'bi bi-moon-stars-fill';
      themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
    }
  }

  function toggleTheme() {
    activeTheme = activeTheme === 'dark' ? 'light' : 'dark';
    applyTheme(activeTheme);
  }

  // Category Tabs
  function renderCategoryTabs() {
    if (!categoriesTabsContainer) return;
    categoriesTabsContainer.innerHTML = '';

    categoriesList.forEach((cat) => {
      const count = cat.id === 'all' 
        ? appsData.length 
        : appsData.filter(a => a.category === cat.id).length;

      const btn = document.createElement('button');
      btn.className = `category-tab-btn ${cat.id === currentCategory ? 'active' : ''}`;
      btn.setAttribute('data-category', cat.id);
      btn.innerHTML = `
        <i class="bi ${cat.icon}"></i>
        <span>${cat.name}</span>
        <span class="cat-count">${count}</span>
      `;

      btn.addEventListener('click', () => {
        selectCategory(cat.id);
      });

      categoriesTabsContainer.appendChild(btn);
    });
  }

  function selectCategory(catId) {
    currentCategory = catId;
    
    // Update active tab styles
    document.querySelectorAll('.category-tab-btn').forEach((btn) => {
      if (btn.getAttribute('data-category') === catId) {
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        btn.classList.remove('active');
      }
    });

    // Update section header
    const catObj = categoriesList.find(c => c.id === catId);
    if (catObj) {
      if (catId === 'all') {
        currentCategoryTitle.textContent = 'Explore All Apps';
        currentCategoryDesc.textContent = 'Discover and launch world-class services, AI tools, and creative platforms.';
      } else {
        currentCategoryTitle.textContent = catObj.name;
        currentCategoryDesc.textContent = `Browse curated top ${catObj.name.toLowerCase()} apps and official links.`;
      }
    }

    renderApps();
  }

  // Expose filter helper globally for footer and external triggers
  window.AppGalaxyFilter = function(catId) {
    selectCategory(catId);
    const exploreSection = document.getElementById('explore');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter & Search Logic
  function getFilteredApps() {
    return appsData.filter((app) => {
      const matchesCategory = currentCategory === 'all' || app.category === currentCategory;
      const query = searchQuery.trim().toLowerCase();
      
      if (!query) return matchesCategory;

      const matchesSearch = 
        app.name.toLowerCase().includes(query) ||
        app.tagline.toLowerCase().includes(query) ||
        app.description.toLowerCase().includes(query) ||
        app.categoryLabel.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }

  // Card Creator
  function createAppCard(app) {
    const isFav = favorites.includes(app.id);

    // Platform badges indicators
    const hasAndroid = !!app.downloads?.android;
    const hasIos = !!app.downloads?.ios;
    const hasPc = !!app.downloads?.pc;

    let platformsHtml = '';
    if (hasAndroid) platformsHtml += `<span class="platform-badge" title="Android App Available"><i class="bi bi-android2"></i> Android</span>`;
    if (hasIos) platformsHtml += `<span class="platform-badge" title="iOS App Available"><i class="bi bi-apple"></i> iOS</span>`;
    if (hasPc) platformsHtml += `<span class="platform-badge" title="PC / Web App Available"><i class="bi bi-windows"></i> PC</span>`;

    const card = document.createElement('div');
    card.className = 'app-card';
    card.setAttribute('data-id', app.id);
    card.setAttribute('data-category', app.category);

    card.innerHTML = `
      <div>
        <div class="app-card-header">
          <div class="app-icon-wrap" style="background: ${app.iconBg}">
            <img src="${app.icon}" alt="${app.name} icon" loading="lazy" onerror="this.onerror=null; this.src='https://cdn.simpleicons.org/google/ffffff';" />
          </div>
          <div class="app-info">
            <div class="app-title-row">
              <h3 class="app-name">${app.name}</h3>
              <span class="app-badge-category">${app.categoryLabel}</span>
            </div>
            <p class="app-tagline">${app.tagline}</p>
          </div>
        </div>

        <p class="app-description">${app.description}</p>

        <div class="app-platforms">
          <span class="platforms-label"><i class="bi bi-download"></i> Downloads</span>
          <div class="platform-badges">
            ${platformsHtml}
          </div>
        </div>
      </div>

      <div class="app-card-footer">
        <a href="${app.website}" target="_blank" rel="noopener noreferrer" class="btn-open-site" title="Visit official ${app.name} website">
          <span>Open Web</span>
          <i class="bi bi-box-arrow-up-right"></i>
        </a>
        <button class="btn-downloads-dropdown open-modal-btn" title="View official Android, iOS and PC download links">
          <i class="bi bi-cloud-arrow-down-fill"></i>
        </button>
        <button class="btn-favorite ${isFav ? 'active' : ''}" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
          <i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}"></i>
        </button>
      </div>
    `;

    // Download modal trigger
    const modalBtn = card.querySelector('.open-modal-btn');
    modalBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openDownloadModal(app);
    });

    // Favorite button trigger
    const favBtn = card.querySelector('.btn-favorite');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(app.id, favBtn);
    });

    return card;
  }

  // Render Trending Apps
  function renderTrendingApps() {
    if (!trendingGrid) return;
    trendingGrid.innerHTML = '';

    const trendingApps = appsData.filter(a => a.trending).slice(0, 8);
    trendingApps.forEach(app => {
      trendingGrid.appendChild(createAppCard(app));
    });
  }

  // Render Main Apps
  function renderApps() {
    if (!appsGrid) return;
    appsGrid.innerHTML = '';

    const filtered = getFilteredApps();
    activeAppsCount.textContent = `${filtered.length} Apps`;

    if (searchStats) {
      if (searchQuery.trim()) {
        searchStats.style.display = 'block';
        searchStats.textContent = `${filtered.length} results`;
      } else {
        searchStats.style.display = 'none';
      }
    }

    if (filtered.length === 0) {
      emptyState.style.display = 'block';
    } else {
      emptyState.style.display = 'none';
      filtered.forEach(app => {
        appsGrid.appendChild(createAppCard(app));
      });
    }
  }

  // Download Modal Logic
  function openDownloadModal(app) {
    modalAppName.textContent = app.name;
    modalAppBadge.textContent = app.categoryLabel + " • Official Downloads";
    modalAppIcon.style.background = app.iconBg;
    modalAppIcon.innerHTML = `<img src="${app.icon}" alt="${app.name}" />`;
    modalVisitLink.href = app.website;

    modalDownloadLinks.innerHTML = '';

    const d = app.downloads || {};

    const platforms = [
      {
        id: 'android',
        title: 'Android',
        desc: 'Official Google Play Store or APK',
        icon: 'bi-android2',
        link: d.android
      },
      {
        id: 'ios',
        title: 'iOS (iPhone / iPad)',
        desc: 'Official Apple App Store',
        icon: 'bi-apple',
        link: d.ios
      },
      {
        id: 'pc',
        title: 'PC (Windows / Mac / Web)',
        desc: 'Microsoft Store or Desktop Installer',
        icon: 'bi-laptop',
        link: d.pc
      }
    ];

    platforms.forEach((p) => {
      const item = document.createElement('a');
      item.className = 'download-link-item';
      item.href = p.link || app.website;
      item.target = '_blank';
      item.rel = 'noopener noreferrer';

      item.innerHTML = `
        <div class="download-link-left">
          <i class="bi ${p.icon} download-link-icon"></i>
          <div>
            <div class="download-platform-name">${p.title}</div>
            <div class="download-platform-desc">${p.desc}</div>
          </div>
        </div>
        <div class="download-action-btn">
          <span>Get Link</span>
          <i class="bi bi-arrow-up-right"></i>
        </div>
      `;

      modalDownloadLinks.appendChild(item);
    });

    downloadModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDownloadModal() {
    downloadModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Favorites Management
  function toggleFavorite(appId, btnElement) {
    if (favorites.includes(appId)) {
      favorites = favorites.filter(id => id !== appId);
      btnElement.classList.remove('active');
      btnElement.innerHTML = '<i class="bi bi-heart"></i>';
      btnElement.setAttribute('title', 'Add to favorites');
    } else {
      favorites.push(appId);
      btnElement.classList.add('active');
      btnElement.innerHTML = '<i class="bi bi-heart-fill"></i>';
      btnElement.setAttribute('title', 'Remove from favorites');
    }
    localStorage.setItem('appgalaxy_favorites', JSON.stringify(favorites));
  }

  // Event Listeners
  function setupEventListeners() {
    // Theme toggle
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Search input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (searchQuery.trim().length > 0) {
          clearSearchBtn.style.display = 'inline-flex';
        } else {
          clearSearchBtn.style.display = 'none';
        }
        renderApps();
      });
    }

    // Clear search
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.style.display = 'none';
        searchInput.focus();
        renderApps();
      });
    }

    // Reset filter from empty state
    if (resetFilterBtn) {
      resetFilterBtn.addEventListener('click', () => {
        searchQuery = '';
        if (searchInput) searchInput.value = '';
        if (clearSearchBtn) clearSearchBtn.style.display = 'none';
        selectCategory('all');
      });
    }

    // Quick tag buttons
    document.querySelectorAll('.quick-tag-btn').forEach((tagBtn) => {
      tagBtn.addEventListener('click', () => {
        const query = tagBtn.getAttribute('data-tag');
        if (searchInput) {
          searchInput.value = query;
          searchQuery = query;
          clearSearchBtn.style.display = 'inline-flex';
          searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          renderApps();
        }
      });
    });

    // Mobile nav toggle
    if (mobileMenuBtn && mainNav) {
      mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
      });
      // Close mobile menu when clicking nav links
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mainNav.classList.remove('active');
        });
      });
    }

    // Modal close events
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeDownloadModal);
    }

    if (downloadModal) {
      downloadModal.addEventListener('click', (e) => {
        if (e.target === downloadModal) {
          closeDownloadModal();
        }
      });
    }

    // Keyboard ESC to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && downloadModal.classList.contains('active')) {
        closeDownloadModal();
      }
    });

    // Back to top smooth scroll
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // Run on DOM ready
  document.addEventListener('DOMContentLoaded', init);
})();
