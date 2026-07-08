# v3_rag_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I’m planning a road trip and I’m trying to figure out the hi
     4.12s  user  발화 끝
     4.16s  agent 발화 시작: Road trips are wonderful! It’s a great way to see the countr
     8.04s  agent 발화 끝
     8.50s  user  발화 시작: Uh, yeah, absolutely. So, I know Route 146 and Interstate 89
    16.00s  <ret> 발화 (turn3 첫 프레임)
    16.58s  agent 발화 시작: <ret> Let’s see… Interstate 90 also runs through Schenectady
    16.76s  user  발화 끝
    16.88s  ⚡SPAN 주입 [d'=0.88s / d_lead=0.97s]: Interstate 90 passes through Schenectady, New York, connecting to Bost
    23.35s  agent 발화 끝
    23.42s  user  발화 시작: Oh, okay, I-90. That’s helpful. Is there anything… historica
    29.03s  user  발화 끝
    29.10s  agent 발화 시작: It’s a city with a surprisingly rich history, actually. Quit
    34.33s  user  발화 시작: [curious] Like what, specifically? Something memorable?
    34.42s  agent 발화 끝
    36.13s  <ret> 발화 (turn7 첫 프레임)
    36.69s  agent 발화 시작: <ret> Indeed there is… A massacre occurred in Schenectady in
    36.91s  user  발화 끝
    36.93s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.46s]: Schenectady was the site of a 1690 massacre during King William’s War,
    44.99s  agent 발화 끝
    45.10s  user  발화 시작: Wow, a massacre… That's… grim. Was it a large settlement bac
    50.40s  <ret> 발화 (turn9 첫 프레임)
    50.99s  agent 발화 시작: <ret> It was a developing area… In 1684, Schenectady consist
    51.21s  user  발화 끝
    51.40s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.47s]: By 1684, Schenectady contained approximately thirty houses and a churc
    60.85s  user  발화 시작: Thirty houses… That *is* small. So it was really vulnerable 
    60.87s  agent 발화 끝
    66.06s  agent 발화 시작: It certainly was. A small settlement in a new land always fa
    66.17s  user  발화 끝
    71.57s  agent 발화 끝
    71.58s  user  발화 시작: I— I mean, is there anything *less* grim about its history? 
    76.59s  <ret> 발화 (turn13 첫 프레임)
    76.67s  ⚡SPAN 주입 [d'=0.08s / d_lead=1.39s]: Union College, founded in 1795, is located in Schenectady and is the o
    76.95s  user  발화 끝
    77.18s  agent 발화 시작: <ret> Certainly, there is! Union College, founded in 1795, i
    86.91s  agent 발화 끝
