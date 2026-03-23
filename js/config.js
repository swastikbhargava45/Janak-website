const Config = {
    // --- BRANDING ---
    restaurantName: "The Janak Cafe
",
    tagline: "Authentic South Indian Flavours
",
    currency: "₹",
    themePrimary: "#C69C53
", // Luxury Gold
    
    // --- CONTACT & LOCATION ---
    phone: "+91 77758 66066
",
    whatsapp: "917775866066
", // No +, no spaces for WhatsApp API
    email: "janakcafe1@gmail.com
",
    address: "Kayji Palladium, Power House, c-22, circle, Gogol Housing Board, Madgaon, Davorlim, Goa 403601
",
    googleMapsEmbed: "https://maps.google.com/maps?q=Kayji+Palladium,+Gogol+Housing+Board,+Madgaon,+Goa&t=&z=15&ie=UTF8&iwloc=&output=embed
",
    
    // --- HOURS ---
    hours: {
        weekdays: "Mon - Fri: 12:00 PM - 11:00 PM",
        weekends: "Sat - Sun: 11:00 AM - 12:00 AM"
    },

    // --- IMAGES ---
    images: {
        logo: "https://via.placeholder.com/150x50/111/D4AF37?text=AURA+LUXE", 
        hero: "https://images.unsplash.com/photo-1414235077428-338988a2e8c0?q=80&w=2070&auto=format&fit=crop", 
        aboutInterior: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
        chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop",
    },

    // --- ABOUT PAGE CONTENT ---
    about: {
        story: "Founded in 2015, Aura Luxe redefines modern gastronomy by blending traditional flavors with contemporary techniques. Every dish is a masterpiece, crafted with locally sourced, premium ingredients to deliver an unforgettable dining experience.",
        chefName: "Executive Chef Alessandro Rossi",
    },

    // --- MENU (Categorized) ---
    menu: [
        {
            category: "Starters",
            items: [
                {
                    name: "Truffle Arancini",
                    description: "Crispy risotto balls infused with black truffle and wild mushrooms.",
                    price: "450",
                    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2070&auto=format&fit=crop",
                    tag: "Best Seller"
                },
                {
                    name: "Seared Scallops",
                    description: "Hokkaido scallops, cauliflower purée, crispy pancetta.",
                    price: "750",
                    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=2070&auto=format&fit=crop",
                    tag: ""
                }
            ]
        },
        {
            category: "Mains",
            items: [
                {
                    name: "Wagyu Ribeye",
                    description: "A5 Grade Wagyu, charred asparagus, red wine jus.",
                    price: "3200",
                    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
                    tag: "Chef Special"
                },
                {
                    name: "Saffron Risotto",
                    description: "Acquerello rice, Iranian saffron, 24-month Parmigiano-Reggiano.",
                    price: "950",
                    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=2070&auto=format&fit=crop",
                    tag: ""
                }
            ]
        }
    ]
};

