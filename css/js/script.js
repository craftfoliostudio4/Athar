        // Custom Message Function (replaces alert)
        function showMessage(msg) {
            const toast = document.getElementById('toast-container');
            const toastMsg = document.getElementById('toast-message');
            toastMsg.textContent = msg;
            
            toast.classList.add('show');
            
            // Hide after 3 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        const routes = {
            'home': { folder: '', file: 'index.html' },
            'about': { folder: 'html/عن الهندسة الكيميائية', file: 'about.html' },
            'subjects': { folder: 'html/المواد الدراسية', file: 'subjects.html' },
            'subject-core': { folder: 'html/المواد الدراسية', file: 'subject-core.html' },
            'subject-design': { folder: 'html/المواد الدراسية', file: 'subject-design.html' },
            'subject-general': { folder: 'html/المواد الدراسية', file: 'subject-general.html' },
            'subject-support': { folder: 'html/المواد الدراسية', file: 'subject-support.html' },
            'industries': { folder: 'html/التخصصات الدقيقة', file: 'industries.html' },
            'fields': { folder: 'html/مجالات العمل', file: 'fields.html' },
            'equipment': { folder: 'html/المعدات الصناعية', file: 'equipment.html' },
            'control-measurement': { folder: 'html/المعدات الصناعية', file: 'control-measurement.html' },
            'crushing-grinding': { folder: 'html/المعدات الصناعية', file: 'crushing-grinding.html' },
            'diffusive-separation': { folder: 'html/المعدات الصناعية', file: 'diffusive-separation.html' },
            'fluid-transfer': { folder: 'html/المعدات الصناعية', file: 'fluid-transfer.html' },
            'handling-storage': { folder: 'html/المعدات الصناعية', file: 'handling-storage.html' },
            'heat-transfer': { folder: 'html/المعدات الصناعية', file: 'heat-transfer.html' },
            'mech-separation': { folder: 'html/المعدات الصناعية', file: 'mech-separation.html' },
            'reaction-mixing': { folder: 'html/المعدات الصناعية', file: 'reaction-mixing.html' },
            'software': { folder: 'html/البرامج الهندسية', file: 'software.html' },
            'courses': { folder: 'html/الشهادات المهنية', file: 'courses.html' },
            'certificates': { folder: 'html/الشهادات المهنية', file: 'certificates.html' },
            'cert-fe': { folder: 'html/الشهادات المهنية', file: 'cert-fe.html' },
            'cert-food': { folder: 'html/الشهادات المهنية', file: 'cert-food.html' },
            'cert-inspection': { folder: 'html/الشهادات المهنية', file: 'cert-inspection.html' },
            'cert-pmp': { folder: 'html/الشهادات المهنية', file: 'cert-pmp.html' },
            'cert-quality': { folder: 'html/الشهادات المهنية', file: 'cert-quality.html' },
            'cert-risk': { folder: 'html/الشهادات المهنية', file: 'cert-risk.html' },
            'cert-safety': { folder: 'html/الشهادات المهنية', file: 'cert-safety.html' },
            'cert-supply': { folder: 'html/الشهادات المهنية', file: 'cert-supply.html' },
            'fieldwork': { folder: 'html/العمل الميداني', file: 'fieldwork.html' },
            'library': { folder: 'html/المكتبة', file: 'library.html' },
            'lib-basics': { folder: 'html/المكتبة', file: 'lib-basics.html' },
            'lib-fluid': { folder: 'html/المكتبة', file: 'lib-fluid.html' },
            'lib-general': { folder: 'html/المكتبة', file: 'lib-general.html' },
            'lib-heat': { folder: 'html/المكتبة', file: 'lib-heat.html' },
            'lib-industries': { folder: 'html/المكتبة', file: 'lib-industries.html' },
            'lib-labs': { folder: 'html/المكتبة', file: 'lib-labs.html' },
            'lib-petro': { folder: 'html/المكتبة', file: 'lib-petro.html' },
            'lib-thermo': { folder: 'html/المكتبة', file: 'lib-thermo.html' },
            'lib-transport': { folder: 'html/المكتبة', file: 'lib-transport.html' },
            'coming-soon': { folder: 'html/أخرى', file: 'coming-soon.html' }
        };

        // Navigation 
        function navigate(viewId) {
            const route = routes[viewId];
            if (!route) {
                console.error("Route not found: " + viewId);
                return;
            }
            
            const pathname = window.location.pathname;
            let rootPrefix = '';
            if (pathname.includes('/html/')) {
                rootPrefix = '../../';
            }
            
            const targetPath = rootPrefix + (route.folder ? route.folder + '/' : '') + route.file;
            window.location.href = targetPath;
        }

        // Scroll to exploration section smoothly inside Home
        function scrollToExplore() {
            const section = document.getElementById('explore-section');
            if(section) {
                const y = section.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({top: y, behavior: 'smooth'});
            } else {
                navigate('home');
            }
        }

        // Side Menu Toggle
        function toggleSideMenu() {
            const menu = document.getElementById('side-menu');
            const overlay = document.getElementById('menu-overlay');
            
            if (menu.classList.contains('translate-x-full')) {
                // Open menu
                menu.classList.remove('translate-x-full');
                menu.classList.add('translate-x-0');
                overlay.classList.remove('opacity-0', 'pointer-events-none');
                overlay.classList.add('opacity-100', 'pointer-events-auto');
            } else {
                // Close menu
                menu.classList.add('translate-x-full');
                menu.classList.remove('translate-x-0');
                overlay.classList.add('opacity-0', 'pointer-events-none');
                overlay.classList.remove('opacity-100', 'pointer-events-auto');
            }
        }

        // Navbar blur effect on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.glass-nav');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-lg');
            } else {
                nav.classList.remove('shadow-lg');
            }
        });
        
        // Initial setup - highlight active link
        window.onload = function() {
            const currentPath = window.location.pathname;
            const links = document.querySelectorAll('.nav-link, button[onclick^="navigate"]');
            
            let activeView = 'home';
            if (currentPath.includes('/html/')) {
                activeView = currentPath.split('/').pop().replace('.html', '');
            }

            links.forEach(link => {
                const onclick = link.getAttribute('onclick');
                if (onclick && onclick.includes(`'${activeView}'`)) {
                    // It's a nav-link in the top bar
                    if(link.classList.contains('nav-link')) {
                        link.classList.add('text-accent');
                    }
                    // It's a button in the side menu
                    if(link.classList.contains('text-white/90')) {
                        link.classList.remove('text-white/90');
                        link.classList.add('text-accent');
                    }
                }
            });
            
            // Remove active classes from all view-sections, then make the single one in the page visible
            const views = document.querySelectorAll('.view-section');
            views.forEach(view => {
                view.classList.add('active'); // show the only view in the HTML
            });
        };

