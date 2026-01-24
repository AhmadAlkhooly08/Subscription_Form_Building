import * as View from './AllView'
import { AllData } from './model';
class Form{
    _container = document.querySelector('.container-forms')
    _StepNum = document.querySelectorAll('#Steps')
    _firstStep = document.querySelector('.step-1');
    _nextBtn;
    #StepNumber =1;

    constructor(){
        this.renderView();
    }
    renderStepActive(){
        this._StepNum.forEach(e=> e.classList.remove('active'))
        this._StepNum[this.#StepNumber - 1].classList.add('active')
    }
    renderStepsBtn(btnName,type,func){
        const Btn = document.querySelector(btnName);
        Btn.addEventListener(type,func)
    }

    renderView(){
        this._firstStep.classList.add('active');
        if(this.#StepNumber === 1){
            console.log(this.#StepNumber);
            this._container.innerHTML = '';
            this._container.innerHTML = View.firstView();
            this.renderStepsBtn('#form','submit',this.submitFirstView.bind(this));
            this.renderStepActive();
        }
        if(this.#StepNumber === 2){
            console.log(this.#StepNumber);
            this._container.innerHTML = '';
            this._container.innerHTML = View.SecondView();
            this.renderStepsBtn('#btn-Back','click',this.renderBack.bind(this))
            this.renderStepsBtn('#Next-Btn','click',this.renderNext.bind(this))
            this.renderStepsBtn('#sub-btns','click',this.checkPlan.bind(this))
            this.renderStepsBtn('#checkbox','change',this.switchSub.bind(this))
            this.renderStepActive();
        }
        if(this.#StepNumber === 3){
            console.log(this.#StepNumber);
            this._container.innerHTML = '';
            this._container.innerHTML = View.ThirdView();
            this.renderStepsBtn('#btn-Back','click',this.renderBack.bind(this))
            this.renderStepsBtn('#add-one-container','click',this.addOnesBox.bind(this))
            // this.renderStepsBtn('#Next-Btn','click',this.renderNext.bind(this))

            this.renderStepActive();
        }

    }
    renderNext(){
        if(this.#StepNumber === 2 && !AllData.SubscriptionType){
            AllData.SubscriptionDuration = 'Monthly';
            AllData.SubscriptionType = 'Arcade';
            AllData.SubscriptionPrice = '$9/mo';
            AllData.SubscriptionPriceNum = 9;
        }

        if(this.#StepNumber === 2 && !AllData.SubscriptionDuration){
            AllData.SubscriptionDuration = 'Monthly';
        }
        if(this.#StepNumber >= 1 && this.#StepNumber < 4) this.#StepNumber++;
        this.renderView();
        if(this.#StepNumber === 3 && AllData.SubscriptionDuration == 'Yearly') this.changeToYearlyNum('#add-price','+')
        console.log(AllData);
    }
    renderBack(){
        if(this.#StepNumber >= 1) this.#StepNumber--;
        this.renderView();
        console.log(AllData);
        if(this.#StepNumber === 1){
            const inpName = document.querySelector('#inp-name');
            const inpEmail = document.querySelector('#inp-email');
            const inpPhone = document.querySelector('#inp-phone');
            inpName.value = AllData.name;
            inpEmail.value = AllData.email;
            inpPhone.value = AllData.phone;
        }
        if(this.#StepNumber === 2) this.reGeneratesecondView()
    }
    submitFirstView(e){
        e.preventDefault();
        const inpName = document.querySelector('#inp-name');
        const inpEmail = document.querySelector('#inp-email');
        const inpPhone = document.querySelector('#inp-phone');
        const inp_errorName = document.querySelector('#inp-errorName')
        const inp_errorEmail = document.querySelector('#inp-errorEmail')
        const inp_errorPhone = document.querySelector('#inp-errorPhone');
        const keys = ['name','email','phone']
        const data=[];
        console.log(inpPhone.value.length,Number(inpPhone.value));   

        //! Check if Name is valid
        if(inpName.value.length < 2 || Number(inpName.value)){
            inp_errorName.classList.remove('invisible');
            inpName.classList.add('required')
        }else{
            inp_errorName.classList.add('invisible');
            inpName.classList.remove('required');
            data[0] = inpName.value
        }

        //! Check if email is valid
        if(!inpEmail.value.includes('@gmail.com') || inpEmail.value == '@gmail.com'){
            inp_errorEmail.classList.remove('invisible');
            inpEmail.classList.add('required')
        }else{
            inp_errorEmail.classList.add('invisible');
            inpEmail.classList.remove('required');
            data[1] = inpEmail.value

        }

        //! Check if number is valid
        if(!Number(inpPhone.value) || inpPhone.value.length < 10 || inpPhone.value.length > 11){
            inp_errorPhone.classList.remove('invisible');
            inpPhone.classList.add('required')
        }else{
            inp_errorPhone.classList.add('invisible');
            inpPhone.classList.remove('required');
            data[2] = inpPhone.value;
        }
        const adjustData = data.filter(e=> e !== '')
        console.log(adjustData);
        //? If valid Next Step
        // if(adjustData.length === 3){
            data.forEach((e,i)=>{
                return AllData[keys[i]] = e;
            })
            console.log(AllData);
            this.#StepNumber = 2;
            this.renderView()
            this.reGeneratesecondView()
        // }
        // this.#StepNumber = 2;
        // this.renderView()

    }

    changeToYearlyNum(val,plus = undefined){
        const allPrice =  document.querySelectorAll(val);
        allPrice.forEach(e=>{
            let num = e.innerText.match(/(\d+)/)
            if(!num[0].includes('0')){
                let yearlyNum =  +num[0] + '0'
                return e.innerText = `${plus ? plus : ''}$${yearlyNum}/уг`;
            }
        })
    }
    reGeneratesecondView(){
        if(AllData.SubscriptionType){
            const allBtns = document.querySelectorAll('#sub-btn');
            const btn = document.querySelector(`.${AllData.SubscriptionType}`);
            allBtns.forEach(e=> e.classList.remove('sub-active'))
            btn.classList.add('sub-active');
    
            let unceheck = document.querySelector('#checkbox');
            if(AllData.SubscriptionDuration == 'Monthly') unceheck.checked = false;
    
            if(AllData.SubscriptionDuration == 'Yearly'){
                const textYearly = document.querySelectorAll('.text-year')
                this.changeToYearlyNum('#price-sub')
                textYearly.forEach(e=> e.classList.remove('hidden'))
                unceheck.checked = true;
            }
        }else{
            return '';
        }
    }
    switchSub(e){
        const monthly = document.querySelector('.monthly')
        const yearly = document.querySelector('.yearly')
        let check = e.target.checked;
        const textYearly = document.querySelectorAll('.text-year')
        // console.log(check ? 'yearly' : 'monthly');
        const adjustSub = function(class1,class2){
            monthly.classList.remove(class1)
            monthly.classList.add(class2)
            yearly.classList.remove(class2)
            yearly.classList.add(class1)
        }
        const adjustSubInfo = function(){
            const btn = document.querySelector(`.${AllData.SubscriptionType}`);
            const typeSub = btn.querySelector('#type-sub');
            const price = btn.querySelector('#price-sub');
            const priceNum = price.innerText.match(/(\d+)/);
            AllData.SubscriptionType = typeSub.innerText;
            AllData.SubscriptionPrice = price.innerText;
            AllData.SubscriptionPriceNum = +priceNum[0];

        }
        if(check){
            adjustSub('ActiveSubType','unActiveSubType')
            this.changeToYearlyNum('#price-sub')
            textYearly.forEach(e=> e.classList.remove('hidden'))
            AllData.SubscriptionDuration = 'Yearly';
            if(AllData.SubscriptionType) adjustSubInfo();
        } 
        if(!check){
            adjustSub('unActiveSubType','ActiveSubType')
            const allPrice =  document.querySelectorAll('#price-sub');
            allPrice.forEach(e=>{
                let num = e.innerText.match(/(\d+)/)
                if(num[0].includes('0')){
                    let yearlyNum =  +num[0].slice(0,-1)
                    return e.innerText = `$${yearlyNum}/mon`;
                }
            })            
            textYearly.forEach(e=> e.classList.add('hidden'))
            AllData.SubscriptionDuration = 'Monthly';
            if(AllData.SubscriptionType) adjustSubInfo();

        } 
    }
    checkPlan(e){
        const allBtns = document.querySelectorAll('#sub-btn');
        const btn = e.target.closest('#sub-btn');
        const typeSub = e.target.closest('#sub-btn').querySelector('#type-sub');
        const price = e.target.closest('#sub-btn').querySelector('#price-sub');
        const priceNum = price.innerText.match(/(\d+)/);
        console.log(typeSub.innerText,price.innerText);

        allBtns.forEach(e => e.classList.remove('sub-active'))
        btn.classList.add('sub-active')

        const data = [];
        AllData.SubscriptionType = typeSub.innerText;
        AllData.SubscriptionPrice = price.innerText;
        AllData.SubscriptionPriceNum = +priceNum[0];
        AllData.SubclickedBtn = btn;
        console.log(AllData);
    }

    addOnesBox(e){
        const box = e.target.closest('#add-one-box');
        const checkBox = e.target.closest('#add-one-check');
        if(!checkBox) return;
        let data=[];
        if(checkBox.checked){
            box.classList.add('sub-active')
            const type = box.querySelector('#add-one-type')
            const typePrice = box.querySelector('#add-price')
            data += data.push([type.innerText,typePrice.innerText])
            console.log(data);
        }
        if(!checkBox.checked){
            box.classList.remove('sub-active')
        }
    }
}
new Form();