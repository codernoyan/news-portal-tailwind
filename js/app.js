const loadCategoriesMenu = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.data.news_category
    } catch (error) {
        console.log(error);
    }
}

const showNewsCategories = async () => {
    const newsCategories = await loadCategoriesMenu();
    console.log(newsCategories);

    const newsCategoryContainer = document.getElementById('category');
    newsCategories.forEach(category => {
        console.log(category);
        const { category_name, category_id } = category;
        const li = document.createElement('li');
        li.innerHTML = `<a onclick="showCategories('${category_id}')" class="cursor-pointer p-1 text-lg text-gray-500 hover:text-indigo-500 hover:bg-indigo-100">${category_name}</a>`;
        newsCategoryContainer.appendChild(li);
    })
}

showNewsCategories();

