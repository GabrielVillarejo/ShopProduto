document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('cookie-modal');
    const mainContent = document.getElementById('main-content');
    const acceptButton = document.getElementById('accept-cookies');
    const acceptAllButton = document.getElementById('accept-all-cookies');
    const denyButton = document.getElementById('deny-cookies');
    const analyticsCheckbox = document.getElementById('analytics');

    function showCookieModal() {
        if (!localStorage.getItem('cookiePreferences')) {
            modal.style.display = 'flex';
            mainContent.classList.add('blurred');
        }
    }

    function saveCookiePreferences(preferences) {
        localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
        modal.style.display = 'none';
        mainContent.classList.remove('blurred');
        
        // Exemplo de feedback visual
        const feedback = document.createElement('div');
        feedback.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #10B981;
            color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            animation: fadeIn 0.3s ease-out;
        `;
        feedback.textContent = 'Preferências salvas com sucesso!';
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.remove();
        }, 3000);
    }

    acceptButton.addEventListener('click', () => {
        const preferences = {
            essential: true,
            analytics: analyticsCheckbox.checked,
            timestamp: new Date().toISOString()
        };
        saveCookiePreferences(preferences);

        // Redireciona para o link após aceitar os cookies
        window.location.href = 'https://a6c9dbhnv5-a3w8ljpwc5d1k8r.hop.clickbank.net/?&traffic_source=google&traffic_type=paid&campaign=Fundo-de-funil'; // Substitua pelo seu link
    });

    acceptAllButton.addEventListener('click', () => {
        const preferences = {
            essential: true,
            analytics: true,
            timestamp: new Date().toISOString()
        };
        analyticsCheckbox.checked = true;
        saveCookiePreferences(preferences);

        // Redireciona para o link após aceitar todos os cookies
        window.location.href = 'https://a6c9dbhnv5-a3w8ljpwc5d1k8r.hop.clickbank.net/?&traffic_source=google&traffic_type=paid&campaign=Fundo-de-funil'; // Substitua pelo seu link
    });

    denyButton.addEventListener('click', () => {
        const preferences = {
            essential: true,
            analytics: false,
            timestamp: new Date().toISOString()
        };
        analyticsCheckbox.checked = false;
        saveCookiePreferences(preferences);
    });

    // Mostrar modal após um pequeno delay
    setTimeout(showCookieModal, 1000);
});