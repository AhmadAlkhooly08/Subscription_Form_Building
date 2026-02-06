
export const firstView = function(){
    return`
        <div class="flex flex-col items-center space-y-8 w-full mt-10 ">
            <div class="space-y-3 w-[65%] max-sm:w-full">
                <h1 class="text-[#032B57] text-3xl font-bold font-sans dark:text-white">Personal info</h1>
                <p class="text-[#9d9ea4] text-sm dark:text-[#d3d5de]">Please provide your name, email address, and phone number.</p>
            </div>
            <form id='form' class="space-y-5 h-full w-[65%] max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center" action="">
                <div class="space-y-2 max-sm:w-[90%]">
                    <div id='text-required' class="flex justify-between">
                        <p class="text-[#032B57] text-sm dark:text-white">Name</p>
                        <p id='inp-errorName' class="inp-error text-red-500 text-sm invisible">enter your name please</p>
                    </div>
                    <input id='inp-name' class="inp-style" type="text">
                </div>
                <div class="space-y-2 max-sm:w-[90%]">
                    <div class="flex justify-between">
                        <p class="text-[#032B57] text-sm dark:text-white">Email Address</p>
                        <p id='inp-errorEmail' class="text-red-500 text-sm invisible">Please enter a valid email</p>
                    </div>

                    <input id='inp-email' class="inp-style" type="text">
                </div>
                <div class="space-y-2 max-sm:w-[90%]">
                    <div class="flex justify-between">
                        <p class="text-[#032B57] text-sm dark:text-white">Phone Number</p>
                        <p id='inp-errorPhone' class="text-red-500 text-sm invisible">Please enter a valid number</p>
                    </div>
                    <input id='inp-phone' class="inp-style" type="text">
                </div>

                <div class="flex items-end justify-end mt-13 max-sm:absolute max-sm:bottom-0 max-sm:w-screen max-sm:bg-white max-sm:p-7 max-sm:dark:bg-[#333232]">
                    <input type="submit" value="Next Step" class="btn-next">
                </div>
            </form>
        </div>
    `
}

