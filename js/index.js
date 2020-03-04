const renderElement = (storyIndex) => {
    const storyContainer = document.getElementById("story-container");
    console.log(storyIndex);
    storyContainer.innerHTML=`
    <div class="title-container">
            <h6 class="title"> ${stories[storyIndex].title}</h6>
            <div class="story-note"> ${stories[storyIndex].note} </div>
        </div>
        <p class="story">
            ${stories[storyIndex].story}
        </p>
    `;
};


const generateStoryTableOfContent = (index, story) => {
    return (
        `
        <li class="content-list-item" onclick="renderElement(${index})">
                <div class="content-numbering">
                    ${index+1}
                </div>
                <div>
                    <h6 class="small-title"> ${story.title}</h6>
                    <div class="content-story-note"> ${story.note}
                    </div>
                </div>
            </li>
        `
    )
};


const renderStories = () => {
    const tableOfContent = document.getElementById("table-of-content");
    stories.forEach((story, index) => {
        const storyTableOfContent = generateStoryTableOfContent(index, story);
        tableOfContent.insertAdjacentHTML('beforeend', storyTableOfContent);
    })
};

renderStories();
renderElement(0);