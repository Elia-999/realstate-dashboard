# Real Estate Dashboard

Real Estate Dashboard is a React app built with Vite featuring property listings with search, filter by bedrooms, and price sorting. Detailed pages show price history charts (Chart.js) and interactive maps (React Leaflet). Responsive design with CSS modules. Data is loaded locally, ready for API integration.

**Features**
Property listings with images and essential info.
Case-insensitive search functionality.
Filters by minimum number of bedrooms.
Sorts properties by price (ascending/descending).

## How to Run the Project

1. **Clone the repository** (if applicable) or download the project files.
2. Open your terminal and navigate to the project directory.
3. Install dependencies: npm install

**Start the development server:**

- npm run dev

**Time Taken:**
Approximately 5 hours (replace with your actual time).

**Satisfaction Rating:**
On a scale of 0-10, I rate my submission a 8/10.

**Notes & Improvements**

**Approach:**

- Used Vite for fast development and hot module replacement.
- Focused on creating reusable components and keeping the code clean and maintainable.
- Utilized React hooks (useState, useEffect, useMemo) effectively to optimize rendering and state management.
- Implemented CSS Modules for styling components in a modular and scoped way.
  - Avoids global CSS conflicts
  - Encourages component-specific styling and better maintainability

**Trade-offs:**

- I used a simple in-memory data fetch from a JSON file to mimic API calls due to time constraints. In a real-world app, I’d implement proper API service for integration with loading/error states.

**Improvements:**
If given more time, I’d add:

- Add pagination for property listings.
- Improve the UI with better page designs, responsiveness, visual enhancements using icons, and improved accessibility.
- While I used React's built-in hooks (useState, useEffect, useMemo) for this project, for medium to large-scale applications, I would adopt Redux for global state management — to enhance performance, reduce redundant API calls, and better structure shared state across the app.
