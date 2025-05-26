// --- Global Variables & Initial Data ---
// const MOCK_PRODUCTS = [ ... ]; // এই অ্যারেটি আর ব্যবহার করা হচ্ছে না প্রোডাক্ট ডেটার জন্য।

const locationData = {
    "বরিশাল": {
        "বরগুনা": ["আমতলী", "বরগুনা সদর", "বামনা", "বেতাগি", "পাথরঘাটা", "তালতলী"],
        "বরিশাল": ["আগৈলঝাড়া", "বাবুগঞ্জ", "বাকেরগঞ্জ", "বানারীপাড়া", "গৌরনদী", "হিজলা", "বরিশাল সদর", "মেহেন্দিগঞ্জ", "মুলাদী", "উজিরপুর"],
        "ভোলা": ["ভোলা সদর", "বোরহানউদ্দিন", "চরফ্যাশন", "দৌলতখান", "লালমোহন", "মনপুরা", "তজুমদ্দিন"],
        "ঝালকাঠি": ["ঝালকাঠি সদর", "কাঁঠালিয়া", "নলছিটি", "রাজাপুর"],
        "পটুয়াখালী": ["বাউফল", "দশমিনা", "গলাচিপা", "কলাপাড়া", "মির্জাগঞ্জ", "পটুয়াখালী সদর", "রাঙ্গাবালী", "দুমকি"],
        "পিরোজপুর": ["ভান্ডারিয়া", "ইন্দুরকানী", "কাউখালী", "মঠবাড়িয়া", "নাজিরপুর", "নেছারাবাদ", "পিরোজপুর সদর"]
    },
    "চট্টগ্রাম": {
        "বান্দরবান": ["আলীকদম", "বান্দরবান সদর", "লামা", "নাইক্ষ্যংছড়ি", "রোয়াংছড়ি", "রুমা", "থানচি"],
        "ব্রাহ্মণবাড়িয়া": ["আখাউড়া", "বাঞ্ছারামপুর", "ব্রাহ্মণবাড়িয়া সদর", "কসবা", "নবীনগর", " নাসিরনগর", "সরাইল", "আশুগঞ্জ", "বিজয়নগর"],
        "চাঁদপুর": ["চাঁদপুর সদর", "ফরিদগঞ্জ", "হাইমচর", "হাজীগঞ্জ", "কচুয়া", "মতলব উত্তর", "মতলব দক্ষিণ", "শাহরাস্তি"],
        "চট্টগ্রাম": ["আনোয়ারা", "বাঁশখালী", "বোয়ালখালী", "চন্দনাইশ", "ফটিকছড়ি", "হাটহাজারী", "কর্ণফুলী", "লোহাগাড়া", "মীরসরাই", "পটিয়া", "রাঙ্গুনিয়া", "রাউজান", "সন্দ্বীপ", "সাতকানিয়া", "সীতাকুণ্ড", "বন্দর", "চান্দগাঁও", "ডবলমুরিং", "কোতোয়ালী", "পাহাড়তলী", "পাঁচলাইশ", "বায়েজীদ বোস্তামী", "হালিশহর", "খুলশী", "বাকলিয়া", "পতেঙ্গা", "আকবর শাহ"],
        "কুমিল্লা": ["বরুড়া", "ব্রাহ্মণপাড়া", "বুড়িচং", "চান্দিনা", "চৌদ্দগ্রাম", "দাউদকান্দি", "দেবিদ্বার", "হোমনা", "লাকসাম", "লালমাই", "মনোহরগঞ্জ", "মেঘনা", "মুরাদনগর", "নাঙ্গলকোট", "কুমিল্লা সদর", "কুমিল্লা সদর দক্ষিণ", "তিতাস"],
        "কক্সবাজার": ["চকোরিয়া", "কক্সবাজার সদর", "কুতুবদিয়া", "মহেশখালী", "পেকুয়া", "রামু", "টেকনাফ", "উখিয়া"],
        "ফেনী": ["ছাগলনাইয়া", "দাগনভূঞা", "ফেনী সদর", "পরশুরাম", "সোনাগাজী", "ফুলগাজী"],
        "খাগড়াছড়ি": ["দীঘিনালা", "খাগড়াছড়ি সদর", "লক্ষ্মীছড়ি", "মহালছড়ি", "মানিকছড়ি", "মাটিরাঙ্গা", "পানছড়ি", "রামগড়", "গুইমারা"],
        "লক্ষ্মীপুর": ["কমলনগর", "লক্ষ্মীপুর সদর", "রামগঞ্জ", "রামগতি", "রায়পুর"],
        "নোয়াখালী": [" বেগমগঞ্জ", "চাটখিল", "কোম্পানীগঞ্জ", "হাতিয়া", "কবিরহাট", "সেনবাগ", "সোনাইমুড়ী", "সুবর্ণচর", "নোয়াখালী সদর"],
        "রাঙ্গামাটি": ["বাঘাইছড়ি", "বরকল", "বেলাইছড়ি", "কাপ্তাই", "জুড়াইছড়ি", "লংগদু", "নানিয়ারচর", "রাজস্থলী", "রাঙ্গামাটি সদর", " কাউখালী"]
    },
    "ঢাকা": {
        "ঢাকা": ["রমনা", "ধানমন্ডি", "উত্তরা", "মিরপুর", "গুলশান", "মোহাম্মদপুর", "পল্টন", "সবুজবাগ", "মতিঝিল", "সূত্রাপুর", "ডেমরা", "কেরানীগঞ্জ", "সাভার", "ধামরাই", "দোহার", "নবাবগঞ্জ"],
        "ফরিদপুর": ["আলফাডাঙ্গা", "ভাঙ্গা", "বোয়ালমারী", "চরভদ্রাসন", "ফরিদপুর সদর", "মধুখালী", "নগরকান্দা", "সদরপুর", "সালথা"],
        "গাজীপুর": ["গাজীপুর সদর", "কালিয়াকৈর", "কালীগঞ্জ", "কাপাসিয়া", "শ্রীপুর", "টঙ্গী পূর্ব", "টঙ্গী পশ্চিম", "বাসন", "কোনাবাড়ী", "গাছা", "পূবাইল"],
        "গোপালগঞ্জ": ["গোপালগঞ্জ সদর", "কাশিয়ানী", "কোটালীপাড়া", "মুকসুদপুর", "টুঙ্গিপাড়া"],
        "কিশোরগঞ্জ": ["অষ্টগ্রাম", "বাজিতপুর", "ভৈরব", "হোসেনপুর", "ইটনা", "করিমগঞ্জ", "কটিয়াদী", "কিশোরগঞ্জ সদর", "কুলিয়ারচর", "মিঠামইন", "নিকলী", "পাকুন্দিয়া", "তাড়াইল"],
        "মাদারীপুর": ["শিবচর", "কালকিনি", "মাদারীপুর সদর", "রাজৈর", "ডাসার"],
        "মানিকগঞ্জ": ["দৌলতপুর", "ঘিওর", "হরিরামপুর", "মানিকগঞ্জ সদর", "সাটুরিয়া", "শিবালয়", "সিঙ্গাইর"],
        "মুন্সিগঞ্জ": ["গজারিয়া", "লৌহজং", "মুন্সিগঞ্জ সদর", "সিরাজদিখান", "শ্রীনগর", "টংগিবাড়ী"],
        "নারায়ণগঞ্জ": ["আড়াইহাজার", "বন্দর", "নারায়ণগঞ্জ সদর", "রূপগঞ্জ", "সিদ্ধিরগঞ্জ", "সোনারগাঁও", "ফতুল্লা"],
        "নরসিংদী": ["বেলাবো", "মনোহরদী", "নরসিংদী সদর", "পলাশ", "রায়পুরা", "শিবপুর"],
        "রাজবাড়ী": ["বালিয়াকান্দি", "গোয়ালন্দ", "পাংশা", "রাজবাড়ী সদর", "কালুখালী"],
        "শরীয়তপুর": ["ভেদরগঞ্জ", "ডামুড্যা", "গোসাইরহাট", "নড়িয়া", "শরীয়তপুর সদর", "জাজিরা", "সখিপুর"],
        "টাঙ্গাইল": ["বাসাইল", "ভুঞাপুর", "দেলদুয়ার", "ধনবাড়ী", "ঘাটাইল", "গোপালপুর", "কালিহাতী", "মধুপুর", "মির্জাপুর", "নাগরপুর", "সখিপুর", "টাঙ্গাইল সদর"]
    },
    "খুলনা": {
        "বাগেরহাট": ["বাগেরহাট সদর", "চিতলমারী", "ফকিরহাট", "কচুয়া", "মোল্লাহাট", "মোংলা", "মোরেলগঞ্জ", "রামপাল", "শরণখোলা"],
        "চুয়াডাঙ্গা": ["আলমডাঙ্গা", "চুয়াডাঙ্গা সদর", "দামুড়হুদা", "জীবননগর"],
        "যশোর": ["অভয়নগর", "বাঘারপাড়া", "চৌগাছা", "ঝিকরগাছা", "কেশবপুর", "যশোর সদর", "মনিরামপুর", "শার্শা"],
        "ঝিনাইদহ": ["হরিণাকুন্ডু", "ঝিনাইদহ সদর", "কোটচাঁদপুর", "কালীগঞ্জ", "মহেশপুর", "শৈলকুপা"],
        "খুলনা": ["বটিয়াঘাটা", "দাকোপ", "দিঘলিয়া", "ডুমুরিয়া", "ফুলতলা", "কয়রা", "পাইকগাছা", "রূপসা", "তেরখাদা", " দৌলতপুর", "খালিশপুর", "খান জাহান আলী", "খুলনা সদর", "সোনাডাঙ্গা", "হরিণটানা"],
        "কুষ্টিয়া": ["ভেড়ামারা", "দৌলতপুর", "খোকসা", "কুমারখালী", "কুষ্টিয়া সদর", "মিরপুর"],
        "মাগুরা": ["মাগুরা সদর", "মহম্মদপুর", "শালিখা", "শ্রীপুর"],
        "মেহেরপুর": ["গাংনী", "মেহেরপুর সদর", "মুজিবনগর"],
        "নড়াইল": ["কালিয়া", "লোহাগড়া", "নড়াইল সদর"],
        "সাতক্ষীরা": ["আশাশুনি", "দেবহাটা", "কলারোয়া", "কালিগঞ্জ", "সাতক্ষীরা সদর", "শ্যামনগর", "তালা"]
    },
    "ময়মনসিংহ": {
        "জামালপুর": ["বকশীগঞ্জ", "দেওয়ানগঞ্জ", "ইসলামপুর", "জামালপুর সদর", "মাদারগঞ্জ", "মেলান্দহ", "সরিষাবাড়ী"],
        "ময়মনসিংহ": ["ভালুকা", " ত্রিশাল", "হালুয়াঘাট", "ফুলপুর", " ধোবাউড়া", "ময়মনসিংহ সদর", "মুক্তাগাছা", "ফুলবাড়ীয়া", "গফরগাঁও", "গৌরীপুর", "ঈশ্বরগঞ্জ", "নান্দাইল", "তারাকান্দা"],
        "নেত্রকোনা": ["বারহাট্টা", "দুর্গাপুর", "কেন্দুয়া", "কলমাকান্দা", "মদন", "মোহনগঞ্জ", "নেত্রকোণা সদর", "পূর্বধলা", "খালিয়াজুড়ি", "আটপাড়া"],
        "শেরপুর": ["ঝিনাইগাতী", "নকলা", "নালিতাবাড়ী", "শেরপুর সদর", "শ্রীবরদী"]
    },
    "রাজশাহী": {
        "বগুড়া": ["আদমদীঘি", "বগুড়া সদর", "ধুনট", "দুপচাঁচিয়া", "গাবতলী", "কাহালু", "নন্দীগ্রাম", "সারিয়াকান্দি", "শাজাহানপুর", "শেরপুর", "শিবগঞ্জ", "সোনাতলা"],
        "চাঁপাইনবাবগঞ্জ": ["ভোলাহাট", "গোমস্তাপুর", "নাচোল", "চাঁপাইনবাবগঞ্জ সদর", "শিবগঞ্জ"],
        "জয়পুরহাট": ["আক্কেলপুর", "জয়পুরহাট সদর", "কালাই", "ক্ষেতলাল", "পাঁচবিবি"],
        "নওগাঁ": ["আত্রাই", "বদলগাছী", "ধামইরহাট", "মান্দা", "মহাদেবপুর", "নওগাঁ সদর", "নিয়ামতপুর", "পত্নীতলা", "পোরশা", "রানীনগর", "সাপাহার"],
        "নাটোর": ["বাগাতিপাড়া", "বড়াইগ্রাম", "গুরুদাসপুর", "লালপুর", "নাটোর সদর", "সিংড়া", "নলডাঙ্গা"],
        "পাবনা": ["আটঘরিয়া", "বেড়া", "ভাঙ্গুড়া", "চাটমোহর", "ফরিদপুর", "ঈশ্বরদী", "পাবনা সদর", "সাঁথিয়া", "সুজানগর"],
        "রাজশাহী": ["বাঘা", "বাগমারা", "চারঘাট", "দুর্গাপুর", "গোদাগাড়ী", "মোহনপুর", "পবা", "পুঠিয়া", "তানোর", "বোয়ালিয়া", "মতিহার", "রাজপাড়া", "শাহমখদুম", "কাশিয়াডাঙ্গা", "চন্দ্রিমা", "দামকুড়া", " বিমানবন্দর"],
        "সিরাজগঞ্জ": ["বেলকুচি", "চৌহালী", "কামারখন্দ", "কাজীপুর", "রায়গঞ্জ", "শাহজাদপুর", "সিরাজগঞ্জ সদর", "তাড়াশ", "উল্লাপাড়া"]
    },
    "রংপুর": {
        "দিনাজপুর": ["বিরামপুর", "বীরগঞ্জ", "বিরল", "বোচাগঞ্জ", "চিরিরবন্দর", "ফুলবাড়ী", "ঘোড়াঘাট", "হাকিমপুর", "কাহারোল", "খানসামা", "দিনাজপুর সদর", "নবাবগঞ্জ", "পার্বতীপুর"],
        "গাইবান্ধা": ["ফুলছড়ি", "গাইবান্ধা সদর", "গোবিন্দগঞ্জ", "পলাশবাড়ী", "সাদুল্লাপুর", "সাঘাটা", "সুন্দরগঞ্জ"],
        "কুড়িগ্রাম": ["ভুরুঙ্গামারী", "চর রাজিবপুর", "চিলমারী", "ফুলবাড়ী", "কুড়িগ্রাম সদর", "নাগেশ্বরী", "রাজারহাট", "রৌমারী", "উলিপুর"],
        "লালমনিরহাট": ["আদিতমারী", "হাতীবান্ধা", "কালীগঞ্জ", "লালমনিরহাট সদর", "পাটগ্রাম"],
        "নীলফামারী": ["ডিমলা", "ডোমার", "জলঢাকা", "কিশোরগঞ্জ", "নীলফামারী সদর", "সৈয়দপুর"],
        "পঞ্চগড়": ["আটোয়ারী", "বোদা", "দেবীগঞ্জ", "পঞ্চগড় সদর", "তেঁতুলিয়া"],
        "রংপুর": ["বদরগঞ্জ", "গংগাচড়া", " কাউনিয়া", "রংপুর সদর", "মিঠাপুকুর", "পীরগাছা", "পীরগঞ্জ", "তারাগঞ্জ", " হারাগাছ", " তাজহাট"],
        "ঠাকুরগাঁও": ["বালিয়াডাঙ্গী", "হরিপুর", "পীরগঞ্জ", "রানীশংকৈল", "ঠাকুরগাঁও সদর"]
    },
    "সিলেট": {
        "হবিগঞ্জ": ["আজমিরীগঞ্জ", "বানিয়াচং", "বাহুবল", "চুনারুঘাট", "হবিগঞ্জ সদর", "লাখাই", "মাধবপুর", "নবীগঞ্জ", " শায়েস্তাগঞ্জ"],
        "মৌলভীবাজার": ["বড়লেখা", "জুড়ী", "কমলগঞ্জ", "কুলাউড়া", "মৌলভীবাজার সদর", "রাজনগর", "শ্রীমঙ্গল"],
        "সুনামগঞ্জ": ["বিশ্বম্ভরপুর", "ছাতক", "ধর্মপাশা", "দিরাই", "দোয়ারাবাজার", "জগন্নাথপুর", "জামালগঞ্জ", "সুনামগঞ্জ সদর", "শাল্লা", "তাহিরপুর", " দক্ষিণ সুনামগঞ্জ", " মধ্যনগর"],
        "সিলেট": ["বালাগঞ্জ", "বিয়ানীবাজার", "বিশ্বনাথ", "কোম্পানীগঞ্জ", "ফেঞ্চুগঞ্জ", "গোলাপগঞ্জ", "গোয়াইনঘাট", "জৈন্তাপুর", "কানাইঘাট", "সিলেট সদর", "জকিগঞ্জ", " দক্ষিণ সুরমা", "ওসমানী নগর", " বিশ্বনাথ"]
    }
};


