import { saveData, saveDataForDiscordUsers } from "../firebase/firebase";
import sendinblue from "../Utils/email";

export const checkLogoUtil = (status) => {
  return status === "done"
    ? "/check-circle-done.svg"
    : status === "inProgress"
    ? "/check-circle-progress.svg"
    : "/circle.svg";
};

export const getPlatform = (questionLink) => {
  const platforms = [
    "codechef",
    "leetcode",
    "geeksforgeeks",
    "spoj",
    "hackerearth",
  ];
  platforms.find((platform) => questionLink.includes(platform));
  return (
    <span className="tag is-primary is-light">
      {platforms.find((platform) => questionLink.includes(platform))}
    </span>
  );
};

export const submitQuestionLink = (e) => {
  e.preventDefault();
  if (/\S/.test(e.target[0].value)) {
    try {
      new URL(e.target[0].value);
      saveData(e.target[0].value);
      e.target[0].value = " ";
      sendinblue();
    } catch (_) {
      console.log("Not a valid URL");
      e.target[0].value = " ";
    }
  }
};

export const switchStatus = (status) => {
  if (status === "done") {
    return (status = "yetToAttempt");
  } else if (status === "yetToAttempt") {
    return (status = "inProgress");
  } else {
    return (status = "done");
  }
};

export const getQuestionSolved = (problems) => {
  const users = ["atharva", "sumit", "yash"];
  const data = {};
  users.forEach((user) => {
    Object.assign(data, {
      [user]: problems.filter((problem) => problem[user].status === "done")
        .length,
    });
  });

  return data;
};

// DISCORD USERS CONSTANTS
export const users=["Sumit", "Vaishnavi"]
export const refPathForFirebase = "discordProblems"

export const submitQuestionLinkForDiscordUsers = (e) => {
  e.preventDefault();
  if (/\S/.test(e.target[0].value)) {
    try {
      new URL(e.target[0].value);
      saveDataForDiscordUsers(e.target[0].value);
      e.target[0].value = " ";
      sendinblue();
    } catch (_) {
      console.log("Not a valid URL");
      e.target[0].value = " ";
    }
  }
};

export const getQuestionSolvedForDiscordUsers = (problems) => {
  const data = {};
  users.forEach((user) => {
    Object.assign(data, {
      [user]: problems.filter((problem) => problem[user].status === "done")
        .length,
    });
  });

  return data;
};