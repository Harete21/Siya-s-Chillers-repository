// Core site interactions: nav, year, forms, lightbox, menu filter, map
(function(){
  // Year
  var y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();

  // Nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if(navToggle && navLinks){
    navToggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('open');
    });
  }

  // Lightbox for gallery
  function openLightbox(src, cap){
    var lb = document.querySelector('.lightbox');
    if(!lb) return;
    var imgEl = lb.querySelector('img');
    if(imgEl){ imgEl.src = src; imgEl.alt = cap || ''; }
    var c = lb.querySelector('.lightbox-cap'); if(c) c.textContent = cap || '';
    lb.style.display = 'flex';
  }
  function closeLightbox(){
    var lb = document.querySelector('.lightbox'); if(!lb) return; lb.style.display = 'none';
  }
  document.addEventListener('click', function(e){
    try{
      var t = e.target;
      if(t && t.nodeType !== 1) t = t.parentElement;
      if(t && t.closest && t.closest('.gallery-item')){
        var galleryItem = t.closest('.gallery-item');
        var img = galleryItem ? galleryItem.querySelector('img') : null;
        var capEl = galleryItem ? galleryItem.querySelector('.cap') : null;
        var cap = capEl ? capEl.textContent : '';
        if(img) { openLightbox(img.src, cap); }
      }
      if(t && t.classList && (t.classList.contains('lightbox-close') || t.classList.contains('lightbox'))) closeLightbox();
    }catch(err){
      console.warn('Click handler error:', err);
    }
  });

  // Booking form (simulated AJAX)
  var bookingForm = document.getElementById('booking-form');
  if(bookingForm){
    bookingForm.addEventListener('submit', function(e){
      e.preventDefault();
      var form = this;
      if(!form.checkValidity()) { form.reportValidity(); return; }
      var msg = document.getElementById('form-msg');
      msg.innerHTML = '<p>Checking availability…</p>';
      setTimeout(function(){
        msg.innerHTML = '<p class="fade-in">Thanks '+(form.name.value || '')+'. Your booking request for '+form.date.value+' at '+form.time.value+' for '+form.guests.value+' guest(s) is received. We will confirm by phone.</p>';
        form.reset();
      }, 900);
    });
  }

  // Contact form — compile into mailto (simulated email)
  var contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      if(!this.checkValidity()){ this.reportValidity(); return; }
      var to = 'bookings@siyaschillers.co.za';
      var subject = encodeURIComponent('Website contact from '+ (this.name.value || 'Guest'));
      var body = encodeURIComponent('Name: '+this.name.value+'\nPhone: '+this.phone.value+'\nEmail: '+this.email.value+'\n\nMessage:\n'+this.message.value);
      var mailto = 'mailto:'+to+'?subject='+subject+'&body='+body;
      window.location.href = mailto;
    });
  }

  // Menu search & sort
  var searchInput = document.getElementById('menu-search');
  var sortSelect = document.getElementById('menu-sort');
  function filterMenu(){
    var q = searchInput ? searchInput.value.trim().toLowerCase() : '';
    var items = document.querySelectorAll('.menu-item');
    items.forEach(function(it){
      var txt = it.textContent.toLowerCase();
      it.style.display = txt.indexOf(q) !== -1 ? '' : 'none';
    });
  }
  if(searchInput) searchInput.addEventListener('input', filterMenu);
  if(sortSelect){
    sortSelect.addEventListener('change', function(){
      var container = document.querySelector('.wrap');
      var items = Array.from(document.querySelectorAll('.menu-item'));
      if(this.value === 'price-asc' || this.value === 'price-desc'){
        items.sort(function(a,b){
          var pa = parseFloat((a.querySelector('.menu-item-price')||{textContent:'0'}).textContent.replace(/[^0-9.]/g,''))||0;
          var pb = parseFloat((b.querySelector('.menu-item-price')||{textContent:'0'}).textContent.replace(/[^0-9.]/g,''))||0;
          return (this.value==='price-asc' ? pa-pb : pb-pa);
        }.bind(this));
        // move items after the menu nav
        var anchor = document.querySelector('.menu-nav');
        items.forEach(function(it){ anchor.parentNode.insertBefore(it, anchor.nextSibling); });
      }
    });
  }

  // Map is provided via embedded Google Maps iframe on the contact page.

})();

