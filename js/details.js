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
    const modalTitle = document.getElementById('modal-title');
    modalTitle.innerText = news.title;
}