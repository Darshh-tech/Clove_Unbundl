document.querySelectorAll('.faq-question').forEach((button, index) => {
    const answer = button.nextElementSibling;
    const answerId = `faq-answer-${index + 1}`;

    answer.id = answerId;
    button.setAttribute('aria-controls', answerId);
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => toggleFaq(button));
});

document.querySelectorAll('form[data-message-id]').forEach(form => {
    form.addEventListener('submit', event => {
        handleFormSubmit(event, form.dataset.messageId);
    });
});

function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const shouldOpen = !answer.classList.contains('active');

    document.querySelectorAll('.faq-content').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelectorAll('.faq-question').forEach(item => {
        item.setAttribute('aria-expanded', 'false');
        item.querySelector('.faq-icon').textContent = '+';
    });

    if (shouldOpen) {
        answer.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
        button.querySelector('.faq-icon').textContent = '−';
    }
}

function handleFormSubmit(event, messageBoxId) {
    event.preventDefault();
    const messageBox = document.getElementById(messageBoxId);
    if (!messageBox) return;

    messageBox.classList.remove('is-hidden');
    messageBox.classList.add('form-success');
    messageBox.textContent = 'Thank you! Our Clove Dental specialist in Delhi will call you shortly.';
    event.target.reset();

    setTimeout(() => {
        messageBox.classList.add('is-hidden');
        messageBox.classList.remove('form-success');
    }, 5000);
}
