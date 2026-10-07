// ===== CONFIG =====
        const CONFIG = {
            businessName: "Dr Clean",
            whatsappNumber: "5521996121202",
            whatsappDisplay: "(21) 99612-1202",
            instagramHandle: "@dr_clean25",
            instagramUrl: "https://www.instagram.com/dr_clean25/",
            city: "Manhumirim",
            state: "MG",
            defaultMessage: "Olá, Dr Clean! Vim pelo site e gostaria de solicitar um orçamento."
        };

        // ===== DATA LAYER =====
        const navItems = [
            { label: "Início", href: "#inicio" },
            { label: "Por que higienizar", href: "#por-que-higienizar" },
            { label: "Serviços", href: "#servicos" },
            { label: "Antes e depois", href: "#antes-depois" },
            { label: "Como funciona", href: "#como-funciona" },
            { label: "FAQ", href: "#faq" },
            { label: "Contato", href: "#contato" }
        ];

        const heroChecks = [
            { icon: "fas fa-check-circle", text: "Atendimento em Manhumirim–MG" },
            { icon: "fas fa-check-circle", text: "Orçamento sem compromisso" },
            { icon: "fas fa-check-circle", text: "Comunicação direta pelo WhatsApp" }
        ];

        const marqueeItems = ["Sofás", "Poltronas", "Colchões", "Tapetes", "Carpetes", "Bancos automotivos", "Cadeiras", "Banquetas", "Cortinas", "Persianas"];

        const painPoints = [
            { icon: "fas fa-bug", title: "Sujeira invisível", desc: "Poeira, ácaros e partículas se acumulam nas fibras dos estofados com o passar do tempo." },
            { icon: "fas fa-tint", title: "Manchas e odores", desc: "Líquidos, umidade e resíduos deixam manchas e odores que comprometem o ambiente." },
            { icon: "fas fa-heartbeat", title: "Saúde da família", desc: "Estofados sujos podem agravar alergias e afetar o bem-estar de quem convive no ambiente." },
            { icon: "fas fa-shield-alt", title: "Redução da vida útil", desc: "A sujeira desgasta as fibras do tecido, diminuindo a durabilidade e a beleza do estofado." }
        ];

        const services = [
            { icon: "fa-couch", title: "Sofás e poltronas", desc: "Higienização profissional no local, com atenção ao tipo de tecido e ao estado do estofado.", service: "higienização de sofás e poltronas" },
            { icon: "fa-bed", title: "Colchões", desc: "Cuidado especial para renovar a higiene do seu colchão, proporcionando mais conforto e tranquilidade.", service: "higienização de colchões" },
            { icon: "fa-th-large", title: "Tapetes e carpetes", desc: "Limpeza de tecidos que devolve a aparência e o conforto aos seus revestimentos.", service: "higienização de tapetes e carpetes" },
            { icon: "fa-car", title: "Estofados automotivos", desc: "Cuidados com bancos, forros e laterais para renovar o interior do seu veículo.", service: "higienização de estofados automotivos" },
            { icon: "fa-chair", title: "Cadeiras e banquetas", desc: "Higienização de estofados menores, ideal para cadeiras de jantar, escritório e banquetas.", service: "higienização de cadeiras e banquetas" },
            { icon: "fa-window-restore", title: "Cortinas e persianas", desc: "Limpeza delicada para os tecidos das suas cortinas, removendo a poeira acumulada.", service: "higienização de cortinas e persianas" }
        ];

        const steps = [
            { icon: "fab fa-whatsapp", title: "Fale com a gente", desc: "Você envia uma mensagem no WhatsApp com fotos e medidas do estofado, se possível." },
            { icon: "fas fa-clipboard-check", title: "Avaliação", desc: "Analisamos o tipo de tecido e o estado do estofado para indicar a melhor solução." },
            { icon: "fas fa-spray-can", title: "Higienização profissional", desc: "Realizamos a limpeza no local, com cuidado e atenção em cada detalhe." },
            { icon: "fas fa-magic", title: "Estofado renovado", desc: "Você recebe as orientações de cuidados e aproveita um ambiente mais limpo e agradável." }
        ];

        const whyUs = [
            { icon: "fas fa-map-marker-alt", title: "Atendimento em Manhumirim–MG", desc: "Atendemos clientes em Manhumirim e consultamos a disponibilidade para outras localidades." },
            { icon: "fas fa-user-check", title: "Atendimento personalizado", desc: "Cada cliente recebe atenção dedicada, do primeiro contato até o pós-serviço." },
            { icon: "fas fa-heart", title: "Foco no cuidado", desc: "Trabalhamos para deixar seu estofado limpo e seu ambiente mais saudável e confortável." },
            { icon: "fas fa-comments", title: "Orçamento pelo WhatsApp", desc: "Comunicação direta, orçamento sem compromisso e sem burocracia." }
        ];

        const faqs = [
            { q: "Como faço para solicitar um orçamento?", a: "É simples: chame a Dr Clean no WhatsApp pelo número (21) 99612-1202 e envie fotos do estofado. Você recebe as orientações e uma proposta personalizada para o seu caso." },
            { q: "Vocês atendem em Manhumirim e região?", a: "A Dr Clean atende em Manhumirim–MG. Para outras cidades da região, consulte a disponibilidade pelo WhatsApp." },
            { q: "O serviço é feito no meu endereço?", a: "Sim, a higienização pode ser realizada no local, com equipamento profissional e no conforto da sua casa. Confirme os detalhes pelo WhatsApp." },
            { q: "Quanto tempo demora a higienização?", a: "Depende do tamanho, do tipo de tecido e do estado do estofado. Após a avaliação, informamos a estimativa de tempo junto com o orçamento." },
            { q: "Quais cuidados devo ter depois do serviço?", a: "Passamos todas as orientações no dia do serviço, como o tempo de secagem e as recomendações para preservar o resultado por mais tempo." },
            { q: "Que tipos de tecidos vocês atendem?", a: "Atendemos estofados em geral: sofás, poltronas, colchões, cadeiras, tapetes e estofados automotivos. Para tecidos específicos, envie uma foto e consulte nossa equipe." }
        ];

        const contactItems = [
            { icon: "fab fa-whatsapp", label: "WhatsApp", value: "(21) 99612-1202", sub: "Orçamento rápido e sem compromisso", href: "#", wa: true },
            { icon: "fab fa-instagram", label: "Instagram", value: "@dr_clean25", sub: "Acompanhe nossos trabalhos", href: CONFIG.instagramUrl, external: true },
            { icon: "fas fa-map-marker-alt", label: "Atendimento", value: "Manhumirim – MG", sub: "Endereço completo em breve", href: "" }
        ];

        const footerLinks = [
            { label: "Início", href: "#inicio" },
            { label: "Serviços", href: "#servicos" },
            { label: "Antes e depois", href: "#antes-depois" },
            { label: "Como funciona", href: "#como-funciona" },
            { label: "FAQ", href: "#faq" },
            { label: "Contato", href: "#contato" }
        ];

        const footerContact = [
            { icon: "fab fa-whatsapp", text: CONFIG.whatsappDisplay, href: "#", wa: true },
            { icon: "fab fa-instagram", text: CONFIG.instagramHandle, href: CONFIG.instagramUrl, external: true },
            { icon: "fas fa-map-marker-alt", text: "Manhumirim – MG", href: "" }
        ];

        // ===== HELPERS =====
        function waUrl(message) {
            return "https://wa.me/" + CONFIG.whatsappNumber + "?text=" + encodeURIComponent(message);
        }

        // ===== RENDER FUNCTIONS =====
        function renderNav(items, mobile) {
            const linkClass = mobile
                ? "flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-teal-300"
                : "text-sm font-medium text-slate-200 transition-colors hover:text-teal-300";
            return items.map(function (item) {
                const chevron = mobile ? '<i class="fas fa-chevron-right text-xs text-teal-400/60" aria-hidden="true"></i>' : "";
                return '<li class="' + (mobile ? "border-b border-white/5" : "") + '"><a href="' + item.href + '" class="' + linkClass + '">' + item.label + chevron + "</a></li>";
            }).join("");
        }

        function renderChecks(items) {
            return items.map(function (item) {
                return '<li class="flex items-center gap-2 text-sm font-medium text-slate-300"><i class="' + item.icon + ' text-teal-400" aria-hidden="true"></i>' + item.text + "</li>";
            }).join("");
        }

        function renderMarquee(items) {
            const set = items.map(function (label) {
                return '<span class="mx-5 flex items-center gap-5 whitespace-nowrap text-xs font-bold uppercase tracking-[0.22em] text-slate-400"><span class="h-1.5 w-1.5 rotate-45 bg-teal-400" aria-hidden="true"></span>' + label + "</span>";
            }).join("");
            return set + set;
        }

        function renderPain(items) {
            return items.map(function (item) {
                return '<article class="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg">' +
                    '<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500"><i class="fas ' + item.icon + '" aria-hidden="true"></i></div>' +
                    "<h3 class=\"mt-5 font-display text-lg font-bold text-slate-900\">" + item.title + "</h3>" +
                    '<p class="mt-2 text-sm leading-relaxed text-slate-600">' + item.desc + "</p></article>";
            }).join("");
        }

        function renderServices(items) {
            return items.map(function (s) {
                return '<article class="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-xl">' +
                    '<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-xl text-white shadow-lg shadow-teal-500/25 transition-transform duration-300 group-hover:scale-110"><i class="fas ' + s.icon + '" aria-hidden="true"></i></div>' +
                    '<h3 class="font-display text-xl font-bold text-slate-900">' + s.title + "</h3>" +
                    '<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600">' + s.desc + "</p>" +
                    '<a href="#" data-wa-service="' + s.service + '" class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-500" aria-label="Solicitar orçamento para ' + s.title + '"><span>Orçamento pelo WhatsApp</span><i class="fab fa-whatsapp text-lg" aria-hidden="true"></i></a>' +
                    "</article>";
            }).join("");
        }

        function renderSteps(items) {
            return items.map(function (step, index) {
                return '<article class="relative rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg">' +
                    '<span class="font-display absolute right-6 top-6 text-4xl font-extrabold text-slate-100" aria-hidden="true">0' + (index + 1) + "</span>" +
                    '<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-lg text-teal-600"><i class="' + step.icon + '" aria-hidden="true"></i></div>' +
                    '<h3 class="mt-5 font-display text-lg font-bold text-slate-900">' + step.title + "</h3>" +
                    '<p class="mt-2 text-sm leading-relaxed text-slate-600">' + step.desc + "</p></article>";
            }).join("");
        }

        function renderWhyUs(items) {
            return items.map(function (item) {
                return '<article class="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg">' +
                    '<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 text-teal-600"><i class="' + item.icon + '" aria-hidden="true"></i></div>' +
                    "<h3 class=\"mt-5 font-display text-lg font-bold text-slate-900\">" + item.title + "</h3>" +
                    '<p class="mt-2 text-sm leading-relaxed text-slate-600">' + item.desc + "</p></article>";
            }).join("");
        }

        function renderFaqs(items) {
            return items.map(function (f, i) {
                return '<div class="faq-item" data-faq-item>' +
                    '<button type="button" class="faq-question" data-faq-toggle id="faq-btn-' + i + '" aria-expanded="false" aria-controls="faq-panel-' + i + '">' +
                    '<span>' + f.q + "</span>" +
                    '<span class="faq-icon flex items-center justify-center rounded-full bg-teal-50 text-teal-600"><i class="fas fa-plus" aria-hidden="true"></i></span>' +
                    "</button>" +
                    '<div id="faq-panel-' + i + '" class="faq-panel" role="region" aria-labelledby="faq-btn-' + i + '">' +
                    '<div><p>' + f.a + "</p></div></div></div>";
            }).join("");
        }

        function renderContactItems(items) {
            return items.map(function (c) {
                const inner = '<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-600/10 text-teal-300"><i class="' + c.icon + '" aria-hidden="true"></i></div>' +
                    '<div><p class="text-xs font-semibold uppercase tracking-wider text-teal-200/70">' + c.label + "</p>" +
                    '<p class="mt-0.5 text-base font-bold text-white">' + c.value + "</p>" +
                    '<p class="mt-0.5 text-xs text-slate-400">' + c.sub + "</p></div>";
                if (c.href) {
                    const extra = c.external ? 'data-external="1" target="_blank" rel="noopener"' : 'data-wa-message="' + CONFIG.defaultMessage + '"';
                    return '<a href="' + c.href + '" ' + extra + ' class="flex items-center gap-4 rounded-2xl bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10">' + inner + "</a>";
                }
                return '<div class="flex items-center gap-4 rounded-2xl bg-white/5 p-5 backdrop-blur">' + inner + "</div>";
            }).join("");
        }

        function renderFooterLinks(items) {
            return items.map(function (item) {
                return '<li><a href="' + item.href + '" class="text-slate-400 transition-colors hover:text-teal-300">' + item.label + "</a></li>";
            }).join("");
        }

        function renderFooterServices(items) {
            return items.map(function (s) {
                return '<li><a href="#" data-wa-service="' + s.service + '" class="text-slate-400 transition-colors hover:text-teal-300">' + s.title + "</a></li>";
            }).join("");
        }

        function renderFooterContact(items) {
            return items.map(function (c) {
                const icon = '<i class="' + c.icon + ' w-5 text-teal-400" aria-hidden="true"></i>';
                if (c.href) {
                    const extra = c.external ? 'data-external="1" target="_blank" rel="noopener"' : 'data-wa-message="' + CONFIG.defaultMessage + '"';
                    return '<li><a href="' + c.href + '" ' + extra + ' class="flex items-center gap-3 text-slate-400 transition-colors hover:text-teal-300">' + icon + c.text + "</a></li>";
                }
                return '<li class="flex items-center gap-3 text-slate-400">' + icon + c.text + "</li>";
            }).join("");
        }

        // ===== MOUNT =====
        document.getElementById("nav-list").innerHTML = renderNav(navItems, false);
        document.getElementById("mobile-nav-list").innerHTML = renderNav(navItems, true);
        document.getElementById("hero-checks").innerHTML = renderChecks(heroChecks);
        document.getElementById("marquee-track").innerHTML = renderMarquee(marqueeItems);
        document.getElementById("pain-grid").innerHTML = renderPain(painPoints);
        document.getElementById("services-grid").innerHTML = renderServices(services);
        document.getElementById("steps-grid").innerHTML = renderSteps(steps);
        document.getElementById("why-grid").innerHTML = renderWhyUs(whyUs);
        document.getElementById("faq-list").innerHTML = renderFaqs(faqs);
        document.getElementById("contact-chips").innerHTML = renderContactItems(contactItems);
        document.getElementById("footer-nav-list").innerHTML = renderFooterLinks(footerLinks);
        document.getElementById("footer-services-list").innerHTML = renderFooterServices(services);
        document.getElementById("footer-contact-list").innerHTML = renderFooterContact(footerContact);
        document.getElementById("year").textContent = new Date().getFullYear();

        // ===== MOBILE MENU =====
        const menuBtn = document.getElementById("menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");

        function closeMobileMenu() {
            if (!mobileMenu.classList.contains("hidden")) {
                mobileMenu.classList.add("hidden");
                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.querySelector("i").classList.add("fa-bars");
                menuBtn.querySelector("i").classList.remove("fa-times");
            }
        }

        menuBtn.addEventListener("click", function () {
            const isHidden = mobileMenu.classList.toggle("hidden");
            menuBtn.setAttribute("aria-expanded", String(!isHidden));
            menuBtn.querySelector("i").classList.toggle("fa-bars", isHidden);
            menuBtn.querySelector("i").classList.toggle("fa-times", !isHidden);
        });

        // ===== HEADER SCROLL =====
        const header = document.getElementById("site-header");
        function updateHeaderState() {
            const scrolled = window.scrollY > 40;
            header.classList.toggle("is-scrolled", scrolled);
        }

        updateHeaderState();
        window.addEventListener("scroll", updateHeaderState, { passive: true });

        mobileMenu.addEventListener("click", function (event) {
            if (event.target.closest("a[href^=\"#\"]")) {
                closeMobileMenu();
            }
        });

        window.addEventListener("keydown", function (event) {
            if (event.key === "Escape") closeMobileMenu();
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth >= 1024) closeMobileMenu();
        });

        // ===== BEFORE / AFTER SLIDER =====
        const baRange = document.getElementById("ba-range");
        const baAfter = document.getElementById("ba-after");
        const baDivider = document.getElementById("ba-divider");

        function updateBeforeAfter(value) {
            const numericValue = Number(value);
            baAfter.style.clipPath = "inset(0 0 0 " + numericValue + "%)";
            baDivider.style.left = numericValue + "%";
            baRange.setAttribute(
                "aria-valuetext",
                numericValue + "% — " + (numericValue === 50 ? "metade antes e metade depois" : numericValue < 50 ? "mais área do depois" : "mais área do antes")
            );
        }

        baRange.addEventListener("input", function () {
            updateBeforeAfter(baRange.value);
        });
        baRange.addEventListener("change", function () {
            updateBeforeAfter(baRange.value);
        });
        updateBeforeAfter(50);

        // ===== EVENT DELEGATION =====
        document.addEventListener("click", function (e) {
            const externalLink = e.target.closest("a[data-external]");
            if (externalLink) {
                e.preventDefault();
                window.open(externalLink.getAttribute("href"), "_blank", "noopener,noreferrer");
                return;
            }

            const waServiceBtn = e.target.closest("[data-wa-service]");
            if (waServiceBtn) {
                e.preventDefault();
                const service = waServiceBtn.getAttribute("data-wa-service");
                const message = "Olá, Dr Clean! Gostaria de solicitar um orçamento para " + service + ".";
                window.open(waUrl(message), "_blank", "noopener,noreferrer");
                return;
            }

            const waBtn = e.target.closest("[data-wa-message]");
            if (waBtn) {
                e.preventDefault();
                const message = waBtn.getAttribute("data-wa-message") || CONFIG.defaultMessage;
                window.open(waUrl(message), "_blank", "noopener,noreferrer");
                return;
            }

            const faqToggle = e.target.closest("[data-faq-toggle]");
            if (faqToggle) {
                const item = faqToggle.closest("[data-faq-item]");
                const isOpen = item.classList.toggle("open");
                faqToggle.setAttribute("aria-expanded", String(isOpen));
                item.querySelector(".faq-panel").style.gridTemplateRows = isOpen ? "1fr" : "0fr";
                return;
            }

            const navLink = e.target.closest("a[href^='#']");
            if (navLink) {
                e.preventDefault();
                const target = document.querySelector(navLink.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                    closeMobileMenu();
                }
            }
        });

        // ===== CANVAS: PARTÍCULAS DECORATIVAS =====
        (function initDustCanvas() {
            const canvas = document.getElementById("dust-canvas");
            if (!canvas) return;
            if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let W = 0;
            let H = 0;
            const DPR = Math.min(window.devicePixelRatio || 1, 2);

            function resize() {
                const rect = canvas.getBoundingClientRect();
                W = rect.width;
                H = rect.height;
                canvas.width = Math.round(W * DPR);
                canvas.height = Math.round(H * DPR);
                ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
            }

            resize();
            window.addEventListener("resize", resize);

            const colors = ["rgba(94,234,212,", "rgba(255,255,255,", "rgba(251,191,36,"];
            const particles = Array.from({ length: 48 }, function () {
                return {
                    x: Math.random() * Math.max(W, 1),
                    y: Math.random() * Math.max(H, 1),
                    r: Math.random() * 2 + 0.6,
                    vy: Math.random() * 0.35 + 0.08,
                    sway: Math.random() * 0.4 + 0.1,
                    phase: Math.random() * Math.PI * 2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    alpha: Math.random() * 0.5 + 0.15
                };
            });

            let frame = 0;

            function tick() {
                frame++;
                ctx.clearRect(0, 0, W, H);
                for (const p of particles) {
                    p.y += p.vy;
                    p.x += Math.sin(frame * 0.01 + p.phase) * p.sway * 0.4;
                    if (p.y > H + 10) {
                        p.y = -10;
                        p.x = Math.random() * W;
                    }
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fillStyle = p.color + p.alpha + ")";
                    ctx.fill();
                }
                requestAnimationFrame(tick);
            }

            tick();
        })();
