document.addEventListener('DOMContentLoaded', () => {
    // 1. INJECT GLOBAL TEXT
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

    // 3. WHATSAPP & PHONE
    document.querySelectorAll('.wa-link').forEach(el => el.href = `https://wa.me/${Config.whatsapp}`);
    document.querySelectorAll('.phone-link').forEach(el => el.href = `tel:${Config.phone}`);

    // 4. GOOGLE MAP
    const mapEl = document.getElementById('map-iframe');
    if(mapEl) mapEl.src = Config.googleMapsEmbed;

    // 5. RENDER MENU 
    const menuContainer = document.getElementById('menu-container');
    if (menuContainer) {
        let html = '';
        Config.menu.forEach(cat => {
            html += `<h2 class="text-3xl font-serif text-[#C69C53] mt-12 mb-6 border-b border-neutral-800 pb-2">${cat.category}</h2>`;
            html += `<div class="grid grid-cols-1 md:grid-cols-2 gap-8">`;
            cat.items.forEach(item => {
                html += `
                <div class="group bg-neutral-900 rounded-xl overflow-hidden shadow-lg relative flex flex-col sm:flex-row">
                    ${item.tag ? `<span class="absolute top-4 right-4 bg-[#C69C53] text-black text-[10px] font-bold px-2 py-1 rounded uppercase z-10">${item.tag}</span>` : ''}
                    <div class="sm:w-1/3 h-48 sm:h-auto overflow-hidden"><img src="${item.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"></div>
                    <div class="p-6 sm:w-2/3 flex flex-col justify-center">
                        <div class="flex justify-between mb-2 items-start"><h3 class="text-xl font-serif text-white">${item.name}</h3><span class="text-[#C69C53] font-bold">${Config.currency}${item.price}</span></div>
                        <p class="text-neutral-400 text-sm leading-relaxed">${item.description}</p>
                    </div>
                </div>`;
            });
            html += `</div>`;
        });

        // Add physical menu scans at the bottom
        if (Config.images.menuScans.length > 0) {
            html += `<div id="physical-menu" class="pt-20 text-center"><h2 class="text-3xl font-serif text-[#C69C53] mb-10 border-b border-neutral-800 pb-2 inline-block">Full Menu Details</h2>`;
            html += `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">`;
            Config.images.menuScans.forEach(scan => {
                html += `<div class="bg-neutral-900 p-2 rounded-xl shadow-2xl border border-neutral-800"><img src="${scan}" class="w-full rounded-lg" loading="lazy"></div>`;
            });
            html += `</div></div>`;
        }
        menuContainer.innerHTML = html;
    }

    // 6. RESERVATION FORM
    const resForm = document.getElementById('reservation-form');
    if (resForm) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = `Janak Cafe Request: Name: ${document.getElementById('res-name').value}, Date: ${document.getElementById('res-date').value}, Guests: ${document.getElementById('res-guests').value}`;
            window.open(`https://wa.me/${Config.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
        });
    }
});
