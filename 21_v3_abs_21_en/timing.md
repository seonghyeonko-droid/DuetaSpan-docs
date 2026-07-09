# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 How many senators are there in the | S2 Hmm, that's a lot. Do they all ser | S3 Speaking of work, what’s the bigge | S4 True. It must be. What kind of bac

     0.00s  user  발화 시작: How many senators are there in the French Senate?
     2.57s  <ret> 발화 (turn1 첫 프레임)
     2.65s  agent 발화 시작: <ret> That’s a good question, and one I’ve been asked before
     2.77s  user  발화 끝
     4.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.66s]: (no information found)
     6.01s  user  발화 시작: Okay.
     6.64s  user  발화 끝
     8.12s  user  발화 시작: Oh. Well, what about the US Senate? How many senators are th
     8.31s  agent 발화 끝
    12.44s  <ret> 발화 (turn4 첫 프레임)
    12.56s  user  발화 끝
    12.68s  agent 발화 시작: <ret> There are one hundred senators. The US Senate has two 
    14.04s  ⚡SPAN 주입 [d'=1.60s / d_lead=1.80s]: The United States Senate is composed of one hundred senators, two from
    18.80s  agent 발화 끝
    18.86s  user  발화 시작: Hmm, that's a lot. Do they all serve the same length of term
    23.33s  <ret> 발화 (turn6 첫 프레임)
    23.40s  agent 발화 시작: <ret> Senators serve six-year terms. US Senators are elected
    23.62s  user  발화 끝
    23.83s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.59s]: US Senators serve six-year terms, with approximately one-third of the 
    25.95s  user  발화 시작: Yeah, yeah.
    26.54s  user  발화 끝
    31.38s  agent 발화 끝
    31.64s  user  발화 시작: Right. That makes sense. So, it's staggered.
    35.05s  agent 발화 시작: Exactly. Staggered terms help ensure continuity and stabilit
    35.25s  user  발화 끝
    39.96s  user  발화 시작: Speaking of work, what’s the biggest challenge facing senato
    40.05s  agent 발화 끝
    44.13s  user  발화 끝
    44.24s  agent 발화 시작: That's a complex question, and it varies depending on who yo
    51.88s  agent 발화 끝
    53.00s  user  발화 시작: Yeah, I've noticed that. It’s frustrating.
    55.59s  user  발화 끝
    55.61s  agent 발화 시작: It is, and it impacts their ability to address crucial issue
    59.02s  user  발화 시작: Exactly.
    59.75s  user  발화 끝
    62.98s  agent 발화 끝
    62.99s  agent 발화 시작: It's important to remember that even with disagreements, sen
    67.60s  user  발화 시작: Okay.
    68.23s  user  발화 끝
    69.79s  user  발화 시작: True. It must be. What kind of background do most of them ha
    69.80s  agent 발화 끝
    73.54s  <ret> 발화 (turn18 첫 프레임)
    73.62s  agent 발화 시작: <ret> Many senators have legal or business backgrounds. Prio
    73.86s  user  발화 끝
    75.06s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.63s]: Prior to serving in the Senate, many senators have experience as lawye
    79.03s  user  발화 시작: Right.
    79.53s  user  발화 끝
    81.88s  agent 발화 끝
    81.99s  user  발화 시작: Interesting. Well, thanks for the information, Nias.
    85.14s  user  발화 끝
