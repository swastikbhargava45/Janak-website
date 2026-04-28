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

    // 2. INJECT IMAGES
    document.querySelectorAll('[data-img]').forEach(el => {
        const key = el.getAttribute('data-img');
        if (Config.images[key]) {
            if (el.tagName === 'IMG') el.src = Config.images[key];
            else el.style.backgroundImage = `url('${Config.images[key]}')`;
        }
    });

    // 3. CONTACT LINKS
    const waLink = `https://wa.me/${Config.whatsapp}`;
    document.querySelectorAll('.wa-link').forEach(el => el.href = waLink);
    document.querySelectorAll('.phone-link').forEach(el => el.href = `tel:${Config.phone}`);
    document.querySelectorAll('.email-link').forEach(el => el.href = `mailto:${Config.email}`);

    // 4. GOOGLE MAP
    const mapEl = document.getElementById('map-iframe');
    if(mapEl) {
        mapEl.src = Config.googleMapsEmbed;
        mapEl.classList.add('w-full', 'h-64', 'md:h-96', 'rounded-2xl', 'border-0');
    }

    // 5. RENDER MENU & SCANS
    const menuContainer = document.getElementById('menu-container');
    const featuredContainer = document.getElementById('featured-container');
    
    if (menuContainer || featuredContainer) {
        let allItems = [];
        let menuHTML = '';

        Config.menu.forEach(category => {
            menuHTML += `<h2 class="text-3xl font-serif text-[#C69C53] mt-12 mb-6 border-b border-neutral-800 pb-2">${category.category}</h2>`;
            menuHTML += `<div class="grid grid-cols-1 md:grid-cols-2 gap-8">`;
            category.items.forEach(item => {
                allItems.push(item);
                menuHTML += createMenuCard(item);
            });
            menuHTML += `</div>`;
        });

        if (menuContainer) {
            let scansHTML = '';
            if (Config.images.menuScans && Config.images.menuScans.length > 0) {
                const jumpBtn = `<div class="text-center mb-10"><a href="#physical-menu" class="bg-[#C69C53] text-black px-6 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-white transition-colors inline-block">Browse Physical Menu</a></div>`;
                
                scansHTML = `<div id="physical-menu" class="pt-16"><h2 class="text-3xl font-serif text-[#C69C53] mt-12 mb-6 text-center border-b border-neutral-800 pb-2">Full Physical Menu</h2>`;
                scansHTML += '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">';
                Config.images.menuScans.forEach(scanUrl => {
                    scansHTML += `<div class="bg-neutral-900 p-2 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"><img src="${scanUrl}" alt="Menu Scan" class="w-full rounded-xl" loading="lazy"></div>`;
                });
                scansHTML += '</div></div>';
                
                menuContainer.innerHTML = jumpBtn + menuHTML + scansHTML;
            } else {
                menuContainer.innerHTML = menuHTML;
            }
        }
        
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
            window.open(`https://wa.me/${Config.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
        });
    }
});

function createMenuCard(item) {
    const tagHtml = item.tag ? `<span class="absolute top-4 right-4 bg-[#C69C53] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">${item.tag}</span>` : '';
    const imgHtml = item.image ? `<div class="w-full sm:w-1/3 h-48 sm:h-auto overflow-hidden"><img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"></div>` : '';
    const textWidth = item.image ? 'sm:w-2/3' : 'w-full';

    return `
    <div class="group flex flex-col sm:flex-row bg-neutral-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-[#C69C53]/10 transition-all duration-300 relative">
        ${tagHtml}
        ${imgHtml}
        <div class="p-6 ${textWidth} flex flex-col justify-center">
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-serif text-white">${item.name}</h3>
                <span class="text-[#C69C53] font-bold text-lg whitespace-nowrap ml-4">${Config.currency}${item.price}</span>
            </div>
            <p class="text-neutral-400 text-sm leading-relaxed">${item.description}</p>
        </div>
    </div>`;
}
