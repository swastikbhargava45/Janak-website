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
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.5634563812!2d73.9659453!3d15.2641453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb3e34b4c73f5%3A0x6b7b8b8b8b8b8b8b!2sKayji+Palladium!5e0!3m2!1sen!2sin!4v1714316000000",

    // --- HOURS ---
    hours: { weekdays: "8:00 AM - 10:00 PM", weekends: "7:30 AM - 11:00 PM" },

    // --- IMAGES ---
    images: {
        logo: "https://i.postimg.cc/pmWJCzq6/logo.jpg", 
        hero: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop", 
        chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop", 
        aboutInterior: "https://i.postimg.cc/ftnVwDn3/interior1.jpg", 
        
        // Physical Menu Scans
        menuScans: [
            "https://i.postimg.cc/yd3fWX3R/IMG-20260323-194253.jpg", "https://i.postimg.cc/MTfsXbf7/IMG-20260323-194348.jpg",
            "https://i.postimg.cc/bJS6dHS0/IMG-20260323-194415.jpg", "https://i.postimg.cc/LXgyhBgf/IMG-20260323-194530.jpg",
            "https://i.postimg.cc/vTR0ng55/IMG-20260323-194555.jpg", "https://i.postimg.cc/WzR5ZF0n/IMG-20260323-194638.jpg",
            "https://i.postimg.cc/ZnkwNB6V/IMG-20260323-194712.jpg", "https://i.postimg.cc/qqf1Kh2D/IMG-20260323-194759.jpg",
            "https://i.postimg.cc/4yCWc7pM/IMG-20260323-194824.jpg"
        ]
    },

    // --- ABOUT CONTENT ---
    about: {
        [span_3](start_span)story: "The Janak Cafe fills a vital gap in the Madgaon market, offering authentic South Indian classics alongside premium Italian fusion in an upscale, ambient environment[span_3](end_span). [span_4](start_span)[span_5](start_span)Born from the vision of an owner seeking quality and taste in Goa, we bridge two culinary worlds at Kayji Palladium[span_4](end_span)[span_5](end_span).",
        chefName: "Sonu Chef",
    },

    // --- HIGH SELLERS ---
    menu: [
        {
            category: "Our Best Sellers",
            items: [
                [span_6](start_span){ name: "Signature Masala Dosa", description: "Crispy rice crepe with spiced potato filling[span_6](end_span).", price: "170", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=1000", tag: "Signature" },
                [span_7](start_span){ name: "Soft Steamed Idli", description: "Classic fluffy idlis with sambar and chutney[span_7](end_span).", price: "140", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000", tag: "Popular" },
                [span_8](start_span){ name: "Authentic Pizza", description: "Wood-fired crust with premium Italian toppings[span_8](end_span).", price: "450", image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=1000", tag: "New" },
                [span_9](start_span){ name: "Creamy Pasta", description: "Handcrafted pasta tossed in rich, savory sauces[span_9](end_span).", price: "380", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1000", tag: "Chef's Special" }
            ]
        }
    ]
};

