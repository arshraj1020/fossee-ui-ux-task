# FOSSEE UI/UX Enhancement Task

## Overview

This project focuses on improving the user interface and user experience of the existing workshop booking system. The original application used Django templates with a basic UI. I redesigned the frontend using React to create a cleaner, more modern, and responsive interface.


## Improvements Made

- Redesigned UI using React
- Created reusable components (Navbar, WorkshopCard)
- Implemented responsive layout using CSS Grid
- Improved spacing, typography, and visual hierarchy
- Added interactive elements like hover effects

## Design Decisions

### Design Principles

The redesign was guided by simplicity, clarity, and usability. The goal was to make the interface easy to understand for students. Proper spacing and visual hierarchy were used to highlight important elements.

---

### Responsiveness

A mobile-first approach was used. The layout adjusts using CSS Grid, ensuring usability across different screen sizes.

---

### Trade-offs

To maintain performance, no heavy UI libraries were used. Styling was done using simple CSS to keep the application lightweight.

---

### Challenges

The main challenge was restructuring the frontend using React while keeping it simple and clean. The original UI was minimal, so improvements were made step by step.

---

## Before and After

### Before
Basic Django template-based UI.

### After
Modern React-based UI with improved layout and responsiveness.

(Add screenshots here)

---

## Setup Instructions

### Backend

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
