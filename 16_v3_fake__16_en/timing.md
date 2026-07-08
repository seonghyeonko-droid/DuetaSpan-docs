# v3_fake__16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What’s the area code for Washington, D.C.?
     5.16s  <ret> 발화 (turn1 첫 프레임)
     5.74s  user  발화 끝
     5.76s  agent 발화 시작: <ret> That’s a simple one. The area code for Washington, D.C
     6.16s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.89s]: Washington, D.C.’s area code is 202.
    14.43s  agent 발화 끝
    14.96s  user  발화 시작: Oh, okay. And what about for New York City?
    15.92s  <ret> 발화 (turn3 첫 프레임)
    16.41s  agent 발화 시작: <ret> New York is a bit different. New York City actually us
    16.56s  ⚡SPAN 주입 [d'=0.64s / d_lead=0.87s]: New York City has area codes 212, 646, 347, 718, 917, and 332.
    16.61s  user  발화 끝
    19.26s  user  발화 시작: Wow, that’s a lot! Is there a reason for so many?
    19.32s  agent 발화 끝
    22.26s  user  발화 끝
    22.41s  agent 발화 시작: Population growth, primarily. As the city grew, they needed 
    30.33s  agent 발화 끝
    30.93s  user  발화 시작: I see. Uh, what’s the capital of Australia?
    34.66s  <ret> 발화 (turn7 첫 프레임)
    34.82s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.52s]: Canberra is the capital city of Australia.
    35.25s  agent 발화 시작: <ret> A fascinating question. Canberra is the capital city o
    35.46s  user  발화 끝
    37.49s  user  발화 시작: Interesting. What’s the population of Canberra?
    37.51s  agent 발화 끝
    41.82s  <ret> 발화 (turn9 첫 프레임)
    42.41s  agent 발화 시작: <ret> Let me recall that for you. Canberra’s estimated popul
    42.54s  ⚡SPAN 주입 [d'=0.72s / d_lead=0.85s]: The estimated population of Canberra is 462,770 as of 2023.
    42.63s  user  발화 끝
    45.37s  agent 발화 끝
    46.32s  user  발화 시작: That’s not as big as I thought. What’s the largest city in A
    49.96s  <ret> 발화 (turn11 첫 프레임)
    50.28s  ⚡SPAN 주입 [d'=0.32s / d_lead=1.95s]: Sydney is the most populous city in Australia, with 5.312 million resi
    50.56s  agent 발화 시작: <ret> That would be Sydney. Sydney is Australia’s most popul
    50.72s  user  발화 끝
    59.61s  user  발화 시작: Five million… impressive. Um, what’s the currency used in Ja
    59.83s  agent 발화 끝
    64.67s  <ret> 발화 (turn13 첫 프레임)
    65.22s  user  발화 끝
    65.27s  agent 발화 시작: <ret> A very practical question. The currency of Japan is th
    65.67s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.82s]: The currency used in Japan is the Japanese yen.
    70.19s  user  발화 시작: And how is that written? Like, what’s the symbol?
    70.73s  agent 발화 끝
    72.96s  <ret> 발화 (turn15 첫 프레임)
    73.33s  user  발화 끝
    73.56s  agent 발화 시작: <ret> It's quite simple, really. The symbol for the Japanese
    73.96s  ⚡SPAN 주입(IRRELEVANT) [d'=1.00s / d_lead=1.81s]: (tool result) Current time in Honolulu is 8:15 PM HST.
    81.69s  user  발화 시작: Okay, ¥. Good to know. What's the highest mountain in Africa
    81.72s  agent 발화 끝
    85.23s  <ret> 발화 (turn17 첫 프레임)
    85.81s  user  발화 끝
    85.83s  agent 발화 시작: <ret> That’s a majestic peak. Mount Kilimanjaro is the highe
    86.19s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.13s]: The Japanese yen’s symbol is ¥, and its ISO code is JPY.
    95.71s  user  발화 시작: Wow, that’s high. Is it volcanic?
    95.94s  agent 발화 끝
    97.69s  <ret> 발화 (turn19 첫 프레임)
    98.28s  agent 발화 시작: <ret> Yes, it is a dormant volcano.
    98.29s  user  발화 끝
    98.41s  ⚡SPAN 주입 [d'=0.72s / d_lead=2.54s]: Mount Kilimanjaro is the highest mountain in Africa, at 5,895 meters.
   100.83s  agent 발화 끝
   101.35s  user  발화 시작: Oh! What about the longest river in the world?
   103.97s  <ret> 발화 (turn21 첫 프레임)
   104.57s  agent 발화 시작: <ret> That's a classic geography question. The Nile River is
   104.58s  user  발화 끝
   104.97s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.22s]: The Nile River is generally regarded as the longest river in the world
   111.62s  user  발화 시작: And where does the Nile flow?
   111.66s  agent 발화 끝
   113.11s  <ret> 발화 (turn23 첫 프레임)
   113.71s  agent 발화 시작: <ret> It flows through several countries. The Nile River flo
   113.88s  user  발화 끝
   114.11s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.54s]: The Nile flows through eleven countries, including Egypt and Sudan.
   121.82s  agent 발화 끝
   123.17s  user  발화 시작: Eleven! That’s amazing. What’s the smallest country in the w
   126.95s  <ret> 발화 (turn25 첫 프레임)
   127.55s  agent 발화 시작: <ret> It’s quite a tiny place. Vatican City is the world’s s
   127.71s  user  발화 끝
   127.95s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.55s]: Vatican City is the smallest country in the world, covering 0.44 squar
   136.73s  agent 발화 끝
