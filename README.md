# Wanderlust - Travel & Tourism Website

A modern, responsive travel and tourism website that helps users discover amazing destinations and find the perfect accommodations for their journey.

## Features

### 🌍 Destination Discovery
- **Smart Search**: Search for destinations by name, location, or type
- **Beautiful Gallery**: Stunning images fetched from Unsplash
- **Detailed Information**: Comprehensive destination details with attractions, ratings, and pricing
- **Interactive Modals**: Rich destination details in elegant modal windows

### 🏨 Accommodation Finder
- **Stay Comparison**: Compare different accommodation options
- **Detailed Listings**: Room details, amenities, and pricing information
- **Booking Integration**: Ready for integration with booking APIs
- **Filter Options**: Filter by price, amenities, and location

### 🎨 Modern Design
- **Responsive Layout**: Works perfectly on all devices
- **Smooth Animations**: Floating clouds, birds, and smooth transitions
- **Modern Typography**: Beautiful Poppins and Playfair Display fonts
- **Adaptive Themes**: Background changes based on destination type

### ✨ Interactive Elements
- **Floating Animations**: Clouds and birds that move across the screen
- **Smooth Scrolling**: Elegant navigation between sections
- **Loading States**: Beautiful loading spinners during searches
- **Hover Effects**: Interactive cards with smooth hover animations

## Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: Interactive functionality without dependencies
- **Font Awesome**: Beautiful icons
- **Google Fonts**: Poppins and Playfair Display typography
- **Unsplash API**: High-quality destination images

## File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling and animations
├── script.js           # JavaScript functionality and interactions
└── README.md          # Project documentation
```

## Key Features Explained

### 1. Adaptive Environment
The website adapts its appearance based on the search query:
- **Beach/Tropical**: Blue ocean gradient
- **Mountain/Alps**: Dark mountain gradient  
- **Cultural/Japan**: Warm cultural gradient
- **Default**: Beautiful purple gradient

### 2. Floating Animations
- **Clouds**: Three different cloud formations floating across the screen
- **Birds**: Animated birds flying in different directions
- **Smooth Movement**: CSS animations with different speeds and directions

### 3. Search Functionality
- **Auto-suggestions**: Real-time search suggestions as you type
- **Debounced Input**: Optimized search with 300ms delay
- **Multiple Filters**: Search by destination name, location, or type

### 4. Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Perfect layout for tablets
- **Desktop Enhanced**: Rich desktop experience with hover effects

## Setup Instructions

1. **Clone or Download**: Get the project files
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Local Server** (Optional): For best experience, serve through a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## Customization

### Adding New Destinations
Edit the `sampleDestinations` array in `script.js`:

```javascript
{
    id: 7,
    name: "Your Destination",
    description: "Amazing description",
    image: "https://your-image-url.com",
    rating: 4.5,
    reviews: 1000,
    price: "From $200/night",
    location: "Country",
    type: "Type",
    attractions: ["Attraction 1", "Attraction 2"]
}
```

### Adding New Stays
Edit the `sampleStays` array in `script.js`:

```javascript
{
    id: 7,
    name: "Your Hotel",
    location: "City, Country",
    image: "https://your-image-url.com",
    price: "$250",
    rating: 4.7,
    amenities: ["WiFi", "Pool", "Spa"],
    description: "Hotel description"
}
```

### Customizing Colors
Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

## API Integration Ready

The website is structured to easily integrate with real APIs:

### Recommended APIs
- **Destinations**: Google Places API, TripAdvisor API
- **Images**: Unsplash API, Pexels API
- **Hotels**: Booking.com API, Expedia API, Airbnb API
- **Reviews**: TripAdvisor API, Google Reviews API

### Integration Points
- `searchDestination()` function for destination API calls
- `displayDestinations()` for rendering API results
- `displayStays()` for hotel/accommodation results
- Modal functions for detailed API data display

## Performance Features

- **Lazy Loading**: Images load only when needed
- **Debounced Search**: Prevents excessive API calls
- **Smooth Animations**: Hardware-accelerated CSS animations
- **Optimized Images**: Responsive image sizing
- **Minimal Dependencies**: Fast loading with vanilla JavaScript

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Future Enhancements

- [ ] Real API integration
- [ ] User authentication
- [ ] Booking system
- [ ] Payment integration
- [ ] User reviews and ratings
- [ ] Favorites/Wishlist
- [ ] Trip planning tools
- [ ] Social sharing
- [ ] Multi-language support
- [ ] Dark mode toggle

## Contributing

Feel free to contribute to this project by:
1. Adding new destinations
2. Improving animations
3. Enhancing responsive design
4. Adding new features
5. Optimizing performance

## License

This project is open source and available under the MIT License.

---

**Wanderlust** - Discover Your Next Adventure 🌍✈️
