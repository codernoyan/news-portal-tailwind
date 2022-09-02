const showNewsDetails = async (newsId) => {
    const url = `https://openapi.programming-hero.com/api/news/${newsId}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayNewsDetails(data.data[0]);
    } catch (error) {
        console.log(error)
    }
}

const displayNewsDetails = news => {
    console.log(news);

    const { details, author, image_url, total_view} = news;
    const { img: authorImage, name: authorName } = author;

    const modalTitle = document.getElementById('modal-title');
    modalTitle.innerText = news.title;

    // display data on modal
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <img src=${image_url}>    
        <p>${details}</p>
        <div class="flex justify-around items-center gap-2 mt-2">
            <div class="flex items-center gap-2">
                <img src=${authorImage} class="w-11 h-auto rounded-full" alt="">
                <div>
                <h4 class="font-medium text-sm">${authorName.length === 0 ? 'No Data Available' : authorName}</h4>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 class="font-medium">${total_view === 0 ? 'No Data Available' : parseFloat((total_view/1000).toFixed(2)) + 'M'}</h4>
            </div>
        </div>
    `;
}