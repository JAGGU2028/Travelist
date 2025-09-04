// Global variables
let currentDestinations = [];
let currentStays = [];
let searchTimeout;

// Disney+ Hotstar Style Carousel variables
let currentSlideIndex = 0;
let carouselInterval;
const totalSlides = 10;

// Navbar theme mapping for each carousel image
const navbarThemes = [
    'theme-landscape',  // Image 1: General India landscape
    'theme-beach',      // Image 2: Goa beaches
    'theme-backwater',  // Image 3: Kerala backwaters
    'theme-heritage',   // Image 4: Rajasthan heritage
    'theme-mountain',   // Image 5: Himalayan mountains
    'theme-islands',    // Image 6: Andaman Islands
    'theme-temple',     // Image 7: South India temples
    'theme-valley',     // Image 8: Kashmir valley
    'theme-desert',     // Image 9: Thar desert
    'theme-wildlife'    // Image 10: Wildlife sanctuaries
];

// Comprehensive Indian destinations data - 25 destinations
const sampleDestinations = [
    {
        id: 1,
        name: "North Goa",
        description: "Experience vibrant nightlife, water sports, and Portuguese architecture in North Goa's famous beaches.",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.6,
        reviews: 15847,
        price: "From ₹2,500/night",
        location: "Goa, India",
        type: "Beach",
        attractions: ["Baga Beach", "Calangute Beach", "Anjuna Beach", "Fort Aguada"]
    },
    {
        id: 2,
        name: "South Goa",
        description: "Discover serene beaches, luxury resorts, and peaceful coastal villages in South Goa.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.7,
        reviews: 12340,
        price: "From ₹3,200/night",
        location: "Goa, India",
        type: "Beach",
        attractions: ["Palolem Beach", "Colva Beach", "Butterfly Beach", "Cabo de Rama Fort"]
    },
    {
        id: 3,
        name: "Kerala Backwaters",
        description: "Cruise through serene backwaters on traditional houseboats in God's Own Country.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.8,
        reviews: 18920,
        price: "From ₹4,000/night",
        location: "Kerala, India",
        type: "Nature",
        attractions: ["Alleppey Backwaters", "Kumarakom", "Vembanad Lake", "Spice Plantations"]
    },
    {
        id: 4,
        name: "Jaipur - Pink City",
        description: "Explore royal palaces, majestic forts, and vibrant culture in Rajasthan's capital.",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.7,
        reviews: 22150,
        price: "From ₹3,500/night",
        location: "Rajasthan, India",
        type: "Heritage",
        attractions: ["City Palace", "Hawa Mahal", "Amber Fort", "Jantar Mantar"]
    },
    {
        id: 5,
        name: "Manali",
        description: "Experience breathtaking mountain views, adventure sports, and cool climate in Himachal.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.5,
        reviews: 16780,
        price: "From ₹2,800/night",
        location: "Himachal Pradesh, India",
        type: "Mountain",
        attractions: ["Rohtang Pass", "Solang Valley", "Hadimba Temple", "Old Manali"]
    },
    {
        id: 6,
        name: "Agra - Taj Mahal",
        description: "Visit the symbol of eternal love and one of the Seven Wonders of the World.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.8,
        reviews: 35420,
        price: "From ₹2,500/night",
        location: "Uttar Pradesh, India",
        type: "Heritage",
        attractions: ["Taj Mahal", "Agra Fort", "Mehtab Bagh", "Itmad-ud-Daulah"]
    },
    {
        id: 7,
        name: "Kashmir Valley",
        description: "Experience paradise on earth with stunning lakes, gardens, and snow-capped mountains.",
        image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.9,
        reviews: 14560,
        price: "From ₹4,500/night",
        location: "Jammu & Kashmir, India",
        type: "Mountain",
        attractions: ["Dal Lake", "Gulmarg", "Pahalgam", "Srinagar Gardens"]
    },
    {
        id: 8,
        name: "Udaipur - City of Lakes",
        description: "Discover the romantic city with beautiful lakes, palaces, and Rajasthani culture.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.7,
        reviews: 19840,
        price: "From ₹5,000/night",
        location: "Rajasthan, India",
        type: "Heritage",
        attractions: ["City Palace", "Lake Pichola", "Jag Mandir", "Saheliyon Ki Bari"]
    },
    {
        id: 9,
        name: "Rishikesh",
        description: "The yoga capital of the world with spiritual experiences and adventure sports.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.6,
        reviews: 13270,
        price: "From ₹1,800/night",
        location: "Uttarakhand, India",
        type: "Spiritual",
        attractions: ["Laxman Jhula", "Ram Jhula", "Beatles Ashram", "Triveni Ghat"]
    },
    {
        id: 10,
        name: "Hampi",
        description: "Explore ancient ruins, temples, and boulder landscapes in this UNESCO World Heritage site.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.5,
        reviews: 8960,
        price: "From ₹2,200/night",
        location: "Karnataka, India",
        type: "Heritage",
        attractions: ["Virupaksha Temple", "Hampi Bazaar", "Matanga Hill", "Elephant Stables"]
    },
    {
        id: 11,
        name: "Darjeeling",
        description: "Famous for tea gardens, toy train, and stunning views of Kanchenjunga peak.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.4,
        reviews: 11580,
        price: "From ₹3,000/night",
        location: "West Bengal, India",
        type: "Mountain",
        attractions: ["Tiger Hill", "Darjeeling Himalayan Railway", "Tea Gardens", "Peace Pagoda"]
    },
    {
        id: 12,
        name: "Varanasi",
        description: "One of the oldest cities in the world, famous for ghats, temples, and spiritual experiences.",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.3,
        reviews: 16750,
        price: "From ₹2,000/night",
        location: "Uttar Pradesh, India",
        type: "Spiritual",
        attractions: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Sarnath", "Ganges Aarti"]
    },
    {
        id: 13,
        name: "Mysore",
        description: "Known for magnificent palaces, silk sarees, and rich cultural heritage of Karnataka.",
        image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.5,
        reviews: 14320,
        price: "From ₹2,800/night",
        location: "Karnataka, India",
        type: "Heritage",
        attractions: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens", "St. Philomena's Church"]
    },
    {
        id: 14,
        name: "Shimla",
        description: "The queen of hill stations with colonial architecture and pleasant weather.",
        image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.2,
        reviews: 18640,
        price: "From ₹3,200/night",
        location: "Himachal Pradesh, India",
        type: "Mountain",
        attractions: ["Mall Road", "Ridge", "Christ Church", "Jakhu Temple"]
    },
    {
        id: 15,
        name: "Pushkar",
        description: "Holy city with sacred lake, colorful markets, and annual camel fair.",
        image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.4,
        reviews: 9870,
        price: "From ₹2,500/night",
        location: "Rajasthan, India",
        type: "Spiritual",
        attractions: ["Pushkar Lake", "Brahma Temple", "Savitri Temple", "Pushkar Bazaar"]
    },
    {
        id: 16,
        name: "Ooty",
        description: "Queen of hill stations with tea gardens, lakes, and pleasant climate year-round.",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.3,
        reviews: 15420,
        price: "From ₹3,500/night",
        location: "Tamil Nadu, India",
        type: "Mountain",
        attractions: ["Ooty Lake", "Botanical Gardens", "Doddabetta Peak", "Nilgiri Mountain Railway"]
    },
    {
        id: 17,
        name: "Ranthambore",
        description: "Famous national park known for tiger sightings and wildlife photography.",
        image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.6,
        reviews: 7890,
        price: "From ₹4,200/night",
        location: "Rajasthan, India",
        type: "Wildlife",
        attractions: ["Tiger Safari", "Ranthambore Fort", "Padam Talao", "Malik Talao"]
    },
    {
        id: 18,
        name: "Munnar",
        description: "Hill station famous for tea plantations, misty mountains, and cool climate.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.7,
        reviews: 12650,
        price: "From ₹3,800/night",
        location: "Kerala, India",
        type: "Mountain",
        attractions: ["Tea Gardens", "Eravikulam National Park", "Mattupetty Dam", "Echo Point"]
    },
    {
        id: 19,
        name: "Jodhpur - Blue City",
        description: "The blue city with magnificent fort, palaces, and desert culture of Rajasthan.",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.5,
        reviews: 17230,
        price: "From ₹3,000/night",
        location: "Rajasthan, India",
        type: "Heritage",
        attractions: ["Mehrangarh Fort", "Umaid Bhawan Palace", "Clock Tower", "Mandore Gardens"]
    },
    {
        id: 20,
        name: "Amritsar",
        description: "Holy city of Sikhs with the famous Golden Temple and rich Punjabi culture.",
        image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.8,
        reviews: 21340,
        price: "From ₹2,200/night",
        location: "Punjab, India",
        type: "Spiritual",
        attractions: ["Golden Temple", "Jallianwala Bagh", "Wagah Border", "Partition Museum"]
    },
    {
        id: 21,
        name: "Kodaikanal",
        description: "Princess of hill stations with lakes, waterfalls, and pleasant weather.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.4,
        reviews: 10890,
        price: "From ₹3,200/night",
        location: "Tamil Nadu, India",
        type: "Mountain",
        attractions: ["Kodai Lake", "Coaker's Walk", "Bryant Park", "Pillar Rocks"]
    },
    {
        id: 22,
        name: "Jim Corbett",
        description: "India's oldest national park, famous for tigers and diverse wildlife.",
        image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.5,
        reviews: 8760,
        price: "From ₹4,500/night",
        location: "Uttarakhand, India",
        type: "Wildlife",
        attractions: ["Tiger Safari", "Corbett Falls", "Garjiya Devi Temple", "Dhikala Zone"]
    },
    {
        id: 23,
        name: "Coorg",
        description: "Scotland of India with coffee plantations, misty hills, and pleasant climate.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.6,
        reviews: 13450,
        price: "From ₹3,600/night",
        location: "Karnataka, India",
        type: "Mountain",
        attractions: ["Abbey Falls", "Raja's Seat", "Coffee Plantations", "Namdroling Monastery"]
    },
    {
        id: 24,
        name: "Khajuraho",
        description: "UNESCO World Heritage site famous for ancient temples with intricate sculptures.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.3,
        reviews: 6780,
        price: "From ₹2,800/night",
        location: "Madhya Pradesh, India",
        type: "Heritage",
        attractions: ["Western Group Temples", "Eastern Group Temples", "Khajuraho Museum", "Light & Sound Show"]
    },
    {
        id: 25,
        name: "Leh Ladakh",
        description: "Land of high passes with stunning landscapes, monasteries, and adventure activities.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
        rating: 4.9,
        reviews: 19560,
        price: "From ₹5,500/night",
        location: "Ladakh, India",
        type: "Mountain",
        attractions: ["Pangong Lake", "Nubra Valley", "Magnetic Hill", "Thiksey Monastery"]
    }
];

