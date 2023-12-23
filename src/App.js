import { useEffect, useState } from "react";
import "./App.css";
import PostCard from "./components/PostCard";
import TaskCard from "./components/TaskCard";
import Select from "react-select";
import { colors } from "./constant/colors";
import ChatScreen from "./screen/ChatScreen";

import inboxLarge from "./icons/inbox-large.svg";
import inboxSmall from "./icons/inbox-small.svg";
import taskLarge from "./icons/task-large.svg";
import taskSmall from "./icons/task-small.svg";
import logo from "./icons/logo.svg";

function App() {
  ///show loading screen
  const [isLoading, setIsLoading] = useState(true);

  ///show chat screen
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  ///show modal
  const [showContent, setShowContent] = useState("");

  ///chat screen
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState("");

  ///floating action button
  const [isHidden, setIsHidden] = useState(true);
  const [currentButton, setCurrentButton] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  ///support post
  const [isSupport, setIsSupport] = useState(false);

  const options = [
    { value: "personal_errands", label: "Personal Errands" },
    { value: "urgent", label: "Urgent-To-Do" },
  ];
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const task = [
    {
      check: false,
      title: "title",
      date: new Date(),
      desc: "",
      status: ["important", "client"],
    },
    {
      check: false,
      title: "title asdasddasasd",
      date: "",
      desc: "description aaaaaaaaaaaaaaaaaaaaaaaa",
      status: [],
    },
    {
      check: true,
      title: "title zxcxczzxcczxcxz czxcxzczxczx",
      date: "",
      desc: "testing desc",
      status: ["asap"],
    },
    {
      check: false,
      title: "title",
      date: "",
      desc: "desc 4 5 6",
      status: [],
    },
  ];

  const post = [
    {
      title: "109220-Naturalization",
      name: "Cammeron Phillips",
      body: "Please check this out",
      date: "02/06/2021 10:45",
    },
    {
      title:
        "Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]",
      name: "Ellen",
      body: "Hey, please read",
      date: "02/06/2021 10:45",
    },
    {
      title: "8405-Diana SALAZAR MUNGUIA",
      name: "Cammeron Phillips",
      body: "I understand your initial concerns and thats very valid, Elizabeth. But you djsaiodasjd djsaiojdasiodsaj jdsaiojdasojdioa",
      date: "02/06/2021 10:45",
    },
    {
      title: "FastVisa Support",
      name: "Hey there! Welcome to your inbox.",
      body: "lalallaa",
      date: "02/06/2021 10:45",
    },
  ];

  const button = [
    {
      id: 1,
      name: "task-list",
      label: "Task",
      iconLarge: taskLarge,
      iconSmall: taskSmall,
    },
    {
      id: 2,
      name: "post-list",
      label: "Inbox",
      iconLarge: inboxLarge,
      iconSmall: inboxSmall,
    },
  ];

  useEffect(() => {
    const temp = button.findIndex((i) => {
      return i.id === currentButton;
    });

    setCurrentIndex(temp);
  }, [currentButton]);

  return (
    <div className="App">
      <div className="absolute bottom-0 right-0 flex justify-end items-end">
        {!isHidden &&
          button.map((each) => {
            return (
              each.id !== currentButton && (
                <button
                  className="mr-5"
                  onClick={async () => {
                    setCurrentButton(each.id);

                    if (each.name === "post-list") {
                      setIsLoading(true);
                      if (showContent === "post-list") {
                        setShowContent("");
                      } else {
                        setShowContent("post-list");
                      }

                      await timeout(1000);
                      setIsLoading(false);
                    }

                    if (each.name === "task-list") {
                      if (showContent === "task-list") {
                        setShowContent("");
                      } else {
                        setShowContent("task-list");
                      }
                    }
                  }}
                >
                  <>
                    {showContent === "" && (
                      <p className="mb-1 text-white font-bold text-medium">
                        {each.label}
                      </p>
                    )}
                    <img className="cursor-pointer" src={each.iconSmall} />
                  </>
                </button>
              )
            );
          })}

        {currentButton === 0 ? (
          <img
            className="cursor-pointer"
            onClick={() => {
              setIsHidden(!isHidden);
            }}
            src={logo}
          />
        ) : (
          currentIndex !== -1 && (
            <div className="cursor-pointer">
              <div className="absolute right-3 h-[70px] w-[70px] rounded-full bg-[#4F4F4F]" />

              <img
                onClick={() => {
                  setIsHidden(true);
                  setCurrentButton(0);
                  setShowContent("");
                  setShowAdditionalContent(false);
                }}
                src={button[currentIndex].iconLarge}
                className="relative"
              />
            </div>
          )
        )}
      </div>
      {showContent !== "" && (
        <div className="rounded-md mr-4 mb-16 absolute bottom-5 right-0 h-[737px] w-[734px] bg-white">
          <div className="h-[100%] flex flex-col">
            {showContent === "task-list" && (
              <div className="w-full px-6 py-3 ">
                <div className="w-full flex justify-between">
                  <Select
                    className="w-60 text-start"
                    defaultValue={{
                      value: "",
                      label: "My Tasks",
                    }}
                    options={options}
                  />

                  <button
                    className={`px-4 py-2 bg-[${colors.primary_blue}] text-white font-bold rounded-md`}
                  >
                    New Task
                  </button>
                </div>
                {task.map((each, i) => {
                  return (
                    <TaskCard
                      index={i}
                      title={each.title}
                      desc={each.desc}
                      isCheck={each.check}
                      date={each.date}
                      status={each.status}
                    />
                  );
                })}
              </div>
            )}

            {showContent === "post-list" ? (
              showAdditionalContent ? (
                <ChatScreen
                  result={result}
                  title={title}
                  support={isSupport}
                  setFunction={() => {
                    setShowAdditionalContent(false);
                    setIsSupport(false);
                  }}
                />
              ) : (
                <div className="h-[100%] px-6 py-3">
                  <div className="flex items-center relative">
                    <input
                      placeholder="Search"
                      className="border border-[#828282] rounded-md px-20 py-2 w-full text-start"
                    />
                    <svg
                      className="absolute right-14"
                      width="20"
                      height="20"
                      viewBox="0 0 32 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.1856 18.9783H22.5486L31.1579 27.6047L28.5872 30.1754L19.9607 21.5662V20.2032L19.4949 19.7201C17.528 21.4109 14.9746 22.4289 12.1968 22.4289C6.00304 22.4289 0.982422 17.4082 0.982422 11.2144C0.982422 5.02061 6.00304 0 12.1968 0C18.3907 0 23.4113 5.02061 23.4113 11.2144C23.4113 13.9922 22.3934 16.5456 20.7026 18.5124L21.1856 18.9783ZM4.433 11.2145C4.433 15.5104 7.90084 18.9783 12.1968 18.9783C16.4928 18.9783 19.9607 15.5104 19.9607 11.2145C19.9607 6.91846 16.4928 3.45062 12.1968 3.45062C7.90084 3.45062 4.433 6.91846 4.433 11.2145Z"
                        fill={colors.dark_gray}
                      />
                    </svg>
                  </div>

                  {isLoading ? (
                    <div className="flex justify-center items-center h-[96%]">
                      <div className="spinner" role="status">
                        <svg
                          aria-hidden="true"
                          class="inline w-20 h-20 text-gray-200 animate-spin dark:text-[#E0E0E0] fill-[#828282]"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <p className="text-[#4F4F4F] text-lg font-semibold">
                          Loading Chats...
                        </p>
                      </div>
                    </div>
                  ) : (
                    post.map((index, i) => {
                      return (
                        <PostCard
                          index={index}
                          i={i}
                          postLength={post.length}
                          setResult={(data) => {
                            setResult(data);
                            setTitle(post[i].title);
                          }}
                          setShowAdditionalContent={() => {
                            setShowAdditionalContent(true);
                            if (index.title === "FastVisa Support") {
                              setIsSupport(true);
                            }
                          }}
                        />
                      );
                    })
                  )}
                </div>
              )
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
