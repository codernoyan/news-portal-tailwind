const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    return data.data.news_category
}

const showNewsCategories = async () => {
    const newsCategories = await loadCategories();
    console.log(newsCategories);

    const newsCategoryContainer = document.getElementById('category');
    newsCategories.forEach(category => {
        console.log(category);
        const { category_name } = category;
        const li = document.createElement('li');
        li.innerHTML = `<a class="cursor-pointer text-lg text-gray-500">${category_name}</a>`;
        newsCategoryContainer.appendChild(li);
    })
}

showNewsCategories();