const sampleStays = [
    {
        id: 1,
        name: "Luxury Beach Resort Goa",
        location: "North Goa, India",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop",
        price: "₹8,500",
        rating: 4.8,
        amenities: ["Beach Access", "Pool", "Spa", "WiFi", "Restaurant"],
        description: "Luxury beachfront resort with world-class amenities and stunning ocean views."
    },
    {
        id: 2,
        name: "Heritage Palace Hotel",
        location: "Jaipur, Rajasthan",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
        price: "₹12,000",
        rating: 4.9,
        amenities: ["Heritage Architecture", "Royal Dining", "Spa", "Pool", "Cultural Shows"],
        description: "Experience royal luxury in this converted palace with authentic Rajasthani hospitality."
    },
    {
        id: 3,
        name: "Mountain View Resort",
        location: "Manali, Himachal Pradesh",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
        price: "₹6,500",
        rating: 4.6,
        amenities: ["Mountain Views", "Adventure Sports", "Bonfire", "WiFi", "Restaurant"],
        description: "Cozy mountain resort perfect for adventure enthusiasts and nature lovers."
    }
];

// Disney+ Hotstar Style Carousel Functions
function initializeCarousel() {
    updateCarousel();
    startAutoSlide();
}

function updateCarousel() {
    const cards = document.querySelectorAll('.carousel-card');
    const indicators = document.querySelectorAll('.indicator');
    
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentSlideIndex);
    });
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlideIndex);
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateCarousel();
    resetAutoSlide();
}

function previousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
    resetAutoSlide();
}

function goToSlide(index) {
    currentSlideIndex = index;
    updateCarousel();
    resetAutoSlide();
}

function startAutoSlide() {
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function resetAutoSlide() {
    clearInterval(carouselInterval);
    startAutoSlide();
}

// Enhanced search functionality
function searchDestination() {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
        currentDestinations = sampleDestinations;
        displayDestinations();
        return;
    }
    
    showLoadingSpinner();
    
    setTimeout(() => {
        const filteredDestinations = sampleDestinations.filter(dest => {
            const searchTerm = query.toLowerCase();
            return (
                dest.name.toLowerCase().includes(searchTerm) ||
                dest.location.toLowerCase().includes(searchTerm) ||
                dest.type.toLowerCase().includes(searchTerm) ||
                dest.description.toLowerCase().includes(searchTerm) ||
                dest.attractions.some(attraction => 
                    attraction.toLowerCase().includes(searchTerm)
                ) ||
                // Additional search terms
                (searchTerm.includes('beach') && dest.type === 'Beach') ||
                (searchTerm.includes('mountain') && dest.type === 'Mountain') ||
                (searchTerm.includes('heritage') && dest.type === 'Heritage') ||
                (searchTerm.includes('temple') && dest.type === 'Spiritual') ||
                (searchTerm.includes('wildlife') && dest.type === 'Wildlife') ||
                (searchTerm.includes('hill station') && dest.type === 'Mountain') ||
                (searchTerm.includes('palace') && dest.type === 'Heritage') ||
                (searchTerm.includes('fort') && dest.type === 'Heritage') ||
                (searchTerm.includes('lake') && (dest.attractions.some(attr => attr.toLowerCase().includes('lake')) || dest.description.toLowerCase().includes('lake'))) ||
                (searchTerm.includes('desert') && dest.location.toLowerCase().includes('rajasthan')) ||
                (searchTerm.includes('backwater') && dest.location.toLowerCase().includes('kerala')) ||
                (searchTerm.includes('tea') && (dest.name.toLowerCase().includes('darjeeling') || dest.name.toLowerCase().includes('munnar') || dest.name.toLowerCase().includes('ooty'))) ||
                (searchTerm.includes('tiger') && dest.type === 'Wildlife')
            );
        });
        
        currentDestinations = filteredDestinations.length > 0 ? filteredDestinations : sampleDestinations;
        displayDestinations();
        hideLoadingSpinner();
        
        // Scroll to destinations section after search
        document.getElementById('destinations').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }, 800);
}

