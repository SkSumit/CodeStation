import React from "react";
import Image from "next/image";
import { checkLogoUtil, getPlatform } from "../Utils/utils";
import { deleteData, updateData } from "../firebase/firebase";

export const Row = ({ problem }) => {
  return (
    <tr key={problem.id}>
      <th >
        <a target="_blank" href={problem.questionLink} >
          {problem.questionLink}
        </a>
      </th>
      <th>{getPlatform(problem.questionLink)}</th>
      <th>{new Date(problem.date).toLocaleDateString('en-GB')}</th>
      <th className="pointer">
        <Image
          src={checkLogoUtil(problem.yash.status)}
          width={24}
          height={24}
          onClick={() => updateData(problem.id, problem.yash.status, "yash")}
        />
      </th>
      <th className="pointer">
        <Image
          src={checkLogoUtil(problem.atharva.status)}
          width={24}
          height={24}
          onClick={() =>
            updateData(problem.id, problem.atharva.status, "atharva")
          }
        />
      </th>
      <th className="pointer">
        <Image
          src={checkLogoUtil(problem.sumit.status, "sumit")}
          width={24}
          height={24}
          onClick={() => updateData(problem.id, problem.sumit.status, "sumit")}
        />
      </th>
      <th className="pointer">
        <Image
          src={"/trash.svg"}
          width={24}
          height={24}
          onClick={() => {
            if (window.confirm("Are you sure you wish to delete this item?"))
              deleteData(problem.id)
          }}
        />
      </th>
    </tr>
  );
};
