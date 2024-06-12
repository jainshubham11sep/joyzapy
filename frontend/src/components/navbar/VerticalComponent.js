// import React, { useState } from 'react'
// import { DrawerWithNavigation } from './DrawerDefault'
import CustomDrawer from "./Drawer"

const VerticalComponent = () => {

    // const [view, setView] = useState("none")

  return (
    <div className='hidden md:flex bg-[#11101D] text-[#FFF] w-20 py-[31px] flex-col items-center justify-center gap-10 fixed'>
      <div className="flex items-center justify-center">
        <CustomDrawer />
      </div>

        <div className='flex flex-col items-center justify-between'>

            <div className='flex flex-col items-center justify-center gap-4'>

                <button className='flex items-center justify-center py-[14px] px-[21px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <path d="M4.50004 17.3338H5.83337V26.6671C5.83337 28.1378 7.02937 29.3338 8.50004 29.3338H24.5C25.9707 29.3338 27.1667 28.1378 27.1667 26.6671V17.3338H28.5C28.7637 17.3338 29.0214 17.2555 29.2406 17.109C29.4599 16.9625 29.6307 16.7543 29.7316 16.5107C29.8325 16.2671 29.8589 15.999 29.8075 15.7404C29.7561 15.4818 29.6291 15.2443 29.4427 15.0578L17.4427 3.0578C17.319 2.93388 17.1721 2.83556 17.0103 2.76848C16.8485 2.7014 16.6752 2.66687 16.5 2.66687C16.3249 2.66687 16.1515 2.7014 15.9898 2.76848C15.828 2.83556 15.6811 2.93388 15.5574 3.0578L3.55737 15.0578C3.37096 15.2443 3.24402 15.4818 3.1926 15.7404C3.14117 15.999 3.16758 16.2671 3.26847 16.5107C3.36936 16.7543 3.54022 16.9625 3.75943 17.109C3.97864 17.2555 4.23637 17.3338 4.50004 17.3338ZM13.8334 26.6671V20.0005H19.1667V26.6671H13.8334ZM16.5 5.88581L24.5 13.8858V20.0005L24.5014 26.6671H21.8334V20.0005C21.8334 18.5298 20.6374 17.3338 19.1667 17.3338H13.8334C12.3627 17.3338 11.1667 18.5298 11.1667 20.0005V26.6671H8.50004V13.8858L16.5 5.88581Z" fill="white"/>
                    </svg>
                </button>

                <button className='flex items-center justify-center py-[14px] px-[21px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <g clip-path="url(#clip0_310_113)">
                            <path d="M12.5 0C9.5455 0.00210637 6.69613 1.09662 4.5 3.073V1C4.5 0.734784 4.39464 0.48043 4.20711 0.292893C4.01957 0.105357 3.76522 0 3.5 0C3.23478 0 2.98043 0.105357 2.79289 0.292893C2.60536 0.48043 2.5 0.734784 2.5 1V4C2.5 4.79565 2.81607 5.55871 3.37868 6.12132C3.94129 6.68393 4.70435 7 5.5 7H8.5C8.76522 7 9.01957 6.89464 9.20711 6.70711C9.39464 6.51957 9.5 6.26522 9.5 6C9.5 5.73478 9.39464 5.48043 9.20711 5.29289C9.01957 5.10536 8.76522 5 8.5 5H5.5C5.46628 4.995 5.43289 4.98799 5.4 4.979C7.02952 3.33783 9.17813 2.31308 11.4791 2.07967C13.78 1.84626 16.0906 2.41866 18.0165 3.69916C19.9424 4.97967 21.3642 6.88889 22.0392 9.10095C22.7142 11.313 22.6005 13.6908 21.7176 15.8283C20.8347 17.9659 19.2372 19.7308 17.198 20.8218C15.1587 21.9127 12.804 22.2621 10.5358 21.8102C8.26764 21.3584 6.22659 20.1333 4.76106 18.3442C3.29553 16.5551 2.49637 14.3127 2.5 12C2.5 11.7348 2.39464 11.4804 2.20711 11.2929C2.01957 11.1054 1.76522 11 1.5 11C1.23478 11 0.98043 11.1054 0.792893 11.2929C0.605357 11.4804 0.5 11.7348 0.5 12C0.5 14.3734 1.20379 16.6935 2.52236 18.6668C3.84094 20.6402 5.71509 22.1783 7.9078 23.0866C10.1005 23.9948 12.5133 24.2324 14.8411 23.7694C17.1689 23.3064 19.3071 22.1635 20.9853 20.4853C22.6635 18.8071 23.8064 16.6689 24.2694 14.3411C24.7324 12.0133 24.4948 9.60051 23.5866 7.4078C22.6783 5.21509 21.1402 3.34094 19.1668 2.02236C17.1935 0.703788 14.8734 0 12.5 0V0Z" fill="#FEFEFE"/>
                            <path d="M12.5 6C12.2348 6 11.9804 6.10536 11.7929 6.29289C11.6054 6.48043 11.5 6.73478 11.5 7V12C11.5001 12.2652 11.6055 12.5195 11.793 12.707L14.793 15.707C14.9816 15.8892 15.2342 15.99 15.4964 15.9877C15.7586 15.9854 16.0094 15.8802 16.1948 15.6948C16.3802 15.5094 16.4854 15.2586 16.4877 14.9964C16.49 14.7342 16.3892 14.4816 16.207 14.293L13.5 11.586V7C13.5 6.73478 13.3946 6.48043 13.2071 6.29289C13.0196 6.10536 12.7652 6 12.5 6Z" fill="#FEFEFE"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_310_113">
                                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>

                <button className='flex items-center justify-center py-[14px] px-[21px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <g clip-path="url(#clip0_310_117)">
                            <path d="M18 1.9165C16.8739 1.93402 15.7724 2.24836 14.8067 2.82778C13.841 3.40719 13.0453 4.23117 12.5 5.2165C11.9546 4.23117 11.1589 3.40719 10.1932 2.82778C9.2275 2.24836 8.12601 1.93402 6.99996 1.9165C5.2049 1.99449 3.51366 2.77976 2.29574 4.10074C1.07782 5.42171 0.432208 7.17103 0.499958 8.9665C0.499958 13.5135 5.28596 18.4795 9.29996 21.8465C10.1962 22.5996 11.3293 23.0125 12.5 23.0125C13.6706 23.0125 14.8037 22.5996 15.7 21.8465C19.714 18.4795 24.5 13.5135 24.5 8.9665C24.5677 7.17103 23.9221 5.42171 22.7042 4.10074C21.4863 2.77976 19.795 1.99449 18 1.9165ZM14.415 20.3165C13.8789 20.7679 13.2007 21.0154 12.5 21.0154C11.7992 21.0154 11.121 20.7679 10.585 20.3165C5.44696 16.0055 2.49996 11.8695 2.49996 8.9665C2.4316 7.70122 2.86632 6.46023 3.70932 5.5142C4.55232 4.56817 5.73519 3.99385 6.99996 3.9165C8.26472 3.99385 9.4476 4.56817 10.2906 5.5142C11.1336 6.46023 11.5683 7.70122 11.5 8.9665C11.5 9.23172 11.6053 9.48607 11.7929 9.67361C11.9804 9.86115 12.2347 9.9665 12.5 9.9665C12.7652 9.9665 13.0195 9.86115 13.2071 9.67361C13.3946 9.48607 13.5 9.23172 13.5 8.9665C13.4316 7.70122 13.8663 6.46023 14.7093 5.5142C15.5523 4.56817 16.7352 3.99385 18 3.9165C19.2647 3.99385 20.4476 4.56817 21.2906 5.5142C22.1336 6.46023 22.5683 7.70122 22.5 8.9665C22.5 11.8695 19.553 16.0055 14.415 20.3125V20.3165Z" fill="#FEFEFE"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_310_117">
                                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                
                {/* line div */}
                <div className='w-full h-[1px] bg-[#FFF]'></div>

                <button className='flex items-center justify-center py-[14px] px-[21px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <g clip-path="url(#clip0_310_121)">
                            <path d="M22.7075 5.02918C21.8112 3.53541 20.2178 2.53955 18.4253 2.53955H6.47511C4.68256 2.53955 3.08923 3.53541 2.19294 5.02918C1.09752 7.0209 0.5 9.21179 0.5 11.5022C0.5 16.9794 2.69089 21.4607 5.47925 21.4607C6.97302 21.4607 8.16805 20.0665 9.0643 17.1786C9.16386 16.7802 9.5622 16.4815 10.0602 16.4815H14.9398C15.3382 16.4815 15.7365 16.7802 15.9357 17.1786C16.832 20.0665 18.027 21.4607 19.5208 21.4607C22.3091 21.4607 24.5 16.9794 24.5 11.5022C24.4004 9.21179 23.8029 7.0209 22.7075 5.02918ZM19.4211 19.469C19.1224 19.469 18.4253 18.6723 17.7282 16.5811C17.3299 15.2865 16.1348 14.4898 14.8402 14.4898H10.0602C8.76556 14.4898 7.57053 15.386 7.17219 16.5811C6.47511 18.6723 5.77798 19.469 5.47925 19.469C4.48339 19.469 2.49172 16.3819 2.49172 11.5022C2.49172 9.61013 2.98962 7.71802 3.88592 6.02508C4.48344 5.12883 5.4793 4.53132 6.47516 4.53132H18.4254C19.4212 4.53132 20.4171 5.12883 21.0146 6.02508C21.9109 7.71802 22.4088 9.61013 22.4088 11.5022C22.4087 16.3819 20.417 19.469 19.4211 19.469Z" fill="#FEFEFE"/>
                            <path d="M9.49993 9.00002H8.49994V8.00004C8.49994 7.40004 8.09996 7.00006 7.49996 7.00006C6.89996 7.00006 6.49997 7.40004 6.49997 8.00004V9.00002H5.49999C4.89998 9.00002 4.5 9.40001 4.5 10C4.5 10.6 4.89998 11 5.49999 11H6.49992V12C6.49992 12.6 6.89991 13 7.49991 13C8.09991 13 8.4999 12.6 8.4999 12V11H9.49993C10.0999 11 10.4999 10.6001 10.4999 10.0001C10.4999 9.40001 10.0999 9.00002 9.49993 9.00002Z" fill="#FEFEFE"/>
                            <path d="M19 10C19.8284 10 20.5 9.32843 20.5 8.5C20.5 7.67157 19.8284 7 19 7C18.1716 7 17.5 7.67157 17.5 8.5C17.5 9.32843 18.1716 10 19 10Z" fill="#FEFEFE"/>
                            <path d="M16 13C16.8284 13 17.5 12.3284 17.5 11.5C17.5 10.6716 16.8284 10 16 10C15.1716 10 14.5 10.6716 14.5 11.5C14.5 12.3284 15.1716 13 16 13Z" fill="#FEFEFE"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_310_121">
                                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>

                <button className='flex items-center justify-center py-[14px] px-[21px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                        <path d="M10.2389 8.12254C9.63553 5.87615 8.66681 3.74432 7.37147 1.81241C6.74526 0.783599 5.40361 0.457255 4.37484 1.08346C4.12917 1.23299 3.91551 1.42968 3.74615 1.66213C3.34851 2.22308 2.98594 2.80813 2.66048 3.4138C0.548341 7.19835 -0.410909 11.6326 0.760967 15.8736C1.37278 18.1409 2.3535 20.292 3.66389 22.2407C4.32192 23.2548 5.6774 23.5435 6.6915 22.8854C6.94931 22.7181 7.16897 22.4985 7.33626 22.2407C9.76805 18.9157 11.7199 12.6665 10.2389 8.12254ZM8.17158 16.0034C6.3682 17.4805 3.70884 17.216 2.23176 15.4125C2.21184 15.3882 2.1922 15.3637 2.17284 15.3389C1.488 12.596 1.6545 9.70949 2.65022 7.06344C4.41155 8.08972 6.58861 8.08972 8.34994 7.06344C9.34565 9.70949 9.51215 12.596 8.82731 15.3389C8.63048 15.581 8.41092 15.8034 8.17158 16.0034ZM6.0517 2.55636C6.72098 3.52691 7.29548 4.55947 7.76733 5.63985C6.39079 6.54294 4.60959 6.54299 3.23306 5.63999C3.59137 4.82493 4.00603 4.03579 4.47398 3.27829C4.81045 2.65986 5.37183 1.78715 6.0517 2.55636ZM6.08676 21.4101C5.883 21.7341 5.45517 21.8316 5.13117 21.6279C5.04319 21.5726 4.96875 21.4981 4.91344 21.4101C4.17647 20.3042 3.54525 19.1313 3.02817 17.907C4.59019 18.6595 6.40997 18.6595 7.97203 17.907C7.45495 19.1313 6.82373 20.3042 6.08676 21.4101Z" fill="#FEFEFE"/>
                        <path d="M7 11.25C7.41423 11.2421 7.74358 10.8998 7.73566 10.4856C7.72792 10.0826 7.40303 9.75767 6.99995 9.74999H6.25C6.24194 9.33575 5.89961 9.00655 5.48538 9.01461C5.08253 9.02249 4.75783 9.34714 4.75 9.74999H4C3.58581 9.75856 3.25698 10.1013 3.26552 10.5155C3.27381 10.9176 3.59786 11.2417 4.00005 11.25H4.75V12.75H4C3.58577 12.75 3.25 13.0858 3.25 13.5C3.25 13.9142 3.58577 14.25 4 14.25H4.75C4.75806 14.6642 5.10039 14.9934 5.51462 14.9854C5.91747 14.9775 6.24217 14.6528 6.25 14.25H7C7.41423 14.2421 7.74358 13.8998 7.73566 13.4856C7.72792 13.0826 7.40303 12.7577 6.99995 12.75H6.25V11.25H7Z" fill="#FEFEFE"/>
                        <path d="M22.75 4.50001C22.7491 3.25656 21.7404 2.24922 20.4969 2.25006C19.8963 2.25048 19.3207 2.49086 18.8982 2.91775C17.5992 2.04011 15.8969 2.04109 14.5989 2.92028C13.7201 2.04367 12.2971 2.04541 11.4205 2.92417C10.9099 3.43605 10.6767 4.16237 10.7939 4.87581C10.7962 4.97387 12.2421 16.4459 12.25 16.5463V18.75C12.4579 24.7004 21.0387 24.7089 21.25 18.7499V16.5461L22.6972 4.96473C22.6972 4.96473 22.737 4.74137 22.75 4.50001ZM13.75 17.25H19.75V18H13.75V17.25ZM20.5 3.75001C20.9283 3.76042 21.267 4.11606 21.2566 4.54436C21.2545 4.63244 19.8379 15.75 19.8379 15.75H19.0482L19.75 4.50001C19.7504 4.08597 20.0859 3.75044 20.5 3.75001ZM16.75 3.75001C17.6468 3.75001 18.2426 4.1965 18.2488 4.49509L17.5454 15.75H15.9545L15.25 4.50001C15.25 4.20156 15.8484 3.75001 16.75 3.75001ZM13 3.75001C13.422 3.75667 13.7587 4.1042 13.7521 4.52622C13.752 4.53311 13.7517 4.54 13.7515 4.54689L14.4516 15.75H13.6621L12.2939 4.80175C12.1414 4.4012 12.3426 3.95294 12.7431 3.8005C12.8253 3.76928 12.9121 3.75217 13 3.75001ZM16.75 21.75C15.3858 21.7461 14.1964 20.8212 13.8565 19.5H19.6435C19.3036 20.8212 18.1142 21.7461 16.75 21.75Z" fill="#FEFEFE"/>
                    </svg>
                </button>

                <button className='flex items-center justify-center py-[14px] px-[21px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <g clip-path="url(#clip0_310_134)">
                            <path d="M21.4 4.29106C21.0478 3.32728 20.4082 2.49486 19.5676 1.9063C18.7271 1.31773 17.7261 1.0014 16.7 1.00006H8.30001C7.27388 1.0014 6.27291 1.31773 5.43236 1.9063C4.59181 2.49486 3.95222 3.32728 3.60001 4.29106L0.900005 11.7181C0.634454 12.4495 0.499075 13.2219 0.500005 14.0001V15.0001C0.501789 15.7729 0.683437 16.5346 1.03057 17.2251C1.3777 17.9155 1.88079 18.5157 2.50001 18.9781C2.50001 18.9861 2.50001 18.9921 2.50001 19.0001V21.0001C2.50001 21.7957 2.81608 22.5588 3.37868 23.1214C3.94129 23.684 4.70436 24.0001 5.50001 24.0001C6.29565 24.0001 7.05872 23.684 7.62133 23.1214C8.18394 22.5588 8.50001 21.7957 8.50001 21.0001V20.0001H16.5V21.0001C16.5 21.7957 16.8161 22.5588 17.3787 23.1214C17.9413 23.684 18.7044 24.0001 19.5 24.0001C20.2957 24.0001 21.0587 23.684 21.6213 23.1214C22.1839 22.5588 22.5 21.7957 22.5 21.0001V19.0001C22.5 18.9921 22.5 18.9861 22.5 18.9781C23.1192 18.5157 23.6223 17.9155 23.9694 17.2251C24.3166 16.5346 24.4982 15.7729 24.5 15.0001V14.0001C24.501 13.2222 24.3656 12.4502 24.1 11.7191L21.4 4.29106ZM5.48201 4.97506C5.69344 4.39723 6.07694 3.89811 6.58081 3.54497C7.08469 3.19183 7.68471 3.00165 8.30001 3.00006H16.7C17.3156 3.00124 17.9161 3.19123 18.4204 3.5444C18.9246 3.89756 19.3085 4.39691 19.52 4.97506L21.708 11.0001H3.291L5.48201 4.97506ZM6.50001 21.0001C6.50001 21.2653 6.39465 21.5196 6.20711 21.7072C6.01958 21.8947 5.76522 22.0001 5.50001 22.0001C5.23479 22.0001 4.98043 21.8947 4.7929 21.7072C4.60536 21.5196 4.50001 21.2653 4.50001 21.0001V19.9001C4.82913 19.9669 5.16416 20.0004 5.50001 20.0001H6.50001V21.0001ZM20.5 21.0001C20.5 21.2653 20.3946 21.5196 20.2071 21.7072C20.0196 21.8947 19.7652 22.0001 19.5 22.0001C19.2348 22.0001 18.9804 21.8947 18.7929 21.7072C18.6054 21.5196 18.5 21.2653 18.5 21.0001V20.0001H19.5C19.8359 20.0004 20.1709 19.9669 20.5 19.9001V21.0001ZM22.5 15.0001C22.5 15.7957 22.1839 16.5588 21.6213 17.1214C21.0587 17.684 20.2957 18.0001 19.5 18.0001H5.50001C4.70436 18.0001 3.94129 17.684 3.37868 17.1214C2.81608 16.5588 2.50001 15.7957 2.50001 15.0001V14.0001C2.50408 13.6633 2.54465 13.328 2.62101 13.0001H4.50001V14.0001C4.50001 14.2653 4.60536 14.5196 4.7929 14.7072C4.98043 14.8947 5.23479 15.0001 5.50001 15.0001C5.76522 15.0001 6.01958 14.8947 6.20711 14.7072C6.39465 14.5196 6.50001 14.2653 6.50001 14.0001V13.0001H18.5V14.0001C18.5 14.2653 18.6054 14.5196 18.7929 14.7072C18.9804 14.8947 19.2348 15.0001 19.5 15.0001C19.7652 15.0001 20.0196 14.8947 20.2071 14.7072C20.3946 14.5196 20.5 14.2653 20.5 14.0001V13.0001H22.379C22.4554 13.328 22.496 13.6633 22.5 14.0001V15.0001Z" fill="#FEFEFE"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_310_134">
                            <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>

                <button className='flex items-center justify-center py-[14px] px-[21px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <g clip-path="url(#clip0_310_137)">
                          <path d="M23.4998 5H20.9138L23.2068 2.707C23.389 2.5184 23.4897 2.2658 23.4875 2.0036C23.4852 1.7414 23.38 1.49059 23.1946 1.30518C23.0092 1.11977 22.7584 1.0146 22.4962 1.01233C22.234 1.01005 21.9814 1.11084 21.7928 1.293L19.4998 3.586V1C19.4998 0.734784 19.3944 0.48043 19.2069 0.292893C19.0194 0.105357 18.765 0 18.4998 0C18.2346 0 17.9802 0.105357 17.7927 0.292893C17.6051 0.48043 17.4998 0.734784 17.4998 1V5.456C16.6812 4.58461 15.715 3.86486 14.6458 3.33C13.8951 2.99886 13.0567 2.92204 12.2583 3.11122C11.4599 3.3004 10.7451 3.74522 10.2228 4.378C8.46479 6.136 3.56479 15.121 0.799792 20.319C0.556782 20.792 0.470182 21.3298 0.55247 21.8552C0.634757 22.3805 0.881684 22.8661 1.25767 23.2421C1.63366 23.6181 2.11931 23.865 2.64463 23.9473C3.16995 24.0296 3.70784 23.943 4.18079 23.7C9.38079 20.936 18.3638 16.035 20.1218 14.277C20.7544 13.7548 21.1992 13.0402 21.3885 12.2421C21.5778 11.4439 21.5014 10.6057 21.1708 9.855C20.6352 8.78564 19.9152 7.81916 19.0438 7H23.4998C23.765 7 24.0194 6.89464 24.2069 6.70711C24.3944 6.51957 24.4998 6.26522 24.4998 6C24.4998 5.73478 24.3944 5.48043 24.2069 5.29289C24.0194 5.10536 23.765 5 23.4998 5ZM18.7078 12.863C17.9929 13.4747 17.2256 14.0225 16.4148 14.5L14.2068 12.293C14.0182 12.1108 13.7656 12.01 13.5034 12.0123C13.2412 12.0146 12.9904 12.1198 12.805 12.3052C12.6196 12.4906 12.5144 12.7414 12.5121 13.0036C12.5098 13.2658 12.6106 13.5184 12.7928 13.707L14.6628 15.576C11.9168 17.219 7.97379 19.418 3.24179 21.934C3.14727 21.9841 3.03916 22.0026 2.93335 21.9868C2.82754 21.9709 2.72961 21.9215 2.65395 21.8458C2.57829 21.7702 2.5289 21.6723 2.51303 21.5664C2.49716 21.4606 2.51566 21.3525 2.56579 21.258C4.08779 18.397 5.48879 15.834 6.72579 13.64L8.79279 15.707C8.98139 15.8892 9.234 15.99 9.49619 15.9877C9.75839 15.9854 10.0092 15.8802 10.1946 15.6948C10.38 15.5094 10.4852 15.2586 10.4875 14.9964C10.4897 14.7342 10.389 14.4816 10.2068 14.293L7.75079 11.837C8.84079 9.948 9.75679 8.437 10.4598 7.374L12.7928 9.707C12.9814 9.88916 13.234 9.98995 13.4962 9.98767C13.7584 9.9854 14.0092 9.88023 14.1946 9.69482C14.38 9.50941 14.4852 9.2586 14.4875 8.9964C14.4897 8.7342 14.389 8.4816 14.2068 8.293L11.6738 5.76C12.5208 4.971 13.0398 4.838 13.8568 5.168C14.9909 5.8152 16.0078 6.64887 16.8648 7.634C17.8503 8.49132 18.6843 9.50856 19.3318 10.643C19.5808 11.223 19.6778 11.894 18.7078 12.863Z" fill="#FEFEFE"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_310_137">
                            <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                          </clipPath>
                        </defs>
                    </svg>
                </button>
                
                {/* line div  */}
                <div className='w-full h-[1px] bg-[#FFF]'></div>

                <button className='flex items-center justify-center py-[14px] px-[21px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                      <path d="M16.5 2C8.76875 2 2.5 8.26875 2.5 16C2.5 23.7313 8.76875 30 16.5 30C24.2313 30 30.5 23.7313 30.5 16C30.5 8.26875 24.2313 2 16.5 2ZM16.5 27.625C10.0813 27.625 4.875 22.4188 4.875 16C4.875 9.58125 10.0813 4.375 16.5 4.375C22.9188 4.375 28.125 9.58125 28.125 16C28.125 22.4188 22.9188 27.625 16.5 27.625Z" fill="white"/>
                      <path d="M15 10.5C15 10.8978 15.158 11.2794 15.4393 11.5607C15.7206 11.842 16.1022 12 16.5 12C16.8978 12 17.2794 11.842 17.5607 11.5607C17.842 11.2794 18 10.8978 18 10.5C18 10.1022 17.842 9.72064 17.5607 9.43934C17.2794 9.15804 16.8978 9 16.5 9C16.1022 9 15.7206 9.15804 15.4393 9.43934C15.158 9.72064 15 10.1022 15 10.5ZM17.25 14H15.75C15.6125 14 15.5 14.1125 15.5 14.25V22.75C15.5 22.8875 15.6125 23 15.75 23H17.25C17.3875 23 17.5 22.8875 17.5 22.75V14.25C17.5 14.1125 17.3875 14 17.25 14Z" fill="white"/>
                    </svg>
                </button>

            </div>

            <div></div>
        </div>
    </div>
  )
}

export default VerticalComponent