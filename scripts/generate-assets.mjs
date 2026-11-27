import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const galleryDir = join(root, 'public', 'images', 'gallery')
const publicDir = join(root, 'public')

const INK = '#143b36'
const SAGE = '#9ccdbd'
const SAGE_DEEP = '#5c9a84'
const SAND = '#e7ddc9'
const PAPER = '#fbf8f0'
const TILE = '#d3e3db'

const styles = `stroke="${INK}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"`

const logoMarkPaths = `
  <g stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M57 161C50 153 41 145 30 136" />
    <path d="M55 157C46 155 38 150 33 143C42 141 49 145 55 152Z" fill="currentColor" fill-opacity=".07"/>
    <path d="M44 148C34 147 26 143 20 137C29 133 37 136 43 143Z" fill="currentColor" fill-opacity=".07"/>
    <path d="M34 138C28 131 24 123 23 114C31 118 36 125 36 133Z" fill="currentColor" fill-opacity=".07"/>
    <path d="M28 131C25 121 25 112 28 103C34 111 34 121 31 130Z" fill="currentColor" fill-opacity=".07"/>
    <path d="M167 161C174 153 183 145 194 136" />
    <path d="M169 157C178 155 186 150 191 143C182 141 175 145 169 152Z" fill="currentColor" fill-opacity=".07"/>
    <path d="M180 148C190 147 198 143 204 137C195 133 187 136 181 143Z" fill="currentColor" fill-opacity=".07"/>
    <path d="M190 138C196 131 200 123 201 114C193 118 188 125 188 133Z" fill="currentColor" fill-opacity=".07"/>
    <path d="M196 131C199 121 199 112 196 103C190 111 190 121 193 130Z" fill="currentColor" fill-opacity=".07"/>
  </g>
  <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M29 99L112 29L195 99" stroke-width="4"/>
    <path d="M51 90L112 39L173 90" stroke-width="2.7"/>
    <path d="M58 88V158H166V88" stroke-width="3.4"/>
    <path d="M30 164H192" stroke-width="3.4"/>
    <path d="M93 158V124H131V158" stroke-width="3.2"/>
    <circle cx="123.5" cy="141" r="2" fill="currentColor" stroke="none"/>
    <rect x="92" y="99" width="40" height="27" rx="1.5" stroke-width="2.8"/>
    <path d="M112 99V126M92 112.5H132" stroke-width="2.4"/>
    <path d="M150 68V38H163V82" stroke-width="3"/>
    <path d="M146.5 38H166.5" stroke-width="3"/>
  </g>
  <g stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M72 30C73.8 38.3 77.5 42 85.8 43.8C77.5 45.6 73.8 49.3 72 57.6C70.2 49.3 66.5 45.6 58.2 43.8C66.5 42 70.2 38.3 72 30Z"/>
    <path d="M150 12C151.3 19 154.7 22.4 161.7 23.7C154.7 25 151.3 28.4 150 35.4C148.7 28.4 145.3 25 138.3 23.7C145.3 22.4 148.7 19 150 12Z"/>
    <path d="M181 49C181.8 53.2 183.8 55.2 188 56C183.8 56.8 181.8 58.8 181 63C180.2 58.8 178.2 56.8 174 56C178.2 55.2 180.2 53.2 181 49Z"/>
  </g>
  <g fill="currentColor">
    <circle cx="60" cy="67" r="2.4" opacity=".32"/>
    <circle cx="169" cy="68" r="2" opacity=".26"/>
    <circle cx="82" cy="24" r="1.6" opacity=".22"/>
  </g>
`

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 180" width="220" height="180" color="${INK}">
${logoMarkPaths}
</svg>
`

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" fill="#f7f4ec"/>
  <g stroke="#103833" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M10 31L32 13L54 31"/>
    <path d="M14 28V49H50V28"/>
    <path d="M27 49V37H37V49"/>
    <path d="M24 28H40V37H24Z"/>
    <path d="M24 32.5H40"/>
    <path d="M42 22V12H46V25"/>
    <path d="M40 12H48"/>
  </g>
  <g stroke="#5c9a84" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M18 49C14 46 12 42 12 38C17 39 20 42 21 46"/>
    <path d="M46 49C50 46 52 42 52 38C47 39 44 42 43 46"/>
    <path d="M32 12V8"/>
  </g>
  <g fill="#5c9a84">
    <circle cx="11" cy="17" r="1.3"/>
    <circle cx="53" cy="15" r="1.1"/>
  </g>
</svg>
`

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="#f7f4ec"/>
  <g stroke="#103833" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M10 31L32 13L54 31"/>
    <path d="M14 28V49H50V28"/>
    <path d="M27 49V37H37V49"/>
    <path d="M24 28H40V37H24Z"/>
    <path d="M24 32.5H40"/>
    <path d="M42 22V12H46V25"/>
    <path d="M40 12H48"/>
  </g>
  <g stroke="#5c9a84" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M18 49C14 46 12 42 12 38C17 39 20 42 21 46"/>
    <path d="M46 49C50 46 52 42 52 38C47 39 44 42 43 46"/>
    <path d="M32 12V8"/>
  </g>
  <g fill="#5c9a84">
    <circle cx="11" cy="17" r="1.3"/>
    <circle cx="53" cy="15" r="1.1"/>
  </g>