// Clear search and return to home
function clearSearch() {
    document.getElementById('searchInput').value = '';
    currentDestinations = sampleDestinations;
    displayDestinations();
    document.getElementById('home').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Auto-suggestions for search
function setupSearchSuggestions() {
    const searchInput = document.getElementById('searchInput');
    const suggestionsDiv = document.getElementById('searchSuggestions');
    
    const suggestions = [
        'Goa Beaches', 'Kerala Backwaters', 'Rajasthan Heritage', 'Himalayan Mountains',
        'Taj Mahal', 'Kashmir Valley', 'Manali', 'Shimla', 'Darjeeling', 'Ooty',
        'Udaipur', 'Jaipur', 'Jodhpur', 'Varanasi', 'Rishikesh', 'Amritsar',
        'Hampi', 'Mysore', 'Coorg', 'Munnar', 'Kodaikanal', 'Pushkar',
        'Ranthambore', 'Jim Corbett', 'Khajuraho', 'Leh Ladakh'
    ];
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        if (query.length < 2) {
            suggestionsDiv.style.display = 'none';
            return;
        }
        
        const filteredSuggestions = suggestions.filter(suggestion => 
            suggestion.toLowerCase().includes(query)
        ).slice(0, 5);
        
        if (filteredSuggestions.length > 0) {
            suggestionsDiv.innerHTML = filteredSuggestions.map(suggestion => 
                `<div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>`
            ).join('');
            suggestionsDiv.style.display = 'block';
        } else {
            suggestionsDiv.style.display = 'none';
        }
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !suggestionsDiv.contains(e.target)) {
            suggestionsDiv.style.display = 'none';
        }
    });
}

