document.addEventListener('DOMContentLoaded', () => {
    // 1. INJECT TEXT
    document.querySelectorAll('[data-config]').forEach(el => {
        const key = el.getAttribute('data-config');
        if (key.includes('.')) {
            const keys = key.split('.');
            if(Config[keys[0]] && Config[keys[0]][keys[1]]) el.innerHTML = Config[keys[0]][keys[1]];
        } else if (Config[key]) el.innerHTML = Config[key];
    });

    // 2. INJECT IMAGES
    document.querySelectorAll('[data-img]').forEach(el => {
        const key = el.getAttribute('data-img');
        if (Config.images[key]) {
            if (el.tagName === 'IMG') el.src = Config.images[key];
            else el.style.backgroundImage = `url('${Config.images[key]}')`;
        }
    });

    // 3. CONTACT LINKS
    document.querySelectorAll('.wa-link').forEach(el => el.href = `https://wa.me/${Config.whatsapp}`);
    document.querySelectorAll('.phone-link').forEach(el => el.href = `tel:${Config.phone}`);

    // 4. GOOGLE MAP
    const mapEl = document.getElementById('map-iframe');
    if(mapEl) mapEl.src = Config.googleMapsEmbed;

    // 5. RENDER MENU & SCANS
    const menuContainer = document.getElementById('menu-container');
    if (menuContainer) {
        let menuHTML = '';
        Config.menu.forEach(category => {
            menuHTML += `<h2 class="text-3xl font-serif text-[#C69C53] mt-12 mb-6 border-b border-neutral-800 pb-2">${category.category}</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8">`;
            category.items.forEach(item => {
                menuHTML += `
                <div class="group flex flex-col sm:flex-row bg-neutral-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-[#C69C53]/10 transition-all duration-300 relative">
                    ${item.tag ? `<span class="absolute top-4 right-4 bg-[#C69C53] text-black text-xs font-bold px-3 py-1 rounded-full uppercase z-10">${item.tag}</span>` : ''}
                    <div class="w-full sm:w-1/3 h-48 sm:h-auto overflow-hidden"><img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"></div>
                    <div class="p-6 sm:w-2/3 flex flex-col justify-center">
                        <div class="flex justify-between items-start mb-2"><h3 class="text-xl font-serif text-white">${item.name}</h3><span class="text-[#C69C53] font-bold text-lg">${Config.currency}${item.price}</span></div>
                        <p class="text-neutral-400 text-sm leading-relaxed">${item.description}</p>
                    </div>
                </div>`;
            });
            menuHTML += `</div>`;
        });

        if (Config.images.menuScans && Config.images.menuScans.length > 0) {
            menuHTML += `<div id="physical-menu" class="pt-16 text-center"><a href="#physical-menu" class="bg-[#C69C53] text-black px-6 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-white transition-colors inline-block mb-10">Browse Full Physical Menu</a><h2 class="text-3xl font-serif text-[#C69C53] mb-6 border-b border-neutral-800 pb-2">Complete Menu Scans</h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">`;
            Config.images.menuScans.forEach(scanUrl => {
                menuHTML += `<div class="bg-neutral-900 p-2 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"><img src="${scanUrl}" alt="Menu Scan" class="w-full rounded-xl" loading="lazy"></div>`;
            });
            menuHTML += `</div></div>`;
        }
        menuContainer.innerHTML = menuHTML;
    }

    // 6. RESERVATION
    const resForm = document.getElementById('reservation-form');
    if (resForm) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = `Table Booking Request: Name: ${document.getElementById('res-name').value}, Date: ${document.getElementById('res-date').value}, Time: ${document.getElementById('res-time').value}, Guests: ${document.getElementById('res-guests').value}`;
            window.open(`https://wa.me/${Config.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
        });
    }
});
