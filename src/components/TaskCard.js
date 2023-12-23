import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { colors } from "../constant/colors";

function TaskCard(props) {
  const [hideDesc, setHideDesc] = useState(false);
  const [startDate, setStartDate] = useState(
    props.date === "" ? null : props.date
  );
  const [descClicked, setDescClicked] = useState(true);
  const [showDelete, setShowDelete] = useState(false);
  const [description, setDescription] = useState(props.desc);
  const [isCheck, setIsCheck] = useState(props.isCheck);
  const [statusClicked, setStatusClicked] = useState(false);
  const [status, setStatus] = useState(props.status);

  const allStatus = [
    { label: "Important ASAP", color: "bg-[#E5F1FF]", name: "important" },
    { label: "Offline Meeting", color: "bg-[#FDCFA4]", name: "offline" },
    { label: "Virtual Meeting", color: "bg-[#F9E9C3]", name: "virtual" },
    { label: "ASAP", color: "bg-[#AFEBDB]", name: "asap" },
    { label: "Client Related", color: "bg-[#CBF1C2]", name: "client" },
    { label: "Self Task", color: "bg-[#CFCEF9]", name: "self" },
    { label: "Appointments", color: "bg-[#F9E0FD]", name: "appointment" },
    { label: "Court Related", color: "bg-[#9DD0ED]", name: "court" },
  ];

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div
      className="flex items-center px-5 py-2 w-[193px] h-[40px]"
      onClick={onClick}
    >
      <button className="example-custom-input" ref={ref}>
        {value}
      </button>
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-5"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.3335 1.99996H11.6668V0.666626H10.3335V1.99996H3.66683V0.666626H2.3335V1.99996H1.66683C0.933496 1.99996 0.333496 2.59996 0.333496 3.33329V14C0.333496 14.7333 0.933496 15.3333 1.66683 15.3333H12.3335C13.0668 15.3333 13.6668 14.7333 13.6668 14V3.33329C13.6668 2.59996 13.0668 1.99996 12.3335 1.99996ZM12.3335 14H1.66683V6.66663H12.3335V14ZM1.66683 5.33329H12.3335V3.33329H1.66683V5.33329Z"
          fill="#4F4F4F"
        />
      </svg>
    </div>
  ));

  return (
    <div>
      <div className="flex my-4">
        <div className="flex gap-4 w-full text-start">
          <input
            type="checkbox"
            defaultChecked={isCheck}
            onChange={(e) => {
              setIsCheck(e.target.checked);
            }}
            className="cursor-pointer mt-1 w-4 h-4 rounded-md accent-white"
          />
          <div className="w-full mr-5">
            <p
              className={`font-bold text-large ${
                isCheck ? "line-through" : "no-underline"
              }`}
            >
              {props.title}
            </p>
            {hideDesc && (
              <>
                <div className="flex items-center mt-2 gap-5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.2508 2.51465C8.31048 2.51465 2.69031 8.1474 2.69031 15.0877C2.69031 22.0281 8.31048 27.6608 15.2508 27.6608C22.2038 27.6608 27.8365 22.0281 27.8365 15.0877C27.8365 8.1474 22.2038 2.51465 15.2508 2.51465ZM15.2637 25.1462C9.70636 25.1462 5.20519 20.6451 5.20519 15.0878C5.20519 9.53045 9.70636 5.02928 15.2637 5.02928C20.821 5.02928 25.3221 9.53045 25.3221 15.0878C25.3221 20.6451 20.821 25.1462 15.2637 25.1462ZM14.0061 8.80121H15.8921V15.4021L21.55 18.7591L20.607 20.3056L14.0061 16.3451V8.80121Z"
                      fill={startDate === null ? colors.gray : "#2F80ED"}
                    />
                  </svg>

                  <div className={`rounded-md border border-[#828282]`}>
                    <DatePicker
                      dateFormat="dd/MM/yyyy"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="flex items-center justify-center"
                      customInput={<ExampleCustomInput />}
                    />
                  </div>
                </div>
                <div className="flex items-start mt-2 gap-5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.3092 0C18.9949 0 18.668 0.125731 18.4291 0.36462L16.1282 2.6655L20.8431 7.38041L23.144 5.07953C23.6343 4.58918 23.6343 3.79708 23.144 3.30673L20.2019 0.36462C19.9504 0.113158 19.6361 0 19.3092 0ZM14.7831 7.569L15.9398 8.72573L4.54857 20.117H3.39185V18.9602L14.7831 7.569ZM0.877197 17.9167L14.783 4.01081L19.498 8.72572L5.59211 22.6316H0.877197V17.9167Z"
                      fill={description === "" ? colors.gray : "#2F80ED"}
                    />
                  </svg>
                  <textarea
                    readOnly={!descClicked}
                    rows={2}
                    onClick={() => {
                      setDescClicked(!descClicked);
                    }}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    value={description}
                    placeholder={description === "" ? "No Description" : ""}
                    className={`cursor-pointer resize-none rounded-md w-full px-3 bg-blue ${
                      !descClicked
                        ? "focus:outline-none "
                        : "focus:outline-[#828282]"
                    }`}
                  />
                </div>
                <div
                  className="w-full flex items-start mt-2 gap-5 relative"
                  onClick={() => {
                    setStatusClicked(!statusClicked);
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.4032 0.833374H7.52334C6.65742 0.833374 5.95681 1.58337 5.95681 2.50004H13.8288C14.6947 2.50004 15.4032 3.25004 15.4032 4.16671V15L16.9776 15.8334V2.50004C16.9776 1.58337 16.2691 0.833374 15.4032 0.833374ZM12.2545 5.83337V16.6417L8.94038 15.1334L8.31849 14.85L7.69661 15.1334L4.38249 16.6417V5.83337H12.2545ZM4.38245 4.16671H12.2545C13.1204 4.16671 13.8289 4.91671 13.8289 5.83337V19.1667L8.31845 16.6667L2.80804 19.1667V5.83337C2.80804 4.91671 3.51653 4.16671 4.38245 4.16671Z"
                      fill={status.length !== 0 ? colors.gray : "2F80ED"}
                    />
                  </svg>

                  <div className="cursor-pointer bg-[#F9F9F9] rounded-md flex flex-wrap gap-5 pb-4">
                    {status.map((each) => {
                      const statusObject = allStatus.find(
                        (item) => item.name === each
                      );

                      return (
                        <div
                          className={`${statusObject.color} min-w-max px-3 py-1 rounded-md font-bold`}
                        >
                          {statusObject.label}
                        </div>
                      );
                    })}
                  </div>

                  {statusClicked && (
                    <div className="h-[323px] w-[277px] absolute left-10 top-10 bg-white z-50 px-4 py-3 rounded-md border border-[#828282] flex flex-col justify-between">
                      {allStatus.map((each, i) => {
                        const isSelected = status.includes(each.name);

                        return (
                          <div
                            key={i}
                            onClick={() => {
                              setStatus((prev) => {
                                if (prev.includes(each.name)) {
                                  return prev.filter(
                                    (item) => item !== each.name
                                  );
                                } else {
                                  return [...prev, each.name];
                                }
                              });
                            }}
                            className={`cursor-pointer rounded-md font-bold px-4 py-1 ${
                              each.color
                            } ${
                              isSelected
                                ? "border border-solid border-[#2F80ED]"
                                : ""
                            }`}
                          >
                            {each.label}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex items-start min-w-max gap-4">
          <p className={`text-[${colors.red}]`}>
            {startDate !== null && "2 days left"}
          </p>
          <p>
            {startDate &&
              startDate.toLocaleString("default", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
          </p>
          <p
            onClick={() => {
              setHideDesc(!hideDesc);
            }}
          >
            {hideDesc ? (
              <svg
                width="12"
                height="24"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  d="M1.175 7.08753L5 3.27086L8.825 7.08752L10 5.91252L5 0.912526L-1.02722e-07 5.91253L1.175 7.08753Z"
                  fill="#4F4F4F"
                />
              </svg>
            ) : (
              <svg
                width="12"
                height="24"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  d="M8.825 0.912476L5 4.72914L1.175 0.912476L0 2.08748L5 7.08747L10 2.08748L8.825 0.912476Z"
                  fill="#4F4F4F"
                />
              </svg>
            )}
          </p>
          <div className="relative">
            <svg
              width="20"
              height="24"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setShowDelete(!showDelete);
              }}
              className="cursor-pointer"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.07016 12.5731C6.68712 12.5731 5.55554 13.7046 5.55554 15.0877C5.55554 16.4707 6.68712 17.6023 8.07016 17.6023C9.4532 17.6023 10.5848 16.4707 10.5848 15.0877C10.5848 13.7046 9.4532 12.5731 8.07016 12.5731ZM23.1579 12.5731C21.7748 12.5731 20.6433 13.7046 20.6433 15.0877C20.6433 16.4707 21.7748 17.6023 23.1579 17.6023C24.5409 17.6023 25.6725 16.4707 25.6725 15.0877C25.6725 13.7046 24.5409 12.5731 23.1579 12.5731ZM13.0994 15.0877C13.0994 13.7046 14.231 12.5731 15.614 12.5731C16.9971 12.5731 18.1286 13.7046 18.1286 15.0877C18.1286 16.4707 16.9971 17.6023 15.614 17.6023C14.231 17.6023 13.0994 16.4707 13.0994 15.0877Z"
                fill={colors.gray}
              />
            </svg>

            {showDelete && (
              <div className="cursor-pointer bg-white text-start absolute right-0 rounded-md w-[126px]">
                <p
                  className={`border border-[#828282] rounded-md px-4 py-2 text-[${colors.red}]`}
                >
                  Delete
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default TaskCard;
