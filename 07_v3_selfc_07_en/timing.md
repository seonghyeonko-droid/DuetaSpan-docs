# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 Let’s do three forty-five. | S3 Right. Is it walkable to restauran | S4 I'm a little nervous about the who

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.67s  <ret> 발화 (turn1 첫 프레임)
     3.91s  agent 발화 시작: <ret> Absolutely, let’s get that scheduled for you. I’ve sch
     4.07s  user  발화 끝
     4.71s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.91s]: (tool result) A viewing at The Grandview Lofts is available on June fi
    13.88s  agent 발화 끝
    14.16s  user  발화 시작: That’s… uh, actually, make that June sixteenth, if possible.
    19.09s  <ret> 발화 (turn3 첫 프레임)
    19.16s  user  발화 끝
    19.25s  agent 발화 시작: <ret> Of course, let me check availability for the sixteenth
    20.53s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.38s]: (tool result) A viewing at The Grandview Lofts is available on June si
    30.87s  user  발화 시작: Let’s do three forty-five.
    30.93s  agent 발화 끝
    32.54s  <ret> 발화 (turn5 첫 프레임)
    32.78s  agent 발화 시작: <ret> Excellent choice, finalizing that for you now. Your vi
    32.94s  user  발화 끝
    34.38s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.01s]: (tool result) Your viewing at The Grandview Lofts on June sixteenth at
    43.89s  user  발화 시작: Great, thanks! Do you think it’s a good area for someone sta
    43.95s  agent 발화 끝
    49.28s  agent 발화 시작: That’s a wonderful question. The Grandview Lofts area is bec
    49.30s  user  발화 끝
    57.53s  agent 발화 끝
    57.67s  user  발화 시작: Right. Is it walkable to restaurants and things?
    60.59s  <ret> 발화 (turn9 첫 프레임)
    60.63s  user  발화 끝
    60.73s  agent 발화 시작: <ret> Certainly, let me quickly check walkability scores. Th
    62.02s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.23s]: (tool result) The Grandview Lofts has a Walk Score of 88, indicating a
    66.89s  user  발화 시작: Right.
    67.62s  user  발화 끝
    71.82s  agent 발화 끝
    72.01s  user  발화 시작: That sounds perfect. [laugh]
    74.58s  agent 발화 시작: I’m so glad to hear that! It's important to feel comfortable
    74.59s  user  발화 끝
    81.42s  user  발화 시작: I'm a little nervous about the whole move, to be honest.
    81.53s  agent 발화 끝
    84.06s  agent 발화 시작: It’s perfectly normal to feel anxious with big changes. Taki
    84.20s  user  발화 끝
    93.38s  agent 발화 끝
    93.43s  user  발화 시작: That’s true. I— I mean, I'm trying to focus on the positive.
    96.99s  user  발화 끝
    97.39s  agent 발화 시작: Focusing on the positives is a fantastic strategy. And remem
   107.72s  agent 발화 끝
