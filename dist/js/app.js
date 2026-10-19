(() => {
    "use strict";
    function applyItems() {
        const items = document.querySelectorAll("[data-apply-item]");
        if (items.length) {
            items.forEach(item => {
                item.addEventListener("click", () => {
                    const id = item.dataset.applyItem;
                    const target = document.querySelector(`[data-apply-target="${id}"]`);
                    if (target) {
                        const headerHeight = document.querySelector(".header").clientHeight;
                        if (target.hasAttribute("data-more-item") && !target.classList.contains("_active")) {
                            target.style.transition = "none";
                            target.classList.add("_active", "_show");
                        }
                        setTimeout(() => {
                            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                            window.scrollTo({
                                top: offsetTop,
                                behavior: "smooth"
                            });
                            target.classList.add("_focus");
                            setTimeout(() => {
                                target.classList.remove("_focus");
                            }, 2500);
                        }, 50);
                    }
                });
            });
        }
    }
    function burger() {
        const burger = document.querySelector("#burger");
        if (burger) {
            const burgerOpen = document.querySelector("#burger-open");
            const burgerCloses = document.querySelectorAll("[data-burger-close]");
            const burgerAnchors = burger.querySelectorAll("a[href^='/#']");
            burgerAnchors.forEach(anchor => {
                anchor.addEventListener("click", () => {
                    handleClose();
                });
            });
            burgerOpen.addEventListener("click", () => {
                handleOpen();
            });
            burgerCloses.forEach(btn => btn.addEventListener("click", handleClose));
            function updateHeightBurger() {
                burger.style.maxHeight = `${window.visualViewport.height}px`;
            }
            function handleOpen() {
                document.body.classList.add("body-hidden");
                burger.classList.add("_open");
                updateHeightBurger();
            }
            function handleClose() {
                document.body.classList.remove("body-hidden");
                burger.classList.remove("_open");
            }
            window.visualViewport.addEventListener("resize", updateHeightBurger);
            window.visualViewport.addEventListener("scroll", updateHeightBurger);
            updateHeightBurger();
        }
    }
    function buttonsNote() {
        const buttons = document.querySelectorAll("[data-btn-note]");
        if (buttons.length) {
            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const selectorTarget = btn.dataset.targetNote;
                    const target = document.querySelector(selectorTarget);
                    const value = btn.dataset.btnNote;
                    if (target) {
                        target.value = value;
                    }
                });
            });
        }
    }
    function changeModalTitle() {
        const buttons = document.querySelectorAll("[data-fancybox][data-modal-title]");
        if (buttons.length) {
            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const titleValue = btn.dataset.modalTitle;
                    if (titleValue) {
                        const selector = btn.getAttribute("href") || btn.dataset.src;
                        const modalTitle = document.querySelector(selector).querySelector(".modal__title");
                        if (modalTitle) modalTitle.textContent = titleValue;
                    }
                });
            });
        }
    }
    function changeProduct() {
        const buttons = document.querySelectorAll(".card-product__btn-more");
        if (buttons.length) {
            const modalTitle = document.querySelector("#modal-product-title");
            const modalList = document.querySelector("#modal-product-list");
            const modalContent = document.querySelector("#modal-product-content");
            const modalItems = document.querySelector("#modal-product-items");
            const modalProductFeedback = document.querySelector("#modal-product-feedback");
            const modalButtons = document.querySelector("#modal-product-buttons");
            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const product = btn.closest(".card-product");
                    const dataTitle = product.dataset.title;
                    const dataList = product.dataset.list.split(",");
                    const dataContent = product.dataset.content;
                    const dataItems = JSON.parse(product.dataset.items);
                    const dataFile = product.dataset.file;
                    const htmlBtnFile = modalButtons.querySelector(".modal-r__btn-file");
                    if (htmlBtnFile) btnFile.remove();
                    modalTitle.textContent = dataTitle;
                    dataList.forEach(item => {
                        const li = document.createElement("li");
                        li.textContent = item;
                        modalList.appendChild(li);
                    });
                    modalContent.innerHTML = dataContent;
                    dataItems.forEach(item => {
                        const htmlItem = document.createElement("div");
                        htmlItem.classList.add("modal-r__item");
                        htmlItem.innerHTML = `\n            <div class="item-title">${item[0]}</div>\n            <div class="item-content">${item[1]}</div>\n          `;
                        modalItems.appendChild(htmlItem);
                    });
                    modalProductFeedback.setAttribute("data-btn-note", dataTitle);
                    if (dataFile) {
                        const btnFile = document.createElement("a");
                        btnFile.classList.add("btn-s", "_outline-secondary-white", "modal-r__btn-file");
                        btnFile.setAttribute("href", dataFile);
                        btnFile.setAttribute("download", "");
                        btnFile.innerHTML = `\n            <i class="icon-download"></i>\n            <span>Скачать тех. документацию</span>\n          `;
                        modalButtons.appendChild(btnFile);
                    }
                });
            });
        }
    }
    function inputmask() {
        const inputs = document.querySelectorAll('input[type="tel"]');
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(inputs);
    }
    function createScript(url, type) {
        if (!url) return;
        return new Promise((resolve, reject) => {
            const script = document.querySelector(`script[src="${url}"]`);
            if (script) {
                resolve(script);
            } else {
                const htmlScript = document.createElement("script");
                htmlScript.src = url;
                if (type) {
                    htmlScript.type = type;
                }
                htmlScript.onload = () => {
                    resolve(htmlScript);
                };
                htmlScript.onerror = () => {
                    reject(new Error(`Не удалось загрузить скрипт: ${url}`));
                };
                document.head.appendChild(htmlScript);
            }
        });
    }
    function slideUp(target, duration = 500, showmore = 0) {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = `${target.offsetHeight}px`;
            target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            window.setTimeout(() => {
                target.hidden = !showmore ? true : false;
                !showmore ? target.style.removeProperty("height") : null;
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                !showmore ? target.style.removeProperty("overflow") : null;
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideUpDone", {
                    detail: {
                        target
                    }
                }));
            }, duration);
        }
    }
    function slideDown(target, duration = 500, showmore = 0) {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.hidden = target.hidden ? false : null;
            showmore ? target.style.removeProperty("height") : null;
            let height = target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            target.offsetHeight;
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = height + "px";
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            window.setTimeout(() => {
                target.style.removeProperty("height");
                target.style.removeProperty("overflow");
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideDownDone", {
                    detail: {
                        target
                    }
                }));
            }, duration);
        }
    }
    function createEl(tag, classes = "") {
        const item = document.createElement(tag);
        if (classes) {
            classes.split(" ").forEach(c => {
                item.classList.add(c);
            });
        }
        return item;
    }
    function map() {
        const maps = document.querySelectorAll(".map");
        if (maps.length) {
            maps.forEach(map => {
                const options = {
                    root: null,
                    rootMargin: "0px",
                    scrollMargin: "0px",
                    threshold: .01
                };
                function callback(entries, observer) {
                    entries.forEach(entry => {
                        const target = entry.target;
                        if (entry.isIntersecting) {
                            createScript("https://api-maps.yandex.ru/2.1/?apikey=b46e9249-4925-4460-b11c-3aaf76ad0115&lang=ru_RU", "text/javascript").then(() => handlerCreateMap(target));
                            observer.unobserve(target);
                        }
                    });
                }
                const observer = new IntersectionObserver(callback, options);
                observer.observe(map);
            });
            function handlerCreateMap(map) {
                const center = JSON.parse(map.dataset.center);
                const zoom = Number(map.dataset.zoom);
                const iconHref = map.dataset.icon;
                const balloonContent = map.dataset.balloonContent;
                const balloonTitle = map.dataset.balloonTitle;
                let balloonContentVal = ``;
                let iconSize = [ 40, 50 ];
                let iconPosition = [ -20, -48 ];
                let objectMark = {};
                if (iconHref) {
                    objectMark = {
                        iconLayout: "default#image",
                        iconImageHref: iconHref,
                        iconImageSize: iconSize,
                        iconImageOffset: iconPosition
                    };
                }
                function init() {
                    const htmlMap = new ymaps.Map(map, {
                        center,
                        zoom
                    });
                    const placemark = new ymaps.Placemark(center, {}, objectMark);
                    htmlMap.geoObjects.add(placemark);
                    htmlMap.controls.remove("geolocationControl");
                    htmlMap.controls.remove("searchControl");
                    htmlMap.controls.remove("trafficControl");
                    htmlMap.controls.remove("typeSelector");
                    htmlMap.controls.remove("fullscreenControl");
                    htmlMap.controls.remove("rulerControl");
                }
                ymaps.ready(init);
            }
        }
    }
    function modalR() {
        const buttons = document.querySelectorAll("[data-modal-r-btn]");
        if (buttons.length) {
            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const id = btn.dataset.modalRBtn;
                    const modal = document.querySelector(`#${id}`);
                    if (!modal) return;
                    modal.classList.add("_open");
                    document.body.classList.add("body-hidden");
                });
            });
        }
        const buttonsClose = document.querySelectorAll("[data-modal-r-close]");
        if (buttonsClose.length) {
            buttonsClose.forEach(btn => {
                btn.addEventListener("click", () => {
                    const modal = btn.closest(".modal-r");
                    if (!modal) return;
                    modal.classList.remove("_open");
                    document.body.classList.remove("body-hidden");
                });
            });
        }
    }
    function more() {
        const containers = document.querySelectorAll(".container-more");
        if (containers.length) {
            containers.forEach(container => {
                const btn = container.querySelector("[data-more-btn]");
                const count = +container.dataset.countShow;
                const hideItems = Array.from(container.querySelectorAll("[data-more-item]")).filter(item => window.getComputedStyle(item).display === "none");
                if (hideItems.length === 0) btn.remove();
                btn.addEventListener("click", () => {
                    const items = container.querySelectorAll("[data-more-item]");
                    const hideItems = Array.from(items).filter(item => window.getComputedStyle(item).display === "none");
                    hideItems.splice(0, count).forEach(item => {
                        item.classList.add("_active");
                        setTimeout(() => {
                            item.classList.add("_show");
                        });
                    });
                    if (hideItems.length <= 0) btn.remove();
                });
            });
        }
    }
    function offsetTop() {
        const items = document.querySelectorAll("._offset-top");
        if (items.length && window.matchMedia("(min-width: 1026px)").matches) {
            const headerHeight = document.querySelector(".header").clientHeight;
            items.forEach(item => {
                item.style.top = `${headerHeight + 20}px`;
            });
        }
    }
    function sect() {
        const wraps = document.querySelectorAll(".sect-wrap");
        if (wraps.length) {
            wraps.forEach(wrap => {
                handlerWidthChange();
                function handlerWidthChange() {
                    const body = wrap.querySelector(".sect-body");
                    if (window.matchMedia("(min-width: 1366px)").matches) {
                        const tag = wrap.querySelector(".sect-tag");
                        const widthTag = tag ? tag.clientWidth : 0;
                        const gap = +window.getComputedStyle(wrap).gap.slice(0, -2);
                        const widthBody = wrap.clientWidth - (gap + widthTag) + "px";
                        if (body) {
                            body.style.width = `${widthBody}`;
                        }
                    } else {
                        body.style.width = "auto";
                    }
                }
                window.addEventListener("resize", handlerWidthChange);
            });
        }
    }
    function sectTag() {
        const items = document.querySelectorAll(".sect-tag");
        if (items.length && window.matchMedia("(min-width: 1026px)").matches) {
            const headerHeight = document.querySelector(".header").clientHeight;
            items.forEach(item => {
                item.style.top = `${headerHeight + 20}px`;
            });
        }
        const sectsP = document.querySelectorAll(".sect-p");
        const sectsM = document.querySelectorAll(".sect-m");
        if (sectsP.length || sectsM.length) {
            const sects = [ ...sectsM, ...sectsP ];
            const headerHeight = document.querySelector(".header").clientHeight;
            sects.forEach(sect => {
                if (sect.classList.contains("_not-top")) return;
                sect.style.scrollMarginTop = `${headerHeight + 20}px`;
            });
        }
    }
    function selectHandler() {
        const selects = document.querySelectorAll(".select");
        if (selects.length) {
            document.body.addEventListener("click", () => {
                const openSelects = document.querySelectorAll(".select._open");
                if (openSelects.length) openSelects.forEach(s => s.classList.remove("_open"));
            });
            selects.forEach(select => {
                select.addEventListener("click", e => e.stopPropagation());
                const items = select.querySelectorAll(".select-item");
                const btn = select.querySelector(".select-btn");
                const input = select.querySelector(".select-input");
                btn.addEventListener("click", () => {
                    select.classList.toggle("_open");
                });
                items.forEach(item => {
                    item.addEventListener("click", () => {
                        handlerChange(item);
                    });
                });
                function handlerChange(item) {
                    const value = item.textContent.trim();
                    input.value = value;
                    select.classList.remove("_open");
                    items.forEach(i => i.classList.remove("_active"));
                    item.classList.add("_active");
                }
            });
        }
    }
    function sliders() {
        const heroSlider = document.querySelector(".s-hero__slider");
        if (heroSlider) {
            const bgSlider = document.querySelector(".s-hero__bg-slider");
            const swiperBg = new Swiper(bgSlider, {
                speed: 900
            });
            const swiper = new Swiper(heroSlider, {
                speed: 900,
                slidesPerView: 1,
                effect: "fade",
                autoplay: {
                    delay: 6500
                },
                controller: {
                    control: swiperBg
                },
                navigation: {
                    nextEl: ".s-hero__slider-next"
                },
                pagination: {
                    el: ".s-hero .slider-pagination",
                    clickable: true
                }
            });
        }
        const applySlider = document.querySelector(".s-apply__slider");
        if (applySlider) {
            const swiper = new Swiper(applySlider, {
                speed: 900,
                spaceBetween: 10,
                slidesPerView: "auto",
                autoplay: {
                    delay: 5e3
                },
                navigation: {
                    nextEl: ".s-apply .slider-arrow._next",
                    prevEl: ".s-apply .slider-arrow._prev"
                },
                pagination: {
                    el: ".s-apply .slider-pagination",
                    clickable: true
                },
                breakpoints: {
                    1366: {
                        spaceBetween: 20,
                        slidesPerView: 4
                    },
                    768: {
                        spaceBetween: 15,
                        slidesPerView: "auto"
                    }
                }
            });
        }
    }
    function stepsProgress() {
        const wrap = document.querySelector(".s-steps__wrap-grid");
        if (wrap) {
            const items = Array.from(document.querySelectorAll(".s-steps__item"));
            const step = 100 / items.length;
            let rafId = null;
            function update() {
                rafId = null;
                const viewportCenter = window.innerHeight * 1;
                let passedCount = 0;
                items.forEach(item => {
                    const rect = item.getBoundingClientRect();
                    const isPassed = rect.top + rect.height * 1 < viewportCenter;
                    item.classList.toggle("_active", isPassed);
                    if (isPassed) passedCount++;
                });
                const progress = Math.min(100, step * passedCount);
                wrap.style.setProperty("--progress", `${progress}%`);
            }
            function onScroll() {
                if (rafId !== null) return;
                rafId = requestAnimationFrame(update);
            }
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            window.addEventListener("resize", onScroll);
            update();
        }
    }
    function videoPlayer() {
        const players = document.querySelectorAll(".video-player");
        if (players.length) {
            players.forEach(player => {
                player.addEventListener("click", () => {
                    const video = player.querySelector(".video-player__video");
                    if (!player.classList.contains("_active")) {
                        video.play();
                        player.classList.add("_active");
                    } else {
                        video.pause();
                        player.classList.remove("_active");
                    }
                    video.addEventListener("ended", () => {
                        player.classList.remove("_active");
                    });
                });
            });
        }
    }
    document.addEventListener("DOMContentLoaded", () => {
        sliders();
        burger();
        buttonsNote();
        changeModalTitle();
        inputmask();
        sectTag();
        videoPlayer();
        sect();
        more();
        applyItems();
        stepsProgress();
        offsetTop();
        map();
        selectHandler();
        modalR();
        changeProduct();
        Fancybox.bind("[data-fancybox]", {
            on: {
                destroy: instance => {
                    const id = instance.getSlide().src;
                    if (id.includes("#modal")) {
                        const modal = document.querySelector(id);
                        const inputNote = modal.querySelector(".input-note");
                        const modalTitle = modal.querySelector(".modal__title[data-text]");
                        if (inputNote) inputNote.value = "";
                        if (modalTitle) modalTitle.textContent = modalTitle.dataset.text;
                    }
                }
            }
        });
    });
})();