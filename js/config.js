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
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=...2",

    // --- HOURS ---
    hours: {
        weekdays: "8:00 AM - 10:00 PM",
        weekends: "7:30 AM - 11:00 PM"
    },

    // --- IMAGES ---
    images: {
        logo: "https://i.postimg.cc/pmWJCzq6/logo.jpg", 
        
        // Premium AI-Selected Hero Image (Beautiful luxury cafe vibe)
        hero: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop", 
        
        // Premium AI-Selected Chef Image
        chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop", 
        
        // Your 5 Interior Photos (Saved for the About Page & Gallery)
        aboutInterior: "https://i.postimg.cc/ftnVwDn3/interior1.jpg", // Primary interior photo
        interiorPhoto2: "https://i.postimg.cc/2qJ4hspk/interior.jpg",
        interiorPhoto3: "https://i.postimg.cc/kRDdWBL4/extra1.jpg", 
        interiorPhoto4: "https://i.postimg.cc/D4mK18Rs/extra2.jpg", 
        interiorPhoto5: "https://i.postimg.cc/NK2fWPJr/extra3.jpg", 
    },

    // --- ABOUT PAGE CONTENT ---
    about: {
        story: "The Janak Cafe was born from a simple observation: while Goa offered beautiful beaches, Madgaon lacked a destination for high-quality South Indian and Italian flavors. Our founder envisioned a space where patrons could find the perfect crisp dosa alongside a rich, wood-fired pizza, all within a premium ambiance. Today, we bridge two culinary worlds in the heart of Goa.",
        chefName: "Sonu Chef",
    },

    // --- MENU (Categorized) ---
    menu: [
        {
            category: "Breakfast Classics",
            items: [
                { name: "Soft Idli", description: "Classic steamed rice cakes served with sambar and chutney.", price: "140", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000", tag: "Best Seller" },
                { name: "Medu Vada", description: "Crispy lentil doughnuts served with coconut chutney.", price: "130", image: "https://images.unsplash.com/photo-1626132646529-500637532537?q=80&w=1000", tag: "" },
                { name: "Ghee Podi Idli", description: "Idli tossed in aromatic ghee and podi masala.", price: "140", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=1000", tag: "Signature Dish" }
            ]
        },
        {
            category: "Signature Dosas",
            items: [
                { name: "Masala Dosa", description: "Potato-stuffed dosa with sambar & chutney.", price: "170", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=1000", tag: "" },
                { name: "Onion Rava Dosa", description: "Thin semolina dosa with onion and green chilli.", price: "180", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1000", tag: "" },
                { name: "Benne Cheese Podi Masala Dosa", description: "Premium butter dosa with cheese and spiced podi.", price: "220", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000", tag: "Chef's Special" }
            ]
        },
        {
            category: "Italian Wood-Fired & Pasta",
            items: [
                { name: "Wood-Fired Margherita Pizza", description: "Authentic Italian crust with San Marzano tomatoes, fresh mozzarella, and basil.", price: "450", image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=1000", tag: "Authentic" },
                { name: "Creamy Alfredo Pasta", description: "Penne tossed in a rich parmesan cream sauce with garlic and herbs.", price: "380", image: "https://images.unsplash.com/photo-1645112481358-0056157e3cc0?q=80&w=1000", tag: "" }
            ]
        },
        {
            category: "Vegetarian Soups (Rasam)",
            items: [
                { name: "Tomato Rasam", description: "Tangy South Indian soup made with tomatoes, tamarind, and pepper.", price: "140", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1000", tag: "" },
                { name: "Coconut Milk Soup", description: "Kerala-style mild soup with coconut milk and curry leaves.", price: "200", image: "https://images.unsplash.com/photo-1512058560366-cd2427ff66de?q=80&w=1000", tag: "" }
            ]
        },
        {
            category: "Thali & Rice Specials",
            items: [
                { name: "South Indian Thali", description: "Rice, sambar, rasam, curd, 2 curries, veg fry, papad & pickle.", price: "190", image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=1000", tag: "Value Meal" },
                { name: "Vegetable Biryani", description: "Aromatic basmati rice cooked with spices and seasonal vegetables.", price: "450", image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=1000", tag: "" }
            ]
        },
        {
            category: "Beverages",
            items: [
                { name: "South Indian Filter Coffee", description: "Traditional strong milk coffee.", price: "65", image: "https://images.unsplash.com/photo-1594910413554-e09f7a755d5b?q=80&w=1000", tag: "Must Try" },
                { name: "Buttermilk", description: "Spiced or plain yogurt drink.", price: "80", image: "https://images.unsplash.com/photo-1605192554106-d549b1b975cd?q=80&w=1000", tag: "" }
            ]
        }
    ]
};
