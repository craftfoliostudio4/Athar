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

        // Navigation 
        function navigate(viewId) {
            const inHtmlFolder = window.location.pathname.includes('/html/');
            const rootPath = inHtmlFolder ? '../' : '';
            const htmlPath = inHtmlFolder ? '' : 'html/';

            if (viewId === 'home') {
                window.location.href = rootPath + 'index.html';
            } else {
                window.location.href = htmlPath + viewId + '.html';
            }
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