// --- SPA Navigation & General Setup ---
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const header = document.getElementById('main-header');
    let lastScrollTop = 0;

    function showPage(pageId) {
        pageSections.forEach(section => {
            section.classList.remove('active');
        });
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (pageId === 'cart-page') {
                displayCartItems();
            } else if (pageId === 'delivery-info-copy-page') {
                populateDeliveryInfoCopyCartSummary();
                initLocationDropdowns('copy-division', 'copy-district', 'copy-thana');
            }
        } else {
            console.warn("Page not found:", pageId, "Showing home page.");
            document.getElementById('home-page').classList.add('active');
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageId &&
                !link.classList.contains('delivery-info-copy-nav-icon') &&
                !link.classList.contains('cart-icon-nav')) {
                link.classList.add('active');
            }
        });

        const mobileNav = document.getElementById('nav-links');
        if (mobileNav.classList.contains('mobile-nav-active')) {
            mobileNav.classList.remove('mobile-nav-active');
        }
    }
    window.showPageGlobal = showPage;


    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.dataset.page;
            if(pageId) {
                showPage(pageId);
            }
        });
    });

    const deliveryCopyIcon = document.querySelector('.delivery-info-copy-nav-icon');
    if (deliveryCopyIcon && !deliveryCopyIcon.classList.contains('nav-link')) {
        deliveryCopyIcon.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = deliveryCopyIcon.dataset.page;
            if (pageId) {
                showPage(pageId);
            }
        });
    }

    showPage('home-page');
    updateCartCount();
    // populateProducts ফাংশনগুলো আর কল করা হচ্ছে না কারণ প্রোডাক্ট HTML এ আছে।
    // populateProducts('home-product-grid', MOCK_PRODUCTS.slice(0, 4));
    // populateProducts('shop-product-grid', MOCK_PRODUCTS);

    initDeliveryInfoCopyForm();

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showToast('আপনার বার্তা পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো।', 'success');
            this.reset();
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    window.navigateToShopWithCategory = function(category) {
        showPage('shop-page');
        const categoryFilter = document.getElementById('category-filter');
        if(categoryFilter) {
            categoryFilter.value = category;
            filterProductsByCategoryHTML(); // HTML ভিত্তিক ফিল্টার ফাংশন কল হবে
        }
    }

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });
    animatedElements.forEach(el => observer.observe(el));
});

