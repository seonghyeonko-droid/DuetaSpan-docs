# v3_backg_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What’s the population of New Jersey?
     2.40s  <ret> 발화 (turn1 첫 프레임)
     3.00s  agent 발화 시작: <ret> That’s a common question. The population of New Jersey
     3.05s  user  발화 끝
     3.40s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.12s]: New Jersey’s population was 9,032,872 as of July 1, 2023.
    12.55s  agent 발화 끝
    12.60s  user  발화 시작: Wow, that's a lot! Is it densely populated?
    16.86s  user  발화 끝
    17.02s  agent 발화 시작: Absolutely, it is one of the most densely populated states.
    26.71s  agent 발화 끝
    26.82s  user  발화 시작: Compared to, say, Montana?
    30.12s  <ret> 발화 (turn5 첫 프레임)
    30.71s  agent 발화 시작: <ret> Let me give you a comparison. New Jersey has twelve hu
    30.80s  user  발화 끝
    31.12s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.59s]: New Jersey has 1,215 people per square mile, while Montana has 7.1 peo
    40.63s  agent 발화 끝
    41.57s  user  발화 시작: Did you remember to take the chicken out of the freezer?
    44.69s  user  발화 시작: That’s… quite a difference! What’s the capital of New Jersey
    44.79s  user  발화 끝
    50.85s  <ret> 발화 (turn8 첫 프레임)
    50.85s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.86s]: Trenton is the capital of New Jersey, and was incorporated as a city i
    51.18s  user  발화 끝
    51.45s  agent 발화 시작: <ret> It's a historic city. Trenton is the capital of New Je
    55.11s  agent 발화 끝
