import React, { useContext, useEffect, useRef, useState } from 'react';
import './OwnChat.css';
import { ECContext } from '../../context/ECcontext';

const OwnChat = (props) => {

    const { 
        sendEmojie,
        sendHint, } = useContext(ECContext);


    return (
        <div className='EC_OWC_Act'>
            {/* <svg className='EC_Main_svg1' xmlns="http://www.w3.org/2000/svg" width="360" height="250" viewBox="0 0 360 250" fill="none">
                <path d="M-12 -97C16.3333 -95.3333 137.593 89.8627 95 62.5C12.5 9.5 -5.5 80.5 43.5 108.5C108 145.357 218.245 240 144 240C95 240 113 137.5 191.5 159.5C270 181.5 313.387 225.588 336.5 172.5C368.5 99 257.5 52 311 -23C360.614 -92.5529 388 -32 388 0.5" stroke="#1D2939" stroke-width="19" />
            </svg> */}
            <div className="backbtnEC" onClick={props.onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.165 11.9934L13.1634 11.6393C13.1513 10.2348 13.0666 8.98174 12.9206 8.18763C12.9206 8.17331 12.7613 7.38572 12.6599 7.12355C12.5006 6.74463 12.2126 6.42299 11.8515 6.2192C11.5624 6.0738
                     11.2592 6 10.9417 6C10.6922 6.01157 10.2806 6.13714 9.98692 6.24242L9.74283 6.33596C8.12612 6.97815 5.03561 9.07656 3.85199 10.3598L3.76473 10.4495L3.37527 10.8698C3.12982 11.1915 3 11.5847 3 12.0077C3 12.3866 3.11563 12.7656 3.3469 13.0718C3.41614 13.171
                     3.52766 13.2983 3.62693 13.4058L4.006 13.8026C5.31046 15.1243 8.13485 16.9782 9.59883 17.5924C9.59883 17.6057 10.5086 17.9857 10.9417 18H10.9995C11.6639 18 12.2846 17.6211 12.6021 17.0086C12.6888 16.8412 12.772 16.5132 12.8352 16.2252L12.949 15.6813C13.0788
                     14.8067 13.165 13.465 13.165 11.9934ZM19.4967 13.5183C20.3269 13.5183 21 12.8387 21 12.0004C21 11.1622 20.3269 10.4825 19.4967 10.4825L15.7975 10.8097C15.1463 10.8097 14.6183 11.3417 14.6183 12.0004C14.6183 12.6581 15.1463 13.1912 15.7975 13.1912L19.4967 13.5183Z"
                        fill="white" />
                </svg>
            </div>
            <div className="EC_act_Main_wyb"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="30" viewBox="0 0 46 30" fill="none">
                <path d="M44.6502 7.91463C44.5816 9.86367 43.5117 12.2838 40.6549 14.5627C36.2038 18.1156 33.8485 20.7341 32.0559 22.7251C30.0496 24.9621 28.5487 26.6384 25.4707 27.6892C21.8377 28.8067 16.6313 27.0904 13.641 24.6684C11.1294 22.6984 10.4448 20.2592 9.76011 17.3452C9.19943 15.0528 8.64447 12.4573 6.17861 11.7097C3.3237 10.7714 2.36253 10.1021 1.81519 9.37736L1.80566 9.36783C1.31935 8.72895 1.13818 7.74299 1.56155 6.76084C1.98492 5.78823 2.9747 4.90906 4.70824 4.37698C8.51097 3.28613 13.0765 6.05522 15.1934 9.18856C16.5245 6.79707 20.1423 1.22457 23.9679 1.15019C25.3467 1.0701 26.5787 1.6365 27.2691 2.89327C29.1399 2.71973 30.8906 3.37958 31.7355 5.56319C32.279 5.75581 32.8702 6.09527 33.3984 6.62544C34.1041 7.33106 34.7334 8.4181 34.8802 10.0525C35.8548 9.55091 36.8998 8.88915 37.6436 8.05384C38.9519 6.65023 40.2811 4.03561 42.5238 4.2473C44.0781 4.53146 44.6941 6.33747 44.6483 7.91081L44.6502 7.91463Z" fill="black" />
                <path d="M45.5523 8.57238C45.8575 6.425 44.9783 3.68833 42.6478 3.30501C40.3307 3.09714 39.0816 4.82686 37.8992 6.24764C37.2107 7.13635 36.5661 7.94686 35.5745 8.55712C35.3323 7.71229 34.9261 6.92275 34.3577 6.25718V6.24192L34.1327 6.01307C34.1327 6.01307 34.1289 6.00926 34.127 6.00735L34.1155 5.99209L34.066 5.94632C33.6674 5.52295 32.8626 5.01567 32.3858 4.6743C31.9109 3.69787 31.1176 2.87592 30.1355 2.41631L30.1068 2.40105C29.7788 2.28281 29.3993 2.1188 29.0599 2.04824C28.8558 2.00247 28.6441 1.97196 28.4362 1.94907C28.4553 1.94907 27.7554 1.88423 27.7459 1.88423C25.8178 -0.589259 22.4156 -0.0629031 20.0317 1.71831C18.0331 3.16961 16.1737 5.78422 15.0962 7.50441C13.1166 5.23498 9.95849 3.39464 6.98916 3.20012C4.2563 2.93313 1.3232 4.64378 0.693867 6.38877C0.169418 7.59786 0.297193 8.95189 1.04286 9.93976L1.04668 9.94357C1.05431 9.95311 1.09626 10.0065 1.10389 10.018H1.1058V10.0199L1.11152 10.0256C1.33655 10.3116 1.60355 10.571 1.92966 10.8189C2.75352 11.4464 3.99122 11.9994 5.90212 12.6268C7.87786 13.2199 8.30123 15.4779 8.78182 17.3431C9.14416 18.8249 9.476 20.2285 10.1015 21.6931L10.1053 21.6969C12.2527 26.4856 18.9161 29.3711 24.1911 28.9401C28.0319 28.4042 30.4959 25.9612 32.7691 23.3656C34.5599 21.3766 36.7816 18.9088 41.0097 15.5065C44.183 13.1265 45.4188 10.1724 45.5542 8.57619L45.5523 8.57238Z" fill="black" />
                <path d="M26.8059 9.65757C25.4723 12.5255 23.7089 14.8318 22.2655 16.0461C21.9956 16.2731 21.6933 16.454 21.3743 16.5848C21.4381 17.3002 21.7498 17.8148 22.2864 18.0815C23.1022 18.4884 24.3301 18.275 25.2725 17.5638C26.991 16.2668 29.0117 14.0034 30.5105 11.0392C31.7144 8.65976 32.0794 6.65261 31.568 5.23433C31.3211 4.69463 31.0115 4.27103 30.6685 3.94051C30.4593 3.73865 30.2365 3.5713 30.0085 3.43533C29.6163 3.2 29.2073 3.05252 28.8161 2.96571C28.6205 2.92282 28.4323 2.89458 28.2524 2.87785C28.3664 3.27426 28.4218 3.71041 28.4155 4.18422C28.3988 5.57112 27.8717 7.36176 26.8048 9.65653L26.8059 9.65757Z" fill="#D4FA05" />
                <path d="M31.3745 11.4764C30.0828 14.0306 28.2733 16.1539 26.8079 17.5303C26.8487 17.9947 27.0286 18.5082 27.5924 18.6756C27.7221 18.7143 27.8675 18.7342 28.0223 18.7342C29.1215 18.7342 31.3368 17.6077 32.707 15.5556C34.1316 13.4198 34.8438 11.5444 34.8376 9.95148C34.6618 8.23825 33.9506 7.13897 33.1913 6.45598C33.0386 6.31896 32.8859 6.19973 32.7373 6.09722C32.8806 7.59604 32.4236 9.39923 31.3734 11.4775L31.3745 11.4764Z" fill="#D4FA05" />
                <path d="M44.069 5.44563C43.7092 4.81912 43.1569 4.32649 42.4938 4.24281C41.3517 4.09847 40.4197 4.80866 39.6865 5.5701C39.309 5.96232 38.9481 6.40684 38.6071 6.83567C38.558 6.89738 38.5088 6.95909 38.4597 7.01976C38.1679 7.38793 37.8907 7.73727 37.6125 8.05H37.6114C37.1031 8.62735 36.4243 9.12731 35.7894 9.51953C35.9306 11.4074 35.1692 13.6091 33.5114 16.0922C32.6882 17.3253 31.158 18.4539 30.1131 19.0584C29.3831 19.481 28.6603 19.7006 28.0181 19.7006C27.7713 19.7006 27.537 19.6682 27.3174 19.6034C26.6511 19.4057 26.1846 18.9287 25.9681 18.2499C25.9305 18.2792 25.8928 18.3085 25.8551 18.3367C25.0592 18.9371 24.1147 19.254 23.2361 19.254C22.7425 19.254 22.2687 19.1536 21.8555 18.9486C21.0512 18.548 20.5565 17.8033 20.4289 16.8254C20.3169 16.8369 20.205 16.8431 20.0931 16.8431C19.6883 16.8431 19.2888 16.7657 18.9248 16.6057C18.0211 16.2083 17.4762 15.3788 17.4312 14.3298C17.358 12.6165 18.3265 10.9974 19.1811 9.56974C19.9069 8.35646 20.592 7.21012 20.5282 6.24368C20.5104 5.97696 20.7123 5.74686 20.979 5.72908C21.2447 5.7113 21.4758 5.91316 21.4936 6.17988C21.5773 7.44754 20.8169 8.7194 20.0115 10.0655C19.1884 11.4409 18.338 12.8634 18.3987 14.2869C18.428 14.9636 18.7533 15.4709 19.3149 15.7188C20.0356 16.0357 20.9706 15.8694 21.6421 15.3046C22.9757 14.1833 24.6555 11.9858 25.9284 9.24864C27.5381 5.78661 27.6657 3.94786 27.24 2.88938C27.2379 2.88938 27.2368 2.88938 27.2358 2.88938C26.5444 1.63217 25.3144 1.06527 23.9338 1.14581C22.4548 1.23158 20.8221 2.05054 19.4018 3.45418C17.426 5.40589 15.8853 7.89939 15.1595 9.18379C14.0591 7.5354 12.3354 6.08156 10.4674 5.16218C8.59101 4.23863 6.4866 3.81398 4.67295 4.37146C2.93984 4.90384 1.94935 5.78242 1.52574 6.75514C1.10842 7.7153 1.281 8.69848 1.74016 9.3229L1.76945 9.36264L1.77886 9.37206C2.32484 10.0969 3.28814 10.7663 6.14248 11.7034C6.98864 11.9806 7.6026 12.4272 8.07432 13.0171C8.54499 13.606 8.87236 14.3392 9.14744 15.1906C9.36395 15.86 9.53862 16.5754 9.72375 17.3389C9.77814 17.5617 9.83358 17.7887 9.8911 18.0198C10.1432 19.0291 10.4339 20.0949 10.868 21.1409C12.0133 23.8969 14.7714 25.8402 17.6069 26.9385C19.0346 27.4907 20.5094 27.8411 21.8607 27.9729C23.2027 28.1036 24.4609 28.0241 25.4357 27.6821C28.3047 26.6833 29.7021 25.2817 31.5743 23.2129C31.7197 23.0518 31.8692 22.8865 32.022 22.716C33.8136 20.7235 36.1701 18.1056 40.6216 14.5526C43.478 12.2735 44.548 9.85423 44.6171 7.90462C44.6505 6.93608 44.4372 6.0847 44.069 5.44354V5.44563Z" fill="#D4FA05" />
            </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="29" viewBox="0 0 58 29" fill="none">
                    <g clip-path="url(#clip0_1077_2132)">
                        <path d="M57.8135 12.7858C57.8135 17.0607 54.7275 20.5394 50.9351 20.5394C50.0498 20.5394 49.1753 20.3462 48.3587 19.9762C48.028 20.3228 47.5619 20.5394 47.0469 20.5394H41.8091C40.7323 20.5394 39.8578 19.6639 39.8578 18.5897V5.25963C39.8578 4.47795 40.3221 3.77571 41.0394 3.46881C42.7053 2.75753 44.2627 1.81338 45.6684 0.665231C46.0243 0.374583 46.4525 0.21933 46.906 0.21933C47.9847 0.21933 48.8609 1.09488 48.8609 2.16902V5.39142C49.5294 5.15312 50.2287 5.03036 50.9351 5.03036C54.7275 5.03036 57.8135 8.50911 57.8135 12.7858Z" fill="black" />
                        <path d="M50.9351 5.93299C49.8511 5.93299 48.8356 6.26516 47.9576 6.84465V2.16901C47.9576 1.28263 46.9277 0.802426 46.2393 1.36386C44.7794 2.55534 43.1515 3.54824 41.3954 4.29923C41.0105 4.46351 40.7612 4.84081 40.7612 5.25963V18.5897C40.7612 19.1674 41.2309 19.6368 41.8091 19.6368H47.0469C47.5492 19.6368 47.9576 19.2288 47.9576 18.7269C48.8356 19.3046 49.8511 19.6368 50.9351 19.6368C54.2343 19.6368 56.9101 16.5696 56.9101 12.7858C56.9101 9.00195 54.2343 5.93299 50.9351 5.93299ZM49.3596 14.3907C48.5863 14.3907 47.9576 13.6722 47.9576 12.7858C47.9576 11.8994 48.5863 11.1791 49.3596 11.1791C50.1329 11.1791 50.7599 11.8976 50.7599 12.7858C50.7599 13.674 50.1329 14.3907 49.3596 14.3907Z" fill="#FEFFFB" />
                        <path d="M30.0055 28.1197C27.8608 28.1197 25.7921 27.4879 24.0251 26.2946C23.4866 25.9317 23.165 25.3234 23.165 24.6699V20.8499C23.165 19.9473 23.7703 19.171 24.5888 18.9309C23.9727 18.2828 23.53 17.4831 23.315 16.6112C23.2156 16.2014 23.165 15.7843 23.165 15.3709V6.98547C23.165 5.90772 24.0431 5.03036 25.1218 5.03036H30.2151C30.2638 5.03036 30.3126 5.03217 30.3614 5.03578H30.3686L30.4192 5.0412C31.0841 5.1116 31.6388 5.50515 31.9351 6.05576C31.9857 5.96369 32.0435 5.87523 32.1086 5.79219C32.4699 5.3174 33.0517 5.03036 33.657 5.03036H38.7484C39.8289 5.03036 40.707 5.90772 40.707 6.98727V17.4253C40.707 17.9723 40.6654 18.5211 40.5841 19.0519C39.8885 23.6228 36.2081 27.3019 31.6316 27.997C31.0986 28.0782 30.5511 28.1197 30.0037 28.1197H30.0055Z" fill="black" />
                        <path d="M38.7502 5.93298H33.6588C33.3191 5.93298 33.0156 6.09365 32.824 6.34458C32.6867 6.5215 32.6054 6.74355 32.6054 6.98545V14.5242C32.6054 14.8871 32.3344 15.2121 31.9712 15.2319C31.5846 15.2518 31.2666 14.9449 31.2666 14.5622V6.98365C31.2666 6.44026 30.8547 5.99436 30.3253 5.9384H30.3217C30.2873 5.93479 30.2512 5.93298 30.2151 5.93298H25.1218C24.54 5.93298 24.0684 6.40416 24.0684 6.98545V15.3709C24.0684 15.7229 24.1118 16.0659 24.1913 16.3945C24.4316 17.3657 25.0043 18.207 25.783 18.7883C25.7867 18.7919 25.7885 18.7937 25.7921 18.7955C26.5039 19.3226 27.3856 19.635 28.3396 19.635C29.7128 19.635 30.9342 18.9869 31.7129 17.9795C32.273 17.2592 32.6054 16.3548 32.6054 15.3709V16.4703C32.6054 17.2159 32.4139 17.9272 32.076 18.55C31.3443 19.9039 29.926 20.8481 28.3071 20.8373C27.364 20.83 26.4967 20.5177 25.7921 19.9978C25.7885 19.996 25.7867 19.9942 25.783 19.9906C25.5969 19.839 25.3566 19.7505 25.0947 19.7577C24.5165 19.7722 24.0684 20.2722 24.0684 20.8499V24.6698C24.0684 25.0201 24.2401 25.3504 24.5309 25.5472C26.0938 26.6015 27.9765 27.2171 30.0055 27.2171C30.5132 27.2171 31.0118 27.1792 31.4979 27.1051C35.7185 26.4643 39.052 23.1336 39.6934 18.9165C39.7675 18.4308 39.8054 17.9326 39.8054 17.4253V6.98726C39.8054 6.40416 39.3338 5.93298 38.7502 5.93298Z" fill="#FEFFFB" />
                        <path d="M13.8782 20.5376C13.1284 20.5376 12.4599 20.1206 12.1275 19.4707C11.795 20.1206 11.1265 20.5376 10.3767 20.5376L3.67538 20.5268C2.6943 20.5268 1.85596 19.7902 1.72768 18.8172L0.20276 7.25265C0.128683 6.69121 0.300326 6.12616 0.674328 5.70012C1.04833 5.27408 1.58675 5.03036 2.15407 5.03036H6.9095C7.90322 5.03036 8.74337 5.77413 8.86262 6.75981L9.13544 9.00737C9.45886 8.78171 9.84912 8.65354 10.2647 8.65354H13.9902C14.4058 8.65354 14.7979 8.78171 15.1195 9.00737L15.3923 6.75981C15.5115 5.77413 16.3517 5.03036 17.3454 5.03036H22.1008C22.6682 5.03036 23.2066 5.27408 23.5806 5.70012C23.9546 6.12616 24.1262 6.69121 24.0522 7.25265L22.5254 18.8172C22.3972 19.7902 21.5606 20.525 20.5777 20.525L13.88 20.5358H13.8764L13.8782 20.5376Z" fill="black" />
                        <path d="M22.1027 5.93299H17.3472C16.8088 5.93299 16.3553 6.33376 16.2903 6.86812L15.6362 12.2677L15.0057 10.2945C14.8647 9.85403 14.4546 9.55435 13.9921 9.55435H10.2665C9.80395 9.55435 9.39382 9.85403 9.25289 10.2945L8.62232 12.2659L7.96827 6.86631C7.90323 6.33195 7.44973 5.93118 6.91131 5.93118H2.15408C1.51087 5.93118 1.01581 6.49623 1.09892 7.13349L2.62565 18.698C2.69611 19.227 3.146 19.6205 3.679 19.6223L10.3767 19.6332C10.8392 19.6332 11.2512 19.3353 11.3921 18.893L12.1293 16.5895L12.8664 18.893C13.0074 19.3335 13.4175 19.6332 13.8818 19.6332L20.5795 19.6223C21.1125 19.6223 21.5624 19.227 21.6329 18.698L23.1596 7.13349C23.2445 6.49623 22.7477 5.93118 22.1045 5.93118L22.1027 5.93299Z" fill="#FEFFFB" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1077_2132">
                            <rect width="57.627" height="27.9004" fill="white" transform="translate(0.186501 0.21933)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className='EC_OWC_tp_SubHead'>
                Emoji charades
            </div>
            <div className='EC_OWC_Head'>
                Ready to share
            </div>
            <div className="EC_OWC_Area">
                <svg className='EC_OWC_Area_svg1' xmlns="http://www.w3.org/2000/svg" width="82" height="75" viewBox="0 0 82 75" fill="none">
                    <path opacity="0.2" d="M55.4198 53.3261L54.4644 53.103C54.3889 53.2703 54.0533 53.8531 53.5095 54.7182C52.9749 55.5686 52.2584 56.6619 51.4414 57.8325C49.8006 60.1832 47.7792 62.8096 46.0223 64.4201L46.0218 64.4205C42.5003 67.6576 37.7544 69.8152 33.1219 69.1438L33.1209 69.1437C27.9561 68.4058 23.6906 64.1882 21.7973 59.2302C20.8625 56.7826 20.5702 53.0374 20.5827 49.7568C20.5888 48.1266 20.6701 46.6317 20.7788 45.4994C20.8332 44.9326 20.894 44.4623 20.9546 44.1141C20.985 43.9396 21.0142 43.8021 21.0408 43.7016C21.0655 43.608 21.0811 43.5738 21.0805 43.5735C21.0803 43.5735 21.0794 43.5751 21.0775 43.5783L20.2277 43.0511C17.9576 46.6356 15.5576 49.9557 12.7588 52.8831C10.6996 55.0317 8.30938 56.9594 5.52257 57.2309C2.89015 57.482 0.211678 56.1296 -1.52602 54.0482C-3.26408 51.9663 -4.1602 49.2499 -4.48313 46.4814C-4.63853 45.106 -4.63007 42.9912 -4.57013 41.2079C-4.5403 40.3206 -4.49809 39.5248 -4.45855 38.9571C-4.43873 38.6724 -4.41986 38.4493 -4.40398 38.3022C-4.40246 38.2881 -4.401 38.275 -4.3996 38.2629C-4.3899 38.2152 -4.38013 38.1677 -4.37028 38.1203L-4.31096 37.8345L-4.53059 37.6423C-4.62356 37.561 -4.78609 37.485 -4.98022 37.5323C-5.13689 37.5705 -5.22413 37.6698 -5.25341 37.7062C-5.31414 37.7817 -5.33819 37.8581 -5.34183 37.8688C-5.35758 37.9155 -5.36605 37.961 -5.37014 37.984C-5.37627 38.0184 -5.3821 38.0591 -5.38768 38.1038C-5.60351 39.1708 -5.78874 40.3174 -5.97894 41.4947C-6.08678 42.1623 -6.19622 42.8398 -6.31376 43.5183C-6.65357 45.48 -7.06598 47.4857 -7.71394 49.4198C-9.0094 53.2865 -11.3683 56.8947 -14.8379 58.8845C-18.3108 60.8661 -22.9863 60.9012 -25.9902 58.4041C-28.8076 56.0593 -29.7541 52.1233 -30.2642 48.2828L-30.2643 48.2824C-32.0537 34.8916 -30.5839 21.1786 -27.1661 8.06514C-26.373 5.04318 -25.3925 2.0314 -23.1248 0.186879C-20.4855 -1.94834 -16.461 -1.9583 -13.386 -0.31065C-10.3147 1.33503 -8.13851 4.38954 -6.8353 7.71124C-5.53057 11.0368 -5.02649 14.6273 -4.52512 18.2472L-4.29862 19.8825L-3.57973 18.3964C1.13078 8.65799 8.52385 0.358809 17.6958 -4.8159C21.4008 -6.90173 25.5985 -8.46025 29.588 -7.54412C33.8026 -6.57371 37.097 -2.84022 38.2888 1.3941L38.2891 1.39512C39.4902 5.62784 38.8191 10.2521 37.204 14.4179C35.6239 18.4932 33.2229 22.1988 30.6554 26.1615C30.5938 26.2564 30.5322 26.3515 30.4705 26.4468L31.1293 27.1577C31.4651 26.9748 31.9404 26.5915 32.4686 26.1298C33.0099 25.6566 33.6476 25.0642 34.3206 24.43C34.6208 24.1471 34.928 23.8559 35.2374 23.5626C36.3224 22.5342 37.4348 21.4798 38.3687 20.6655C40.7536 18.5862 43.7565 17.0151 46.6736 17.5892L46.6749 17.5895C49.7208 18.1802 51.9953 21.0467 52.8061 24.1837C53.2096 25.7452 53.3552 28.1863 53.3927 30.2876C53.4113 31.33 53.4033 32.2747 53.3893 32.9641C53.3823 33.3088 53.3739 33.5889 53.3666 33.7849C53.3654 33.818 53.3642 33.8486 53.3631 33.8767C53.3608 33.9316 53.3588 33.9766 53.357 34.011C53.3557 34.0373 53.3546 34.0557 53.3538 34.0671C53.3534 34.0731 53.3533 34.0748 53.3534 34.0737L53.3544 34.0645C53.3544 34.0641 53.3547 34.061 53.3555 34.0559L54.3382 34.2371C54.3429 34.2162 54.3454 34.1983 54.3465 34.1901C55.646 25.3646 59.1239 16.8554 64.3932 9.65452C66.244 7.13344 68.516 4.76596 71.3929 4.5168C74.1107 4.28841 76.7528 6.12863 78.221 8.58514C79.681 11.0448 80.1637 13.9779 80.5136 16.9373L80.5136 16.9375C82.3962 32.8147 81.1893 49.1478 76.0072 64.2463L76.0069 64.2472C75.1389 66.7914 74.1348 69.2767 72.4171 71.2057C70.6908 73.1229 68.1341 74.3758 65.7093 73.9366C63.2818 73.4951 61.3819 71.4995 59.9175 69.2933C56.8243 64.5994 55.2235 58.9416 55.4198 53.3261Z" stroke="#BCC9DA" />
                </svg>
                <div className="EC_topic_OWC"><span>{sendHint}</span></div>
                <div className="EC_EMojie_OWC"><span>{sendEmojie}</span></div>
            </div>
            <div className='EC_OWC_svg1' >
                <svg xmlns="http://www.w3.org/2000/svg" width="208" height="21" viewBox="0 0 208 21" fill="none">
                    <ellipse cx="104" cy="10.5" rx="104" ry="10.5" fill="white" fill-opacity="0.1" />
                </svg>
            </div>
            <div className='LowerBtn-OWC_EC'>
                <button className='Lower-Btn_OWC1'><span>Close</span></button>
                <button className='Lower-Btn_OWC2'><span>Challenge friends!</span></button>
            </div>
        </div>
    )
}

export default OwnChat;