function toggleMobileNav() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('mobile-nav-active');
}

function showToast(message, type = 'info', duration = 3000) {
    const toast = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.className = 'toast show';
    if (type === 'success') toast.classList.add('success');
    else if (type === 'error') toast.classList.add('error');
    else toast.classList.add('info');

    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// --- Product Interaction (HTML Based) ---

window.copyProductCodeFromCard = function(event, code) {
    event.stopPropagation(); // আগের মতোই থাকবে
    navigator.clipboard.writeText(code)
        .then(() => {
            showToast(`প্রোডাক্ট কোড (${code}) কপি করা হয়েছে!`, 'success');
        })
        .catch(err => {
            showToast('কোড কপি করতে সমস্যা হয়েছে।', 'error');
            console.error('Failed to copy product code from card: ', err);
        });
}
window.copyProductCodeFromDetails = function() {
    const code = document.getElementById('details-product-code').textContent;
    if (code && code !== 'লোড হচ্ছে...') {
        navigator.clipboard.writeText(code)
            .then(() => {
                showToast(`প্রোডাক্ট কোড (${code}) কপি করা হয়েছে!`, 'success');
            })
            .catch(err => {
                showToast('কোড কপি করতে সমস্যা হয়েছে।', 'error');
                console.error('Failed to copy product code from details: ', err);
            });
    } else {
        showToast('কোড এখনও লোড হয়নি।', 'info');
    }
}


window.viewProductDetailsFromHTML = function(productCardElement) {
    if (!productCardElement) return;

    const productId = productCardElement.dataset.productId;
    const name = productCardElement.dataset.name;
    const price = parseFloat(productCardElement.dataset.price); // নিশ্চিত করুন এটি সংখ্যা
    const image = productCardElement.dataset.image;
    const code = productCardElement.dataset.code;
    const description = productCardElement.dataset.description || "এই পণ্যের বিস্তারিত বিবরণ শীঘ্রই যোগ করা হবে।";

    document.getElementById('details-name').textContent = name;
    document.getElementById('details-img').src = image;
    document.getElementById('details-img').alt = name;
    document.getElementById('details-product-code').textContent = code;
    document.getElementById('details-description').textContent = description;
    // document.getElementById('details-scratch-code') আর নেই

    const addToCartBtn = document.getElementById('details-add-to-cart-btn');
    // onclick ফাংশন সরাসরি কার্টে যোগ করবে, productCardElement পাস করার দরকার নেই
    // কারণ সব ডেটা উপরে সেট করা হয়েছে
    addToCartBtn.onclick = () => {
        const quantity = parseInt(document.getElementById('quantity').value) || 1;
        // addToCart এ এখন আইডি, নাম ইত্যাদি সরাসরি পাস করতে হবে
        addToCart(productId, name, price, image, code, quantity);
    };

    if (window.showPageGlobal) {
        window.showPageGlobal('product-details-page');
    }
    // স্ক্র্যাচ কার্ড ইনিশিয়ালাইজেশন বাদ
}

// --- Cart Functionality (largely unchanged, but addToCart is now primary) ---
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (document.getElementById('cart-page').classList.contains('active')) {
        displayCartItems();
    }
    if (document.getElementById('delivery-info-copy-page').classList.contains('active')) {
        populateDeliveryInfoCopyCartSummary();
    }
}

