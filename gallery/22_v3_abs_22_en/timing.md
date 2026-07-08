# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Who is Stan L. Holland?
     1.06s  <ret> 발화 (turn1 첫 프레임)
     1.63s  agent 발화 시작: <ret> That’s a name I don’t immediately recognize.
     1.75s  user  발화 끝
     2.06s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.77s]: (no information found)
     4.40s  agent 발화 끝
     4.74s  agent 발화 시작: I’m afraid I have no information about a person named Stan L
     8.91s  user  발화 시작: Oh, okay. Well, what about Dr. Sylvia Earle?
     9.00s  agent 발화 끝
    11.03s  <ret> 발화 (turn4 첫 프레임)
    11.61s  agent 발화 시작: <ret> Ah, a much more familiar name— Sylvia Earle is a marin
    11.76s  user  발화 끝
    12.03s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.56s]: Sylvia Earle is an American marine biologist, explorer, author, and le
    15.81s  user  발화 시작: Uh-huh.
    16.31s  user  발화 끝
    19.23s  agent 발화 시작: She’s truly a pioneer in her field.
    19.72s  agent 발화 끝
    21.63s  agent 발화 끝
    22.10s  user  발화 시작: Is she still doing research?
    23.85s  agent 발화 시작: She—
    24.04s  user  발화 끝
    24.10s  user  발화 시작: I mean, is she still actively involved in ocean exploration?
    24.62s  agent 발화 끝
    27.34s  <ret> 발화 (turn10 첫 프레임)
    27.93s  agent 발화 시작: <ret> Yes, she remains quite active. She founded Mission Blu
    28.12s  user  발화 끝
    28.34s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.09s]: Dr. Earle founded Mission Blue, a global initiative to protect "Hope S
    37.90s  user  발화 시작: Those “Hope Spots” sound interesting. What makes a place a “
    37.95s  agent 발화 끝
    41.62s  <ret> 발화 (turn12 첫 프레임)
    42.20s  agent 발화 시작: <ret> They’re areas critical to ocean health.
    42.38s  user  발화 끝
    42.62s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.82s]: Hope Spots are marine areas that contribute to ocean health, offering 
    45.03s  agent 발화 끝
    45.56s  agent 발화 시작: They are marine areas that contribute to the ocean's health,
    50.89s  agent 발화 끝
