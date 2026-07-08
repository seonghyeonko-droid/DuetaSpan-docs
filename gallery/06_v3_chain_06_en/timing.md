# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I want to find a Thai restaurant in Chicago, Illinois.
     2.83s  agent 발화 시작: <ret> Let's see what Chicago has to offer… I found three Tha
     2.83s  <ret> 발화 (turn1 첫 프레임)
     2.91s  user  발화 끝
     4.27s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.89s]: (tool result) Thai restaurants in Chicago include Thai Dang, Star of S
    12.33s  agent 발화 끝
    12.81s  user  발화 시작: Oh, Thai Dang sounds good. What’s their address?
    15.88s  agent 발화 시작: <ret> Certainly, I can look that up for you… Thai Dang is at
    15.89s  <ret> 발화 (turn3 첫 프레임)
    16.09s  user  발화 끝
    17.65s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.81s]: (tool result) Thai Dang is located at 4339 N Broadway, Chicago, IL 606
    24.45s  user  발화 시작: Can you make a reservation for two there tomorrow at seven p
    24.45s  agent 발화 끝
    28.18s  agent 발화 시작: <ret> Happy to assist with that booking… You’re all set! I’v
    28.18s  <ret> 발화 (turn5 첫 프레임)
    28.18s  ⚡SPAN 주입 [d'=0.00s / d_lead=2.40s]: (tool result) Your reservation for two at Thai Dang tomorrow at 7:00 P
    28.25s  user  발화 끝
    38.56s  agent 발화 끝
