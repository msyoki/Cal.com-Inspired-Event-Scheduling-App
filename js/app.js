import { registerRoute } from './router.js';
import { hero, about, services, approach, resources, contact, booking } from './components.js';

// Register routes
registerRoute('home', hero);
registerRoute('about', about);
registerRoute('services', services);
registerRoute('approach', approach);
registerRoute('resources', resources);
registerRoute('contact', contact);
registerRoute('booking', booking);

// Nav toggle for mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () =>
{
  const open = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Global delegation
window.addEventListener('click', (e) =>
{
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;
  const action = btn.getAttribute('data-action');
  switch (action)
  {
    case 'openContact':
      window.location.hash = '#contact';
      break;
    case 'scrollServices':
      window.location.hash = '#services';
      break;
  }
});

// Simple form handling (no backend; placeholder)
window.addEventListener('submit', (e) =>
{
  const form = e.target;
  if (form.id === 'contactForm')
  {
    e.preventDefault();
    const statusEl = form.querySelector('#formStatus');
    const data = Object.fromEntries(new FormData(form));
    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message)
    {
      statusEl.textContent = 'Please complete all fields.';
      statusEl.style.color = 'red';
      return;
    }
    statusEl.textContent = 'Sending...';
    statusEl.style.color = 'inherit';
    // Simulate async send
    setTimeout(() =>
    {
      statusEl.textContent = 'Message submitted. You will receive a reply soon.';
      statusEl.style.color = 'green';
      form.reset();
    }, 900);
  }
});

// Detect booking route render and inject Cal.com embed if needed
function initCalIfPresent()
{
  const container = document.getElementById('my-cal-inline-teen-counselling');
  if (!container) return; // Not on booking page
  const statusEl = document.getElementById('calStatus');

  // Check if already initialized
  if (container.dataset.calInitialized === 'true')
  {
    statusEl.textContent = 'Calendar loaded.';
    return;
  }

  // Mark as initializing
  container.dataset.calInitialized = 'true';

  // Initialize Cal.com embed
  try
  {
    (function (C, A, L)
    {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function ()
      {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded)
        {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L)
        {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string")
          {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "teen-counselling", { origin: "https://app.cal.com" });

    window.Cal.ns["teen-counselling"]("inline", {
      elementOrSelector: "#my-cal-inline-teen-counselling",
      config: { "layout": "month_view" },
      calLink: "ckamonya/teen-counselling",
    });

    window.Cal.ns["teen-counselling"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });

    statusEl.textContent = 'Calendar loaded.';
    statusEl.style.color = 'green';
  }
  catch (err)
  {
    console.error('Cal embed error', err);
    statusEl.textContent = 'Failed to load calendar. Please try refreshing the page.';
    statusEl.style.color = 'red';
    container.dataset.calInitialized = 'false';
  }
}

window.addEventListener('hashchange', initCalIfPresent);
window.addEventListener('DOMContentLoaded', initCalIfPresent);

// Also check after any route change (SPA specific)
// Since renderRoute updates the DOM, we need to wait a tick
const originalHashChange = window.onhashchange;
window.addEventListener('hashchange', () =>
{
  setTimeout(initCalIfPresent, 100); // Give DOM time to update
});

// Listen for route rendered event
window.addEventListener('routeRendered', (e) =>
{
  if (e.detail.route === 'booking')
  {
    setTimeout(initCalIfPresent, 50);
  }
});
