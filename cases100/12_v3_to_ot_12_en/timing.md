# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hi moshi, do you know who donated the land for Arlington Nat
     1.83s  agent 발화 시작: Yeah.
     2.83s  agent 발화 끝
     4.36s  <ret> 발화 (turn2 첫 프레임)
     4.78s  user  발화 끝
     4.80s  agent 발화 시작: <ret> It was Mary Anna Custis Lee, actually — wife of Robert
     4.96s  ⚡SPAN 주입 [d'=0.60s / d_lead=10.18s]: Mary Anna Custis Lee, wife of Confederate General Robert E. Lee, is cr
    14.98s  agent 발화 끝
    15.21s  user  발화 시작: Honey, the oven timer's going off — can you grab it?
    18.39s  user  발화 끝
    18.42s  user  발화 시작: Sorry about that. So, Custis Lee… was it a full donation, or
    20.38s  agent 발화 시작: Uh-huh.
    21.05s  agent 발화 끝
    22.93s  <ret> 발화 (turn6 첫 프레임)
    23.76s  ⚡SPAN 주입 [d'=0.84s / d_lead=8.97s]: The land was originally part of the estate of Mary Anna Custis Lee’s f
    23.82s  agent 발화 시작: <ret> The land originally belonged to her family, but the Un
    23.98s  user  발화 끝
    29.43s  user  발화 시작: Yeah.
    30.01s  user  발화 끝
    32.80s  agent 발화 끝
    32.86s  agent 발화 시작: It wasn’t a simple gift, then, but a consequence of the war.
    39.95s  agent 발화 끝