function selectSuggestion(suggestion) {
    document.getElementById('searchInput').value = suggestion;
    document.getElementById('searchSuggestions').style.display = 'none';
    searchDestination();
}

function displayDestinations() {
    const grid = document.getElementById('destinationsGrid');
    grid.innerHTML = '';
    
    currentDestinations.forEach(destination => {
        const card = createDestinationCard(destination);
        grid.appendChild(card);
    });
}

function createDestinationCard(destination) {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.onclick = () => openDestinationModal(destination);
    
    card.innerHTML = `
        <img src="${destination.image}" alt="${destination.name}" loading="lazy">
        <div class="card-content">
            <h3 class="card-title">${destination.name}</h3>
            <p class="card-description">${destination.description}</p>
            <div class="card-meta">
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span>${destination.rating}</span>
                    <span>(${destination.reviews.toLocaleString()} reviews)</span>
                </div>
                <div class="price">${destination.price}</div>
            </div>
            <div class="location">
                <i class="fas fa-map-marker-alt"></i>
                <span>${destination.location}</span>
            </div>
        </div>
    `;
    
    return card;
}

function displayStays() {
    const grid = document.getElementById('staysGrid');
    grid.innerHTML = '';
    
    sampleStays.forEach(stay => {
        const card = createStayCard(stay);
        grid.appendChild(card);
    });
}

