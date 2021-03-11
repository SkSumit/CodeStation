import Head from "next/head";
import { useEffect, useState } from "react";
import { Row } from "../component/Row";
import { fetchData, saveData, db } from "../firebase/firebase";
import { submitQuestionLink } from "../Utils/utils";

export default function Home({ data }) {
  const [problems, setProblems] = useState(data);
  // console.log(problems);

  useEffect(() => {
    const listener = db.ref("problems").on("value", (snapshot) => {
      const fetchedTasks = [];
      snapshot.forEach((childSnapShot) => {
        const data = childSnapShot.val();
        fetchedTasks.push({ ...data, id: childSnapShot.key });
      });
      setProblems(fetchedTasks);
    });

    return () => db.ref("problems").off("value", listener);
  }, [db]);

  return (
    <div>
      <Head>
        <title>CodeStation - for DSA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={`section `}>
        <div className="container is-fluid">
          <section className="hero is-primary is-small">
            <div className="hero-body">
              <p className="title" onClick={saveData}>
                CodeStation
              </p>
              <p className="subtitle">For 3 Bois, with ❤️</p>
            </div>
          </section>
          <div className="columns  mt-3">
            <div className="column is-2">
              <aside className="menu px-3 py-3">
                <p className="menu-label">General</p>
                <ul className="menu-list">
                  <li>
                    <form
                      onSubmit={submitQuestionLink}
                    >
                      <input
                        className="input is-normal mb-3"
                        type="text"
                        placeholder="Add Question Link"
                      />
                      <button className="button is-success is-outlined is-FAB">
                        Add +
                      </button>
                    </form>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="column">
              <div className="box table-wrapper">
                <table className="table is-hoverable is-fullwidth  ">
                  <thead>
                    <tr>
                      <th>Question</th>
                      <th>Platform</th>
                      <th>Date</th>
                      <th>Yash</th>
                      <th>Atharva</th>
                      <th>Sumit</th>
                    </tr>
                  </thead>

                  <tbody>
                    {problems &&
                      problems.map((problem) => (
                        <Row key={problem.id} problem={problem} />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export async function getServerSideProps(context) {
  const data = fetchData();
  return {
    props: {
      data,
    },
  };
}
