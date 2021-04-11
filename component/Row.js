import React from "react";
import Image from "next/image";
import { checkLogoUtil, getPlatform } from "../Utils/utils";
import { deleteData, mustSolveToggle, updateData } from "../firebase/firebase";

export const Row = ({ problem }) => {
  return (
    <tr key={problem.id}>
      <td style={{ width: "50%" }}>
        <a target="_blank" href={problem.questionLink}>
          {problem.questionLink}
        </a>
      </td>
      <td className="pointer">
        <Image
          src={problem.mustSolve ? "/starGold.svg" : "/star.svg"}
          width={24}
          height={24}
          onClick={() => mustSolveToggle(problem.id, problem.mustSolve)}
        />
      </td>
      <td>{getPlatform(problem.questionLink)}</td>
      <td>{new Date(problem.date).toLocaleDateString("en-GB")}</td>
      <td className="pointer">
        <Image
          src={checkLogoUtil(problem.yash.status)}
          width={24}
          height={24}
          onClick={() => updateData(problem.id, problem.yash.status, "yash")}
        />
      </td>
      <td className="pointer">
        <Image
          src={checkLogoUtil(problem.atharva.status)}
          width={24}
          height={24}
          onClick={() =>
            updateData(problem.id, problem.atharva.status, "atharva")
          }
        />
      </td>
      <td className="pointer">
        <Image
          src={checkLogoUtil(problem.sumit.status, "sumit")}
          width={24}
          height={24}
          onClick={() => updateData(problem.id, problem.sumit.status, "sumit")}
        />
      </td>
      <td className="pointer">
        <Image
          src={"/trash.svg"}
          width={24}
          height={24}
          onClick={() => {
            if (window.confirm("Are you sure you wish to delete this item?"))
              deleteData(problem.id);
          }}
        />
      </td>
    </tr>
  );
};
