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
    // REAL WORKING GOOGLE MAPS EMBED LINK:
    googleMapsEmbed: "https://www.google.com/maps?q=Kayji+Palladium,Gogol+Housing+Board,Madgaon,Goa&output=embed", 

    // --- HOURS ---
    hours: { weekdays: "8:00 AM - 10:00 PM", weekends: "7:30 AM - 11:00 PM" },

    // --- IMAGES ---
    images: {
        logo: "https://i.postimg.cc/pmWJCzq6/logo.jpg", 
        hero: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop", 
        chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop", 
        aboutInterior: "https://i.postimg.cc/ftnVwDn3/interior1.jpg", 
        
        // I HAVE EMPTIED THIS SO THE UGLY ERROR BOXES DISAPPEAR.
        menuScans: []
    },

    // --- ABOUT PAGE CONTENT ---
    about: {
        story: "The Janak Cafe was born from a simple observation: while Goa offered beautiful beaches, Madgaon lacked a destination for high-quality South Indian and Italian flavors. Our founder envisioned a space where patrons could find the perfect crisp dosa alongside a rich, wood-fired pizza, all within a premium ambiance. Today, we bridge two culinary worlds in the heart of Goa.",
        chefName: "Sonu Chef",
    },

    // --- TEXT MENU WITH FIXED STABLE IMAGES ---
    menu: [
        {
            category: "Breakfast Classics",
            items: [
                { name: "Soft Idli", description: "Classic steamed rice cakes served with sambar and chutney.", price: "140", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000", tag: "Best Seller" },
                { name: "Medu Vada", description: "Crispy lentil doughnuts served with coconut chutney.", price: "130", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000", tag: "" },
                { name: "Ghee Podi Idli", description: "Idli tossed in aromatic ghee and podi masala.", price: "140", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=1000", tag: "Signature Dish" }
            ]
        },
        {
            category: "Signature Dosas",
            items: [
                { name: "Masala Dosa", description: "Potato-stuffed dosa with sambar & chutney.", price: "170", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=1000", tag: "" },
                { name: "Benne Cheese Podi Masala Dosa", description: "Premium butter dosa with cheese and spiced podi.", price: "220", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000", tag: "Chef's Special" }
            ]
        },
        {
            category: "Italian Wood-Fired",
            items: [
                { name: "Margherita Pizza", description: "Authentic Italian crust with San Marzano tomatoes, fresh mozzarella, and basil.", price: "450", image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=1000", tag: "Authentic" },
                { name: "Creamy Alfredo Pasta", description: "Penne tossed in a rich parmesan cream sauce with garlic and herbs.", price: "380", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1000", tag: "" }
            ]
        }
    ]
};
