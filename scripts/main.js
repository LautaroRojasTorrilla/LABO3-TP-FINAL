document.addEventListener("DOMContentLoaded", function() {
    renderMasNosotros(masNosotrosData, document.getElementById('masNosotrosContent'));
    renderCasas(casasData, document.getElementById('casasContent'));
    renderBlog(blogData, document.getElementById('blogContent'));
    renderComments(commentsData, document.getElementById('commentsContent'));
    updateFooterYear();
});

function createElement(tag, classNames = '', textContent = '', attributes = {}) {
    const element = document.createElement(tag);
    if (classNames) element.className = classNames;
    if (textContent) element.textContent = textContent;
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    return element;
}


function renderMasNosotros(data, container) {
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
}

function renderCasas(data, container) {
    data.forEach(item => {
        const col = createElement('div', 'col-md-4 mb-4');

        const features = item.features.map(feature => {
            const li = createElement('li', 'list-inline-item');
            const featureImg = createElement('img', '', '', { src: feature.img, alt: 'icono' });
            const span = createElement('span', '', feature.text);
            li.appendChild(featureImg);
            li.appendChild(span);
            return li;
        });

        const ul = createElement('ul', 'list-inline d-flex justify-content-around'); // Clases de Bootstrap para alineación
        features.forEach(feature => ul.appendChild(feature));

        const button = createElement('a', 'btn btn-warning mt-2 btn-lg btn-block', 'Ver propiedad', { href: '#' });

        const card = createCard(item.img, item.imgAlt, item.title, item.text, item.price);
        card.querySelector('.card-body').appendChild(ul);
        card.querySelector('.card-body').appendChild(button);

        col.appendChild(card);
        container.appendChild(col);
    });
}

function renderBlog(data, container) {
    data.forEach(item => {
        const row = createElement('div', 'row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative');

        const imgCol = createElement('div', 'col-auto d-none d-lg-block blog-image');
        const img = createElement('img', 'img-fluid', '', { src: item.img, alt: item.title });
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover';
        imgCol.appendChild(img);

        const contentCol = createElement('div', 'col p-4 d-flex flex-column position-static');
        const title = createElement('h3', 'mb-0 fw-bold', item.title);
        const meta = createElement('div', 'mb-1 text-muted', `Escrito el: ${item.date} por: ${item.author}`);
        const text = createElement('p', 'card-text mb-auto text-muted', item.text);

        contentCol.appendChild(title);
        contentCol.appendChild(meta);
        contentCol.appendChild(text);

        row.appendChild(imgCol);
        row.appendChild(contentCol);
        container.appendChild(row);
    });
}

function renderComments(data, container) {
    const itemsPerSlide = 2;
    let currentIndex = 0;
    let isFirstSlide = true;

    while (currentIndex < data.length) {
        const item = createElement('div', `carousel-item ${isFirstSlide ? 'active' : ''}`);
        const row = createElement('div', 'row');

        for (let i = 0; i < itemsPerSlide; i++) {
            if (currentIndex < data.length) {
                const col = createElement('div', 'col-md-6');
                const card = createElement('div', 'card text-white mb-4 p-3 comment-card shadow-sm');
                card.style.backgroundColor = '#66cdaa'; // Verde manzana más opaco
                card.style.borderRadius = '15px'; // Bordes redondeados

                const cardBody = createElement('div', 'card-body');
                const blockquote = createElement('blockquote', 'blockquote mb-0');
                const p = createElement('p', '', data[currentIndex].text);
                const footer = createElement('footer', 'blockquote-footer', data[currentIndex].author);

                blockquote.appendChild(p);
                blockquote.appendChild(footer);
                cardBody.appendChild(blockquote);
                card.appendChild(cardBody);
                col.appendChild(card);
                row.appendChild(col);

                currentIndex++;
            }
        }

        item.appendChild(row);
        container.appendChild(item);
        isFirstSlide = false;
    }
}

function updateFooterYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
}