# v3_fake__16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was reading about World War Two… uh, where did the US drop
     5.16s  <ret> 발화 (turn1 첫 프레임)
     5.74s  user  발화 끝
     5.76s  agent 발화 시작: <ret> That’s a significant question. The United States dropp
     6.12s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.04s]: The United States dropped atomic bombs on the Japanese cities of Hiros
    14.43s  agent 발화 끝
    14.96s  user  발화 시작: Just the two cities, then?
    16.44s  agent 발화 시작: That is correct, only those two.
    16.61s  user  발화 끝
    19.29s  user  발화 시작: And when exactly was Nagasaki bombed?
    19.36s  agent 발화 끝
    21.66s  <ret> 발화 (turn5 첫 프레임)
    22.25s  agent 발화 시작: <ret> Let me share the specific date. Nagasaki was bombed on
    22.29s  user  발화 끝
    22.66s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.40s]: The city of Nagasaki was bombed on August 9, 1945.
    30.17s  agent 발화 끝
    30.77s  user  발화 시작: [sigh] Terrible. Was it— was it a planned target from the st
    34.50s  <ret> 발화 (turn7 첫 프레임)
    35.09s  agent 발화 시작: <ret> That’s a complex piece of history.
    35.30s  user  발화 끝
    35.50s  ⚡SPAN 주입(IRRELEVANT) [d'=1.00s / d_lead=2.26s]: (tool result) Current conditions in Ulaanbaatar are clear skies, 18 de
    37.28s  agent 발화 시작: Initial targets were different, but circumstances shifted th
    37.35s  agent 발화 끝
    42.31s  user  발화 시작: So, Nagasaki wasn’t the first choice?
    42.42s  agent 발화 끝
    45.27s  user  발화 끝
