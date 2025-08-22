"use client"

import { useState, useEffect } from "react"
import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaJs,
    FaJsSquare,
    FaReact,
    FaJava,
    FaDatabase,
    FaPhp,
    FaLaravel,
    FaFigma,
    FaPencilRuler,
    FaLeaf,
    FaLifeRing
} from "react-icons/fa"
import { SiFirebase, SiPostman } from "react-icons/si"
import { Wind } from "lucide-react"
import Image from "next/image"

// SVG content for Microsoft icons
const powerAppsSvg = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<linearGradient id="xAGFPLBfYtwwGNe8fnA90a_jXuZmZPUKCPS_gr1" x1="6.674" x2="30.141" y1="10.224" y2="33.81" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9d2f90"></stop><stop offset=".314" stop-color="#982e8d"></stop><stop offset=".666" stop-color="#8b2c83"></stop><stop offset="1" stop-color="#772874"></stop></linearGradient><path fill="url(#xAGFPLBfYtwwGNe8fnA90a_jXuZmZPUKCPS_gr1)" d="M18.926,44.317L2.49,25.23c-0.62-0.72-0.62-1.791,0-2.511L18.926,3.633 c0.755-0.877,2.104-0.877,2.859,0L38.22,22.719c0.62,0.72,0.62,1.791,0,2.511L21.785,44.317 C21.03,45.194,19.681,45.194,18.926,44.317z"></path><path d="M38.22,25.23c0.62-0.72,0.62-1.791,0-2.511L22.494,4.455l-5.812,6.215 c-1.199,1.344-1.185,3.364,0.037,4.702l7.696,8.265c0.176,0.193,0.176,0.482,0,0.674l-7.641,8.36 c-1.215,1.33-1.221,3.353-0.008,4.711l5.694,6.149L38.22,25.23z" opacity=".05"></path><path d="M38.22,25.23c0.62-0.72,0.62-1.791,0-2.511L22.822,4.836l-5.767,6.167 c-1.028,1.152-1.017,2.882,0.03,4.028l7.699,8.269c0.351,0.385,0.352,0.965,0,1.349l-7.641,8.36 c-1.042,1.141-1.048,2.872-0.01,4.035l5.656,6.108L38.22,25.23z" opacity=".07"></path><path d="M38.22,25.23c0.62-0.72,0.62-1.791,0-2.511L23.15,5.217l-5.722,6.118 c-0.856,0.96-0.848,2.4,0.022,3.354l7.703,8.273c0.526,0.577,0.526,1.447,0,2.023l-7.641,8.36c-0.868,0.95-0.876,2.391-0.013,3.357 l5.617,6.066L38.22,25.23z" opacity=".09"></path><linearGradient id="xAGFPLBfYtwwGNe8fnA90b_jXuZmZPUKCPS_gr2" x1="16.835" x2="39.082" y1="11.995" y2="38.287" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e286c5"></stop><stop offset=".413" stop-color="#e081c3"></stop><stop offset=".878" stop-color="#da74be"></stop><stop offset="1" stop-color="#d86fbc"></stop></linearGradient><path fill="url(#xAGFPLBfYtwwGNe8fnA90b_jXuZmZPUKCPS_gr2)" d="M45.518,22.745L28.257,3.658c-0.79-0.885-2.174-0.885-2.964,0l-7.492,8.011 c-0.683,0.765-0.676,1.923,0.015,2.68l7.707,8.277c0.697,0.764,0.697,1.933,0,2.697l-7.641,8.36 c-0.692,0.757-0.698,1.915-0.015,2.68l7.389,7.979c0.79,0.885,2.174,0.885,2.964,0l17.299-19.087 C46.156,24.54,46.156,23.46,45.518,22.745z"></path><linearGradient id="xAGFPLBfYtwwGNe8fnA90c_jXuZmZPUKCPS_gr3" x1="27.41" x2="45.997" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f2a1c7"></stop><stop offset=".62" stop-color="#ed9ec8"></stop><stop offset="1" stop-color="#e799ca"></stop></linearGradient><path fill="url(#xAGFPLBfYtwwGNe8fnA90c_jXuZmZPUKCPS_gr3)" d="M35.322,33.484l-7.384-8.103c-0.704-0.773-0.704-1.989,0-2.762l7.384-8.103 c0.752-0.825,2.01-0.825,2.762,0l7.384,8.103c0.704,0.773,0.704,1.989,0,2.762l-7.384,8.103 C37.332,34.31,36.075,34.31,35.322,33.484z" opacity=".61"></path><path fill="none" d="M45.518,22.745L28.257,3.658c-0.79-0.885-2.174-0.885-2.964,0l-7.492,8.011 c-0.683,0.765-0.676,1.923,0.015,2.68l7.707,8.277c0.697,0.764,0.697,1.933,0,2.697l-7.641,8.36 c-0.692,0.757-0.698,1.915-0.015,2.68l7.389,7.979c0.79,0.885,2.174,0.885,2.964,0l17.299-19.087 C46.156,24.54,46.156,23.46,45.518,22.745z"></path>
</svg>`;
const powerAutomateSvg = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<linearGradient id="1~WE0Lz3GgLZUex~1j_nwa_kTTt25v6Drpd_gr1" x1="10.281" x2="24.742" y1="1.322" y2="16.996" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#196de5"></stop><stop offset="1" stop-color="#1351c8"></stop></linearGradient><path fill="url(#1~WE0Lz3GgLZUex~1j_nwa_kTTt25v6Drpd_gr1)" d="M4.662,6.941c-0.001,0-0.003,0-0.004,0c-1.42,0-2.179,1.675-1.241,2.743L16,24L30.869,7.159 c-0.241-0.101-0.501-0.16-0.768-0.161L4.662,6.941z"></path><linearGradient id="1~WE0Lz3GgLZUex~1j_nwb_kTTt25v6Drpd_gr2" x1="17.184" x2="27.74" y1="23.368" y2="36.213" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4d9fff"></stop><stop offset="1" stop-color="#1667eb"></stop></linearGradient><path fill="url(#1~WE0Lz3GgLZUex~1j_nwb_kTTt25v6Drpd_gr2)" d="M38.056,14.996l-6.46-7.322c-0.202-0.229-0.452-0.401-0.727-0.516L16,24L3.457,38.215 c-0.951,1.078-0.192,2.769,1.24,2.782l10.785-0.007L38.056,14.996z"></path><linearGradient id="1~WE0Lz3GgLZUex~1j_nwc_kTTt25v6Drpd_gr3" x1="27.324" x2="33.437" y1="27.209" y2="37.448" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#70bcfd"></stop><stop offset="1" stop-color="#4a9ff9"></stop></linearGradient><path fill="url(#1~WE0Lz3GgLZUex~1j_nwc_kTTt25v6Drpd_gr3)" d="M44.217,21.982l-6.161-6.985L15.482,41l14.796-0.01c0.506-0.046,0.98-0.273,1.319-0.658 l12.62-14.308C45.236,24.87,45.236,23.137,44.217,21.982z"></path><path d="M16,24L30.869,7.159c-0.241-0.101-0.501-0.16-0.768-0.161l-0.423-0.001 L15.336,23.245L16,24z" opacity=".05"></path><path d="M15.669,23.624L16,24L30.869,7.159c-0.173-0.073-0.358-0.114-0.546-0.137 L15.669,23.624z" opacity=".07"></path>
</svg>`;
const dataverseSvg = `<svg width="40" height="40" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="filter0_f">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter1_f">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur"/>
</filter>
<linearGradient id="paint0_linear" x1="35.1986" y1="10.2397" x2="43.5185" y2="85.7595" gradientUnits="userSpaceOnUse">
<stop stop-color="#096738"/>
<stop offset="1" stop-color="#0A4C2D"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="69.4381" y1="9.28013" x2="85.1181" y2="84.1601" gradientUnits="userSpaceOnUse">
<stop stop-color="#4ED062"/>
<stop offset="1" stop-color="#209B4E"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="69.1642" y1="86.6486" x2="61.2239" y2="86.6486" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.271932" stop-opacity="0.560661"/>
<stop offset="0.620896" stop-opacity="0.264518"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="64.8292" y1="64.8898" x2="52.6105" y2="27.0127" gradientUnits="userSpaceOnUse">
<stop stop-color="#66EB6E"/>
<stop offset="1" stop-color="#9FE0A2"/>
</linearGradient>
<clipPath id="clip0">
<rect width="95.9998" height="96" fill="white"/>
</clipPath>
<clipPath id="clip1">
<rect width="95.9998" height="95.9998" fill="white"/>
</clipPath>
</defs>
<g clip-path="url(#clip0)">
<g clip-path="url(#clip1)">
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="-1" y="11" width="97" height="74">
<path d="M91.9541 21.5445L91.951 21.5444C90.6703 18.5694 88.4544 15.9667 85.4337 14.2227C77.9812 9.91997 68.4518 12.4731 64.1485 19.9252L64.1444 19.9249C63.7587 19.5808 63.3618 19.2436 62.9542 18.9125C49.7493 8.1851 29.1026 8.13703 13.8768 21.8236C0.199931 34.1179 -4.07884 55.7795 3.96064 74.5503L3.96562 74.5506C5.2522 77.4874 7.45351 80.0547 10.4432 81.7808C17.8934 86.0821 27.419 83.5321 31.7242 76.0856L31.7284 76.0858L31.7322 76.0791C32.1179 76.4233 32.5145 76.7611 32.922 77.0922C46.1269 87.8196 66.7736 87.8676 81.9994 74.1811C95.6544 61.9065 99.9414 40.2945 91.9541 21.5445Z" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.5009 62.6252C52.5275 70.1461 64.2321 67.2448 70.8509 55.7806C77.4698 44.3164 74.9813 28.6839 62.9546 18.9137C49.7497 8.18625 29.103 8.13818 13.8772 21.8247C0.200315 34.119 -4.07846 55.7806 3.96103 74.5514L3.96579 74.5517C5.25237 77.4885 7.45367 80.0558 10.4434 81.7818C17.8935 86.0832 27.4191 83.5331 31.7243 76.0867L31.7288 76.0869L39.5009 62.6252Z" fill="url(#paint0_linear)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.95 21.5443L91.9535 21.5446C99.9407 40.2945 95.6538 61.9065 81.9988 74.1811C66.773 87.8677 46.1263 87.8196 32.9214 77.0922C20.8947 67.322 18.4062 51.6895 25.0251 40.2253C31.6439 28.7611 43.3485 25.8597 56.3751 33.3806L64.1437 19.9249L64.148 19.9252C68.4514 12.4735 77.9805 9.92063 85.4329 14.2233C88.4534 15.9671 90.6692 18.5696 91.95 21.5443Z" fill="url(#paint1_linear)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M56.3789 33.3814C43.3523 25.8605 31.6478 28.7619 25.0289 40.2261C18.6342 51.302 20.7404 66.2686 31.736 76.0804L39.5039 62.626C52.5305 70.1469 64.235 67.2456 70.8539 55.7814C77.2486 44.7054 75.1424 29.7389 64.1468 19.927L56.3789 33.3814Z" fill="#088142"/>
<rect opacity="0.25" x="61.2239" y="9.11133" width="7.94029" height="97.4461" transform="rotate(30 61.2239 9.11133)" fill="url(#paint2_linear)"/>
<g filter="url(#filter0_f)">
<path d="M62.5645 56.8453C57.9023 64.9205 47.5766 67.6872 39.5014 63.025C31.4262 58.3628 28.6594 48.0371 33.3216 39.9619C37.9839 31.8868 48.3095 29.12 56.3847 33.7822C64.4599 38.4444 67.2267 48.7701 62.5645 56.8453Z" fill="black" fill-opacity="0.24"/>
</g>
<g filter="url(#filter1_f)">
<path d="M62.5645 58.4453C57.9023 66.5204 47.5766 69.2872 39.5014 64.625C31.4262 59.9628 28.6594 49.6371 33.3216 41.5619C37.9839 33.4867 48.3095 30.72 56.3847 35.3822C64.4599 40.0444 67.2267 50.3701 62.5645 58.4453Z" fill="black" fill-opacity="0.32"/>
</g>
<path d="M62.5645 56.4453C57.9022 64.5204 47.5766 67.2872 39.5014 62.625C31.4262 57.9628 28.6594 47.6371 33.3216 39.5619C37.9839 31.4867 48.3095 28.72 56.3847 33.3822C64.4599 38.0444 67.2267 48.3701 62.5645 56.4453Z" fill="url(#paint3_linear)"/>
</g>
</g>
</g>
</svg>`;
const copilotStudioSvg = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<radialGradient id="IhlPKgn-1vPOdo66QjnG7a_emezZ8DDFo8A_gr1" cx="-1879.932" cy="597.264" r=".9" gradientTransform="matrix(-11.6932 31.247 54.4687 20.4075 -54496.566 46565.566)" gradientUnits="userSpaceOnUse"><stop offset=".064" stop-color="#ad7fe1"></stop><stop offset="1" stop-color="#0078d3"></stop></radialGradient><path fill="url(#IhlPKgn-1vPOdo66QjnG7a_emezZ8DDFo8A_gr1)" d="M20.467,5.122l-0.202,0.122 c-0.321,0.195-0.624,0.412-0.907,0.65l0.583-0.41h4.948l0.899,6.815l-4.497,4.5l-4.497,3.128v3.607c0,2.519,1.316,4.855,3.47,6.16 l4.735,2.867l-10.003,5.839h-1.929l-3.596-2.178C7.316,34.917,6,32.581,6,30.062V17.934c0-2.52,1.317-4.856,3.471-6.161 L20.265,5.24C20.332,5.2,20.399,5.16,20.467,5.122z"></path><radialGradient id="IhlPKgn-1vPOdo66QjnG7b_emezZ8DDFo8A_gr2" cx="-1807.462" cy="543.068" r=".9" gradientTransform="matrix(30.7015 -4.5183 -2.9829 -20.2925 57123.46 2888.612)" gradientUnits="userSpaceOnUse"><stop offset=".134" stop-color="#d49cff"></stop><stop offset="1" stop-color="#5e438e"></stop></radialGradient><path fill="url(#IhlPKgn-1vPOdo66QjnG7b_emezZ8DDFo8A_gr2)" d="M31.185,19.499v4.032 c0,2.519-1.316,4.855-3.47,6.16l-10.794,6.537c-2.208,1.337-4.955,1.386-7.202,0.145l10.543,6.386c2.291,1.387,5.162,1.387,7.452,0 l10.794-6.537c2.154-1.304,3.47-3.64,3.47-6.16v-2.913l-0.899-1.35L31.185,19.499z"></path><path d="M41.978,27.149l-0.899-1.35l-9.894-6.3v1.027l7.063,4.275c1.946,1.178,3.153,3.239,3.227,5.513 l0.009,2.369c0,0,0.339-0.951,0.395-1.433c0.027-0.233,0.082-0.936,0.082-0.936c0.003-0.085,0.016-0.167,0.016-0.252V27.149z" opacity=".05"></path><path d="M16.64,35.792c-1.718,1.034-3.791,1.242-5.688,0.569l0,0c-0.002-0.001-0.003-0.001-0.005-0.002 c-0.314-0.111-0.594-0.233-0.858-0.37l-0.024-0.013l-0.038-0.015l-2.204-1.127c0.508,0.57,1.098,1.072,1.778,1.463l0.015,0.009 l0.217,0.114c0.009,0.005,0.019,0.008,0.028,0.012c0.299,0.156,0.607,0.286,0.92,0.397c0.003,0.001,0.006,0.002,0.009,0.003 c0.425,0.151,0.862,0.251,1.302,0.32c0.03,0.005,0.06,0.009,0.09,0.015c0.06,0.008,0.12,0.022,0.18,0.029 c0.161,0.019,0.322,0.024,0.483,0.032c0.126,0.006,0.251,0.014,0.377,0.013c0.147-0.001,0.294-0.009,0.441-0.019 c0.142-0.009,0.284-0.021,0.426-0.039c0.135-0.017,0.269-0.037,0.403-0.062c0.157-0.029,0.312-0.065,0.467-0.104 c0.119-0.03,0.239-0.059,0.357-0.096c0.177-0.055,0.351-0.121,0.524-0.19c0.094-0.037,0.189-0.069,0.282-0.111 c0.265-0.118,0.525-0.25,0.777-0.402l7.091-4.274l-0.483-0.289L16.64,35.792z" opacity=".07"></path><path d="M11.119,35.89l-0.034-0.012l-0.001,0c-0.278-0.1-0.529-0.209-0.764-0.332l-0.022-0.011 l-0.047-0.022L8.05,34.389l-0.923-0.472c0.617,0.969,1.455,1.798,2.484,2.387l0.222,0.117c0.716,0.378,1.481,0.612,2.258,0.732 l0,0l0,0c1.64,0.253,3.343-0.051,4.807-0.932l7.091-4.274l-0.985-0.593l-6.622,4.011C14.793,36.321,12.875,36.513,11.119,35.89z" opacity=".05"></path><radialGradient id="IhlPKgn-1vPOdo66QjnG7c_emezZ8DDFo8A_gr3" cx="-1940.52" cy="559.74" r=".9" gradientTransform="matrix(-24.1439 -6.1256 -10.3056 40.6682 -41043.922 -34624.129)" gradientUnits="userSpaceOnUse"><stop offset=".059" stop-color="#50e5ff"></stop><stop offset="1" stop-color="#436dcc"></stop></radialGradient><path fill="url(#IhlPKgn-1vPOdo66QjnG7c_emezZ8DDFo8A_gr3)" d="M38.507,11.773L27.713,5.24 c-2.219-1.343-4.982-1.384-7.234-0.125l-0.214,0.13c-2.155,1.304-3.471,3.641-3.471,6.161v8.536l3.471-2.101 c2.29-1.386,5.159-1.386,7.448,0l10.794,6.533c2.087,1.264,3.388,3.496,3.468,5.925c0.003-0.078,0.004-0.157,0.004-0.236V17.934 C41.978,15.414,40.662,13.077,38.507,11.773z"></path><path d="M17.293,11.406c0-2.006,0.891-3.89,2.446-5.17l0,0c0.001-0.001,0.003-0.002,0.004-0.003 c0.257-0.211,0.506-0.39,0.76-0.545l0.023-0.014l0.033-0.025L22.66,4.34c-0.75,0.141-1.484,0.388-2.17,0.77l-0.016,0.008 l-0.21,0.127c-0.009,0.005-0.016,0.012-0.025,0.017c-0.288,0.176-0.558,0.373-0.815,0.584c-0.002,0.002-0.004,0.004-0.007,0.006 c-0.348,0.287-0.66,0.61-0.945,0.952c-0.019,0.023-0.039,0.047-0.059,0.07c-0.038,0.047-0.081,0.091-0.118,0.139 C18.198,7.141,18.11,7.276,18.02,7.41c-0.07,0.105-0.141,0.208-0.206,0.316c-0.076,0.127-0.144,0.257-0.211,0.388 C17.537,8.242,17.474,8.37,17.417,8.5c-0.055,0.124-0.107,0.25-0.155,0.377c-0.056,0.149-0.105,0.301-0.152,0.454 c-0.036,0.118-0.072,0.235-0.102,0.355c-0.044,0.18-0.077,0.363-0.108,0.547c-0.017,0.1-0.038,0.198-0.051,0.299 c-0.035,0.288-0.057,0.579-0.057,0.874v8.535l0.5-0.302V11.406z" opacity=".07"></path><path d="M20.056,6.622l0.028-0.023l0.001-0.001c0.229-0.187,0.452-0.346,0.678-0.484l0.021-0.013 l0.043-0.029l2.098-1.308l0.88-0.548c-1.148,0.03-2.29,0.32-3.324,0.899l-0.214,0.13c-0.693,0.419-1.288,0.954-1.791,1.559l0,0h0 c-1.063,1.276-1.68,2.892-1.68,4.602v8.536l0.999-0.605v-7.931C17.793,9.55,18.618,7.806,20.056,6.622z" opacity=".05"></path><path d="M40.898,29.55l0.006,0.036l0,0.001c0.044,0.293,0.067,0.565,0.071,0.83l0,0.024l0.003,0.052 l0.056,2.473l0.014,0.636c0.493-1.047,0.867-1.84,0.927-3.246c0.034-0.809-0.163-1.519-0.426-2.261l0,0l0,0 c-0.555-1.565-1.631-2.921-3.101-3.792l-7.263-4.362l0,1.221l6.753,4.002C39.534,26.11,40.613,27.709,40.898,29.55z" opacity=".05"></path>
</svg>`;

const skills = [
    {
        name: "HTML",
        icon: FaHtml5,
        category: "frontend",
        color: "text-red-500",
    },
    {
        name: "CSS",
        icon: FaCss3Alt,
        category: "frontend",
        color: "text-blue-500",
    },
    {
        name: "Bootstrap",
        icon: FaBootstrap,
        category: "frontend",
        color: "text-purple-500",
    },
    {
        name: "JavaScript",
        icon: FaJs,
        category: "frontend",
        color: "text-yellow-400",
    },
    {
        name: "jQuery",
        icon: FaJsSquare,
        category: "frontend",
        color: "text-blue-400",
    },
    {
        name: "Tailwind",
        icon: Wind,
        category: "frontend",
        color: "text-teal-500",
    },
    {
        name: "React",
        icon: FaReact,
        category: "frontend",
        color: "text-blue-400",
    },
    {
        name: "Java",
        icon: FaJava,
        category: "backend",
        color: "text-red-500"
    },
    {
        name: "Spring Boot",
        icon: FaLeaf,
        category: "backend",
        color: "text-green-500",
    },
    {
        name: "MySQL",
        icon: FaDatabase,
        category: "backend",
        color: "text-blue-600",
    },
    {
        name: "Liferay",
        icon: FaLifeRing,
        category: "backend",
        color: "text-blue-500",
    },
    {
        name: "PHP",
        icon: FaPhp,
        category: "backend",
        color: "text-purple-600"
    },
    {
        name: "Laravel",
        icon: FaLaravel,
        category: "backend",
        color: "text-red-600",
    },
    {
        name: "Firebase",
        icon: SiFirebase,
        category: "backend",
        color: "text-yellow-500",
    },
    {
        name: "Axure RP",
        icon: FaPencilRuler,
        category: "uiux",
        color: "text-gray-600",
    },
    {
        name: "Figma",
        icon: FaFigma,
        category: "uiux",
        color: "text-purple-500",
    },
    {
        name: "Power Apps",
        icon: "microsoft",
        svgContent: powerAppsSvg,
        category: "microsoft",
        color: "text-purple-600",
    },
    {
        name: "Power Automate",
        icon: "microsoft",
        svgContent: powerAutomateSvg,
        category: "microsoft",
        color: "text-blue-500",
    },
    {
        name: "Dataverse",
        icon: "microsoft",
        svgContent: dataverseSvg,
        category: "microsoft",
        color: "text-green-600",
    },
    {
        name: "Copilot Studio",
        icon: "microsoft",
        svgContent: copilotStudioSvg,
        category: "microsoft",
        color: "text-indigo-500",
    },
    {
        name: "Power Pages",
        icon: "microsoft",
        svgComponent: () => (
            <Image
                src="/PowerPages_scalable.svg"
                alt="Power Pages"
                width={30}
                height={30}
            />
        ),
        category: "microsoft",
        color: "text-purple-600",
    },
    {
        name: "Postman",
        icon: SiPostman,
        category: "api",
        color: "text-orange-600",
    }
]

// Group skills by category
const categories = {
    frontend: {
        title: "Frontend Development",
        skills: skills.filter((skill) => skill.category === "frontend"),
    },
    backend: {
        title: "Backend Development",
        skills: skills.filter((skill) => skill.category === "backend"),
    },
    uiux: {
        title: "UI/UX Design",
        skills: skills.filter((skill) => skill.category === "uiux"),
    },
    api: {
        title: "API Development",
        skills: skills.filter((skill) => skill.category === "api"),
    },
    microsoft: {
        title: "Microsoft Power Platform",
        skills: skills.filter((skill) => skill.category === "microsoft"),
    },
}

export function Skills() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeCategory, setActiveCategory] = useState("frontend")

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const renderSkillIcon = (skill: any) => {
        if (skill.svgComponent) {
            return skill.svgComponent()
        } else if (skill.icon === "microsoft" && skill.svgContent) {
            return (
                <div
                    className="w-8 h-8 flex items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: skill.svgContent }}
                />
            )
        } else {
            const IconComponent = skill.icon
            return <IconComponent className={`w-8 h-8 ${skill.color}`} />
        }
    }

    return (
        <section id="skills" className="min-h-screen py-20 px-8 bg-white flex items-center">
            <div className="max-w-7xl mx-auto w-full">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-block relative">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                            Skills & Technologies
                        </h2>
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="text-sm sm:text-base font-medium text-black">My</span>
                            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                            <span className="text-sm sm:text-base font-medium text-black">Technical Arsenal</span>
                        </div>
                        {/* Animated underline */}
                        <div
                            className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-black transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'
                                }`}
                        ></div>
                        {/* Visual flair dots */}
                        <div className="absolute -top-3 -right-4 w-2 h-2 bg-black rounded-full"></div>
                        <div className="absolute -bottom-4 -left-3 w-1.5 h-1.5 bg-black rounded-full"></div>
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {Object.entries(categories).map(([key, category]) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`relative px-6 py-3 border-2 border-black font-semibold transition-all duration-300 transform hover:scale-105 ${activeCategory === key
                                ? 'bg-black text-white shadow-[6px_6px_0px_0px_#000]'
                                : 'bg-white text-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000]'
                                }`}
                        >
                            {category.title}
                            {/* Corner accents */}
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-black rounded-full opacity-50"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-black rounded-full opacity-50"></div>
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
                    {categories[activeCategory as keyof typeof categories].skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="group relative border-2 border-black bg-white p-3 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-300 hover:scale-105"
                        >
                            {/* Floating corner accents */}
                            <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-black rounded-full"></div>
                            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-black rounded-full"></div>
                            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-black rounded-full"></div>
                            <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-black rounded-full"></div>

                            {/* Inner border */}
                            <div className="border border-black p-2 bg-gradient-to-br from-white to-gray-50 h-full">
                                <div className="text-center space-y-2">
                                    {/* Icon */}
                                    <div className="flex justify-center">
                                        <div className="w-10 h-10 border border-black bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            {renderSkillIcon(skill)}
                                        </div>
                                    </div>

                                    {/* Skill Name */}
                                    <h4 className="text-sm font-medium text-black group-hover:scale-105 transition-transform duration-300">
                                        {skill.name}
                                    </h4>
                                </div>
                            </div>

                            {/* Subtle floating layers */}
                            <div className="absolute inset-1 border border-black opacity-20 pointer-events-none"></div>
                            <div className="absolute inset-2 border border-black opacity-10 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
