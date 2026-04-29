// Simple hash-based router
const routes = {};

function registerRoute(name, renderFn)
{
  routes[name] = renderFn;
}

function renderRoute()
{
  const hash = window.location.hash.replace('#', '') || 'home';
  const app = document.getElementById('app');
  if (!routes[hash])
  {
    app.innerHTML = `<section class="section"><h1>Not Found</h1><p>The page you're looking for doesn't exist.</p></section>`;
    return;
  }
  app.innerHTML = routes[hash]();
  app.focus();
  updateActiveNav(hash);

  // Dispatch custom event after route is rendered
  window.dispatchEvent(new CustomEvent('routeRendered', { detail: { route: hash } }));
}

function updateActiveNav(active)
{
  document.querySelectorAll('nav a[data-route]').forEach(a =>
  {
    a.classList.toggle('active', a.getAttribute('data-route') === active);
  });
}

window.addEventListener('hashchange', renderRoute);
window.addEventListener('DOMContentLoaded', renderRoute);

export { registerRoute };
