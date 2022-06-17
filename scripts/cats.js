class Cats{

    selectCart(id,disabled){
        if (disabled){
            return 0
        }else {
            let elem = document.getElementsByClassName(`${'block' + id}`);
            for (let block of elem){
                if (block.classList.value.indexOf('checked') === -1){
                    block.classList.add('checked')
                }else {
                    block.classList.remove('checked')
                }
            }
        }
    }

    render(){
        let catsHTML = ``;
        Data.forEach(cart=>{
            catsHTML +=`
                <div class='cart-container'>
                    <div
                        onclick="cats.selectCart(${cart.id},${cart.disabled})"
                        class="cart-cat ${cart.disabled ? 'disabled' : ''} ${'block' + cart.id}"
                    >
                    
                        <div class="content-cat">
                             <div class="text">
                                 <h5>Сказочное заморское яство</h5>
                                 <h1 class="${cart.disabled?'disabled':''}">Нямушка</h1>
                                 <h3 class="${cart.disabled?'disabled':''}">${cart.vkus}</h3>
                                 <p>${cart.porcii}</p>
                                 <p>${cart.podarok}</p>
                                 <p>${cart.zakaz}</p>
                             </div>
                             <div class='img-container'></div>
                        </div>
                        
                        <div class="ves-block ${cart.disabled ? 'disabled' : ''} ${'block' + cart.id}">
                                <h1>${cart.ves}</h1>
                                <h3>кг</h3>
                        </div>
                            
                    </div>
                    
                    <p class="bottom-text ${cart.disabled ? 'disabled' : ''}" onclick="cats.selectCart(${cart.id},${cart.disabled})">
                            ${cart.disabled?cart.disabledBottomText:cart.bottomtext}
                    </p>
                </div>
            `;
        })
        const containerCats = `
            <div class='cats-container'>
                ${catsHTML}
            </div>
        `;
        ROOT_CATS.innerHTML = containerCats;
    }
}
const cats = new Cats();
cats.render()