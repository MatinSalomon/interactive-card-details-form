const NumInCard = document.getElementById('NumInCard');
const NameInCard = document.getElementById('NameInCard');
const ExpInCard = document.getElementById('ExpInCard');
const CvcInCard = document.getElementById('CvcInCard');

const CardHolderName = document.getElementById('CardHolderName');
const CardNumber = document.getElementById('CardNumber');
const exp = document.getElementById('exp');
const mm_yy = document.getElementById('mm_yy');
const cvc = document.getElementById('cvc');
const btn = document.getElementById('btn');


CardHolderName.addEventListener('keyup', () => {
    NameInCard.innerText = CardHolderName.value
})

CardNumber.addEventListener('keyup', () => {
    let formattedCardNumber = CardNumber.value.replace(/[^\d]/g,"")
    formattedCardNumber = formattedCardNumber.substring(0, 16)
    let space = formattedCardNumber.match(/\d{1,4}/g);
    if (space !== null) {
        formattedCardNumber = space.join(" ")
    }
    CardNumber.value = formattedCardNumber;
    NumInCard.innerHTML = formattedCardNumber
    if (CardNumber.value == 0){
        NumInCard.innerHTML = "0000 0000 0000 0000";
    }
})      



exp.addEventListener('keyup', () => {
    let expInput = exp.value
    expInput = expInput.substring(0, 2)
    exp.value = expInput
    if (exp.value > 12) {
        exp.value = 12
    }

    ExpInCard.innerText = exp.value + "/" + mm_yy.value
})

mm_yy.addEventListener('keyup', () => {
    let mm_yyInput = mm_yy.value
    mm_yyInput = mm_yyInput.substring(0, 2)
    mm_yy.value = mm_yyInput

    ExpInCard.innerText = exp.value + "/" + mm_yy.value

})

cvc.addEventListener('keyup', () => {
    let cvcInput = cvc.value
    cvcInput = cvcInput.substring(0, 4)
    cvc.value = cvcInput

    CvcInCard.innerText = cvc.value

    if (cvc.value == 0){
        CvcInCard.innerText = "000"
    }
})

const containerData = document.getElementById('containerData')
const thank = document.getElementById('thank')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    

    if(CardHolderName.value.length == 0){
            const errorCardHolderName = document.getElementById('errorCardHolderName');
            CardHolderName.style.border = '1px solid red';
            errorCardHolderName.style.display = 'block';
            return;

        }else if(CardHolderName.value.length !== 0){
            const errorCardHolderName = document.getElementById('errorCardHolderName');
            CardHolderName.style.border = '1px solid black';
            errorCardHolderName.style.display = 'none';
        }

    if(CardNumber.value.length !== 19){
            const errorCardNumber = document.getElementById('errorCardNumber');
            CardNumber.style.border = '1px solid red';
            errorCardNumber.style.display = 'block';
            return;

        }else if(CardNumber.value.length == 19){
            const errorCardNumber = document.getElementById('errorCardNumber');
            CardNumber.style.border = '1px solid black';
            errorCardNumber.style.display = 'none';
        }

    if(exp.value.length !== 2){
            const errorExp = document.getElementById('errorExp');
            exp.style.border = '1px solid red';
            errorExp.style.display = 'block';
            return;

        }else if(exp.value.length == 2){
            const errorExp = document.getElementById('errorExp');
            exp.style.border = '1px solid black';
            errorExp.style.display = 'none';
    }
        
    if(mm_yy.value.length !== 2){
            const errorMm_yy = document.getElementById('errorMm_yy');
            mm_yy.style.border = '1px solid red';
            errorMm_yy.style.display = 'block';
            return;
    }else if(mm_yy.value.length == 2){
        const errorMm_yy = document.getElementById('errorMm_yy');
        mm_yy.style.border = '1px solid black';
        errorMm_yy.style.display = 'none';
    }


    if(cvc.value.length < 3){
            const errorCvc = document.getElementById('errorCvc');
            cvc.style.border = '1px solid red';
            errorCvc.style.display = 'block';
            return;
    } else if (cvc.value.length > 3){
        const errorCvc = document.getElementById('errorCvc');
        cvc.style.border = '1px solid black';
        errorCvc.style.display = 'none';
    }

        containerData.style.display = 'none'
        thank.style.display = 'flex'
})

const btnContinue = document.getElementById('btnContinue')

btnContinue.addEventListener('click', (e) => {
    e.preventDefault()

    containerData.style.display = 'block'
    thank.style.display = 'none'

})