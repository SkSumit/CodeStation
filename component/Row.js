import React from "react";
import Image from "next/image";
import { checkLogoUtil, getPlatform } from "../Utils/utils";
import { updateData } from "../firebase/firebase";

export const Row = ({ problem }) => {
  return (
    <tr key={problem.id}>
      <th>{problem.questionLink}</th>
      <th>{getPlatform(problem.questionLink)}</th>
      <th>{new Date(problem.date).toDateString()}</th>
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
          onClick={() => updateData(problem.id, problem.sumit.status)}
        />
      </th>
    </tr>
  );
};
