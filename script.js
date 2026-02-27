// Contact form — mailto fallback for GitHub Pages (static hosting)
// To switch to Formspree: remove this file and update contact.html form action.
function handleSubmit(e) {
  e.preventDefault();
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject  = encodeURIComponent(`Portfolio contact from ${name}`);
  const body     = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailto   = `mailto:angeos@live.se?subject=${subject}&body=${body}`;

  window.location.href = mailto;
}