// HTML থেকে ডেটা নিয়ে কার্টে যোগ করার জন্য নতুন ফাংশন
window.addToCartFromHTML = function(productCardElement) {
    if (!productCardElement) return;

    const id = productCardElement.dataset.productId;
    const name = productCardElement.dataset.name;
    const price = parseFloat(productCardElement.dataset.price);
    const image = productCardElement.dataset.image;
    const code = productCardElement.dataset.code;
    const quantity = 1; // ডিফল্ট পরিমাণ ১

    addToCart(id, name, price, image, code, quantity);
}


// এই addToCart ফাংশনটি এখন সব জায়গা থেকে কল হবে
window.addToCart = function(id, name, price, image, code, quantity = 1) {
    const cart = getCart();
    const existingItemIndex = cart.findIndex(item => item.id === id);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({ id, name, price, image, code, quantity });
    }
    saveCart(cart);
    showToast(`${name} (${quantity}টি) কার্টে যোগ করা হয়েছে!`, 'success');

    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.classList.add('updated');
        setTimeout(() => cartCountElement.classList.remove('updated'), 500);
    }
}

window.updateCartItemQuantity = function(id, newQuantity) {
    let cart = getCart();
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex > -1) {
        const quantity = parseInt(newQuantity);
        if (quantity > 0) {
            cart[itemIndex].quantity = quantity;
        } else {
            const itemName = cart[itemIndex].name;
            cart.splice(itemIndex, 1);
            showToast(`${itemName} কার্ট থেকে সরানো হয়েছে।`, 'info');
        }
        saveCart(cart);
    }
}


