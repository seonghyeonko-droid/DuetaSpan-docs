# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What has been in use since 1015?
     2.52s  <ret> 발화 (turn1 첫 프레임)
     2.58s  user  발화 끝
     2.60s  agent 발화 시작: <ret> That’s a fascinating question, though a precise answer
     4.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.58s]: (no information found)
     5.60s  user  발화 시작: Yeah.
     6.09s  user  발화 끝
     7.10s  agent 발화 시작: I’ve searched my records, and unfortunately, nothing specifi
     7.17s  agent 발화 끝
    14.61s  agent 발화 끝
    15.04s  user  발화 시작: Oh. Well, what about the oldest cathedral still actively use
    20.76s  <ret> 발화 (turn5 첫 프레임)
    20.82s  agent 발화 시작: <ret> Determining the oldest continuously used cathedral… Wi
    21.07s  user  발화 끝
    22.60s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.31s]: Winchester Cathedral began construction in 1079 and has been in near-c
    31.31s  agent 발화 끝
    31.50s  user  발화 시작: That’s quite a long time! Were there many changes made to it
    36.50s  user  발화 끝
    36.93s  agent 발화 시작: Oh, absolutely. A cathedral evolves with the times, you see.
    45.60s  agent 발화 끝
    45.68s  user  발화 시작: I— I mean, were there major structural alterations?
    48.87s  agent 발화 시작: Indeed. From the twelfth through the sixteenth centuries, Wi
    49.00s  user  발화 끝
    56.84s  agent 발화 끝
