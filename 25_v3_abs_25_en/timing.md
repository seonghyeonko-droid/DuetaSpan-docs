# v3_abs_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Who decided not to fund basic family planning?
     2.38s  <ret> 발화 (turn1 첫 프레임)
     2.86s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.89s]: (no information found)
     2.98s  agent 발화 시작: <ret> That’s a tough one, I’m afraid.
     3.05s  user  발화 끝
     4.88s  agent 발화 끝
     4.94s  agent 발화 시작: I’ve searched extensively, and unfortunately, no single deci
    15.57s  agent 발화 끝
    15.74s  user  발화 시작: Oh. Well, what’s the highest mountain in Africa?
    19.06s  <ret> 발화 (turn4 첫 프레임)
    19.66s  agent 발화 시작: <ret> Now that’s a question I can answer! Mount Kilimanjaro 
    19.67s  user  발화 끝
    20.06s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.62s]: Mount Kilimanjaro, located in Tanzania, is the highest mountain in Afr
    29.77s  agent 발화 끝
    29.84s  user  발화 시작: Five thousand… wow. Have any planes crashed into it?
    33.65s  <ret> 발화 (turn6 첫 프레임)
    34.24s  agent 발화 시작: <ret> Sadly, yes, there have been incidents. There were cras
    34.42s  user  발화 끝
    34.65s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.47s]: Several aircraft crashes have occurred on Mount Kilimanjaro, including
    43.70s  agent 발화 끝
    43.83s  user  발화 시작: That’s terrible. What kind of plane was the one in 2000?
    47.71s  <ret> 발화 (turn8 첫 프레임)
    48.31s  agent 발화 시작: <ret> Let me check the details for you. The Precision Air fl
    48.41s  user  발화 끝
    48.71s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.40s]: The Precision Air flight that crashed in 2000 was a Boeing 737-200.
    56.80s  user  발화 시작: Boeing 737… I flew those for years. What's the capital of Au
    56.88s  agent 발화 끝
    61.47s  <ret> 발화 (turn10 첫 프레임)
    62.06s  agent 발화 시작: <ret> A change of pace, certainly!
    62.17s  user  발화 끝
    62.47s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.22s]: Canberra is the capital city of Australia.
    64.28s  agent 발화 끝
    64.73s  agent 발화 시작: Canberra serves as the capital city for Australia. A planned
    70.17s  user  발화 시작: Planned, huh? Was it always the capital?
    70.34s  agent 발화 끝
    72.68s  <ret> 발화 (turn13 첫 프레임)
    73.28s  agent 발화 시작: <ret> Not from the very beginning, no. Canberra was a compro
    73.40s  user  발화 끝
    73.68s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.21s]: Sydney and Melbourne were rival candidates for the capital before Canb
    82.13s  agent 발화 끝
    84.24s  user  발화 시작: [laugh] That’s funny. What’s the population of Japan?
    87.07s  <ret> 발화 (turn15 첫 프레임)
    87.66s  agent 발화 시작: <ret> A large population, indeed. Japan’s population is arou
    87.80s  user  발화 끝
    88.03s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.00s]: As of 2023, the population of Japan is approximately 123.3 million.
    97.58s  user  발화 시작: One hundred… That’s a lot of people. What’s the longest rive
    97.67s  agent 발화 끝
   102.16s  <ret> 발화 (turn17 첫 프레임)
   102.76s  agent 발화 시작: <ret> Now that's a geographical challenge. The Amazon River 
   102.82s  user  발화 끝
   103.12s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.11s]: The Amazon River is generally considered the longest river in the worl
   112.86s  agent 발화 끝
   113.16s  user  발화 시작: Six thousand… wow. What’s the currency of Brazil?
   117.10s  <ret> 발화 (turn19 첫 프레임)
   117.65s  user  발화 끝
   117.69s  agent 발화 시작: <ret> Another good question. Brazil uses the Brazilian real,
   117.98s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.39s]: The official currency of Brazil is the Brazilian real, abbreviated as 
   126.49s  agent 발화 끝
   127.00s  user  발화 시작: BRL… Got it. What’s the highest waterfall in the world?
   130.48s  <ret> 발화 (turn21 첫 프레임)
   131.08s  agent 발화 시작: <ret> A dramatic sight, that one. Angel Falls in Venezuela m
   131.26s  user  발화 끝
   131.48s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.34s]: Angel Falls in Venezuela is the world’s highest uninterrupted waterfal
   141.37s  agent 발화 끝
   141.45s  user  발화 시작: Nine hundred… incredible. What’s the largest desert in the w
   145.74s  <ret> 발화 (turn23 첫 프레임)
   146.17s  user  발화 끝
   146.34s  agent 발화 시작: <ret> That depends on how you define "desert."
   146.74s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.54s]: The Antarctic Polar Desert is the largest desert in the world, coverin
   148.88s  agent 발화 끝
   148.94s  agent 발화 시작: The Antarctic Polar Desert covers fourteen million square ki
   157.60s  user  발화 시작: Antarctic… that's surprising. What’s the smallest country in
   157.65s  agent 발화 끝
   160.98s  <ret> 발화 (turn26 첫 프레임)
   161.58s  agent 발화 시작: <ret> A tiny nation, indeed. Vatican City covers zero point 
   161.77s  user  발화 끝
   161.94s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.49s]: Vatican City is the smallest country in the world, with an area of onl
   172.65s  user  발화 시작: Less than one square kilometer! What's the population of Vat
   172.80s  agent 발화 끝
   176.84s  <ret> 발화 (turn28 첫 프레임)
   177.44s  agent 발화 시작: <ret> A very small population, as you'd expect. Vatican City
   177.55s  user  발화 끝
   177.84s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.17s]: The population of Vatican City is approximately 825 people as of 2019.
   187.42s  agent 발화 끝
   187.48s  user  발화 시작: Eight hundred… That’s a village. What’s the speed of light?
   191.19s  <ret> 발화 (turn30 첫 프레임)
   191.78s  agent 발화 시작: <ret> A fundamental constant, that one.
   192.02s  user  발화 끝
   192.19s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.40s]: The speed of light in a vacuum is approximately 299,792,458 meters per
   194.04s  agent 발화 시작: Light travels at two hundred ninety-nine million seven hundr
   194.18s  agent 발화 끝
   203.66s  user  발화 시작: Two hundred ninety-nine… impressive. What year did the Titan
   203.73s  agent 발화 끝
   208.22s  <ret> 발화 (turn33 첫 프레임)
   208.82s  agent 발화 시작: <ret> A tragic event, still remembered today. The Titanic sa
   208.99s  user  발화 끝
   209.22s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.82s]: The Titanic sank in the North Atlantic Ocean on April 15, 1912.
   218.16s  user  발화 시작: Nineteen twelve… so long ago. What’s the capital of Canada?
   218.24s  agent 발화 끝
   222.16s  <ret> 발화 (turn35 첫 프레임)
   222.75s  agent 발화 시작: <ret> A beautiful city, that one.
   222.83s  user  발화 끝
   222.88s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.75s]: Ottawa is the capital city of Canada.
   224.50s  agent 발화 끝
   224.54s  agent 발화 시작: Ottawa is the capital city for Canada. I’ve flown through th
   230.76s  agent 발화 끝
   231.64s  user  발화 시작: Ottawa… interesting. What's the largest ocean in the world?
   235.74s  <ret> 발화 (turn38 첫 프레임)
   236.27s  user  발화 끝
   236.33s  agent 발화 시작: <ret> A vast expanse of water. The Pacific Ocean is the larg
   236.70s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.00s]: The Pacific Ocean is the largest and deepest of Earth’s oceanic divisi
   245.03s  user  발화 시작: The Pacific… makes sense. What's the population of Australia
   245.14s  agent 발화 끝
   249.10s  <ret> 발화 (turn40 첫 프레임)
   249.69s  agent 발화 시작: <ret> A growing nation, that one. Australia's population is 
   249.80s  user  발화 끝
   249.90s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.94s]: As of 2023, the population of Australia is approximately 26.4 million.
   258.22s  agent 발화 끝
   259.00s  user  발화 시작: Twenty-six million… okay. Thanks, Moshi!
   261.99s  agent 발화 시작: My pleasure entirely. Always happy to share a bit of knowled
   262.23s  user  발화 끝
   267.32s  agent 발화 끝
