# Eco-Tourism Guide App

A responsive, multi-page web application designed to promote sustainable tourism. This project serves as a university assignment demonstrating foundational front-end development skills, including semantic HTML structure, responsive CSS layouts, and DOM manipulation.

## Features

* **Fully Responsive Design:** Utilizes CSS Grid and Flexbox to ensure seamless scaling across mobile, tablet, and desktop viewports.
* **Dark/Light Mode Theme:** A custom theme switcher that remembers the user's preference using browser `localStorage` and adapts visual assets (like SVGs) automatically.
* **Interactive Navigation:** Features a custom mobile hamburger menu powered by jQuery animations.
* **Dynamic Form Validation:** A booking form protected by Vanilla JavaScript validation that injects targeted HTML error messages rather than relying on browser alerts.
* **Accessible Media:** Uses inline, color-adapting SVG vectors and highly optimized imagery with descriptive alt-text.

## Technologies Used

* **HTML5:** Semantic markup (`<main>`, `<article>`, `<section>`).
* **CSS3:** Custom variables, Grid, Flexbox, media queries, and transition animations. No CSS frameworks (like Bootstrap) were used.
* **Vanilla JavaScript:** DOM targeting, event listeners, and form logic.
* **jQuery:** Integrated specifically for smooth `.slideToggle()` animations on the mobile menu and FAQ accordion.

## Project Structure

* `/css` - Contains the custom CSS reset and main stylesheet.
* `/js` - Contains separate files for jQuery interactions and Vanilla JS logic.
* `/images` - Contains all optimized photo assets and the scalable SVG logo.
* `index.html` - The landing page and hero section.
* `destinations.html` - The image gallery and interactive FAQ accordion.
* `booking.html` - The interactive contact and booking form.

## Image Credits

* [Taman Negara Canopy Walkway](https://tamannegaratravel.com/canopy-walkway-taman-negara/)
* [Sipadan Reef Diving](https://www.scuba-junkie.com/complete-guide-dive-sipadan-island/)
* [Mount Kinabalu Summit Trail](https://sabahtourism.com/activity/climb-mt-kinabalu/)
* [Danum Valley Rainforest](https://www.theborneopost.com/2025/02/09/a-healing-retreat-at-borneo-rainforest-lodge-danum-valley/)
* [Sipadan Island Coral Reef](https://www.naturepl.com/stock-photo-split-level-view-of-coral-reef-and-sipadan-island-sabah-malaysia-june-nature-image01346725.html?srsltid=AfmBOoqrhdWiy1fXZIIXZqENQuutEhXTj9d_orDaRX1L2sXwGFIiEB7e)
* [Mount Kinabalu Peak](https://www.countryhighpoints.com/mount-kinabalu-malaysia-highpoint/)
* [Langkawi Geopark Mangrove](https://www.langkawigeopark.com.my/our-geoforest-parks/)