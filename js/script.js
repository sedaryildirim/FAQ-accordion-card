const accordionItems = document.querySelectorAll('.accordion_item')
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.accordion_header')
    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.accordion_content')
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}