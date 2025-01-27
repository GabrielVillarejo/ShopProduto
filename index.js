document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.item-duvida');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.pergunta-duvida');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});