window.removeFromCart = function(id) {
    let cart = getCart();
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex > -1) {
        const itemName = cart[itemIndex].name;
        const cartItemElement = document.querySelector(`.cart-item[data-product-id="${id}"]`);

        if (cartItemElement) {
            cartItemElement.classList.add('removing');
            setTimeout(() => {
                cart = cart.filter(item => item.id !== id);
                saveCart(cart);
            }, 400);
        } else {
            cart = cart.filter(item => item.id !== id);
            saveCart(cart);
        }
        showToast(`${itemName} কার্ট থেকে সরানো হয়েছে।`, 'info');
    }
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        cartCountElement.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function displayCartItems() {
    const cart = getCart();
    const container = document.getElementById('cart-items-container');
    const cartSummaryTitle = document.getElementById('cart-summary-title');

    if (!container) return;

    const emptyCartMsgTemplate = `<p class="empty-cart-message">আপনার কার্ট এখন খালি। <a href="#" class="nav-link" data-page="shop-page">কেনাকাটা শুরু করুন!</a></p>`;

    if (cart.length === 0) {
        container.innerHTML = emptyCartMsgTemplate;
        const emptyCartLink = container.querySelector('.empty-cart-message a.nav-link');
        if (emptyCartLink) {
            emptyCartLink.onclick = (e) => {
                e.preventDefault();
                window.showPageGlobal('shop-page');
            };
        }
        if(cartSummaryTitle) cartSummaryTitle.textContent = 'আপনার কার্ট খালি';
        return;
    }

    container.innerHTML = '';
    if(cartSummaryTitle) cartSummaryTitle.textContent = 'আপনার নির্বাচিত পণ্যসমূহ';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.dataset.productId = item.id;
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p class="item-code">কোড: ${item.code}</p>
                <p class="item-quantity-display">পরিমাণ: ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <label for="qty-${item.id}" class="sr-only">পরিমাণ:</label>
                <input type="number" id="qty-${item.id}" value="${item.quantity}" min="1" onchange="updateCartItemQuantity('${item.id}', this.value)">
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">মুছুন</button>
            </div>
        `;
        container.appendChild(itemElement);
    });
}


// --- Location Dropdown Initialization (Reusable) ---
function initLocationDropdowns(divisionSelectId, districtSelectId, thanaSelectId) {
    const divisionSelect = document.getElementById(divisionSelectId);
    const districtSelect = document.getElementById(districtSelectId);
    const thanaSelect = document.getElementById(thanaSelectId);

    if (!divisionSelect || !districtSelect || !thanaSelect) {
        return;
    }

    divisionSelect.length = 1;
    districtSelect.length = 1;
    thanaSelect.length = 1;
    districtSelect.disabled = true;
    thanaSelect.disabled = true;


    Object.keys(locationData).sort().forEach(division => {
        const option = document.createElement('option');
        option.value = division;
        option.textContent = division;
        divisionSelect.appendChild(option);
    });

    divisionSelect.onchange = function() {
        districtSelect.innerHTML = '<option value="">-- জেলা নির্বাচন করুন --</option>';
        thanaSelect.innerHTML = '<option value="">-- থানা/উপজেলা নির্বাচন করুন --</option>';
        districtSelect.disabled = true;
        thanaSelect.disabled = true;
        if (this.value && locationData[this.value]) {
            Object.keys(locationData[this.value]).sort().forEach(district => {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
            districtSelect.disabled = false;
        }
    };

    districtSelect.onchange = function() {
        thanaSelect.innerHTML = '<option value="">-- থানা/উপজেলা নির্বাচন করুন --</option>';
        thanaSelect.disabled = true;
        if (this.value && divisionSelect.value && locationData[divisionSelect.value][this.value]) {
            locationData[divisionSelect.value][this.value].sort().forEach(thana => {
                const option = document.createElement('option');
                option.value = thana;
                option.textContent = thana;
                thanaSelect.appendChild(option);
            });
            thanaSelect.disabled = false;
        }
    };
}

// --- Delivery Info Copy Page Functionality ---
function populateDeliveryInfoCopyCartSummary() {
    const cart = getCart();
    const summaryContainer = document.getElementById('copy-page-cart-items');
    if (!summaryContainer) return;

    summaryContainer.innerHTML = '';
    if (cart.length === 0) {
        summaryContainer.innerHTML = '<p>আপনার কার্ট বর্তমানে খালি। যদি কোনো নির্দিষ্ট পণ্য অর্ডার করতে চান, তার কোড ও পরিমাণ নিচে উল্লেখ করতে পারেন অথবা সরাসরি আমাদের জানান।</p>';
        return;
    }

    cart.forEach(item => {
        const p = document.createElement('p');
        p.textContent = `${item.name} (কোড: ${item.code}, পরিমাণ: ${item.quantity})`;
        summaryContainer.appendChild(p);
    });
}

function initDeliveryInfoCopyForm() {
    const form = document.getElementById('delivery-info-copy-form');
    const copyBtn = document.getElementById('copy-delivery-info-btn');

    if (!form || !copyBtn) {
        return;
    }

    initLocationDropdowns('copy-division', 'copy-district', 'copy-thana');

    copyBtn.addEventListener('click', () => {
        let isValid = true;
        form.querySelectorAll('[required]').forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ced4da';
            }
        });
        ['copy-division', 'copy-district', 'copy-thana'].forEach(id => {
            const selectInput = form.querySelector(`#${id}`);
            if (selectInput && selectInput.hasAttribute('required') && !selectInput.value) {
                isValid = false;
                selectInput.style.borderColor = 'red';
            } else if (selectInput) {
                selectInput.style.borderColor = '#ced4da';
            }
        });

        if (!isValid) {
            showToast('অনুগ্রহ করে সকল আবশ্যক (*) চিহ্নিত ফিল্ড পূরণ করুন।', 'error');
            return;
        }

        const name = document.getElementById('copy-name').value;
        const phone1 = document.getElementById('copy-phone1').value;
        const phone2 = document.getElementById('copy-phone2').value;
        const divisionVal = document.getElementById('copy-division').value;
        const districtVal = document.getElementById('copy-district').value;
        const thanaVal = document.getElementById('copy-thana').value;
        const address = document.getElementById('copy-delivery_address').value;

        let deliveryInfoString = "ডেলিভারি তথ্য:\n";
        deliveryInfoString += `নাম: ${name}\n`;
        deliveryInfoString += `ফোন ১: ${phone1}\n`;
        if (phone2) deliveryInfoString += `ফোন ২: ${phone2}\n`;
        deliveryInfoString += `বিভাগ: ${divisionVal}\n`;
        deliveryInfoString += `জেলা: ${districtVal}\n`;
        deliveryInfoString += `থানা/উপজেলা: ${thanaVal}\n`;
        deliveryInfoString += `সম্পূর্ণ ঠিকানা: ${address}\n\n`;

        const cart = getCart();
        if (cart.length > 0) {
            deliveryInfoString += "অর্ডারকৃত পণ্য:\n";
            cart.forEach(item => {
                deliveryInfoString += `- ${item.name} (কোড: ${item.code}, পরিমাণ: ${item.quantity})\n`;
            });
        } else {
            deliveryInfoString += "কার্টে কোনো পণ্য নেই। (গ্রাহক পণ্যের বিবরণ ম্যানুয়ালি দিতে পারেন)\n";
        }
        deliveryInfoString += "\nএই তথ্য IMO/WhatsApp এ পাঠানোর জন্য প্রস্তুত।";


        navigator.clipboard.writeText(deliveryInfoString)
            .then(() => {
                showToast('ডেলিভারি তথ্য এবং পণ্যের তালিকা কপি করা হয়েছে!', 'success', 4000);
            })
            .catch(err => {
                showToast('তথ্য কপি করতে সমস্যা হয়েছে।', 'error');
                console.error('Clipboard copy failed: ', err);
            });
    });
}


