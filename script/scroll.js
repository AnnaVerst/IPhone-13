
const links = document.querySelectorAll('.header-menu__item a')  // объявляем переменные из меню
const link = document.querySelectorAll('.card-details__link-characteristics')

links.forEach((element)=> {                                      //задаем ссылкам массиву функцию (=>)
    element.addEventListener('click', (event) => {               // addEventListener(возможность добавлять нескольео обработчиков) добавляем обработчик КЛИК и какое то действие(event), далее прописываем функцию
        event.preventDefault()                                   // отменяем преброс с ссылки на секцию

        const id = element.getAttribute('href').substring(1)     // по клику выводится индетификатор (#present) substring - убирает решетку
        const section = document.getElementById(id)               // находим секцию куда будет вести ссылка (<section class="present" id="present">)б ищется ТОЛЬКО по ИНДИФИКАТОРУ id
            
        if (section) {
            section.scrollIntoView({                              // scrollIntoView переводит резко на нужную секцию
                behavior: 'smooth',                               // поведение - плавное
                block: 'start'                                    // часть блока - к самому началу
            })
        } else {
            console.log('нет');
        }
    })
})


link.forEach((element) => {
    element.addEventListener('click', (event)=> {
        event.preventDefault()

        const id = element.getAttribute('href').substring(1)
        const section = document.getElementById(id)

        if(section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }else{
            console.log('нет');
        }
    })
})