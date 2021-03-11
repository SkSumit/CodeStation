import { saveData } from "../firebase/firebase";

export const checkLogoUtil = (status) => {
  return status === "done"
    ? "/check-circle-done.svg"
    : status === "inProgress"
    ? "/check-circle-progress.svg"
    : "/circle.svg";
};

export const getPlatform = (questionLink) => {
  const platforms  = ["codechef", "leetcode", 'geeksforgeeks'] 
  platforms.find((platform)=> questionLink.includes(platform))
  return <span className="tag is-primary is-light">{ platforms.find((platform)=> questionLink.includes(platform))}</span>;
};

export const submitQuestionLink = (e) => {
  e.preventDefault();
  if (/\S/.test(e.target[0].value)) {
    try {
      new URL(e.target[0].value);
      saveData(e.target[0].value);
      e.target[0].value = " ";
    } catch (_) {
      console.log("Not a valid URL");
      e.target[0].value = " ";
    }
  }
};

export const switchStatus = (status) => {
  if(status === 'done' ){
     return status = "yetToAttempt"
  }else if (status === 'yetToAttempt'){
    return status = "inProgress"
  }else{
    return status = 'done' 
  }
}
