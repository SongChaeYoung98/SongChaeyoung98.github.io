$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/wheat-predict.PNG',
            link: 'https://github.com/SongChaeYoung98/prediction-of-wheat-cultivating-areas',
            title: '미래의 밀 경작 가능지 예측',
            demo: false,
            technologies: ['Jupyter', 'Random Forest', 'Python'],
            description: "2030, 2040년의 변화된 기후에 따라 전국 밀 경작 가능지를 머신러닝으로 예측하는 프로그램",
            categories: ['featured', 'all']
        },
        {
            image: 'assets/images/voice-analysis.PNG',
            link: 'https://github.com/SongChaeYoung98/voice-emotion-analysis',
            title: '음성을 통한 감정 분석',
            demo: false,
            technologies: ['Pycharm', 'BLSTM', 'Python'],
            description: "사용자의 음성 속 감정을 7가지로 분류하여, 그 중 가장 큰 퍼센트를 얻은 감정을 기준으로 사용자의 기분을 판단하는 프로그램",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/facial-emotioni-recognition.PNG',
            link: 'https://github.com/SongChaeYoung98/facial-expression-recognition',
            title: '표정을 통한 감정 분석',
            demo: false,
            technologies: ['Pycharm', 'OpenCV', 'RNN', 'Python'],
            description: "웹 캠 또는 영상 속 사람의 표정을 7가지로 분류 후 cnn을 이용하여 실시간으로 분석해내는 프로그램",
            categories: ['featured', 'webdev']
        },
        {
            image: 'profile.PNG',
            link: 'https://github.com/SongChaeYoung98/real-time-face-de-identification',
            title: '실시간 얼굴 비 식별화',
            demo: false,
            technologies: ['Python', 'OpenCV', 'tensorflow', 'keras'],
            description: "tensorflow를 이용하여 웹 캠 또는 영상 속 특정 인물의 얼굴을 실시간으로 비 식별화 하는 프로그램",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/household-account.PNG',
            link: 'https://github.com/SongChaeYoung98/household-account',
            title: '안드로이드 가계부 앱',
            demo: false,
            technologies: ['Android Studio', 'JAVA'],
            description: "캘린더 인터페이스에, 날짜 별 자본 소모 내역을 저장 할 수 있는 안드로이드 가계부 어플리케이션",
            categories: ['featured', 'native']
        },
        
    ]

    let projects = [];
    if(slug == 'featured') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}