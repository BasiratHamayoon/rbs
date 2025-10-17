"use client"
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="car-container">
        <div className="car">
          <div className="window" />
          <div className="cargo-details" />
          <div className="door" />
          <div className="lights" />
        </div>
        <div className="wheels wheels1" />
        <div className="wheels wheels2" />
        <div className="street" />
        <div className="post" />
      </div>

      <style jsx>{`
        .car-container {
          position: relative;
          width: 200px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          transform: scale(0.7);
        }

        .car {
          position: absolute;
          background-color: #001C73;
          width: 100px;
          height: 60px;
          left: 25px;
          border-top: 2px solid #0026A3;
          top: 67px;
          animation: bounce 0.4s infinite;
        }

        @keyframes bounce {
          0% {
            top: 67px;
          }
          50% {
            top: 65px;
          }
        }

        .car::before {
          content: "";
          position: absolute;
          width: 145px;
          height: 10px;
          background-color: #001C73;
          bottom: -5px;
        }

        .car::after {
          content: "";
          position: absolute;
          background-color: #5fa8f5;
          width: 40px;
          height: 45px;
          right: -45px;
          bottom: 5px;
          clip-path: polygon(0% 0%, 50% 0, 100% 60%, 100% 100%, 0% 100%);
        }

        .window {
          position: absolute;
          background-color: #5fa8f5;
          width: 25px;
          height: 20px;
          right: -37px;
          top: 13px;
          z-index: 1;
          clip-path: polygon(0% 0%, 40% 0, 100% 100%, 0% 100%);
          border: 1px solid #0026A3;
        }

        .window::before {
          content: "";
          position: absolute;
          background-color: #8bc5f7;
          width: 2px;
          height: 20px;
          left: 2px;
          transform: skew(-36deg);
          box-shadow: 4px 0px #8bc5f7;
        }
        .window::after {
          content: "";
          position: absolute;
          background-color: #0026A3;
          width: 5px;
          height: 5px;
          bottom: 1px;
          right: 5px;
          box-shadow:
            1px 3px 0px -1px #5fa8f5,
            inset 1px 0px #5fa8f5;
        }

        .wheels {
          position: absolute;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: #bcbcbc;
          border: 5px solid #001C73;
          bottom: 54px;
          left: 45px;
          box-shadow: 0px 0px 0px 2px #001C73;
          animation: rotation 0.3s linear infinite;
        }

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .wheels::before {
          content: "";
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: #001C73;
          top: 5px;
          left: 1px;
          border-radius: 50%;
          box-shadow:
            7px 0px #001C73,
            3px -3px #001C73,
            3px 3px #001C73,
            3px 0px 0px 2px #001C73;
        }

        .wheels2 {
          left: 135px;
        }

        .cargo-details {
          position: absolute;
          width: 92px;
          height: 10px;
          background-color: #5fa8f5;
          left: 4px;
          top: 2px;
          box-shadow:
            0px 11px #5fa8f5,
            0px 23px #5fa8f5,
            0px 34px #5fa8f5;
        }

        .cargo-details::before {
          position: absolute;
          content: "";
          width: 5px;
          height: 2px;
          background-color: #0026A3;
          bottom: -36px;
          box-shadow:
            5px 0px #5fa8f5,
            10px 0px #0026A3,
            15px 0px #5fa8f5,
            20px 0px #0026A3,
            25px 0px #5fa8f5,
            30px 0px #0026A3,
            35px 0px #5fa8f5,
            40px 0px #0026A3,
            45px 0px #5fa8f5,
            50px 0px #0026A3,
            55px 0px #5fa8f5,
            60px 0px #0026A3,
            65px 0px #5fa8f5,
            70px 0px #0026A3,
            75px 0px #5fa8f5,
            80px 0px #0026A3,
            85px 0px #5fa8f5,
            87px 0px #0026A3;
        }

        .cargo-details::after {
          position: absolute;
          content: "";
          width: 5px;
          height: 3px;
          background-color: #0026A3;
          top: -3px;
          left: -5px;
          box-shadow:
            97px 0px #0026A3,
            0px 62px #001C73;
        }

        .door {
          position: absolute;
          width: 5px;
          height: 2px;
          background-color: #001C73;
          right: -15px;
          bottom: 20px;
          z-index: 2;
        }

        .door::before {
          content: "";
          position: absolute;
          width: 5px;
          height: 10px;
          background-color: #0026A3;
          left: -10px;
          z-index: -1;
          bottom: -15px;
          box-shadow: inset 0px 2px #5fa8f5;
        }

        .lights {
          position: absolute;
          width: 6px;
          height: 10px;
          background-color: #5fa8f5;
          right: -45px;
          bottom: 0px;
          z-index: 1;
          box-shadow: inset 0px -4px #0026A3;
          animation: lighting1 1.5s infinite ease-in-out;
        }

        @keyframes lighting1 {
          0% {
            background-color: #5fa8f5;
            box-shadow: inset 0px -4px #0026A3;
          }

          50% {
            box-shadow: inset 0px -4px #001C73;
          }
        }

        .lights::before {
          content: "";
          position: absolute;
          width: 3px;
          height: 7px;
          background-color: #0026A3;
          left: -140px;
          bottom: 0px;
          box-shadow: inset 0px 3px #0026A3;
          animation: lighting 1.5s infinite ease-in-out;
        }

        @keyframes lighting {
          0% {
            box-shadow: inset 0px 4px #0026A3;
          }

          50% {
            box-shadow: inset 0px 4px #001C73;
          }
        }

        .lights::after {
          content: "";
          position: absolute;
          width: 4px;
          height: 1px;
          background-color: #001C73;
          top: -4px;
          box-shadow:
            0px -3px #001C73,
            0px -6px #001C73;
          right: 0px;
        }

        .street {
          height: 1px;
          width: 35px;
          background-color: #001C73;
          position: absolute;
          bottom: 52px;
          left: 0;
          box-shadow:
            45px 0,
            90px 0,
            135px 0,
            180px 0;
          animation: motion 2s linear infinite;
        }

        .street::before {
          content: "";
          height: 1px;
          width: 35px;
          background-color: #001C73;
          position: absolute;
          bottom: 0;
          left: 225px;
          box-shadow:
            45px 0,
            90px 0,
            135px 0,
            180px 0;
        }

        @keyframes motion {
          0% {
            left: 0;
          }
          100% {
            left: -225px;
          }
        }

        .post {
          position: absolute;
          width: 2px;
          height: 90px;
          background-color: #001C73;
          right: -7px;
          top: 57px;
          animation: moving 2.9s infinite linear;
          z-index: -2;
        }

        @keyframes moving {
          0% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(-325px);
          }
        }

        .post::before {
          width: 10px;
          height: 10px;
          position: absolute;
          content: "";
          background-color: #001C73;
          top: -7px;
          left: -3px;
          clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%);
        }

        .post::after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-bottom: 10px solid transparent;
          border-left: 5px solid transparent;
          border-left: 10px solid #001C73;
          transform: rotate(45deg);
          top: -11px;
          left: -3px;
        }
      `}</style>
    </div>
  );
}

export default Loader;