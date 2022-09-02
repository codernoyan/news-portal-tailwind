const showCategories = async (categoryId) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    const res = await fetch(url);
    const data = await res.json();
    
    const categories = data.data;
    console.log(categories);
    // display categories
    const categoriesContainer = document.getElementById('categories');
    categoriesContainer.innerHTML = '';
    categories.forEach(category => {
        console.log(category);

        // destructuring
        const { title, thumbnail_url, author, details, total_view, image_url} = category;

        const article = document.createElement('article');
        article.innerHTML = `
            <div class="flex justify-center mb-4">
            <div class="flex flex-col md:flex-row md:max-w-xl lg:max-w-full rounded-lg bg-white shadow-lg">
                <img class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src=${thumbnail_url} alt="news" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">${title}</h5>
                    <p class="text-gray-700 text-base mb-4">${details.slice(0, 350) + '...'}</p>
                    <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
        `;
        categoriesContainer.appendChild(article);
    })
}
