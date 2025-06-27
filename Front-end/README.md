# DJ Portfolio Website - Menu Page

This repository contains the code for the **Menu Page** of a DJ Portfolio website built using **React**. The page is designed with a dark, neon, and minimalistic theme, incorporating smooth animations and hover effects. The menu has several interactive elements that enhance user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [File Structure](#file-structure)
- [Animations & Effects](#animations--effects)
- [Contributing](#contributing)

---

## Features

- **Menu Button & Cross Animation:**
  - A menu button appears in the top-right corner of the landing page.
  - When clicked, the menu opens, and the button morphs from an "X" into an "=" symbol and vice versa, with a smooth transition.
  - When the button is clicked again, it takes the user back to the landing page.

- **Vertical Menu:**
  - The menu text appears vertically on the left side of the page.
  - A white vertical line animates below the text upon page load, giving a dynamic look.

- **Interactive Image:**
  - On the left section of the page (5% to 50% screen width), an image changes based on the menu option selected. Each image has a smooth transition on hover, giving an aesthetic effect.
  
- **Navigation Options:**
  - The menu contains several options:
    - **Home**: Redirects to the homepage.
    - **Image Gallery**: Redirects to the image gallery section of the homepage.
    - **Live Concert**: Redirects to a section with a playable YouTube video.
    - **Contact**: Displays a contact card with email, WhatsApp, and Instagram details. The card appears with a pop-up animation and a blur effect in the background. It disappears when clicked outside.
  
- **Social Media Icons:**
  - At the bottom of the menu, social media icons for platforms like **YouTube** and **Instagram** are provided.
  - The icons have hover effects where they scale up and glow.

- **Menu Page End:**
  - At the bottom of the menu page, a white horizontal line (10% of the screen width) marks the end of the menu.

---

## Technologies Used

- **React** for the front-end UI.
- **React Router** for navigation between sections.
- **Framer Motion** (or **GSAP**) for animations.
- **CSS/SCSS** for styling and layout.
- **YouTube API** for fetching live concert video.

---

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/dj-portfolio.git
   cd dj-portfolio
