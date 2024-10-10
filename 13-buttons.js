const elements = {
  buttons: document.querySelector('.wrapper__buttons'),
  count: document.querySelector('.wrapper__count'),
  reset: document.querySelector('.button__reset'),
};

// по клику на ресет сбросили название всех кнопок и убрали стили
elements.reset.addEventListener('click', (e) => {
  elements.count.innerHTML = 0;
  [...elements.buttons.children].forEach(button => {
    button.innerText = 'Нажми меня';
    button.classList.remove('-active-')
  });
})

elements.buttons.addEventListener('click', (event) => {
  if(event.target.tagName !== 'BUTTON'){
    return;
  }
  const currentCount = Number(elements.count.innerHTML);
  [...elements.buttons.children].forEach((button) => {
    if (button === event.target) {
      if (!button.classList.contains('-active-')) {
          elements.count.innerHTML = currentCount + 1;
      }

      button.innerHTML = 'Нажата!';
      button.classList.add('-active-');
  } else {
      button.innerHTML = 'Нажми меня';
      button.classList.remove('-active-');
  }

  })
})


const appendButton = (count, wrapper = elements.buttons, classList = []) => {
  if(!classList.length){
    classList = ['button', 'wrapper__button'];
  }
  for(let i = 0; i < count; i++){
    const btn = document.createElement('button');
    btn.classList.add(...classList);
    btn.innerText = 'Нажми меня'
    wrapper.append(btn);
  }
}

document.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'BUTTON') e.target.classList.toggle('-focus-');
});
document.addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'BUTTON') e.target.classList.toggle('-focus-');
});

appendButton(5, elements.buttons);
