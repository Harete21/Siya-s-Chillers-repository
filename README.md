# Siya-s-Chillers-repository
Good meat, low fires and a place to chill
Organisation Overview 

 

Siya’s Chillers is a family-run braai and grill restaurant that has served the Soweto community since 2015. What began as a weekend braai stand outside the family home grew into a sit-down eatery known for its slow-grilled meats, laid-back “chill spot” atmosphere, and weekend live music. 

 

Mission: to serve honest, affordable South African comfort food in a welcoming space where the community can gather. 

 

Vision: to become Soweto’s favourite neighbourhood chill spot while growing a loyal online following. 

 

Target audience: local families, young professionals, and students seeking affordable, social dining. 

 

Website Goals and Objectives 

 

The website should let customers view the menu, book a table, and place takeaway orders online without needing to phone in during busy service. 

 

KPI: Number of online reservations per month 

KPI: Online (takeaway) order volume 

KPI: Bounce rate on the menu page 

 

Current Website Analysis 

 

Siya’s Chillers currently relies on a Facebook page for updates and phone calls for bookings. Its strength is a strong local word-of-mouth reputation and an active Facebook following. Its weaknesses are the absence of a searchable online menu, no booking system, and missed reservations during peak hours when phone lines are busy. Most diners now expect to book online rather than call in, making an online reservation form a clear priority (TouchBistro, 2023). 

 

Proposed Website Features and Functionality 

 

Homepage with hero image, opening hours, and location 

HTML-based, mobile-readable menu (not a PDF) 

Photo gallery of the venue and dishes 

About Us page 

Reservations/Contact page with an embedded booking form and click-to-call button 

 

Design and User Experience 

 

Colour Scheme: warm terracotta, cream, and deep green, evoking a braai and shisanyama atmosphere. 

 

Typography: Poppins for headings and Lato for body text, for a friendly, easily readable feel. 

 

Layout and Design: a photo-led homepage that immediately communicates the “chill spot” vibe. 

 

User Experience: keeping the reservation button visible on every page and the menu just one tap away, since accessible menus and prominent booking calls-to-action directly increase reservations. A low-fidelity wireframe will map the homepage-to-booking journey before development begins. 

 

Technical Requirements 

 

Domain: siyaschillers.co.za. Hosting: local South African shared hosting for fast in-country load times. Development stack: HTML5, CSS3, and JavaScript, with an embedded booking widget (or Google Forms) for reservations.


# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-09-16
### Added
- Initial theming and responsive stylesheet: `css/style.css` — warm terracotta, cream, deep green palette, variables, layout, header, nav, hero, cards, gallery grid, forms, buttons, footer, and accessibility focus styles.

### Changed
- Updated `h1` adjustments: attempted centering and enlargement, then reverted to normal flow (desktop 2rem, mobile 1.4rem).

### Files modified
- `css/style.css`



#
16 September 2026 15:39 

his README lists changes made for Part 3 (interactive features, forms, SEO and submission).

## Changelog (Part 3 updates)

- 2026-10-15: Added core client-side JavaScript and interactive features
  - Added `js/main.js` — handles: dynamic footer year, mobile nav toggle, booking form submission simulation, contact form mailto compilation, gallery lightbox, menu search & sort, and Leaflet map initialization.

- 2026-10-15: Styling updates
  - Updated `css/style.css` to include styles for the lightbox, accordion, menu controls, map container, and simple transitions.

- 2026-10-15: Contact & enquiry pages
  - Updated `contact.html`: replaced embedded Google iframe with an interactive Leaflet map container, added a general message form (`#contact-form`) with mailto fallback, and included Leaflet assets.
  - Added `enquiry.html`: a purpose-built enquiry form for services, products, volunteering and sponsorship with client-side estimate response.

- 2026-10-15: Gallery improvements
  - `gallery.html` now connects to the lightbox UI; clicking images opens a fullscreen viewer (lightbox).

- 2026-10-15: Menu search and sort
  - `menu.html` gained client-side `menu-search` and `menu-sort` controls. Items are filtered live and can be sorted by price.

- 2026-10-15: SEO & technical files
  - Added `robots.txt` and `sitemap.xml` (update `sitemap.xml` host URLs to match your live site).

## Notes & Next Steps

- Testing: Open `index.html`, `menu.html`, `gallery.html` and `contact.html` locally in a browser to interact with features.
- The Leaflet map uses OpenStreetMap tiles; it requires network access. Adjust coordinates in `js/main.js` if needed.
- Replace the placeholder URLs in `sitemap.xml` with your GitHub Pages or hosted site URLs before publishing.


