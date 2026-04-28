const Config = {
    // --- BRANDING ---
    restaurantName: "The Janak Cafe",
    tagline: "Authentic South Indian & Italian Fusion",
    currency: "₹",
    themePrimary: "#C69C53",
    
    // --- CONTACT & LOCATION ---
    phone: "+91 77758 66066",
    whatsapp: "917775866066",
    email: "thejanakcafe@gmail.com",
    address: "Kayji Palladium, Power House, c-22, circle, Gogol Housing Board, Madgaon, Davorlim, Goa 403601",
    googleMapsEmbed: "https://www.google.com/maps?q=Kayji+Palladium,Gogol+Housing+Board,Madgaon,Goa&output=embed", 

    // --- HOURS ---
    hours: { weekdays: "8:00 AM - 10:00 PM", weekends: "7:30 AM - 11:00 PM" },

    // --- IMAGES ---
    images: {
        logo: "https://i.postimg.cc/pmWJCzq6/logo.jpg", 
        hero: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop", 
        chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop", 
        aboutInterior: "https://i.postimg.cc/ftnVwDn3/interior1.jpg", 
        
        // Your 9 Physical Menu Scans
        menuScans: [
            "https://i.postimg.cc/yd3fWX3R/IMG-20260323-194253.jpg", 
            "https://i.postimg.cc/MTfsXbf7/IMG-20260323-194348.jpg",
            "https://i.postimg.cc/bJS6dHS0/IMG-20260323-194415.jpg", 
            "https://i.postimg.cc/LXgyhBgf/IMG-20260323-194530.jpg",
            "https://i.postimg.cc/vTR0ng55/IMG-20260323-194555.jpg", 
            "https://i.postimg.cc/WzR5ZF0n/IMG-20260323-194638.jpg",
            "https://i.postimg.cc/ZnkwNB6V/IMG-20260323-194712.jpg", 
            "https://i.postimg.cc/qqf1Kh2D/IMG-20260323-194759.jpg",
            "https://i.postimg.cc/4yCWc7pM/IMG-20260323-194824.jpg"
        ]
    },

    // --- ABOUT PAGE CONTENT ---
    about: {
        story: "The Janak Cafe was born from a simple observation: while Goa offered beautiful beaches, Madgaon lacked a destination for high-quality South Indian and Italian flavors. Our founder envisioned a space where patrons could find the perfect crisp dosa alongside a rich, wood-fired pizza, all within a premium ambiance. Today, we bridge two culinary worlds in the heart of Goa.",
        chefName: "Sonu Chef",
    },

    // --- TEXT MENU: ONLY THE 4 HIGH SELLERS ---
    menu: [
        {
            category: "Our High Sellers",
            items: [
                { 
                    name: "Signature Masala Dosa", 
                    description: "Golden crispy crepe with a spicy red chutney layer and savory potato filling.", 
                    price: "170", 
                    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=1000", 
                    tag: "Best Seller" 
                },
                { 
                    name: "Soft Steamed Idli", 
                    description: "Classic fluffy rice cakes served steaming hot with fresh sambar and coconut chutney.", 
                    price: "140", 
                    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000", 
                    tag: "Must Try" 
                },
                { 
                    name: "Wood-Fired Margherita Pizza", 
                    description: "Authentic Italian crust with San Marzano tomatoes, fresh mozzarella, and basil.", 
                    price: "450", 
                    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=1000", 
                    tag: "Authentic" 
                },
                { 
                    name: "Creamy Alfredo Pasta", 
                    description: "Penne tossed in a rich parmesan cream sauce with garlic and fresh herbs.", 
                    price: "380", 
                    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1000", 
                    tag: "Chef's Special" 
                }
            ]
        }
    ]
};
