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
            this._container.innerHTML = '';
            this._container.innerHTML = View.firstView();
            this.renderStepsBtn('#form','submit',this.submitFirstView.bind(this));
            this.renderStepActive();
        }
        if(this.#StepNumber === 2){
            this._container.innerHTML = '';
            this._container.innerHTML = View.SecondView();
            this.renderStepsBtn('#btn-Back','click',this.renderBack.bind(this))
            this.renderStepsBtn('#Next-Btn','click',this.renderNext.bind(this))
            this.renderStepsBtn('#sub-btns','click',this.checkPlan.bind(this))
            this.renderStepsBtn('#checkbox','change',this.switchSub.bind(this))
            this.renderStepActive();
        }
        if(this.#StepNumber === 3){
            this._container.innerHTML = '';
            this._container.innerHTML = View.ThirdView();
            this.renderStepsBtn('#btn-Back','click',this.renderBack.bind(this))
            this.renderStepsBtn('#add-one-container','click',this.addOnesBox.bind(this))
            this.renderStepsBtn('#Next-Btn','click',this.renderNext.bind(this))

            this.renderStepActive();
        }
        if(this.#StepNumber === 4){
            this._container.innerHTML = '';
            this._container.innerHTML = View.ForthView();
            this.adjustForthView();
            this.renderStepsBtn('#btn-Back','click',this.renderBack.bind(this))
            this.renderStepActive();
        }

    }
    renderNext(){
        if(this.#StepNumber === 2 && !AllData.SubscriptionType){
            AllData.SubscriptionType = 'Arcade';
            AllData.SubscriptionPrice = '$9/mo';
            AllData.SubscriptionPriceNum = 9;
        }

        if(this.#StepNumber === 2 && !AllData.SubscriptionDuration){
            AllData.SubscriptionDuration = 'Monthly';
        }
        // if(this.#StepNumber === 3 && this._data){
        //     let AllBtns = document.querySelectorAll('#add-one-box');
        //     AllBtns.forEach(el=>{
        //         if(el.classList.contains('sub-active')){
        //             const typePrice = el.querySelector('#add-price')
        //             const type = el.querySelector('#add-one-type')
        //             const num = typePrice.innerText.match(/(\d+)/)
        //             // this._data = [];
        //             this._data.push([type.innerText,typePrice.innerText,+num[0]]);
        //         }

        //     })
        // }
        if(this.#StepNumber >= 1 && this.#StepNumber < 4) this.#StepNumber++;
        this.renderView();
        this.reGenerateThirdView();
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
        if(this.#StepNumber === 2) this.reGeneratesecondView();

        this.reGenerateThirdView();
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
    reGenerateThirdView(){
        if(this.#StepNumber === 3){
            if(AllData.SubscriptionDuration == 'Yearly') this.changeToYearlyNum('#add-price','+')
            const Allboxes = Array.from(document.querySelectorAll('#add-one-box'));
            this._data.forEach(e=>{
                Allboxes.forEach(el=>{
                    if(el.querySelector('#add-one-type').innerText == e[0]){
                        const checkbox = el.querySelector('#add-one-check');
                        el.classList.add('sub-active')
                        checkbox.checked = true;
                    }
                })
            })
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
        const adjustSubInfo = function(type){
            const btn = document.querySelector(type);
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
            if(AllData.SubscriptionType) adjustSubInfo(`.${AllData.SubscriptionType}`);
            if(!AllData.SubscriptionType) adjustSubInfo('.Arcade');
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
            if(AllData.SubscriptionType) adjustSubInfo(`.${AllData.SubscriptionType}`);
        } 
        console.log(AllData);
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

    _data=[];
    addOnesBox(e){
        const box = e.target.closest('#add-one-box');
        if(!box) return;
        const checkBox = box.querySelector('#add-one-check');
        let type = box.querySelector('#add-one-type')
        let typePrice = box.querySelector('#add-price')

        if(box){
            box.classList.toggle('sub-active')
            if(box.classList.contains('sub-active')){
                checkBox.checked = true;
                const num = typePrice.innerText.match(/(\d+)/)
                this._data.push([type.innerText,typePrice.innerText,+num[0]])  
            }
            if(!box.classList.contains('sub-active')){
                checkBox.checked = false;
                const find = type.innerText;
                let filtered = this._data.filter(el=> el[0] !== find)
                this._data = filtered;
            }
        }
        AllData.AddOnes = this._data;
        console.log(AllData);
    }

    adjustForthView(){
        const totalPrice = document.querySelector('#TotalPrice');
        totalPrice.innerHTML = '';
        totalPrice.innerHTML = this.ForthViewHtml();
        console.log(this.dataSum());
    }
    dataSum(){
        if(AllData.AddOnes){
            const addOneNum = AllData.AddOnes.map(e => +e.slice(-1)).reduce((prev,el) => prev + el,0)
            console.log(addOneNum);
            AllData.Total = addOneNum + AllData.SubscriptionPriceNum;
            return AllData.Total
        }else return AllData.Total = AllData.SubscriptionPriceNum;

    }
    ForthViewHtml(){
        return`
            <div class=" p-3 w-full bg-[#F8F9FE] rounded-lg">
                <div class="flex justify-between items-center w-full border-b-1 border-b-[#9d9ea4] p-3">
                    <div class="flex flex-col items-start">
                        <h1 class="text-[#032B57]">${AllData.SubscriptionType}(${AllData.SubscriptionDuration})</h1>
                        <button class="bg-transparent text-purple-600 hover:underline cursor-pointer">Change</button>
                    </div>
                    <h1 class="text-[#032B57] font-bold">${AllData.SubscriptionPrice}</h1>
                </div>
                ${this.returnForEachPlusSub()}
            </div>

            <div class="flex justify-between items-center w-[90%] pt-3">
                <p class="text-[#9d9ea4]">Total (per ${AllData.SubscriptionDuration == 'Monthly' ? 'Month' : 'Year'})</p>
                <h2 class="text-purple-600 text-lg">+$${this.dataSum()}/${AllData.SubscriptionDuration == 'Monthly' ? 'mon' : 'yr'}</h2>
            </div>

        `
    }

    returnForEachPlusSub(){
        const addones = this._data.map(el =>{
            return ` 
                <div class="flex justify-between items-center w-full mt-1 p-3">
                    <p class="text-[#9d9ea4]">${el[0]}</p>
                    <h2 class="text-[#032B57]">${el[1]}</h2>
                </div>
            `
        }).join('')
        return addones
    }
}
new Form();