// --- Scratch Card Functionality --- এই সম্পূর্ণ অংশটি বাদ দেওয়া হয়েছে
// function initScratchCard(...) { ... }
// function initAllScratchCards() { ... }


// --- Product Code Search (HTML Based - সিম্পলিফাইড) ---
window.searchByProductCodeHTML = function() {
    const searchInput = document.getElementById('product-code-search');
    if (!searchInput) return;
    const codeToSearch = searchInput.value.trim().toUpperCase();
    if (!codeToSearch) {
        showToast("অনুগ্রহ করে একটি প্রোডাক্ট কোড লিখুন।", "info");
        return;
    }

    // শপ পেজের সব প্রোডাক্ট কার্ড থেকে খুঁজবে
    const allProductCards = document.querySelectorAll('#shop-product-grid .product-card');
    let foundProductCard = null;

    for (let card of allProductCards) {
        if (card.dataset.code && card.dataset.code.toUpperCase() === codeToSearch) {
            foundProductCard = card;
            break;
        }
    }

    if (foundProductCard) {
        // যদি পাওয়া যায়, তাহলে সেই প্রোডাক্টের বিস্তারিত দেখাবে
        viewProductDetailsFromHTML(foundProductCard);
        searchInput.value = ''; // সার্চ ইনপুট ক্লিয়ার করবে
    } else {
        showToast(`প্রোডাক্ট কোড "${codeToSearch}" দিয়ে কোনো পণ্য পাওয়া যায়নি।`, "error");
    }
}

// --- Category Filter on Shop Page (HTML Based) ---
window.filterProductsByCategoryHTML = function() {
    const selectedCategory = document.getElementById('category-filter').value;
    const productCards = document.querySelectorAll('#shop-product-grid .product-card');
    let productsFound = false;

    productCards.forEach(card => {
        if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
            card.style.display = 'flex'; // অথবা 'block', আপনার CSS অনুযায়ী
            productsFound = true;
        } else {
            card.style.display = 'none';
        }
    });

    const productGrid = document.getElementById('shop-product-grid');
    let noProductMessage = productGrid.querySelector('.empty-cart-message');

    if (!productsFound) {
        if (!noProductMessage) {
            noProductMessage = document.createElement('p');
            noProductMessage.classList.add('empty-cart-message');
            noProductMessage.style.gridColumn = '1 / -1'; // গ্রিডে পুরো জায়গা নেবে
            productGrid.appendChild(noProductMessage);
        }
        noProductMessage.textContent = 'এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।';
        noProductMessage.style.display = 'block';
    } else {
        if (noProductMessage) {
            noProductMessage.style.display = 'none'; // অথবা noProductMessage.remove();
        }
    }
}