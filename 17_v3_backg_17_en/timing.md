# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was just wondering, what’s a nor | S2 Oh, wow, that's a pretty big range | S3 Did you remember to take the trash | S4 So, anything outside that range is

     0.00s  user  발화 시작: I was just wondering, what’s a normal heart rate?
     2.86s  <ret> 발화 (turn1 첫 프레임)
     3.24s  user  발화 끝
     3.26s  agent 발화 시작: <ret> That’s a good question to ask— For most adults, a norm
     3.82s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.05s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
    11.13s  agent 발화 끝
    11.24s  user  발화 시작: Oh, wow, that's a pretty big range. Is there an ideal number
    15.57s  <ret> 발화 (turn3 첫 프레임)
    15.81s  agent 발화 시작: <ret> It depends a little on fitness— A healthy heart rate i
    15.82s  user  발화 끝
    17.33s  ⚡SPAN 주입 [d'=1.76s / d_lead=1.88s]: A healthy heart rate typically falls between 50 and 90 beats per minut
    22.71s  agent 발화 끝
    23.39s  user  발화 시작: Did you remember to take the trash out?
    26.30s  user  발화 시작: So, anything outside that range is something to worry about?
    26.35s  user  발화 끝
    30.79s  user  발화 끝