</svg>
`

function frame({ number, accent = SAGE, body }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fbf8f0"/>
      <stop offset="1" stop-color="#f1ecdf"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="55%">
      <stop offset="0" stop-color="${accent}" stop-opacity=".5"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.25" fill="${INK}"/>
    </pattern>
  </defs>
  <rect width="1200" height="900" fill="url(#bg)"/>
  <rect width="1200" height="900" fill="url(#dots)" opacity=".055"/>
  <circle cx="940" cy="250" r="300" fill="url(#glow)"/>
  <circle cx="980" cy="250" r="230" fill="none" stroke="${accent}" stroke-width="1.5" opacity=".55"/>
  <rect x="38" y="38" width="1124" height="824" rx="26" fill="none" stroke="${INK}" stroke-opacity=".12" stroke-width="2"/>
  <g opacity=".5">
    <g transform="translate(82 106) rotate(-32)">
      <path d="M0 0C28 20 48 47 58 80" stroke="${SAGE_DEEP}" stroke-width="1.8" fill="none"/>
      <path d="M14 22C4 13 1 2 6-10C17-2 22 9 21 21Z" fill="${SAGE}" fill-opacity=".3" stroke="${SAGE_DEEP}" stroke-width="1.4"/>
      <path d="M30 42C20 34 16 23 20 11C31 18 36 29 35 41Z" fill="${SAGE}" fill-opacity=".3" stroke="${SAGE_DEEP}" stroke-width="1.4"/>
      <path d="M44 61C35 52 32 41 36 30C46 38 50 49 49 60Z" fill="${SAGE}" fill-opacity=".3" stroke="${SAGE_DEEP}" stroke-width="1.4"/>
    </g>
    <g transform="translate(1118 794) rotate(148)">
      <path d="M0 0C28 20 48 47 58 80" stroke="${SAGE_DEEP}" stroke-width="1.8" fill="none"/>
      <path d="M14 22C4 13 1 2 6-10C17-2 22 9 21 21Z" fill="${SAGE}" fill-opacity=".3" stroke="${SAGE_DEEP}" stroke-width="1.4"/>
      <path d="M30 42C20 34 16 23 20 11C31 18 36 29 35 41Z" fill="${SAGE}" fill-opacity=".3" stroke="${SAGE_DEEP}" stroke-width="1.4"/>
      <path d="M44 61C35 52 32 41 36 30C46 38 50 49 49 60Z" fill="${SAGE}" fill-opacity=".3" stroke="${SAGE_DEEP}" stroke-width="1.4"/>
    </g>
  </g>
  <text x="1110" y="130" text-anchor="end" font-family="Georgia, 'Times New Roman', serif" font-size="58" fill="${INK}" opacity=".14">${number}</text>
  <g transform="translate(0 8)">
    ${body}
  </g>
  <g fill="${SAGE_DEEP}" opacity=".65">
    <path d="M250 205C251.4 211.4 254.2 214.2 260.6 215.6C254.2 217 251.4 219.8 250 226.2C248.6 219.8 245.8 217 239.4 215.6C245.8 214.2 248.6 211.4 250 205Z"/>
    <path d="M930 545C931 549.8 933.2 552 938 553C933.2 554 931 556.2 930 561C929 556.2 926.8 554 922 553C926.8 552 929 549.8 930 545Z"/>
  </g>
</svg>`
}

