document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INJECT GLOBAL TEXT & LINKS
    document.querySelectorAll('[data-config]').forEach(el => {
        const key = el.getAttribute('data-config');
        if (Config[key]) el.innerHTML = Config[key];
        if (key.includes('.')) {
            const keys = key.split('.');
            if(Config[keys[0]] && Config[keys[0]][keys[1]]) {
                el.innerHTML = Config[keys[0]][keys[1]];
            }
        }
    });

    // 2. INJECT IMAGES & BACKGROUNDS
    document.querySelectorAll('[data-img]').forEach(el => {
        const key = el.getAttribute('data-img');
        if (Config.images[key]) {
            if (el.tagName === 'IMG') el.src = Config.images[key];
            else el.style.backgroundImage = `url('${Config.images[key]}')`;
        }
    });

    // 3. WHATSAPP & CONTACT LINKS
    const waLink = `https://wa.me/${Config.whatsapp}`;
    document.querySelectorAll('.wa-link').forEach(el => el.href = waLink);
    document.querySelectorAll('.phone-link').forEach(el => el.href = `tel:${Config.phone}`);
    document.querySelectorAll('.email-link').forEach(el => el.href = `mailto:${Config.email}`);

    // 4. INJECT GOOGLE MAP
    const mapEl = document.getElementById('map-iframe');
    if(mapEl) mapEl.src = Config.googleMapsEmbed;

    // 5. RENDER MENU 
    const menuContainer = document.getElementById('menu-container');
    const featuredContainer = document.getElementById('featured-container');
    
    if (menuContainer || featuredContainer) {
        let allItems = [];
        let menuHTML = '';

        Config.menu.forEach(category => {
            menuHTML += `<h2 class="text-3xl font-serif text-[#D4AF37] mt-12 mb-6 border-b border-neutral-800 pb-2">${category.category}</h2>`;
            menuHTML += `<div class="grid grid-cols-1 md:grid-cols-2 gap-8">`;
            
            category.items.forEach(item => {
                allItems.push(item);
                menuHTML += createMenuCard(item);
            });
            menuHTML += `</div>`;
        });

        if (menuContainer) menuContainer.innerHTML = menuHTML;
        
        // Render top 2 items for homepage
        if (featuredContainer && allItems.length > 0) {
            featuredContainer.innerHTML = createMenuCard(allItems[0]) + (allItems[1] ? createMenuCard(allItems[1]) : '');
        }
    }

    // 6. RESERVATION FORM
    const resForm = document.getElementById('reservation-form');
    if (resForm) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('res-name').value;
            const date = document.getElementById('res-date').value;
            const time = document.getElementById('res-time').value;
            const guests = document.getElementById('res-guests').value;
            
            const message = `Hi, I would like to book a table at ${Config.restaurantName} on ${date} at ${time} for ${guests} people. Name: ${name}.`;
            const waUrl = `https://wa.me/${Config.whatsapp}?text=${encodeURIComponent(message)}`;
            window.open(waUrl, '_blank');
        });
    }
});

function createMenuCard(item) {
    const tagHtml = item.tag ? `<span class="absolute top-4 right-4 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">${item.tag}</span>` : '';
    return `
    <div class="group flex flex-col sm:flex-row bg-neutral-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-300 relative">
        ${tagHtml}
        <div class="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
        </div>
        <div class="p-6 sm:w-2/3 flex flex-col justify-center">
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-serif text-white">${item.name}</h3>
                <span class="text-[#D4AF37] font-bold text-lg whitespace-nowrap ml-4">${Config.currency}${item.price}</span>
            </div>
            <p class="text-neutral-400 text-sm leading-relaxed">${item.description}</p>
        </div>
    </div>`;
}

