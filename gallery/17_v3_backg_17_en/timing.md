# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Do you happen to know when the fourth episode of Game of Thr
     2.86s  <ret> 발화 (turn1 첫 프레임)
     3.46s  agent 발화 시작: <ret> That’s a popular question, certainly.
     3.51s  user  발화 끝
     3.86s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.12s]: August 6, 2017 was the airdate for the fourth episode of Game of Thron
     5.24s  agent 발화 시작: The fourth episode of Game of Thrones aired on August sixth,
     5.58s  agent 발화 끝
     9.72s  user  발화 시작: Wow, that was a while ago.
     9.95s  agent 발화 끝
    11.29s  user  발화 끝
    11.50s  agent 발화 시작: Time does seem to slip by quickly, doesn't it?
    12.62s  user  발화 시작: Yeah, yeah.
    13.21s  <ret> 발화 (turn6 첫 프레임)
    13.25s  user  발화 끝
    13.81s  agent 발화 시작: <ret> Are you planning a re-watch? You can currently stream 
    13.95s  agent 발화 끝
    14.21s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.81s]: (tool result) Search results for "Game of Thrones streaming services" 
    21.04s  agent 발화 끝
    22.07s  user  발화 시작: Honestly, I can’t stand all that fantasy stuff.
    24.61s  user  발화 시작: Oh, that's interesting. I— I mean, do you ever work on build
    24.65s  user  발화 끝
    30.62s  user  발화 끝