const scenes = [
  {
    file: 'apartment-bedroom.svg',
    number: '01',
    accent: SAGE,
    body: `
      <g ${styles}>
        <path d="M150 746H1050" stroke="#d8cfbe" stroke-width="4"/>
        <ellipse cx="580" cy="744" rx="345" ry="36" stroke="${SAGE_DEEP}" opacity=".42"/>

        <!-- Window -->
        <rect x="760" y="220" width="280" height="300" rx="4"/>
        <path d="M900 220V520M760 370H1040"/>
        <path d="M742 520H1058" stroke-width="4"/>
        <path d="M690 204H1080" stroke-width="4"/>
        <path d="M706 212C694 292 698 400 716 512" stroke-width="3.5" opacity=".65"/>
        <path d="M1028 212C1040 292 1036 400 1018 512" stroke-width="3.5" opacity=".65"/>
        <circle cx="982" cy="292" r="27" stroke="${SAGE_DEEP}" stroke-width="3.5"/>

        <!-- Bed -->
        <rect x="226" y="390" width="406" height="132" rx="18"/>
        <rect x="246" y="490" width="420" height="182" rx="12"/>
        <path d="M246 514H666" opacity=".5"/>
        <rect x="282" y="506" width="154" height="64" rx="14" fill="${PAPER}"/>
        <rect x="456" y="510" width="146" height="60" rx="14" fill="${PAPER}"/>
        <path d="M424 520H666V676H424C412 620 414 568 424 520Z" fill="${SAGE}" fill-opacity=".24"/>
        <path d="M424 520H666" stroke-width="4"/>
        <path d="M264 672V706M650 672V706"/>
        <path d="M316 300H424V390H316Z" stroke-width="3.5"/>
        <path d="M334 373C351 337 366 330 385 358C396 338 405 337 412 346" stroke="${SAGE_DEEP}" stroke-width="3.3"/>
        <path d="M452 284H512V390H452Z" stroke-width="3.5"/>
        <circle cx="482" cy="338" r="15" stroke="${SAGE_DEEP}" stroke-width="3.2"/>

        <!-- Nightstand and lamp -->
        <rect x="686" y="576" width="108" height="132" rx="8"/>
        <path d="M686 616H794M742 600V610"/>
        <path d="M725 576V530"/>
        <path d="M699 530H751L741 494H709Z" fill="${SAGE}" fill-opacity=".23"/>
        <path d="M713 494H737"/>

        <!-- Plant -->
        <path d="M1044 690C1038 624 1018 574 986 536M1044 690C1060 640 1084 608 1112 590M1044 690C1044 638 1024 596 996 568" stroke="${SAGE_DEEP}" stroke-width="3.5"/>
        <path d="M990 552C975 543 969 528 974 512C989 520 996 535 992 548Z" fill="${SAGE}" fill-opacity=".28" stroke="${SAGE_DEEP}" stroke-width="3"/>
        <path d="M1080 610C1091 594 1108 590 1122 597C1117 612 1101 620 1086 617Z" fill="${SAGE}" fill-opacity=".28" stroke="${SAGE_DEEP}" stroke-width="3"/>
        <path d="M1001 589C984 587 973 576 970 561C986 561 999 570 1004 583Z" fill="${SAGE}" fill-opacity=".28" stroke="${SAGE_DEEP}" stroke-width="3"/>
        <path d="M1015 700H1075L1066 750H1024Z" fill="${PAPER}"/>
        <path d="M150 746H1050" stroke="#d8cfbe" stroke-width="4"/>
      </g>
    `,
  },
  {
    file: 'living-room.svg',
    number: '02',
    accent: '#d6e7de',
    body: `
      <g ${styles}>
        <path d="M150 748H1050" stroke="#d8cfbe" stroke-width="4"/>
        <ellipse cx="565" cy="746" rx="330" ry="36" stroke="${SAGE_DEEP}" opacity=".4"/>

        <!-- Wall art -->
        <rect x="354" y="196" width="230" height="170" rx="3"/>
        <path d="M354 304C396 250 430 266 470 312C505 275 543 264 584 316" stroke="${SAGE_DEEP}" stroke-width="3.4"/>
        <circle cx="510" cy="245" r="26" stroke="${SAGE_DEEP}" stroke-width="3.2"/>
        <rect x="616" y="220" width="116" height="146" rx="3"/>
        <path d="M650 326C658 284 688 262 716 272C710 302 690 326 650 326Z" stroke="${SAGE_DEEP}" stroke-width="3.2"/>

        <!-- Sofa -->
        <path d="M280 578V477C280 451 300 432 326 432H750C776 432 796 451 796 477V578"/>
        <path d="M264 570H812V660C812 678 797 692 779 692H297C279 692 264 678 264 660V570Z"/>
        <path d="M304 588V669M772 588V669"/>
        <rect x="316" y="452" width="204" height="112" rx="22" fill="${SAGE}" fill-opacity=".2"/>
        <rect x="540" y="452" width="204" height="112" rx="22" fill="${PAPER}"/>
        <path d="M540 564H744" opacity=".55"/>
        <path d="M280 570H796"/>
        <path d="M306 692V724M774 692V724"/>

        <!-- Coffee table -->
        <rect x="478" y="650" width="258" height="18" rx="9" fill="${PAPER}"/>
        <path d="M494 668V720M716 668V720"/>
        <path d="M532 650V631H584V650" fill="${PAPER}"/>
        <path d="M600 650V624H634V650" fill="${SAGE}" fill-opacity=".25"/>
        <circle cx="678" cy="636" r="14"/>

        <!-- Floor lamp -->
        <path d="M932 720H994M963 720V410" stroke-width="4"/>
        <path d="M930 410H996L978 350H948Z" fill="${SAGE}" fill-opacity=".2"/>
        <path d="M938 350H988"/>
        <path d="M931 327V379M919 345H939" stroke="${SAGE_DEEP}" stroke-width="3"/>

        <!-- Plant -->
        <path d="M194 686C188 630 170 582 144 550M194 686C208 636 230 606 256 588M194 686C194 638 178 600 154 576" stroke="${SAGE_DEEP}" stroke-width="3.4"/>
        <path d="M151 566C136 557 131 542 137 527C151 535 158 549 154 562Z" fill="${SAGE}" fill-opacity=".28" stroke="${SAGE_DEEP}" stroke-width="3"/>
        <path d="M227 610C237 594 254 590 267 597C262 612 247 620 232 617Z" fill="${SAGE}" fill-opacity=".28" stroke="${SAGE_DEEP}" stroke-width="3"/>
        <path d="M160 598C144 597 133 586 130 571C146 570 159 579 164 592Z" fill="${SAGE}" fill-opacity=".28" stroke="${SAGE_DEEP}" stroke-width="3"/>
        <path d="M165 696H223L214 748H174Z" fill="${PAPER}"/>

        <!-- Small side table -->
        <rect x="844" y="632" width="70" height="12" rx="6" fill="${PAPER}"/>
        <path d="M856 644V716M902 644V716"/>
        <path d="M863 632C863 611 870 598 885 592C900 598 907 611 907 632Z" fill="${SAGE}" fill-opacity=".2"/>
      </g>
    `,
  },
  {
    file: 'final-cleaning.svg',
    number: '03',
    accent: SAND,
    body: `
      <g ${styles}>
        <path d="M150 740H1050" stroke="#d8cfbe" stroke-width="4"/>
        <path d="M120 700C300 680 430 704 580 694C760 682 900 696 1080 678" stroke="${SAGE_DEEP}" stroke-width="2.4" opacity=".45"/>

        <!-- Window -->
        <rect x="356" y="196" width="382" height="330" rx="4"/>
        <path d="M547 196V526M356 361H738"/>
        <path d="M334 526H760" stroke-width="4"/>
        <path d="M340 188H752" stroke-width="3.4" opacity=".7"/>
        <circle cx="646" cy="266" r="28" stroke="${SAGE_DEEP}" stroke-width="3.4"/>

        <!-- Ladder -->
        <path d="M846 736L940 286M948 736L1038 286" stroke-width="5"/>
        <path d="M874 600H976M895 520H994M916 440H1014M936 360H1032" stroke-width="4"/>

        <!-- Bucket -->
        <path d="M246 590H408L390 730H264Z" fill="${PAPER}"/>
        <path d="M246 590C282 548 370 548 408 590" stroke-width="4"/>
        <path d="M274 612H382" opacity=".5"/>
        <path d="M324 586L382 458" stroke-width="4"/>
        <path d="M374 452L402 438L414 466L386 480Z" fill="${SAGE}" fill-opacity=".25"/>
        <path d="M312 732V690M336 732V690M360 732V690" stroke="${SAGE_DEEP}" stroke-width="3"/>

        <!-- Paint bucket and roller -->
        <path d="M470 674H570L560 736H480Z" fill="${PAPER}"/>
        <path d="M470 674C486 650 554 650 570 674" stroke-width="4"/>
        <path d="M486 656C500 637 540 637 554 656" stroke-width="3"/>
        <path d="M620 732L646 642" stroke-width="4"/>
        <path d="M632 644L692 618" stroke-width="4"/>
        <path d="M688 602H722V632H688Z" fill="${SAGE}" fill-opacity=".3"/>

        <!-- Box -->
        <path d="M760 650H848V736H760Z" fill="${PAPER}" stroke-width="4"/>
        <path d="M806 650V736M760 686H848" stroke-width="3" opacity=".55"/>

        <!-- Sparkles -->
        <g stroke="${SAGE_DEEP}" stroke-width="3">
          <path d="M496 274C498 290 504 296 520 298C504 300 498 306 496 322C494 306 488 300 472 298C488 296 494 290 496 274Z"/>
          <path d="M662 390C663.4 401 667.6 405.2 678.6 406.6C667.6 408 663.4 412.2 662 423.2C660.6 412.2 656.4 408 645.4 406.6C656.4 405.2 660.6 401 662 390Z"/>
          <path d="M790 222C791.2 231 794.8 234.6 803.8 235.8C794.8 237 791.2 240.6 790 249.6C788.8 240.6 785.2 237 776.2 235.8C785.2 234.6 788.8 231 790 222Z"/>
        </g>
      </g>
    `,
  },
  {
    file: 'garden.svg',
    number: '04',
    accent: '#cfe6da',
    body: `
      <g ${styles}>
        <!-- Sun and sky -->
        <circle cx="970" cy="212" r="42" stroke="${SAGE_DEEP}" stroke-width="3.4"/>
        <path d="M970 146V128M970 296V278M904 212H886M1054 212H1036M923 165L910 152M1017 259L1030 272M1017 165L1030 152M923 259L910 272" stroke="${SAGE_DEEP}" stroke-width="3"/>
        <path d="M746 190C756 176 774 176 784 190C794 174 816 174 826 190" stroke-width="3" opacity=".55"/>

        <!-- House -->
        <path d="M322 704H822" stroke="#d8cfbe" stroke-width="4"/>
        <path d="M384 684V442L578 288L772 442V684"/>
        <path d="M408 684V455L578 320L748 455V684" opacity=".45"/>
        <path d="M578 288L762 438" stroke-width="3" opacity=".4"/>
        <rect x="674" y="354" width="42" height="58" fill="${PAPER}"/>
        <path d="M674 383H716M695 354V412"/>
        <path d="M526 684V590H606V684" fill="${PAPER}"/>
        <circle cx="596" cy="642" r="3" fill="${INK}" stroke="none"/>
        <path d="M452 500H506V556H452Z" fill="${PAPER}"/>
        <path d="M479 500V556M452 528H506" stroke-width="3"/>

        <!-- Path -->
        <path d="M518 684C500 720 468 758 424 790M614 684C632 720 664 758 708 790"/>
        <path d="M490 700H642M468 730H660M440 760H690" stroke-width="3" opacity=".38"/>

        <!-- Tree -->
        <path d="M190 700C194 620 194 550 188 480M188 590L146 534M190 620L242 556" stroke-width="4"/>
        <path d="M188 474C134 468 108 424 126 380C100 342 128 296 170 290C180 244 240 228 274 258C316 240 354 276 344 318C394 336 388 402 354 422C354 460 318 486 284 474C258 502 212 510 188 474Z" fill="${SAGE}" fill-opacity=".18"/>
        <path d="M188 474C134 468 108 424 126 380C100 342 128 296 170 290C180 244 240 228 274 258C316 240 354 276 344 318C394 336 388 402 354 422C354 460 318 486 284 474C258 502 212 510 188 474Z" stroke="${SAGE_DEEP}" stroke-width="3"/>

        <!-- Hedge -->
        <path d="M796 684V560C796 536 814 520 838 520C850 492 886 482 906 504C928 482 964 492 972 520C1002 518 1022 540 1020 566V684" fill="${SAGE}" fill-opacity=".24" stroke="${SAGE_DEEP}" stroke-width="3.2"/>
        <path d="M838 520V684M904 504V684M970 520V684" stroke="${SAGE_DEEP}" stroke-width="2" opacity=".45"/>

        <!-- Rake and watering can -->
        <path d="M792 680L718 600" stroke-width="4"/>
        <path d="M700 580L736 610" stroke-width="4"/>
        <path d="M694 570L714 590M702 579L722 599M710 588L730 608" stroke-width="3.4"/>
        <path d="M240 690H336L322 746H254Z" fill="${PAPER}"/>
        <path d="M336 700L374 692V722L336 714" stroke-width="3.4"/>
        <path d="M266 690C266 674 278 664 294 664" stroke-width="4"/>

        <!-- Flowers -->
        <path d="M700 710V684M712 712V680M684 714V692" stroke="${SAGE_DEEP}" stroke-width="3"/>
        <circle cx="700" cy="678" r="7" fill="${SAGE}" stroke="${SAGE_DEEP}" stroke-width="2.4"/>
        <circle cx="712" cy="674" r="6" fill="${SAGE}" stroke="${SAGE_DEEP}" stroke-width="2.4"/>
        <circle cx="684" cy="686" r="6" fill="${SAGE}" stroke="${SAGE_DEEP}" stroke-width="2.4"/>
      </g>
    `,
  },
  {
    file: 'transport.svg',
    number: '05',
    accent: SAGE,
    body: `
      <g ${styles}>
        <!-- Landscape -->
        <path d="M110 640C240 550 360 560 470 630C600 520 760 530 870 630C970 580 1040 592 1110 626" stroke="${SAGE_DEEP}" stroke-width="2.6" opacity=".38"/>
        <circle cx="982" cy="206" r="38" stroke="${SAGE_DEEP}" stroke-width="3.2"/>
        <path d="M756 228C768 210 790 210 802 228C814 208 840 208 852 228" stroke-width="3" opacity=".45"/>
        <path d="M180 700H1030" stroke="#d8cfbe" stroke-width="4"/>
        <path d="M170 730H1030" stroke-width="5"/>
        <path d="M210 730H310M390 730H490M570 730H670M750 730H850M930 730H1030" stroke="${SAGE_DEEP}" stroke-width="3" opacity=".5"/>

        <!-- Van -->
        <path d="M324 658V448C324 430 338 416 356 416H696C718 416 738 425 753 442L844 548C854 560 860 575 860 590V658C860 676 846 690 828 690H356C338 690 324 676 324 658Z" fill="${PAPER}"/>
        <path d="M338 690C338 676 350 664 364 664H390C404 664 416 676 416 690M718 690C718 676 730 664 744 664H770C784 664 796 676 796 690"/>
        <circle cx="376" cy="700" r="48" fill="${PAPER}" stroke-width="5"/>
        <circle cx="376" cy="700" r="21" stroke="${SAGE_DEEP}" stroke-width="4"/>
        <circle cx="758" cy="700" r="48" fill="${PAPER}" stroke-width="5"/>
        <circle cx="758" cy="700" r="21" stroke="${SAGE_DEEP}" stroke-width="4"/>

        <!-- Cabin and doors -->
        <path d="M690 458H750L812 535H690Z" fill="${SAGE}" fill-opacity=".16"/>
        <path d="M494 466H660V552H494Z" fill="${SAGE}" fill-opacity=".15" stroke-width="4"/>
        <path d="M574 466V552M660 466V552" opacity=".4"/>
        <path d="M690 466H744L800 538H690Z" stroke-width="4"/>
        <path d="M702 556V650M828 556V650" stroke-width="3" opacity=".55"/>
        <path d="M836 580H854" stroke-width="4"/>
        <path d="M840 620H860" stroke-width="3" opacity=".5"/>
        <path d="M324 620H848" opacity=".32"/>

        <!-- Brand mark on van -->
        <circle cx="581" cy="608" r="32" stroke="${SAGE_DEEP}" stroke-width="2.4" fill="${SAGE}" fill-opacity=".12"/>
        <path d="M561 611L581 594L601 611M566 607V627H596V607" stroke="${SAGE_DEEP}" stroke-width="2.4"/>

        <!-- Boxes -->
        <path d="M194 624H306V724H194Z" fill="${PAPER}" stroke-width="4"/>
        <path d="M250 624V724M194 674H306" stroke-width="3" opacity=".45"/>
        <path d="M224 570H336V624H224Z" fill="${PAPER}" stroke-width="4"/>
        <path d="M280 570V624M224 598H336" stroke-width="3" opacity=".45"/>
        <path d="M228 596L332 596" stroke="${SAGE_DEEP}" stroke-width="4" opacity=".5"/>
      </g>
    `,
  },
  {
    file: 'kitchen.svg',
    number: '06',
    accent: '#d2e8dd',
    body: `
      <g ${styles}>
        <path d="M150 748H1050" stroke="#d8cfbe" stroke-width="4"/>

        <!-- Tiles -->
        <path d="M246 170V394M342 170V394M438 170V394M534 170V394M630 170V394M726 170V394M822 170V394M918 170V394" stroke="${TILE}" stroke-width="2"/>
        <path d="M200 206H970M200 262H970M200 318H970M200 374H970" stroke="${TILE}" stroke-width="2"/>

        <!-- Upper cabinets -->
        <rect x="238" y="206" width="262" height="146" rx="3" fill="${PAPER}"/>
        <path d="M369 206V352M316 268H348"/>
        <path d="M238 352H500" stroke-width="4"/>

        <!-- Open shelf -->
        <path d="M620 264H920M620 354H920" stroke-width="4"/>
        <path d="M676 354V322C676 304 690 292 708 292C726 292 740 304 740 322V354" stroke-width="3.4"/>
        <path d="M770 354V316H822V354M844 354V330C844 318 854 310 866 310C878 310 888 318 888 330V354" stroke-width="3.4"/>
        <path d="M664 264V240H700V264M756 264V232H788V264M834 264V246H886V264" stroke-width="3.4" fill="${PAPER}"/>
        <path d="M692 206C692 184 710 176 724 188C738 172 760 184 756 206" stroke="${SAGE_DEEP}" stroke-width="2.8" opacity=".7"/>

        <!-- Counter -->
        <rect x="188" y="432" width="824" height="26" rx="5" fill="${PAPER}"/>
        <path d="M188 458V722H1012V458"/>
        <path d="M384 458V722M684 458V722M878 458V722" stroke-width="3.4" opacity=".55"/>
        <path d="M212 500H358V566H212Z" stroke-width="3.4"/>
        <path d="M410 500H658V566H410Z" stroke-width="3.4"/>
        <path d="M710 500H852V566H710Z" stroke-width="3.4"/>
        <path d="M902 500H990V566H902Z" stroke-width="3.4"/>
        <path d="M246 560H324M600 560H648M748 560H820M930 560H966" stroke-width="3" opacity=".5"/>
        <path d="M570 500V566M878 610V690M410 610H658" stroke-width="3" opacity=".45"/>

        <!-- Sink and faucet -->
        <path d="M472 432V478C472 500 488 514 512 514H588C612 514 628 500 628 478V432" fill="${SAGE}" fill-opacity=".12" stroke-width="4"/>
        <path d="M550 432V370C550 352 564 340 582 340H604" stroke-width="4"/>
        <path d="M604 340V362" stroke-width="4"/>
        <path d="M472 432H628" opacity=".3"/>

        <!-- Stove -->
        <path d="M228 432H362" stroke-width="4"/>
        <circle cx="268" cy="432" r="18" stroke-width="3.5"/>
        <circle cx="322" cy="432" r="18" stroke-width="3.5"/>
        <path d="M228 396H362V432M252 480V508M266 480V508M280 480V508" stroke-width="3" opacity=".4"/>

        <!-- Kettle -->
        <path d="M918 432V398C918 380 932 366 950 366H978C996 366 1010 380 1010 398V432" fill="${PAPER}"/>
        <path d="M1010 404C1028 404 1034 414 1030 424L1008 428M918 398H930" stroke-width="3.4"/>
        <path d="M942 366C946 350 962 350 966 366" stroke-width="3"/>

        <!-- Cutting board and bowl -->
        <rect x="716" y="408" width="146" height="24" rx="12" fill="${SAGE}" fill-opacity=".2"/>
        <path d="M748 394H826V408H748Z" stroke-width="3"/>
        <path d="M784 428V444" stroke-width="3"/>

        <!-- Floor details -->
        <path d="M300 762H660M322 776H638" stroke="${SAGE_DEEP}" stroke-width="3" opacity=".3"/>
        <path d="M1042 724H1082L1074 752H1050Z" fill="${PAPER}"/>
      </g>
    `,
  },
  {
    file: 'bathroom.svg',
    number: '07',
    accent: '#d5e9df',
    body: `
      <g ${styles}>
        <path d="M150 750H1050" stroke="#d8cfbe" stroke-width="4"/>
        <path d="M200 180V470M300 180V470M400 180V470M500 180V470M600 180V470M700 180V470M800 180V470M900 180V470M1000 180V470" stroke="${TILE}" stroke-width="2"/>
        <path d="M170 250H1040M170 330H1040M170 410H1040" stroke="${TILE}" stroke-width="2"/>

        <!-- Mirror -->
        <circle cx="346" cy="300" r="92" stroke-width="4"/>
        <path d="M284 348C308 324 338 334 356 356C374 334 396 328 414 344" stroke="${SAGE_DEEP}" stroke-width="3" opacity=".55"/>
        <path d="M276 424H416" stroke-width="4"/>
        <path d="M294 406V424M386 406V424" stroke-width="3" opacity=".5"/>

        <!-- Sink -->
        <rect x="222" y="492" width="252" height="26" rx="5" fill="${PAPER}"/>
        <path d="M246 518V722H450V518"/>
        <path d="M270 546H426M294 580V700M402 580V700" stroke-width="3.4" opacity=".5"/>
        <path d="M306 518V470C306 454 320 442 338 442H360" stroke-width="4"/>
        <path d="M360 442V460" stroke-width="4"/>
        <path d="M320 492H380C398 492 410 504 410 518H290C290 504 302 492 320 492Z" fill="${SAGE}" fill-opacity=".15"/>

        <!-- Bath -->
        <path d="M580 520H988V536H580Z" fill="${PAPER}"/>
        <path d="M600 536C600 640 650 700 784 700C918 700 968 640 968 536" fill="${PAPER}"/>
        <path d="M624 536C624 616 660 664 784 664C908 664 944 616 944 536" opacity=".35"/>
        <path d="M642 700V724M926 700V724"/>
        <path d="M580 520C580 500 596 488 616 488H952C972 488 988 500 988 520V536H580Z" fill="${PAPER}"/>
        <path d="M608 488V456C608 438 622 424 640 424H672" stroke-width="4"/>
        <path d="M672 424V448" stroke-width="4"/>
        <path d="M708 490H736" stroke-width="3" opacity=".4"/>
        <path d="M626 632C660 654 706 664 784 664" stroke="${SAGE_DEEP}" stroke-width="3" opacity=".5"/>

        <!-- Towel rail -->
        <path d="M870 382H1010M886 382V468M994 382V468" stroke-width="3.4"/>
        <path d="M886 414H994V478H886Z" fill="${SAGE}" fill-opacity=".26"/>
        <path d="M910 414V478M946 414V478M970 414V478" stroke="${SAGE_DEEP}" stroke-width="2.4" opacity=".55"/>

        <!-- Plant -->
        <path d="M1036 700C1028 650 1006 610 976 584M1036 700C1052 654 1074 626 1102 612" stroke="${SAGE_DEEP}" stroke-width="3.2"/>
        <path d="M982 598C967 590 962 575 968 560C983 568 989 582 985 595Z" fill="${SAGE}" fill-opacity=".28" stroke="${SAGE_DEEP}" stroke-width="2.8"/>
        <path d="M1068 626C1078 610 1096 606 1110 613C1104 628 1088 636 1073 633Z" fill="${SAGE}" fill-opacity=".28" stroke="${SAGE_DEEP}" stroke-width="2.8"/>
        <path d="M1010 712H1068L1060 750H1018Z" fill="${PAPER}"/>

        <!-- Mat -->
        <path d="M560 772H920" stroke="${SAGE_DEEP}" stroke-width="3" opacity=".35"/>
        <path d="M588 786H892" stroke="${SAGE_DEEP}" stroke-width="2" opacity=".25"/>

        <g stroke="${SAGE_DEEP}" stroke-width="2.8">
          <path d="M470 258C471.4 268 475.6 272.2 485.6 273.6C475.6 275 471.4 279.2 470 289.2C468.6 279.2 464.4 275 454.4 273.6C464.4 272.2 468.6 268 470 258Z"/>
          <path d="M720 340C721 347 724 350 731 351C724 352 721 355 720 362C719 355 716 352 709 351C716 350 719 347 720 340Z"/>
        </g>
      </g>
    `,
  },
  {
    file: 'office.svg',
    number: '08',
    accent: '#cfe5da',
    body: `
      <g ${styles}>
        <path d="M150 750H1050" stroke="#d8cfbe" stroke-width="4"/>
        <ellipse cx="560" cy="744" rx="320" ry="34" stroke="${SAGE_DEEP}" opacity=".35"/>

        <!-- Window -->
        <rect x="870" y="200" width="196" height="250" rx="4"/>
        <path d="M968 200V450M870 325H1066"/>
        <path d="M850 452H1086" stroke-width="4"/>
        <circle cx="1024" cy="264" r="24" stroke="${SAGE_DEEP}" stroke-width="3"/>

        <!-- Shelf -->
        <path d="M176 254H344M176 354H344M176 454H344" stroke-width="4"/>
        <path d="M196 254V454M324 254V454" stroke-width="3" opacity=".3"/>
        <path d="M200 346V298H224V346M234 346V314H258V346M268 346V286H292V346" fill="${PAPER}" stroke-width="3.4"/>
        <path d="M210 454V420H234V454M244 454V406H270V454" fill="${SAGE}" fill-opacity=".16" stroke-width="3.2"/>
        <path d="M290 254C290 232 304 222 320 232C334 216 352 228 348 254" stroke="${SAGE_DEEP}" stroke-width="2.8" opacity=".7"/>

        <!-- Pendant lamp -->
        <path d="M566 140V210" stroke-width="3"/>
        <path d="M522 258H610L590 210H542Z" fill="${SAGE}" fill-opacity=".2"/>
        <path d="M546 258H586" opacity=".5"/>

        <!-- Desk -->
        <rect x="300" y="516" width="560" height="26" rx="6" fill="${PAPER}"/>
        <path d="M322 542V724M838 542V724M352 640H808" stroke-width="4"/>
        <rect x="648" y="476" width="136" height="32" rx="5" fill="${PAPER}"/>
        <path d="M664 476V462H756V476" stroke-width="3"/>
        <path d="M696 500V516M742 500V516" stroke-width="3"/>

        <!-- Monitor -->
        <rect x="470" y="322" width="240" height="160" rx="8" fill="${PAPER}"/>
        <rect x="492" y="344" width="196" height="116" rx="3" fill="${SAGE}" fill-opacity=".2"/>
        <path d="M516 398C536 372 552 384 566 404C582 378 600 382 616 402" stroke="${SAGE_DEEP}" stroke-width="3"/>
        <path d="M566 482V510H610" stroke-width="4"/>
        <circle cx="590" cy="502" r="3" fill="${SAGE_DEEP}" stroke="none"/>

        <!-- Keyboard and mug -->
        <path d="M472 560H622L610 588H484Z" fill="${PAPER}" stroke-width="3.4"/>
        <path d="M514 690H548V720H514Z" fill="${PAPER}"/>
        <path d="M548 696H560C570 696 570 710 560 710H548" stroke-width="3"/>
        <path d="M520 682C520 672 528 666 536 666" stroke="${SAGE_DEEP}" stroke-width="2.6" opacity=".7"/>

        <!-- Chair -->
        <path d="M400 586H574V676C574 692 562 704 546 704H428C412 704 400 692 400 676V586Z" fill="${SAGE}" fill-opacity=".16"/>
        <path d="M422 704V744M552 704V744M414 744H436M532 744H554M426 756H438M520 756H532" stroke-width="3.4"/>
        <path d="M400 620H366V690M574 620H608V690" stroke-width="3.4"/>
        <path d="M438 586V660M536 586V660" stroke-width="3" opacity=".4"/>

        <!-- Plant right -->
        <path d="M1036 700C1030 654 1012 618 982 592M1036 700C1050 654 1070 626 1096 612" stroke="${SAGE_DEEP}" stroke-width="3.2"/>
        <path d="M988 606C973 598 968 583 974 568C989 576 995 590 991 603Z" fill="${SAGE}" fill-opacity=".28" stroke="${SAGE_DEEP}" stroke-width="2.8"/>
        <path d="M1066 626C1076 610 1094 606 1108 613C1102 628 1086 636 1071 633Z" fill="${SAGE}" fill-opacity=".28" stroke="${SAGE_DEEP}" stroke-width="2.8"/>
        <path d="M1014 712H1070L1062 750H1022Z" fill="${PAPER}"/>
      </g>
    `,
  },
]

