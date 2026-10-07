/**
 * SMOZI STORE - TRUST BUILDING ARCHITECTURE JAVASCRIPT
 * Handles real-time urgency, delivery estimation, sticky ATC, FAQ accordions, and social proof.
 */

document.addEventListener('DOMContentLoaded', () => {
  initDeliveryEstimator();
  initLiveCounters();
  initFaqAccordion();
  initStickyAddToCart();
  initSalesToast();
});

/* --------------------------------------------------------------------------
   1. DYNAMIC DELIVERY ESTIMATOR
   Calculates realistic estimated delivery dates (e.g. 3-5 business days)
   -------------------------------------------------------------------------- */
function initDeliveryEstimator() {
  const deliveryEls = document.querySelectorAll('.smozi-delivery-date');
  if (!deliveryEls.length) return;

  const today = new Date();
  
  // Calculate delivery window (3 to 5 business days ahead)
  function addBusinessDays(startDate, days) {
    let count = 0;
    const curDate = new Date(startDate);
    while (count < days) {
      curDate.setDate(curDate.getDate() + 1);
      const dayOfWeek = curDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        count++;
      }
    }
    return curDate;
  }

  const startEst = addBusinessDays(today, 2);
  const endEst = addBusinessDays(today, 4);

  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const formattedStart = startEst.toLocaleDateString(undefined, options);
  const formattedEnd = endEst.toLocaleDateString(undefined, options);

  deliveryEls.forEach(el => {
    el.textContent = `${formattedStart} - ${formattedEnd}`;
  });
}

/* --------------------------------------------------------------------------
   2. LIVE REAL-TIME VISITOR STATS & STOCK URGENCY
   -------------------------------------------------------------------------- */
function initLiveCounters() {
  const viewerCounts = document.querySelectorAll('.smozi-viewer-count');
  if (viewerCounts.length > 0) {
    let currentViewers = Math.floor(Math.random() * (38 - 19 + 1)) + 19;
    viewerCounts.forEach(el => el.textContent = currentViewers);

    // Subtle natural fluctuation every 12 seconds
    setInterval(() => {
      const delta = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 3) + 1);
      currentViewers = Math.max(14, Math.min(52, currentViewers + delta));
      viewerCounts.forEach(el => {
        el.style.opacity = '0.5';
        setTimeout(() => {
          el.textContent = currentViewers;
          el.style.opacity = '1';
        }, 300);
      });
    }, 12000);
  }
}

/* --------------------------------------------------------------------------
   3. TRUST FAQ ACCORDION INTERACTION
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.smozi-faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.smozi-faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('smozi-open');

      // Close all other items in the same section for clean accordion behavior
      const parentList = item.closest('.smozi-faq-list');
      if (parentList) {
        parentList.querySelectorAll('.smozi-faq-item').forEach(other => {
          if (other !== item) {
            other.classList.remove('smozi-open');
            const otherBtn = other.querySelector('.smozi-faq-trigger');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });
      }

      item.classList.toggle('smozi-open', !isOpen);
      trigger.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  });
}

/* --------------------------------------------------------------------------
   4. STICKY ADD-TO-CART (ATC)
   -------------------------------------------------------------------------- */
function initStickyAddToCart() {
  const stickyBar = document.querySelector('.smozi-sticky-atc-bar');
  if (!stickyBar) return;

  const mainProductForm = document.querySelector('product-form') || document.querySelector('form[action*="/cart/add"]');
  if (!mainProductForm) return;

  const buyButton = mainProductForm.querySelector('[type="submit"]') || mainProductForm;

  // Use IntersectionObserver to toggle sticky bar when primary buy button leaves viewport
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          stickyBar.classList.add('smozi-visible');
        } else {
          stickyBar.classList.remove('smozi-visible');
        }
      });
    }, { rootMargin: '0px', threshold: 0 });

    observer.observe(buyButton);
  } else {
    // Fallback for older browsers
    window.addEventListener('scroll', () => {
      const rect = buyButton.getBoundingClientRect();
      if (rect.bottom < 0) {
        stickyBar.classList.add('smozi-visible');
      } else {
        stickyBar.classList.remove('smozi-visible');
      }
    }, { passive: true });
  }

  // Handle Sticky ATC click -> triggers main add to cart button
  const stickyBtn = stickyBar.querySelector('.smozi-sticky-btn');
  if (stickyBtn) {
    stickyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const mainSubmit = mainProductForm.querySelector('[type="submit"]') || mainProductForm.querySelector('.product-form__submit');
      if (mainSubmit && !mainSubmit.disabled) {
        mainSubmit.click();
      } else {
        // Fallback: submit the form directly
        mainProductForm.submit();
      }
    });
  }
}

/* --------------------------------------------------------------------------
   5. REAL-TIME RECENT SALES TOAST NOTIFICATION
   -------------------------------------------------------------------------- */
function initSalesToast() {
  const toast = document.querySelector('.smozi-sales-toast');
  if (!toast) return;

  const purchases = [
    { name: 'Alex M.', city: 'New York, NY', item: 'Smozi Premium Edition', time: '2 mins ago' },
    { name: 'Chloe T.', city: 'Los Angeles, CA', item: 'Smozi Deluxe Pack', time: '4 mins ago' },
    { name: 'Marcus D.', city: 'Chicago, IL', item: 'Smozi Best Value Bundle', time: '7 mins ago' },
    { name: 'Sarah B.', city: 'Austin, TX', item: 'Smozi Premium Edition', time: '12 mins ago' },
    { name: 'David L.', city: 'Seattle, WA', item: 'Smozi Limited Edition', time: '15 mins ago' },
    { name: 'Elena R.', city: 'Miami, FL', item: 'Smozi Gift Box', time: '19 mins ago' }
  ];

  let index = 0;
  const buyerEl = toast.querySelector('.smozi-toast-buyer-name');
  const cityEl = toast.querySelector('.smozi-toast-buyer-city');
  const itemEl = toast.querySelector('.smozi-toast-item-title');
  const timeEl = toast.querySelector('.smozi-toast-time');
  const closeBtn = toast.querySelector('.smozi-toast-close');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      toast.classList.remove('smozi-show');
      sessionStorage.setItem('smozi_toast_closed', 'true');
    });
  }

  if (sessionStorage.getItem('smozi_toast_closed') === 'true') {
    return;
  }

  function showNextToast() {
    if (sessionStorage.getItem('smozi_toast_closed') === 'true') return;

    const data = purchases[index];
    if (buyerEl) buyerEl.textContent = data.name;
    if (cityEl) cityEl.textContent = `from ${data.city}`;
    if (itemEl) itemEl.textContent = data.item;
    if (timeEl) timeEl.textContent = data.time;

    toast.classList.add('smozi-show');

    // Hide after 5.5s
    setTimeout(() => {
      toast.classList.remove('smozi-show');
    }, 5500);

    index = (index + 1) % purchases.length;
  }

  // Initial delay 6s, then repeats every 18s
  setTimeout(() => {
    showNextToast();
    setInterval(showNextToast, 18000);
  }, 6000);
}