function createStayCard(stay) {
    const card = document.createElement('div');
    card.className = 'stay-card';
    card.onclick = () => openStayModal(stay);
    
    card.innerHTML = `
        <img src="${stay.image}" alt="${stay.name}" loading="lazy">
        <div class="card-content">
            <h3 class="card-title">${stay.name}</h3>
            <p class="card-description">${stay.description}</p>
            <div class="card-meta">
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span>${stay.rating}</span>
                </div>
                <div class="price">${stay.price}/night</div>
            </div>
            <div class="amenities">
                ${stay.amenities.slice(0, 3).map(amenity => 
                    `<span class="amenity-tag">${amenity}</span>`
                ).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Modal functions
function openDestinationModal(destination) {
    const modal = document.getElementById('destinationModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <img src="${destination.image.replace('w=500&h=300', 'w=800&h=400')}" 
             alt="${destination.name}" 
             style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px 15px 0 0;">
        <div style="padding: 2rem;">
            <h2 style="margin-bottom: 1rem; color: var(--text-dark);">${destination.name}</h2>
            <p style="margin-bottom: 1.5rem; color: var(--text-light); line-height: 1.6;">${destination.description}</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                <div>
                    <h4 style="color: var(--text-dark); margin-bottom: 0.5rem;">Rating</h4>
                    <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--secondary-color);">
                        <i class="fas fa-star"></i>
                        <span>${destination.rating}</span>
                        <span style="color: var(--text-light);">(${destination.reviews.toLocaleString()} reviews)</span>
                    </div>
                </div>
                <div>
                    <h4 style="color: var(--text-dark); margin-bottom: 0.5rem;">Price Range</h4>
                    <p style="color: var(--brand-color); font-weight: 600;">${destination.price}</p>
                </div>
                <div>
                    <h4 style="color: var(--text-dark); margin-bottom: 0.5rem;">Location</h4>
                    <p style="color: var(--text-light);">${destination.location}</p>
                </div>
                <div>
                    <h4 style="color: var(--text-dark); margin-bottom: 0.5rem;">Type</h4>
                    <p style="color: var(--text-light);">${destination.type}</p>
                </div>
            </div>
            
            <div>
                <h4 style="color: var(--text-dark); margin-bottom: 1rem;">Top Attractions</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${destination.attractions.map(attraction => 
                        `<span style="background: var(--light-bg); padding: 0.5rem 1rem; border-radius: 20px; color: var(--text-dark); font-size: 0.9rem;">${attraction}</span>`
                    ).join('')}
                </div>
            </div>
            
            <button style="width: 100%; margin-top: 2rem; padding: 1rem; background: var(--brand-color); color: white; border: none; border-radius: 10px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: var(--transition);" 
                    onmouseover="this.style.background='#e55a2b'" 
                    onmouseout="this.style.background='var(--brand-color)'">
                Book Now
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
}

function openStayModal(stay) {
    const modal = document.getElementById('stayModal');
    const modalBody = document.getElementById('stayModalBody');
    
    modalBody.innerHTML = `
        <img src="${stay.image.replace('w=500&h=300', 'w=800&h=400')}" 
             alt="${stay.name}" 
             style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px 15px 0 0;">
        <div style="padding: 2rem;">
            <h2 style="margin-bottom: 1rem; color: var(--text-dark);">${stay.name}</h2>
            <p style="margin-bottom: 1.5rem; color: var(--text-light); line-height: 1.6;">${stay.description}</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                <div>
                    <h4 style="color: var(--text-dark); margin-bottom: 0.5rem;">Rating</h4>
                    <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--secondary-color);">
                        <i class="fas fa-star"></i>
                        <span>${stay.rating}</span>
                    </div>
                </div>
                <div>
                    <h4 style="color: var(--text-dark); margin-bottom: 0.5rem;">Price</h4>
                    <p style="color: var(--brand-color); font-weight: 600;">${stay.price}/night</p>
                </div>
                <div style="grid-column: 1 / -1;">
                    <h4 style="color: var(--text-dark); margin-bottom: 0.5rem;">Location</h4>
                    <p style="color: var(--text-light);">${stay.location}</p>
                </div>
            </div>
            
            <div>
                <h4 style="color: var(--text-dark); margin-bottom: 1rem;">Amenities</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${stay.amenities.map(amenity => 
                        `<span style="background: var(--light-bg); padding: 0.5rem 1rem; border-radius: 20px; color: var(--text-dark); font-size: 0.9rem;">${amenity}</span>`
                    ).join('')}
                </div>
            </div>
            
            <button style="width: 100%; margin-top: 2rem; padding: 1rem; background: var(--brand-color); color: white; border: none; border-radius: 10px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: var(--transition);" 
                    onmouseover="this.style.background='#e55a2b'" 
                    onmouseout="this.style.background='var(--brand-color)'">
                Book This Stay
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Utility functions
function showLoadingSpinner() {
    document.getElementById('loadingSpinner').style.display = 'block';
}

function hideLoadingSpinner() {
    document.getElementById('loadingSpinner').style.display = 'none';
}

// Navbar scroll behavior
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel
    initializeCarousel();
    
    // Display initial content
    displayDestinations();
    displayStays();
    
    // Setup search suggestions
    setupSearchSuggestions();
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Search input with debouncing - removed auto-search
    const searchInput = document.getElementById('searchInput');
    
    // Enter key search only
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchDestination();
        }
    });
    
    // Modal close functionality
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.onclick = function() {
            this.closest('.modal').style.display = 'none';
        };
    });
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Pause carousel on hover
    const carousel = document.querySelector('.hero-carousel');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
});

// Initialize current destinations with sample data
currentDestinations = sampleDestinations;