function ogImage() {
  const headline = 'Čistoća koja se osjeti,'
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="ogbg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#faf7ee"/>
      <stop offset="1" stop-color="#efeadd"/>
    </linearGradient>
    <pattern id="ogdots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="#103833"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#ogbg)"/>
  <rect width="1200" height="630" fill="url(#ogdots)" opacity=".045"/>
  <circle cx="1000" cy="120" r="330" fill="#a9d4c3" opacity=".26"/>
  <circle cx="1058" cy="505" r="196" fill="none" stroke="#5c9a84" stroke-width="1.5" opacity=".28"/>
  <rect x="44" y="44" width="1112" height="542" rx="20" fill="none" stroke="#103833" stroke-width="1.4" opacity=".14"/>

  <g transform="translate(78 66) scale(.7)" color="#103833">
    ${logoMarkPaths}
  </g>
  <text x="258" y="144" font-family="Baskerville, 'Times New Roman', serif" font-size="54" fill="#103833">Obrt Čapalinka</text>
  <text x="261" y="180" font-family="'Helvetica Neue', Arial, sans-serif" font-size="16" letter-spacing="4.6" fill="#687a73">VL. SANELA ŠIMARA</text>

  <g transform="translate(920 84)">
    <rect width="188" height="38" rx="19" fill="#f7f4ec" stroke="#d3e3db"/>
    <circle cx="20" cy="19" r="4" fill="#5c9a84"/>
    <text x="34" y="24" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="600" fill="#103833">Donji Miholjac</text>
  </g>

  <line x1="78" y1="224" x2="1122" y2="224" stroke="#103833" opacity=".14"/>

  <text x="78" y="326" font-family="Baskerville, 'Times New Roman', serif" font-size="62" fill="#103833">${headline}</text>
  <text x="78" y="394" font-family="Baskerville, 'Times New Roman', serif" font-size="62" font-style="italic" fill="#356f5e">briga koja se pamti.</text>

  <text x="80" y="470" font-family="'Helvetica Neue', Arial, sans-serif" font-size="18" fill="#3f5e57">Čišćenje apartmana · Stambeni prostori · Završna čišćenja</text>
  <text x="80" y="498" font-family="'Helvetica Neue', Arial, sans-serif" font-size="18" fill="#3f5e57">Uređenje okoliša · Prijevoz robe i materijala</text>

  <line x1="78" y1="531" x2="1122" y2="531" stroke="#103833" opacity=".12"/>

  <text x="78" y="574" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" letter-spacing="2" fill="#687a73">POZOVITE NAS</text>
  <text x="220" y="577" font-family="Baskerville, 'Times New Roman', serif" font-size="30" fill="#103833">095 509 4124</text>
  <text x="1122" y="576" text-anchor="end" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15" fill="#687a73">Donji Miholjac · Hrvatska</text>

  <g transform="translate(1108 590) rotate(150) scale(.6)" opacity=".55">
    <path d="M0 0C28 20 48 47 58 80" stroke="#5c9a84" stroke-width="1.8" fill="none"/>
    <path d="M14 22C4 13 1 2 6-10C17-2 22 9 21 21Z" fill="#a9d4c3" fill-opacity=".3" stroke="#5c9a84" stroke-width="1.4"/>
    <path d="M30 42C20 34 16 23 20 11C31 18 36 29 35 41Z" fill="#a9d4c3" fill-opacity=".3" stroke="#5c9a84" stroke-width="1.4"/>
    <path d="M44 61C35 52 32 41 36 30C46 38 50 49 49 60Z" fill="#a9d4c3" fill-opacity=".3" stroke="#5c9a84" stroke-width="1.4"/>
  </g>
</svg>`
}

async function main() {
  await mkdir(galleryDir, { recursive: true })
  await mkdir(publicDir, { recursive: true })

  await writeFile(join(publicDir, 'logo-mark.svg'), logoSvg)
  await writeFile(join(publicDir, 'favicon.svg'), faviconSvg)
  await writeFile(join(publicDir, 'og-image.svg'), ogImage())

  for (const scene of scenes) {
    await writeFile(join(galleryDir, scene.file), frame(scene))
  }

  await Promise.all([
    sharp(Buffer.from(ogImage())).png().toFile(join(publicDir, 'og-image.png')),
    sharp(Buffer.from(iconSvg)).resize(180, 180).png().toFile(join(publicDir, 'apple-touch-icon.png')),
    sharp(Buffer.from(iconSvg)).resize(192, 192).png().toFile(join(publicDir, 'icon-192.png')),
    sharp(Buffer.from(iconSvg)).resize(512, 512).png().toFile(join(publicDir, 'icon-512.png')),
    sharp(Buffer.from(logoSvg)).resize(512, 512, { fit: 'contain', background: '#f7f4ec' }).png().toFile(join(publicDir, 'logo-mark.png')),
  ])

  const manifest = {
    name: 'Obrt Čapalinka',
    short_name: 'Čapalinka',
    description:
      'Čišćenje, uređenje okoliša i prijevoz robe i materijala u Donjem Miholjcu i okolici.',
    lang: 'hr',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f4ec',
    theme_color: '#0d2f2a',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }

  await writeFile(join(publicDir, 'site.webmanifest'), `${JSON.stringify(manifest, null, 2)}\n`)

  console.log(`Generated ${scenes.length} gallery illustrations, icons, manifest and og-image.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
