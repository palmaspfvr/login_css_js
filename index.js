function AnimatedForm(){
    const arrows = document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(arrow => {
        arrow.addEventListener('click',()=>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if(validate(input)){
                console.log('entrou aqui!!')
                next(parent, nextForm);
            } else{
                parent.style.animation = 'shake 0.5s ease';
            }
            parent.addEventListener('animationend', ()=>{
                parent.style.animation='';
            })
        });
    });
}


function validate(inp){
    switch (inp.type){
        case 'text':
            if(inp.value.length < 6){
                console.log('not enogh charaters!');
                error('rgb(189,87,87)');
            } else{
                error('rgb(87,189,130)');
                return true
            }
        case 'password':
            if(inp.value.length<6){
                console.log('not enogh charaters!');
                error('rgb(189,87,87)');
                console.log('Try again')
            } else{
                error('rgb(87,189,130)');
                return true
            }
        case 'email':
            const cal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (cal.test(inp.value)){
                error('rgb(87,189,130)');
                return true
            }else {
                error('rgb(189,87,87)');
                console.log('Try again')
            }
    }
}

function error(color){
    document.body.style.backgroundColor = color;
}

function next(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

AnimatedForm()