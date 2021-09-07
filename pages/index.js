import Head from "next/head";
import { useEffect, useState } from "react";
import { Row } from "../component/Row";
import { fetchData, db, auth } from "../firebase/firebase";
import { submitQuestionLink, getQuestionSolved } from "../Utils/utils";
import Image from "next/image";

export default function Home({ data }) {
  const [problems, setProblems] = useState(data);
  const questionSolved = getQuestionSolved(problems);

  useEffect(() => {
    var listener;
     auth.signInAnonymously().then((data) => {
      listener = db.ref("problems").on("value", (snapshot) => {
        const fetchedTasks = [];
        snapshot.forEach((childSnapShot) => {
          const data = childSnapShot.val();
          fetchedTasks.push({ ...data, id: childSnapShot.key });
        });
        setProblems(fetchedTasks);
      });
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
              <p className="title">CodeStation</p>
              <p className="subtitle">For 3 Bois, with ❤️</p>
            </div>
          </section>
          <div className="columns  mt-3">
            <div className="column is-2">
              <aside className="menu  py-3">
                <p className="menu-label">General</p>
                <ul className="menu-list">
                  <li>
                    <form onSubmit={submitQuestionLink}>
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

                <p className="menu-label">Solved</p>
                <ul className="menu-list">
                  {Object.keys(questionSolved).map((user) => {
                    return (
                      <li key={user}>
                        <div className="control  py-2">
                          <div className="tags has-addons">
                            <span
                              className="tag is-light"
                              style={{ textTransform: "capitalize" }}
                            >
                              {user}
                            </span>
                            <span className="tag is-success">
                              {questionSolved[user]}
                            </span>
                            <span className="tag is-danger">
                              {problems.length - questionSolved[user]}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </aside>
            </div>
            <div className="column">
              <div className="table-container box">
                <table className="table is-hoverable ">
                  <thead>
                    <tr>
                      <th>Question</th>
                      <th>Must Solve</th>
                      <th>Platform</th>
                      <th>Date</th>
                      <th>Yash</th>
                      <th>Atharva</th>
                      <th>Sumit</th>
                      <th>
                        <Image
                          src={"/trash.svg"}
                          width={24}
                          height={24}
                          priority={true}
                          layout="fixed"
                        />
                      </th>
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
