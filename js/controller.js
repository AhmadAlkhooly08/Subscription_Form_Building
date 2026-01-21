import * as View from './AllView'
import { AllData } from './model';
class Form{
    _container = document.querySelector('.container-forms')
    _StepNum = document.querySelectorAll('#Steps')
    _firstStep = document.querySelector('.step-1');
    _nextBtn;
    #StepNumber =1;

    constructor(){
        this.renderFirstView();
        this.events();
        // this._nextBtn.addEventListener('click',this.NextBtn.bind(this));
    }
    renderStepActive(){
        this._StepNum.forEach(e=> e.classList.remove('active'))
        this._StepNum[this.#StepNumber - 1].classList.add('active')
    }
    renderStepsBtn(btnName,type,func){
        const Btn = document.querySelector(btnName);
        Btn.addEventListener(type,func)
    }

    renderFirstView(){
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
            this.renderStepActive();
        }
    }
    renderNext(){
        if(this.#StepNumber >= 1 && this.#StepNumber < 4) this.NextBtn++;
        this.renderFirstView();
    }
    renderBack(){
        console.log(this.#StepNumber);
        if(this.#StepNumber >= 1) this.#StepNumber--;
        console.log(this.#StepNumber);
        this.renderFirstView();
        console.log(AllData);
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
            data.push(inpName.value)
        }

        //! Check if email is valid
        if(!inpEmail.value.includes('@gmail.com') || inpEmail.value == '@gmail.com'){
            inp_errorEmail.classList.remove('invisible');
            inpEmail.classList.add('required')
        }else{
            inp_errorEmail.classList.add('invisible');
            inpEmail.classList.remove('required');
            data.push(inpEmail.value)

        }

        //! Check if number is valid
        if(!Number(inpPhone.value) || inpPhone.value.length < 10 || inpPhone.value.length > 11){
            inp_errorPhone.classList.remove('invisible');
            inpPhone.classList.add('required')
        }else{
            inp_errorPhone.classList.add('invisible');
            inpPhone.classList.remove('required');
            data.push(inpPhone.value)
        }
        console.log(data.length);
        //? If valid Next Step
        // if(data.length === 3){
        //     data.forEach((e,i)=>{
        //         return AllData[keys[i]] = e;
        //     })
        //     console.log(AllData);
        //     this.#StepNumber = 2;
        //     this.renderFirstView()
        // }
        this.#StepNumber = 2;
        this.renderFirstView()

    }

    submitNextView(){
        
    }
}
new Form();