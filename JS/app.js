/* ===================== Solution ===================== */

// যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। :) Done
const h2 = document.getElementsByTagName("h2");
for (const x of h2) {
  x.style.color = "darkblue";
}

// ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা।
document.getElementById("backpack").style.backgroundColor = "tomato";

// card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস 22px করে দিতে পারো কিনা
const card = document.getElementsByClassName("card");
for (const x of card) {
  x.style.borderRadius = "22px";
}

// কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো
function myFunction() {
  console.log("helooooooooooooooooooo");
}

// এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো।

const btn = document.getElementsByClassName("btn");

for (const x of btn) {
  x.addEventListener("click", (ev) => {
    ev.target.style.display = "none";
  });
}

/*  ***********************************************************************************************************************************************************
একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 
************************************************************************************************************************************************************ */
const ipt = document.getElementById("input");
const t_Btn = document.getElementById("send-btn");

ipt.addEventListener("keyup", (ev) => {
  if (ev.target.value == "riyad@gmail.com") {
    t_Btn.removeAttribute("disabled");
  } else {
    t_Btn.setAttribute("disabled", true);
  }
});

/* ***********************************************************************************************************************************************
 একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে 
 ********************************************************************************************************************************************** */

//  Here src is an attribute 

document.getElementById("change").addEventListener("mouseenter", (ev) => {
  ev.target.src = "../Images/bags/bag-1.png";
});
document.getElementById("change").addEventListener("mouseout", (ev) => {
  ev.target.src = "../Images/bags/bag-3.png";
});

/* নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে।  */
document.getElementById("input").addEventListener("dblclick", (ev) => {
  document.getElementById("bg").style.backgroundColor = "cyan";
  
});


// ############# Extra Silly Task #############
// Task 1 
console.log(document.getElementById("see"))

// Task 2 
const bag = document.getElementsByClassName("bags");

for(const x of bag){
  x.addEventListener("click", () => {
    x.innerText = "BackPack"
  })
  x.addEventListener("dblclick", () => {
    x.innerText = "Bags"
  })
}