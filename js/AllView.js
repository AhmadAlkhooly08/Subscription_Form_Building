
export const firstView = function(){
    return`
        <div class="flex flex-col items-center space-y-8 w-full mt-10">
            <div class="space-y-3 w-[65%]">
                <h1 class="text-[#032B57] text-3xl font-bold font-sans">Personal info</h1>
                <p class="text-[#9d9ea4] text-sm">Please provide your name, email address, and phone number.</p>
            </div>
            <form id='form' class="space-y-5 h-full w-[65%]" action="">
                <div class="space-y-2">
                    <div id='text-required' class="flex justify-between">
                        <p class="text-[#032B57] text-sm">Name</p>
                        <p id='inp-errorName' class="inp-error text-red-500 text-sm invisible">enter your name please</p>
                    </div>
                    <input id='inp-name' class="inp-style" type="text">
                </div>
                <div class="space-y-2">
                    <div class="flex justify-between">
                        <p class="text-[#032B57] text-sm">Email Address</p>
                        <p id='inp-errorEmail' class="text-red-500 text-sm invisible">Please enter a valid email</p>
                    </div>

                    <input id='inp-email' class="inp-style" type="text">
                </div>
                <div class="space-y-2">
                    <div class="flex justify-between">
                        <p class="text-[#032B57] text-sm">Phone Number</p>
                        <p id='inp-errorPhone' class="text-red-500 text-sm invisible">Please enter a valid number</p>
                    </div>
                    <input id='inp-phone' class="inp-style" type="text">
                </div>

                <div class="flex items-end justify-end mt-13">
                    <input type="submit" value="Next Step" class="btn-next">
                </div>
            </form>
        </div>
    `
}

export const SecondView = function(){
    return`
        <div class="flex flex-col items-center  space-y-8 w-full mt-10">
            
            <div class="space-y-3 flex flex-col items-start w-[80%]">
                <h1 class="text-[#032B57] text-3xl font-bold font-sans">Select your plan</h1>
                <p class="text-[#9d9ea4] text-sm">You have the option of monthly or yearly billing.</p>
            </div>

            <div class="grid grid-cols-3 justify-items-center gap-8 w-[80%]">

                <div class="">
                    <button class="sub-btn sub-active">
                        <img class="w-13" src="./assets/images/icon-arcade.svg" alt="">

                        <div class="flex flex-col items-start">
                            <h1 class="text-[#032B57] text-xl font-bold">Arcade</h1>
                            <p class="text-[#9d9ea4] text-sm">$9/mon</p>
                            <p class="text-year text-[#032B57] text-xs font-light hidden">2 months free</p>
                        </div>
                    </button>
                </div>

                <div class="">
                    <button class="sub-btn">
                        <img class="w-13" src="./assets/images/icon-advanced.svg" alt="">

                        <div class="flex flex-col items-start">
                            <h1 class="text-[#032B57] text-xl font-bold">Advanced</h1>
                            <p class="text-[#9d9ea4] text-sm">$12/mon</p>
                            <p class="text-year text-[#032B57] text-xs font-light hidden">2 months free</p>

                        </div>
                    </button>
                </div>
                <div class="">
                    <button class="sub-btn">
                        <img class="w-13" src="./assets/images/icon-pro.svg" alt="">

                        <div class="flex flex-col items-start">
                            <h1 class="text-[#032B57] text-xl font-bold">Pro</h1>
                            <p class="text-[#9d9ea4] text-sm">$15/mon</p>
                            <p class="text-year text-[#032B57] text-xs font-light hidden">2 months free</p>
                        </div>
                    </button>
                </div>
            </div>

            <div class="flex justify-center items-center space-x-3 bg-[#f8f9fe] rounded-lg p-2 w-[80%]">
                <h2 class="text-[#032B57] text-bold">Monthly</h2>
                <label class="relative cursor-pointer">
                    <input type="checkbox" class="sr-only peer">
                    <div class="bg-[#032B57] rounded-full w-9 h-5 transition-all"></div>
                    <div class="absolute top-0.5 left-0.5  bg-white rounded-full w-4 h-4  peer-checked:translate-x-4 transition-transform duration-300"></div>
                </label>
                <h2 class="text-[#9d9ea4] text-bold peer-checked:text-[#032B57]">yearly</h2>
            </div>

            <div class="flex justify-between items-center mt-8 w-[80%]">
                <button id ='btn-Back' class="back-btn">Go Back</button>
                <button id ='Next-Btn' class="btn-next px-4 py-2 text-lg">Next Step</button>
            </div>
        </div>
    `
}