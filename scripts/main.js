document.addEventListener("DOMContentLoaded", () => {
    renderMasNosotros(masNosotrosData, document.getElementById('masNosotrosContent'));
    renderCasas(casasData, document.getElementById('casasContent'));
    renderBlog(blogData, document.getElementById('blogContent'));
    renderComments(commentsData, document.getElementById('commentsContent'));

    // Inicializar todos los popovers
    initializePopovers();

    // Actualizar el año en el footer
    updateFooterYear();
});

const initializePopovers = () => {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach(popoverTriggerEl => {
        new bootstrap.Popover(popoverTriggerEl, {
            sanitize: false,
            html: true
        });
    });
};

const createElement = (tag, classNames = '', textContent = '', attributes = {}) => {
    const element = document.createElement(tag);
    if (classNames) element.className = classNames;
    if (textContent) element.textContent = textContent;
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    return element;
};

const createPopoverContent = () => {
    const container = document.createElement('div');
    container.classList.add('p-2');

    const iframe = document.createElement('iframe');
    iframe.classList.add('w-100');
    iframe.style.height = '260px';
    iframe.style.borderRadius = '10px';
    iframe.style.boxShadow = '2px 4px 4px rgba(0, 0, 0, 0.25)';
    iframe.style.border = '1px solid #bcbcbc';
    iframe.src = 'https://dolarhoy.com/i/cotizaciones/dolar-blue';
    iframe.frameBorder = '0';

    container.appendChild(iframe);

    return container.outerHTML;
};

const renderMasNosotros = (data, container) => {
    data.forEach(item => {
        const col = createElement('div', 'col-md-4 mb-4');

        const img = createElement('img', 'img-fluid mb-3 rounded shadow-sm', '', { src: item.img, alt: item.title });
        const title = createElement('h3', 'text-uppercase text-center fw-bold', item.title);
        const text = createElement('p', 'text-center-justify text-muted', item.text);

        col.appendChild(img);
        col.appendChild(title);
        col.appendChild(text);
        container.appendChild(col);
    });
};

const renderCasas = (data, container) => {
    const template = document.getElementById('property-card-template').content;
    data.forEach(item => {
        const clone = document.importNode(template, true);
        const img = clone.querySelector('.card-img-top');
        const title = clone.querySelector('.card-title');
        const text = clone.querySelector('.card-text');
        const price = clone.querySelector('.text-green-dollar');
        const ul = clone.querySelector('.list-inline');

        img.src = item.img;
        img.alt = item.title;
        title.textContent = item.title;
        text.textContent = item.text;
        price.textContent = item.price;
        price.setAttribute('data-bs-toggle', 'popover');
        price.setAttribute('data-bs-html', 'true');
        price.setAttribute('data-bs-content', createPopoverContent());

        item.features.forEach(feature => {
            const li = createElement('li', 'list-inline-item');
            const featureImg = createElement('img', '', '', { src: feature.img, alt: 'icono' });
            const span = createElement('span', '', feature.text);
            li.appendChild(featureImg);
            li.appendChild(span);
            ul.appendChild(li);
        });

        container.appendChild(clone);
    });
};

const renderBlog = (data, container) => {
    const template = document.getElementById('blog-post-template').content;
    data.forEach(item => {
        const clone = document.importNode(template, true);
        const img = clone.querySelector('.img-fluid');
        const title = clone.querySelector('.fw-bold');
        const meta = clone.querySelector('.text-muted');
        const text = clone.querySelector('.card-text');

        img.src = item.img;
        img.alt = item.title;
        title.textContent = item.title;
        meta.textContent = `Escrito el: ${item.date} por: ${item.author}`;
        text.textContent = item.text;

        container.appendChild(clone);
    });
};

const renderComments = (data, container) => {
    const itemsPerSlide = 2;
    let currentIndex = 0;
    let isFirstSlide = true;

    while (currentIndex < data.length) {
        const item = createElement('div', `carousel-item ${isFirstSlide ? 'active' : ''}`);
        const row = createElement('div', 'row justify-content-center');

        for (let i = 0; i < itemsPerSlide && currentIndex < data.length; i++) {
            const col = createElement('div', 'col-md-6 mb-4');
            const card = createElement('div', 'card text-white p-3 comment-card shadow-sm');
            card.style.backgroundColor = '#66cdaa'; // Verde manzana más opaco
            card.style.borderRadius = '15px'; // Bordes redondeados

            const cardBody = createElement('div', 'card-body');
            const blockquote = createElement('blockquote', 'blockquote mb-0');
            const p = createElement('p', '', data[currentIndex].text);
            const footer = createElement('footer', 'blockquote-footer text-white', data[currentIndex].author);

            blockquote.appendChild(p);
            blockquote.appendChild(footer);
            cardBody.appendChild(blockquote);
            card.appendChild(cardBody);
            col.appendChild(card);
            row.appendChild(col);

            currentIndex++;
        }

        item.appendChild(row);
        container.appendChild(item);
        isFirstSlide = false;
    }
};

const updateFooterYear = () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
};