export const SecondView = function(){
    return`
        <div class="flex flex-col items-center  space-y-8 w-full sm:mt-10 max-sm:mt-5">
            
            <div class="space-y-3 flex flex-col items-start w-[80%] max-sm:w-full">
                <h1 class="text-[#032B57] text-3xl font-bold font-sans dark:text-white">Select your plan</h1>
                <p class="text-[#9d9ea4] text-sm dark:text-[#d3d5de]">You have the option of monthly or yearly billing.</p>
            </div>

            <div id='sub-btns' class="grid grid-cols-3 justify-items-center gap-8 w-[80%] max-sm:w-full max-sm:flex max-sm:flex-col">

                <div>
                    <button id='sub-btn' class="Arcade sub-btn sub-active">
                        <div class="">
                            <img class="w-13 max-sm:w-10" src="./assets/images/icon-arcade.svg" alt="">
                        </div>
                        <div class="flex flex-col items-start max-sm:pl-4">
                            <h1 id='type-sub' class="text-[#032B57] text-xl font-bold dark:text-white">Arcade</h1>
                            <p id='price-sub' class=" text-[#9d9ea4] text-sm dark:text-[#d3d5de]">$9/mon</p>
                            <p class="text-year text-[#032B57] text-xs font-light hidden dark:text-white">2 months free</p>
                        </div>
                    </button>
                </div>

                <div>
                    <button id='sub-btn' class="Advanced sub-btn">
                        <div class="">
                            <img class="w-13 max-sm:w-10" src="./assets/images/icon-advanced.svg" alt="">
                        </div>    

                        <div class="flex flex-col items-start max-sm:pl-4">
                            <h1 id='type-sub' class="text-[#032B57] text-xl font-bold dark:text-white">Advanced</h1>
                            <p id='price-sub' class=" text-[#9d9ea4] text-sm dark:text-[#d3d5de]">$12/mon</p>
                            <p class="text-year text-[#032B57] text-xs font-light hidden dark:text-white">2 months free</p>

                        </div>
                    </button>
                </div>
                <div class="">
                    <button id='sub-btn' class="Pro sub-btn">
                        <div>
                            <img class="w-13 max-sm:w-10" src="./assets/images/icon-pro.svg" alt="">
                        </div>

                        <div class="flex flex-col items-start max-sm:pl-4">
                            <h1 id='type-sub' class="text-[#032B57] text-xl font-bold dark:text-white">Pro</h1>
                            <p id='price-sub' class=" text-[#9d9ea4] text-sm dark:text-[#d3d5de]">$15/mon</p>
                            <p class="text-year text-[#032B57] text-xs font-light hidden dark:text-white">2 months free</p>
                        </div>
                    </button>
                </div>
            </div>

            <div class="flex justify-center items-center space-x-3 bg-[#f8f9fe] rounded-lg p-2 w-[80%] dark:bg-[#174a8a] max-sm:w-full">
                <h2 id='monthly' class="monthly activeSubType">Monthly</h2>
                <label class="relative cursor-pointer">
                    <input type="checkbox" id='checkbox' class="sr-only peer">
                    <div class="bg-[#032B57] rounded-full w-9 h-5 transition-all"></div>
                    <div class="absolute top-0.5 left-0.5  bg-white rounded-full w-4 h-4  peer-checked:translate-x-4 transition-transform duration-300"></div>
                </label>
                <h2 id='yearly' class="yearly unActiveSubType">yearly</h2>
            </div>

            <div class="flex justify-between items-center mt-8 w-[80%] max-sm:absolute max-sm:bottom-0 max-sm:w-screen max-sm:bg-white max-sm:p-7 max-sm:dark:bg-[#333232]">
                <button id ='btn-Back' class="back-btn ">Go Back</button>
                <button id ='Next-Btn' class="btn-next px-4 py-2 text-lg">Next Step</button>
            </div>
        </div>
    `
}
export const ThirdView = function(){
    return`
        <div class="flex flex-col items-center mt-10 space-y-8 w-full">
            <div class="flex flex-col items-start space-y-3 w-[70%] max-sm:w-full">
                <h1 class="text-[#032B57] text-3xl font-bold font-sans text-start dark:text-white">Pick add-ons</h1>
                <p class="text-[#9d9ea4] text-sm dark:text-[#d3d5de]">Add-ons help enhance your gaming experience.</p>
            </div>

            <div id='add-one-container' class="space-y-4 w-[70%] max-sm:w-full">
                <div id='add-one-box' class="add-one">
                    <div class="flex items-center">
                        <input id='add-one-check' type="checkbox" class="size-4 accent-[#483CFF]">
                        <div class="flec flex-col ml-4">
                            <h1 id='add-one-type' class="text-[#032B57] font-bold font-sans dark:text-white">Online service</h1>
                            <p class="text-[#9d9ea4] text-sm dark:text-[#d3d5de]">Access to multiplayer games</p>
                        </div>
                    </div>
                    <div>
                        <h1 id='add-price' class="text-[#746FC9] dark:text-purple-400">+$1/mo</h1>
                    </div>
                </div>
                <div id='add-one-box' class="add-one">
                    <div class="flex items-center">
                        <input id='add-one-check' type="checkbox" class="size-4 accent-[#483CFF]">
                        <div class="flec flex-col ml-4">
                            <h1 id='add-one-type' class="text-[#032B57] font-bold font-sans dark:text-white">Larger storage</h1>
                            <p class="text-[#9d9ea4] text-sm dark:text-[#d3d5de]">Extra 1TB of cloud save</p>
                        </div>
                    </div>
                    <div>
                        <h1 id='add-price' class="text-[#746FC9] dark:text-purple-400">+$2/mo</h1>
                    </div>
                </div>
                <div id='add-one-box' class="add-one">
                    <div class="flex items-center">
                        <input id='add-one-check' type="checkbox" class="size-4 accent-[#483CFF]">
                        <div class="flec flex-col ml-4">
                            <h1 id='add-one-type' class="text-[#032B57] font-bold font-sans dark:text-white">Customizable Profile</h1>
                            <p class="text-[#9d9ea4] text-sm dark:text-[#d3d5de]">Custom theme on your profile</p>
                        </div>
                    </div>
                    <div>
                        <h1 id='add-price' class="text-[#746FC9] dark:text-purple-400">+$2/mo</h1>
                    </div>
                </div>
            </div>

            <div class="flex justify-between items-center mt-5 w-[70%] max-sm:absolute max-sm:bottom-0 max-sm:w-screen max-sm:bg-white max-sm:dark:bg-[#333232] max-sm:p-7">
                <button id ='btn-Back' class="btn-Back back-btn">Go Back</button>
                <button id = 'Next-Btn' class="btn-next px-4 py-2 text-lg">Next Step</button>
            </div>
        </div>
    `
}
export const ForthView = function(){
    return`
        <div class="flex flex-col items-center mt-10 space-y-8 w-full h-[90%]">
            <div class="flex flex-col items-start space-y-3 w-[70%] max-sm:w-full">
                <h1 class="text-[#032B57] text-3xl font-bold font-sans text-start dark:text-white">Finishing up</h1>
                <p class="text-[#9d9ea4] text-sm dark:text-[#d3d5de]">Double-check everything looks OK before confirming.</p>
            </div>

            <div id='TotalPrice' class="flex flex-col items-center w-[70%] max-sm:w-full">
                <div class=" p-3 w-full bg-[#F8F9FE] rounded-lg dark:bg-[#174a8a]">
                    <div class="flex justify-between items-center w-full border-b-1 border-b-[#9d9ea4] p-3">
                        <div class="flex flex-col items-start">
                            <h1 class="text-[#032B57] dark:text-white">Arcade (Monthly)</h1>
                            <button id='change-Sub' class="bg-transparent text-purple-600 hover:underline cursor-pointer">Change</button>
                        </div>
                        <h1 class="text-[#032B57] font-bold dark:text-[#d3d5de]">$9/mo</h1>
                    </div>

                    <div class="flex justify-between items-center w-full mt-5 p-3">
                        <p class="text-[#9d9ea4]">Online service</p>
                        <h2 class="text-[#032B57]">+$1/mo</h2>
                    </div>
                    <div class="flex justify-between items-center w-full p-3">
                        <p class="text-[#9d9ea4]">Larger storage</p>
                        <h2 class="text-[#032B57]">+$2/mo</h2>
                    </div>
                </div>

                <div class="flex justify-between items-center w-[90%] pt-3">
                    <p class="text-[#9d9ea4]">Total (per month)</p>
                    <h2 class="text-purple-600 text-lg">+$12/mo</h2>
                </div>
            </div>
            <div class="flex items-end h-full w-[70%] max-sm:justify-center">
                <div class="flex justify-between items-center w-full max-sm:absolute max-sm:bottom-0 max-sm:w-screen max-sm:bg-white max-sm:dark:bg-[#333232] max-sm:p-7">
                    <button id ='btn-Back' class="btn-Back back-btn">Go Back</button>
                    <button id ='confirm-Btn' class="btn-next px-5 py-2 text-lg bg-[#726ae3] hover:bg-[#938cfe]">Confirm</button>
                </div>
            </div>
        </div>
    `
}